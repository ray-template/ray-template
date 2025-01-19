import"./hooks-Bi_Q9OFa.js";import"./dayjs@1.11.13-BI9XULUM.js";import"./print-js@1.6.0-CWwD-D0p.js";import"./vue-hooks-plus@2.2.1_vue@3.5.13_typescript@5.6.3_-BWv22OGL.js";import"./lodash@4.17.21-D1YkSij2.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DQHhvod-.js";import"./jsbarcode@3.11.6-VhIBVAt6.js";import"./@logicflow_core@2.0.10-Dy_oAVRl.js";import"./mobx-preact@3.0.0_mobx@5.15.7_preact@10.25.4-CFsMsPXj.js";import"./preact@10.25.4--QYavupV.js";import{s as n,g as l,w as c,E as f}from"./utils-4asTneEs.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./crypto-js@4.2.0-CO3T8151.js";import{e as i,ai as u,aj as a,M as m,P as o,N as d}from"./naive-ui@2.41.0_vue@3.5.13_typescript@5.6.3_-Pd0MfMWr.js";import{m as g,b as e,J as r}from"./@vue_runtime-core@3.5.13-pPpmd6wL.js";import{k as p}from"./@vue_reactivity@3.5.13-CVvlldVq.js";import"./lodash-es@4.17.21-BbYRMHep.js";import"./@vueuse_core@12.4.0_typescript@5.6.3-DzjsbTKf.js";import"./@vueuse_shared@12.4.0_typescript@5.6.3-BcXCAzGo.js";import"./pinia-plugin-persistedstate@4.2.0_pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3___rollup@4.30.1-7e9nenNP.js";import"./destr@2.0.3-Cx7WjB9q.js";import"./deep-pick-omit@1.2.1-B1UrSIxj.js";import"./pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3_-D39uhmss.js";import"./html-to-image@1.11.11-D6_yziCT.js";import"./vue-router@4.4.0_vue@3.5.13_typescript@5.6.3_-Ddx7y29b.js";import"./@vue_runtime-dom@3.5.13-DJqlZTHq.js";import"./@vue_shared@3.5.13-CQ6Z-5d1.js";import"./interactjs@1.10.27-hUbPqkuo.js";import"./call-bind@1.0.7-BosuxZz1.js";import"./vue-i18n@9.13.1_vue@3.5.13_typescript@5.6.3_-DQlA9smo.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-CVxc1Bsn.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.6.0-Dq866SEH.js";import"./zrender@5.6.1-B_T0sHVE.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./mobx@5.15.7-BvNiR7Ki.js";import"./uuid@9.0.1-CtRu48qb.js";import"./classnames@2.5.1-BXd8anFz.js";import"./mousetrap@1.6.5-D2xAa-oQ.js";import"./mobx-utils@5.6.2_mobx@5.15.7-D4RSJWSh.js";import"./date-fns@3.6.0-CG906D2E.js";import"./seemly@0.3.9-BnJ6M8Cl.js";import"./vueuc@0.4.64_vue@3.5.13_typescript@5.6.3_-DZgPmxv3.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.13_typescript@5.6.3_-DvmkD8RF.js";import"./vooks@0.2.12_vue@3.5.13_typescript@5.6.3_-rG9g4GjQ.js";import"./vdirs@0.1.8_vue@3.5.13_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-DY95s5UV.js";import"./css-render@0.15.14-BwokE0u2.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-CWtmm0QO.js";import"./date-fns-tz@3.2.0_date-fns@3.6.0-CULxTaQG.js";import"./async-validator@4.2.5-P8scd9xB.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-BrMTnGYY.js";const Be=g({name:"CacheDemo",setup(){const t=p("Ray"),s=p("ray:");return{nameValue:t,currentPrefix:s}},render(){return e(d,{title:"cache 工具包示例"},{default:()=>e(i,{vertical:!0},{default:()=>[e("h3",null,[r("点击 setStorage 按钮，设置缓存示例")]),e(u,null,{default:()=>[e(a,null,{default:()=>[r("设置缓存内容")]}),e(m,{value:this.nameValue,"onUpdate:value":t=>this.nameValue=t,placeholder:"请输入姓名"},null)]}),e(u,null,{default:()=>[e(a,null,{default:()=>[r("设置前缀")]}),e(m,{value:this.currentPrefix,"onUpdate:value":t=>this.currentPrefix=t,placeholder:"请输入前缀"},null)]})]}),action:()=>e(i,null,{default:()=>[e(o,{onClick:()=>{n("name",this.nameValue,"sessionStorage",{prefix:!0,prefixKey:this.currentPrefix}),window.$message.success("设置成功")}},{default:()=>[r("setStorage")]}),e(o,{onClick:()=>{const t=l("name","sessionStorage",{prefix:!0,prefixKey:this.currentPrefix});window.$message.success(`获取到的姓名为：${t}`)}},{default:()=>[r("getStorage")]}),e(o,{onClick:()=>{c("name","sessionStorage",{prefix:!0,prefixKey:this.currentPrefix}),window.$message.success("删除成功")}},{default:()=>[r("removeStorage")]}),e(o,{onClick:()=>{const t=f("name","sessionStorage",{prefix:!0,prefixKey:this.currentPrefix});window.$message.success(`是否存在：${t}`)}},{default:()=>[r("hasStorage")]})]})})}});export{Be as default};
