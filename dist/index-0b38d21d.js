import{a as j,w as z,r as s,o as l,b as p,j as e,h as t,e as a,q as E,M as B,N as M,F as h,i as f,u as T,c as g,k as H,O as d,P as L,t as c}from"./entry-a47c8efd.js";const O={class:"help-search-panel mb-6 mt-4 pb-6"},G={style:{padding:"32px 16px"}},J=a("h1",{class:"text-center",style:{"margin-bottom":"32px",color:"white"}},"How can we help?",-1),Q={class:"help-cat-card-icon-wrapper"},W={class:"pa-4 help-cat-card-icon"},X={class:"my-6 py-5",style:{"background-color":"#f8f8f8ee"}},Y=a("h3",{class:"text-center pt-5 mb-5"},"Top articles",-1),Z=d("account"),$=d("classroom"),tt=d("Stories"),et=d("Subscription"),ot={class:"mb-3",style:{color:"#ff883e"}},at={class:"help-cat-card-desc"},st={class:"mb-3",style:{color:"#ff883e"}},lt={class:"help-cat-card-desc"},nt={class:"mb-3",style:{color:"#ff883e"}},ct={class:"help-cat-card-desc"},it={class:"mb-3",style:{color:"#ff883e"}},dt={class:"help-cat-card-desc"},rt={style:{"text-align":"center"}},ut=a("h3",null,"Contact support",-1),_t=a("p",null,"Need help with something?",-1),mt=a("a",{href:"https://www.elementari.com/contact",target:"_blank"},"Contact our support team",-1),pt={style:{"text-align":"center"}},ht=a("h3",null,"Bank of Curriculums",-1),ft=a("p",null,[d("Find ready-to-use activities for your class "),a("a",{href:"https://www.elementari.com/curriculums",target:"_blank"},"here"),d("!")],-1),vt={__name:"index",props:{searchValue:String,tab:String},async setup(v){let y,I;const N=v,F=[{icon:"mdi-account-outline",title:"Account Settings",text:"Includes changing your email or password and deleting your account",to:"account-settings"},{icon:"mdi-book-open-page-variant-outline",title:"Creating Stories",text:"Includes changing your email or password and deleting your account",to:"creating-stories"},{icon:"mdi-school-outline",title:"Classroom Dashboard",text:"Includes changing your email or password and deleting your account",to:"classroom-dashboard"},{icon:"mdi-cash",title:"Pricing & Billing",text:"Includes canceling a Elementari subscription and fixing card errors",to:"payments-pricing-and-billing"},{icon:"mdi-key-outline",title:"Commitment to Privacy",text:"Commitment to Privacy",to:"commitment-to-privacy"},{icon:"mdi-text-box-multiple-outline",title:"PD & Media Kits",text:"Includes changing your email or password and deleting your account",to:"pd-media-kits"}],{path:K}=j(),_=([y,I]=z(()=>E(K).where({_featured:!0}).find()),y=await y,I(),y);console.log(_);const P=function(){if(N.searchValue=="")return;L().push({path:"search",query:{query:N.searchValue}})},x=function(V){let n=[];for(var r=0;r<_.length&&!(n.length>5);r++)_[r]._parent_path==V&&_[r]._featured&&n.push(_[r]);return n};return(V,n)=>{const r=s("v-text-field"),i=s("v-col"),u=s("v-row"),C=s("v-icon"),D=s("v-card-title"),q=s("v-card-text"),m=s("v-card"),S=s("v-container"),b=s("v-tab"),R=s("v-tabs"),w=s("v-window-item"),U=s("v-window"),k=s("v-flex"),A=s("v-layout");return l(),p("div",null,[e(S,{style:{"max-width":"966px"}},{default:t(()=>[a("div",O,[a("div",G,[J,e(u,null,{default:t(()=>[e(i,{class:"ma-auto",cols:"12",md:"8",sm:"10"},{default:t(()=>[e(r,{modelValue:v.searchValue,"onUpdate:modelValue":n[0]||(n[0]=o=>B(searchValue)?searchValue.value=o:null),"prepend-inner-icon":"mdi-magnify",label:"Search",variant:"solo","onClick:prependInner":P,clearable:"","clear-icon":"mdi-cancel",onKeyup:M(P,["enter"]),"hide-details":""},null,8,["modelValue","onKeyup"])]),_:1})]),_:1})])]),e(u,{style:{margin:"auto"}},{default:t(()=>[(l(),p(h,null,f(F,o=>e(i,{lg:"4",md:"6",sm:"12",key:o},{default:t(()=>[e(m,{flat:"",class:"text-center help-cat-card",to:"/"+o.to},{default:t(()=>[a("div",Q,[a("div",W,[e(C,{color:"#ff883e",icon:o.icon,class:"mb-4 mt-3"},null,8,["icon"])])]),e(D,{class:"justify-center help-cat-card-header pa-0"},{default:t(()=>[d(c(o.title),1)]),_:2},1024),e(q,{class:"pa-0"},{default:t(()=>[d(c(o.text),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1})]),_:1}),a("div",X,[e(S,{style:{"max-width":"966px"}},{default:t(()=>[Y,T(_).length?(l(),g(m,{key:0,flat:""},{default:t(()=>[e(R,{modelValue:v.tab,"onUpdate:modelValue":n[1]||(n[1]=o=>B(tab)?tab.value=o:null),"background-color":"#f8f8f8ee",color:"#ff883e",class:"px-2",grow:""},{default:t(()=>[e(b,{value:"1"},{default:t(()=>[Z]),_:1}),e(b,{value:"2"},{default:t(()=>[$]),_:1}),e(b,{value:"3"},{default:t(()=>[tt]),_:1}),e(b,{value:"4"},{default:t(()=>[et]),_:1})]),_:1},8,["modelValue"]),e(q,{class:"px-0",style:{"background-color":"#f8f8f8ee"}},{default:t(()=>[e(U,{modelValue:v.tab,"onUpdate:modelValue":n[2]||(n[2]=o=>B(tab)?tab.value=o:null)},{default:t(()=>[e(w,{value:"1"},{default:t(()=>[e(u,{style:{margin:"auto"}},{default:t(()=>[(l(!0),p(h,null,f(x("/account-settings"),o=>(l(),g(i,{lg:"4",md:"6",sm:"12",class:"px-2",key:o._path},{default:t(()=>[e(m,{class:"help-cat-card",to:o._path},{default:t(()=>[a("div",ot,c(o.title),1),a("div",at,c(o.description),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1}),e(w,{value:"2"},{default:t(()=>[e(u,{style:{margin:"auto"}},{default:t(()=>[(l(!0),p(h,null,f(x("/classroom-dashboard"),o=>(l(),g(i,{lg:"4",md:"6",sm:"12",class:"px-2",key:o._path},{default:t(()=>[e(m,{class:"help-cat-card",to:o._path},{default:t(()=>[a("div",st,c(o.title),1),a("div",lt,c(o.description),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1}),e(w,{value:"3"},{default:t(()=>[e(u,{style:{margin:"auto"}},{default:t(()=>[(l(!0),p(h,null,f(x("/creating-stories"),o=>(l(),g(i,{lg:"4",md:"6",sm:"12",class:"px-2",key:o._path},{default:t(()=>[e(m,{class:"help-cat-card",to:o._path},{default:t(()=>[a("div",nt,c(o.title),1),a("div",ct,c(o.description),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1}),e(w,{value:"4"},{default:t(()=>[e(u,{style:{margin:"auto"}},{default:t(()=>[(l(!0),p(h,null,f(x("/payments-pricing-and-billing"),o=>(l(),g(i,{lg:"4",md:"6",sm:"12",class:"px-2",key:o._path},{default:t(()=>[e(m,{class:"help-cat-card",to:o._path},{default:t(()=>[a("div",it,c(o.title),1),a("div",dt,c(o.description),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):H("",!0)]),_:1})]),e(S,{style:{"max-width":"966px"}},{default:t(()=>[e(u,null,{default:t(()=>[e(i,{class:"ma-auto",lg:"4",md:"6",sm:"12"},{default:t(()=>[a("div",rt,[e(A,{"align-start":""},{default:t(()=>[e(k,null,{default:t(()=>[e(C,{color:"#ff883e",icon:"mdi-help-circle-outline",class:"mb-4 mt-3",size:"80"})]),_:1}),e(k,{class:"pt-3 pl-3",style:{"text-align":"left"}},{default:t(()=>[ut,_t,mt]),_:1})]),_:1})])]),_:1}),e(i,{class:"ma-auto",lg:"4",md:"6",sm:"12"},{default:t(()=>[a("div",pt,[e(A,{"align-start":""},{default:t(()=>[e(k,null,{default:t(()=>[e(C,{color:"#ff883e",icon:"mdi-school-outline",class:"mb-4 mt-3",size:"80"})]),_:1}),e(k,{class:"pt-3 pl-3",style:{"text-align":"left"}},{default:t(()=>[ht,ft]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})])}}};export{vt as default};
