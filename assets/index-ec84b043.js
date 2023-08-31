import{R as o,L as a}from"./ray-02467f23.js";import{k as s,b as t,p as u}from"./@vue_runtime-core@3.3.4-e708ccad.js";import{k as m}from"./@vue_reactivity@3.3.4-1f79d3d1.js";import{V as i,g as e,P as l}from"./naive-ui@2.34.4_vue@3.3.4-32c47a39.js";import"./index-8c40f85f.js";import"./vue-router@4.2.4_vue@3.3.4-7301885f.js";import"./lodash-es@4.17.21-b7de4195.js";import"./vue-i18n@9.2.2_vue@3.3.4-2fee4df5.js";import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-777854c2.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./dayjs@1.11.9-d5a7302f.js";import"./@babel_runtime@7.22.11-b49cf076.js";import"./pinia@2.1.6_typescript@5.0.2_vue@3.3.4-f8e74923.js";import"./vue-demi@0.14.5_vue@3.3.4-71ba0ef2.js";import"./@vue_runtime-dom@3.3.4-bca9fcfd.js";import"./@vue_shared@3.3.4-896c5ecf.js";import"./screenfull@6.0.2-b3e6dc1f.js";import"./@vueuse_core@9.13.0_vue@3.3.4-43b59e7d.js";import"./@vueuse_shared@9.13.0_vue@3.3.4-ab074c35.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.6-02097300.js";import"./clipboard@2.0.11-bbefc804.js";import"./date-fns@2.30.0-f997f5eb.js";import"./vueuc@0.4.51_vue@3.3.4-8071bed0.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-dc6f1e91.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.3.4-d447e962.js";import"./vooks@0.2.12_vue@3.3.4-360695d0.js";import"./vdirs@0.1.8_vue@3.3.4-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./treemate@0.3.11-25c27bff.js";import"./date-fns-tz@1.3.8_date-fns@2.30.0-8f0f3131.js";import"./async-validator@4.2.5-dee29e8b.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";import"./awesome-qr@2.1.5-rc.0-7b2b96ae.js";import"./canvas@2.11.2-f05bd587.js";import"./js-binary-schema-parser@2.0.3-9e47f7a8.js";const Z=s({name:"RQRCode",setup(){const r=m("ray template yes"),p=m(),d=m();return{qrcodeText:r,qrcodeStatus:p,rayQRCodeRef:d}},render(){return t(e,{wrapItem:!1},{default:()=>[t(i,null,{default:()=>[t("h2",null,[u("基于 awesome-qr 进行封装，支持 LOGO、gif、backgroundImage 等属性。")]),t("h2",null,[u("该组件会自动监听文本内容变化，然后重新渲染（watchText）")]),t("h2",null,[u("具体使用请参考 props 配置项")])]}),t(i,{title:"基础二维码"},{default:()=>[t(e,null,{default:()=>[t(o,{text:"ray template yes"},null),t(o,{text:"ray template yes",logoImage:a},null)]})]}),t(i,{title:"状态二维码"},{default:()=>[t(e,null,{default:()=>[t(o,{text:"ray template yes",logoImage:a,status:"error",onReload:()=>{window.$message.error("relod props")}},null),t(o,{text:"ray template yes",logoImage:a,status:"loading"},null)]})]}),t(i,{title:"监听内容变化"},{default:()=>[t(e,{vertical:!0},{default:()=>[t(e,null,{default:()=>[t(l,{onClick:()=>{this.qrcodeStatus="loading",setTimeout(()=>{this.qrcodeText="text updated: "+new Date().getTime(),this.qrcodeStatus=void 0},1e3)}},{default:()=>[u("更新二维码内容")]}),t(l,{onClick:()=>{var r;(r=this.rayQRCodeRef)==null||r.downloadQRCode()}},{default:()=>[u("下载二维码")]})]}),t(e,null,{default:()=>[t(o,{text:this.qrcodeText,status:this.qrcodeStatus,logoImage:a,ref:"rayQRCodeRef"},null),u("当前二维码内容："),this.qrcodeText]})]})]})]})}});export{Z as default};
