/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const d=typeof window<"u",O=(t,e=!1)=>e?Symbol.for(t):Symbol(t),h=(t,e,n)=>y({l:t,k:e,s:n}),y=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),j=t=>typeof t=="number"&&isFinite(t),w=t=>p(t)==="[object Date]",S=t=>p(t)==="[object RegExp]",m=t=>g(t)&&Object.keys(t).length===0,T=Object.assign;let a;const E=()=>a||(a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const b=Object.prototype.hasOwnProperty;function P(t,e){return b.call(t,e)}const f=Array.isArray,l=t=>typeof t=="function",A=t=>typeof t=="string",x=t=>typeof t=="boolean",i=t=>t!==null&&typeof t=="object",D=t=>i(t)&&l(t.then)&&l(t.catch),u=Object.prototype.toString,p=t=>u.call(t),g=t=>{if(!i(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},F=t=>t==null?"":f(t)||g(t)&&t.toString===u?JSON.stringify(t,null,2):String(t);function J(t,e=""){return t.reduce((n,o,r)=>r===0?n+o:n+e+o,"")}function k(t){let e=t;return()=>++e}function q(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const c=t=>!i(t)||f(t);function B(t,e){if(c(t)||c(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:o,des:r}=n.pop();Object.keys(o).forEach(s=>{c(o[s])||c(r[s])?r[s]=o[s]:n.push({src:o[s],des:r[s]})})}}export{l as a,A as b,f as c,g as d,T as e,x as f,E as g,S as h,k as i,i as j,N as k,j as l,m,h as n,w as o,D as p,J as q,O as r,d as s,F as t,B as u,P as v,q as w};
