import{_ as x}from"./NuxtLinkLocale.Op4xnV1p.js";import{_ as y}from"./Notify.-AHZsBKt.js";import{m as w,o as r,c,a as t,d as v,t as i,f as m,v as h,g as u,h as j,i as k,b,w as C,j as S,k as F,l as A}from"./entry.DBhRlPF6.js";import{a as f}from"./auth.cWNOCKeQ.js";import{_ as g}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./nuxt-link.RTq3id3n.js";const M={data(){return{name:"",email:"",subject:"",description:"",attachment:"",name_valid:!1,email_valid:!1,subject_valid:!1,desc_valid:!1,showNotification:!1,notificationTitle:"",notificationDesc:"",notificationColor:"",notificationDuration:3e3}},computed:{...w(f,["access","refresh_token"])},methods:{showNotify(s,o,d){this.notificationTitle=s,this.notificationDesc=o,this.notificationColor=d,this.showNotification=!0,setTimeout(()=>{this.showNotification=!1},this.notificationDuration)},showSuccess(s="Operation completed successfully"){this.showNotify("Success",s,"success")},showError(){this.showNotify("Error",this.non_field_errors?this.non_field_errors:"An error occurred","error")},onFileChange(s){let o=s.target.files||s.dataTransfer.files;o.length&&(this.attachment=o[0])},async useSupport(){const o=F().public.baseURL,{refresh:d}=f(),p=new Headers;p.append("Authorization","Bearer "+this.access);const e=new FormData;e.append("name",this.name),e.append("email",this.email),e.append("description",this.description),e.append("subject",this.subject),e.append("attachment",this.attachment);try{const n=await(await fetch(o+"support/",{method:"POST",headers:p,body:e})).json();n.code==="token_not_valid"&&this.refresh_token?(await d(),(await(await fetch(o+"support/",{method:"POST",headers:p,body:e})).json()).success?this.$router.push({path:this.localePath("tickets")}):(n.email&&(this.email_valid=n.email[0]),n.name&&(this.name_valid=n.name[0]),n.subject&&(this.subject_valid=n.subject[0]),n.description&&(this.desc_valid=n.description[0]))):n.success?this.$router.push({path:this.localePath("tickets")}):(n.email&&(this.email_valid=n.email[0]),n.name&&(this.name_valid=n.name[0]),n.subject&&(this.subject_valid=n.subject[0]),n.description&&(this.desc_valid=n.description[0]))}catch(l){console.error("Error:",l)}}}},N={class:"relative"},V={class:"w-full text-center text-3xl my-11"},D={class:"text-secondary"},T={class:"mb-6 bg-gray-100"},$={class:"mx-auto max-w-4xl py-8 px-6 relative"},B={class:"text-xl font-semibold text-center"},P={class:"mt-8 grid sm:grid-cols-2 gap-11"},H={class:"text-sm flex justify-start items-center gap-2"},L=t("svg",{id:"Profile",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 20.792 25.999"},[t("path",{id:"Fill_1","data-name":"Fill 1",d:"M10.4,0C4.789,0,0,.884,0,4.42S4.759,8.872,10.4,8.872c5.607,0,10.4-.883,10.4-4.42S16.034,0,10.4,0",transform:"translate(0 17.127)",fill:"#77c36b"}),t("path",{id:"Fill_4","data-name":"Fill 4",d:"M6.88,13.759A6.88,6.88,0,1,0,0,6.88a6.855,6.855,0,0,0,6.88,6.88",transform:"translate(3.516 0)",fill:"#77c36b",opacity:"0.4"})],-1),U={key:0,class:"mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"},O={class:"mt-4"},R={class:"text-sm flex justify-start items-center gap-2"},Z=t("svg",{id:"Group_35862","data-name":"Group 35862",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 26 23.401"},[t("path",{id:"Fill_1","data-name":"Fill 1",d:"M26,9.286a6.561,6.561,0,0,1-6.539,6.578H6.565A6.561,6.561,0,0,1,0,9.312V9.3S.008,3.545.018.651a.648.648,0,0,1,1.05-.51C4.157,2.592,9.681,7.06,9.75,7.119a5.287,5.287,0,0,0,3.289,1.157A5.217,5.217,0,0,0,16.328,7.1c.069-.045,5.469-4.38,8.6-6.87a.65.65,0,0,1,1.054.507C26,3.613,26,9.286,26,9.286",transform:"translate(0 7.537)",fill:"#77c36b",opacity:"0.4"}),t("path",{id:"Fill_4","data-name":"Fill 4",d:"M24.665,3.476A6.546,6.546,0,0,0,18.885,0H5.911A6.546,6.546,0,0,0,.131,3.476a1.123,1.123,0,0,0,.287,1.4L10.071,12.6a3.674,3.674,0,0,0,2.314.818h.026a3.674,3.674,0,0,0,2.314-.818l9.652-7.721a1.123,1.123,0,0,0,.287-1.4",transform:"translate(0.654)",fill:"#77c36b"})],-1),z={key:0,class:"mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"},E={class:"mt-4"},G={class:"text-sm flex justify-start items-center gap-2"},q=A('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 28.235"><g id="Group_35889" data-name="Group 35889" transform="translate(-836.5 -1379.904)"><path id="Fill_3" data-name="Fill 3" d="M21.612,9.912c-.637,0-1.482-.014-2.533-.014a4.71,4.71,0,0,1-4.672-4.71V.648A.643.643,0,0,0,13.769,0H6.3A6.337,6.337,0,0,0,0,6.366V21.577a6.625,6.625,0,0,0,6.592,6.658h11.12A6.319,6.319,0,0,0,24,21.885V10.547a.639.639,0,0,0-.639-.647c-.6,0-1.313.011-1.749.011" transform="translate(836.5 1379.904)" fill="#77c36b" opacity="0.4"></path><path id="Fill_1" data-name="Fill 1" d="M1.159.208A.674.674,0,0,0,0,.68V4.4A2.861,2.861,0,0,0,2.848,7.249c.984.011,2.351.014,3.511.011a.673.673,0,0,0,.484-1.141C5.353,4.571,2.687,1.795,1.159.208" transform="translate(853.106 1380.497)" fill="#77c36b" opacity="0.4"></path><path id="Combined_Shape" data-name="Combined Shape" d="M1.051,9.153a1.051,1.051,0,0,1,0-2.1H8.737a1.051,1.051,0,0,1,0,2.1Zm0-7.052a1.051,1.051,0,1,1,0-2.1H5.829a1.051,1.051,0,1,1,0,2.1Z" transform="translate(843.177 1391.055)" fill="#77c36b"></path></g></svg>',1),I={class:"w-full rounded-lg px-4 mt-2 bg-white"},Q={value:"Quotations"},J={value:"SalesOrders"},K={value:"PurchaseOrders"},W={value:"Invoices"},X={value:"Projects"},Y={value:"Tasks"},tt={value:"Tickets"},et={value:"Subscriptions"},st={key:0,class:"mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"},ot={class:""},it={class:"text-sm flex justify-start items-center gap-2"},nt=t("svg",{id:"Chat",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 26 25.961"},[t("path",{id:"Fill_1","data-name":"Fill 1",d:"M13.026,0A13,13,0,0,0,0,13a13.728,13.728,0,0,0,1.755,6.487,1.359,1.359,0,0,1,.091,1.17L.975,23.569a.811.811,0,0,0,1.066,1.014l2.626-.78a2.216,2.216,0,0,1,1.938.468A12.982,12.982,0,1,0,13.026,0",fill:"#77c36b",opacity:"0.4"}),t("path",{id:"Combined_Shape","data-name":"Combined Shape",d:"M11.987,1.664A1.664,1.664,0,1,1,13.65,3.329,1.658,1.658,0,0,1,11.987,1.664ZM5.994,1.651A1.664,1.664,0,1,1,7.658,3.329,1.679,1.679,0,0,1,5.994,1.651ZM0,1.664a1.664,1.664,0,0,1,3.327,0A1.677,1.677,0,0,1,1.664,3.329,1.676,1.676,0,0,1,0,1.664Z",transform:"translate(5.317 11.349)",fill:"#77c36b"})],-1),at={key:0,class:"mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"},lt={class:"mt-5 flex items-center justify-between"},rt={for:"uploadFile1",class:"cursor-pointer bg-white text-secondary border border-secondary rounded-full text-sm px-6 py-3"},ct={class:"mt-5 flex justify-end"},dt={class:"flex flex-col lg:flex-row items-center justify-around px-11 mb-8 mt-5"},pt={class:"flex items-center justify-center mt-5 lg:mt-0"},ut={type:"button",class:"text-white bg-secondary rounded-full text-sm px-6 py-3"};function mt(s,o,d,p,e,l){const n=x,_=y;return r(),c("div",N,[t("div",V,[t("p",null,[v(i(s.$t("customersupport")),1),t("span",D,i(s.$t("support")),1)])]),t("div",T,[t("div",$,[t("p",B,i(s.$t("submitticket")),1),t("form",P,[t("div",null,[t("div",null,[t("label",H,[L,t("span",null,i(s.$t("name")),1)]),m(t("input",{onChange:o[0]||(o[0]=a=>e.name_valid=!1),type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>e.name=a),name:"name",class:"w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none"},null,544),[[h,e.name]]),e.name_valid?(r(),c("span",U,i(e.name_valid),1)):u("",!0)]),t("div",O,[t("label",R,[Z,t("span",null,i(s.$t("email")),1)]),m(t("input",{onChange:o[2]||(o[2]=a=>e.email_valid=!1),type:"email","onUpdate:modelValue":o[3]||(o[3]=a=>e.email=a),name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",class:"w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none peer"},null,544),[[h,e.email]]),e.email_valid?(r(),c("span",z,i(e.email_valid),1)):u("",!0)]),t("div",E,[t("label",G,[q,t("span",null,i(s.$t("subject")),1)]),t("div",I,[m(t("select",{onChange:o[4]||(o[4]=a=>e.subject_valid=!1),"onUpdate:modelValue":o[5]||(o[5]=a=>e.subject=a),name:"subject",id:"",class:"w-full rounded-lg py-2.5 text-sm outline-none"},[t("option",Q,i(s.$t("quotations")),1),t("option",J,i(s.$t("salesorders")),1),t("option",K,i(s.$t("purchaseorders")),1),t("option",W,i(s.$t("invoices")),1),t("option",X,i(s.$t("projects")),1),t("option",Y,i(s.$t("tasks")),1),t("option",tt,i(s.$t("tickets")),1),t("option",et,i(s.$t("subscriptions")),1)],544),[[j,e.subject]])]),e.subject_valid?(r(),c("span",st,i(e.subject_valid),1)):u("",!0)])]),t("div",null,[t("div",ot,[t("label",it,[nt,t("span",null,i(s.$t("desc")),1)]),m(t("textarea",{onChange:o[6]||(o[6]=a=>e.desc_valid=!1),"onUpdate:modelValue":o[7]||(o[7]=a=>e.description=a),rows:"10",name:"description",class:"w-full rounded-lg px-4 mt-2 text-sm pt-3 outline-none"},null,544),[[h,e.description]]),e.desc_valid?(r(),c("span",at,i(e.desc_valid),1)):u("",!0)]),t("div",lt,[t("span",null,i(s.$t("attach")),1),t("label",rt,[v(i(s.$t("upload"))+" ",1),t("input",{type:"file",id:"uploadFile1",class:"hidden",onChange:o[8]||(o[8]=(...a)=>l.onFileChange&&l.onFileChange(...a))},null,32)])]),t("div",ct,[t("button",{onClick:o[9]||(o[9]=k((...a)=>l.useSupport&&l.useSupport(...a),["prevent"])),class:"text-white bg-secondary rounded-full text-sm px-6 py-3"},i(s.$t("submit")),1)])])])])]),t("div",dt,[t("div",null,[t("p",null,i(s.$t("suppdesc1")),1),t("p",null,i(s.$t("suppdesc4")),1)]),t("div",pt,[b(n,{to:"/tickets"},{default:C(()=>[t("button",ut,i(s.$t("viewtickts")),1)]),_:1})])]),e.showNotification?(r(),S(_,{key:0,title:e.notificationTitle,description:e.notificationDesc,color:e.notificationColor,duration:e.notificationDuration},null,8,["title","description","color","duration"])):u("",!0)])}const ht=g(M,[["render",mt]]),ft={computed:{...w(f,["isAuthenticated"])},mounted(){this.isAuthenticated||this.$router.push("login")}};function _t(s,o,d,p,e,l){const n=ht;return r(),c("div",null,[b(n)])}const jt=g(ft,[["render",_t]]);export{jt as default};
