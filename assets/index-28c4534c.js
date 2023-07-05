import{o as B,n as Ie}from"./utils-vendor-532067a6.js";import{aj as Be,b as De,ak as Oe,al as we,am as Ye,an as Je,e as J,f as Re,ao as Te,ap as Ne,h as Q,y as Se,k as Qe,a1 as Ze,H as Ae,I as et,N as ce,S as fe,aq as tt,C as w,p as nt,ar as E,as as ut,at as it,B as he,au as ge,av as ve,aw as be,Y as W,a2 as rt}from"./index-1016cc88.js";import{s as lt}from"./prop-8b8caa29.js";import{A as Ee}from"./Add-274eaaf6.js";import{d as Z,h as f,r as I,x as Ue,l as G,n as me,w as at,p as st,R as ot,P as m,e as ye}from"./vue-vendor-dfef56cd.js";const dt=Z({name:"Remove",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},f("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),ct=Be({name:"DynamicTags",common:De,peers:{Input:Oe,Button:we,Tag:Ye,Space:Je},self(){return{inputWidth:"64px"}}}),ft=ct,mt=J("dynamic-tags",[J("input",{minWidth:"var(--n-input-width)"})]),pt=Object.assign(Object.assign(Object.assign({},Q.props),tt),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:e=>e},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),Y=Z({name:"DynamicTags",props:pt,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Re(e),{localeRef:s}=Te("DynamicTags"),l=Ne(e),{mergedDisabledRef:d}=l,p=I(""),y=I(!1),N=I(!0),U=I(null),g=Q("DynamicTags","-dynamic-tags",mt,ft,e,n),S=I(e.defaultValue),P=Ue(e,"value"),C=Se(P,S),$=G(()=>s.value.add),v=G(()=>lt(e.size)),b=G(()=>d.value||!!e.max&&C.value.length>=e.max);function R(a){const{onChange:h,"onUpdate:value":D,onUpdateValue:L}=e,{nTriggerFormInput:te,nTriggerFormChange:ne}=l;h&&w(h,a),L&&w(L,a),D&&w(D,a),S.value=a,te(),ne()}function M(a){const h=C.value.slice(0);h.splice(a,1),R(h)}function _(a){switch(a.key){case"Enter":V()}}function V(a){const h=a??p.value;if(h){const D=C.value.slice(0);D.push(e.onCreate(h)),R(D)}y.value=!1,N.value=!0,p.value=""}function A(){V()}function k(){y.value=!0,me(()=>{var a;(a=U.value)===null||a===void 0||a.focus(),N.value=!1})}const F=G(()=>{const{self:{inputWidth:a}}=g.value;return{"--n-input-width":a}}),o=i?Qe("dynamic-tags",void 0,F,e):void 0;return{mergedClsPrefix:n,inputInstRef:U,localizedAdd:$,inputSize:v,inputValue:p,showInput:y,inputForceFocused:N,mergedValue:C,mergedDisabled:d,triggerDisabled:b,handleInputKeyUp:_,handleAddClick:k,handleInputBlur:A,handleCloseClick:M,handleInputConfirm:V,mergedTheme:g,cssVars:i?void 0:F,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedTheme:e,cssVars:n,mergedClsPrefix:i,onRender:s,renderTag:l}=this;return s==null||s(),f(fe,{class:[`${i}-dynamic-tags`,this.themeClass],size:"small",style:n,theme:e.peers.Space,themeOverrides:e.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:d,tagStyle:p,type:y,round:N,size:U,color:g,closable:S,mergedDisabled:P,showInput:C,inputValue:$,inputStyle:v,inputSize:b,inputForceFocused:R,triggerDisabled:M,handleInputKeyUp:_,handleInputBlur:V,handleAddClick:A,handleCloseClick:k,handleInputConfirm:F,$slots:o}=this;return this.mergedValue.map((a,h)=>l?l(a,h):f(Ze,{key:h,theme:d.peers.Tag,themeOverrides:d.peerOverrides.Tag,style:p,type:y,round:N,size:U,color:g,closable:S,disabled:P,onClose:()=>{k(h)}},{default:()=>typeof a=="string"?a:a.label})).concat(C?o.input?o.input({submit:F,deactivate:V}):f(Ae,Object.assign({placeholder:"",size:b,style:v,autosize:!0},this.inputProps,{ref:"inputInstRef",value:$,onUpdateValue:a=>{this.inputValue=a},theme:d.peers.Input,themeOverrides:d.peerOverrides.Input,onKeyup:_,onBlur:V,internalForceFocus:R})):o.trigger?o.trigger({activate:A,disabled:M}):f(et,{dashed:!0,disabled:M,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,size:b,onClick:A},{icon:()=>f(ce,{clsPrefix:i},{default:()=>f(Ee,null)})}))}})}}),ht=e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}},gt=Be({name:"InputNumber",common:De,peers:{Button:we,Input:Oe},self:ht}),vt=gt;function bt(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function yt(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function oe(e){return e==null?!0:!Number.isNaN(e)}function Ve(e,n){return e==null?"":n===void 0?String(e):e.toFixed(n)}function de(e){if(e===null)return null;if(typeof e=="number")return e;{const n=Number(e);return Number.isNaN(n)?null:n}}const Vt=nt([J("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),J("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),Ce=800,Fe=100,Ct=Object.assign(Object.assign({},Q.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),xe=Z({name:"InputNumber",props:Ct,setup(e){const{mergedBorderedRef:n,mergedClsPrefixRef:i,mergedRtlRef:s}=Re(e),l=Q("InputNumber","-input-number",Vt,vt,e,i),{localeRef:d}=Te("InputNumber"),p=Ne(e),{mergedSizeRef:y,mergedDisabledRef:N,mergedStatusRef:U}=p,g=I(null),S=I(null),P=I(null),C=I(e.defaultValue),$=Ue(e,"value"),v=Se($,C),b=I(""),R=t=>{const u=String(t).split(".")[1];return u?u.length:0},M=t=>{const u=[e.min,e.max,e.step,t].map(r=>r===void 0?0:R(r));return Math.max(...u)},_=E(()=>{const{placeholder:t}=e;return t!==void 0?t:d.value.placeholder}),V=E(()=>{const t=de(e.step);return t!==null?t===0?1:Math.abs(t):1}),A=E(()=>{const t=de(e.min);return t!==null?t:null}),k=E(()=>{const t=de(e.max);return t!==null?t:null}),F=t=>{const{value:u}=v;if(t===u){a();return}const{"onUpdate:value":r,onUpdateValue:c,onChange:x}=e,{nTriggerFormInput:O,nTriggerFormChange:z}=p;x&&w(x,t),c&&w(c,t),r&&w(r,t),C.value=t,O(),z()},o=({offset:t,doUpdateIfValid:u,fixPrecision:r,isInputing:c})=>{const{value:x}=b;if(c&&yt(x))return!1;const O=(e.parse||bt)(x);if(O===null)return u&&F(null),null;if(oe(O)){const z=R(O),{precision:K}=e;if(K!==void 0&&K<z&&!r)return!1;let T=parseFloat((O+t).toFixed(K??M(O)));if(oe(T)){const{value:ae}=k,{value:se}=A;if(ae!==null&&T>ae){if(!u||c)return!1;T=ae}if(se!==null&&T<se){if(!u||c)return!1;T=se}return e.validator&&!e.validator(T)?!1:(u&&F(T),T)}}return!1},a=()=>{const{value:t}=v;if(oe(t)){const{format:u,precision:r}=e;u?b.value=u(t):t===null||r===void 0||R(t)>r?b.value=Ve(t,void 0):b.value=Ve(t,r)}else b.value=String(t)};a();const h=E(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),D=E(()=>{const{value:t}=v;if(e.validator&&t===null)return!1;const{value:u}=V;return o({offset:-u,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),L=E(()=>{const{value:t}=v;if(e.validator&&t===null)return!1;const{value:u}=V;return o({offset:+u,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function te(t){const{onFocus:u}=e,{nTriggerFormFocus:r}=p;u&&w(u,t),r()}function ne(t){var u,r;if(t.target===((u=g.value)===null||u===void 0?void 0:u.wrapperElRef))return;const c=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(c!==!1){const z=(r=g.value)===null||r===void 0?void 0:r.inputElRef;z&&(z.value=String(c||"")),v.value===c&&a()}else a();const{onBlur:x}=e,{nTriggerFormBlur:O}=p;x&&w(x,t),O(),me(()=>{a()})}function Me(t){const{onClear:u}=e;u&&w(u,t)}function ue(){const{value:t}=L;if(!t){le();return}const{value:u}=v;if(u===null)e.validator||F(pe());else{const{value:r}=V;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function ie(){const{value:t}=D;if(!t){re();return}const{value:u}=v;if(u===null)e.validator||F(pe());else{const{value:r}=V;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ke=te,Le=ne;function pe(){if(e.validator)return null;const{value:t}=A,{value:u}=k;return t!==null?Math.max(0,t):u!==null?Math.min(0,u):0}function ze(t){Me(t),F(null)}function $e(t){var u,r,c;!((u=P.value)===null||u===void 0)&&u.$el.contains(t.target)&&t.preventDefault(),!((r=S.value)===null||r===void 0)&&r.$el.contains(t.target)&&t.preventDefault(),(c=g.value)===null||c===void 0||c.activate()}let j=null,H=null,q=null;function re(){q&&(window.clearTimeout(q),q=null),j&&(window.clearInterval(j),j=null)}function le(){X&&(window.clearTimeout(X),X=null),H&&(window.clearInterval(H),H=null)}function _e(){re(),q=window.setTimeout(()=>{j=window.setInterval(()=>{ie()},Fe)},Ce),ge("mouseup",document,re,{once:!0})}let X=null;function je(){le(),X=window.setTimeout(()=>{H=window.setInterval(()=>{ue()},Fe)},Ce),ge("mouseup",document,le,{once:!0})}const He=()=>{H||ue()},Ke=()=>{j||ie()};function We(t){var u,r;if(t.key==="Enter"){if(t.target===((u=g.value)===null||u===void 0?void 0:u.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=g.value)===null||r===void 0||r.deactivate())}else if(t.key==="ArrowUp"){if(!L.value||e.keyboard.ArrowUp===!1)return;t.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ue()}else if(t.key==="ArrowDown"){if(!D.value||e.keyboard.ArrowDown===!1)return;t.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ie()}}function Ge(t){b.value=t,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}at(v,()=>{a()});const qe={focus:()=>{var t;return(t=g.value)===null||t===void 0?void 0:t.focus()},blur:()=>{var t;return(t=g.value)===null||t===void 0?void 0:t.blur()}},Xe=ut("InputNumber",s,i);return Object.assign(Object.assign({},qe),{rtlEnabled:Xe,inputInstRef:g,minusButtonInstRef:S,addButtonInstRef:P,mergedClsPrefix:i,mergedBordered:n,uncontrolledValue:C,mergedValue:v,mergedPlaceholder:_,displayedValueInvalid:h,mergedSize:y,mergedDisabled:N,displayedValue:b,addable:L,minusable:D,mergedStatus:U,handleFocus:ke,handleBlur:Le,handleClear:ze,handleMouseDown:$e,handleAddClick:He,handleMinusClick:Ke,handleAddMousedown:je,handleMinusMousedown:_e,handleKeyDown:We,handleUpdateDisplayedValue:Ge,mergedTheme:l,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:G(()=>{const{self:{iconColorDisabled:t}}=l.value,[u,r,c,x]=it(t);return{textColorTextDisabled:`rgb(${u}, ${r}, ${c})`,opacityDisabled:`${x}`}})})},render(){const{mergedClsPrefix:e,$slots:n}=this,i=()=>f(be,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ve(n["minus-icon"],()=>[f(ce,{clsPrefix:e},{default:()=>f(dt,null)})])}),s=()=>f(be,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ve(n["add-icon"],()=>[f(ce,{clsPrefix:e},{default:()=>f(Ee,null)})])});return f("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},f(Ae,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var l;return this.showButton&&this.buttonPlacement==="both"?[i(),he(n.prefix,d=>d?f("span",{class:`${e}-input-number-prefix`},d):null)]:(l=n.prefix)===null||l===void 0?void 0:l.call(n)},suffix:()=>{var l;return this.showButton?[he(n.suffix,d=>d?f("span",{class:`${e}-input-number-suffix`},d):null),this.buttonPlacement==="right"?i():null,s()]:(l=n.suffix)===null||l===void 0?void 0:l.call(n)}}))}}),ee=(e,n,i)=>e!=null&&e.length?e.length===1?B(e[0]):e.reduce((l,d,p,y)=>(l=i==null?void 0:i(l,d,p,y),l),n):0,Pe=(e,n,i="number")=>i==="number"?B(e,n).value:B(e,n).toString(),Ft=(...e)=>ee(e,0,(n,i)=>B(n).add(i)),xt=(...e)=>{if(e.length===2){const[s,l]=e;return B(s).subtract(l)}const n=Ie(e),i=n.shift();return n.length?ee(n,i,(s,l)=>B(s).subtract(l)):i},It=(...e)=>ee(e,1,(n,i)=>B(n).multiply(i)),Bt=(...e)=>{if(e.length===2){const[s,l]=e;return B(s).divide(l)}const n=Ie(e),i=n.shift();return n.length?ee(n,i,(s,l)=>B(s).divide(l)):i},Dt=(e,n,i)=>n<=1?[e||0]:e?B(e,i).distribute(n).map(l=>Pe(l,i)):new Array(n).fill(0),St=Z({name:"CalculatePrecision",setup(){const e=st({addOptions:["1","0.2","0.1","1.1"],subtractOptions:["1","0.2","0.1","1.1"],multiplyOptions:["1","0.2","0.1","1.1"],divideOptions:["1","0.2","0.1","1.1"],distributeValue:12,distributeOutputValue:[],distributeLength:3}),n={addOptions:Ft,subtractOptions:xt,multiplyOptions:It,divideOptions:Bt},i=(l,d)=>{const p=n[d],y=p(...l);return"结果: "+Pe(y)},s=()=>{me().then(()=>{e.distributeOutputValue=Dt(e.distributeValue,e.distributeLength)})};return s(),{...ot(e),copilotFunc:i,updateDistributeValue:s}},render(){return m(rt,null,{default:()=>[m("h2",{style:"margin: 0 0 20px 0"},[ye("计算方法，默认都保留两位小数与四舍五入，可以根据 format 方法自行转换")]),m("h3",{style:"margin: 0 0 20px 0"},[ye("示例方法都基于 currency.js 封装，利用其精度处理能力封装了常用的一些计算方法，解决精度问题。如果需要其他的方法请阅读官方文档 https://currency.js.org/#subtract")]),m(fe,{vertical:!0},{default:()=>[m(W,{title:"加法"},{default:()=>m(Y,{value:this.addOptions,"onUpdate:value":e=>this.addOptions=e,onUpdateValue:e=>{this.copilotFunc(e,"addOptions")}},null),footer:()=>this.copilotFunc(this.addOptions,"addOptions")}),m(W,{title:"减法"},{default:()=>m(Y,{value:this.subtractOptions,"onUpdate:value":e=>this.subtractOptions=e,onUpdateValue:e=>{this.copilotFunc(e,"subtractOptions")}},null),footer:()=>this.copilotFunc(this.subtractOptions,"subtractOptions")}),m(W,{title:"乘法"},{default:()=>m(Y,{value:this.multiplyOptions,"onUpdate:value":e=>this.multiplyOptions=e,onUpdateValue:e=>{this.copilotFunc(e,"multiplyOptions")}},null),footer:()=>this.copilotFunc(this.multiplyOptions,"multiplyOptions")}),m(W,{title:"除法（非取模）"},{default:()=>m(Y,{value:this.divideOptions,"onUpdate:value":e=>this.divideOptions=e,onUpdateValue:e=>{this.copilotFunc(e,"divideOptions")}},null),footer:()=>this.copilotFunc(this.divideOptions,"divideOptions")}),m(W,{title:"平分一个值"},{default:()=>m(fe,{wrapItem:!1},{default:()=>[m(xe,{value:this.distributeValue,"onUpdate:value":e=>this.distributeValue=e,onUpdateValue:()=>{this.updateDistributeValue()}},null),m(xe,{value:this.distributeLength,"onUpdate:value":e=>this.distributeLength=e,onUpdateValue:()=>{this.updateDistributeValue()}},null)]}),footer:()=>"结果: "+this.distributeOutputValue.join(", ")})]})]})}});export{St as default};
