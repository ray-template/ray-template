import{r as p,t as c}from"./hooks-5RcMTUlh.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import{a as d}from"./vue-hooks-plus@1.8.5_vue@3.3.8-UGgZVZ2w.js";import{s}from"./instance-YJkla-UN.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import"./utils-HNbFOS7v.js";import"./lodash-es@4.17.21-B0eCOOcg.js";import"./currency.js@2.0.4--or6eeOG.js";import"./@vueuse_core@10.6.1_vue@3.3.8-dM_LXN6M.js";import"./@vueuse_shared@10.6.1_vue@3.3.8-fG4vX-4M.js";import"./interactjs@1.10.21-7zFZdvts.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.6-fNhqB16x.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.8-VrcJ4P69.js";import"./@vue_reactivity@3.3.8-4NsB6yaG.js";import"./@vue_shared@3.3.8-W5PO5ES3.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";const V=e=>s({url:"/api/list",method:"get",params:e}),O=Vue.defineComponent({name:"MockDemo",setup(){const e=Vue.reactive({page:1,pageSize:10,itemCount:0,pageSizes:[10,20,30,40,50],showSizePicker:!0,onUpdatePage:u=>{e.page=u,o()},onUpdatePageSize:u=>{e.pageSize=u,e.page=1,o()}}),{data:t,loading:r,run:i}=d(V,{manual:!0,onSuccess:u=>{}}),n=Vue.ref([{title:"id",key:"id"},{title:"邮箱",key:"email"},{title:"地址",key:"address"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"创建时间",key:"createDate"},{title:"操作",key:"action",render:u=>Vue.createVNode(naive.NSpace,{align:"center"},{default:()=>[Vue.createVNode(naive.NButton,{type:"primary",text:!0,onClick:()=>{window.$message.info("查看")}},{default:()=>[Vue.createTextVNode("查看")]}),Vue.createVNode(naive.NButton,{type:"primary",text:!0,onClick:()=>{window.$message.warning("编辑")}},{default:()=>[Vue.createTextVNode("编辑")]}),Vue.createVNode(naive.NButton,{type:"error",text:!0,onClick:()=>{window.$message.error("删除")}},{default:()=>[Vue.createTextVNode("删除")]})]})}]),a=Vue.reactive({email:null}),o=()=>{const{pageSize:u,page:l}=e,{email:m}=a;i({page:l,pageSize:u,email:m})};return Vue.watchEffect(()=>{t.value&&(e.itemCount=t.value.total)}),Vue.onBeforeMount(()=>{o()}),{personData:t,personLoading:r,paginationRef:e,columns:n,...Vue.toRefs(a),getPerson:o}},render(){return Vue.createVNode(naive.NSpace,{vertical:!0,wrapItem:!1},{default:()=>{var e;return[Vue.createVNode(naive.NCard,{title:"Mock 数据"},{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("mock 数据使用。但是，并没有启用生产环境的部署，所以生产环境结果为空。")])]}),Vue.createVNode(naive.NCard,{title:"提示"},{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("RTable 组件有一个比较值得注意的地方就是，该组件会自动的按照数据量计算分页条数。所以你在异步获取数据的时候，一定要手动设置 remote 属性为 true，并且设置 itemCount 或者 pageCount。")])]}),Vue.createVNode(naive.NForm,{labelPlacement:"left"},{default:()=>[Vue.createVNode(p,{bordered:!1,cols:3},{default:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NFormItemGi,{label:"邮箱"},{default:()=>[Vue.createVNode(naive.NInput,{value:this.email,"onUpdate:value":t=>this.email=t,clearable:!0},null)]})]),action:()=>Vue.createVNode(naive.NButton,{type:"primary",onClick:this.getPerson.bind(this)},{default:()=>[Vue.createTextVNode("搜索")]})})]}),Vue.createVNode(c,{title:"分页表格",data:(e=this.personData)==null?void 0:e.data,loading:this.personLoading,columns:this.columns,"onUpdate:columns":t=>this.columns=t,pagination:this.paginationRef,remote:!0},null)]}})}});export{O as default};
