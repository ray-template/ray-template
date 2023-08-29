import{u as F,a as L,b as T,s as v,c as f,A as y,R as P,d as a,e as V,T as B,L as E}from"./index-e4518e27.js";import{k as o,b as e,q as N,p as l,F as $}from"./@vue_runtime-core@3.3.4-073fad6e.js";import{k as w,h as k,v as C}from"./@vue_reactivity@3.3.4-2b3a1c4e.js";import{O as S,r as b,P as q,M as z,u as D,R as A,g as s,S as x,p as I,T as G,U as R,V as Q,W as U,X as d,i as _}from"./naive-ui@2.34.4_vue@3.3.4-8a777692.js";import{Q as H}from"./qrcode.vue@3.3.4_vue@3.3.4-8759f3fa.js";import{R as W}from"./index-797c5489.js";import{b as X}from"./@vueuse_core@9.1.0_vue@3.3.4-3ed9a412.js";import"./vue-router@4.2.4_vue@3.3.4-e93fe26b.js";import"./lodash-es@4.17.21-b7de4195.js";import"./vue-i18n@9.2.2_vue@3.3.4-61e8862b.js";import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-777854c2.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./dayjs@1.11.7-0fed7618.js";import"./@babel_runtime@7.22.6-47b11949.js";import"./pinia@2.1.4_typescript@5.0.2_vue@3.3.4-ab93b4ec.js";import"./vue-demi@0.14.5_vue@3.3.4-71ba0ef2.js";import"./@vue_runtime-dom@3.3.4-d86573ec.js";import"./@vue_shared@3.3.4-896c5ecf.js";import"./screenfull@6.0.2-b3e6dc1f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.1.4-4f3b1591.js";import"./clipboard@2.0.11-3174d29e.js";import"./date-fns@2.30.0-1707c6fa.js";import"./vueuc@0.4.51_vue@3.3.4-6588b5bd.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-dc6f1e91.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.3.4-24369cc5.js";import"./vooks@0.2.12_vue@3.3.4-59877c34.js";import"./vdirs@0.1.8_vue@3.3.4-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./treemate@0.3.11-25c27bff.js";import"./date-fns-tz@1.3.8_date-fns@2.30.0-f45fcfa5.js";import"./async-validator@4.2.5-dee29e8b.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";import"./@vueuse_shared@9.1.0_vue@3.3.4-e5bccb39.js";function K(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!N(i)}const M=o({name:"RSignin",setup(){const i=w(),{t}=F(),n=L(),{signin:r}=n,{path:u}=P,p=()=>({name:"Ray Admin",pwd:"123456"}),{router:g}=T(),c=w(p()),j={name:{required:!0,message:t("views.login.index.NamePlaceholder"),trigger:["blur","input"]},pwd:{required:!0,message:t("views.login.index.PasswordPlaceholder"),trigger:["blur","input"]}};return{signinForm:c,loginFormRef:i,handleLogin:()=>{var m;(m=i.value)==null||m.validate(O=>{O||(v(!0),r(c.value).then(h=>{h.code===0&&setTimeout(()=>{v(!1),window.$message.success(`欢迎${c.value.name}登陆~`),f(y.token,"tokenValue"),f(y.signin,h.data),g.push(u)},2*1e3)}).catch(()=>{window.$message.error("不可以这样哟, 不可以哟")}))})},rules:j,t}},render(){let i;const{t}=this;return e(z,{model:this.signinForm,ref:"loginFormRef",rules:this.rules},{default:()=>[e(S,{label:t("views.login.index.Name"),path:"name"},{default:()=>[e(b,{value:this.signinForm.name,"onUpdate:value":n=>this.signinForm.name=n,placeholder:t("views.login.index.NamePlaceholder")},null)]}),e(S,{label:t("views.login.index.Password"),path:"pwd"},{default:()=>[e(b,{value:this.signinForm.pwd,"onUpdate:value":n=>this.signinForm.pwd=n,type:"password",placeholder:t("views.login.index.PasswordPlaceholder")},null)]}),e(q,{style:["width: 100%","margin-to: 18px"],type:"primary",onClick:this.handleLogin.bind(this)},K(i=t("views.login.index.Login"))?i:{default:()=>[i]})]})}}),Y=o({name:"RRegister",render(){return e(D,{status:"info",title:"提示",description:"我实在是不想写了..."},null)}});const J=o({name:"QRCodeSignin",setup(){const i=k({qrcodeValue:"https://github.com/XiaoDaiGua-Ray/xiaodaigua-ray.github.io"});return{...C(i)}},render(){return e("div",{class:"qrcode-signin"},[e(H,{value:this.qrcodeValue,size:200},null)])}});function Z(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!N(i)}const ee=o({name:"SSOSignin",setup(){return{ssoSigninOptions:[{icon:"github",key:"github",tooltipLabel:"Github登陆"},{icon:"google",key:"google",tooltipLabel:"Google登陆"},{icon:"twitter",key:"twitter",tooltipLabel:"Twitter登陆"}],handleSSOSigninClick:n=>{window.$message.info(`调用${n.tooltipLabel}`)}}},render(){let i;return e(s,{class:"sso-signin",align:"center",itemStyle:{display:"flex"}},Z(i=this.ssoSigninOptions.map(t=>e(A,null,{trigger:()=>e(a,{name:t.icon,size:"24",cursor:"pointer",onClick:this.handleSSOSigninClick.bind(this,t)},null),default:()=>t.tooltipLabel})))?i:{default:()=>[i]})}}),De=o({name:"RLogin",setup(){const{t:i}=F(),{layout:{copyright:t}}={pkg:{dependencies:{"@vueuse/core":"^9.1.0",axios:"^1.2.0",clipboard:"^2.0.11","crypto-js":"^4.1.1","currency.js":"^2.0.4",dayjs:"^1.11.7",echarts:"^5.4.0","lodash-es":"^4.17.21",mockjs:"1.1.0","naive-ui":"^2.34.4",pinia:"^2.1.4","pinia-plugin-persistedstate":"^3.1.0","print-js":"^1.6.0","qrcode.vue":"^3.3.4",sass:"^1.54.3",screenfull:"^6.0.2",vue:"^3.3.4","vue-hooks-plus":"1.8.1","vue-i18n":"^9.2.2","vue-router":"^4.2.4",vuedraggable:"^4.1.0",xlsx:"^0.18.5"},devDependencies:{"@babel/core":"^7.20.2","@babel/eslint-parser":"^7.19.1","@commitlint/cli":"^17.4.2","@commitlint/config-conventional":"^17.4.2","@intlify/unplugin-vue-i18n":"^0.12.1","@types/crypto-js":"^4.1.1","@types/lodash-es":"^4.17.7","@types/mockjs":"1.0.7","@types/scrollreveal":"^0.0.8","@typescript-eslint/eslint-plugin":"^5.61.0","@typescript-eslint/parser":"^5.61.0","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue-hooks-plus/resolvers":"1.2.4","@vue/eslint-config-prettier":"^7.1.0","@vue/eslint-config-typescript":"^11.0.3",autoprefixer:"^10.4.8",depcheck:"^1.4.3",eslint:"^8.44.0","eslint-config-prettier":"^8.8.0","eslint-config-standard-with-typescript":"^23.0.0","eslint-plugin-import":"^2.25.2","eslint-plugin-n":"^15.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.0.0","eslint-plugin-react":"^7.31.10","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.1.0",postcss:"^8.1.0","postcss-px-to-viewport-8-plugin":"1.2.2",prettier:"^2.7.1","rollup-plugin-visualizer":"^5.8.3","svg-sprite-loader":"^6.0.11",typescript:"^5.0.2","unplugin-auto-import":"^0.15.0","unplugin-vue-components":"^0.25.1",vite:"^4.4.9","vite-plugin-compression":"^0.5.1","vite-plugin-ejs":"^1.6.4","vite-plugin-eslint":"1.8.1","vite-plugin-imp":"^2.3.1","vite-plugin-inspect":"^0.7.26","vite-plugin-mock-dev-server":"1.3.0","vite-plugin-svg-icons":"^2.0.1","vite-svg-loader":"^4.0.0","vue-tsc":"^1.8.4"},name:"ray-template",version:"4.1.8"},layout:{copyright:"Copyright © 2022-present Ray",sideBarLogo:{icon:"ray",title:"Ray Template",url:"/dashboard",jumpType:"station"}},appPrimaryColor:{primaryColor:"#2d8cf0",primaryFadeColor:"rgba(45, 140, 240, 0.3)"}},n=k({tabsValue:"signin"}),{height:r,width:u}=X(),p=V(),{updateLocale:g}=p;return{...C(n),windowHeight:r,updateLocale:g,t:i,copyright:t,windowWidth:u}},render(){const{t:i}=this;return e("div",{class:["login"],style:[`height: ${this.windowHeight}px`,`--login-height: ${this.windowHeight}px`]},[e("div",{class:["login-wrapper",this.windowWidth>=1440?"login-wrapper--divider":""]},[e("div",{class:["login-wrapper__content"]},[e(s,{align:"center",class:"login-title__wrapper"},{default:()=>[e(a,{name:"ray",size:"48"},null),e(x,{class:"login-title",type:"info",size:28},{default:()=>[l("Ray Template")]})]}),e(s,{align:"center",class:"login-action__wrapper",itemStyle:{display:"flex"}},{default:()=>[e(B,null,null),e(I,{options:E,onSelect:t=>this.updateLocale(t)},{default:()=>[e(a,{customClassName:"login-icon",name:"language",size:"18"},null)]})]}),e(G,{cols:"s:1 m:1 l:2 xl:2 2xl:2",itemResponsive:!1,responsive:"screen"},{default:()=>[e(R,{span:"s:0 m:0 l:1 xl:1 2xl:1",class:"login__left-wrapper"},{default:()=>[e(s,{align:"center",vertical:!0},{default:()=>[e(a,{name:"login_bg",width:"368",height:"368"},null),e(x,{class:"login-title",type:"info",size:36},{default:()=>[l("开箱即用的中后台管理系统")]})]})]}),e(R,{span:1,class:"login__right-wrapper"},{default:()=>[e(Q,{class:"login__right-wrapper__content",embedded:!0,bordered:!1},{default:()=>[e(U,{value:this.tabsValue,"onUpdate:value":t=>this.tabsValue=t,type:"line",animated:!0,size:"large"},{default:()=>e($,null,[e(d,{tab:i("views.login.index.Signin"),name:"signin"},{default:()=>[e(M,null,null)]}),e(d,{tab:i("views.login.index.Register"),name:"register"},{default:()=>[e(Y,null,null)]}),e(d,{tab:i("views.login.index.QRCodeSignin"),name:"qrcodeSignin"},{default:()=>[e(J,null,null)]})])}),e(_,null,{default:()=>[l("其他登陆方式")]}),e(ee,null,null),e(_,null,{default:()=>[l("友情链接")]}),e(W,null,null)]})]})]}),e(s,{align:"center",justify:"center",class:"login-copyright__wrapper",wrapItem:!1},{default:()=>[this.copyright]})])])])}});export{De as default};
