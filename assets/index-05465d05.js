import{s as ee}from"./pinia-12265e92.js";import{c as te,R as y,f as L}from"./index-22a1dca6.js";import{V as le}from"./vuedraggable-d72b73b6.js";import{R as P,N as ae,M as v,Z as ie,o as X,K as k,_ as ne,Y as se,y as oe,$ as ue,P as re,Q as E,X as j,a0 as de,a1 as z,V as C,a2 as ce,B as I,a3 as pe,n as he,H as me,F as ge}from"./naive-ui-ae60270d.js";import{e as F,i as O,r as c,ac as e,x as U,l as S,E as Y,p as fe,o as q,M as J,F as V,n as be,c as u,q as A}from"./@vue-862298d8.js";import{s as _}from"./screenfull-b3e6dc1f.js";import{p as Ce}from"./print-js-fb972d8c.js";import{u as w,w as ye}from"./xlsx-1a040596.js";import{d as ve}from"./dayjs-593d4d00.js";import"./vue-demi-71ba0ef2.js";import"./lodash-es-de060e62.js";import"./vue-i18n-b0a9d311.js";import"./@intlify-bd5dfa46.js";import"./vue-router-69d920af.js";import"./@vueuse-52fa96c2.js";import"./pinia-plugin-persistedstate-d93b4f94.js";import"./date-fns-b95abe94.js";import"./vueuc-ddf611ee.js";import"./evtd-b614532e.js";import"./seemly-dc6f1e91.js";import"./@css-render-105b2753.js";import"./vooks-78477a1e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./treemate-25c27bff.js";import"./date-fns-tz-106dba0e.js";import"./async-validator-dee29e8b.js";import"./vue-f8b19fbe.js";import"./sortablejs-f6f67325.js";const Fe=t=>t.map(l=>(l.fixed&&(l.fixed==="right"?l.rightFixedActivated=!0:l.leftFixedActivated=!0),l.resizable&&(l.resizeColumnActivated=!0),l)),xe=F({name:"TableSetting",emits:["columnsUpdate"],setup(t,{emit:a}){const l=O("tableSettingProvider",{}),i=te(),n=c(Fe(l.modelColumns.value)),m=c(!0),{themeValue:p}=ee(i);return{settingOptions:n,handleDraggableEnd:()=>{a("columnsUpdate",n.value)},handleFixedClick:(g,d)=>{const b=`${g}FixedActivated`,h=n.value[d];b==="leftFixedActivated"?h.rightFixedActivated=!1:b==="rightFixedActivated"&&(h.leftFixedActivated=!1),h[b]=!h[b],h[b]?h.fixed=g:h.fixed=void 0,n.value[d]=h,a("columnsUpdate",n.value)},disableDraggable:m,FixedPopoverIcon:g=>{const{element:d,name:b,tooltip:h,fn:N,index:B,fixed:R,key:M}=g;return e(v,null,{trigger:()=>e(y,{customClassName:`draggable-item__icon ${d[M]?"draggable-item__icon--actived":""}`,name:b,size:"18",onClick:N.bind(this,R,B)},null),default:()=>h})},handleResizeColumnClick:g=>{const d=n.value[g];d.resizeColumnActivated=!d.resizeColumnActivated,d.resizable=d.resizeColumnActivated,n.value[g]=d,a("columnsUpdate",n.value)},themeValue:p}},render(){return e(v,{trigger:"click",placement:"bottom",showArrow:!1,raw:!0},{trigger:()=>e(y,{customClassName:"ray-table__setting",name:"setting",size:"18"},null),default:()=>e(P,{bordered:!1,class:"table-setting__card"},{default:()=>e(le,U({class:["ray-table__setting-option--draggable"],modelValue:this.settingOptions,"onUpdate:modelValue":t=>this.settingOptions=t,itemKey:"key"},{disabled:!this.disableDraggable,onEnd:()=>this.handleDraggableEnd.bind(this)}),{item:({element:t,index:a})=>e("div",{class:["draggable-item",this.themeValue?"draggable-item--dark":""]},[e(y,{customClassName:"draggable-item__d--icon",name:"draggable",size:"18"},null),e(ae,null,{default:()=>[e("span",null,[t.title])]}),this.FixedPopoverIcon({element:t,name:"left_arrow",tooltip:"左固定",fn:this.handleFixedClick,index:a,fixed:"left",key:"leftFixedActivated"}),e(v,null,{trigger:()=>e(y,{customClassName:`draggable-item__icon ${t.resizeColumnActivated?"draggable-item__icon--actived":""}`,name:"resize_h",size:"18",onClick:this.handleResizeColumnClick.bind(this,a)},null),default:()=>"修改列宽"}),this.FixedPopoverIcon({element:t,name:"right_arrow",tooltip:"右固定",fn:this.handleFixedClick,index:a,fixed:"right",key:"rightFixedActivated"})])})})})}}),H=F({name:"TableAction",props:{tooltip:{type:String,required:!0},negativeText:{type:String,default:"取消"},positiveText:{type:String,default:"确认"},icon:{type:String,required:!0},iconSize:{type:Number,default:18},popoverContent:{type:String,required:!0}},emits:["positive","negative"],setup(t,{emit:a}){const l=c(!1);return{handleEmit:n=>{a(n==="positive"?"positive":"negative"),l.value=!1},showPopoconfirm:l}},render(){return e(v,null,{trigger:()=>e(ie,{show:this.showPopoconfirm,"onUpdate:show":t=>this.showPopoconfirm=t,showArrow:!0},{trigger:()=>e(y,{name:this.icon,size:this.iconSize,customClassName:"ray-table-icon"},null),default:()=>this.tooltip,action:()=>e(X,null,{default:()=>[e(k,{size:"small",ghost:!0,onClick:this.handleEmit.bind(this,"negative")},{default:()=>[this.negativeText]}),e(k,{size:"small",ghost:!0,type:"info",onClick:this.handleEmit.bind(this,"positive")},{default:()=>[this.positiveText]})]})}),default:()=>this.popoverContent})}});const Ee=F({name:"TableSize",emits:["changeSize"],setup(t,{emit:a}){const l=O("tableSettingProvider",{}),i=c(!1),n=c(l.size),m=S({get:()=>l.size,set:s=>{n.value=s}}),p=c([{label:"默认",key:"medium"},{label:"紧凑",key:"small"},{label:"宽松",key:"large"}]);return{sizeOptions:p,currentSize:n,handleDropdownClick:s=>{p.value.forEach(f=>{f.key===s&&(m.value=s,i.value=!1,a("changeSize",s))})},popoverShow:i}},render(){return e(v,{show:this.popoverShow,"onUpdate:show":t=>this.popoverShow=t,trigger:"click",placement:"bottom",showArrow:!1,raw:!0},{trigger:()=>e(v,null,{trigger:()=>e(y,{name:"adjustment",size:"18",customClassName:"ray-table-icon"},null),default:()=>"表格密度"}),default:()=>e(P,{bordered:!1,class:"ray-table__table-size"},{default:()=>[e("div",{class:"table-size__dropdown"},[e("div",{class:"table-size__dropdown-wrapper"},[this.sizeOptions.map(t=>e("div",{class:["dropdown-item",t.key===this.currentSize?"dropdown-item--active":""],key:t.key,onClick:this.handleDropdownClick.bind(this,t.key)},[e("div",{class:"drop-item__label"},[t.label])]))])])]})})}});const Se=F({name:"TableScreenfull",setup(){const t=O("tableSettingProvider",{}),a=S(()=>t.rayTableUUID);let l=_.isFullscreen;return{handleScreenfull:()=>{const n=document.getElementById(a.value);l=!l,n&&_.isEnabled&&l?_.request(n):_.exit()}}},render(){return e(v,null,{trigger:()=>e(y,{name:"fullscreen",size:"18",customClassName:"ray-table-icon tay-table-icon__screenfull",onClick:this.handleScreenfull.bind(this)},null),default:()=>"全屏表格"})}}),Te={...ne,rightClickMenu:{type:Array,default:()=>[]},title:{type:[String,Object],default:""},action:{type:Boolean,default:!0},actionExtra:{type:Object,default:()=>({})},showMenu:{type:Boolean,default:!0},exportTooltip:{type:String,default:"是否导出为Excel表格?"},exportType:{type:String,default:"xlsx"},exportPositiveText:{type:String,default:"确认"},exportNegativeText:{type:String,default:"取消"},exportFilename:{type:String,default:""},printPositiveText:{type:String,default:"确认"},printNegativeText:{type:String,default:"取消"},printTooltip:{type:String,default:"是否打印该表格?"},printType:{type:String,default:"html"},printOptions:{type:Object,default:()=>({})},printIcon:{type:String,default:"print"},exportExcelIcon:{type:String,default:"export_excel"},tableHeaderSpace:{type:String,default:"10px"},bordered:{type:Boolean,default:!1}},we=t=>t.reduce((l,i)=>(l[i.key]=i.title,l),{}),ke=(t,a,l)=>{for(let i=t.s.c;i<=t.e.c;i++){const n=w.encode_col(i)+"1";a[n].v=l[a[n].v]}},De=async(t,a,l={})=>{await new Promise((i,n)=>{if(Array.isArray(t))if(t.length){const m=we(a??[]),p=w.json_to_sheet(t),o=w.book_new(),s=l.filename?l.filename+".xlsx":ve().format("YYYY-MM-DD")+"导出表格.xlsx";w.book_append_sheet(o,p,"Data");const f=w.decode_range(p["!ref"]);a!=null&&a.length&&ke(f,p,m),ye(o,s),i()}else i();else n()})},ze=F({name:"RayTable",props:Te,emits:["update:columns","menuSelect","exportSuccess","exportError"],setup(t,{emit:a,expose:l}){const i=c(),n=L(),m=L(),p=S(()=>t.rightClickMenu),o=S({get:()=>t.columns,set:r=>{a("update:columns",r)}}),s=Y({x:0,y:0,showMenu:!1});let f=-1;const $=S(()=>({"--ray-table-header-space":t.tableHeaderSpace})),g=c(t.size),d=c();fe("tableSettingProvider",{modelRightClickMenu:p,modelColumns:o,size:t.size,rayTableUUID:m});const b=r=>{o.value=r},h=(r,x)=>{a("menuSelect",r,f,x),s.showMenu=!1},N=(r,x)=>{var D;return{...(D=t.rowProps)==null?void 0:D.call(t,r,x),onContextmenu:T=>{T.preventDefault(),f=x,s.showMenu=!1,be().then(()=>{s.showMenu=!0,s.x=T.clientX,s.y=T.clientY})}}},B=async()=>{if(t.data.length&&t.columns.length)try{await De(t.data,t.columns,{filename:t.exportFilename}),a("exportSuccess")}catch{a("exportError")}},R=()=>{const r=Object.assign({},t.printOptions,{printable:n,type:t.printType,documentTitle:t.printOptions.documentTitle?t.printOptions.documentTitle:"表格"});Ce(r)},M=r=>{g.value=r},K=r=>{const{clearFilters:x,clearSorter:G,filters:D,page:T,scrollTo:Q,sort:Z,filter:W}=r;d.value={clearFilters:x,clearSorter:G,filters:D,page:T,scrollTo:Q,sort:Z,filter:W}};return l({tableMethods:S(()=>d.value)}),q(()=>{K(i.value)}),{tableUUID:n,rayTableUUID:m,handleColumnsUpdate:b,...J(s),handleRowProps:N,handleRightMenuSelect:h,handleExportPositive:B,handlePrintPositive:R,cssVars:$,handleChangeTableSize:M,tableSize:g,rayTableInstance:i}},render(){return e(P,U({class:"ray-table",bordered:this.bordered,style:[this.cssVars]},{id:this.rayTableUUID}),{default:()=>e(V,null,[e(se,U({ref:"rayTableInstance"},{id:this.tableUUID},this.$props,{rowProps:this.handleRowProps.bind(this),size:this.tableSize}),{...this.$slots}),this.showMenu?e(oe,{show:this.showMenu,placement:"bottom-start",trigger:"manual",x:this.x,y:this.y,options:this.rightClickMenu,onClickoutside:()=>this.showMenu=!1,onSelect:this.handleRightMenuSelect.bind(this)},null):""]),header:()=>this.title,"header-extra":()=>this.action?e("div",{class:"ray-table-header-extra__space"},[e(H,{icon:this.printIcon,tooltip:this.printTooltip,popoverContent:"打印表格",positiveText:this.printPositiveText,negativeText:this.printNegativeText,onPositive:this.handlePrintPositive.bind(this)},null),e(H,{icon:this.exportExcelIcon,tooltip:this.exportTooltip,popoverContent:"导出表格",positiveText:this.exportPositiveText,negativeText:this.exportNegativeText,onPositive:this.handleExportPositive.bind(this)},null),e(Ee,{onChangeSize:this.handleChangeTableSize.bind(this)},null),e(Se,null,null),e(xe,{onColumnsUpdate:this.handleColumnsUpdate.bind(this)},null)]):"",footer:()=>{var t,a;return(a=(t=this.$slots).tableFooter)==null?void 0:a.call(t)}})}});const Ae={value:{type:Boolean,default:!0},collapseToggleText:{type:Array,default:()=>["展开","收起"]},bordered:{type:Boolean,default:!1},...ue},_e=F({name:"RayCollapseGrid",props:Ae,emits:["updateValue"],setup(t,{emit:a}){const l=c(t.value),i=()=>{l.value=!l.value,a("updateValue",l.value)};return{modelCollapsed:l,handleCollapse:i,CollapseIcon:()=>e("div",{class:"collapse-icon",onClick:i.bind(this)},[e("span",null,[l.value?t.collapseToggleText[0]:t.collapseToggleText[1]]),e(y,{customClassName:`collapse-icon--arrow ${l.value?"":"collapse-icon--arrow__expanded"}`,name:"expanded",size:"14"},null)])}},render(){return e(P,{bordered:this.bordered},{default:()=>e(re,{class:"ray-collapse-grid",collapsed:this.modelCollapsed,xGap:this.xGap||12,yGap:this.yGap||18,cols:this.cols,collapsedRows:this.collapsedRows},{default:()=>{var t,a;return[(a=(t=this.$slots).default)==null?void 0:a.call(t),e(E,{suffix:!0,class:"ray-collapse-grid__suffix--btn"},{default:()=>[e(X,{justify:"end"},{default:()=>{var l,i;return[(i=(l=this.$slots).action)==null?void 0:i.call(l),this.CollapseIcon()]}})]})]}})})}}),rt=F({name:"TableView",setup(){const t=c(),a=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render:o=>o.tags.map(f=>A(ge,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>f}))},{title:"Remark",key:"remark",width:300},{title:"Action",key:"actions",render:o=>A(k,{size:"small"},{default:()=>"Send Email"})}],l=c([...a].map(o=>({...o,width:400}))),i=c([{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],remark:"我是一条很长很长的备注"},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"],remark:"我是一条很长很长的备注"},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"],remark:"我是一条很长很长的备注"}]),n=[{label:"编辑",key:"edit"},{label:()=>A("span",{style:{color:"red"}},"删除"),key:"delete"}],m=Y({gridItemCount:4,gridCollapsedRows:1,tableLoading:!1}),p=(o,s)=>{o==="delete"&&i.value.splice(s,1)};return q(()=>{var o;(o=t.value)==null||o.tableMethods}),{...J(m),tableData:i,actionColumns:l,baseColumns:a,tableMenuOptions:n,handleMenuSelect:p,tableRef:t}},render(){return e(me,null,{default:()=>[e(j,null,{default:()=>[u("RayTable 组件使用")]}),e(de,{alignText:!0},{default:()=>[e(z,null,{default:()=>[u("该组件基于 Naive UI DataTable 组件封装。实现右键菜单、表格标题、导出为 excel 操作栏等功能")]}),e(z,null,{default:()=>[u("RayTable 完全继承 DataTable 的所有属性与方法")]}),e(z,null,{default:()=>[u("相关拓展 props 属性，可以在源码位置 src/components/RayTable/src/props.ts 中查看相关代码与注释")]}),e(z,null,{default:()=>[u("该组件可以配合 RayCollapseGird 组件使用实现可折叠搜索栏")]})]}),e(j,null,{default:()=>[u("配合 RayCollapseGird 组件使用与 RayTable 拓展功能")]}),e(C,null,{default:()=>[u("使用响应式方法代理 columns 并且打开 action 则可以启用操作栏(v-model:columns)")]}),e(C,null,{default:()=>[u("拖拽操作栏动态切换表格列")]}),e(C,null,{default:()=>[u("点击左右固定按钮，即可动态固定列")]}),e(C,null,{default:()=>[u("点击修改列宽度，即可拖动列修改宽度")]}),e(C,null,{default:()=>[u("点击导出按钮即可导出 excel 表格，默认以列为表头输出")]}),e(C,null,{default:()=>[u("点击打印按钮即可打印该表格")]}),e(C,null,{default:()=>[u("右键菜单")]}),e(C,null,{default:()=>[u("全屏表格")]}),e(_e,{bordered:!1,collapsedRows:this.gridCollapsedRows,cols:this.gridItemCount,onUpdateValue:t=>window.$message.info(`我是 RayCollapseGrid 组件${t?"收起":"展开"}的回调函数`)},{action:()=>e(V,null,[e(k,{type:"primary"},{default:()=>[u("搜索")]}),e(k,null,{default:()=>[u("重置")]})]),default:()=>e(V,null,[e(E,null,{default:()=>[e(ce,null,null)]}),e(E,null,{default:()=>[e(I,null,null)]}),e(E,null,{default:()=>[e(pe,{type:"datetimerange",clearable:!0},null)]}),e(E,null,{default:()=>[e(I,null,null)]}),e(E,null,{default:()=>[e(I,null,null)]})])}),e(ze,{style:"margin-top: 18px",ref:"tableRef",scrollX:2e3,title:A(he,{onUpdateValue:t=>this.tableLoading=t},{}),data:this.tableData,columns:this.actionColumns,"onUpdate:columns":t=>this.actionColumns=t,pagination:{pageSize:10},loading:this.tableLoading,rightClickMenu:this.tableMenuOptions,onMenuSelect:this.handleMenuSelect.bind(this)},{tableFooter:()=>"表格的底部内容区域插槽，有时候你可能会用上"})]})}});export{rt as default};
