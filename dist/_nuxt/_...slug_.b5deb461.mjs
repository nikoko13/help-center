import{a as F,w as y,r as s,o as m,c as C,h as n,q as x,e as r,j as a,u as g,t as h,b as w,F as L,i as O,k as S,K as j,L as E}from"./entry.a281fa97.mjs";const H={id:"article"},K={key:0},P=r("h3",{class:"mb-3 mt-6"},"Related articles",-1),z={class:"mb-3",style:{color:"#ff883e"}},G={class:"help-cat-card-desc"},Q={__name:"[...slug]",async setup(J){let t,l,e=[],_=[];const{path:o}=F(),c=([t,l]=y(()=>x({where:{_path:{$contains:o}}}).findOne()),t=await t,l(),t);let i=[{text:"Help Center",disabled:!1,to:"/"}];if(c._partial==!0)i.push({text:c.title,disabled:!0});else{i.push({text:c._parent,to:c._parent_path,disabled:!1}),i.push({text:c.title,disabled:!0});const d=o.lastIndexOf("/"),b=o.substring(0,d);e=([t,l]=y(()=>x(b).findSurround(o,{before:4,after:4})),t=await t,l(),t);for(var u=0;u<4&&!(_.length>3);u++){var f=3-u;e[f]!=null&&o!=e[f]._path&&_.push(e[f]);var v=4+u;e[v]!=null&&o!=e[v]._path&&_.push(e[v])}}return(d,b)=>{const k=s("v-icon"),B=s("v-breadcrumbs"),q=j,N=s("v-card"),R=s("v-col"),V=s("v-row"),$=E,A=s("v-container");return m(),C(A,{class:"article-wrapper"},{default:n(()=>[r("div",H,[a($,null,{default:n(({doc:D})=>[a(B,{items:g(i),class:"px-0"},{divider:n(()=>[a(k,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),a(q,{value:D},{"not-found":n(()=>[r("h2",null,"Category ("+h(d.$route.params.category[0])+") not found",1),r("h2",null,"Article slug ("+h(d.$route.params.category[1])+") not found",1)]),_:2},1032,["value"]),g(_).length?(m(),w("div",K,[P,a(V,{style:{"margin-left":"-12px","margin-right":"-12px"}},{default:n(()=>[(m(!0),w(L,null,O(g(_),p=>(m(),C(R,{lg:"6",md:"6",sm:"12",key:p},{default:n(()=>[a(N,{flat:"",class:"help-cat-card",to:p._path},{default:n(()=>[r("div",z,h(p.title),1),r("div",G,h(p.description),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])):S("",!0)]),_:1})])]),_:1})}}};export{Q as default};
