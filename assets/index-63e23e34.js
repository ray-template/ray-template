import{e as B,d as b,h as x,n as M}from"./index-8c40f85f.js";import{V as H}from"./vuedraggable@4.1.0_vue@3.3.4-ddd1e640.js";import{s as X}from"./pinia@2.1.6_typescript@5.0.2_vue@3.3.4-f8e74923.js";import{V as R,N as Y,R as v,a7 as q,g as L,P as O,a8 as K,a9 as G,p as J}from"./naive-ui@2.34.4_vue@3.3.4-32c47a39.js";import{k as w,i as I,b as t,E as D,A as C,z as Q,f as W,F as Z,n as ee}from"./@vue_runtime-core@3.3.4-e708ccad.js";import{k as f,h as te,w as ie}from"./@vue_reactivity@3.3.4-1f79d3d1.js";import{s as _}from"./screenfull@6.0.2-b3e6dc1f.js";import{p as ne}from"./print-js@1.6.0-558dc1b9.js";import{u as T,w as ae}from"./xlsx@0.18.5-65d3fcd1.js";import{d as le}from"./dayjs@1.11.9-d5a7302f.js";const oe=e=>e.map(i=>(i.fixed&&(i.fixed==="right"?i.rightFixedActivated=!0:i.leftFixedActivated=!0),i.resizable&&(i.resizeColumnActivated=!0),i)),se=w({name:"TableSetting",emits:["columnsUpdate"],setup(e,{emit:n}){const i=I("tableSettingProvider",{}),l=B(),a=f(oe(i.modelColumns.value)),m=f(!0),{themeValue:r}=X(l);return{settingOptions:a,handleDraggableEnd:()=>{n("columnsUpdate",a.value)},handleFixedClick:(h,d)=>{const g=`${h}FixedActivated`,c=a.value[d];g==="leftFixedActivated"?c.rightFixedActivated=!1:g==="rightFixedActivated"&&(c.leftFixedActivated=!1),c[g]=!c[g],c[g]?c.fixed=h:c.fixed=void 0,a.value[d]=c,n("columnsUpdate",a.value)},disableDraggable:m,FixedPopoverIcon:h=>{const{element:d,name:g,tooltip:c,fn:F,index:A,fixed:U,key:E}=h;return t(v,null,{trigger:()=>t(b,{customClassName:`draggable-item__icon ray-table-icon ${d[E]?"draggable-item__icon--actived":""}`,name:g,size:"18",onClick:F.bind(this,U,A)},null),default:()=>c})},handleResizeColumnClick:h=>{const d=a.value[h];d.resizeColumnActivated=!d.resizeColumnActivated,d.resizable=d.resizeColumnActivated,a.value[h]=d,n("columnsUpdate",a.value)},themeValue:r}},render(){return t(v,{trigger:"click",placement:"bottom",showArrow:!1,raw:!0},{trigger:()=>t(b,{customClassName:"ray-table__setting",name:"setting",size:"18"},null),default:()=>t(R,{bordered:!1,class:"table-setting__card"},{default:()=>t(H,D({class:["ray-table__setting-option--draggable"],modelValue:this.settingOptions,"onUpdate:modelValue":e=>this.settingOptions=e,itemKey:"key"},{disabled:!this.disableDraggable,onEnd:this.handleDraggableEnd.bind(this)}),{item:({element:e,index:n})=>t("div",{class:["draggable-item",this.themeValue?"draggable-item--dark":""]},[t(b,{customClassName:"draggable-item__d--icon",name:"draggable",size:"18"},null),t(Y,null,{default:()=>[t("span",null,[e.title])]}),this.FixedPopoverIcon({element:e,name:"left_arrow",tooltip:"左固定",fn:this.handleFixedClick,index:n,fixed:"left",key:"leftFixedActivated"}),t(v,null,{trigger:()=>t(b,{customClassName:`draggable-item__icon ${e.resizeColumnActivated?"draggable-item__icon--actived":""}`,name:"resize_h",size:"18",onClick:this.handleResizeColumnClick.bind(this,n)},null),default:()=>"修改列宽"}),this.FixedPopoverIcon({element:e,name:"right_arrow",tooltip:"右固定",fn:this.handleFixedClick,index:n,fixed:"right",key:"rightFixedActivated"})])})})})}}),V=w({name:"TableAction",props:{tooltip:{type:String,required:!0},negativeText:{type:String,default:"取消"},positiveText:{type:String,default:"确认"},icon:{type:String,required:!0},iconSize:{type:Number,default:18},popoverContent:{type:String,required:!0}},emits:["positive","negative"],setup(e,{emit:n}){const i=f(!1);return{handleEmit:a=>{n(a==="positive"?"positive":"negative"),i.value=!1},showPopoconfirm:i}},render(){return t(v,null,{trigger:()=>t(q,{show:this.showPopoconfirm,"onUpdate:show":e=>this.showPopoconfirm=e,showArrow:!0},{trigger:()=>t(b,{name:this.icon,size:this.iconSize,customClassName:"ray-table-icon"},null),default:()=>this.tooltip,action:()=>t(L,null,{default:()=>[t(O,{size:"small",ghost:!0,onClick:this.handleEmit.bind(this,"negative")},{default:()=>[this.negativeText]}),t(O,{size:"small",ghost:!0,type:"info",onClick:this.handleEmit.bind(this,"positive")},{default:()=>[this.positiveText]})]})}),default:()=>this.popoverContent})}});const re=w({name:"TableSize",props:{onChangeSize:{type:[Function,Array],default:null}},emits:["changeSize"],setup(e){const n=I("tableSettingProvider",{}),i=f(!1),l=C({get:()=>n.size,set:r=>{const{onChangeSize:s}=e;s&&x(s,r)}}),a=f([{label:"默认",key:"medium"},{label:"紧凑",key:"small"},{label:"宽松",key:"large"}]);return{size:l,sizeOptions:a,handleDropdownClick:r=>{a.value.forEach(s=>{s.key===r&&(l.value=r,i.value=!1)})},popoverShow:i}},render(){return t(v,{show:this.popoverShow,"onUpdate:show":e=>this.popoverShow=e,trigger:"click",placement:"bottom",showArrow:!1,raw:!0},{trigger:()=>t(v,null,{trigger:()=>t(b,{name:"adjustment",size:"18",customClassName:"ray-table-icon"},null),default:()=>"表格密度"}),default:()=>t(R,{bordered:!1,class:"ray-table__table-size ray-table__table-size--dark ray-table__table-size--light"},{default:()=>[t("div",{class:"table-size__dropdown"},[t("div",{class:"table-size__dropdown-wrapper"},[this.sizeOptions.map(e=>t("div",{class:["dropdown-item",e.key===this.size?"dropdown-item--active":""],key:e.key,onClick:this.handleDropdownClick.bind(this,e.key)},[t("div",{class:"drop-item__label"},[e.label])]))])])]})})}});const de=w({name:"TableScreenfull",setup(){const e=I("tableSettingProvider",{}),n=C(()=>e.rayTableUUID);let i=_.isFullscreen;return{handleScreenfull:()=>{const a=document.getElementById(n.value);i=!i,a&&_.isEnabled&&i?_.request(a):_.exit()}}},render(){return t(v,null,{trigger:()=>t(b,{name:"fullscreen",size:"18",customClassName:"ray-table-icon tay-table-icon__screenfull",onClick:this.handleScreenfull.bind(this)},null),default:()=>"全屏表格"})}}),ce={...K,rightClickOptions:{type:Array,default:()=>[]},onRightMenuClick:{type:[Function,Array],default:null},title:{type:[String,Object],default:null},action:{type:Boolean,default:!0},actionExtra:{type:Object,default:()=>({})},exportTooltip:{type:String,default:"是否导出为Excel表格?"},exportType:{type:String,default:"xlsx"},exportPositiveText:{type:String,default:"确认"},exportNegativeText:{type:String,default:"取消"},exportFilename:{type:String,default:""},printPositiveText:{type:String,default:"确认"},printNegativeText:{type:String,default:"取消"},printTooltip:{type:String,default:"是否打印该表格?"},printType:{type:String,default:"html"},printOptions:{type:Object,default:()=>({})},printIcon:{type:String,default:"print"},exportExcelIcon:{type:String,default:"export_excel"},tableHeaderSpace:{type:String,default:"10px"},bordered:{type:Boolean,default:!1},onExportSuccess:{type:[Function,Array],default:null},onExportError:{type:[Function,Array],default:null},onUpdateColumns:{type:[Function,Array],default:null},"onUpdate:columns":{type:[Function,Array],default:null}},ue=e=>e.reduce((i,l)=>(i[l.key]=l.title,i),{}),he=(e,n,i)=>{for(let l=e.s.c;l<=e.e.c;l++){const a=T.encode_col(l)+"1";n[a].v=i[n[a].v]}},pe=async(e,n,i={})=>{await new Promise((l,a)=>{if(Array.isArray(e))if(e.length){const m=ue(n??[]),r=T.json_to_sheet(e),s=T.book_new(),k=i.filename?i.filename+".xlsx":le().format("YYYY-MM-DD")+"导出表格.xlsx";T.book_append_sheet(s,r,"Data");const y=T.decode_range(r["!ref"]);n!=null&&n.length&&he(y,r,m),ae(s,k),l()}else l();else a()})},we=w({name:"RayTable",props:ce,setup(e,{expose:n}){const i=f(),l=M(16),a=M(16),m=C(()=>e.rightClickOptions),r=C({get:()=>e.columns,set:o=>{const{onUpdateColumns:u,"onUpdate:columns":p}=e;u&&x(u,o),p&&x(p,o)}}),s=te({x:0,y:0,showMenu:!1}),k=C(()=>({"--ray-table-header-space":e.tableHeaderSpace})),y=f(e.size),P=f();let h=-1;Q("tableSettingProvider",{modelRightClickMenu:m,modelColumns:r,size:y,rayTableUUID:a});const d=o=>{r.value=o},g=(o,u)=>{const{onRightMenuClick:p}=e;p&&x(p,o,h,u),s.showMenu=!1},c=(o,u)=>{var z;const p=(z=e.rowProps)==null?void 0:z.call(e,o,u),N=m.value.length?S=>{S.preventDefault(),h=u,s.showMenu=!1,ee().then(()=>{s.showMenu=!0,s.x=S.clientX,s.y=S.clientY})}:void 0;return{...p,onContextmenu:N}},F=async()=>{const{onExportSuccess:o,onExportError:u}=e;if(e.data.length&&e.columns.length)try{await pe(e.data,e.columns,{filename:e.exportFilename}),o&&x(o)}catch{u&&x(u)}},A=()=>{const o=Object.assign({},e.printOptions,{printable:l,type:e.printType,documentTitle:e.printOptions.documentTitle?e.printOptions.documentTitle:"表格"});ne(o)},U=o=>{y.value=o},E=o=>{const{clearFilters:u,clearSorter:p,filters:N,page:z,scrollTo:S,sort:$,filter:j}=o;P.value={clearFilters:u,clearSorter:p,filters:N,page:z,scrollTo:S,sort:$,filter:j}};return n({tableMethods:C(()=>P.value)}),W(()=>{E(i.value)}),{tableUUID:l,rayTableUUID:a,handleColumnsUpdate:d,...ie(s),handleRowProps:c,handleRightMenuSelect:g,handleExportPositive:F,handlePrintPositive:A,cssVars:k,handleChangeTableSize:U,tableSize:y,rayTableInstance:i,modelRightClickMenu:m}},render(){return t(R,D({class:"ray-table",bordered:this.bordered,style:[this.cssVars]},{id:this.rayTableUUID}),{default:()=>t(Z,null,[t(G,D({ref:"rayTableInstance"},{id:this.tableUUID},this.$props,{rowProps:this.handleRowProps.bind(this),size:this.tableSize}),{...this.$slots}),t(J,{show:this.showMenu,placement:"bottom-start",trigger:"manual",x:this.x,y:this.y,options:this.modelRightClickMenu,onClickoutside:()=>this.showMenu=!1,onSelect:this.handleRightMenuSelect.bind(this)},null)]),header:()=>this.title||t("div",{style:"display: none;"},null),"header-extra":()=>this.action?t("div",{class:"ray-table-header-extra__space"},[t(V,{icon:this.printIcon,tooltip:this.printTooltip,popoverContent:"打印表格",positiveText:this.printPositiveText,negativeText:this.printNegativeText,onPositive:this.handlePrintPositive.bind(this)},null),t(V,{icon:this.exportExcelIcon,tooltip:this.exportTooltip,popoverContent:"导出表格",positiveText:this.exportPositiveText,negativeText:this.exportNegativeText,onPositive:this.handleExportPositive.bind(this)},null),t(re,{onChangeSize:this.handleChangeTableSize.bind(this)},null),t(de,null,null),t(se,{onColumnsUpdate:this.handleColumnsUpdate.bind(this)},null)]):"",footer:()=>{var e,n;return(n=(e=this.$slots).tableFooter)==null?void 0:n.call(e)}})}});export{we as R};
