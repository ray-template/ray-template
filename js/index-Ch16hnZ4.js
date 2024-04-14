import{K as r,R as a}from"./hooks-BoMYEKHV.js";import"./dayjs@1.11.10-BYZwCyGy.js";import"./print-js@1.6.0-C3lAJnMa.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./awesome-qr@2.1.5-rc.0-Ds7AaOTE.js";import"./vue-hooks-plus@1.8.8_vue@3.4.21-C_BRgauB.js";import"./lodash@4.17.21-CM7ROh5r.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DuGDi0R7.js";import"./lodash-es@4.17.21-CWC3zScj.js";import"./@vueuse_core@10.9.0_vue@3.4.21--QrNzsXE.js";import"./@vueuse_shared@10.9.0_vue@3.4.21-7aSumFzu.js";import"./utils-PClYD-6u.js";import"./interactjs@1.10.26-DmsZVOf4.js";import"./pinia-plugin-persistedstate@3.2.1_pinia@2.1.7-RV7uh3T-.js";import"./dom-to-image@2.6.0-CaeIWam-.js";import"./echarts@5.5.0-BEyY33Zi.js";import"./zrender@5.5.0-JN1hODMT.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-core@3.4.21-DW3iHaBZ.js";import"./@vue_reactivity@3.4.21-8_tu8c_o.js";import"./@vue_shared@3.4.21-DCcVmNGw.js";import"./canvas@2.11.2-CVRTzJty.js";import"./js-binary-schema-parser@2.0.3-D0akQrQ7.js";const k=Vue.defineComponent({name:"ModalDemo",setup(){const t=Vue.reactive({modal1:!1,modal2:!1,modal3:!1}),{create:e}=r(),u=()=>{e({title:"卡片模态框",dad:!0,preset:"card",content:"我可以被拖拽的全屏card模态框",fullscreen:!0})},o=()=>{e({title:"模态框",content:"内容",preset:"dialog",dad:!0})};return{...Vue.toRefs(t),createCardModal:u,createDialogModal:o}},render(){const{createCardModal:t,createDialogModal:e}=this;return Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode(naive.NCard,{title:"props"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("memoryPosition: 是否记住上一次被拖拽的位置，如果设置为 true，那么下一次打开的时候会自动定位到上一次的位置。")]),Vue.createVNode("h3",null,[Vue.createTextVNode("fullscreen: 全屏模态框。")]),Vue.createVNode("h3",null,[Vue.createTextVNode("dad: 启用拖拽，当配置为 false 时，会禁用拖拽效果。")])]})]}),Vue.createVNode(a,{show:this.modal1,"onUpdate:show":u=>this.modal1=u,title:"全屏模态框",fullscreen:!0,preset:"card"},{default:()=>[Vue.createTextVNode("我是全屏模态框，并且会自动启用滚动条。")]}),Vue.createVNode(a,{show:this.modal2,"onUpdate:show":u=>this.modal2=u,preset:"card",title:"可拖拽卡片模态框",dad:!0},{default:()=>[Vue.createVNode("p",null,[Vue.createTextVNode("我可以被拖拽")])]}),Vue.createVNode(a,{show:this.modal3,"onUpdate:show":u=>this.modal3=u,preset:"dialog",title:"可拖拽卡片模态框",dad:!0},{default:()=>[Vue.createVNode("p",null,[Vue.createTextVNode("我可以被拖拽")])]}),Vue.createVNode(naive.NCard,{title:"可拖拽模态框"},{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>this.modal2=!0},{default:()=>[Vue.createTextVNode("卡片模态框")]}),Vue.createVNode(naive.NButton,{onClick:()=>this.modal3=!0},{default:()=>[Vue.createTextVNode("对话框模态框")]})]}),Vue.createVNode(naive.NCard,{title:"全屏模态框"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode("h4",null,[Vue.createTextVNode("全屏模态框需要同时设置：fullscreen 为 true，并且 preset 为 card 时才会生效。")]),Vue.createVNode(naive.NButton,{onClick:()=>this.modal1=!0},{default:()=>[Vue.createTextVNode("打开")]})]})]}),Vue.createVNode(naive.NCard,{title:"手动设置宽度"},{default:()=>[Vue.createVNode("h4",null,[Vue.createTextVNode("width（--r-modal-width）: 当 preset 不为 dialog 或者 card 的时候，你可能用得上。")]),Vue.createVNode("h4",null,[Vue.createTextVNode("dialogWidth（--r-modal-dialog-width）: 当 preset 为 dialog，你可能用得上。")]),Vue.createVNode("h4",null,[Vue.createTextVNode("cardWidth（--r-modal-card-width）: 当 preset 为 card，你可能用得上。")]),Vue.createVNode("h4",null,[Vue.createTextVNode("所有的宽度配置属性都会注入一个对应的 `css variable`，有时候会用上。")])]}),Vue.createVNode(naive.NCard,{title:"重写 useModal"},{default:()=>[Vue.createVNode(naive.NButton,{onClick:t.bind(this)},{default:()=>[Vue.createTextVNode("创建卡片模态框")]}),Vue.createVNode(naive.NButton,{onClick:e.bind(this)},{default:()=>[Vue.createTextVNode("创建对话框模态框")]})]})]})}});export{k as default};
