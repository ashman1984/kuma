import{d as R,o as s,i as c,c as u,w as n,b as f,u as g,M as k,z as h,E as B,G as x,D as T,H as j,r as I,e as C,f as G,j as l,I as E,a as _,A as m,J as L,n as V,v as P,t as d,F as S,K as J,h as Q,B as X,C as Y}from"./index.3bc39668.js";import{_ as O}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.74b6b406.js";import{E as Z}from"./ErrorBlock.f4ac98cc.js";import{_ as ee}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.13b03cfc.js";import{T as ae}from"./TagList.3d4ee64d.js";const te=""+new URL("icon-empty-table.dbb0b754.svg",import.meta.url).href,se={class:"pagination"},ne=R({__name:"PaginationWidget",props:{hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}},emits:["next","previous"],setup(t,{emit:r}){const a=t;function D(){r("next"),B.logger.info(x.PAGINATION_NEXT_BUTTON_CLICKED)}function v(){r("previous"),B.logger.info(x.PAGINATION_PREVIOUS_BUTTON_CLICKED)}return(y,N)=>(s(),c("div",se,[a.hasPrevious?(s(),u(g(k),{key:0,appearance:"primary","data-testid":"pagination-previous-button",onClick:v},{default:n(()=>[f(" \u2039 Previous ")]),_:1})):h("",!0),a.hasNext?(s(),u(g(k),{key:1,appearance:"primary","data-testid":"pagination-next-button",onClick:D},{default:n(()=>[f(" Next \u203A ")]),_:1})):h("",!0)]))}});const oe=T(ne,[["__scopeId","data-v-aa2207ca"]]),w=t=>(X("data-v-23361f5e"),t=t(),Y(),t),le={class:"data-overview","data-testid":"data-overview"},ie={class:"data-table-controls mb-2"},re=w(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},[l("g",{fill:"#fff","fill-rule":"nonzero"},[l("path",{d:"M18 5.5a12.465 12.465 0 00-8.118 2.995 1.5 1.5 0 001.847 2.363l.115-.095A9.437 9.437 0 0118 8.5l.272.004a9.487 9.487 0 019.07 7.75l.04.246H25a.5.5 0 00-.416.777l4 6a.5.5 0 00.832 0l4-6 .04-.072A.5.5 0 0033 16.5h-2.601l-.017-.15C29.567 10.2 24.294 5.5 18 5.5zM2.584 18.723l-.04.072A.5.5 0 003 19.5h2.6l.018.15C6.433 25.8 11.706 30.5 18 30.5c3.013 0 5.873-1.076 8.118-2.995a1.5 1.5 0 00-1.847-2.363l-.115.095A9.437 9.437 0 0118 27.5l-.272-.004a9.487 9.487 0 01-9.07-7.75l-.041-.246H11a.5.5 0 00.416-.777l-4-6a.5.5 0 00-.832 0l-4 6z"})])],-1)),de=[re],ce=w(()=>l("span",null,"Refresh",-1)),ue={key:3,class:"data-overview-content"},fe={key:0,class:"data-overview-table"},ge={key:0,class:"action-link__active-state"},ve=w(()=>l("span",{class:"sr-only"},"Selected",-1)),pe={key:1,class:"action-link__normal-state"},me=w(()=>l("div",{class:"card-icon mb-3"},[l("img",{src:te})],-1)),he={key:0},ye={key:1},_e={key:2,class:"data-overview-content mt-6"},be=R({__name:"DataOverview",props:{selectedEntityName:{type:String,required:!1,default:""},pageSize:{type:Number,required:!1,default:12},isLoading:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},isEmpty:{type:Boolean,required:!1,default:!1},emptyState:{type:Object,required:!1,default:null},tableData:{type:Object,required:!1,default:null},tableDataIsEmpty:{type:Boolean,required:!1,default:!1},showWarnings:{type:Boolean,required:!1,default:!1},showDetails:{type:Boolean,required:!1,default:!1},next:{type:[String,Boolean,null],required:!1,default:!1},pageOffset:{type:Number,required:!1,default:0}},emits:["table-action","refresh","load-data"],setup(t,{emit:r}){const a=t,D=j(),v=I(""),y=I(a.pageOffset),N=C(()=>a.showWarnings?a.tableData.headers:a.tableData.headers.filter(o=>o.key!=="warnings")),A=C(()=>a.tableData.headers.map(o=>o.key).filter(o=>D[o])),q=C(()=>`${a.tableData.data.length}-${N.value.length}`);G(()=>a.isLoading,function(){!a.isLoading&&a.tableData.data.length>0&&(v.value=a.selectedEntityName||a.tableData.data[0].name)});function z(){return{data:a.tableData.data,total:a.tableData.data.length}}function $(o,p){v.value=p.name,r("table-action",p)}function U(){r("refresh"),r("load-data",y.value),B.logger.info(x.TABLE_REFRESH_BUTTON_CLICKED)}function W(){y.value=a.pageOffset-a.pageSize,r("load-data",a.pageOffset-a.pageSize)}function H(){y.value=a.pageOffset+a.pageSize,r("load-data",a.pageOffset+a.pageSize)}function K({headerKey:o}){return{class:["warnings"].includes(o)?"text-center":["details"].includes(o)?"text-right":""}}function M({name:o}){const p=a.selectedEntityName||a.tableData.data[0].name;return{class:o===p?"is-selected":""}}return(o,p)=>{const b=Q("router-link");return s(),c("div",le,[l("div",ie,[E(o.$slots,"additionalControls",{},void 0,!0),_(g(k),{class:"refresh-button",appearance:"primary",disabled:t.isLoading,"data-testid":"data-overview-refresh-button",onClick:U},{default:n(()=>[l("span",{class:m(["refresh-icon custom-control-icon",{"is-spinning":t.isLoading}])},de,2),ce]),_:1},8,["disabled"])]),t.isLoading?(s(),u(ee,{key:0})):t.error!==null?(s(),u(Z,{key:1,error:t.error},null,8,["error"])):t.isEmpty?(s(),u(O,{key:2})):(s(),c("div",ue,[!t.tableDataIsEmpty&&t.tableData?(s(),c("div",fe,[(s(),u(g(J),{key:g(q),class:m({"data-table-is-hidden":t.tableDataIsEmpty}),fetcher:z,headers:g(N),"cell-attrs":K,"row-attrs":M,"disable-pagination":"","is-clickable":"","data-testid":"data-overview-table","onRow:click":$},L({status:n(({rowValue:e})=>[l("div",{class:m(["entity-status",{"is-offline":e.toLowerCase()==="offline"||e===!1,"is-online":e.toLowerCase()==="online","is-degraded":e.toLowerCase()==="partially degraded","is-not-available":e.toLowerCase()==="not available"}])},[l("span",null,d(e),1)],2)]),tags:n(({rowValue:e})=>[_(ae,{tags:e},null,8,["tags"])]),name:n(({row:e,rowValue:i})=>[e.nameRoute?(s(),u(b,{key:0,to:e.nameRoute},{default:n(()=>[f(d(i),1)]),_:2},1032,["to"])):(s(),c(S,{key:1},[f(d(i),1)],64))]),mesh:n(({row:e,rowValue:i})=>[e.meshRoute?(s(),u(b,{key:0,to:e.meshRoute},{default:n(()=>[f(d(i),1)]),_:2},1032,["to"])):(s(),c(S,{key:1},[f(d(i),1)],64))]),service:n(({row:e,rowValue:i})=>[e.serviceInsightRoute?(s(),u(b,{key:0,to:e.serviceInsightRoute},{default:n(()=>[f(d(i),1)]),_:2},1032,["to"])):(s(),c(S,{key:1},[f(d(i),1)],64))]),totalUpdates:n(({row:e})=>[l("span",null,d(e.totalUpdates),1)]),selected:n(({row:e})=>[l("a",{class:m(["data-table-action-link",{"is-active":v.value===e.name}])},[v.value===e.name?(s(),c("span",ge,[f(" \u2713 "),ve])):(s(),c("span",pe," View "))],2)]),dpVersion:n(({row:e,rowValue:i})=>[l("div",{class:m({"with-warnings":e.unsupportedEnvoyVersion||e.unsupportedKumaDPVersion||e.kumaDpAndKumaCpMismatch})},d(i),3)]),envoyVersion:n(({row:e,rowValue:i})=>[l("div",{class:m({"with-warnings":e.unsupportedEnvoyVersion})},d(i),3)]),_:2},[V(g(A),e=>({name:e,fn:n(({rowValue:i,row:F})=>[E(o.$slots,e,{rowValue:i,row:F},void 0,!0)])})),t.showWarnings?{name:"warnings",fn:n(({row:e})=>[e.withWarnings?(s(),u(g(P),{key:0,class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"20"})):h("",!0)]),key:"0"}:void 0,t.showDetails?{name:"details",fn:n(({row:e})=>[_(g(k),{class:"detail-link",appearance:"btn-link",to:e.nameRoute},{icon:n(()=>[_(g(P),{icon:e.warnings.length>0?"warning":"info",color:e.warnings.length>0?"var(--black-75)":"var(--blue-500)","secondary-color":e.warnings.length>0?"var(--yellow-300)":void 0,size:"20"},null,8,["icon","color","secondary-color"])]),default:n(()=>[f(" Details ")]),_:2},1032,["to"])]),key:"1"}:void 0]),1032,["class","headers"])),_(oe,{"has-previous":y.value>0,"has-next":Boolean(t.next),onNext:H,onPrevious:W},null,8,["has-previous","has-next"])])):h("",!0),t.tableDataIsEmpty&&t.tableData?(s(),u(O,{key:1},L({title:n(()=>[me,t.emptyState.title?(s(),c("p",he,d(t.emptyState.title),1)):(s(),c("p",ye," No items found "))]),_:2},[t.emptyState.message?{name:"message",fn:n(()=>[f(d(t.emptyState.message),1)]),key:"0"}:void 0]),1024)):h("",!0),o.$slots.content?(s(),c("div",_e,[E(o.$slots,"content",{},void 0,!0)])):h("",!0)]))])}}});const Ee=T(be,[["__scopeId","data-v-23361f5e"]]);function Se(t,r){const a=new URL(window.location.href);r!=null?a.searchParams.set(t,String(r)):a.searchParams.has(t)&&a.searchParams.delete(t),window.history.replaceState({path:a.href},"",a.href)}export{Ee as D,Se as p};