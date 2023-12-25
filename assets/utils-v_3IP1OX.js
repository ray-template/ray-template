import{c}from"./currency.js@2.0.4--or6eeOG.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import{u as g,a as b}from"./hooks-DOIhFVQT.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./vue-hooks-plus@1.8.5_vue@3.3.13-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./print-js@1.6.0-gYKv6oGQ.js";import{c as h}from"./lodash-es@4.17.21-xgd1l9mE.js";var S={VITE_APP_URL:"/",VITE_APP_OFFICE_PROXY_URL:"https://office.yka.one/",VITE_APP_OFFICE_SCRIPT_URL:"https://office.yka.one/web-apps/apps/api/documents/api.js",BASE_URL:"/ray-template/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const k=()=>S,E=(e,r)=>{const t=document.createElement("a");t.href=e,t.download=r,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},p=(e,r)=>Object.prototype.toString.call(e).includes(r),O=(e=16,r=62)=>{const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[],o=window.crypto||window.msCrypto;let i=0;for(i=0;i<e;i++){const s=new Uint32Array(1);o.getRandomValues(s);const a=s[0]%r;n.push(t[a])}return n.join("")},T=(e,r)=>new Promise((t,n)=>{let o;try{if(typeof e=="string")return E(e,r),t();if(e instanceof ArrayBuffer)o=new Blob([new Uint8Array(e)],{type:"application/octet-stream"});else if(e instanceof File||e instanceof Blob)o=e;else return n(new Error("downloadAnyFile: Unsupported data type."));const i=URL.createObjectURL(o),s=document.createElement("a");s.href=i,s.download=r,s.style.display="none";const a=()=>{URL.revokeObjectURL(i),document.body.removeChild(s)};s.addEventListener("load",()=>(a(),t())),s.addEventListener("error",d=>(a(),n(d))),document.body.appendChild(s),s.click()}catch(i){return n(i)}}),v=(e,r)=>{if(!e)return{};const t=Array.isArray(r)?r:[r];return t.length&&t.forEach(n=>{delete e[n]}),e};function B(e,r,t="sessionStorage"){if(!e){console.error("Failed to set stored data: key is empty or undefined");return}try{const n=JSON.stringify(r);t==="localStorage"?window.localStorage.setItem(e,n):window.sessionStorage.setItem(e,n)}catch(n){console.error(`Failed to set stored data for key '${e}'`,n)}}function q(e,r="sessionStorage",t){try{const n=r==="localStorage"?window.localStorage.getItem(e):window.sessionStorage.getItem(e);return n===null?t??null:JSON.parse(n)}catch(n){return console.error(`Failed to get stored data for key '${e}'`,n),t??null}}function N(e,r="sessionStorage"){switch(e){case"all":window.window.localStorage.clear(),window.sessionStorage.clear();break;case"all-sessionStorage":window.sessionStorage.clear();break;case"all-localStorage":window.localStorage.clear();break;default:if(!e){console.error("Failed to remove stored data: key is empty or undefined");return}r==="localStorage"?window.localStorage.removeItem(e):window.sessionStorage.removeItem(e)}}const W=(e,r)=>{var i;const{domToImageOptions:t,printOptions:n}=r??{},{create:o}=b(e,t);window==null||window.$loadingBar.start(),(i=o("jpeg"))==null||i.then(s=>{const{print:a}=g(s,{type:"image",base64:!0,targetStyles:["*"],...v(n,["type","base64"])});a()}).catch(()=>{window==null||window.$loadingBar.error()}).finally(()=>{window==null||window.$loadingBar.finish()})},A={validCSSUnit:/^\d+(\.\d+)?(px|em|rem|%|vw|vh|vmin|vmax|cm|mm|in|pt|pc|ch|ex|q|s|ms|deg|rad|turn|grad|hz|khz|dpi|dpcm|dppx|fr|auto)$/},J=(e,r)=>{const t=()=>{const o=u(e);o&&r.trim().split(" ").forEach(s=>{s&&o.classList.add(s)})},n=Vue.watch(()=>u(e),t,{immediate:!0});f(n)},X=(e,r)=>{const t=()=>{const o=u(e);if(o)if(r==="removeAllClass"){const i=o.classList;i.forEach(s=>i.remove(s))}else r.trim().split(" ").forEach(s=>{s&&o.classList.remove(s)})},n=Vue.watch(()=>u(e),t,{immediate:!0});f(n)},G=(e,r)=>{const t=Vue.ref(!1),n=()=>{const i=u(e);if(!i)t.value=!1;else{const s=i.className,a=r.trim().split(" ").filter(d=>d!=="");t.value=s.includes(a.join(" "))}},o=Vue.watch(()=>u(e),n,{immediate:!0});return f(o),t},M=(e,r)=>{let t;const n=()=>{const i=u(e);i&&(p(r,"String")?t=r.split(";").reduce((s,a)=>{const[d,w]=a.split(":").map(y=>y.trim());return d&&w&&(s[d]=w),s},{}):t=r,Object.keys(t).forEach(s=>{const a=t[s];s in i.style&&(i.style[s]=a)}))},o=Vue.watch(()=>u(e),n,{immediate:!0});f(o)},Y=(e,r=1)=>{const t=/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i,n=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i,o=/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/i;let i;if(t.test(e)){const s=e.substring(1);i="rgb("+[parseInt(s.substring(0,2),16),parseInt(s.substring(2,4),16),parseInt(s.substring(4,6),16)].join(", ")+")"}else return n.test(e)||o.test(e),e;return i&&!i.startsWith("rgba")&&(i=i.replace("rgb","rgba").replace(")",`, ${r})`)),i},H=e=>{if(!e)return null;const r=e.startsWith("attr:")?`[${e.replace("attr:","")}]`:e;try{return Array.from(document.querySelectorAll(r))}catch(t){return console.error(`Failed to get elements for selector '${e}'`,t),null}},Q=(e,r="px")=>typeof e=="number"?e.toString()+r:p(e,"String")&&A.validCSSUnit.test(e)?e:e+r,l={precision:8,decimal:"."},m=(e,r,t)=>e!=null&&e.length?e.length===1?c(e[0],l):e.reduce((o,i,s,a)=>(o=t==null?void 0:t(o,i,s,a),o),r):0,C=(e,r,t="number")=>{const n=Object.assign({},l,r),o=c(e,n);return t==="number"?o.value:o.toString()},Z=(...e)=>e.length===1?c(e[0],l).add(0):m(e,0,(r,t)=>c(r,l).add(t)),z=(...e)=>{if(e.length===1)return c(e[0],l).subtract(0);if(e.length===2){const[n,o]=e;return c(n,l).subtract(o)}const r=h(e),t=r.shift();return r.length?m(r,t,(n,o)=>c(n,l).subtract(o)):t},K=(...e)=>e.length===1?c(e[0],l).multiply(1):m(e,1,(r,t)=>c(r,l).multiply(t)),ee=(...e)=>{if(e.length===1)return c(e[0],l).divide(1);if(e.length===2){const[n,o]=e;return c(n,l).divide(o)}const r=h(e),t=r.shift();return m(r,t,(n,o)=>c(n,l).divide(o))},te=(e,r)=>r<=1?[e||0]:e?c(e,l).distribute(r).map(n=>C(n)):new Array(r).fill(0);function I(e,...r){if(Array.isArray(e))e.forEach(t=>I(t,...r));else return e(...r)}function u(e,r){var n;if(!e)return r;let t;return typeof e=="function"?t=e():Vue.isRef(e)?t=((n=e.value)==null?void 0:n.$el)??e.value:t=e,t}function re(e,r){if(!e){const{defaultElement:t=null}=r??{};return typeof t=="function"?t:()=>t}if(typeof e=="string"||p(e,"Object"))return()=>e;if(typeof e=="function")return e}function f(e){return Vue.getCurrentScope()?(Vue.onScopeDispose(e),!0):!1}function ne(e,r){const t=Vue.watchEffect(e,r);f(t)}export{ee as A,Q as a,I as b,Y as c,E as d,O as e,T as f,q as g,N as h,p as i,k as j,X as k,J as l,G as m,f as n,M as o,W as p,H as q,re as r,B as s,C as t,u,te as v,ne as w,Z as x,z as y,K as z};
