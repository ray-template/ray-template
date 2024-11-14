import"./hooks-yKQIzKXx.js";import"./dayjs@1.11.10-C8LoRVP6.js";import"./print-js@1.6.0-BdoEj60G.js";import"./vue-hooks-plus@2.2.1_vue@3.5.12_typescript@5.6.3_--wFVw10U.js";import"./lodash@4.17.21-Cw59kuJw.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DmMZCkhi.js";import"./jsbarcode@3.11.6-DGNGFp02.js";import"./@logicflow_core@2.0.6-CHqfytjt.js";import"./mobx-preact@3.0.0_mobx@5.15.7_preact@10.22.0-q-IhwcFu.js";import"./preact@10.22.0-D1_UwAj3.js";import{C as F,D as h,E as O,F as C,G as E,H as b}from"./utils-DJWgFDlo.js";import{l as D,b as u,I as p,n as B}from"./@vue_runtime-core@3.5.12-rIgKm_Vg.js";import{e as f,x as v}from"./@vue_reactivity@3.5.12-Bs6EYLxJ.js";import{c as r,N as i,K as o,J as s,$ as V}from"./naive-ui@2.40.1_vue@3.5.12_typescript@5.6.3_-D3cUk1tG.js";import"./lodash-es@4.17.21-B-5kLwAl.js";import"./@vueuse_core@11.1.0_vue@3.5.12_typescript@5.6.3_-ZDBD96r1.js";import"./@vueuse_shared@11.1.0_vue@3.5.12_typescript@5.6.3_-DnrABUGp.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./pinia-plugin-persistedstate@4.1.1_pinia@2.2.4_typescript@5.6.3_vue@3.5.12_typescript@5.6.3____dh65odvamx6uymfx32yexjadga-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";import"./pinia@2.2.4_typescript@5.6.3_vue@3.5.12_typescript@5.6.3_-BdVsFNKX.js";import"./vue-demi@0.14.10_vue@3.5.12_typescript@5.6.3_-Dq6ymT-8.js";import"./html-to-image@1.11.11-BOFdlgi9.js";import"./vue-router@4.3.2_vue@3.5.12_typescript@5.6.3_-Brd4YmBy.js";import"./vue-i18n@9.13.1_vue@3.5.12_typescript@5.6.3_-DVUVmCuN.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-C6DqbPB6.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.5.0-CezqL3m-.js";import"./zrender@5.5.0-DW8ownf1.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-dom@3.5.12-BKraWVUW.js";import"./@vue_shared@3.5.12--5_uv9t5.js";import"./interactjs@1.10.26-DZL_TZzP.js";import"./call-bind@1.0.7-Cpj98o6Y.js";import"./mobx@5.15.7-CEMJDQot.js";import"./uuid@9.0.1-CQkTLCs1.js";import"./classnames@2.5.1-nUTIn1-D.js";import"./mousetrap@1.6.5-BTGDluHR.js";import"./mobx-utils@5.6.2_mobx@5.15.7-C1xBETkd.js";import"./date-fns@3.6.0-q9PkOyxq.js";import"./seemly@0.3.8-DjGKl9dV.js";import"./vueuc@0.4.64_vue@3.5.12_typescript@5.6.3_-BcAtcaHt.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.12_typescript@5.6.3_-BZYDXyJG.js";import"./vooks@0.2.12_vue@3.5.12_typescript@5.6.3_--iLh4DJ5.js";import"./vdirs@0.1.8_vue@3.5.12_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-DKekKYbv.js";import"./date-fns-tz@3.1.3_date-fns@3.6.0-ztskLDQQ.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";const At=D({name:"CalculatePrecision",setup(){const t=f({addOptions:["1","0.2","0.1","1.1"],subtractOptions:["1","0.2","0.1","1.1"],multiplyOptions:["1","0.2","0.1","1.1"],divideOptions:["1","0.2","0.1","1.1"],distributeValue:12,distributeOutputValue:[],distributeLength:3}),a={addOptions:O,subtractOptions:C,multiplyOptions:E,divideOptions:b},n=(l,m)=>{const d=a[m],c=d(...l);return"结果: "+F(c)},e=()=>{B().then(()=>{t.distributeOutputValue=h(t.distributeValue,t.distributeLength)})};return e(),{...v(t),copilotFunc:n,updateDistributeValue:e}},render(){return u(V,null,{default:()=>[u("h2",{style:"margin: 0 0 20px 0"},[p("计算方法，默认都保留八位小数与四舍五入，可以根据 format 方法自行转换")]),u("h3",{style:"margin: 0 0 20px 0"},[p("示例方法都基于 currency.js 封装，利用其精度处理能力封装了常用的一些计算方法，解决精度问题。如果需要其他的方法请阅读官方文档 https://currency.js.org/#subtract")]),u(r,{vertical:!0},{default:()=>[u(i,{title:"加法"},{default:()=>u(o,{value:this.addOptions,"onUpdate:value":t=>this.addOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"addOptions")}},null),footer:()=>this.copilotFunc(this.addOptions,"addOptions")}),u(i,{title:"减法"},{default:()=>u(o,{value:this.subtractOptions,"onUpdate:value":t=>this.subtractOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"subtractOptions")}},null),footer:()=>this.copilotFunc(this.subtractOptions,"subtractOptions")}),u(i,{title:"乘法"},{default:()=>u(o,{value:this.multiplyOptions,"onUpdate:value":t=>this.multiplyOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"multiplyOptions")}},null),footer:()=>this.copilotFunc(this.multiplyOptions,"multiplyOptions")}),u(i,{title:"除法（非取模）"},{default:()=>u(o,{value:this.divideOptions,"onUpdate:value":t=>this.divideOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"divideOptions")}},null),footer:()=>this.copilotFunc(this.divideOptions,"divideOptions")}),u(i,{title:"平分一个值"},{default:()=>u(r,null,{default:()=>[u(s,{value:this.distributeValue,"onUpdate:value":t=>this.distributeValue=t,onUpdateValue:()=>{this.updateDistributeValue()}},null),u(s,{value:this.distributeLength,"onUpdate:value":t=>this.distributeLength=t,onUpdateValue:()=>{this.updateDistributeValue()}},null)]}),footer:()=>"结果: "+this.distributeOutputValue.join(", ")})]})]})}});export{At as default};
