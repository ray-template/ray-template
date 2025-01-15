import{V as m,n as l}from"./hooks-Bwjsi7Cp.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./dayjs@1.11.13-DmclB1g0.js";import"./print-js@1.6.0-CSPo0Tcq.js";import"./vue-hooks-plus@2.2.1_vue@3.5.13_typescript@5.6.3_-gDCwIakz.js";import"./lodash@4.17.21-DdnujIRq.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-Beyjefx-.js";import"./jsbarcode@3.11.6-oBoQ6a3L.js";import"./@logicflow_core@2.0.6-Dn4duTGY.js";import"./mobx-preact@3.0.0_mobx@5.15.7_preact@10.22.0-B-bLefw1.js";import"./preact@10.22.0-Ch0Cz6oG.js";import{N as r,e as a,P as e}from"./naive-ui@2.40.4_vue@3.5.13_typescript@5.6.3_-CKNEL2pG.js";import{l as p,b as u,I as t}from"./@vue_runtime-core@3.5.13-Mn4UDPFA.js";import{e as s,x as E}from"./@vue_reactivity@3.5.13-BUI-9P27.js";import"./lodash-es@4.17.21-B-5kLwAl.js";import"./@vueuse_core@12.0.0_typescript@5.6.3-CIam9YNx.js";import"./@vueuse_shared@12.0.0_typescript@5.6.3-CxG_ESII.js";import"./utils-BmW7d_26.js";import"./pinia-plugin-persistedstate@4.1.3_pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3____fxy2rbnbgc2fnvkvxpfyesx43u-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";import"./pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3_-C5VKkYtV.js";import"./vue-demi@0.14.10_vue@3.5.13_typescript@5.6.3_-Dq6ymT-8.js";import"./html-to-image@1.11.11-BOFdlgi9.js";import"./vue-router@4.4.0_vue@3.5.13_typescript@5.6.3_-CsxCxb2e.js";import"./@vue_runtime-dom@3.5.13-BFTDHntw.js";import"./@vue_shared@3.5.13-DbMIZLZJ.js";import"./interactjs@1.10.27-dRxyG-hL.js";import"./call-bind@1.0.7-Cpj98o6Y.js";import"./vue-i18n@9.13.1_vue@3.5.13_typescript@5.6.3_-CjWDaCXh.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-C6DqbPB6.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.5.1-mVDjuA5B.js";import"./zrender@5.6.0-D_NO-aBe.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./mobx@5.15.7-0V7AV027.js";import"./uuid@9.0.1-CQkTLCs1.js";import"./classnames@2.5.1-CXGZkgDa.js";import"./mousetrap@1.6.5-CZlDLqk3.js";import"./mobx-utils@5.6.2_mobx@5.15.7-DF88e1pU.js";import"./date-fns@3.6.0-C0m45l1x.js";import"./seemly@0.3.8-BnJ6M8Cl.js";import"./vueuc@0.4.64_vue@3.5.13_typescript@5.6.3_-DGG6vEPI.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.13_typescript@5.6.3_-D1AlrnQ2.js";import"./vooks@0.2.12_vue@3.5.13_typescript@5.6.3_-DGo6pkcP.js";import"./vdirs@0.1.8_vue@3.5.13_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-DKekKYbv.js";import"./date-fns-tz@3.1.3_date-fns@3.6.0-8suFmB8o.js";import"./async-validator@4.2.5-9PlIezaS.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-B0Qt1gGG.js";const Du=p({name:"ModalDemo",setup(){const F=s({modal1:!1,modal2:!1,modal3:!1}),{create:i}=m(),o=()=>{i({title:"卡片模态框",dad:!0,preset:"card",content:()=>u("div",{style:"height: 3000px;"},[t("我可以被拖拽的全屏card模态框")]),fullscreen:!0})},d=()=>{i({title:"模态框",content:"内容",preset:"dialog",dad:!0})};return{...E(F),createCardModal:o,createDialogModal:d}},render(){const{createCardModal:F,createDialogModal:i}=this;return u(a,{vertical:!0},{default:()=>[u(r,{title:"props"},{default:()=>[u(a,{vertical:!0},{default:()=>[u("h3",null,[t("memoryPosition: 是否记住上一次被拖拽的位置，如果设置为 true，那么下一次打开的时候会自动定位到上一次的位置。")]),u("h3",null,[t("fullscreen: 全屏模态框。")]),u("h3",null,[t("dad: 启用拖拽，当配置为 false 时，会禁用拖拽效果。")])]})]}),u(l,{show:this.modal1,"onUpdate:show":o=>this.modal1=o,title:"全屏模态框",fullscreen:!0,preset:"card"},{default:()=>[u("div",{style:"height: 3000px;"},[t("我可以被拖拽的全屏card模态框")])]}),u(l,{show:this.modal2,"onUpdate:show":o=>this.modal2=o,preset:"card",title:"可拖拽卡片模态框",dad:!0},{default:()=>[u("p",null,[t("我可以被拖拽")])]}),u(l,{show:this.modal3,"onUpdate:show":o=>this.modal3=o,preset:"dialog",title:"可拖拽卡片模态框",dad:!0},{default:()=>[u("p",null,[t("我可以被拖拽")])]}),u(r,{title:"可拖拽模态框"},{default:()=>[u(e,{onClick:()=>this.modal2=!0},{default:()=>[t("卡片模态框")]}),u(e,{onClick:()=>this.modal3=!0},{default:()=>[t("对话框模态框")]})]}),u(r,{title:"全屏模态框"},{default:()=>[u(a,{vertical:!0},{default:()=>[u("h4",null,[t("全屏模态框需要同时设置：fullscreen 为 true，并且 preset 为 card 时才会生效。")]),u(e,{onClick:()=>this.modal1=!0},{default:()=>[t("打开")]})]})]}),u(r,{title:"手动设置宽度"},{default:()=>[u("h4",null,[t("width（--r-modal-width）: 当 preset 不为 dialog 或者 card 的时候，你可能用得上。")]),u("h4",null,[t("dialogWidth（--r-modal-dialog-width）: 当 preset 为 dialog，你可能用得上。")]),u("h4",null,[t("cardWidth（--r-modal-card-width）: 当 preset 为 card，你可能用得上。")]),u("h4",null,[t("所有的宽度配置属性都会注入一个对应的 `css variable`，有时候会用上。")])]}),u(r,{title:"重写 useModal"},{default:()=>[u(e,{onClick:F.bind(this)},{default:()=>[t("创建卡片模态框")]}),u(e,{onClick:i.bind(this)},{default:()=>[t("创建对话框模态框")]})]})]})}});export{Du as default};
