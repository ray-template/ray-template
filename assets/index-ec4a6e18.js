import{c as He,t as qe}from"./lodash-es@4.17.21-b7de4195.js";import{s as Ge}from"./pinia@2.1.4_typescript@5.0.2_vue@3.3.4-ab93b4ec.js";import{e as Xe,g as D,h as R,o as Je,i as Ke,j as Qe}from"./index-e4518e27.js";import{c as Ye}from"./@vueuse_core@9.1.0_vue@3.3.4-3ed9a412.js";import{u as S,r as Ie,i as eo,a as oo,b as to,c as ao,d as ro,e as lo,f as io,g as so,h as no,j as co,k as uo,l as ho,m as bo,n as mo,o as fo,p as yo,q as po,s as go}from"./echarts@5.4.0-771a2ecd.js";import{k as z,A as So,m as w,v as Co,f as wo,n as xo,t as Ao,b as o,p as l}from"./@vue_runtime-core@3.3.4-073fad6e.js";import{k as f,h as ko,v as Fo}from"./@vue_reactivity@3.3.4-2b3a1c4e.js";import{d as j}from"./dayjs@1.11.7-0fed7618.js";import{V as vo,$ as x,g as $o,P as E,f as _}from"./naive-ui@2.34.4_vue@3.3.4-8a777692.js";import"./vue-demi@0.14.5_vue@3.3.4-71ba0ef2.js";import"./vue-router@4.2.4_vue@3.3.4-e93fe26b.js";import"./vue-i18n@9.2.2_vue@3.3.4-61e8862b.js";import"./@intlify_shared@9.2.2-e4047ebf.js";import"./@intlify_core-base@9.2.2-777854c2.js";import"./@intlify_message-compiler@9.2.2-8a818441.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./@vue_runtime-dom@3.3.4-d86573ec.js";import"./@vue_shared@3.3.4-896c5ecf.js";import"./screenfull@6.0.2-b3e6dc1f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.1.4-4f3b1591.js";import"./clipboard@2.0.11-3174d29e.js";import"./@babel_runtime@7.22.6-47b11949.js";import"./date-fns@2.30.0-1707c6fa.js";import"./vueuc@0.4.51_vue@3.3.4-6588b5bd.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-dc6f1e91.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.3.4-24369cc5.js";import"./vooks@0.2.12_vue@3.3.4-59877c34.js";import"./vdirs@0.1.8_vue@3.3.4-4519c5fd.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./treemate@0.3.11-25c27bff.js";import"./date-fns-tz@1.3.8_date-fns@2.30.0-f45fcfa5.js";import"./async-validator@4.2.5-dee29e8b.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";import"./@vueuse_shared@9.1.0_vue@3.3.4-e5bccb39.js";import"./zrender@5.4.0-c4155122.js";import"./tslib@2.3.0-54e39b60.js";const M=["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"],P="rgba(41,52,65,1)",V={},U={textStyle:{color:"#ffffff"},subtextStyle:{color:"#dddddd"}},N={itemStyle:{borderWidth:"4"},lineStyle:{width:"3"},symbolSize:"0",symbol:"circle",smooth:!0},Z={itemStyle:{borderWidth:"4"},lineStyle:{width:"3"},symbolSize:"0",symbol:"circle",smooth:!0},H={itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},q={itemStyle:{borderWidth:0,borderColor:"#ccc"}},G={itemStyle:{borderWidth:0,borderColor:"#ccc"}},X={itemStyle:{borderWidth:0,borderColor:"#ccc"}},J={itemStyle:{borderWidth:0,borderColor:"#ccc"}},K={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Q={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Y={itemStyle:{borderWidth:0,borderColor:"#ccc"}},I={itemStyle:{color:"#fc97af",color0:"transparent",borderColor:"#fc97af",borderColor0:"#87f7cf",borderWidth:"2"}},ee={itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:"1",color:"#ffffff"},symbolSize:"0",symbol:"circle",smooth:!0,color:["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"],label:{color:"#293441"}},oe={itemStyle:{areaColor:"#f3f3f3",borderColor:"#999999",borderWidth:.5},label:{color:"#893448"},emphasis:{itemStyle:{areaColor:"rgba(255,178,72,1)",borderColor:"#eb8146",borderWidth:1},label:{color:"rgb(137,52,72)"}}},te={itemStyle:{areaColor:"#f3f3f3",borderColor:"#999999",borderWidth:.5},label:{color:"#893448"},emphasis:{itemStyle:{areaColor:"rgba(255,178,72,1)",borderColor:"#eb8146",borderWidth:1},label:{color:"rgb(137,52,72)"}}},ae={axisLine:{show:!0,lineStyle:{color:"#666666"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#aaaaaa"},splitLine:{show:!1,lineStyle:{color:["#e6e6e6"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},re={axisLine:{show:!0,lineStyle:{color:"#666666"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#aaaaaa"},splitLine:{show:!1,lineStyle:{color:["#e6e6e6"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},le={axisLine:{show:!0,lineStyle:{color:"#666666"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#aaaaaa"},splitLine:{show:!1,lineStyle:{color:["#e6e6e6"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},ie={axisLine:{show:!0,lineStyle:{color:"#666666"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#aaaaaa"},splitLine:{show:!1,lineStyle:{color:["#e6e6e6"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},se={iconStyle:{borderColor:"#999999"},emphasis:{iconStyle:{borderColor:"#666666"}}},ne={textStyle:{color:"#999999"}},ce={axisPointer:{lineStyle:{color:"#cccccc",width:1},crossStyle:{color:"#cccccc",width:1}}},de={lineStyle:{color:"#87f7cf",width:1},itemStyle:{color:"#87f7cf",borderWidth:1},controlStyle:{color:"#87f7cf",borderColor:"#87f7cf",borderWidth:.5},checkpointStyle:{color:"#fc97af",borderColor:"#fc97af"},label:{color:"#87f7cf"},emphasis:{itemStyle:{color:"#f7f494"},controlStyle:{color:"#87f7cf",borderColor:"#87f7cf",borderWidth:.5},label:{color:"#87f7cf"}}},ue={color:["#fc97af","#87f7cf"]},he={backgroundColor:"rgba(255,255,255,0)",dataBackgroundColor:"rgba(114,204,255,1)",fillerColor:"rgba(114,204,255,0.2)",handleColor:"#72ccff",handleSize:"100%",textStyle:{color:"#333333"}},be={label:{color:"#293441"},emphasis:{label:{color:"#293441"}}},Eo={color:M,backgroundColor:P,textStyle:V,title:U,line:N,radar:Z,bar:H,pie:q,scatter:G,boxplot:X,parallel:J,sankey:K,funnel:Q,gauge:Y,candlestick:I,graph:ee,map:oe,geo:te,categoryAxis:ae,valueAxis:re,logAxis:le,timeAxis:ie,toolbox:se,legend:ne,tooltip:ce,timeline:de,visualMap:ue,dataZoom:he,markPoint:be},Wo=Object.freeze(Object.defineProperty({__proto__:null,backgroundColor:P,bar:H,boxplot:X,candlestick:I,categoryAxis:ae,color:M,dataZoom:he,default:Eo,funnel:Q,gauge:Y,geo:te,graph:ee,legend:ne,line:N,logAxis:le,map:oe,markPoint:be,parallel:J,pie:q,radar:Z,sankey:K,scatter:G,textStyle:V,timeAxis:ie,timeline:de,title:U,toolbox:se,tooltip:ce,valueAxis:re,visualMap:ue},Symbol.toStringTag,{value:"Module"})),me=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],fe="rgba(0,0,0,0)",ye={},pe={textStyle:{color:"#008acd"},subtextStyle:{color:"#aaaaaa"}},ge={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:3,symbol:"emptyCircle",smooth:!0},Se={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:3,symbol:"emptyCircle",smooth:!0},Ce={itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},we={itemStyle:{borderWidth:0,borderColor:"#ccc"}},xe={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Ae={itemStyle:{borderWidth:0,borderColor:"#ccc"}},ke={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Fe={itemStyle:{borderWidth:0,borderColor:"#ccc"}},ve={itemStyle:{borderWidth:0,borderColor:"#ccc"}},$e={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Ee={itemStyle:{color:"#d87a80",color0:"#2ec7c9",borderColor:"#d87a80",borderColor0:"#2ec7c9",borderWidth:1}},We={itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaa"},symbolSize:3,symbol:"emptyCircle",smooth:!0,color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],label:{color:"#eee"}},Te={itemStyle:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},Be={itemStyle:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},Oe={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Le={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},De={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Re={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},je={iconStyle:{borderColor:"#2ec7c9"},emphasis:{iconStyle:{borderColor:"#18a4a6"}}},_e={textStyle:{color:"#333333"}},ze={axisPointer:{lineStyle:{color:"#008acd",width:"1"},crossStyle:{color:"#008acd",width:"1"}}},Me={lineStyle:{color:"#008acd",width:1},itemStyle:{color:"#008acd",borderWidth:1},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},checkpointStyle:{color:"#2ec7c9",borderColor:"#2ec7c9"},label:{color:"#008acd"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},label:{color:"#008acd"}}},Pe={color:["#5ab1ef","#e0ffff"]},Ve={backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd",handleSize:"100%",textStyle:{color:"#333333"}},Ue={label:{color:"#eee"},emphasis:{label:{color:"#eee"}}},To={color:me,backgroundColor:fe,textStyle:ye,title:pe,line:ge,radar:Se,bar:Ce,pie:we,scatter:xe,boxplot:Ae,parallel:ke,sankey:Fe,funnel:ve,gauge:$e,candlestick:Ee,graph:We,map:Te,geo:Be,categoryAxis:Oe,valueAxis:Le,logAxis:De,timeAxis:Re,toolbox:je,legend:_e,tooltip:ze,timeline:Me,visualMap:Pe,dataZoom:Ve,markPoint:Ue},Bo=Object.freeze(Object.defineProperty({__proto__:null,backgroundColor:fe,bar:Ce,boxplot:Ae,candlestick:Ee,categoryAxis:Oe,color:me,dataZoom:Ve,default:To,funnel:ve,gauge:$e,geo:Be,graph:We,legend:_e,line:ge,logAxis:De,map:Te,markPoint:Ue,parallel:ke,pie:we,radar:Se,sankey:Fe,scatter:xe,textStyle:ye,timeAxis:Re,timeline:Me,title:pe,toolbox:je,tooltip:ze,valueAxis:Le,visualMap:Pe},Symbol.toStringTag,{value:"Module"})),Oo=()=>{const e=Object.assign({"/src/components/RayChart/theme/macarons/macarons-dark.json":Wo,"/src/components/RayChart/theme/macarons/macarons.json":Bo}),p=/\/([^/]+)\.json$/;return Object.keys(e).reduce((n,h)=>{var i;const b=(i=h.match(p))==null?void 0:i[1];if(b)return n.push({name:b,theme:e[h].default}),n;throw new Error("theme name is not found")},[])},Lo=e=>Object.assign({},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.9)",zlevel:0,fontSize:12,showSpinner:!0,spinnerRadius:10,lineWidth:5,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif"},e),A=z({name:"RayChart",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},autoResize:{type:[Boolean,Object],default:!0},canvasRender:{type:Boolean,default:!0},showAria:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},onSuccess:{type:[Function,Array],default:null},onError:{type:[Function,Array],default:null},theme:{type:[String,Object],default:""},autoChangeTheme:{type:Boolean,default:!0},use:{type:Array,default:()=>[]},watchOptions:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingOptions:{type:Object,default:()=>Lo()},observer:{type:Object,default:null},throttleWait:{type:Number,default:500},animation:{type:Boolean,default:!0},setChartOptions:{type:Object,default:()=>({})}},setup(e,{expose:p}){const g=Xe(),{themeValue:n}=Ge(g),h=f(),b=f(),i=f();let t,s,d;const{echartTheme:y}=Qe,k=So(()=>({"--ray-chart-width":D(e.width),"--ray-chart-height":D(e.height)})),F=async()=>{var a;S([oo,to,ao,ro,lo,io,so,no]),S([co,uo,ho,bo,mo,fo]),S([yo,po]),S([go]);try{S((a=e.use)==null?void 0:a.filter(Boolean))}catch{console.error("register chart Core error: wrong property and method passed in extend attribute")}},r=a=>{let c=He(a);const m=$=>Object.assign({animation:!0},c,$);return e.showAria&&(c=m({aria:{enabled:!0,decal:{show:!0}}})),c},u=(a=y)=>{const c=h.value,m=r(e.options),{height:$,width:Ze}=c.getBoundingClientRect(),{onSuccess:O,onError:L}=e;try{Oo().forEach(C=>{Ie(C.name,C.theme)}),t=eo(c,a,{width:Ze===0?200:void 0,height:$===0?200:void 0}),i.value=t,m&&t.setOption({}),e.animation&&setTimeout(()=>{m&&(t==null||t.setOption(m))}),O&&R(O,t)}catch(C){L&&R(L),console.error("RayChart render error: ",C)}},W=a=>{if(e.autoChangeTheme){a?u(`${y}-dark`):u();return}e.theme||u()},v=()=>{t&&(t.clear(),t.dispose())},Ne=()=>{t&&t.resize()},T=()=>{if(t!=null&&t.getDom()){console.warn("RayChart mount: There is a chart instance already initialized on the dom. Execution was interrupted");return}e.autoChangeTheme?W(n.value):e.theme?u(`${y}-dark`):u(),e.autoResize&&(s=qe(Ne,e.throttleWait),d=Ye(e.observer||b,s),Je(window,"resize",s))},B=()=>{var a;v(),s&&Ke(window,"resize",s),s==null||s.cancel(),(a=d==null?void 0:d.stop)==null||a.call(d)};return w(()=>n.value,a=>{e.autoChangeTheme&&(v(),W(a))}),w(()=>e.showAria,()=>{v(),(e.autoChangeTheme||e.theme)&&n.value?u(`${y}-dark`):u()}),w(()=>e.loading,a=>{a?t==null||t.showLoading(e.loadingOptions):t==null||t.hideLoading()}),w(()=>e.options,a=>{if(e.watchOptions){const c=r(a),m=Object.assign({},e.setChartOptions,{notMerge:!1,lazyUpdate:!0,silent:!1,replaceMerge:[]});t==null||t.setOption(c,m)}},{deep:!0}),p({echart:i,dispose:B,render:T}),Co(async()=>{await F()}),wo(()=>{xo(()=>{T()})}),Ao(()=>{B()}),{rayChartRef:h,cssVarsRef:k,rayChartWrapperRef:b}},render(){return o("div",{class:"ray-chart",style:[this.cssVarsRef],ref:"rayChartWrapperRef"},[o("div",{class:"ray-chart__container",ref:"rayChartRef"},null)])}}),St=z({name:"REchart",setup(){const e=f(),p=f(!1),g=f(!1),n=ko({loading:!1}),h={legend:{},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"日期",data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}},{name:"数量",data:[12,220,250,180,20,10,190],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},b={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},i=f({title:{text:j().valueOf()},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}),t=r=>{n.loading=r},s=r=>{g.value=r},d=r=>{window.$notification.info({title:"可视化图渲染成功回调函数",content:"可视化图渲染成功, 并且返回了当前可视化图实例",duration:5*1e3}),e.value},y=()=>{var r;(r=e.value)==null||r.render()},k=()=>{var r;(r=e.value)==null||r.dispose()},F=()=>{i.value.title.text=j().valueOf();const r=()=>Math.floor((Math.random()+1)*100);i.value.series[0].data=new Array(7).fill(0).map(()=>r()),i.value.series[1].data=new Array(7).fill(0).map(()=>r())};return{baseOptions:h,baseChartRef:e,chartLoading:p,handleLoadingShow:t,chartAria:g,handleAriaShow:s,handleChartRenderSuccess:d,basePieOptions:b,baseLineOptions:i,...Fo(n),mountChart:y,unmountChart:k,handleUpdateTitle:F}},render(){return o("div",{class:"echart"},[o(vo,{title:"chart 组件"},{default:()=>[o("ul",null,[o("li",null,[o("h3",null,[l("当未获取到宽高时，组件会默认以 200*200 尺寸填充。")])]),o("li",null,[o("h3",null,[l("默认启用 autoChangeTheme，自动监听模板主题变化（RayTemplate 独有）")])]),o("li",null,[o("h3",null,[l("默认启用 watchOptions，自动监听配置项变化")])]),o("li",null,[o("h3",null,[l("默认启用 animation，强制启用渲染过渡动画")])]),o("li",null,[o("h3",null,[l("配置 setChartOptions 属性，可以定制化合并模式")])])])]}),o(x,null,{default:()=>[l("强制渲染过渡动画（animation）")]}),o($o,{style:["padding: 18px 0"]},{default:()=>[o(E,{onClick:this.mountChart.bind(this)},{default:()=>[l("渲染")]}),o(E,{onClick:this.unmountChart.bind(this)},{default:()=>[l("卸载")]}),o(E,{onClick:this.handleUpdateTitle.bind(this)},{default:()=>[l("更新配置项")]})]}),o("div",{class:"chart--container"},[o(A,{ref:"baseChartRef",autoChangeTheme:!0,options:this.baseLineOptions,showAria:this.chartAria},null)]),o(x,null,{default:()=>[l("不跟随主题切换的暗色主题可视化图")]}),o("div",{class:"chart--container"},[o(A,{autoChangeTheme:!1,theme:"dark",options:this.baseOptions},null)]),o(x,null,{default:()=>[l("加载动画")]}),o(_,{value:this.chartLoading,"onUpdate:value":e=>this.chartLoading=e,onUpdateValue:this.handleLoadingShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏加载动画",unchecked:()=>"显示加载动画"}),o("div",{class:"chart--container"},[o(A,{loading:this.loading,options:this.baseOptions},null)]),o(x,null,{default:()=>[l("贴画可视化图")]}),o(_,{value:this.chartAria,"onUpdate:value":e=>this.chartAria=e,onUpdateValue:this.handleAriaShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏贴花",unchecked:()=>"显示贴花"}),o("div",{class:"chart--container"},[o(A,{options:this.baseOptions,showAria:this.chartAria},null)])])}});export{St as default};
