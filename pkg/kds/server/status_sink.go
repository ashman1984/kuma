package server

import (
	"context"
	"time"

	"github.com/go-logr/logr"
	"google.golang.org/protobuf/proto"

	system_proto "github.com/kumahq/kuma/api/system/v1alpha1"
	"github.com/kumahq/kuma/pkg/core/resources/apis/system"
	"github.com/kumahq/kuma/pkg/core/resources/manager"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/store"
	"github.com/kumahq/kuma/pkg/core/user"
	"github.com/kumahq/kuma/pkg/multitenant"
)

type ZoneInsightSink interface {
	Start(stop <-chan struct{})
}

type ZoneInsightStore interface {
	Upsert(ctx context.Context, zone string, subscription *system_proto.KDSSubscription) error
}

func NewZoneInsightSink(accessor StatusAccessor, flushTicker func() *time.Ticker, generationTicker func() *time.Ticker, flushBackoff time.Duration, store ZoneInsightStore, log logr.Logger, hashingFn multitenant.Hashing, tenantFn multitenant.Tenant) ZoneInsightSink {
	return &zoneInsightSink{
		flushTicker:      flushTicker,
		generationTicker: generationTicker,
		flushBackoff:     flushBackoff,
		accessor:         accessor,
		store:            store,
		log:              log,
		hashingFn:        hashingFn,
		tenantFn:         tenantFn,
	}
}

var _ ZoneInsightSink = &zoneInsightSink{}

type zoneInsightSink struct {
	flushTicker      func() *time.Ticker
	generationTicker func() *time.Ticker
	flushBackoff     time.Duration
	accessor         StatusAccessor
	store            ZoneInsightStore
	log              logr.Logger
	hashingFn        multitenant.Hashing
	tenantFn         multitenant.Tenant
}

func (s *zoneInsightSink) Start(stop <-chan struct{}) {
	flushTicker := s.flushTicker()
	defer flushTicker.Stop()

	generationTicker := s.generationTicker()
	defer generationTicker.Stop()

	lastStoredState := make(map[string]*system_proto.KDSSubscription)
	var generation uint32

	flush := func(ctx context.Context) {
		zone, currentState := s.accessor.GetStatus()
		select {
		case <-generationTicker.C:
			generation++
		default:
		}
		currentState.Generation = generation
		if proto.Equal(currentState, lastStoredState[s.hashingFn.ResourceHashKey(ctx)]) {
			return
		}

		if err := s.store.Upsert(ctx, zone, currentState); err != nil {
			if store.IsResourceConflict(err) {
				s.log.V(1).Info("failed to flush ZoneInsight because it was updated in other place. Will retry in the next tick", "zone", zone)
			} else {
				s.log.Error(err, "failed to flush zone status", "zone", zone)
			}
		} else {
			s.log.V(1).Info("ZoneInsight saved", "zone", zone, "subscription", currentState)
			lastStoredState[s.hashingFn.ResourceHashKey(ctx)] = currentState
		}
	}

	for {
		select {
		case <-flushTicker.C:
			tenantIds, err := s.tenantFn.GetTenantIds(context.Background())
			if err != nil {
				s.log.Error(err, "could not get contexts")
			}
			for _, tenantId := range tenantIds {
				flush(multitenant.WithTenant(context.TODO(), tenantId))
			}
			time.Sleep(s.flushBackoff)
		case <-stop:
			tenantIds, err := s.tenantFn.GetTenantIds(context.Background())
			if err != nil {
				s.log.Error(err, "could not get contexts")
			}
			for _, tenantId := range tenantIds {
				flush(multitenant.WithTenant(context.TODO(), tenantId))
			}
			return
		}
	}
}

func NewZonesInsightStore(resManager manager.ResourceManager) ZoneInsightStore {
	return &zoneInsightStore{resManager}
}

var _ ZoneInsightStore = &zoneInsightStore{}

type zoneInsightStore struct {
	resManager manager.ResourceManager
}

func (s *zoneInsightStore) Upsert(ctx context.Context, zone string, subscription *system_proto.KDSSubscription) error {
	ctx = user.Ctx(ctx, user.ControlPlane)

	key := core_model.ResourceKey{
		Name: zone,
	}
	zoneInsight := system.NewZoneInsightResource()
	return manager.Upsert(ctx, s.resManager, key, zoneInsight, func(resource core_model.Resource) error {
		return zoneInsight.Spec.UpdateSubscription(subscription)
	})
}
