function d(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const E="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",F=d(E);function S(e){if(c(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=r(s)?A(s):S(s);if(o)for(const l in o)t[l]=o[l]}return t}else{if(r(e))return e;if(i(e))return e}}const T=/;(?![^(]*\))/g,w=/:([^]+)/,I=/\/\*.*?\*\//gs;function A(e){const t={};return e.replace(I,"").split(T).forEach(n=>{if(n){const s=n.split(w);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function j(e){let t="";if(r(e))t=e;else if(c(e))for(let n=0;n<e.length;n++){const s=j(e[n]);s&&(t+=s+" ")}else if(i(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function K(e){if(!e)return null;let{class:t,style:n}=e;return t&&!r(t)&&(e.class=j(t)),n&&(e.style=S(n)),e}const C="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",L=d(C);function k(e){return!!e||e===""}function P(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=y(e[s],t[s]);return n}function y(e,t){if(e===t)return!0;let n=h(e),s=h(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=O(e),s=O(t),n||s)return e===t;if(n=c(e),s=c(t),n||s)return n&&s?P(e,t):!1;if(n=i(e),s=i(t),n||s){if(!n||!s)return!1;const o=Object.keys(e).length,l=Object.keys(t).length;if(o!==l)return!1;for(const f in e){const g=e.hasOwnProperty(f),m=t.hasOwnProperty(f);if(g&&!m||!g&&m||!y(e[f],t[f]))return!1}}return String(e)===String(t)}function H(e,t){return e.findIndex(n=>y(n,t))}const $=e=>r(e)?e:e==null?"":c(e)||i(e)&&(e.toString===R||!p(e.toString))?JSON.stringify(e,N,2):String(e),N=(e,t)=>t&&t.__v_isRef?N(e,t.value):M(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:U(t)?{[`Set(${t.size})`]:[...t.values()]}:i(t)&&!c(t)&&!_(t)?String(t):t,G={},J=[],q=()=>{},W=()=>!1,z=/^on[^a-z]/,Y=e=>z.test(e),Z=e=>e.startsWith("onUpdate:"),Q=Object.assign,X=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},B=Object.prototype.hasOwnProperty,v=(e,t)=>B.call(e,t),c=Array.isArray,M=e=>a(e)==="[object Map]",U=e=>a(e)==="[object Set]",h=e=>a(e)==="[object Date]",ee=e=>a(e)==="[object RegExp]",p=e=>typeof e=="function",r=e=>typeof e=="string",O=e=>typeof e=="symbol",i=e=>e!==null&&typeof e=="object",te=e=>i(e)&&p(e.then)&&p(e.catch),R=Object.prototype.toString,a=e=>R.call(e),ne=e=>a(e).slice(8,-1),_=e=>a(e)==="[object Object]",se=e=>r(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,oe=d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),u=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},x=/-(\w)/g,re=u(e=>e.replace(x,(t,n)=>n?n.toUpperCase():"")),D=/\B([A-Z])/g,ie=u(e=>e.replace(D,"-$1").toLowerCase()),V=u(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=u(e=>e?`on${V(e)}`:""),ae=(e,t)=>!Object.is(e,t),le=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ue=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pe=e=>{const t=r(e)?Number(e):NaN;return isNaN(t)?e:t};let b;const de=()=>b||(b=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});export{ue as A,ce as B,ie as C,W as D,G as E,Z as F,ee as G,pe as H,F as I,L as J,k as K,H as L,y as M,q as N,K as O,$ as P,i as a,c as b,p as c,v as d,se as e,fe as f,M as g,ae as h,O as i,Q as j,r as k,S as l,d as m,j as n,Y as o,U as p,_ as q,X as r,te as s,ne as t,J as u,de as v,re as w,V as x,oe as y,le as z};
