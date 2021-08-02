// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.14.0
// source: mesh/v1alpha1/gateway.proto

package v1alpha1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	_ "github.com/kumahq/kuma/api/mesh"
	v1alpha1 "github.com/kumahq/kuma/api/system/v1alpha1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Gateway_TLS_Mode int32

const (
	// NONE is not a valid TLS mode. Ether TERMINATE or PASSTHROUGH must
	// be explicitly configured.
	Gateway_TLS_NONE Gateway_TLS_Mode = 0
	// The TLS session between the downstream client and the Gateway
	// is terminated at the Gateway. This mode requires the certificate
	// field to be set.
	Gateway_TLS_TERMINATE Gateway_TLS_Mode = 1
	// The TLS session is NOT terminated by the Gateway. This implies
	// that the Gateway can't decipher the TLS stream except for the
	// ClientHello message of the TLS protocol. The certificate field
	// is ignored in this mode.
	Gateway_TLS_PASSTHROUGH Gateway_TLS_Mode = 2
)

// Enum value maps for Gateway_TLS_Mode.
var (
	Gateway_TLS_Mode_name = map[int32]string{
		0: "NONE",
		1: "TERMINATE",
		2: "PASSTHROUGH",
	}
	Gateway_TLS_Mode_value = map[string]int32{
		"NONE":        0,
		"TERMINATE":   1,
		"PASSTHROUGH": 2,
	}
)

func (x Gateway_TLS_Mode) Enum() *Gateway_TLS_Mode {
	p := new(Gateway_TLS_Mode)
	*p = x
	return p
}

func (x Gateway_TLS_Mode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Gateway_TLS_Mode) Descriptor() protoreflect.EnumDescriptor {
	return file_mesh_v1alpha1_gateway_proto_enumTypes[0].Descriptor()
}

func (Gateway_TLS_Mode) Type() protoreflect.EnumType {
	return &file_mesh_v1alpha1_gateway_proto_enumTypes[0]
}

func (x Gateway_TLS_Mode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Gateway_TLS_Mode.Descriptor instead.
func (Gateway_TLS_Mode) EnumDescriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 0, 0}
}

type Gateway_Listener_Protocol int32

const (
	Gateway_Listener_NONE  Gateway_Listener_Protocol = 0
	Gateway_Listener_TCP   Gateway_Listener_Protocol = 1
	Gateway_Listener_UDP   Gateway_Listener_Protocol = 2
	Gateway_Listener_TLS   Gateway_Listener_Protocol = 3
	Gateway_Listener_HTTP  Gateway_Listener_Protocol = 4
	Gateway_Listener_HTTPS Gateway_Listener_Protocol = 5
)

// Enum value maps for Gateway_Listener_Protocol.
var (
	Gateway_Listener_Protocol_name = map[int32]string{
		0: "NONE",
		1: "TCP",
		2: "UDP",
		3: "TLS",
		4: "HTTP",
		5: "HTTPS",
	}
	Gateway_Listener_Protocol_value = map[string]int32{
		"NONE":  0,
		"TCP":   1,
		"UDP":   2,
		"TLS":   3,
		"HTTP":  4,
		"HTTPS": 5,
	}
)

func (x Gateway_Listener_Protocol) Enum() *Gateway_Listener_Protocol {
	p := new(Gateway_Listener_Protocol)
	*p = x
	return p
}

func (x Gateway_Listener_Protocol) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Gateway_Listener_Protocol) Descriptor() protoreflect.EnumDescriptor {
	return file_mesh_v1alpha1_gateway_proto_enumTypes[1].Descriptor()
}

func (Gateway_Listener_Protocol) Type() protoreflect.EnumType {
	return &file_mesh_v1alpha1_gateway_proto_enumTypes[1]
}

func (x Gateway_Listener_Protocol) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Gateway_Listener_Protocol.Descriptor instead.
func (Gateway_Listener_Protocol) EnumDescriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 1, 0}
}

// Gateway is a virtual proxy.
//
// Each Gateway is bound to a set of builtin gateway dataplanes.
// Each builtin dataplane instance can host exactly one Gateway
// proxy configuration.
//
// Gateway aligns with the Kubernetes Gateway API v1alpha2. See that
// spec for detailed documentation.
type Gateway struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Sources is a selector that is used to match builtin gateway
	// dataplanes that will receive this Gateway configuration.
	Sources []*Selector `protobuf:"bytes,1,rep,name=sources,proto3" json:"sources,omitempty"`
	// Tags is the set of tags common to all of the gateway's listeners.
	//
	// This field must not include a `kuma.io/service` tag (the service is always
	// defined on the dataplanes).
	Tags map[string]string `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// The desired configuration of the Gateway.
	Conf *Gateway_Conf `protobuf:"bytes,3,opt,name=conf,proto3" json:"conf,omitempty"`
}

func (x *Gateway) Reset() {
	*x = Gateway{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway) ProtoMessage() {}

func (x *Gateway) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway.ProtoReflect.Descriptor instead.
func (*Gateway) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0}
}

func (x *Gateway) GetSources() []*Selector {
	if x != nil {
		return x.Sources
	}
	return nil
}

func (x *Gateway) GetTags() map[string]string {
	if x != nil {
		return x.Tags
	}
	return nil
}

func (x *Gateway) GetConf() *Gateway_Conf {
	if x != nil {
		return x.Conf
	}
	return nil
}

// TLSConfig describes a TLS configuration.
type Gateway_TLS struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Gateway_TLS) Reset() {
	*x = Gateway_TLS{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway_TLS) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway_TLS) ProtoMessage() {}

func (x *Gateway_TLS) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway_TLS.ProtoReflect.Descriptor instead.
func (*Gateway_TLS) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 0}
}

type Gateway_Listener struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Hostname specifies the virtual hostname to match for protocol types that
	// define this concept. When unspecified, "", or `*`, all hostnames are
	// matched. This field can be omitted for protocols that don't require
	// hostname based matching.
	Hostname string `protobuf:"bytes,1,opt,name=hostname,proto3" json:"hostname,omitempty"`
	// Port is the network port. Multiple listeners may use the
	// same port, subject to the Listener compatibility rules.
	Port uint32 `protobuf:"varint,2,opt,name=port,proto3" json:"port,omitempty"`
	// Protocol specifies the network protocol this listener expects to receive.
	Protocol Gateway_Listener_Protocol `protobuf:"varint,3,opt,name=protocol,proto3,enum=kuma.mesh.v1alpha1.Gateway_Listener_Protocol" json:"protocol,omitempty"`
	// TLS is the TLS configuration for the Listener. This field
	// is required if the Protocol field is "HTTPS" or "TLS" and
	// ignored otherwise.
	Tls *Gateway_TLS_Conf `protobuf:"bytes,4,opt,name=tls,proto3" json:"tls,omitempty"`
	// Tags specifies a unique combination of tags that routes can use
	// to match themselves to this listener.
	//
	// When matching routes to listeners, the control plane constructs a
	// set of matching tags for each listener by forming the union of the
	// gateway tags and the listener tags. A route will be attached to the
	// listener if all of the route's tags are preset in the matching tags
	Tags map[string]string `protobuf:"bytes,5,rep,name=tags,proto3" json:"tags,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Gateway_Listener) Reset() {
	*x = Gateway_Listener{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway_Listener) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway_Listener) ProtoMessage() {}

func (x *Gateway_Listener) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway_Listener.ProtoReflect.Descriptor instead.
func (*Gateway_Listener) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 1}
}

func (x *Gateway_Listener) GetHostname() string {
	if x != nil {
		return x.Hostname
	}
	return ""
}

func (x *Gateway_Listener) GetPort() uint32 {
	if x != nil {
		return x.Port
	}
	return 0
}

func (x *Gateway_Listener) GetProtocol() Gateway_Listener_Protocol {
	if x != nil {
		return x.Protocol
	}
	return Gateway_Listener_NONE
}

func (x *Gateway_Listener) GetTls() *Gateway_TLS_Conf {
	if x != nil {
		return x.Tls
	}
	return nil
}

func (x *Gateway_Listener) GetTags() map[string]string {
	if x != nil {
		return x.Tags
	}
	return nil
}

// Conf defines the desired state of Gateway.
//
// Aligns with GatewaySpec.
type Gateway_Conf struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Listeners define logical endpoints that are bound on this Gateway's
	// address(es).
	Listeners []*Gateway_Listener `protobuf:"bytes,2,rep,name=listeners,proto3" json:"listeners,omitempty"`
}

func (x *Gateway_Conf) Reset() {
	*x = Gateway_Conf{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway_Conf) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway_Conf) ProtoMessage() {}

func (x *Gateway_Conf) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway_Conf.ProtoReflect.Descriptor instead.
func (*Gateway_Conf) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 2}
}

func (x *Gateway_Conf) GetListeners() []*Gateway_Listener {
	if x != nil {
		return x.Listeners
	}
	return nil
}

type Gateway_TLS_Options struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Gateway_TLS_Options) Reset() {
	*x = Gateway_TLS_Options{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway_TLS_Options) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway_TLS_Options) ProtoMessage() {}

func (x *Gateway_TLS_Options) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway_TLS_Options.ProtoReflect.Descriptor instead.
func (*Gateway_TLS_Options) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 0, 0}
}

// Aligns with GatewayTLSConfig.
type Gateway_TLS_Conf struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Mode defines the TLS behavior for the TLS session initiated
	// by the client.
	Mode Gateway_TLS_Mode `protobuf:"varint,1,opt,name=mode,proto3,enum=kuma.mesh.v1alpha1.Gateway_TLS_Mode" json:"mode,omitempty"`
	// Certificate is a reference to a object that contains a TLS
	// certificate and private key. This certificate is used to establish
	// a TLS session for requests that match the hostname of the associated
	// listener.
	Certificate *v1alpha1.DataSource `protobuf:"bytes,2,opt,name=certificate,proto3" json:"certificate,omitempty"`
	// Options should eventually configure how TLS is configured. This
	// is where cipher suite and version configuration can be specified,
	// client certificates enforced, and so on.
	Options *Gateway_TLS_Options `protobuf:"bytes,3,opt,name=options,proto3" json:"options,omitempty"`
}

func (x *Gateway_TLS_Conf) Reset() {
	*x = Gateway_TLS_Conf{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Gateway_TLS_Conf) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Gateway_TLS_Conf) ProtoMessage() {}

func (x *Gateway_TLS_Conf) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_gateway_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Gateway_TLS_Conf.ProtoReflect.Descriptor instead.
func (*Gateway_TLS_Conf) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_gateway_proto_rawDescGZIP(), []int{0, 0, 1}
}

func (x *Gateway_TLS_Conf) GetMode() Gateway_TLS_Mode {
	if x != nil {
		return x.Mode
	}
	return Gateway_TLS_NONE
}

func (x *Gateway_TLS_Conf) GetCertificate() *v1alpha1.DataSource {
	if x != nil {
		return x.Certificate
	}
	return nil
}

func (x *Gateway_TLS_Conf) GetOptions() *Gateway_TLS_Options {
	if x != nil {
		return x.Options
	}
	return nil
}

var File_mesh_v1alpha1_gateway_proto protoreflect.FileDescriptor

var file_mesh_v1alpha1_gateway_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x6b,
	0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x1a, 0x12, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2f, 0x73, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa3,
	0x08, 0x0a, 0x07, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x12, 0x40, 0x0a, 0x07, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x75,
	0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x92, 0x01,
	0x02, 0x08, 0x01, 0x52, 0x07, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x12, 0x43, 0x0a, 0x04,
	0x74, 0x61, 0x67, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x6b, 0x75, 0x6d,
	0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x54, 0x61, 0x67, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x92, 0x01, 0x02, 0x08, 0x01, 0x52, 0x04, 0x74, 0x61, 0x67,
	0x73, 0x12, 0x34, 0x0a, 0x04, 0x63, 0x6f, 0x6e, 0x66, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x43, 0x6f, 0x6e,
	0x66, 0x52, 0x04, 0x63, 0x6f, 0x6e, 0x66, 0x1a, 0x8c, 0x02, 0x0a, 0x03, 0x54, 0x4c, 0x53, 0x1a,
	0x09, 0x0a, 0x07, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0xc7, 0x01, 0x0a, 0x04, 0x43,
	0x6f, 0x6e, 0x66, 0x12, 0x38, 0x0a, 0x04, 0x6d, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x24, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x54,
	0x4c, 0x53, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x04, 0x6d, 0x6f, 0x64, 0x65, 0x12, 0x42, 0x0a,
	0x0b, 0x63, 0x65, 0x72, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x20, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x53, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x52, 0x0b, 0x63, 0x65, 0x72, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x65, 0x12, 0x41, 0x0a, 0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x27, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e,
	0x54, 0x4c, 0x53, 0x2e, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x07, 0x6f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x22, 0x30, 0x0a, 0x04, 0x4d, 0x6f, 0x64, 0x65, 0x12, 0x08, 0x0a, 0x04,
	0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x54, 0x45, 0x52, 0x4d, 0x49, 0x4e,
	0x41, 0x54, 0x45, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x50, 0x41, 0x53, 0x53, 0x54, 0x48, 0x52,
	0x4f, 0x55, 0x47, 0x48, 0x10, 0x02, 0x1a, 0x80, 0x03, 0x0a, 0x08, 0x4c, 0x69, 0x73, 0x74, 0x65,
	0x6e, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x68, 0x6f, 0x73, 0x74, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x68, 0x6f, 0x73, 0x74, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x70,
	0x6f, 0x72, 0x74, 0x12, 0x49, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2d, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77,
	0x61, 0x79, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x65, 0x72, 0x2e, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x63, 0x6f, 0x6c, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x12, 0x36,
	0x0a, 0x03, 0x74, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x6b, 0x75,
	0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x54, 0x4c, 0x53, 0x2e, 0x43, 0x6f, 0x6e,
	0x66, 0x52, 0x03, 0x74, 0x6c, 0x73, 0x12, 0x42, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x05,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61,
	0x79, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x65, 0x72, 0x2e, 0x54, 0x61, 0x67, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x1a, 0x37, 0x0a, 0x09, 0x54, 0x61,
	0x67, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x22, 0x44, 0x0a, 0x08, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x12,
	0x08, 0x0a, 0x04, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x54, 0x43, 0x50,
	0x10, 0x01, 0x12, 0x07, 0x0a, 0x03, 0x55, 0x44, 0x50, 0x10, 0x02, 0x12, 0x07, 0x0a, 0x03, 0x54,
	0x4c, 0x53, 0x10, 0x03, 0x12, 0x08, 0x0a, 0x04, 0x48, 0x54, 0x54, 0x50, 0x10, 0x04, 0x12, 0x09,
	0x0a, 0x05, 0x48, 0x54, 0x54, 0x50, 0x53, 0x10, 0x05, 0x1a, 0x54, 0x0a, 0x04, 0x43, 0x6f, 0x6e,
	0x66, 0x12, 0x4c, 0x0a, 0x09, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x65, 0x72, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61,
	0x79, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x65, 0x72, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x92,
	0x01, 0x02, 0x08, 0x01, 0x52, 0x09, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x65, 0x72, 0x73, 0x1a,
	0x37, 0x0a, 0x09, 0x54, 0x61, 0x67, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x3a, 0x3a, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x11,
	0x0a, 0x0f, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x09, 0x12, 0x07, 0x47, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79,
	0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x06, 0x22, 0x04, 0x6d, 0x65, 0x73, 0x68, 0xaa, 0x8c, 0x89, 0xa6,
	0x01, 0x02, 0x30, 0x01, 0x42, 0x2a, 0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x68, 0x71, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_mesh_v1alpha1_gateway_proto_rawDescOnce sync.Once
	file_mesh_v1alpha1_gateway_proto_rawDescData = file_mesh_v1alpha1_gateway_proto_rawDesc
)

func file_mesh_v1alpha1_gateway_proto_rawDescGZIP() []byte {
	file_mesh_v1alpha1_gateway_proto_rawDescOnce.Do(func() {
		file_mesh_v1alpha1_gateway_proto_rawDescData = protoimpl.X.CompressGZIP(file_mesh_v1alpha1_gateway_proto_rawDescData)
	})
	return file_mesh_v1alpha1_gateway_proto_rawDescData
}

var file_mesh_v1alpha1_gateway_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_mesh_v1alpha1_gateway_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_mesh_v1alpha1_gateway_proto_goTypes = []interface{}{
	(Gateway_TLS_Mode)(0),          // 0: kuma.mesh.v1alpha1.Gateway.TLS.Mode
	(Gateway_Listener_Protocol)(0), // 1: kuma.mesh.v1alpha1.Gateway.Listener.Protocol
	(*Gateway)(nil),                // 2: kuma.mesh.v1alpha1.Gateway
	(*Gateway_TLS)(nil),            // 3: kuma.mesh.v1alpha1.Gateway.TLS
	(*Gateway_Listener)(nil),       // 4: kuma.mesh.v1alpha1.Gateway.Listener
	(*Gateway_Conf)(nil),           // 5: kuma.mesh.v1alpha1.Gateway.Conf
	nil,                            // 6: kuma.mesh.v1alpha1.Gateway.TagsEntry
	(*Gateway_TLS_Options)(nil),    // 7: kuma.mesh.v1alpha1.Gateway.TLS.Options
	(*Gateway_TLS_Conf)(nil),       // 8: kuma.mesh.v1alpha1.Gateway.TLS.Conf
	nil,                            // 9: kuma.mesh.v1alpha1.Gateway.Listener.TagsEntry
	(*Selector)(nil),               // 10: kuma.mesh.v1alpha1.Selector
	(*v1alpha1.DataSource)(nil),    // 11: kuma.system.v1alpha1.DataSource
}
var file_mesh_v1alpha1_gateway_proto_depIdxs = []int32{
	10, // 0: kuma.mesh.v1alpha1.Gateway.sources:type_name -> kuma.mesh.v1alpha1.Selector
	6,  // 1: kuma.mesh.v1alpha1.Gateway.tags:type_name -> kuma.mesh.v1alpha1.Gateway.TagsEntry
	5,  // 2: kuma.mesh.v1alpha1.Gateway.conf:type_name -> kuma.mesh.v1alpha1.Gateway.Conf
	1,  // 3: kuma.mesh.v1alpha1.Gateway.Listener.protocol:type_name -> kuma.mesh.v1alpha1.Gateway.Listener.Protocol
	8,  // 4: kuma.mesh.v1alpha1.Gateway.Listener.tls:type_name -> kuma.mesh.v1alpha1.Gateway.TLS.Conf
	9,  // 5: kuma.mesh.v1alpha1.Gateway.Listener.tags:type_name -> kuma.mesh.v1alpha1.Gateway.Listener.TagsEntry
	4,  // 6: kuma.mesh.v1alpha1.Gateway.Conf.listeners:type_name -> kuma.mesh.v1alpha1.Gateway.Listener
	0,  // 7: kuma.mesh.v1alpha1.Gateway.TLS.Conf.mode:type_name -> kuma.mesh.v1alpha1.Gateway.TLS.Mode
	11, // 8: kuma.mesh.v1alpha1.Gateway.TLS.Conf.certificate:type_name -> kuma.system.v1alpha1.DataSource
	7,  // 9: kuma.mesh.v1alpha1.Gateway.TLS.Conf.options:type_name -> kuma.mesh.v1alpha1.Gateway.TLS.Options
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_mesh_v1alpha1_gateway_proto_init() }
func file_mesh_v1alpha1_gateway_proto_init() {
	if File_mesh_v1alpha1_gateway_proto != nil {
		return
	}
	file_mesh_v1alpha1_selector_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_mesh_v1alpha1_gateway_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_gateway_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway_TLS); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_gateway_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway_Listener); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_gateway_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway_Conf); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_gateway_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway_TLS_Options); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_gateway_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Gateway_TLS_Conf); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_mesh_v1alpha1_gateway_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mesh_v1alpha1_gateway_proto_goTypes,
		DependencyIndexes: file_mesh_v1alpha1_gateway_proto_depIdxs,
		EnumInfos:         file_mesh_v1alpha1_gateway_proto_enumTypes,
		MessageInfos:      file_mesh_v1alpha1_gateway_proto_msgTypes,
	}.Build()
	File_mesh_v1alpha1_gateway_proto = out.File
	file_mesh_v1alpha1_gateway_proto_rawDesc = nil
	file_mesh_v1alpha1_gateway_proto_goTypes = nil
	file_mesh_v1alpha1_gateway_proto_depIdxs = nil
}