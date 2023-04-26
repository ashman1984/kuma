import{d as Z,M as K,I as X,x as ee,J as ae}from"./kongponents.es-5ca9e130.js";import{d as Q,o as c,e as h,w as o,g as D,b as a,h as r,a as te,u as se,r as l,c as $,v as R,B as U,a5 as le,E as oe,j as z,i as m,f as E,Y as F,t as A,F as ne,q as re,p as ie,m as ue}from"./index-6ef061d4.js";import{_ as ce}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-efb4208b.js";import{D as pe}from"./DataOverview-273e56b2.js";import{D as me,a as de}from"./DefinitionListItem-97bb646e.js";import{T as ye}from"./TabsWidget-a1cf8c62.js";import{_ as fe}from"./YamlView.vue_vue_type_script_setup_true_lang-f94f7cbc.js";import{u as ve}from"./store-444aa12f.js";import{u as he,a as _e}from"./index-8eaa4fe5.js";import{Q as O}from"./QueryParameter-70743f73.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-dfb8a1dd.js";import"./ErrorBlock-5ce00c3e.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-431ef500.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-2830199d.js";import"./StatusBadge-310603a4.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-cadc6770.js";import"./toYaml-4e00099e.js";const be=Q({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(d){const i=d;return(x,q)=>(c(),h(a(K),{class:"docs-link",appearance:"outline",target:"_blank",to:i.href},{default:o(()=>[D(a(Z),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),r(`

    Documentation
  `)]),_:1},8,["to"]))}}),ke=d=>(ie("data-v-9d21cf73"),d=d(),ue(),d),Pe={class:"kcard-stack"},we={class:"kcard-border"},Ee=ke(()=>m("p",null,[m("strong",null,"Warning"),r(` This policy is experimental. If you encountered any problem please open an
                  `),m("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),De={class:"kcard-border"},Se={class:"entity-heading","data-testid":"policy-single-entity"},xe=Q({__name:"PolicyListView",props:{selectedPolicyName:{type:String,required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(d){const i=d,x=he(),q=_e(),W=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],H=te(),_=se(),L=ve(),g=l(!0),b=l(!1),y=l(null),f=l(!0),v=l(!1),k=l(!1),S=l(!1),P=l(null),w=l(null),M=l(null),B=l(i.offset),V=l({headers:[{label:"Name",key:"name"},{label:"Type",key:"type"}],data:[]}),u=$(()=>L.state.policyTypesByPath[i.policyPath]),J=$(()=>L.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===i.policyPath}))),Y=$(()=>L.state.policyTypes.filter(e=>(L.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));R(()=>_.params.mesh,function(){_.name===i.policyPath&&(g.value=!0,b.value=!1,f.value=!0,v.value=!1,k.value=!1,S.value=!1,y.value=null,T(0))}),R(()=>_.query.ns,function(){g.value=!0,b.value=!1,f.value=!0,v.value=!1,k.value=!1,S.value=!1,y.value=null,T(0)}),T(i.offset);async function T(e){B.value=e,O.set("offset",e>0?e:null),g.value=!0,y.value=null;const t=_.query.ns||null,n=_.params.mesh,p=u.value.path;try{let s;if(n!==null&&t!==null)s=[await x.getSinglePolicyEntity({mesh:n,path:p,name:t})],M.value=null;else{const I={size:U,offset:e},N=await x.getAllPolicyEntitiesFromMesh({mesh:n,path:p},I);s=N.items??[],M.value=N.next}if(s.length>0){V.value.data=s.map(N=>G(N)),S.value=!1,b.value=!1;const I=i.selectedPolicyName??s[0].name;await C({name:I,mesh:n,path:p})}else V.value.data=[],S.value=!0,b.value=!0,v.value=!0}catch(s){s instanceof Error?y.value=s:console.error(s),b.value=!0}finally{g.value=!1,f.value=!1}}function j(e){H.push({name:"policy",params:{..._.params,policyPath:e.value}})}function G(e){if(!e.mesh)return e;const t=e,n={name:"mesh-detail-view",params:{mesh:e.mesh}};return t.meshRoute=n,t}async function C(e){k.value=!1,f.value=!0,v.value=!1;try{const t=await x.getSinglePolicyEntity({mesh:e.mesh,path:u.value.path,name:e.name});if(t){const n=["type","name","mesh"];P.value=le(t,n),O.set("policy",e.name),w.value=oe(t)}else P.value=null,v.value=!0}catch(t){k.value=!0,console.error(t)}finally{f.value=!1}}return(e,t)=>{var n;return a(u)?(c(),z("div",{key:0,class:F(["relative",a(u).path])},[m("div",Pe,[m("div",we,[a(u).isExperimental?(c(),h(a(ee),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:o(()=>[D(a(X),{appearance:"warning"},{alertMessage:o(()=>[Ee]),_:1})]),_:1})):E("",!0),r(),D(pe,{"selected-entity-name":(n=P.value)==null?void 0:n.name,"page-size":a(U),error:y.value,"is-loading":g.value,"empty-state":{title:"No Data",message:`There are no ${a(u).name} policies present.`},"table-data":V.value,"table-data-is-empty":S.value,next:M.value,"page-offset":B.value,onTableAction:C,onLoadData:T},{additionalControls:o(()=>[D(a(ae),{label:"Policies",items:a(J),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:j},{"item-template":o(({item:p})=>[m("span",{class:F({"policy-type-empty":a(Y).includes(p.label)})},A(p.label),3)]),_:1},8,["items"]),r(),D(be,{href:`${a(q)("KUMA_DOCS_URL")}/policies/${a(u).path}/?${a(q)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"]),r(),e.$route.query.ns?(c(),h(a(K),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"policy",params:{policyPath:i.policyPath}}},{default:o(()=>[r(`
              View all
            `)]),_:1},8,["to"])):E("",!0)]),default:o(()=>[r(`
          >
          `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),r(),m("div",De,[b.value===!1&&P.value!==null?(c(),h(ye,{key:0,"has-error":y.value!==null,error:y.value,"is-loading":g.value,tabs:W},{tabHeader:o(()=>[m("h1",Se,A(a(u).name)+": "+A(P.value.name),1)]),overview:o(()=>[D(de,{"has-error":k.value,"is-loading":f.value,"is-empty":v.value,"data-testid":"policy-detail-label-list"},{default:o(()=>[(c(!0),z(ne,null,re(P.value,(p,s)=>(c(),h(me,{key:s,term:s},{default:o(()=>[r(A(p),1)]),_:2},1032,["term"]))),128))]),_:1},8,["has-error","is-loading","is-empty"]),r(),w.value!==null?(c(),h(fe,{key:0,id:"code-block-policy",class:"mt-4","has-error":k.value,"is-loading":f.value,"is-empty":v.value,content:w.value,"is-searchable":""},null,8,["has-error","is-loading","is-empty","content"])):E("",!0)]),"affected-dpps":o(()=>[w.value!==null?(c(),h(ce,{key:0,mesh:w.value.mesh,"policy-name":w.value.name,"policy-type":a(u).path},null,8,["mesh","policy-name","policy-type"])):E("",!0)]),_:1},8,["has-error","error","is-loading"])):E("",!0)])])],2)):E("",!0)}}});const He=ge(xe,[["__scopeId","data-v-9d21cf73"]]);export{He as default};