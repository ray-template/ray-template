const u=Vue.defineComponent({name:"RouterDemoDetail",render(){return this.$route.query,Vue.createVNode(naive.NSpace,{wrapItem:!1},{default:()=>[Vue.createVNode(naive.NCard,{title:"平层路由详情页面"},{default:()=>[Vue.createTextVNode("我是平层路由详情页面")]}),Vue.createVNode(naive.NCard,{title:"TIP"},{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("1. 可以点击面包屑或者菜单返回到主页面")]),Vue.createVNode("h2",null,[Vue.createTextVNode("2. 如果这个页面需要配置多个详情页面，只需将该路由所在的 children 中，将所需页面配置为 sameLevel 即可。")])]})]})}});export{u as default};
