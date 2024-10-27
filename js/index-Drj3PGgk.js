import{t as n}from"./hooks-DNoo5Jj5.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./dayjs@1.11.10-C8LoRVP6.js";import"./print-js@1.6.0-BdoEj60G.js";import"./vue-hooks-plus@2.2.1_vue@3.5.12-C6aYKqdf.js";import"./lodash@4.17.21-Cw59kuJw.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DmMZCkhi.js";import"./jsbarcode@3.11.6-DGNGFp02.js";import{A as d}from"./index-CT0XK3_m.js";import{N as i,ac as f,ad as c,ae as s,af as E,c as o,v as p}from"./naive-ui@2.40.1_vue@3.5.12-DtgApL3K.js";import{l as b,b as u,I as t,p as F}from"./@vue_runtime-core@3.5.12-Ds-HrVrM.js";import"./lodash-es@4.17.21-CeZG2a4n.js";import"./@vueuse_core@11.1.0_vue@3.5.12-C00EZtgk.js";import"./@vueuse_shared@11.1.0_vue@3.5.12-B9WpRTpD.js";import"./@vue_reactivity@3.5.12-Bs6EYLxJ.js";import"./@vue_shared@3.5.12--5_uv9t5.js";import"./utils-DewQlJ2W.js";import"./pinia-plugin-persistedstate@4.1.1_pinia@2.2.4-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";import"./pinia@2.2.4_typescript@5.2.2_vue@3.5.12-DjAImzYl.js";import"./vue-demi@0.14.10_vue@3.5.12-Dq6ymT-8.js";import"./html-to-image@1.11.11-BOFdlgi9.js";import"./vue-router@4.3.2_vue@3.5.12-DrIOQ45i.js";import"./vue-i18n@9.13.1_vue@3.5.12-DJkg4ac8.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-C6DqbPB6.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.5.0-CezqL3m-.js";import"./zrender@5.5.0-DW8ownf1.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-dom@3.5.12-ewSD1rNh.js";import"./interactjs@1.10.26-DZL_TZzP.js";import"./call-bind@1.0.7-Cpj98o6Y.js";import"./date-fns@3.6.0-q9PkOyxq.js";import"./seemly@0.3.8-DjGKl9dV.js";import"./vueuc@0.4.64_vue@3.5.12-gFk5c7Fb.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.12-CJ-8xq3W.js";import"./vooks@0.2.12_vue@3.5.12-CeQQlSXI.js";import"./vdirs@0.1.8_vue@3.5.12-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-DKekKYbv.js";import"./date-fns-tz@3.1.3_date-fns@3.6.0-ztskLDQQ.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";function m(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!F(l)}const du=b({name:"RDashboard",setup(){return{coverLetterOptions:[{label:"掌握搬砖框架",des:()=>u(o,null,{default:()=>[u(p,{type:"success"},{default:()=>[t("Vue3.x")]}),u(p,{type:"info"},{default:()=>[t("React")]})]})},{label:"从事搬砖时长",des:()=>u(o,null,{default:()=>[u(p,{type:"success"},{default:()=>[t("练习时长两年半的小白前端搬砖师")]})]})},{label:"个人",des:()=>u(o,{align:"center"},{default:()=>[u(n,{name:"ray",size:"22"},null),t("努力搬砖、努力摸鱼, 建设美丽家园")]}),span:2},{label:"补充说明",des:()=>u(o,{align:"center"},{default:()=>[t("如果有希望补充的功能可以在"),u("a",{class:"dashboard-link",href:"https://github.com/XiaoDaiGua-Ray/ray-template"},[t("GitHub")]),t("提一个 Issues")]}),span:2}],technologyTagOptions:[{label:"Vue3.x",value:"Vue3.x"},{label:"Vite5.x",value:"Vite5.x"},{label:"Pinia",value:"Pinia"},{label:"TS(X)",value:"TS(X)"}]}},render(){let l,a;return u(o,{vertical:!0},{default:()=>[u(i,null,{header:()=>u(n,{name:"ray",size:"64"},null),default:()=>"当你看见这个页面后, 就说明项目已经启动成功了~"}),u(i,{title:"个人介绍"},{default:()=>[u(f,{bordered:!0,labelPlacement:"left",column:2},m(l=this.coverLetterOptions.map(e=>{let r;return u(c,{key:e.label,label:e.label,span:e==null?void 0:e.span},m(r=e.des())?r:{default:()=>[r]})}))?l:{default:()=>[l]})]}),u(i,{title:"项目介绍"},{default:()=>[u(s,null,{default:()=>[t("技术栈")]}),u(E,null,{default:()=>[u(o,null,m(a=this.technologyTagOptions.map(e=>u(p,{key:e.value,type:"info"},{default:()=>[e.label]})))?a:{default:()=>[a]})]}),u(s,null,{default:()=>[t("项目介绍")]}),u(E,null,{default:()=>[t("预设了最佳构建体验的配置与常用搬砖工具。意在提供一个简洁、快速上手的模板。")]})]}),u(i,{title:"友情链接"},{default:()=>[u(d,null,null)]})]})}});export{du as default};
