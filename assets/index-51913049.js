import{R as r}from"./index-35459b49.js";import{R as f}from"./index-e067c155.js";import{U as i,D as E,E as c,X as d,Y as m,m as l,M as s,O as b}from"./naive-ui-0bd7cfdd.js";import{f as y,ad as u,t as F,d as e,e as D}from"./@vue-59daf69d.js";import"./dayjs-fb92b34a.js";import"./date-fns-43132c58.js";import"./pinia-09926b3d.js";import"./vue-demi-71ba0ef2.js";import"./lodash-es-de060e62.js";import"./vue-i18n-1da5f181.js";import"./@intlify-deb68647.js";import"./vue-router-b61653f1.js";import"./@vueuse-237e480f.js";import"./screenfull-b3e6dc1f.js";import"./pinia-plugin-persistedstate-d93b4f94.js";import"./vueuc-4142fa1c.js";import"./evtd-b614532e.js";import"./seemly-dc6f1e91.js";import"./@css-render-a2958697.js";import"./vooks-2115543f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./treemate-25c27bff.js";import"./date-fns-tz-9041c6f6.js";import"./async-validator-dee29e8b.js";function p(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!D(a)}const w=y({name:"Dashboard",setup(){return{coverLetterOptions:[{label:"掌握搬砖框架",des:()=>u(l,null,{default:()=>[u(s,{type:"success"},{default:()=>[e("Vue3.x")]}),u(s,{type:"info"},{default:()=>[e("React")]})]})},{label:"从事搬砖时长",des:()=>u(l,null,{default:()=>[u(s,{type:"success"},{default:()=>[e("练习时长两年半的小白前端搬砖师")]})]})},{label:"个人",des:()=>u(l,{align:"center"},{default:()=>[u(r,{name:"ray",size:"22"},null),e("努力搬砖、努力摸鱼, 建设美丽家园")]}),span:2},{label:"补充说明",des:()=>u(l,{align:"center"},{default:()=>[e("如果有希望补充的功能可以在"),u("a",{class:"dashboard-link",href:"https://github.com/XiaoDaiGua-Ray/ray-template"},[e("GitHub")]),e("提一个 Issues")]}),span:2}],technologyTagOptions:[{label:"Vue3.x",value:"Vue3.x"},{label:"Vite4.0",value:"Vite4.0"},{label:"Pinia",value:"Pinia"},{label:"TSX",value:"TSX"}]}},render(){let a,o;return u(b,{class:"dashboard-layout layout-full"},{default:()=>[u(i,null,{header:()=>F(r,{name:"ray",size:"64"},{}),default:()=>"当你看见这个页面后, 就说明项目已经启动成功了~"}),u(i,{title:"个人介绍"},{default:()=>[u(E,{bordered:!0,labelPlacement:"left",column:2},p(a=this.coverLetterOptions.map(t=>{let n;return u(c,{key:t.label,label:t.label,span:t==null?void 0:t.span},p(n=t.des())?n:{default:()=>[n]})}))?a:{default:()=>[a]})]}),u(i,{title:"项目介绍"},{default:()=>[u(d,null,{default:()=>[e("技术栈")]}),u(m,null,{default:()=>[u(l,null,p(o=this.technologyTagOptions.map(t=>u(s,{key:t.value,type:"info"},{default:()=>[t.label]})))?o:{default:()=>[o]})]}),u(d,null,{default:()=>[e("项目介绍")]}),u(m,null,{default:()=>[e("预设了最佳构建体验的配置与常用搬砖工具。意在提供一个简洁、快速上手的模板。")]})]}),u(i,{title:"友情链接"},{default:()=>[u(f,null,null)]})]})}});export{w as default};
