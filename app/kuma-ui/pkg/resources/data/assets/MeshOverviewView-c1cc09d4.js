import{I as x,d as $}from"./kongponents.es-9f2d376a.js";import{d as S,c as m,v as A,o as s,j as u,g as d,b as n,h as o,u as G,r as k,G as H,H as N,x as z,w as v,e as M,f as B,i,F as w,q as V,t as h}from"./index-5b34b65e.js";import{D}from"./DoughnutChart-5a61b4cf.js";import{u as L}from"./store-76151f83.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as J}from"./LabelList.vue_vue_type_style_index_0_lang-11916613.js";import{M as Q}from"./MeshResources-934240cc.js";import{_ as U}from"./YamlView.vue_vue_type_script_setup_true_lang-bcce2ef9.js";import{u as W}from"./index-c89ad052.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-a940747e.js";import"./ErrorBlock-88e8a32d.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-e1caaf97.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-72cdad70.js";import"./toYaml-4e00099e.js";const X={class:"chart-box-list"},Y=S({__name:"MeshCharts",setup(R){const r=L(),y=m(()=>r.getters.getChart("services",{title:"Services",showTotal:!0})),f=m(()=>r.getters.getChart("dataplanes",{title:"DP Proxies",showTotal:!0,isStatusChart:!0})),g=m(()=>r.getters.getChart("kumaDPVersions",{title:"Kuma DP",subtitle:"versions"})),b=m(()=>r.getters.getChart("envoyVersions",{title:"Envoy",subtitle:"versions"}));A(()=>r.state.selectedMesh,function(){p()}),p();function p(){r.dispatch("fetchMeshInsights",r.state.selectedMesh),r.dispatch("fetchServices",r.state.selectedMesh)}return(l,I)=>(s(),u("div",X,[d(D,{data:n(y)},null,8,["data"]),o(),d(D,{data:n(f)},null,8,["data"]),o(),d(D,{data:n(g)},null,8,["data"]),o(),d(D,{data:n(b)},null,8,["data"])]))}});const Z=O(Y,[["__scopeId","data-v-7d682009"]]),ee={class:"kcard-stack"},te={key:1},ae={key:1},se={class:"policy-counts"},ne={key:0},oe=S({__name:"MeshOverviewView",setup(R){const r=W(),y=G(),f=L(),g=k(!0),b=k(!1),p=k(!1),l=k(null),I=k(null),P=m(()=>l.value!==null?H(l.value):null),F=m(()=>{if(l.value===null)return null;const{name:t,type:a,creationTime:_,modificationTime:e}=l.value;return{name:t,type:a,created:N(_),modified:N(e),"Data Plane Proxies":f.state.meshInsight.dataplanes.total}}),K=m(()=>{var T;if(l.value===null)return null;const t=C(l.value,"mtls"),a=C(l.value,"logging"),_=C(l.value,"metrics"),e=C(l.value,"tracing"),c=!!((T=l.value.routing)!=null&&T.localityAwareLoadBalancing);return{mtls:t,logging:a,metrics:_,tracing:e,localityAwareLoadBalancing:c}}),j=m(()=>f.state.sidebar.insights.mesh.policies.total),q=m(()=>f.state.policyTypes.map(t=>{var a;return{...t,length:((a=f.state.meshInsight.policies[t.name])==null?void 0:a.total)??0}}));A(()=>y.params.mesh,function(){y.name==="single-mesh-overview"&&(g.value=!0,p.value=!1,b.value=!1,E())}),E();async function E(){g.value=!0,p.value=!1;const t=y.params.mesh;try{l.value=await r.getMesh({name:t}),I.value=await r.getMeshInsights({name:t})}catch(a){b.value=!0,p.value=!0,console.error(a)}finally{g.value=!1}}function C(t,a){if(t===null||t[a]===void 0)return!1;const _=t[a].enabledBackend??t[a].defaultBackend??t[a].backends[0].name,e=t[a].backends.find(c=>c.name===_);return`${e.type} / ${e.name}`}return(t,a)=>{const _=z("router-link");return s(),u("div",ee,[d(n(x),null,{body:v(()=>[d(Z)]),_:1}),o(),l.value!==null?(s(),M(n(x),{key:0},{body:v(()=>[d(J,{"has-error":b.value,"is-loading":g.value,"is-empty":p.value},{default:v(()=>[i("div",null,[i("ul",null,[(s(!0),u(w,null,V(n(F),(e,c)=>(s(),u("li",{key:c},[i("h4",null,h(c),1),o(),typeof e=="boolean"?(s(),M(n($),{key:0,appearance:e?"success":"danger"},{default:v(()=>[o(h(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(s(),u("p",te,h(e),1))]))),128))])]),o(),i("div",null,[i("ul",null,[(s(!0),u(w,null,V(n(K),(e,c)=>(s(),u("li",{key:c},[i("h4",null,h(c),1),o(),typeof e=="boolean"?(s(),M(n($),{key:0,appearance:e?"success":"danger"},{default:v(()=>[o(h(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(s(),u("p",ae,h(e),1))]))),128))])]),o(),i("div",null,[i("ul",se,[i("li",null,[i("h4",null,`
                  Policies (`+h(n(j))+`)
                `,1),o(),i("ul",null,[(s(!0),u(w,null,V(n(q),(e,c)=>(s(),u(w,{key:c},[e.length!==0?(s(),u("li",ne,[d(_,{to:{name:"policy",params:{policyPath:e.path}}},{default:v(()=>[o(h(e.name)+": "+h(e.length),1)]),_:2},1032,["to"])])):B("",!0)],64))),128))])])])])]),_:1},8,["has-error","is-loading","is-empty"])]),_:1})):B("",!0),o(),n(P)!==null?(s(),M(n(x),{key:1},{body:v(()=>[d(U,{id:"code-block-mesh",content:n(P)},null,8,["content"])]),_:1})):B("",!0),o(),d(Q)])}}});const be=O(oe,[["__scopeId","data-v-bd3f5416"]]);export{be as default};
