import{u as F,k as h,l as g,n as S,o as T,a as j,q as A,v as P}from"./@vue_reactivity@3.5.13-BUI-9P27.js";import{k,n as D,w as x,d as C}from"./@vue_runtime-core@3.5.13-Mn4UDPFA.js";function $(t){return A()?(P(t),!0):!1}function R(t){return typeof t=="function"?t():F(t)}const I=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const z=t=>t!=null,M=Object.prototype.toString,B=t=>M.call(t)==="[object Object]",d=()=>{},H=W();function W(){var t,e;return I&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function G(t,e){function n(...o){return new Promise((i,r)=>{Promise.resolve(t(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})).then(i).catch(r)})}return n}const m=t=>t();function L(...t){let e=0,n,o=!0,i=d,r,s,u,a,l;!j(t[0])&&typeof t[0]=="object"?{delay:s,trailing:u=!0,leading:a=!0,rejectOnCancel:l=!1}=t[0]:[s,u=!0,a=!0,l=!1]=t;const p=()=>{n&&(clearTimeout(n),n=void 0,i(),i=d)};return b=>{const c=R(s),w=Date.now()-e,f=()=>r=b();return p(),c<=0?(e=Date.now(),f()):(w>c&&(a||!o)?(e=Date.now(),f()):u&&(r=new Promise((v,O)=>{i=l?O:v,n=setTimeout(()=>{e=Date.now(),o=!0,v(f()),p()},Math.max(0,c-w))})),!a&&!n&&(n=setTimeout(()=>o=!0,c)),o=!1,r)}}function V(t=m){const e=h(!0);function n(){e.value=!1}function o(){e.value=!0}const i=(...r)=>{e.value&&t(...r)};return{isActive:g(e),pause:n,resume:o,eventFilter:i}}function _(t){return C()}function J(...t){if(t.length!==1)return S(...t);const e=t[0];return typeof e=="function"?g(T(()=>({get:e,set:d}))):h(e)}function y(t,e,n={}){const{eventFilter:o=m,...i}=n;return x(t,G(o,e),i)}function K(t,e,n={}){const{eventFilter:o,...i}=n,{eventFilter:r,pause:s,resume:u,isActive:a}=V(o);return{stop:y(t,e,{...i,eventFilter:r}),pause:s,resume:u,isActive:a}}function Q(t,e=!0,n){_()?k(t,n):e?t():D(t)}function U(t,e,n={}){const{throttle:o=0,trailing:i=!0,leading:r=!0,...s}=n;return y(t,e,{...s,eventFilter:L(o,i,r)})}export{Q as a,J as b,B as c,z as d,$ as e,H as f,U as g,I as i,d as n,R as t,K as w};
