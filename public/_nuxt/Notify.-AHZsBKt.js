import{_ as s}from"./_plugin-vue_export-helper.x3n3nnut.js";import{o as a,c as n,a as o,t as e,r,g as c}from"./entry.DBhRlPF6.js";const l={data(){return{show:!1,timeout:null}},props:{title:String,description:String,color:String,duration:{type:Number,default:3e3}},methods:{showNotification(){this.show=!0,this.timeout=setTimeout(()=>{this.hideNotification()},this.duration)},hideNotification(){clearTimeout(this.timeout),this.show=!1}},mounted(){this.showNotification()},beforeDestroy(){clearTimeout(this.timeout)}},u={class:"text-lg font-bold"};function d(h,m,t,_,i,f){return i.show?(a(),n("div",{key:0,class:r(["notification",t.color])},[o("h3",u,e(t.title),1),o("p",null,e(t.description),1)],2)):c("",!0)}const g=s(l,[["render",d],["__scopeId","data-v-f298d032"]]);export{g as _};
