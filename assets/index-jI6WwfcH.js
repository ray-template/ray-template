import{p as e}from"./hooks-WhZaEspJ.js";import"./vue-hooks-plus@1.8.5_vue@3.4.14-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./currency.js@2.0.4--or6eeOG.js";import{L as u}from"./ray-9TfU2AhD.js";import"./@vueuse_core@10.7.1_vue@3.4.14-hWACvcpg.js";import"./@vueuse_shared@10.7.1_vue@3.4.14-_XOpEtRB.js";import"./utils-TzEisWGD.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";import"./lodash-es@4.17.21-xgd1l9mE.js";import"./interactjs@1.10.26-I0IiZoEj.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.7-fNhqB16x.js";import"./dom-to-image@2.6.0-eHYYUq-2.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.4.14-of9ohvOs.js";import"./@vue_reactivity@3.4.14-F-2aniUk.js";import"./@vue_shared@3.4.14-sCEYfwW2.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";const b=Vue.defineComponent({name:"RQRCodeDemo",setup(){const t=Vue.ref("ray template yes"),o=Vue.ref(),a=Vue.ref();return{qrcodeText:t,qrcodeStatus:o,rayQRCodeRef:a}},render(){return Vue.createVNode(naive.NFlex,null,{default:()=>[Vue.createVNode(naive.NCard,null,{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("基于 awesome-qr 进行封装，支持 LOGO、gif、backgroundImage 等属性。")]),Vue.createVNode("h2",null,[Vue.createTextVNode("该组件会自动监听文本内容变化，然后重新渲染（watchText）")]),Vue.createVNode("h2",null,[Vue.createTextVNode("具体使用请参考 props 配置项")])]}),Vue.createVNode(naive.NCard,{title:"基础二维码"},{default:()=>[Vue.createVNode(naive.NFlex,null,{default:()=>[Vue.createVNode(e,{text:"ray template yes"},null),Vue.createVNode(e,{text:"ray template yes",logoImage:u},null),Vue.createVNode(e,{text:"ray template yes",gifBackgroundURL:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",dotScale:.5,colorDark:"#64d9d6"},null)]})]}),Vue.createVNode(naive.NCard,{title:"状态二维码"},{default:()=>[Vue.createVNode(naive.NFlex,null,{default:()=>[Vue.createVNode(e,{text:"ray template yes",logoImage:u,status:"error",onReload:()=>{window.$message.info("reload event")}},null),Vue.createVNode(e,{text:"ray template yes",logoImage:u,status:"loading"},null)]})]}),Vue.createVNode(naive.NCard,{title:"监听内容变化"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode(naive.NFlex,null,{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>{this.qrcodeStatus="loading",setTimeout(()=>{this.qrcodeText="text updated: "+new Date().getTime(),this.qrcodeStatus=void 0},1e3)}},{default:()=>[Vue.createTextVNode("更新二维码内容")]}),Vue.createVNode(naive.NButton,{onClick:()=>{var t;(t=this.rayQRCodeRef)==null||t.downloadQRCode()}},{default:()=>[Vue.createTextVNode("下载二维码")]})]}),Vue.createVNode(naive.NFlex,null,{default:()=>[Vue.createVNode(e,{text:this.qrcodeText,status:this.qrcodeStatus,logoImage:u,ref:"rayQRCodeRef"},null),Vue.createTextVNode("当前二维码内容："),this.qrcodeText]})]})]})]})}});export{b as default};
