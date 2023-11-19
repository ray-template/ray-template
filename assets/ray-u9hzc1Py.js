import{R as V}from"./hooks-2u1tWfGq.js";import{l as h}from"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import{i as g,d,B as N}from"./utils-ZG9ktGpF.js";const R={loadingDescription:{type:String},watchText:{type:Boolean,default:!0},status:{type:String},errorDescription:{type:[String,Object],default:"二维码已过期"},errorActionDescription:{type:String,default:"重新加载"},text:{type:String,required:!0},size:{type:Number,default:160},margin:{type:Number,default:12},correctLevel:{type:Number,default:1,validator:e=>[0,1,2,3].includes(e)},maskPattern:{type:Number},version:{type:Number},components:{type:Object,default:()=>({data:{scale:1},timing:{scale:1,protectors:!1},alignment:{scale:1,protectors:!1},cornerAlignment:{scale:1,protectors:!0}})},colorDark:{type:String,default:"#000000"},colorLight:{type:String,default:"#ffffff"},autoColor:{type:Boolean,default:!0},backgroundImage:{type:String},backgroundDimming:{type:String,default:"rgba(0, 0, 0, 0)"},gifBackgroundURL:{type:String},gifBackground:{type:ArrayBuffer},whiteMargin:{type:Boolean,default:!0},logoImage:{type:String},logoScale:{type:Number,default:.4},logoMargin:{type:Number,default:6},logoCornerRadius:{type:Number,default:8},dotScale:{type:Number,default:1},onSuccess:{type:[Function,Array],default:null},onError:{type:[Function,Array],default:null},onReload:{type:[Function,Array],default:null}},S=e=>new Promise((s,c)=>{const t=new XMLHttpRequest;t.responseType="blob",t.onload=()=>{const o=new FileReader;o.onloadend=()=>{s(o.result)},o.onerror=a=>{c(a)},o.onabort=a=>{c(a)},o.readAsArrayBuffer(t.response)},t.open("GET",e),t.send()}),B=Vue.defineComponent({name:"RayQRcode",props:R,setup(e,s){const{expose:c}=s,t=Vue.ref(),o={opacitySpinning:"0.1"};let a,n;const p=async()=>{const{gifBackgroundURL:r}=e;if(r)try{a=await S(r)}catch(l){console.error(l)}},f=()=>{const{gifBackground:r,...l}=e;new h.AwesomeQR({...l,gifBackground:a??void 0}).draw().then(u=>{const{onSuccess:i}=e;i&&d(i,u),t.value=u}).catch(u=>{const{onError:i}=e;i&&d(i,u)})},y=()=>{if(s.slots.errorAction)return;const{onReload:r}=e;r&&d(r)},m=r=>{t.value&&g(t.value,"String")&&N(t.value,r||new Date().getTime()+".png")};return Vue.watchEffect(()=>{e.watchText?n=Vue.watch(()=>e.text,()=>f()):n==null||n()}),c({downloadQRCode:m}),Vue.onMounted(async()=>{await p(),f()}),Vue.onBeforeUnmount(()=>{n==null||n()}),{qrcodeURL:t,spinOverrides:o,errorActionClick:y}},render(){return Vue.createVNode("div",{class:"ray-qrcode"},[Vue.createVNode(naive.NSpin,{show:this.status==="loading",themeOverrides:this.spinOverrides,description:this.loadingDescription},{default:()=>[Vue.createVNode("img",{src:this.qrcodeURL},null)]}),this.status==="error"?Vue.createVNode("div",{class:"ray-qrcode__error"},[Vue.createVNode("div",{class:"ray-qrcode__error-content"},[g(this.errorDescription,"String")?this.errorDescription:()=>this.errorDescription]),Vue.createVNode("div",{class:"ray-qrcode__error-btn",onClick:this.errorActionClick.bind(this)},[this.$slots.errorAction?this.$slots.errorAction():Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NButton,{text:!0},{default:()=>this.errorActionDescription,icon:()=>Vue.createVNode(V,{name:"reload",size:"16",color:"#ffffff"},null)})])])]):null])}}),w="/ray-template/assets/ray-axE6w3gG.svg";export{w as L,B as R};
