import{u as d,k as y,g,o as P}from"./@vue_reactivity@3.3.4-2b3a1c4e.js";import{m,d as b,f as h,n as $}from"./@vue_runtime-core@3.3.4-073fad6e.js";var s;const F=typeof window<"u",k=t=>typeof t=="function",q=t=>typeof t=="string",z=()=>{};F&&((s=window==null?void 0:window.navigator)!=null&&s.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function B(t){return typeof t=="function"?t():d(t)}function j(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const p=t=>t();function S(t=p){const e=y(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...a)=>{e.value&&t(...a)}}}function G(t){return t}function H(t){return g()?(P(t),!0):!1}function J(t,e=!0){b()?h(t):e?t():$(t)}var f=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,x=(t,e)=>{var n={};for(var r in t)A.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&f)for(var r of f(t))e.indexOf(r)<0&&I.call(t,r)&&(n[r]=t[r]);return n};function D(t,e,n={}){const r=n,{eventFilter:o=p}=r,a=x(r,["eventFilter"]);return m(t,j(o,e),a)}var E=Object.defineProperty,C=Object.defineProperties,M=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,R=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&l(t,n,e[n]);if(i)for(var n of i(e))c.call(e,n)&&l(t,n,e[n]);return t},W=(t,e)=>C(t,M(e)),N=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&i)for(var r of i(t))e.indexOf(r)<0&&c.call(t,r)&&(n[r]=t[r]);return n};function K(t,e,n={}){const r=n,{eventFilter:o}=r,a=N(r,["eventFilter"]),{eventFilter:v,pause:_,resume:O,isActive:w}=S(o);return{stop:D(t,e,W(R({},a),{eventFilter:v})),pause:_,resume:O,isActive:w}}export{q as a,k as b,G as c,J as d,F as i,z as n,B as r,H as t,K as w};
