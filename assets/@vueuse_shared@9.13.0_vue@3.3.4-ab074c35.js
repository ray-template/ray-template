import{u as d,k as y,n as P,g as m,o as g}from"./@vue_reactivity@3.3.4-1f79d3d1.js";import{m as b,d as h,f as $,n as F}from"./@vue_runtime-core@3.3.4-e708ccad.js";var s;const j=typeof window<"u",q=t=>typeof t=="function",z=t=>typeof t=="string",B=()=>{};j&&((s=window==null?void 0:window.navigator)!=null&&s.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function G(t){return typeof t=="function"?t():d(t)}function S(t,e){function n(...r){return new Promise((o,a)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(o).catch(a)})}return n}const p=t=>t();function A(t=p){const e=y(!0);function n(){e.value=!1}function r(){e.value=!0}const o=(...a)=>{e.value&&t(...a)};return{isActive:P(e),pause:n,resume:r,eventFilter:o}}function H(t){return t}function J(t){return m()?(g(t),!0):!1}function K(t,e=!0){h()?$(t):e?t():F(t)}var f=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,D=(t,e)=>{var n={};for(var r in t)I.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&f)for(var r of f(t))e.indexOf(r)<0&&x.call(t,r)&&(n[r]=t[r]);return n};function E(t,e,n={}){const r=n,{eventFilter:o=p}=r,a=D(r,["eventFilter"]);return b(t,S(o,e),a)}var C=Object.defineProperty,M=Object.defineProperties,R=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,W=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&l(t,n,e[n]);if(i)for(var n of i(e))c.call(e,n)&&l(t,n,e[n]);return t},N=(t,e)=>M(t,R(e)),T=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&i)for(var r of i(t))e.indexOf(r)<0&&c.call(t,r)&&(n[r]=t[r]);return n};function L(t,e,n={}){const r=n,{eventFilter:o}=r,a=T(r,["eventFilter"]),{eventFilter:v,pause:_,resume:w,isActive:O}=A(o);return{stop:E(t,e,N(W({},a),{eventFilter:v})),pause:_,resume:w,isActive:O}}export{z as a,q as b,H as c,K as d,j as i,B as n,G as r,J as t,L as w};
