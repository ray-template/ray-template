import{o as d,b as l}from"./@vueuse_core@10.6.1_vue@3.3.8-E_TUP8qy.js";import"./@vueuse_shared@10.6.1_vue@3.3.8-DJDYauAH.js";const V=e=>{const u=Vue.ref(0),n=Vue.ref(0),t=Vue.ref(!1),o=r=>{r.preventDefault(),t.value=!1,Vue.nextTick().then(()=>{const{clientX:c,clientY:i}=r;u.value=c,n.value=i,t.value=!0})};d(e,()=>{t.value=!1});const a=l(e,"contextmenu",o),s=l(e,"click",()=>{t.value=!1});return{stop:()=>{a(),s()},x:Vue.readonly(u),y:Vue.readonly(n),show:t}},x=Vue.defineComponent({name:"ContextMenuDemo",setup(){const e=Vue.ref(null),u=Vue.ref(!1),n=Vue.ref([{label:"杰·盖茨比",key:"jay gatsby"},{label:"黛西·布坎南",key:"daisy buchanan"},{type:"divider",key:"d1"},{label:"尼克·卡拉威",key:"nick carraway"}]),{x:t,y:o,show:a}=V(e);return{demoOneRef:e,demoOneShow:u,x:t,y:o,show:a,options:n}},render(){const{x:e,y:u,show:n}=this;return Vue.createVNode(naive.NSpace,{vertical:!0,wrapItem:!1},{default:()=>[Vue.createVNode(naive.NCard,{title:"useContextmenuCoordinate + NDropdown 实现右键菜单"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("默认点击元素外部会关闭菜单。")]),Vue.createVNode("div",{ref:"demoOneRef",style:"width: 100%; height: 200px; background-color: rgba(0, 128, 0, 0.5)"},[Vue.createTextVNode("右击")])]})]}),Vue.createVNode(naive.NDropdown,{show:n,x:e,y:u,options:this.options,trigger:"manual",placement:"bottom-start"},null)]})}});export{x as default};
