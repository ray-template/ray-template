import{s as G}from"./pinia-1fd00649.js";import{b as L,R as C}from"./index-92492b5f.js";import{V as j}from"./vuedraggable-fb995778.js";import{M as P,N as H,V as S,o as U,I as E,W as Y,X,U as q,y as J,p as R,Y as K,Z as W,_ as f,T as M,$ as Z,a0 as k,R as m,a1 as Q,H as D,a2 as ee,q as te,E as ae,B as le}from"./naive-ui-8b684773.js";import{e as v,i as ie,r as b,aa as t,l as A,E as V,p as ne,M as O,F as N,x as ue,n as se,c as r,q as F}from"./@vue-0f114043.js";import{p as oe}from"./print-js-819a679c.js";import{u as re}from"./hook-1ce4b33f.js";import{u as y,w as de}from"./xlsx-1a040596.js";import{d as ce}from"./dayjs-e34bfade.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-d93b4f94.js";import"./vue-i18n-37f9b77c.js";import"./@intlify-bd5dfa46.js";import"./lodash-es-c8e56e34.js";import"./vue-router-ed35b26a.js";import"./@vueuse-dacd7844.js";import"./screenfull-578bfdd4.js";import"./date-fns-7f923de7.js";import"./vueuc-4d05699f.js";import"./evtd-b614532e.js";import"./seemly-dc6f1e91.js";import"./@css-render-ad88a31e.js";import"./vooks-ab318924.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-57962bc1.js";import"./@emotion-8a8e73f6.js";import"./treemate-25c27bff.js";import"./date-fns-tz-230e778e.js";import"./async-validator-dee29e8b.js";import"./vue-d5390e61.js";import"./sortablejs-77186f55.js";const pe=e=>e.map(l=>(l.fixed&&(l.fixed==="right"?l.rightFixedActivated=!0:l.leftFixedActivated=!0),l.resizable&&(l.resizeColumnActivated=!0),l)),he=v({name:"TableSetting",emits:["columnsUpdate"],setup(e,{emit:a}){const l=L(),i=ie("tableSettingProvider",{}),n=b(pe(i.modelColumns.value)),d=b(!0),{themeValue:s}=G(l);return{settingOptions:n,handleDraggableEnd:()=>{a("columnsUpdate",n.value)},handleFixedClick:(p,c)=>{const u=`${p}FixedActivated`,o=n.value[c];u==="leftFixedActivated"?o.rightFixedActivated=!1:u==="rightFixedActivated"&&(o.leftFixedActivated=!1),o[u]=!o[u],o[u]?o.fixed=p:o.fixed=void 0,n.value[c]=o,a("columnsUpdate",n.value)},disableDraggable:d,FixedPopoverIcon:p=>{const{element:c,name:u,tooltip:o,fn:_,index:w,fixed:x,key:$}=p;return t(S,null,{trigger:()=>t(C,{customClassName:`draggable-item__icon ${c[$]?"draggable-item__icon--actived":""}`,name:u,size:"18",onClick:_.bind(this,x,w)},null),default:()=>o})},handleResizeColumnClick:p=>{const c=n.value[p];c.resizeColumnActivated=!c.resizeColumnActivated,c.resizable=c.resizeColumnActivated,n.value[p]=c,a("columnsUpdate",n.value)},themeValue:s}},render(){return t(S,{trigger:"click",placement:"bottom",showArrow:!1,raw:!0},{trigger:()=>t(C,{customClassName:"ray-table__setting",name:"setting",size:"18"},null),default:()=>t(P,{bordered:!1,class:"table-setting__card"},{default:()=>t(j,{class:["ray-table__setting-option--draggable"],modelValue:this.settingOptions,"onUpdate:modelValue":e=>this.settingOptions=e,itemKey:"key",disabled:!this.disableDraggable,onEnd:this.handleDraggableEnd.bind(this)},{item:({element:e,index:a})=>t("div",{class:["draggable-item",this.themeValue?"draggable-item--dark":""]},[t(C,{customClassName:"draggable-item__d--icon",name:"draggable",size:"18"},null),t(H,null,{default:()=>[t("span",null,[e.title])]}),this.FixedPopoverIcon({element:e,name:"left_arrow",tooltip:"左固定",fn:this.handleFixedClick,index:a,fixed:"left",key:"leftFixedActivated"}),t(S,null,{trigger:()=>t(C,{customClassName:`draggable-item__icon ${e.resizeColumnActivated?"draggable-item__icon--actived":""}`,name:"resize_h",size:"18",onClick:this.handleResizeColumnClick.bind(this,a)},null),default:()=>"修改列宽"}),this.FixedPopoverIcon({element:e,name:"right_arrow",tooltip:"右固定",fn:this.handleFixedClick,index:a,fixed:"right",key:"rightFixedActivated"})])})})})}}),z=v({name:"TableAction",props:{tooltip:{type:String,required:!0},negativeText:{type:String,default:"取消"},positiveText:{type:String,default:"确认"},icon:{type:String,required:!0},iconSize:{type:Number,default:18}},emits:["positive","negative"],setup(e,{emit:a}){const l=b(!1);return{handleEmit:n=>{a(n==="positive"?"positive":"negative"),l.value=!1},showPopoconfirm:l}},render(){return t(Y,{show:this.showPopoconfirm,"onUpdate:show":e=>this.showPopoconfirm=e,showArrow:!0},{trigger:()=>t(C,{name:this.icon,size:this.iconSize,customClassName:"ray-table-icon"},null),default:()=>this.tooltip,action:()=>t(U,null,{default:()=>[t(E,{size:"small",ghost:!0,onClick:this.handleEmit.bind(this,"negative")},{default:()=>[this.negativeText]}),t(E,{size:"small",ghost:!0,type:"info",onClick:this.handleEmit.bind(this,"positive")},{default:()=>[this.positiveText]})]})})}}),me={...X,rightClickMenu:{type:Array,default:()=>[]},title:{type:[String,Object],default:""},action:{type:Boolean,default:!0},actionExtra:{type:Object,default:()=>({})},showMenu:{type:Boolean,default:!0},exportTooltip:{type:String,default:"是否导出为Excel表格?"},exportType:{type:String,default:"xlsx"},exportPositiveText:{type:String,default:"确认"},exportNegativeText:{type:String,default:"取消"},exportFilename:{type:String,default:""},printPositiveText:{type:String,default:"确认"},printNegativeText:{type:String,default:"取消"},printTooltip:{type:String,default:"是否打印该表格?"},printType:{type:String,default:"html"},printOptions:{type:Object,default:()=>({})},printIcon:{type:String,default:"print"},exportExcelIcon:{type:String,default:"export_excel"},tableHeaderSpace:{type:String,default:"10px"},bordered:{type:Boolean,default:!1}},ge=e=>e.reduce((l,i)=>(l[i.key]=i.title,l),{}),fe=(e,a,l)=>{for(let i=e.s.c;i<=e.e.c;i++){const n=y.encode_col(i)+"1";a[n].v=l[a[n].v]}},Ce=async(e,a,l={})=>{await new Promise((i,n)=>{if(e!=null&&e.length){const d=ge(a??[]),s=y.json_to_sheet(e),h=y.book_new(),g=l.filename?l.filename+".xlsx":ce().format("YYYY-MM-DD")+"导出表格.xlsx";y.book_append_sheet(h,s,"Data");const T=y.decode_range(s["!ref"]);a!=null&&a.length&&fe(T,s,d),de(h,g),i()}else n()})},I=v({name:"RayTable",props:me,emits:["update:columns","menuSelect","exportSuccess","exportError"],setup(e,{emit:a}){const l=re(),i=A(()=>e.rightClickMenu),n=A({get:()=>e.columns,set:u=>{a("update:columns",u)}}),d=V({x:0,y:0,showMenu:!1});let s=-1;const h=A(()=>({"--ray-table-header-space":e.tableHeaderSpace}));ne("tableSettingProvider",{modelRightClickMenu:i,modelColumns:n});const g=u=>{n.value=u},T=(u,o)=>{a("menuSelect",u,s,o),d.showMenu=!1},B=(u,o)=>{var w;return{...(w=e.rowProps)==null?void 0:w.call(e,u,o),onContextmenu:x=>{x.preventDefault(),s=o,d.showMenu=!1,se().then(()=>{d.showMenu=!0,d.x=x.clientX,d.y=x.clientY})}}},p=async()=>{if(e.data.length&&e.columns.length)try{await Ce(e.data,e.columns,{filename:e.exportFilename}),a("exportSuccess")}catch{a("exportError")}},c=()=>{const u=Object.assign({},e.printOptions,{printable:l,type:e.printType,documentTitle:e.printOptions.documentTitle?e.printOptions.documentTitle:"表格"});oe(u)};return{tableUUID:l,handleColumnsUpdate:g,...O(d),handleRowProps:B,handleRightMenuSelect:T,handleExportPositive:p,handlePrintPositive:c,cssVars:h}},render(){return t(P,{class:"ray-table",bordered:this.bordered,style:[this.cssVars]},{default:()=>t(N,null,[t(q,ue({id:this.tableUUID},this.$props,{rowProps:this.handleRowProps.bind(this)}),{empty:()=>{var e,a;return(a=(e=this.$slots)==null?void 0:e.empty)==null?void 0:a.call(e)},loading:()=>{var e,a;return(a=(e=this.$slots)==null?void 0:e.loading)==null?void 0:a.call(e)}}),this.showMenu?t(J,{show:this.showMenu,placement:"bottom-start",trigger:"manual",x:this.x,y:this.y,options:this.rightClickMenu,onClickoutside:()=>this.showMenu=!1,onSelect:this.handleRightMenuSelect.bind(this)},null):""]),header:()=>this.title,"header-extra":()=>this.action?t("div",{class:"ray-table-header-extra__space"},[t(z,{icon:this.printIcon,tooltip:this.printTooltip,positiveText:this.printPositiveText,negativeText:this.printNegativeText,onPositive:this.handlePrintPositive.bind(this)},null),t(R,{vertical:!0},null),t(z,{icon:this.exportExcelIcon,tooltip:this.exportTooltip,positiveText:this.exportPositiveText,negativeText:this.exportNegativeText,onPositive:this.handleExportPositive.bind(this)},null),t(R,{vertical:!0},null),t(he,{onColumnsUpdate:this.handleColumnsUpdate.bind(this)},null)]):"",footer:()=>{var e,a;return(a=(e=this.$slots).tableFooter)==null?void 0:a.call(e)}})}});const be={value:{type:Boolean,default:!0},collapseToggleText:{type:Array,default:()=>["展开","收起"]},bordered:{type:Boolean,default:!1},...K},xe=v({name:"RayCollapseGrid",props:be,emits:["updateValue"],setup(e,{emit:a}){const l=b(e.value),i=()=>{l.value=!l.value,a("updateValue",l.value)};return{modelCollapsed:l,handleCollapse:i,CollapseIcon:()=>t("div",{class:"collapse-icon",onClick:i.bind(this)},[t("span",null,[l.value?e.collapseToggleText[0]:e.collapseToggleText[1]]),t(C,{customClassName:`collapse-icon--arrow ${l.value?"":"collapse-icon--arrow__expanded"}`,name:"expanded",size:"14"},null)])}},render(){return t(P,{bordered:this.bordered},{default:()=>t(W,{class:"ray-collapse-grid",collapsed:this.modelCollapsed,xGap:this.xGap||12,yGap:this.yGap||18,cols:this.cols,collapsedRows:this.collapsedRows},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e),t(f,{suffix:!0,class:"ray-collapse-grid__suffix--btn"},{default:()=>[t(U,{justify:"end"},{default:()=>{var l,i;return[(i=(l=this.$slots).action)==null?void 0:i.call(l),this.CollapseIcon()]}})]})]}})})}}),Ze=v({name:"TableView",setup(){const e=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render:s=>s.tags.map(g=>F(le,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>g}))},{title:"Action",key:"actions",render:s=>F(E,{size:"small"},{default:()=>"Send Email"})}],a=b([...e].map(s=>({...s,width:400}))),l=b([{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]),i=[{label:"编辑",key:"edit"},{label:()=>F("span",{style:{color:"red"}},"删除"),key:"delete"}],n=V({gridItemCount:4,gridCollapsedRows:1,tableLoading:!1}),d=(s,h)=>{s==="delete"&&l.value.splice(h,1)};return{...O(n),tableData:l,actionColumns:a,baseColumns:e,tableMenuOptions:i,handleMenuSelect:d}},render(){return t(ae,null,{default:()=>[t(M,null,{default:()=>[r("RayTable 组件使用")]}),t(Z,{alignText:!0},{default:()=>[t(k,null,{default:()=>[r("该组件基于 Naive UI DataTable 组件封装。实现右键菜单、表格标题、导出为 excel 操作栏等功能")]}),t(k,null,{default:()=>[r("RayTable 完全继承 DataTable 的所有属性与方法")]}),t(k,null,{default:()=>[r("相关拓展 props 属性，可以在源码位置 src/components/RayTable/src/props.ts 中查看相关代码与注释")]}),t(k,null,{default:()=>[r("该组件可以配合 RayCollapseGird 组件使用实现可折叠搜索栏")]})]}),t(M,null,{default:()=>[r("配合 RayCollapseGird 组件使用与 RayTable 拓展功能")]}),t(m,null,{default:()=>[r("使用响应式方法代理 columns 并且打开 action 则可以启用操作栏(v-model:columns)")]}),t(m,null,{default:()=>[r("拖拽操作栏动态切换表格列")]}),t(m,null,{default:()=>[r("点击左右固定按钮，即可动态固定列")]}),t(m,null,{default:()=>[r("点击修改列宽度，即可拖动列修改宽度")]}),t(m,null,{default:()=>[r("点击导出按钮即可导出 excel 表格，默认以列为表头输出")]}),t(m,null,{default:()=>[r("点击打印按钮即可打印该表格")]}),t(m,null,{default:()=>[r("右键菜单")]}),t(xe,{bordered:!1,collapsedRows:this.gridCollapsedRows,cols:this.gridItemCount,onUpdateValue:e=>window.$message.info(`我是 RayCollapseGrid 组件${e?"收起":"展开"}的回调函数`)},{action:()=>t(N,null,[t(E,null,{default:()=>[r("搜索")]}),t(E,null,{default:()=>[r("重置")]})]),default:()=>t(N,null,[t(f,null,{default:()=>[t(Q,null,null)]}),t(f,null,{default:()=>[t(D,null,null)]}),t(f,null,{default:()=>[t(ee,{type:"datetimerange",clearable:!0},null)]}),t(f,null,{default:()=>[t(D,null,null)]}),t(f,null,{default:()=>[t(D,null,null)]})])}),t(I,{style:"margin-top: 18px",title:F(te,{onUpdateValue:e=>this.tableLoading=e},{}),data:this.tableData,columns:this.baseColumns,pagination:{pageSize:10},loading:this.tableLoading,rightClickMenu:this.tableMenuOptions,onMenuSelect:this.handleMenuSelect.bind(this)},{tableFooter:()=>"表格的底部内容区域，有时候你可能会用上"}),t(I,{title:F(D,{placeholder:"请输入检索条件",style:["width: 200px"]}),data:this.tableData,columns:this.actionColumns,"onUpdate:columns":e=>this.actionColumns=e,bordered:!1,rightClickMenu:this.tableMenuOptions,onMenuSelect:this.handleMenuSelect.bind(this)},null)]})}});export{Ze as default};
