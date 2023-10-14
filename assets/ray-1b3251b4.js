import{n as g,d as h,h as d,p as V}from"./index-0017ec2b.js";import{l as b}from"./awesome-qr@2.1.5-rc.0-76c123e9.js";const N={loadingDescription:{type:String},watchText:{type:Boolean,default:!0},status:{type:String},errorDescription:{type:[String,Object],default:"二维码已过期"},errorActionDescription:{type:String,default:"重新加载"},text:{type:String,required:!0},size:{type:Number,default:160},margin:{type:Number,default:12},correctLevel:{type:Number,default:1,validator:e=>[0,1,2,3].includes(e)},maskPattern:{type:Number},version:{type:Number},components:{type:Object,default:()=>({data:{scale:1},timing:{scale:1,protectors:!1},alignment:{scale:1,protectors:!1},cornerAlignment:{scale:1,protectors:!0}})},colorDark:{type:String,default:"#000000"},colorLight:{type:String,default:"#ffffff"},autoColor:{type:Boolean,default:!0},backgroundImage:{type:String},backgroundDimming:{type:String,default:"rgba(0, 0, 0, 0)"},gifBackgroundURL:{type:String},gifBackground:{type:ArrayBuffer},whiteMargin:{type:Boolean,default:!0},logoImage:{type:String},logoScale:{type:Number,default:.4},logoMargin:{type:Number,default:6},logoCornerRadius:{type:Number,default:8},dotScale:{type:Number,default:1},onSuccess:{type:[Function,Array],default:null},onError:{type:[Function,Array],default:null},onReload:{type:[Function,Array],default:null}},R=e=>new Promise((i,c)=>{const t=new XMLHttpRequest;t.responseType="blob",t.onload=()=>{const o=new FileReader;o.onloadend=()=>{i(o.result)},o.onerror=n=>{c(n)},o.onabort=n=>{c(n)},o.readAsArrayBuffer(t.response)},t.open("GET",e),t.send()}),w=Vue.defineComponent({name:"RayQRcode",props:N,setup(e,i){const{expose:c}=i,t=Vue.ref(),o={opacitySpinning:"0.1"};let n,l;const p=async()=>{const{gifBackgroundURL:r}=e;if(r)try{n=await R(r)}catch(u){console.error(u)}},f=()=>{const{gifBackground:r,...u}=e;new b.AwesomeQR({...u,gifBackground:n??void 0}).draw().then(s=>{const{onSuccess:a}=e;a&&d(a,s),t.value=s}).catch(s=>{const{onError:a}=e;a&&d(a,s)})},y=()=>{if(i.slots.errorAction)return;const{onReload:r}=e;r&&d(r)},m=r=>{t.value&&g(t.value,"String")&&V(t.value,r||new Date().getTime()+".png")};return Vue.watchEffect(()=>{e.watchText&&(l=Vue.watch(()=>e.text,()=>f()))}),c({downloadQRCode:m}),Vue.onMounted(async()=>{await p(),f()}),Vue.onBeforeUnmount(()=>{l&&l()}),{qrcodeURL:t,spinOverrides:o,errorActionClick:y}},render(){return Vue.createVNode("div",{class:"ray-qrcode"},[Vue.createVNode(naive.NSpin,{show:this.status==="loading",themeOverrides:this.spinOverrides,description:this.loadingDescription},{default:()=>[Vue.createVNode("img",{src:this.qrcodeURL},null)]}),this.status==="error"?Vue.createVNode("div",{class:"ray-qrcode__error"},[Vue.createVNode("div",{class:"ray-qrcode__error-content"},[g(this.errorDescription,"String")?this.errorDescription:()=>this.errorDescription]),Vue.createVNode("div",{class:"ray-qrcode__error-btn",onClick:this.errorActionClick.bind(this)},[this.$slots.errorAction?this.$slots.errorAction():Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NButton,{text:!0,color:"#ffffff"},{default:()=>this.errorActionDescription,icon:()=>Vue.createVNode(h,{name:"reload",size:"16",color:"#ffffff"},null)})])])]):null])}}),A="/ray-template/assets/ray-ab649d1c.svg";export{A as L,w as R};
