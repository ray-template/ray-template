import{aw as F,ax as O,ay as C,az as E,aA as b,aB as m}from"./utils-vendor-b42bf1db.js";import{an as s,b3 as i,bd as e,be as o,aL as D}from"./vendor-89dc2468.js";import{d as B,k as f,P as v,K as u,a as n,n as V}from"./vue-vendor-0e3aae74.js";import"./css-vendor-a950dfa6.js";const N=B({name:"CalculatePrecision",setup(){const t=f({addOptions:["1","0.2","0.1","1.1"],subtractOptions:["1","0.2","0.1","1.1"],multiplyOptions:["1","0.2","0.1","1.1"],divideOptions:["1","0.2","0.1","1.1"],distributeValue:12,distributeOutputValue:[],distributeLength:3}),l={addOptions:C,subtractOptions:E,multiplyOptions:b,divideOptions:m},p=(d,r)=>{const c=l[r],h=c(...d);return"结果: "+F(h)},a=()=>{V().then(()=>{t.distributeOutputValue=O(t.distributeValue,t.distributeLength)})};return a(),{...v(t),copilotFunc:p,updateDistributeValue:a}},render(){return u(D,null,{default:()=>[u("h2",{style:"margin: 0 0 20px 0"},[n("计算方法，默认都保留两位小数与四舍五入，可以根据 format 方法自行转换")]),u("h3",{style:"margin: 0 0 20px 0"},[n("示例方法都基于 currency.js 封装，利用其精度处理能力封装了常用的一些计算方法，解决精度问题。如果需要其他的方法请阅读官方文档 https://currency.js.org/#subtract")]),u(s,{vertical:!0},{default:()=>[u(i,{title:"加法"},{default:()=>u(e,{value:this.addOptions,"onUpdate:value":t=>this.addOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"addOptions")}},null),footer:()=>this.copilotFunc(this.addOptions,"addOptions")}),u(i,{title:"减法"},{default:()=>u(e,{value:this.subtractOptions,"onUpdate:value":t=>this.subtractOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"subtractOptions")}},null),footer:()=>this.copilotFunc(this.subtractOptions,"subtractOptions")}),u(i,{title:"乘法"},{default:()=>u(e,{value:this.multiplyOptions,"onUpdate:value":t=>this.multiplyOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"multiplyOptions")}},null),footer:()=>this.copilotFunc(this.multiplyOptions,"multiplyOptions")}),u(i,{title:"除法（非取模）"},{default:()=>u(e,{value:this.divideOptions,"onUpdate:value":t=>this.divideOptions=t,onUpdateValue:t=>{this.copilotFunc(t,"divideOptions")}},null),footer:()=>this.copilotFunc(this.divideOptions,"divideOptions")}),u(i,{title:"平分一个值"},{default:()=>u(s,{wrapItem:!1},{default:()=>[u(o,{value:this.distributeValue,"onUpdate:value":t=>this.distributeValue=t,onUpdateValue:()=>{this.updateDistributeValue()}},null),u(o,{value:this.distributeLength,"onUpdate:value":t=>this.distributeLength=t,onUpdateValue:()=>{this.updateDistributeValue()}},null)]}),footer:()=>"结果: "+this.distributeOutputValue.join(", ")})]})]})}});export{N as default};
