import{g as o,o as u,i as m,h as c}from"./index-673f2769.js";import{k as S,A as g,f as b,t as w,b as i,E as d}from"./@vue_runtime-core@3.3.4-073fad6e.js";import{k as p}from"./@vue_reactivity@3.3.4-2b3a1c4e.js";import{c as E}from"./naive-ui@2.34.4_vue@3.3.4-8a777692.js";const z=S({name:"RayIframe",props:{src:{type:String,required:!0},iframeWrapperClass:{type:String,default:null},frameborder:{type:Number,default:0},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},allow:{type:String,default:null},name:{type:String,default:null},title:{type:String,default:null},onSuccess:{type:[Function,Array],default:null},onError:{type:[Function,Array],default:null},customSpinProps:{type:Object,default:()=>({})},lazy:{type:Boolean,default:!0}},setup(e,{expose:y}){const h=g(()=>({"--ray-iframe-frameborder":o(e.frameborder),"--ray-iframe-width":o(e.width),"--ray-iframe-height":o(e.height)})),a=p(),n=p(!0),l=r=>{n.value=!1;const{onSuccess:t}=e;t&&c(t,a.value,r)},f=r=>{n.value=!1;const{onError:t}=e;t&&c(t,r)},s=()=>a.value;return y({iframeInst:a}),b(()=>{u(s(),"load",l.bind(this)),u(s(),"error",f)}),w(()=>{m(s(),"load",l),m(s(),"error",f)}),{cssVars:h,iframeRef:a,spinShow:n}},render(){return i("div",{class:["ray-iframe",this.iframeWrapperClass],style:[this.cssVars]},[i(E,d(this.customSpinProps,{show:this.spinShow}),{...this.$slots,default:()=>i("iframe",d({class:"ray-iframe__container",ref:"iframeRef",src:this.src,allow:this.allow,name:this.name,title:this.title},{loading:this.lazy?"lazy":null}),null)})])}});export{z as R};
