import{a as u}from"./vue-hooks-plus@1.8.8_vue@3.4.21-C_BRgauB.js";import"./lodash@4.17.21-CM7ROh5r.js";import{s as o}from"./instance-DsP1wDYt.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DuGDi0R7.js";import"./awesome-qr@2.1.5-rc.0-Ds7AaOTE.js";import"./canvas@2.11.2-CVRTzJty.js";import"./js-binary-schema-parser@2.0.3-D0akQrQ7.js";import"./hooks-BoMYEKHV.js";import"./lodash-es@4.17.21-CWC3zScj.js";import"./@vueuse_core@10.9.0_vue@3.4.21--QrNzsXE.js";import"./@vueuse_shared@10.9.0_vue@3.4.21-7aSumFzu.js";import"./dayjs@1.11.10-BYZwCyGy.js";import"./print-js@1.6.0-C3lAJnMa.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./utils-PClYD-6u.js";import"./interactjs@1.10.26-DmsZVOf4.js";import"./pinia-plugin-persistedstate@3.2.1_pinia@2.1.7-RV7uh3T-.js";import"./dom-to-image@2.6.0-CaeIWam-.js";import"./echarts@5.5.0-BEyY33Zi.js";import"./zrender@5.5.0-JN1hODMT.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-core@3.4.21-DW3iHaBZ.js";import"./@vue_reactivity@3.4.21-8_tu8c_o.js";import"./@vue_shared@3.4.21-DCcVmNGw.js";function D(e,t){return u(()=>o(e),Object.assign({},t))}const p=e=>o({url:`https://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${e}`,method:"get"}),n=()=>o({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get"}),O=Vue.defineComponent({name:"RAxios",setup(){const e=Vue.reactive({weatherData:[],inputCityValue:null,throttleDemoInputValue:null,debounceDemoInputValue:null,weatherDemoInputValue:null}),{data:t,loading:a,run:r}=u(n,{throttleWait:1e3,manual:!0}),{data:l,loading:d,run:V}=u(n,{debounceWait:1e3,manual:!0}),{data:i,loading:c,run:m}=u(p,{throttleWait:1e3,manual:!0}),{data:s,loading:F,run:N}=D({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get",cancelConfig:{cancel:!0}},{manual:!0,onError:()=>{window.$message.error("接口出现异常")}});return{...Vue.toRefs(e),throttleDemoValue:t,throttleDemoLoading:a,throttleDemoRun:r,debounceDemoValue:l,debounceDemoLoading:d,debounceDemoRun:V,weatherDemoValue:i,weatherDemoLoading:c,weatherDemoRun:m,demoData:s,demoLoading:F,demoRun:N}},render(){return Vue.createVNode(naive.NLayout,null,{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode("h1",null,[Vue.createTextVNode("请求")]),Vue.createVNode(naive.NCard,null,{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("useRequest")]),Vue.createVNode("p",null,[Vue.createTextVNode("支持配置化请求数据")]),Vue.createVNode("h2",null,[Vue.createTextVNode("useHookPlusRequest")]),Vue.createVNode("p",null,[Vue.createTextVNode("支持包裹一个拥有 promise 状态的异步函数，可以用来包裹一个 axios 请求返回值方法")])]}),Vue.createVNode("h1",null,[Vue.createTextVNode("使用 useRequest 获取")]),Vue.createVNode(naive.NCard,{title:"请求函数"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("1.基于 axios 封装，能够自动取消连续请求，避免重复渲染造成问题")]),Vue.createVNode("h3",null,[Vue.createTextVNode("2.打开控制台 => 网络 => 使用低速3g网络 => 查看控制台被取消的请求")]),Vue.createVNode("h3",null,[Vue.createTextVNode("3.详情请查看文档")])]}),Vue.createVNode(naive.NCard,{title:"useRequest示例（手动触发）"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>{var e;return[Vue.createVNode(naive.NButton,{onClick:this.demoRun.bind(this)},{default:()=>[Vue.createTextVNode("获取数据")]}),Vue.createVNode("h3",null,[Vue.createTextVNode("结果: "),this.demoLoading?"获取中...":(e=this.demoData)==null?void 0:e.title])]}})]}),Vue.createVNode("h1",null,[Vue.createTextVNode("使用 useHookPlusRequest 获取")]),Vue.createVNode(naive.NCard,{title:"节流"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.throttleDemoInputValue,"onUpdate:value":e=>this.throttleDemoInputValue=e,onUpdateValue:()=>{this.throttleDemoRun()}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("不论触发多少次，一秒钟之内仅会触发一次")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.throttleDemoLoading?"获取中...":"获取成功!!!"])]})]}),Vue.createVNode(naive.NCard,{title:"防抖"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.debounceDemoInputValue,"onUpdate:value":e=>this.debounceDemoInputValue=e,onUpdateValue:()=>{this.debounceDemoRun()}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("一秒后才会执行，如果中途重新请求，则会重新计时")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.debounceDemoLoading?"获取中...":"获取成功!!!"])]})]}),Vue.createVNode(naive.NCard,{title:"获取气候"},{default:()=>[Vue.createVNode(naive.NFlex,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.weatherDemoInputValue,"onUpdate:value":e=>this.weatherDemoInputValue=e,onUpdateValue:e=>{this.weatherDemoRun(e)}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("该示例演示了如何根据动态值获取数据")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.weatherDemoLoading?"获取中...":"获取成功!!!"])]})]})]})]})}});export{O as default};
