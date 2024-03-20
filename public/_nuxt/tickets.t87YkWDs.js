import{_ as h}from"./_plugin-vue_export-helper.x3n3nnut.js";import{o as l,c as a,a as s,t,F as g,s as b,r as $,m as _,d as f,b as v,k as y}from"./entry.QegfnR5A.js";import{a as p}from"./auth.3Ddez7sU.js";const k={props:{tickets:Array}},m={class:"overflow-x-auto"},w={class:"table-auto w-full rounded-t-full my-11 text-left"},T={class:"bg-[#333] text-white rounded-t-full"},x={class:"px-4 py-2"},j={class:"px-4 py-2"},S={class:"px-4 py-2"},O={class:"border px-4 py-2"},P={class:"border px-4 py-2"},C={class:"border px-4 py-2"};function E(o,n,c,u,e,r){return l(),a("div",m,[s("table",w,[s("thead",T,[s("tr",null,[s("th",x,t(o.$t("ref")),1),s("th",j,t(o.$t("desc")),1),s("th",S,t(o.$t("subject")),1)])]),s("tbody",null,[(l(!0),a(g,null,b(c.tickets,(i,d)=>(l(),a("tr",{key:d,class:$({"bg-gray-100":d%2!==0})},[s("td",O,t(d+1),1),s("td",P,t(i.description),1),s("td",C,t(i.subject),1)],2))),128))])])])}const I=h(k,[["render",E]]),Q={data(){return{tickets:null,counts:{}}},computed:{..._(p,["access","refresh_token"])},methods:{async getTickets(o=""){const n=y(),{refresh:c}=p(),u=n.public.baseURL,e=new Headers;e.append("Authorization","Bearer "+this.access);try{const r=await fetch(u+"support/?"+o,{method:"GET",headers:e});if(r.ok){const i=await r.json();this.tickets=i,this.updateCounts(i)}else r.status===401&&this.refresh_token?(await c(),await this.getTickets(o)):console.error("Error:",r.statusText)}catch(r){console.error("Error:",r)}},updateCounts(o){this.tickets.forEach(n=>{const c=n.subject;this.counts[c]=(this.counts[c]||0)+1}),console.log(this.counts)}},mounted(){this.getTickets()}},q={class:"mx-0 md:mx-11 lg:mx-24"},A={class:"w-full text-center text-3xl my-11"},B={class:"text-secondary"},L={class:"grid grid-cols-4 xl:grid-cols-8 text-center gap-3 text-sm"},N={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},R={class:"text-3xl text-secondary font-bold"},V={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},z={class:"text-3xl text-secondary font-bold"},F={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},U={class:"text-3xl text-secondary font-bold"},D={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},G={class:"text-3xl text-secondary font-bold"},H={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},J={class:"text-3xl text-secondary font-bold"},K={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},M={class:"text-3xl text-secondary font-bold"},W={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},X={class:"text-3xl text-secondary font-bold"},Y={class:"border border-gray-200 p-5 rounded-lg shadow-inner"},Z={class:"text-3xl text-secondary font-bold"},ss=["placeholder"],ts={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},os={class:"w-full rounded-lg px-4 mt-2 bg-white border border-gray-200"},es={value:"Quotations"},ns={value:"SalesOrders"},rs={value:"PurchaseOrders"},is={value:"Invoices"},ds={value:"Projects"},cs={value:"Tasks"},ls={value:"Tickets"},as={value:"Subscriptions"},us={class:"w-full rounded-lg px-4 mt-2 bg-white border border-gray-200"},ps={value:"Quotations"},hs={value:"SalesOrders"},_s={value:"PurchaseOrders"},vs={value:"Invoices"},gs={value:"Projects"},bs={value:"Tasks"},$s={value:"Tickets"},fs={value:"Subscriptions"},ys={class:"w-full rounded-lg px-4 mt-2 bg-white border border-gray-200"},ks={value:"Quotations"},ms={value:"SalesOrders"},ws={value:"PurchaseOrders"},Ts={value:"Invoices"},xs={value:"Projects"},js={value:"Tasks"},Ss={value:"Tickets"},Os={value:"Subscriptions"};function Ps(o,n,c,u,e,r){const i=I;return l(),a("div",q,[s("div",A,[s("p",null,[f(t(o.$t("tickets2"))+" ",1),s("span",B,t(o.$t("tickets")),1)])]),s("div",L,[s("div",N,[s("div",R,t(e.counts.Quotations?e.counts.Quotations:"0"),1),s("div",null,t(o.$t("quotations")),1)]),s("div",V,[s("div",z,t(e.counts.SalesOrders?e.counts.SalesOrders:"0"),1),s("div",null,t(o.$t("salesorders")),1)]),s("div",F,[s("div",U,t(e.counts.PurchaseOrders?e.counts.PurchaseOrders:"0"),1),s("div",null,t(o.$t("purchaseorders")),1)]),s("div",D,[s("div",G,t(e.counts.Invoices?e.counts.Invoices:"0"),1),s("div",null,t(o.$t("invoices")),1)]),s("div",H,[s("div",J,t(e.counts.Projects?e.counts.Projects:"0"),1),s("div",null,t(o.$t("projects")),1)]),s("div",K,[s("div",M,t(e.counts.Tasks?e.counts.Tasks:"0"),1),s("div",null,t(o.$t("tasks")),1)]),s("div",W,[s("div",X,t(e.counts.Tickets?e.counts.Tickets:"0"),1),s("div",null,t(o.$t("tickets")),1)]),s("div",Y,[s("div",Z,t(e.counts.Subscriptions?e.counts.Subscriptions:"0"),1),s("div",null,t(o.$t("subscriptions")),1)])]),s("div",null,[s("input",{placeholder:o.$t("Search"),type:"text",name:"",id:"",class:"bg-gray-100 w-full sm:w-2/3 rounded-lg outline-none px-4 py-2 my-8"},null,8,ss)]),s("div",ts,[s("div",os,[s("select",{onChange:n[0]||(n[0]=d=>r.getTickets("ordering="+d.target.value)),name:"",id:"",class:"w-full rounded-lg py-2.5 text-sm outline-none"},[s("option",null,t(o.$t("sortby")),1),s("option",es,t(o.$t("quotations")),1),s("option",ns,t(o.$t("salesorders")),1),s("option",rs,t(o.$t("purchaseorders")),1),s("option",is,t(o.$t("invoices")),1),s("option",ds,t(o.$t("projects")),1),s("option",cs,t(o.$t("tasks")),1),s("option",ls,t(o.$t("tickets")),1),s("option",as,t(o.$t("subscriptions")),1)],32)]),s("div",us,[s("select",{onChange:n[1]||(n[1]=d=>r.getTickets("subject="+d.target.value)),name:"",id:"",class:"w-full rounded-lg py-2.5 text-sm outline-none"},[s("option",null,t(o.$t("filterby")),1),s("option",ps,t(o.$t("quotations")),1),s("option",hs,t(o.$t("salesorders")),1),s("option",_s,t(o.$t("purchaseorders")),1),s("option",vs,t(o.$t("invoices")),1),s("option",gs,t(o.$t("projects")),1),s("option",bs,t(o.$t("tasks")),1),s("option",$s,t(o.$t("tickets")),1),s("option",fs,t(o.$t("subscriptions")),1)],32)]),s("div",ys,[s("select",{onChange:n[2]||(n[2]=d=>r.getTickets("ordering="+d.target.value)),name:"",id:"",class:"w-full rounded-lg py-2.5 text-sm outline-none"},[s("option",null,t(o.$t("groupby")),1),s("option",ks,t(o.$t("quotations")),1),s("option",ms,t(o.$t("salesorders")),1),s("option",ws,t(o.$t("purchaseorders")),1),s("option",Ts,t(o.$t("invoices")),1),s("option",xs,t(o.$t("projects")),1),s("option",js,t(o.$t("tasks")),1),s("option",Ss,t(o.$t("tickets")),1),s("option",Os,t(o.$t("subscriptions")),1)],32)])]),v(i,{tickets:e.tickets},null,8,["tickets"])])}const Cs=h(Q,[["render",Ps]]),Es={computed:{..._(p,["isAuthenticated"])},mounted(){this.isAuthenticated||this.$router.push("login")}};function Is(o,n,c,u,e,r){const i=Cs;return l(),a("div",null,[v(i)])}const Bs=h(Es,[["render",Is]]);export{Bs as default};
