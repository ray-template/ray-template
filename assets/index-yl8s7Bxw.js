import{p as u}from"./hooks-ml9Luvyb.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./vue-hooks-plus@1.8.5_vue@3.3.8-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./dayjs@1.11.10-IrZctHvJ.js";import"./utils-Jp58pnCV.js";import"./lodash-es@4.17.21-B0eCOOcg.js";import"./currency.js@2.0.4--or6eeOG.js";import"./@vueuse_core@10.6.1_vue@3.3.8-E_TUP8qy.js";import"./@vueuse_shared@10.6.1_vue@3.3.8-DJDYauAH.js";import"./interactjs@1.10.21-7zFZdvts.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.6-fNhqB16x.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.8-VrcJ4P69.js";import"./@vue_reactivity@3.3.8-4NsB6yaG.js";import"./@vue_shared@3.3.8-W5PO5ES3.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";const q=Vue.defineComponent({name:"REchart",setup(){const t=Vue.ref(),r=Vue.ref(!1),o=Vue.ref(!1),i=Vue.reactive({loading:!1}),n={legend:{},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"日期",data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}},{name:"数量",data:[12,220,250,180,20,10,190],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},s={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},a=Vue.ref({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}),l=e=>{i.loading=e},d=e=>{o.value=e},c=()=>{var e;(e=t.value)==null||e.render()},h=()=>{var e;(e=t.value)==null||e.dispose()},V=()=>{const e=()=>Math.floor((Math.random()+1)*100);a.value.series[0].data=new Array(7).fill(0).map(()=>e()),a.value.series[1].data=new Array(7).fill(0).map(()=>e())};return{baseOptions:n,baseChartRef:t,chartLoading:r,handleLoadingShow:l,chartAria:o,handleAriaShow:d,basePieOptions:s,baseLineOptions:a,...Vue.toRefs(i),mountChart:c,unmountChart:h,handleUpdateTitle:V}},render(){return Vue.createVNode("div",{class:"echart"},[Vue.createVNode(naive.NCard,{title:"chart 组件"},{default:()=>[Vue.createVNode("ul",null,[Vue.createVNode("li",null,[Vue.createVNode("h3",null,[Vue.createTextVNode("1. 当未获取到宽高时，组件会默认以 200*200 尺寸填充。")])]),Vue.createVNode("li",null,[Vue.createVNode("h3",null,[Vue.createTextVNode("2. 默认启用 autoChangeTheme，自动监听模板主题变化，如果设置为 false 则为 APP_THEME.echartTheme 配置项为渲染结果（RayTemplate 独有）")])]),Vue.createVNode("li",null,[Vue.createVNode("h3",null,[Vue.createTextVNode("3. 默认启用 watchOptions，自动监听配置项变化")])]),Vue.createVNode("li",null,[Vue.createVNode("h3",null,[Vue.createTextVNode("4. 默认启用 animation，强制启用渲染过渡动画")])]),Vue.createVNode("li",null,[Vue.createVNode("h3",null,[Vue.createTextVNode("5. 配置 setChartOptions 属性，可以定制化合并模式")])])])]}),Vue.createVNode(naive.NH2,null,{default:()=>[Vue.createTextVNode("强制渲染过渡动画（animation），预设 card 风格图表")]}),Vue.createVNode(naive.NSpace,{style:["padding: 18px 0"]},{default:()=>[Vue.createVNode(naive.NButton,{onClick:this.mountChart.bind(this)},{default:()=>[Vue.createTextVNode("渲染")]}),Vue.createVNode(naive.NButton,{onClick:this.unmountChart.bind(this)},{default:()=>[Vue.createTextVNode("卸载")]}),Vue.createVNode(naive.NButton,{onClick:this.handleUpdateTitle.bind(this)},{default:()=>[Vue.createTextVNode("更新配置项")]})]}),Vue.createVNode("div",{class:"chart--container"},[Vue.createVNode(u,{title:"周销售量",ref:"baseChartRef",autoChangeTheme:!0,options:this.baseLineOptions,showAria:this.chartAria,preset:"card"},null)]),Vue.createVNode(naive.NH2,null,{default:()=>[Vue.createTextVNode("不跟随主题切换的暗色主题可视化图，并且手动指定原始主题色")]}),Vue.createVNode("div",{class:"chart--container"},[Vue.createVNode(u,{autoChangeTheme:!1,theme:"default",options:this.baseOptions},null)]),Vue.createVNode(naive.NH2,null,{default:()=>[Vue.createTextVNode("加载动画")]}),Vue.createVNode(naive.NSwitch,{value:this.chartLoading,"onUpdate:value":t=>this.chartLoading=t,onUpdateValue:this.handleLoadingShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏加载动画",unchecked:()=>"显示加载动画"}),Vue.createVNode("div",{class:"chart--container"},[Vue.createVNode(u,{loading:this.loading,options:this.baseOptions},null)]),Vue.createVNode(naive.NH2,null,{default:()=>[Vue.createTextVNode("贴画可视化图")]}),Vue.createVNode(naive.NSwitch,{value:this.chartAria,"onUpdate:value":t=>this.chartAria=t,onUpdateValue:this.handleAriaShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏贴花",unchecked:()=>"显示贴花"}),Vue.createVNode("div",{class:"chart--container"},[Vue.createVNode(u,{options:this.baseOptions,showAria:this.chartAria},null)])])}});export{q as default};
