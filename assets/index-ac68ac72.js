var c=Object.defineProperty;var m=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>(m(e,typeof t!="symbol"?t+"":t,a),a);import{a as h}from"./axios-f5da5039.js";import{F as d,R as y,o as g,B as C,J as R,H as q,Y as F,G as D}from"./naive-ui-a68231cf.js";import{e as f,E as w,h as E,M as v,ab as s,c as i}from"./@vue-6996c4b6.js";import"./form-data-d2a9677b.js";import"./date-fns-7f923de7.js";import"./vueuc-48cc3a88.js";import"./evtd-b614532e.js";import"./seemly-dc6f1e91.js";import"./@css-render-f42a4f8d.js";import"./vooks-18ea31ef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-57962bc1.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-b7de4195.js";import"./treemate-25c27bff.js";import"./date-fns-tz-230e778e.js";import"./async-validator-dee29e8b.js";class N{constructor(){l(this,"pendingRequest");this.pendingRequest=new Map}generateRequestKey(t){const{method:a,url:u}=t;return[u||"",a||"",JSON.stringify(t.params),JSON.stringify(t.data)].join("&")}addPendingRequest(t){const a=this.generateRequestKey(t);if(this.pendingRequest.has(a))t.signal=this.pendingRequest.get(a).signal;else{const u=new AbortController;t.signal=u.signal,this.pendingRequest.set(a,u)}}removePendingRequest(t){const a=this.generateRequestKey(t);this.pendingRequest.has(a)&&(this.pendingRequest.get(a).abort(),this.pendingRequest.delete(a))}}const n=new N,b=(e,t)=>{const a=e.headers;t.forEach(u=>{a[u.key]=u.value})},r=h.create({baseURL:"",withCredentials:!1,timeout:5*1e3,headers:{"Content-Type":"application/json"}});r.interceptors.request.use(e=>(b(e,[{key:"X-TOKEN",value:"token"}]),n.removePendingRequest(e),n.addPendingRequest(e),e),e=>Promise.reject(e));r.interceptors.response.use(e=>{n.removePendingRequest(e.config);const{data:t}=e;return Promise.resolve(t)},e=>(n.removePendingRequest(e.config||{}),Promise.reject(e)));const p=async e=>r({url:`https://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${e}`}),$=f({name:"Axios",setup(){const e=w({weatherData:[],inputCityValue:""}),t=[{title:"空气指数",key:"air"},{title:"风速",key:"win_meter"},{title:"能见度",key:"visibility"},{title:"天气情况",key:"wea_day"},{title:"提示",key:"air_tips"}],a=async u=>{try{const o=await p(u);e.weatherData=o.data}catch{window.$message.error("请求已被取消")}};return E(async()=>{const u=await p("成都");e.weatherData=u.data}),{...v(e),columns:t,handleInputCityValue:a}},render(){return s(D,null,{default:()=>[s(d,{bordered:!0},{default:()=>[s(y,{title:"请求函数"},{default:()=>[i("基于 axios 封装，能够自动取消连续请求，避免重复渲染造成问题"),s("p",null,[i("打开控制台 => 网络 => 使用低速3g网络 => 查看控制台被取消的请求")])]})]}),s(d,{bordered:!0},{default:()=>[s(g,{class:"axios-header__btn",align:"center"},{default:()=>[s(C,{value:this.inputCityValue,"onUpdate:value":e=>this.inputCityValue=e,onInput:this.handleInputCityValue.bind(this),placeholder:"请输入城市"},null),s(R,{onClick:this.handleInputCityValue.bind(this,"")},{default:()=>[i("搜索")]})]})]}),s(q,null,{default:()=>[s(F,{data:this.weatherData,columns:this.columns},null)]})]})}});export{$ as default};
