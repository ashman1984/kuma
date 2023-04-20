var Fe=Object.defineProperty;var Ke=(t,o,a)=>o in t?Fe(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;var ee=(t,o,a)=>(Ke(t,typeof o!="symbol"?o+"":o,a),a);import{d as ue,r as E,c as D,v as Q,o as p,j as h,i as s,h as l,g as O,b as f,K as Me,t as T,a0 as Ae,a1 as qe,Z as Te,F as N,q as F,f as $,k as Re,a2 as je,p as de,m as ce,M as Ee,Y as Ce,L as Ie,N as ze,x as Be,e as z,w as V,u as He,C as De,H as Pe,Q as Qe,R as Ge,W as Ye,X as Ze,U as Je,V as We,a3 as Xe,a4 as et}from"./index-5b34b65e.js";import{c as te,I as tt,A as at,C as nt,_ as Se}from"./kongponents.es-9f2d376a.js";import{C as st}from"./ContentWrapper-9fe01d74.js";import{D as lt}from"./DataOverview-4a430414.js";import{_ as ot}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-a940747e.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";import{S as it}from"./StatusBadge-df8e2e64.js";import{T as rt}from"./TagList-a04c9075.js";import{_ as ut}from"./YamlView.vue_vue_type_script_setup_true_lang-bcce2ef9.js";import{u as dt}from"./store-76151f83.js";import{d as ct}from"./datadogLogEvents-302eea7b.js";import{Q as j}from"./QueryParameter-70743f73.js";const Oe=[{key:"status",label:"Status"},{key:"name",label:"DPP"},{key:"type",label:"Type"},{key:"service",label:"Service"},{key:"protocol",label:"Protocol"},{key:"zone",label:"Zone"},{key:"lastConnected",label:"Last Connected"},{key:"lastUpdated",label:"Last Updated"},{key:"totalUpdates",label:"Total Updates"},{key:"dpVersion",label:"Kuma DP version"},{key:"envoyVersion",label:"Envoy version"},{key:"details",label:"Details",hideLabel:!0}],pt=["name","details"],ft=Oe.filter(t=>!pt.includes(t.key)).map(t=>({tableHeaderKey:t.key,label:t.label,isChecked:!1})),xe=["status","name","type","service","protocol","zone","lastUpdated","dpVersion","details"];function mt(t,o=xe){return Oe.filter(a=>o.includes(a.key)?t?!0:a.key!=="zone":!1)}function vt(t,o,a){return Math.max(o,Math.min(t,a))}const gt=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class yt{constructor(o,a){ee(this,"commands");ee(this,"keyMap");ee(this,"boundTriggerShortcuts");this.commands=a,this.keyMap=Object.fromEntries(Object.entries(o).map(([w,d])=>[w.toLowerCase(),d])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(o){ht(o,this.keyMap,this.commands)}}function ht(t,o,a){const w=_t(t.code),d=[t.ctrlKey?"ctrl":"",t.shiftKey?"shift":"",t.altKey?"alt":"",w].filter(k=>k!=="").join("+"),m=o[d];if(!m)return;const b=a[m];b.isAllowedContext&&!b.isAllowedContext(t)||(b.shouldPreventDefaultAction&&t.preventDefault(),!(b.isDisabled&&b.isDisabled())&&b.trigger(t))}function _t(t){return gt.includes(t)?"":t.replace(/^Key/,"").toLowerCase()}function bt(t,o){const a=" "+t,w=a.matchAll(/ ([-\s\w]+):\s*/g),d=[];for(const m of Array.from(w)){if(m.index===void 0)continue;const b=kt(m[1]);if(o.length>0&&!o.includes(b))throw new Error(`Unknown field “${b}”. Known fields: ${o.join(", ")}`);const k=m.index+m[0].length,i=a.substring(k);let v;if(/^\s*["']/.test(i)){const c=i.match(/['"](.*?)['"]/);if(c!==null)v=c[1];else throw new Error(`Quote mismatch for field “${b}”.`)}else{const c=i.indexOf(" "),y=c===-1?i.length:c;v=i.substring(0,y)}v!==""&&d.push([b,v])}return d}function kt(t){return t.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(o,a)=>a===0?o:o.substring(1).toUpperCase())}const $e=t=>(de("data-v-715248af"),t=t(),ce(),t),wt=$e(()=>s("span",{class:"visually-hidden"},"Focus filter",-1)),Tt=["for"],Ct=["id","placeholder"],Dt={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},Pt={class:"k-suggestion-list"},St={key:0,class:"k-filter-bar-error"},At={key:0},Et=["title","data-filter-field"],It={class:"visually-hidden"},Ot=$e(()=>s("span",{class:"visually-hidden"},"Clear query",-1)),xt=ue({__name:"KFilterBar",props:{id:{type:String,required:!0},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(t,{emit:o}){const a=t,w=E(null),d=E(null),m=E(a.query),b=E([]),k=E(null),i=E(!1),v=E(-1),_=D(()=>Object.keys(a.fields)),c=D(()=>Object.entries(a.fields).slice(0,5).map(([e,u])=>({fieldName:e,...u}))),y=D(()=>_.value.length>0?`Filter by ${_.value.join(", ")}`:"Filter"),P=D(()=>a.placeholder??y.value);Q(()=>b.value,function(e,u){n(e,u)||(k.value=null,o("fields-change",{fields:e,query:m.value}))}),Q(()=>m.value,function(){m.value===""&&(k.value=null),i.value=!0});const S={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},I={submitQuery:{trigger:Y,isAllowedContext(e){return d.value!==null&&e.composedPath().includes(d.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:ae,isAllowedContext(e){return d.value!==null&&e.composedPath().includes(d.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:ne,isAllowedContext(e){return d.value!==null&&e.composedPath().includes(d.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:H,isAllowedContext(e){return w.value!==null&&e.composedPath().includes(w.value)}}};function U(){const e=new yt(S,I);Re(function(){e.registerListener()}),je(function(){e.unRegisterListener()}),M(m.value)}U();function G(e){const u=e.target;M(u.value)}function Y(){if(d.value instanceof HTMLInputElement)if(v.value===-1)M(d.value.value),i.value=!1;else{const e=c.value[v.value].fieldName;e&&Z(d.value,e)}}function ae(){K(1)}function ne(){K(-1)}function K(e){v.value=vt(v.value+e,-1,c.value.length-1)}function se(){d.value instanceof HTMLInputElement&&d.value.focus()}function le(e){const r=e.currentTarget.getAttribute("data-filter-field");r&&d.value instanceof HTMLInputElement&&Z(d.value,r)}function Z(e,u){const r=m.value===""||m.value.endsWith(" ")?"":" ";m.value+=r+u+":",e.focus(),v.value=-1}function J(){m.value="",d.value instanceof HTMLInputElement&&(d.value.value="",d.value.focus(),M(""))}function B(e){e.relatedTarget===null&&H(),w.value instanceof HTMLElement&&e.relatedTarget instanceof Node&&!w.value.contains(e.relatedTarget)&&H()}function H(){i.value=!1}function M(e){k.value=null;try{const u=bt(e,_.value);u.sort((r,C)=>r[0].localeCompare(C[0])),b.value=u}catch(u){if(u instanceof Error)k.value=u,i.value=!0;else throw u}}function n(e,u){return JSON.stringify(e)===JSON.stringify(u)}return(e,u)=>(p(),h("div",{ref_key:"filterBar",ref:w,class:"k-filter-bar","data-testid":"k-filter-bar"},[s("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:se},[wt,l(),O(f(te),{"aria-hidden":"true",class:"k-filter-icon",color:"var(--grey-400)","data-testid":"k-filter-bar-filter-icon","hide-title":"",icon:"filter",size:"20"})]),l(),s("label",{for:`${a.id}-filter-bar-input`,class:"visually-hidden"},[Me(e.$slots,"default",{},()=>[l(T(f(y)),1)],!0)],8,Tt),l(),Ae(s("input",{id:`${a.id}-filter-bar-input`,ref_key:"filterInput",ref:d,"onUpdate:modelValue":u[0]||(u[0]=r=>m.value=r),class:"k-filter-bar-input",type:"text",placeholder:f(P),"data-testid":"k-filter-bar-filter-input",onFocus:u[1]||(u[1]=r=>i.value=!0),onBlur:B,onChange:G},null,40,Ct),[[qe,m.value]]),l(),i.value?(p(),h("div",Dt,[s("div",Pt,[k.value!==null?(p(),h("p",St,T(k.value.message),1)):(p(),h("button",{key:1,class:Te(["k-submit-query-button",{"k-submit-query-button-is-selected":v.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:Y},`
          Submit `+T(m.value),3)),l(),(p(!0),h(N,null,F(f(c),(r,C)=>(p(),h("div",{key:`${a.id}-${C}`,class:Te(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":v.value===C}])},[s("b",null,T(r.fieldName),1),r.description!==""?(p(),h("span",At,": "+T(r.description),1)):$("",!0),l(),s("button",{class:"k-apply-suggestion-button",title:`Add ${r.fieldName}:`,type:"button","data-filter-field":r.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:le},[s("span",It,"Add "+T(r.fieldName)+":",1),l(),O(f(te),{"aria-hidden":"true",color:"currentColor","hide-title":"",icon:"chevronRight",size:"16"})],8,Et)],2))),128))])])):$("",!0),l(),m.value!==""?(p(),h("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:J},[Ot,l(),O(f(te),{"aria-hidden":"true",color:"currentColor",icon:"clear","hide-title":"",size:"20"})])):$("",!0)],512))}});const $t=pe(xt,[["__scopeId","data-v-715248af"]]),L=t=>(de("data-v-eae8d31a"),t=t(),ce(),t),Ut={class:"entity-section-list"},Vt={class:"block-list"},Nt={class:"entity-title","data-testid":"data-plane-proxy-title"},Lt={class:"definition"},Ft=L(()=>s("span",null,"Mesh:",-1)),Kt={key:0},Mt=L(()=>s("h4",null,"Tags",-1)),qt={key:1},Rt=L(()=>s("h4",null,"Dependencies",-1)),jt={class:"mt-2 heading-with-icon"},zt={key:0},Bt=L(()=>s("h4",null,"Insights",-1)),Ht={class:"block-list"},Qt=["data-testid"],Gt=L(()=>s("span",null,"Connect time:",-1)),Yt=["data-testid"],Zt=L(()=>s("span",null,"Disconnect time:",-1)),Jt={class:"definition"},Wt=L(()=>s("span",null,"CP instance ID:",-1)),Xt={key:0},ea=L(()=>s("summary",null,`
                  Responses (acknowledged / sent)
                `,-1)),ta=["data-testid"],aa={class:"config-section"},na=ue({__name:"DataPlaneEntitySummary",props:{dataPlaneOverview:{type:Object,required:!0}},setup(t){const o=t,a=D(()=>{const{name:i,mesh:v,dataplane:_}=o.dataPlaneOverview;return{type:"Dataplane",name:i,mesh:v,networking:_.networking}}),w=D(()=>Ee(o.dataPlaneOverview.dataplane)),d=D(()=>{var v;const i=Array.from(((v=o.dataPlaneOverview.dataplaneInsight)==null?void 0:v.subscriptions)??[]);return i.reverse(),i.map(_=>{const c=_.connectTime!==void 0?Ce(_.connectTime):"—",y=_.disconnectTime!==void 0?Ce(_.disconnectTime):"—",P=Object.entries(_.status).filter(([S])=>!["total","lastUpdateTime"].includes(S)).map(([S,I])=>{const U=`${I.responsesAcknowledged??0} / ${I.responsesSent??0}`;return{type:S.toUpperCase(),ratio:U,responsesSent:I.responsesSent??0,responsesAcknowledged:I.responsesAcknowledged??0,responsesRejected:I.responsesRejected??0}});return{subscription:_,formattedConnectDate:c,formattedDisconnectDate:y,statuses:P}})}),m=D(()=>{const{status:i}=Ie(o.dataPlaneOverview.dataplane,o.dataPlaneOverview.dataplaneInsight);return i}),b=D(()=>{const i=ze(o.dataPlaneOverview.dataplaneInsight);return i!==null?Object.entries(i).map(([v,_])=>({name:v,version:_})):[]}),k=D(()=>{var I;const i=((I=o.dataPlaneOverview.dataplaneInsight)==null?void 0:I.subscriptions)??[];if(i.length===0)return[];const v=i[i.length-1];if(!v.version)return[];const _=[],c=v.version.envoy,y=v.version.kumaDp;if(!(c.kumaDpCompatible!==void 0?c.kumaDpCompatible:!0)){const U=`Envoy ${c.version} is not supported by Kuma DP ${y.version}.`;_.push(U)}if(!(y.kumaCpCompatible!==void 0?y.kumaCpCompatible:!0)){const U=`Kuma DP ${y.version} is not supported by this Kuma control plane.`;_.push(U)}return _});return(i,v)=>{const _=Be("router-link");return p(),z(f(tt),null,{body:V(()=>[s("div",Ut,[s("section",null,[s("div",Vt,[s("div",null,[s("h3",Nt,[s("span",null,[l(`
                  DPP:

                  `),O(_,{to:{name:"data-plane-detail-view",params:{mesh:t.dataPlaneOverview.mesh,dataPlane:t.dataPlaneOverview.name}}},{default:V(()=>[l(T(t.dataPlaneOverview.name),1)]),_:1},8,["to"])]),l(),O(it,{status:f(m)},null,8,["status"])]),l(),s("div",Lt,[Ft,l(),s("span",null,T(t.dataPlaneOverview.mesh),1)])]),l(),f(w).length>0?(p(),h("div",Kt,[Mt,l(),O(rt,{tags:f(w)},null,8,["tags"])])):$("",!0),l(),f(b).length>0?(p(),h("div",qt,[Rt,l(),(p(!0),h(N,null,F(f(b),(c,y)=>(p(),h("div",{key:y,class:"definition"},[s("span",null,T(c.name)+":",1),l(),s("span",null,T(c.version),1)]))),128)),l(),f(k).length>0?(p(),h(N,{key:0},[s("h5",jt,[l(`
                  Warnings

                  `),O(f(te),{class:"ml-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"20"})]),l(),(p(!0),h(N,null,F(f(k),(c,y)=>(p(),h("p",{key:y},T(c),1))),128))],64)):$("",!0)])):$("",!0)])]),l(),f(d).length>0?(p(),h("section",zt,[Bt,l(),s("div",Ht,[(p(!0),h(N,null,F(f(d),(c,y)=>(p(),h("div",{key:y},[s("div",{class:"definition","data-testid":`data-plane-connect-time-${y}`},[Gt,l(),s("span",null,T(c.formattedConnectDate),1)],8,Qt),l(),s("div",{class:"definition","data-testid":`data-plane-disconnect-time-${y}`},[Zt,l(),s("span",null,T(c.formattedDisconnectDate),1)],8,Yt),l(),s("div",Jt,[Wt,l(),s("span",null,T(c.subscription.controlPlaneInstanceId),1)]),l(),c.statuses.length>0?(p(),h("details",Xt,[ea,l(),(p(!0),h(N,null,F(c.statuses,(P,S)=>(p(),h("div",{key:`${y}-${S}`,class:"definition","data-testid":`data-plane-subscription-status-${y}-${S}`},[s("span",null,T(P.type)+":",1),l(),s("span",null,T(P.ratio),1)],8,ta))),128))])):$("",!0)]))),128))])])):$("",!0),l(),s("section",aa,[O(ut,{id:"code-block-data-plane-summary",content:f(a),"code-max-height":"250px"},null,8,["content"])])])]),_:1})}}});const sa=pe(na,[["__scopeId","data-v-eae8d31a"]]),la=["protocol","service","zone"];function oa(t){const o=new Map;for(const[a,w]of t){const d=la.includes(a),m=d?"tag":a;o.has(m)||o.set(m,[]);const b=o.get(m);let k;m==="tag"?k=(d?`kuma.io/${a}:${w}`:w).replace(/\s+/g,""):k=w,b.push(k.trim())}return o}const ia=t=>(de("data-v-dcc59ae1"),t=t(),ce(),t),ra={key:0},ua=ia(()=>s("label",{for:"data-planes-type-filter",class:"mr-2"},`
              Type:
            `,-1)),da=["value"],ca=["for"],pa=["id","checked","onChange"],fa=ue({__name:"DataPlaneList",props:{dataPlaneOverviews:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},nextUrl:{type:String,required:!1,default:null},pageOffset:{type:Number,required:!1,default:0},selectedDppName:{type:String,required:!1,default:null},isGatewayView:{type:Boolean,required:!1,default:!1},gatewayType:{type:String,required:!1,default:"true"},dppFilterFields:{type:Object,required:!0}},emits:["load-data"],setup(t,{emit:o}){const a=t,w=50,d={true:"All",builtin:"Builtin",delegated:"Delegated"},m={title:"No Data",message:"There are no data plane proxies present."},b=He(),k=dt(),i=E(xe),v=E({headers:[],data:[]}),_=E(j.get("filterQuery")??""),c=E(a.gatewayType),y=E({}),P=E(null),S=D(()=>k.getters["config/getMulticlusterStatus"]),I=D(()=>({name:k.getters["config/getEnvironment"]==="universal"?"universal-dataplane":"kubernetes-dataplane"})),U=D(()=>"tag"in a.dppFilterFields?'tag: "kuma.io/protocol: http"':"name"in a.dppFilterFields?"name: cluster":"field: value"),G=D(()=>{let n=mt(S.value,i.value);return a.isGatewayView?n=n.filter(e=>e.key!=="protocol"):n=n.filter(e=>e.key!=="type"),{data:v.value.data,headers:n}}),Y=D(()=>ft.filter(n=>a.isGatewayView?n.tableHeaderKey!=="protocol":n.tableHeaderKey!=="type").filter(n=>S.value?!0:n.tableHeaderKey!=="zone").map(n=>{const e=i.value.includes(n.tableHeaderKey);return{...n,isChecked:e}}));Q(c,function(){K(0)}),Q(y,function(){K(0)}),Q(()=>a.dataPlaneOverviews,function(){J()});function ae(){const n=De.get("dpVisibleTableHeaderKeys");Array.isArray(n)&&(i.value=n),J()}ae();function ne(n){K(n)}function K(n){const e={...y.value};"gateway"in e||(e.gateway=c.value),o("load-data",n,e)}function se(n){n.stopPropagation()}function le(n,e){const u=n.target,r=i.value.findIndex(C=>C===e);u.checked&&r===-1?i.value.push(e):!u.checked&&r>-1&&i.value.splice(r,1),De.set("dpVisibleTableHeaderKeys",Array.from(new Set(i.value)))}function Z(){et.logger.info(ct.CREATE_DATA_PLANE_PROXY_CLICKED)}async function J(){try{Array.isArray(a.dataPlaneOverviews)&&a.dataPlaneOverviews.length>0?(B(a.selectedDppName??a.dataPlaneOverviews[0].name),v.value.data=await Promise.all(a.dataPlaneOverviews.map(n=>H(n)))):(B(null),v.value.data=[])}catch(n){console.error(n)}}function B(n){n&&a.dataPlaneOverviews.length>0?(P.value=a.dataPlaneOverviews.find(e=>e.name===n)??a.dataPlaneOverviews[0],j.set(a.isGatewayView?"gateway":"dpp",P.value.name)):(P.value=null,j.set(a.isGatewayView?"gateway":"dpp",null))}async function H(n){var ve,ge,ye,he,_e;const e=n.mesh,u=n.name,r=((ve=n.dataplane.networking.gateway)==null?void 0:ve.type)||"STANDARD",C={name:r==="STANDARD"?"data-plane-detail-view":"gateway-detail-view",params:{mesh:e,dataPlane:u}},q={name:"mesh-detail-view",params:{mesh:e}},W=["kuma.io/protocol","kuma.io/service","kuma.io/zone"],X=Ee(n.dataplane).filter(g=>W.includes(g.label)),oe=(ge=X.find(g=>g.label==="kuma.io/service"))==null?void 0:ge.value,Ue=(ye=X.find(g=>g.label==="kuma.io/protocol"))==null?void 0:ye.value,ie=(he=X.find(g=>g.label==="kuma.io/zone"))==null?void 0:he.value;let fe;oe!==void 0&&(fe={name:"service-detail-view",params:{mesh:e,service:oe}});let me;ie!==void 0&&(me={name:"zones",query:{ns:ie}});const{status:Ve}=Ie(n.dataplane,n.dataplaneInsight),Ne=((_e=n.dataplaneInsight)==null?void 0:_e.subscriptions)??[],Le={totalUpdates:0,totalRejectedUpdates:0,dpVersion:null,envoyVersion:null,selectedTime:NaN,selectedUpdateTime:NaN,version:null},A=Ne.reduce((g,x)=>{var be,ke;if(x.connectTime){const we=Date.parse(x.connectTime);(!g.selectedTime||we>g.selectedTime)&&(g.selectedTime=we)}const re=Date.parse(x.status.lastUpdateTime);return re&&(!g.selectedUpdateTime||re>g.selectedUpdateTime)&&(g.selectedUpdateTime=re),{totalUpdates:g.totalUpdates+parseInt(x.status.total.responsesSent??"0",10),totalRejectedUpdates:g.totalRejectedUpdates+parseInt(x.status.total.responsesRejected??"0",10),dpVersion:((be=x.version)==null?void 0:be.kumaDp.version)||g.dpVersion,envoyVersion:((ke=x.version)==null?void 0:ke.envoy.version)||g.envoyVersion,selectedTime:g.selectedTime,selectedUpdateTime:g.selectedUpdateTime,version:x.version||g.version}},Le),R={name:u,nameRoute:C,mesh:e,meshRoute:q,type:r,zone:ie??"—",zoneRoute:me,service:oe??"—",serviceInsightRoute:fe,protocol:Ue??"—",status:Ve,totalUpdates:A.totalUpdates,totalRejectedUpdates:A.totalRejectedUpdates,dpVersion:A.dpVersion??"—",envoyVersion:A.envoyVersion??"—",warnings:[],unsupportedEnvoyVersion:!1,unsupportedKumaDPVersion:!1,kumaDpAndKumaCpMismatch:!1,lastUpdated:A.selectedUpdateTime?Pe(new Date(A.selectedUpdateTime).toUTCString()):"—",lastConnected:A.selectedTime?Pe(new Date(A.selectedTime).toUTCString()):"—",overview:n};if(A.version){const{kind:g}=Qe(A.version);switch(g!==Ge&&R.warnings.push(g),g){case Ze:R.unsupportedEnvoyVersion=!0;break;case Ye:R.unsupportedKumaDPVersion=!0;break}}return S.value&&A.dpVersion&&X.find(x=>x.label===Je)&&typeof A.version.kumaDp.kumaCpCompatible=="boolean"&&!A.version.kumaDp.kumaCpCompatible&&(R.warnings.push(We),R.kumaDpAndKumaCpMismatch=!0),R}function M({fields:n,query:e}){const u=j.get("filterFields"),r=u!==null?JSON.parse(u):{},C=JSON.stringify(r),q=Object.fromEntries(oa(n)),W=JSON.stringify(q);j.set("filterQuery",e||null),j.set("filterFields",W),C!==W&&(y.value=q)}return(n,e)=>(p(),z(st,null,{content:V(()=>{var u;return[O(lt,{"selected-entity-name":(u=P.value)==null?void 0:u.name,"page-size":w,"is-loading":a.isLoading,error:t.error,"empty-state":m,"table-data":f(G),"table-data-is-empty":f(G).data.length===0,"show-details":"",next:a.nextUrl!==null,"page-offset":a.pageOffset,onTableAction:e[1]||(e[1]=r=>B(r.name)),onLoadData:ne},{additionalControls:V(()=>[O($t,{id:"data-plane-proxy-filter",class:"data-plane-proxy-filter",placeholder:f(U),query:_.value,fields:a.dppFilterFields,onFieldsChange:M},null,8,["placeholder","query","fields"]),l(),a.isGatewayView?(p(),h("div",ra,[ua,l(),Ae(s("select",{id:"data-planes-type-filter","onUpdate:modelValue":e[0]||(e[0]=r=>c.value=r),"data-testid":"data-planes-type-filter"},[(p(!0),h(N,null,F(f(d),(r,C)=>(p(),h("option",{key:C,value:C},T(r),9,da))),128))],512),[[Xe,c.value]])])):$("",!0),l(),O(f(at),{label:"Columns",icon:"cogwheel","button-appearance":"outline"},{items:V(()=>[s("div",{onClick:se},[(p(!0),h(N,null,F(f(Y),(r,C)=>(p(),z(f(nt),{key:C,class:"table-header-selector-item",item:r},{default:V(()=>[s("label",{for:`data-plane-table-header-checkbox-${C}`,class:"k-checkbox table-header-selector-item-checkbox"},[s("input",{id:`data-plane-table-header-checkbox-${C}`,checked:r.isChecked,type:"checkbox",class:"k-input",onChange:q=>le(q,r.tableHeaderKey)},null,40,pa),l(" "+T(r.label),1)],8,ca)]),_:2},1032,["item"]))),128))])]),_:1}),l(),O(f(Se),{appearance:"creation",to:f(I),icon:"plus","data-testid":"data-plane-create-data-plane-button",onClick:Z},{default:V(()=>[l(`
            Create data plane proxy
          `)]),_:1},8,["to"]),l(),f(b).query.ns?(p(),z(f(Se),{key:1,appearance:"primary",icon:"arrowLeft",to:{name:f(b).name},"data-testid":"data-plane-ns-back-button"},{default:V(()=>[l(`
            View All
          `)]),_:1},8,["to"])):$("",!0)]),_:1},8,["selected-entity-name","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:V(()=>[P.value!==null?(p(),z(sa,{key:0,"data-plane-overview":P.value},null,8,["data-plane-overview"])):(p(),z(ot,{key:1}))]),_:1}))}});const Sa=pe(fa,[["__scopeId","data-v-dcc59ae1"]]);export{Sa as D};
