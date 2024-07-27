import{u as x,a as A,b as I,L as $,S as C,A as h,c as v}from"./hooks-GA5d4ycR.js";import{c as l}from"./currency.js@2.0.4-9OAR_aOO.js";import"./dayjs@1.11.10-C8LoRVP6.js";import"./vue-hooks-plus@2.2.1_vue@3.4.34-DdMBTcyt.js";import"./lodash@4.17.21-Cw59kuJw.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DmMZCkhi.js";import{o as R,c as b}from"./lodash-es@4.17.21-BALnwRTu.js";import"./print-js@1.6.0-BdoEj60G.js";const X=(e,r)=>{var o;const{domToImageOptions:t,printOptions:s}=r??{},{create:n}=x(e,{...t,beforeCreate:i=>{var a,c;(a=t==null?void 0:t.beforeCreate)==null||a.call(t,i),(c=window.$loadingBar)==null||c.start()},created(i,a){var c,f;(c=t==null?void 0:t.created)==null||c.call(t,i,a),(f=window.$loadingBar)==null||f.finish()},createdError(i){var a,c;(a=t==null?void 0:t.createdError)==null||a.call(t,i),(c=window.$loadingBar)==null||c.error()}});(o=n("jpeg"))==null||o.then(i=>{const{print:a}=A(i,{type:"image",base64:!0,targetStyles:["*"],...R(s,["type","base64"])});a()})},P=".n-menu-item-content--selected",V="n-menu-item",Y=()=>{const e=d($),r=e==null?void 0:e.querySelector(P),t=d(C);let s=0;const n=e==null?void 0:e.querySelector(V);if(t){const{height:o}=t.getBoundingClientRect();s=o}if(r&&e){const o=I(),{top:i}=e.getBoundingClientRect(),{top:a}=r.getBoundingClientRect(),c=e.scrollTop,f=n?parseInt(window.getComputedStyle(n).marginTop):6;o({top:a-i+c-s-f,left:0,behavior:"smooth"})}};var m=(e=>(e.Windows="Windows",e.MacOS="MacOS",e.Linux="Linux",e.Android="Android",e.IOS="IOS",e.Unknown="Unknown",e))(m||{}),L={BASE_URL:"/ray-template/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_OFFICE_PROXY_URL:"https://office.yka.one/",VITE_APP_OFFICE_SCRIPT_URL:"https://office.yka.one/web-apps/apps/api/documents/api.js",VITE_APP_URL:"/"};const G=()=>L,H=(e,r)=>{const t=document.createElement("a");t.href=e,t.download=r,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},g=(e,r)=>Object.prototype.toString.call(e).includes(r),J=(e=16,r=62)=>{const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[],n=window.crypto||window.msCrypto;let o=0;for(o=0;o<e;o++){const i=new Uint32Array(1);n.getRandomValues(i);const a=i[0]%r;s.push(t[a])}return s.join("")},N=()=>{const e=navigator.userAgent;return/windows/i.test(e)?m.Windows:/macintosh|mac os x/i.test(e)?m.MacOS:/linux/i.test(e)?m.Linux:/android/i.test(e)?m.Android:/iphone|ipad|ipod/i.test(e)?m.IOS:m.Unknown},Q=(e,r)=>{const t=e.split("?").filter(Boolean)[0],s=r.split("?").filter(Boolean)[0],n=/\/$/;return t.replace(n,"")===s.replace(n,"")};function Z(e,r="sessionStorage",t){const{prefix:s,prefixKey:n}=t??{},o=s?n||h:"",i=r==="localStorage"?window.localStorage:window.sessionStorage;return!!Object.keys(i).find(a=>a===o+e)}function z(e,r,t="sessionStorage",s){if(!e){console.error(`[setStorage]: Failed to set stored data: key ${e} is empty`);return}const{prefix:n,prefixKey:o}=s??{},i=n?o||h:"";try{const a=JSON.stringify(r);t==="localStorage"?window.localStorage.setItem(i+e,a):window.sessionStorage.setItem(i+e,a)}catch(a){console.error(`[setStorage]: Failed to set stored data for key '${e}'`,a)}}function ee(e,r="sessionStorage",t){const{prefix:s,prefixKey:n,defaultValue:o}=t??{},i=s?n||h:"";try{const a=r==="localStorage"?window.localStorage.getItem(i+e):window.sessionStorage.getItem(i+e);return a===null?o??null:JSON.parse(a)}catch(a){return console.error(`[getStorage]: Failed to get stored data for key '${e}'`,a),o??null}}const te=(e,r,t)=>{if(!e){console.error(`[removeStorage]: Failed to remove stored data: key ${e} is empty or undefined`);return}const{prefix:s,prefixKey:n}=t??{},o=s?n||h:"",i=Object.keys(window.localStorage),a=Object.keys(window.sessionStorage),c=(f,w)=>{(f?[...a,...i]:w==="localStorage"?i:a).forEach(p=>{e==="__all__"?(window.sessionStorage.removeItem(o+p),window.localStorage.removeItem(o+p)):w==="localStorage"?window.localStorage.removeItem(o+p):window.sessionStorage.removeItem(o+p)})};switch(e){case"__all__":c(!0);break;case"__all_sessionStorage__":c(!1,"sessionStorage");break;case"__all_localStorage__":c(!1,"localStorage");break;default:r==="localStorage"?window.localStorage.removeItem(o+e):window.sessionStorage.removeItem(o+e);break}},re=(e,r)=>{const t=()=>{const n=d(e);n&&(typeof r=="string"?r.trim().split(" "):r).forEach(i=>{i&&n.classList.add(i)})},s=Vue.watch(()=>d(e),t,{immediate:!0});S(s)},ne=(e,r)=>{const t=()=>{const n=d(e);if(n)if(r==="removeAllClass"){const o=n.classList;o.forEach(i=>o.remove(i))}else(typeof r=="string"?r.trim().split(" "):r).forEach(i=>{i&&n.classList.remove(i)})},s=Vue.watch(()=>d(e),t,{immediate:!0});S(s)},se=(e,r)=>{const t=Vue.ref(!1),s=()=>{const o=d(e);if(!o)t.value=!1;else{const i=o.className,a=r.trim().split(" ").filter(c=>c!=="");t.value=a.some(c=>i.includes(c))}},n=Vue.watch(()=>d(e),s,{immediate:!0});return S(n),t},k=e=>{const r=["webkit","moz","ms","o"],t={};return r.forEach(s=>{t[`${s}${e.charAt(0).toUpperCase()}${e.slice(1)}`]=e}),t[e]=e,t},oe=(e,r)=>{const t=(o,i)=>{o.split(";").forEach(a=>{const[c,f]=a.split(":");if(c&&f){const w=c.trim(),_=f.trim();if(c.startsWith("--"))i.style.setProperty(w,_);else if(c.startsWith("-"))i.style[c]=f;else{const p=k(w);Object.keys(p).forEach(E=>{i.style[E]=p[E]}),i.style[w]=_}}})},s=()=>{const o=d(e);o&&(g(r,"String")?t(r,o):g(r,"Array")?r.forEach(i=>{t(i,o)}):Object.keys(r).forEach(a=>{t(`${a}: ${r[a]}`,o)}))},n=Vue.watch(()=>d(e),s,{immediate:!0});S(n)},ie=(e,r=1)=>{if(e.includes("rgba"))return e;if(e.includes("rgb"))return e.replace("rgb","rgba").replace(")",`, ${r})`);if(e.includes("#")){const t=e.replace("#","");switch(t.length){case 3:return`rgba(${parseInt(t[0]+t[0],16)}, ${parseInt(t[1]+t[1],16)}, ${parseInt(t[2]+t[2],16)}, ${r})`;case 6:return`rgba(${parseInt(t.slice(0,2),16)}, ${parseInt(t.slice(2,4),16)}, ${parseInt(t.slice(4,6),16)}, ${r})`;case 8:return`rgba(${parseInt(t.slice(0,2),16)}, ${parseInt(t.slice(2,4),16)}, ${parseInt(t.slice(4,6),16)}, ${(parseInt(t.slice(6,8),16)/255).toFixed(2)})`;default:return e}}return e},ae=(e,r)=>{const{defaultElement:t}={};if(!e)return t?[t]:null;const s=e.startsWith("attr:")?`[${e.replace("attr:","")}]`:e;try{const n=Array.from(document.querySelectorAll(s));return!n.length&&t?[t]:n}catch(n){return console.error(`[queryElements]: Failed to get elements for selector '${e}'`,n),t?[t]:null}},ce=(e,r="px")=>e==="auto"?e:typeof e=="number"?e.toString()+r:g(e,"String")&&v.cssUnit.test(e)?e:e+r,u={precision:8,decimal:"."},y=(e,r,t)=>e!=null&&e.length?e.length===1?l(e[0],u):e.reduce((n,o,i,a)=>(n=t==null?void 0:t(n,o,i,a),n),r):0,j=(e,r)=>{const t=Object.assign({},u,r),s=l(e,t),{type:n="number"}=t;return n==="number"?s.value:s.toString()},le=(...e)=>e.length===1?l(e[0],u).add(0):y(e,0,(r,t)=>l(r,u).add(t)),ue=(...e)=>{if(e.length===1)return l(e[0],u).subtract(0);if(e.length===2){const[s,n]=e;return l(s,u).subtract(n)}const r=b(e),t=r.shift();return r.length?y(r,t,(s,n)=>l(s,u).subtract(n)):t},fe=(...e)=>e.length===1?l(e[0],u).multiply(1):y(e,1,(r,t)=>l(r,u).multiply(t)),de=(...e)=>{if(e.length===1)return l(e[0],u).divide(1);if(e.length===2){const[s,n]=e;return l(s,u).divide(n)}const r=b(e),t=r.shift();return y(r,t,(s,n)=>l(s,u).divide(n))},pe=(e,r,t)=>{if(r<=1)return[e||0];if(!e)return new Array(r).fill(0);const s=Object.assign({},u,t);return l(e,s).distribute(r).map(o=>j(o,s))};function B(e,...r){if(Array.isArray(e))e.forEach(t=>B(t,...r));else return e(...r)}function d(e,r){var s;if(!e)return r;let t;return typeof e=="function"?t=e():Vue.isRef(e)?t=((s=e.value)==null?void 0:s.$el)??e.value:t=e,t}function me(e,r){if(!e){const{defaultElement:t=null}=r??{};return typeof t=="function"?t:()=>t}if(typeof e=="string"||g(e,"Object"))return()=>e;if(typeof e=="function")return e}function S(e){return Vue.getCurrentScope()?(Vue.onScopeDispose(e),!0):!1}function we(e,r){const t=Vue.watchEffect(e,r);S(t)}export{le as A,ue as B,fe as C,de as D,G as a,ce as b,ie as c,B as d,H as e,oe as f,ee as g,re as h,g as i,S as j,Q as k,te as l,Y as m,ne as n,N as o,X as p,ae as q,me as r,z as s,se as t,J as u,d as v,we as w,Z as x,j as y,pe as z};
