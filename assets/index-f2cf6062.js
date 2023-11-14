import{y as F,z as l,g as m,B as c}from"./index-4cfc8ec4.js";import"./lodash-es@4.17.21-e8d1949e.js";import"./vue-hooks-plus@1.8.5_vue@3.3.8-2f171f2e.js";import"./lodash@4.17.21-e6f077ad.js";import"./awesome-qr@2.1.5-rc.0-76c123e9.js";import"./canvas@2.11.2-f05bd587.js";import"./js-binary-schema-parser@2.0.3-9e47f7a8.js";import"./js-cookie@3.0.5-19aa770d.js";import"./screenfull@5.2.0-7567c894.js";import"./qs@6.11.2-83b75eda.js";import"./side-channel@1.0.4-36eac644.js";import"./get-intrinsic@1.2.1-c74897b4.js";import"./has-symbols@1.0.3-e8f3ca0e.js";import"./has-proto@1.0.1-f7d0b240.js";import"./function-bind@1.1.1-22e7ee79.js";import"./has@1.0.3-2d67dc68.js";import"./call-bind@1.0.2-c8357e2b.js";import"./@vueuse_core@9.13.0_vue@3.3.8-5d19f09f.js";import"./@vueuse_shared@9.13.0_vue@3.3.8-b2a32b41.js";import"./dayjs@1.11.9-6a1565a1.js";import"./@vue_runtime-core@3.3.8-05565b4b.js";import"./@vue_reactivity@3.3.8-5d5bde00.js";import"./@vue_shared@3.3.8-a8e5b170.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.6-02097300.js";import"./clipboard@2.0.11-4ae3371d.js";function d(){const{changeMenuModelValue:e}=F();return{navigationTo:u=>{if(typeof u=="number"){if(isNaN(u)){console.warn(`navigationTo: The ${u} is NaN, expect number.`);return}const{getMenuOptions:i}=l();if(u>i.value.length){console.warn(`navigationTo: The current ${u} exceeds the maximum number of menus.`);return}const n=i.value[u],a=t=>{if(t.children&&t.children.length>0){const{children:[r]}=t;a(r);return}e(t.key,t)};a(n)}else e(u.key,u)}}}const G=Vue.defineComponent({name:"TemplateHooks",setup(){const e=Vue.ref(""),o=m("layoutContentMaximize"),{navigationTo:u}=d(),{reload:i,maximize:n}=c();return{navigationTo:u,reload:i,currentMenuOption:e,maximize:n,maximizeRef:o}},render(){const{navigationTo:e,reload:o,maximize:u}=this;return Vue.createVNode(naive.NSpace,{wrapItem:!1,vertical:!0},{default:()=>[Vue.createVNode(naive.NCard,{title:"接口说明"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("hooks/template 包存放模板专属 hook 方法。这里不做过多的赘述，可以查看文档具体描述。")])]}),Vue.createVNode(naive.NCard,{title:"useAppMenu 导航方法"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("navigationTo 参数为正整数时，会更具当前的菜单顺序进行自动导航匹配。但是此方法仅能导航一级菜单。并且如果导航菜单非根菜单项，会自动递归导航至一子菜单。")]),Vue.createVNode("br",null,null),Vue.createVNode(naive.NButton,{onClick:()=>e(14)},{default:()=>[Vue.createTextVNode("跳转至多级菜单")]})]}),Vue.createVNode(naive.NCard,{title:"useMainPage 主页面方法"},{default:()=>[Vue.createVNode(naive.NCard,{title:"reload 加载函数"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("手动刷新内容区域，会使得当前路由页面内容强制重新加载（会执行完整的 vue 生命周期）。默认 800ms 延迟。")]),Vue.createVNode("br",null,null),Vue.createVNode(naive.NButton,{onClick:()=>{o()}},{default:()=>[Vue.createTextVNode("刷新")]})]}),Vue.createVNode(naive.NCard,{title:"maximize 内容区域最大化"},{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>{u(!this.maximizeRef)}},{default:()=>[Vue.createTextVNode("最大化内容区域")]})]})]})]})}});export{G as default};
