import{d as n}from"./index-28ba1be9.js";import{R as E}from"./index-c00a517f.js";import{U as i,j as f,k as c,X as m,Y as d,f as l,y as p,B as b}from"./naive-ui@2.34.4_vue@3.2.47-32e0de7f.js";import{d as y,a as u,h as C,m as t,p as F}from"./@vue_runtime-core@3.2.47-0e1d4738.js";import"./@vue_runtime-dom@3.2.47-43f0d619.js";import"./@vue_shared@3.2.47-7b400ff4.js";import"./@vue_reactivity@3.2.47-f5c8a668.js";import"./pinia@2.0.17_typescript@5.0.2_vue@3.2.47-a112ab9d.js";import"./vue-demi@0.14.5_vue@3.2.47-71ba0ef2.js";import"./lodash-es@4.17.21-92f3d5bd.js";import"./vue-i18n@9.2.2_vue@3.2.47-89f98dc3.js";import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-a0a8715c.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./dayjs@1.11.7-adc18375.js";import"./@babel_runtime@7.22.6-960cbc2f.js";import"./vue-router@4.1.3_vue@3.2.47-450d1fe0.js";import"./@vueuse_core@9.1.0_vue@3.2.47-6868176a.js";import"./@vueuse_shared@9.1.0_vue@3.2.47-0bbfe17c.js";import"./screenfull@6.0.2-b3e6dc1f.js";import"./pinia-plugin-persistedstate@2.4.0_pinia@2.0.17-d93b4f94.js";import"./clipboard@2.0.11-6193b289.js";import"./date-fns@2.30.0-0bf1b710.js";import"./vueuc@0.4.51_vue@3.2.47-57ccb8de.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-dc6f1e91.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-1c0b4a7a.js";import"./vooks@0.2.12_vue@3.2.47-b42353d8.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./treemate@0.3.11-25c27bff.js";import"./date-fns-tz@1.3.8_date-fns@2.30.0-7cff6900.js";import"./async-validator@4.2.5-dee29e8b.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";function r(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!F(a)}const au=y({name:"RDashboard",setup(){return{coverLetterOptions:[{label:"掌握搬砖框架",des:()=>u(l,null,{default:()=>[u(p,{type:"success"},{default:()=>[t("Vue3.x")]}),u(p,{type:"info"},{default:()=>[t("React")]})]})},{label:"从事搬砖时长",des:()=>u(l,null,{default:()=>[u(p,{type:"success"},{default:()=>[t("练习时长两年半的小白前端搬砖师")]})]})},{label:"个人",des:()=>u(l,{align:"center"},{default:()=>[u(n,{name:"ray",size:"22"},null),t("努力搬砖、努力摸鱼, 建设美丽家园")]}),span:2},{label:"补充说明",des:()=>u(l,{align:"center"},{default:()=>[t("如果有希望补充的功能可以在"),u("a",{class:"dashboard-link",href:"https://github.com/XiaoDaiGua-Ray/ray-template"},[t("GitHub")]),t("提一个 Issues")]}),span:2}],technologyTagOptions:[{label:"Vue3.x",value:"Vue3.x"},{label:"Vite4.0",value:"Vite4.0"},{label:"Pinia",value:"Pinia"},{label:"TSX",value:"TSX"}]}},render(){let a,o;return u(b,{class:"dashboard-layout layout-full"},{default:()=>[u(i,null,{header:()=>C(n,{name:"ray",size:"64"},{}),default:()=>"当你看见这个页面后, 就说明项目已经启动成功了~"}),u(i,{title:"个人介绍"},{default:()=>[u(f,{bordered:!0,labelPlacement:"left",column:2},r(a=this.coverLetterOptions.map(e=>{let s;return u(c,{key:e.label,label:e.label,span:e==null?void 0:e.span},r(s=e.des())?s:{default:()=>[s]})}))?a:{default:()=>[a]})]}),u(i,{title:"项目介绍"},{default:()=>[u(m,null,{default:()=>[t("技术栈")]}),u(d,null,{default:()=>[u(l,null,r(o=this.technologyTagOptions.map(e=>u(p,{key:e.value,type:"info"},{default:()=>[e.label]})))?o:{default:()=>[o]})]}),u(m,null,{default:()=>[t("项目介绍")]}),u(d,null,{default:()=>[t("预设了最佳构建体验的配置与常用搬砖工具。意在提供一个简洁、快速上手的模板。")]})]}),u(i,{title:"友情链接"},{default:()=>[u(E,null,null)]})]})}});export{au as default};
