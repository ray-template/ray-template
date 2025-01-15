import{N as r,O as A}from"./hooks-Bwjsi7Cp.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./dayjs@1.11.13-DmclB1g0.js";import"./print-js@1.6.0-CSPo0Tcq.js";import"./vue-hooks-plus@2.2.1_vue@3.5.13_typescript@5.6.3_-gDCwIakz.js";import"./lodash@4.17.21-DdnujIRq.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-Beyjefx-.js";import"./jsbarcode@3.11.6-oBoQ6a3L.js";import"./@logicflow_core@2.0.6-Dn4duTGY.js";import"./mobx-preact@3.0.0_mobx@5.15.7_preact@10.22.0-B-bLefw1.js";import"./preact@10.22.0-Ch0Cz6oG.js";import{N as u,e as h,P as i,J as C}from"./naive-ui@2.40.4_vue@3.5.13_typescript@5.6.3_-CKNEL2pG.js";import{l as O,b as t,I as e}from"./@vue_runtime-core@3.5.13-Mn4UDPFA.js";import{k as g,e as L,x as V}from"./@vue_reactivity@3.5.13-BUI-9P27.js";import"./lodash-es@4.17.21-B-5kLwAl.js";import"./@vueuse_core@12.0.0_typescript@5.6.3-CIam9YNx.js";import"./@vueuse_shared@12.0.0_typescript@5.6.3-CxG_ESII.js";import"./utils-BmW7d_26.js";import"./pinia-plugin-persistedstate@4.1.3_pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3____fxy2rbnbgc2fnvkvxpfyesx43u-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";import"./pinia@2.3.0_typescript@5.6.3_vue@3.5.13_typescript@5.6.3_-C5VKkYtV.js";import"./vue-demi@0.14.10_vue@3.5.13_typescript@5.6.3_-Dq6ymT-8.js";import"./html-to-image@1.11.11-BOFdlgi9.js";import"./vue-router@4.4.0_vue@3.5.13_typescript@5.6.3_-CsxCxb2e.js";import"./@vue_runtime-dom@3.5.13-BFTDHntw.js";import"./@vue_shared@3.5.13-DbMIZLZJ.js";import"./interactjs@1.10.27-dRxyG-hL.js";import"./call-bind@1.0.7-Cpj98o6Y.js";import"./vue-i18n@9.13.1_vue@3.5.13_typescript@5.6.3_-CjWDaCXh.js";import"./@intlify_shared@9.13.1-BxU0OzX2.js";import"./@intlify_core-base@9.13.1-C6DqbPB6.js";import"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import"./echarts@5.5.1-mVDjuA5B.js";import"./zrender@5.6.0-D_NO-aBe.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./mobx@5.15.7-0V7AV027.js";import"./uuid@9.0.1-CQkTLCs1.js";import"./classnames@2.5.1-CXGZkgDa.js";import"./mousetrap@1.6.5-CZlDLqk3.js";import"./mobx-utils@5.6.2_mobx@5.15.7-DF88e1pU.js";import"./date-fns@3.6.0-C0m45l1x.js";import"./seemly@0.3.8-BnJ6M8Cl.js";import"./vueuc@0.4.64_vue@3.5.13_typescript@5.6.3_-DGG6vEPI.js";import"./evtd@0.2.4-CI_DDEu_.js";import"./@css-render_vue3-ssr@0.15.14_vue@3.5.13_typescript@5.6.3_-D1AlrnQ2.js";import"./vooks@0.2.12_vue@3.5.13_typescript@5.6.3_-DGo6pkcP.js";import"./vdirs@0.1.8_vue@3.5.13_typescript@5.6.3_-C0KV5pCE.js";import"./@juggle_resize-observer@3.4.0-C8OzoCMD.js";import"./css-render@0.15.14-C5toWlUr.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./treemate@0.3.11-DKekKYbv.js";import"./date-fns-tz@3.1.3_date-fns@3.6.0-8suFmB8o.js";import"./async-validator@4.2.5-9PlIezaS.js";import"./@css-render_plugin-bem@0.15.14_css-render@0.15.14-B0Qt1gGG.js";const Rt=O({name:"REchart",setup(){const[n,{getChartInstance:f,dispose:l,render:d,isDisposed:p}]=A(),[m,{getChartInstance:o,dispose:F,render:y,isDisposed:B}]=A(),b=g(!1),E=g(!1),s=L({loading:!1,loading1:!1}),D={legend:{},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"日期",data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}},{name:"数量",data:[12,220,250,180,20,10,190],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},k={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},c=g({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}),v=a=>{s.loading=a},w=a=>{E.value=a},S=()=>{p()?d():window.$message.warning("图表已渲染~")},x=()=>{l()},T=()=>{s.loading1=!0;const a=()=>Math.floor((Math.random()+1)*100);setTimeout(()=>{c.value.series[0].data=new Array(7).fill(0).map(()=>a()),c.value.series[1].data=new Array(7).fill(0).map(()=>a()),s.loading1=!1},1e3)};return{baseOptions:D,chartLoading:b,handleLoadingShow:v,chartAria:E,handleAriaShow:w,basePieOptions:k,baseLineOptions:c,...V(s),mountChart:S,unmountChart:x,updateChartOptions:T,register:n,register2:m,dispose2:F,render2:y,isDisposed2:B}},render(){const{register:n,register2:f,dispose2:l,render2:d,isDisposed2:p,loading1:m}=this;return t("div",{class:"echart"},[t(u,{title:"chart 组件"},{default:()=>[t("h3",null,[e("该组件基于 ECharts, Vueuse 封装。默认做了最佳的优化封装实践。")]),t("h3",null,[e("开箱即用的优化策略：节流更新图表、异步渲染、自动销毁、贴花、加载、主题、视窗区域渲染、自动更新尺寸等高级特性。")])]}),t(u,{title:"预设 card 风格图表"},{default:()=>[t(h,{style:["padding: 18px 0"]},{default:()=>[t(i,{onClick:this.mountChart.bind(this)},{default:()=>[e("渲染")]}),t(i,{onClick:this.unmountChart.bind(this)},{default:()=>[e("卸载")]}),t(i,{onClick:this.updateChartOptions.bind(this)},{default:()=>[e("更新配置项")]}),t(i,{onClick:()=>{this.loading1=!this.loading1}},{default:()=>[`${this.loading1?"关闭":"开启"}`,e("加载动画")]})]}),t("div",{class:"chart--container"},[t(r,{onRegister:n,title:"周销售量",autoChangeTheme:!0,options:this.baseLineOptions,showAria:this.chartAria,preset:"card",loading:m},null)])]}),t(u,{title:"不跟随主题切换的暗色主题可视化图，并且手动指定原始主题色"},{default:()=>[t(h,{vertical:!0},{default:()=>[t(h,null,{default:()=>[t(i,{onClick:()=>{p()?d():window.$message.warning("不可以重复渲染图表~")}},{default:()=>[e("渲染")]}),t(i,{onClick:l.bind(this)},{default:()=>[e("卸载")]})]}),t("div",{class:"chart--container"},[t(r,{onRegister:f,autoChangeTheme:!1,theme:"default",options:this.baseOptions},null)])]})]}),t(u,{title:"加载动画"},{default:()=>[t(C,{value:this.chartLoading,"onUpdate:value":o=>this.chartLoading=o,onUpdateValue:this.handleLoadingShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏加载动画",unchecked:()=>"显示加载动画"}),t("div",{class:"chart--container"},[t(r,{loading:this.loading,options:this.baseOptions},null)])]}),t(u,{title:"贴画可视化图"},{default:()=>[t(C,{value:this.chartAria,"onUpdate:value":o=>this.chartAria=o,onUpdateValue:this.handleAriaShow.bind(this),style:["padding: 18px 0"]},{checked:()=>"隐藏贴花",unchecked:()=>"显示贴花"}),t("div",{class:"chart--container"},[t(r,{options:this.baseOptions,showAria:this.chartAria},null)])]})])}});export{Rt as default};
