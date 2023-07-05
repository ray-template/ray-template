import{s as U}from"./pinia@2.0.17_typescript@5.0.2_vue@3.2.47-a112ab9d.js";import{t as j,c as M}from"./lodash-es@4.17.21-92f3d5bd.js";import{e as N,i as D,o as P,j as W,k as O}from"./index-28ba1be9.js";import{u as h,i as q,a as G,b as H,c as X,d as Y,e as J,f as K,g as Q,h as Z,j as _,k as I,l as ee,m as te,n as ae,o as ie,p as se,q as ne,r as oe}from"./echarts@5.4.0-40235ba7.js";import{d as T,z as x,l as y,t as ue,e as re,n as le,q as ce,a as t,m as n}from"./@vue_runtime-core@3.2.47-0e1d4738.js";import{k as m,h as de,v as he}from"./@vue_reactivity@3.2.47-f5c8a668.js";import{$ as u,Y as me,e as k}from"./naive-ui@2.34.4_vue@3.2.47-32e0de7f.js";import"./vue-demi@0.14.5_vue@3.2.47-71ba0ef2.js";import"./@vue_runtime-dom@3.2.47-43f0d619.js";import"./@vue_shared@3.2.47-7b400ff4.js";import"./vue-i18n@9.2.2_vue@3.2.47-89f98dc3.js";import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-a0a8715c.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./dayjs@1.11.7-adc18375.js";import"./@babel_runtime@7.22.6-960cbc2f.js";import"./vue-router@4.1.3_vue@3.2.47-450d1fe0.js";import"./@vueuse_core@9.1.0_vue@3.2.47-6868176a.js";import"./@vueuse_shared@9.1.0_vue@3.2.47-0bbfe17c.js";import"./screenfull@6.0.2-b3e6dc1f.js";import"./pinia-plugin-persistedstate@2.4.0_pinia@2.0.17-d93b4f94.js";import"./clipboard@2.0.11-6193b289.js";import"./date-fns@2.30.0-0bf1b710.js";import"./vueuc@0.4.51_vue@3.2.47-57ccb8de.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-dc6f1e91.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-1c0b4a7a.js";import"./vooks@0.2.12_vue@3.2.47-b42353d8.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./treemate@0.3.11-25c27bff.js";import"./date-fns-tz@1.3.8_date-fns@2.30.0-7cff6900.js";import"./async-validator@4.2.5-dee29e8b.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";import"./zrender@5.4.0-1cedba25.js";import"./tslib@2.3.0-54e39b60.js";const R=e=>Object.assign({},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.9)",zlevel:0,fontSize:12,showSpinner:!0,spinnerRadius:10,lineWidth:5,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif"},e),c=T({name:"RayChart",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},autoResize:{type:[Boolean,Object],default:!0},canvasRender:{type:Boolean,default:!0},showAria:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},success:{type:Function,default:()=>({})},error:{type:Function,default:()=>({})},theme:{type:[String,Object],default:""},autoChangeTheme:{type:Boolean,default:!1},use:{type:Array,default:()=>[]},watchOptions:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingOptions:{type:Object,default:()=>R()}},setup(e,{expose:F}){const f=N(),{themeValue:r}=U(f),E=m(),p=m();let a,d;const b=x(()=>({"--ray-chart-width":D(e.width),"--ray-chart-height":D(e.height)})),A=x(()=>R(e.loadingOptions)),o=async()=>{h([G,H,X,Y,J,K,Q,Z]),h([_,I,ee,te,ae,ie]),h([se,ne]),h([oe]);try{h(e.use)}catch{console.error("Error: wrong property and method passed in extend attribute")}},w=()=>{let i=M(e.options);const l=g=>Object.assign({},i,g);return e.showAria&&(i=l({aria:{enabled:!0,decal:{show:!0}}})),i},s=i=>{var S,B;const l=E.value,g=w(),{height:L,width:V}=l.getBoundingClientRect();L===0&&O(l,{height:"200px"}),V===0&&O(l,{width:"200px"});try{a=q(l,i),p.value=a,g&&a.setOption(g),(S=e.success)==null||S.call(e,a)}catch(z){(B=e.error)==null||B.call(e),console.error(z)}},v=i=>{if(e.autoChangeTheme){s(i?"dark":"");return}e.theme||s("")},C=()=>{a&&(a.clear(),a.dispose())},$=()=>{a&&a.resize()};return y(()=>[r.value],([i])=>{e.autoChangeTheme&&(C(),v(i))}),y(()=>e.showAria,()=>{C(),(e.autoChangeTheme||e.theme)&&r.value?s("dark"):s("")}),y(()=>e.loading,i=>{i?a==null||a.showLoading(A.value):a==null||a.hideLoading()}),e.watchOptions&&y(()=>e.watchOptions,()=>{const i=w();a==null||a.setOption(i)}),ue(async()=>{await o()}),re(()=>{le(()=>{e.autoChangeTheme?v(r.value):e.theme?s("dark"):s(""),e.autoResize&&(d=j($,1e3),P(window,"resize",d))})}),ce(()=>{C(),W(window,"resize",d),d.cancel()}),F({echart:p}),{rayChartRef:E,cssVarsRef:b,echartInstance:p}},render(){return t("div",{class:"ray-chart",style:[this.cssVarsRef],ref:"rayChartRef"},null)}}),Ie=T({name:"REchart",setup(){const e=m(),F=m(!1),f=m(!1),r=de({loading:!1});return{baseOptions:{legend:{},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"日期",data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},baseChartRef:e,chartLoading:F,handleLoadingShow:o=>{r.loading=o},chartAria:f,handleAriaShow:o=>{f.value=o},handleChartRenderSuccess:o=>{window.$notification.info({title:"可视化图渲染成功回调函数",content:"可视化图渲染成功, 并且返回了当前可视化图实例",duration:5*1e3}),e.value},basePieOptions:{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},baseLineOptions:{title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]},...he(r)}},render(){return t("div",{class:"echart"},[t(u,null,{default:()=>[n("RayChart 组件使用")]}),t(me,null,{default:()=>[n("该组件会默认以 200*200 宽高进行填充。预设了常用的图、方法组件，如果不满足需求，需要用 use 方法进行手动拓展。该组件实现了自动跟随模板主题切换功能，但是动态切换损耗较大，所以默认不启用")]}),t(u,null,{default:()=>[n("基础使用")]}),t("div",{class:"chart--container"},[t(c,{options:this.baseOptions},null)]),t(u,null,{default:()=>[n("渲染成功后运行回调函数")]}),t("div",{class:"chart--container"},[t(c,{ref:"baseChartRef",options:this.basePieOptions,success:this.handleChartRenderSuccess.bind(this)},null)]),t(u,null,{default:()=>[n("能跟随主题切换的可视化图")]}),t("div",{class:"chart--container"},[t(c,{autoChangeTheme:!0,options:this.baseLineOptions,showAria:this.chartAria},null)]),t(u,null,{default:()=>[n("不跟随主题切换的暗色主题可视化图")]}),t("div",{class:"chart--container"},[t(c,{theme:"dark",options:this.baseOptions},null)]),t(u,null,{default:()=>[n("加载动画")]}),t(k,{value:this.chartLoading,"onUpdate:value":e=>this.chartLoading=e,onUpdateValue:this.handleLoadingShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏加载动画",unchecked:()=>"显示加载动画"}),t("div",{class:"chart--container"},[t(c,{loading:this.loading,options:this.baseOptions},null)]),t(u,null,{default:()=>[n("贴画可视化图")]}),t(k,{value:this.chartAria,"onUpdate:value":e=>this.chartAria=e,onUpdateValue:this.handleAriaShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏贴花",unchecked:()=>"显示贴花"}),t("div",{class:"chart--container"},[t(c,{options:this.baseOptions,showAria:this.chartAria},null)])])}});export{Ie as default};
