import{u as v,a as h,g as N,b as f,s as u,c as p,A as d,R as y,d as o,e as w,T as b,L as S}from"./index-2146455c.js";import"./dayjs@1.11.9-6a1565a1.js";import{R as x,L as R}from"./ray-0f391b04.js";import{R as C}from"./index-b6b23c85.js";import{b as _}from"./@vueuse_core@9.13.0_vue@3.3.6-52ac0131.js";import"./lodash-es@4.17.21-a64fa61b.js";import"./vue-hooks-plus@1.8.5_vue@3.3.6-2f171f2e.js";import"./lodash@4.17.21-e6f077ad.js";import"./awesome-qr@2.1.5-rc.0-76c123e9.js";import"./canvas@2.11.2-f05bd587.js";import"./js-binary-schema-parser@2.0.3-9e47f7a8.js";import"./js-cookie@3.0.5-19aa770d.js";import"./screenfull@5.2.0-7567c894.js";import"./qs@6.11.2-83b75eda.js";import"./side-channel@1.0.4-36eac644.js";import"./get-intrinsic@1.2.1-c74897b4.js";import"./has-symbols@1.0.3-e8f3ca0e.js";import"./has-proto@1.0.1-f7d0b240.js";import"./function-bind@1.1.1-22e7ee79.js";import"./has@1.0.3-2d67dc68.js";import"./call-bind@1.0.2-c8357e2b.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.6-02097300.js";import"./clipboard@2.0.11-4ae3371d.js";import"./@vueuse_shared@9.13.0_vue@3.3.6-b2a32b41.js";function F(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vue.isVNode(e)}const k=Vue.defineComponent({name:"RSigning",setup(){const e=Vue.ref(),{t:i}=v(),{signing:t}=h(),{path:n}=y,a=N("globalSpinning"),c=()=>({name:"Ray Admin",pwd:"123456"}),{router:g}=f(),s=Vue.ref(c()),m={name:{required:!0,message:i("views.login.index.NamePlaceholder"),trigger:["blur","input"]},pwd:{required:!0,message:i("views.login.index.PasswordPlaceholder"),trigger:["blur","input"]}};return{signingForm:s,loginFormRef:e,handleLogin:()=>{var l;(l=e.value)==null||l.validate(V=>{V||(u("globalSpinning",!0),t(s.value).then(r=>{r.code===0&&setTimeout(()=>{u("globalSpinning",!1),window.$message.success(`欢迎${s.value.name}登陆~`),p(d.token,"tokenValue"),p(d.signing,r.data),g.push(n)},2*1e3)}).catch(()=>{window.$message.error("不可以这样哟, 不可以哟")}))})},rules:m,globalSpinning:a}},render(){let e;const{$t:i,globalSpinning:t}=this;return Vue.createVNode(naive.NForm,{model:this.signingForm,ref:"loginFormRef",rules:this.rules},{default:()=>[Vue.createVNode(naive.NFormItem,{label:i("views.login.index.Name"),path:"name"},{default:()=>[Vue.createVNode(naive.NInput,{value:this.signingForm.name,"onUpdate:value":n=>this.signingForm.name=n,placeholder:i("views.login.index.NamePlaceholder")},null)]}),Vue.createVNode(naive.NFormItem,{label:i("views.login.index.Password"),path:"pwd"},{default:()=>[Vue.createVNode(naive.NInput,{value:this.signingForm.pwd,"onUpdate:value":n=>this.signingForm.pwd=n,type:"password",showPasswordOn:"click",placeholder:i("views.login.index.PasswordPlaceholder")},null)]}),Vue.createVNode(naive.NButton,{style:["width: 100%","margin-to: 18px"],type:"primary",onClick:this.handleLogin.bind(this),loading:t},F(e=i("views.login.index.Login"))?e:{default:()=>[e]})]})}}),T=Vue.defineComponent({name:"RRegister",render(){return Vue.createVNode(naive.NResult,{status:"info",title:"提示",description:"我实在是不想写了..."},null)}});const O=Vue.defineComponent({name:"QRCodeSigning",setup(){const e=Vue.reactive({qrcodeValue:"https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io"});return{...Vue.toRefs(e)}},render(){return Vue.createVNode("div",{class:"qrcode-signing"},[Vue.createVNode(x,{text:"ray template yes",size:200,logoImage:R},null)])}});function L(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vue.isVNode(e)}const j=Vue.defineComponent({name:"SSOSigning",setup(){return{ssoSigningOptions:[{icon:"github",key:"github",tooltipLabel:"Github登陆"},{icon:"google",key:"google",tooltipLabel:"Google登陆"},{icon:"twitter",key:"twitter",tooltipLabel:"Twitter登陆"}],handleSSOSigningClick:t=>{window.$message.info(`调用${t.tooltipLabel}`)}}},render(){let e;return Vue.createVNode(naive.NSpace,{class:"sso-signing",align:"center",itemStyle:{display:"flex"}},L(e=this.ssoSigningOptions.map(i=>Vue.createVNode(naive.NPopover,{key:i.key},{trigger:()=>Vue.createVNode(o,{name:i.icon,size:"24",cursor:"pointer",onClick:this.handleSSOSigningClick.bind(this,i)},null),default:()=>i.tooltipLabel})))?e:{default:()=>[e]})}}),ae=Vue.defineComponent({name:"RLogin",setup(){const{layout:{copyright:e}}={pkg:{dependencies:{"@vueuse/core":"^9.13.0","awesome-qr":"2.1.5-rc.0",axios:"^1.2.0",clipboard:"^2.0.11","crypto-js":"^4.1.1","currency.js":"^2.0.4",dayjs:"^1.11.7",echarts:"^5.4.3","lodash-es":"^4.17.21",mockjs:"1.1.0","naive-ui":"^2.35.0",pinia:"^2.1.4","pinia-plugin-persistedstate":"^3.1.0","print-js":"^1.6.0",vue:"^3.3.6","vue-hooks-plus":"1.8.5","vue-i18n":"^9.2.2","vue-router":"^4.2.4",xlsx:"^0.18.5"},devDependencies:{"@babel/core":"^7.20.2","@babel/eslint-parser":"^7.19.1","@commitlint/cli":"^17.4.2","@commitlint/config-conventional":"^17.4.2","@intlify/unplugin-vue-i18n":"^0.12.1","@types/crypto-js":"^4.1.1","@types/lodash-es":"^4.17.7","@types/mockjs":"1.0.7","@typescript-eslint/eslint-plugin":"^5.61.0","@typescript-eslint/parser":"^5.61.0","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue-hooks-plus/resolvers":"1.2.4","@vue/eslint-config-prettier":"^7.1.0","@vue/eslint-config-typescript":"^11.0.3",autoprefixer:"^10.4.8",depcheck:"^1.4.3",eslint:"^8.44.0","eslint-config-prettier":"^8.8.0","eslint-config-standard-with-typescript":"^23.0.0","eslint-plugin-import":"^2.25.2","eslint-plugin-n":"^15.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.0.0","eslint-plugin-react":"^7.31.10","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.1.0",postcss:"^8.1.0","postcss-px-to-viewport-8-plugin":"1.2.2",prettier:"^2.7.1","rollup-plugin-visualizer":"^5.8.3",sass:"1.54.3","svg-sprite-loader":"^6.0.11",typescript:"^5.0.2","unplugin-auto-import":"^0.15.0","unplugin-vue-components":"^0.25.1",vite:"^4.4.9","vite-plugin-cdn2":"0.12.4","vite-plugin-compression":"^0.5.1","vite-plugin-ejs":"^1.6.4","vite-plugin-eslint":"1.8.1","vite-plugin-imp":"^2.3.1","vite-plugin-inspect":"^0.7.26","vite-plugin-mock-dev-server":"1.3.0","vite-plugin-svg-icons":"^2.0.1","vite-svg-loader":"^4.0.0","vue-tsc":"^1.8.4"},name:"ray-template",version:"4.3.0"},layout:{copyright:"Copyright © 2022-present Ray",sideBarLogo:{icon:"ray",title:"Ray Template",url:"/dashboard",jumpType:"station"}},appPrimaryColor:{primaryColor:"#2d8cf0",primaryFadeColor:"rgba(45, 140, 240, 0.3)"}},i=Vue.reactive({tabsValue:"signing"}),{height:t,width:n}=_(),{updateLocale:a}=w();return{...Vue.toRefs(i),windowHeight:t,updateLocale:a,copyright:e,windowWidth:n}},render(){const{$t:e}=this;return Vue.createVNode("div",{class:["login"],style:[`height: ${this.windowHeight}px`,`--login-height: ${this.windowHeight}px`]},[Vue.createVNode("div",{class:["login-wrapper",this.windowWidth>=1440?"login-wrapper--divider":""]},[Vue.createVNode("div",{class:["login-wrapper__content"]},[Vue.createVNode(naive.NSpace,{align:"center",class:"login-title__wrapper"},{default:()=>[Vue.createVNode(o,{name:"ray",size:"48"},null),Vue.createVNode(naive.NGradientText,{class:"login-title",type:"info",size:28},{default:()=>[Vue.createTextVNode("Ray Template")]})]}),Vue.createVNode(naive.NSpace,{align:"center",class:"login-action__wrapper",itemStyle:{display:"flex"}},{default:()=>[Vue.createVNode(b,null,null),Vue.createVNode(naive.NDropdown,{options:S,onSelect:i=>this.updateLocale(i)},{default:()=>[Vue.createVNode(o,{customClassName:"login-icon",name:"language",size:"18",cursor:"pointer"},null)]})]}),Vue.createVNode(naive.NGrid,{cols:"s:1 m:1 l:2 xl:2 2xl:2",itemResponsive:!1,responsive:"screen"},{default:()=>[Vue.createVNode(naive.NGridItem,{span:"s:0 m:0 l:1 xl:1 2xl:1",class:"login__left-wrapper"},{default:()=>[Vue.createVNode(naive.NSpace,{align:"center",vertical:!0},{default:()=>[Vue.createVNode(o,{name:"login_bg",width:"368",height:"368"},null),Vue.createVNode(naive.NGradientText,{class:"login-title",type:"info",size:36},{default:()=>[Vue.createTextVNode("开箱即用的中后台管理系统")]})]})]}),Vue.createVNode(naive.NGridItem,{span:1,class:"login__right-wrapper"},{default:()=>[Vue.createVNode(naive.NCard,{class:"login__right-wrapper__content",embedded:!0,bordered:!1},{default:()=>[Vue.createVNode(naive.NTabs,{value:this.tabsValue,"onUpdate:value":i=>this.tabsValue=i,type:"line",animated:!0,size:"large"},{default:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NTabPane,{tab:e("views.login.index.Signing"),name:"signing"},{default:()=>[Vue.createVNode(k,null,null)]}),Vue.createVNode(naive.NTabPane,{tab:e("views.login.index.Register"),name:"register"},{default:()=>[Vue.createVNode(T,null,null)]}),Vue.createVNode(naive.NTabPane,{tab:e("views.login.index.QRCodeSigning"),name:"qrcodeSigning"},{default:()=>[Vue.createVNode(O,null,null)]})])}),Vue.createVNode(naive.NDivider,null,{default:()=>[Vue.createTextVNode("其他登陆方式")]}),Vue.createVNode(j,null,null),Vue.createVNode(naive.NDivider,null,{default:()=>[Vue.createTextVNode("友情链接")]}),Vue.createVNode(C,null,null)]})]})]}),Vue.createVNode(naive.NSpace,{align:"center",justify:"center",class:"login-copyright__wrapper",wrapItem:!1},{default:()=>[this.copyright]})])])])}});export{ae as default};
