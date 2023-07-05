import{r as A,w as V,i as M,a as U,n as b,t as J,b as G,c as K,d as x}from"./@vueuse_shared@9.1.0_vue@3.2.47-0bbfe17c.js";import{l as q,k as p}from"./@vue_reactivity@3.2.47-f5c8a668.js";import{l as P}from"./@vue_runtime-core@3.2.47-0e1d4738.js";function E(e){var t;const r=A(e);return(t=r==null?void 0:r.$el)!=null?t:r}const w=M?window:void 0;function g(...e){let t,r,n,s;if(U(e[0])?([r,n,s]=e,t=w):[t,r,n,s]=e,!t)return b;let o=b;const i=P(()=>E(t),f=>{o(),f&&(f.addEventListener(r,n,s),o=()=>{f.removeEventListener(r,n,s),o=b})},{immediate:!0,flush:"post"}),u=()=>{i(),o()};return J(u),u}function X(e,t=!1){const r=p(),n=()=>r.value=!!e();return n(),x(n,t),r}const S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";S[I]=S[I]||{};const Y=S[I];function Z(e,t){return Y[e]||t}function k(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var ee=Object.defineProperty,$=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&R(e,r,t[r]);if($)for(var r of $(t))re.call(t,r)&&R(e,r,t[r]);return e};const ne={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function we(e,t,r,n={}){var s;const{flush:o="pre",deep:i=!0,listenToStorageChanges:u=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:h,window:O=w,eventFilter:D,onError:_=a=>{console.error(a)}}=n,v=(h?q:p)(t);if(!r)try{r=Z("getDefaultStorage",()=>{var a;return(a=w)==null?void 0:a.localStorage})()}catch(a){_(a)}if(!r)return v;const c=A(t),N=k(c),y=(s=n.serializer)!=null?s:ne[N],{pause:F,resume:H}=V(v,()=>L(v.value),{flush:o,deep:i,eventFilter:D});return O&&u&&g(O,"storage",j),j(),v;function L(a){try{a==null?r.removeItem(e):r.setItem(e,y.write(a))}catch(l){_(l)}}function B(a){if(!(a&&a.key!==e)){F();try{const l=a?a.newValue:r.getItem(e);if(l==null)return f&&c!==null&&r.setItem(e,y.write(c)),c;if(!a&&d){const m=y.read(l);return G(d)?d(m,c):N==="object"&&!Array.isArray(m)?W(W({},c),m):m}else return typeof l!="string"?l:y.read(l)}catch(l){_(l)}finally{H()}}}function j(a){a&&a.key!==e||(v.value=B(a))}}var Q=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,oe=(e,t)=>{var r={};for(var n in e)ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function ie(e,t,r={}){const n=r,{window:s=w}=n,o=oe(n,["window"]);let i;const u=X(()=>s&&"ResizeObserver"in s),f=()=>{i&&(i.disconnect(),i=void 0)},d=P(()=>E(e),O=>{f(),u.value&&s&&O&&(i=new ResizeObserver(t),i.observe(O,o))},{immediate:!0,flush:"post"}),h=()=>{f(),d()};return J(h),{isSupported:u,stop:h}}function he(e,t={width:0,height:0},r={}){const n=p(t.width),s=p(t.height);return ie(e,([o])=>{n.value=o.contentRect.width,s.value=o.contentRect.height},r),P(()=>E(e),o=>{n.value=o?t.width:0,s.value=o?t.height:0}),{width:n,height:s}}var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));var ue=Object.defineProperty,C=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))le.call(t,r)&&z(e,r,t[r]);if(C)for(var r of C(t))fe.call(t,r)&&z(e,r,t[r]);return e};const pe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ce({linear:K},pe);function ye(e={}){const{window:t=w,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:s=!0}=e,o=p(r),i=p(n),u=()=>{t&&(o.value=t.innerWidth,i.value=t.innerHeight)};return u(),x(u),g("resize",u,{passive:!0}),s&&g("orientationchange",u,{passive:!0}),{width:o,height:i}}export{we as a,ye as b,he as u};
