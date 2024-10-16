import{a as r}from"./vue-hooks-plus@2.2.1_vue@3.5.12-CDC3yd1M.js";import"./lodash@4.17.21-Cw59kuJw.js";import{s as n}from"./instance-nIExQa9a.js";import{c as l,N as o,Q as A,M as i,X as g}from"./naive-ui@2.40.1_vue@3.5.12-DHsO9NF4.js";import{l as V,b as u,I as t}from"./@vue_runtime-core@3.5.12-o4JnKqGq.js";import{e as v,v as R}from"./@vue_reactivity@3.5.12-IcmYCeX3.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DmMZCkhi.js";import"./call-bind@1.0.7-Cpj98o6Y.js";import"./axios@1.7.5-C8DqakIB.js";import"./hooks-Dx3WCPci.js";import"./lodash-es@4.17.21-CeZG2a4n.js";import"./@vueuse_core@11.1.0_vue@3.5.12-DcbFWgSD.js";import"./@vueuse_shared@11.1.0_vue@3.5.12-C48LWOin.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./dayjs@1.11.10-C8LoRVP6.js";import"./print-js@1.6.0-BdoEj60G.js";import"./jsbarcode@3.11.6-DGNGFp02.js";import"./utils-CozJMALc.js";import"./interactjs@1.10.26-DZL_TZzP.js";import"./pinia-plugin-persistedstate@4.1.1_pinia@2.2.4-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";import"./pinia@2.2.4_typescript@5.2.2_vue@3.5.12-DcSddqfC.js";import"./vue-demi@0.14.10_vue@3.5.12-Dq6ymT-8.js";import"./html-to-image@1.11.11-BOFdlgi9.js";import"./vue-router@4.3.2_vue@3.5.12-DofREeSi.js";import"./vue-i18n@9.13.1_vue@3.5.12-BPgVS6jR.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-C6DqbPB6.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.5.0-CezqL3m-.js";import"./zrender@5.5.0-DW8ownf1.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-dom@3.5.12-CgYSV3BI.js";import"./@vue_shared@3.5.12--5_uv9t5.js";import"./date-fns@3.6.0-q9PkOyxq.js";import"./seemly@0.3.8-DjGKl9dV.js";import"./vueuc@0.4.64_vue@3.5.12-C5OYL2zc.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.12-CozsU_5I.js";import"./vooks@0.2.12_vue@3.5.12-fnTfirhD.js";import"./vdirs@0.1.8_vue@3.5.12-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-DKekKYbv.js";import"./date-fns-tz@3.1.3_date-fns@3.6.0-ztskLDQQ.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-Be8eOoM-.js";function b(e,a){return r(()=>n(e),Object.assign({},a))}const w=e=>n({url:`https://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${e}`,method:"get"}),d=()=>n({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get"}),vu=V({name:"RAxios",setup(){const e=v({weatherData:[],inputCityValue:null,throttleDemoInputValue:null,debounceDemoInputValue:null,weatherDemoInputValue:null}),{data:a,loading:m,run:p}=r(d,{throttleWait:1e3,manual:!0}),{data:s,loading:D,run:F}=r(d,{debounceWait:1e3,manual:!0}),{data:h,loading:c,run:E}=r(w,{throttleWait:1e3,manual:!0}),{data:B,loading:C,run:f}=b({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get",cancelConfig:{cancel:!0}},{manual:!0,onError:()=>{window.$message.error("接口出现异常")}});return{...R(e),throttleDemoValue:a,throttleDemoLoading:m,throttleDemoRun:p,debounceDemoValue:s,debounceDemoLoading:D,debounceDemoRun:F,weatherDemoValue:h,weatherDemoLoading:c,weatherDemoRun:E,demoData:B,demoLoading:C,demoRun:f}},render(){return u(g,null,{default:()=>[u(l,{vertical:!0},{default:()=>[u("h1",null,[t("请求")]),u(o,null,{default:()=>[u("h2",null,[t("useRequest")]),u("p",null,[t("支持配置化请求数据")]),u("h2",null,[t("useHookPlusRequest")]),u("p",null,[t("支持包裹一个拥有 promise 状态的异步函数，可以用来包裹一个 axios 请求返回值方法")])]}),u("h1",null,[t("使用 useRequest 获取")]),u(o,{title:"请求函数"},{default:()=>[u("h3",null,[t("1.基于 axios 封装，能够自动取消连续请求，避免重复渲染造成问题")]),u("h3",null,[t("2.打开控制台 => 网络 => 使用低速3g网络 => 查看控制台被取消的请求")]),u("h3",null,[t("3.详情请查看文档")])]}),u(o,{title:"useRequest示例（手动触发）"},{default:()=>[u(l,{vertical:!0},{default:()=>{var e;return[u(A,{onClick:this.demoRun.bind(this)},{default:()=>[t("获取数据")]}),u("h3",null,[t("结果: "),this.demoLoading?"获取中...":(e=this.demoData)==null?void 0:e.title])]}})]}),u("h1",null,[t("使用 useHookPlusRequest 获取")]),u(o,{title:"节流"},{default:()=>[u(l,{vertical:!0},{default:()=>[u(i,{value:this.throttleDemoInputValue,"onUpdate:value":e=>this.throttleDemoInputValue=e,onUpdateValue:()=>{this.throttleDemoRun()}},null),u("h3",null,[t("不论触发多少次，一秒钟之内仅会触发一次")]),u("h3",null,[t("当前状态: "),this.throttleDemoLoading?"获取中...":"获取成功!!!"])]})]}),u(o,{title:"防抖"},{default:()=>[u(l,{vertical:!0},{default:()=>[u(i,{value:this.debounceDemoInputValue,"onUpdate:value":e=>this.debounceDemoInputValue=e,onUpdateValue:()=>{this.debounceDemoRun()}},null),u("h3",null,[t("一秒后才会执行，如果中途重新请求，则会重新计时")]),u("h3",null,[t("当前状态: "),this.debounceDemoLoading?"获取中...":"获取成功!!!"])]})]}),u(o,{title:"获取气候"},{default:()=>[u(l,{vertical:!0},{default:()=>[u(i,{value:this.weatherDemoInputValue,"onUpdate:value":e=>this.weatherDemoInputValue=e,onUpdateValue:e=>{this.weatherDemoRun(e)}},null),u("h3",null,[t("该示例演示了如何根据动态值获取数据")]),u("h3",null,[t("当前状态: "),this.weatherDemoLoading?"获取中...":"获取成功!!!"])]})]})]})]})}});export{vu as default};
