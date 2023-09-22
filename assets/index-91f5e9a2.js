const a=Vue.defineComponent({name:"RDirective",setup(){const e=Vue.reactive({copyValueOne:"我是待复制内容区域一",copyValueTwo:"我是待复制内容区域二",throttleBtnClickCount:0,debounceBtnClickCount:0,disabledValue:!1}),u=t=>{e[t]++};return{...Vue.toRefs(e),updateDemoValue:u}},render(){return Vue.createVNode(naive.NSpace,{wrapItem:!1},{default:()=>[Vue.createVNode(naive.NCard,{title:"指令"},{default:()=>[Vue.createTextVNode("该页面展示如何使用已封装好的指令")]}),Vue.createVNode(naive.NCard,{title:"文本复制示例一"},{default:()=>[Vue.createVNode(naive.NInputGroup,null,{default:()=>[Vue.createVNode(naive.NInput,{value:this.copyValueOne,"onUpdate:value":e=>this.copyValueOne=e},null),Vue.withDirectives(Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("复制")]}),[[Vue.resolveDirective("copy"),this.copyValueOne]])]})]}),Vue.createVNode(naive.NCard,{title:"文本复制示例二"},{default:()=>[Vue.createVNode(naive.NInputGroup,null,{default:()=>[Vue.createVNode(naive.NInput,{value:this.copyValueTwo,"onUpdate:value":e=>this.copyValueTwo=e},null),Vue.withDirectives(Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("复制")]}),[[Vue.resolveDirective("copy"),this.copyValueTwo]])]})]}),Vue.createVNode(naive.NCard,{title:"节流"},{default:()=>[Vue.createVNode(naive.NSpace,{wrapItem:!0,vertical:!0},{default:()=>[Vue.withDirectives(Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("点击执行")]}),[[Vue.resolveDirective("throttle"),{func:this.updateDemoValue.bind(null,"throttleBtnClickCount"),trigger:"click",wait:1e3,options:{}}]]),Vue.createVNode("p",null,[Vue.createTextVNode("我执行了"),this.throttleBtnClickCount,Vue.createTextVNode("次")]),Vue.createVNode("p",null,[Vue.createTextVNode("该方法 1s 内仅会执行一次")])]})]}),Vue.createVNode(naive.NCard,{title:"防抖"},{default:()=>[Vue.createVNode(naive.NSpace,{wrapItem:!0,vertical:!0},{default:()=>[Vue.withDirectives(Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("点击执行")]}),[[Vue.resolveDirective("debounce"),{func:this.updateDemoValue.bind(null,"debounceBtnClickCount"),trigger:"click",wait:1e3,options:{}}]]),Vue.createVNode("p",null,[Vue.createTextVNode("我执行了"),this.debounceBtnClickCount,Vue.createTextVNode("次")]),Vue.createVNode("p",null,[Vue.createTextVNode("该方法将延迟 1s 执行")])]})]}),Vue.createVNode(naive.NCard,{title:"禁用"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode(naive.NSwitch,{value:this.disabledValue,"onUpdate:value":e=>this.disabledValue=e},{checked:()=>"取消",unchecked:()=>"禁用"}),Vue.createVNode(naive.NCard,{title:"描述"},{default:()=>[Vue.createVNode("p",null,[Vue.createTextVNode("该指令会强制禁用（通过 css 层面）禁用元素交互。但是 naive ui 组件提供了完整的 disabled 属性，所以在组件库有禁用需求时，直接调用组件库 disabled 属性即可。但是值得注意的是，该指令优先级最高，会覆盖组件 disabled 属性。")])]}),Vue.createVNode(naive.NCard,{title:"原生表单"},{default:()=>[Vue.withDirectives(Vue.createVNode("form",null,[Vue.createVNode("input",{type:"text",placeholder:"请输入"},null),Vue.createVNode("button",null,[Vue.createTextVNode("提交")])]),[[Vue.resolveDirective("disabled"),this.disabledValue]])]}),Vue.createVNode(naive.NCard,{title:"文本内容"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.withDirectives(Vue.createVNode("p",null,[Vue.createTextVNode("我是可以被禁用的文本内容")]),[[Vue.resolveDirective("disabled"),this.disabledValue]])]})]}),Vue.createVNode(naive.NCard,{title:"naive 组件"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0,justify:"start"},{default:()=>[Vue.withDirectives(Vue.createVNode(naive.NForm,null,{default:()=>[Vue.createVNode(naive.NFormItem,null,{default:()=>[Vue.createVNode(naive.NInput,null,null)]})]}),[[Vue.resolveDirective("disabled"),this.disabledValue]]),Vue.withDirectives(Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("按钮")]}),[[Vue.resolveDirective("disabled"),this.disabledValue]]),Vue.withDirectives(Vue.createVNode(naive.NSwitch,null,null),[[Vue.resolveDirective("disabled"),this.disabledValue]])]})]})]})]})]})}});export{a as default};
