function M(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),i=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(i),e&&(n.href=e),i.href=t,i.href}const O=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function f(t){const e=[];for(let r=0,n=t.length;r<n;r++)e.push(t[r]);return e}function d(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function _(t){const e=d(t,"border-left-width"),r=d(t,"border-right-width");return t.clientWidth+e+r}function W(t){const e=d(t,"border-top-width"),r=d(t,"border-bottom-width");return t.clientHeight+e+r}function E(t,e={}){const r=e.width||_(t),n=e.height||W(t);return{width:r,height:n}}function q(){let t,e;try{e=process}catch{}const r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const u=16384;function B(t){(t.width>u||t.height>u)&&(t.width>u&&t.height>u?t.width>t.height?(t.height*=u/t.width,t.width=u):(t.width*=u/t.height,t.height=u):t.width>u?(t.height*=u/t.width,t.width=u):(t.width*=u/t.height,t.height=u))}function j(t,e={}){return t.toBlob?new Promise(r=>{t.toBlob(r,e.type?e.type:"image/png",e.quality?e.quality:1)}):new Promise(r=>{const n=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=n.length,s=new Uint8Array(i);for(let c=0;c<i;c+=1)s[c]=n.charCodeAt(c);r(new Blob([s],{type:e.type?e.type:"image/png"}))})}function y(t){return new Promise((e,r)=>{const n=new Image;n.decode=()=>e(n),n.onload=()=>e(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=t})}async function z(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function G(t,e,r){const n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg"),s=document.createElementNS(n,"foreignObject");return i.setAttribute("width",`${e}`),i.setAttribute("height",`${r}`),i.setAttribute("viewBox",`0 0 ${e} ${r}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),i.appendChild(s),s.appendChild(t),z(i)}const l=(t,e)=>{if(t instanceof e)return!0;const r=Object.getPrototypeOf(t);return r===null?!1:r.constructor.name===e.name||l(r,e)};function X(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function J(t){return f(t).map(e=>{const r=t.getPropertyValue(e),n=t.getPropertyPriority(e);return`${e}: ${r}${n?" !important":""};`}).join(" ")}function K(t,e,r){const n=`.${t}:${e}`,i=r.cssText?X(r):J(r);return document.createTextNode(`${n}{${i}}`)}function P(t,e,r){const n=window.getComputedStyle(t,r),i=n.getPropertyValue("content");if(i===""||i==="none")return;const s=O();try{e.className=`${e.className} ${s}`}catch{return}const c=document.createElement("style");c.appendChild(K(s,r,n)),e.appendChild(c)}function Q(t,e){P(t,e,":before"),P(t,e,":after")}const $="application/font-woff",T="image/jpeg",Y={woff:$,woff2:$,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:T,jpeg:T,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Z(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function R(t){const e=Z(t).toLowerCase();return Y[e]||""}function N(t){return t.split(/,/)[1]}function x(t){return t.search(/^(data:)/)!==-1}function tt(t,e){return`data:${e};base64,${t}`}async function v(t,e,r){const n=await fetch(t,e);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const i=await n.blob();return new Promise((s,c)=>{const a=new FileReader;a.onerror=c,a.onloadend=()=>{try{s(r({res:n,result:a.result}))}catch(o){c(o)}},a.readAsDataURL(i)})}const S={};function et(t,e,r){let n=t.replace(/\?.*/,"");return r&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),e?`[${e}]${n}`:n}async function C(t,e,r){const n=et(t,e,r.includeQueryParams);if(S[n]!=null)return S[n];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let i;try{const s=await v(t,r.fetchRequestInit,({res:c,result:a})=>(e||(e=c.headers.get("Content-Type")||""),N(a)));i=tt(s,e)}catch(s){i=r.imagePlaceholder||"";let c=`Failed to fetch resource: ${t}`;s&&(c=typeof s=="string"?s:s.message),c&&console.warn(c)}return S[n]=i,i}async function nt(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):y(e)}async function rt(t,e){if(t.currentSrc){const s=document.createElement("canvas"),c=s.getContext("2d");s.width=t.clientWidth,s.height=t.clientHeight,c==null||c.drawImage(t,0,0,s.width,s.height);const a=s.toDataURL();return y(a)}const r=t.poster,n=R(r),i=await C(r,n,e);return y(i)}async function it(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await w(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function st(t,e){return l(t,HTMLCanvasElement)?nt(t):l(t,HTMLVideoElement)?rt(t,e):l(t,HTMLIFrameElement)?it(t):t.cloneNode(!1)}const ct=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function at(t,e,r){var n,i;let s=[];return ct(t)&&t.assignedNodes?s=f(t.assignedNodes()):l(t,HTMLIFrameElement)&&(!((n=t.contentDocument)===null||n===void 0)&&n.body)?s=f(t.contentDocument.body.childNodes):s=f(((i=t.shadowRoot)!==null&&i!==void 0?i:t).childNodes),s.length===0||l(t,HTMLVideoElement)||await s.reduce((c,a)=>c.then(()=>w(a,r)).then(o=>{o&&e.appendChild(o)}),Promise.resolve()),e}function ot(t,e){const r=e.style;if(!r)return;const n=window.getComputedStyle(t);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):f(n).forEach(i=>{let s=n.getPropertyValue(i);i==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),l(t,HTMLIFrameElement)&&i==="display"&&s==="inline"&&(s="block"),i==="d"&&e.getAttribute("d")&&(s=`path(${e.getAttribute("d")})`),r.setProperty(i,s,n.getPropertyPriority(i))})}function lt(t,e){l(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),l(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function ut(t,e){if(l(t,HTMLSelectElement)){const r=e,n=Array.from(r.children).find(i=>t.value===i.getAttribute("value"));n&&n.setAttribute("selected","")}}function ft(t,e){return l(e,Element)&&(ot(t,e),Q(t,e),lt(t,e),ut(t,e)),e}async function ht(t,e){const r=t.querySelectorAll?t.querySelectorAll("use"):[];if(r.length===0)return t;const n={};for(let s=0;s<r.length;s++){const a=r[s].getAttribute("xlink:href");if(a){const o=t.querySelector(a),g=document.querySelector(a);!o&&g&&!n[a]&&(n[a]=await w(g,e,!0))}}const i=Object.values(n);if(i.length){const s="http://www.w3.org/1999/xhtml",c=document.createElementNS(s,"svg");c.setAttribute("xmlns",s),c.style.position="absolute",c.style.width="0",c.style.height="0",c.style.overflow="hidden",c.style.display="none";const a=document.createElementNS(s,"defs");c.appendChild(a);for(let o=0;o<i.length;o++)a.appendChild(i[o]);t.appendChild(c)}return t}async function w(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(n=>st(n,e)).then(n=>at(t,n,e)).then(n=>ft(t,n)).then(n=>ht(n,e))}const F=/url\((['"]?)([^'"]+?)\1\)/g,gt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,mt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function dt(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function yt(t){const e=[];return t.replace(F,(r,n,i)=>(e.push(i),r)),e.filter(r=>!x(r))}async function wt(t,e,r,n,i){try{const s=r?M(e,r):e,c=R(e);let a;return i||(a=await C(s,c,n)),t.replace(dt(e),`$1${a}$3`)}catch{}return t}function pt(t,{preferredFontFormat:e}){return e?t.replace(mt,r=>{for(;;){const[n,,i]=gt.exec(r)||[];if(!i)return"";if(i===e)return`src: ${n};`}}):t}function U(t){return t.search(F)!==-1}async function k(t,e,r){if(!U(t))return t;const n=pt(t,r);return yt(n).reduce((s,c)=>s.then(a=>wt(a,c,e,r)),Promise.resolve(n))}async function m(t,e,r){var n;const i=(n=e.style)===null||n===void 0?void 0:n.getPropertyValue(t);if(i){const s=await k(i,null,r);return e.style.setProperty(t,s,e.style.getPropertyPriority(t)),!0}return!1}async function bt(t,e){await m("background",t,e)||await m("background-image",t,e),await m("mask",t,e)||await m("mask-image",t,e)}async function St(t,e){const r=l(t,HTMLImageElement);if(!(r&&!x(t.src))&&!(l(t,SVGImageElement)&&!x(t.href.baseVal)))return;const n=r?t.src:t.href.baseVal,i=await C(n,R(n),e);await new Promise((s,c)=>{t.onload=s,t.onerror=c;const a=t;a.decode&&(a.decode=s),a.loading==="lazy"&&(a.loading="eager"),r?(t.srcset="",t.src=i):t.href.baseVal=i})}async function xt(t,e){const n=f(t.childNodes).map(i=>V(i,e));await Promise.all(n).then(()=>t)}async function V(t,e){l(t,Element)&&(await bt(t,e),await St(t,e),await xt(t,e))}function Et(t,e){const{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);const n=e.style;return n!=null&&Object.keys(n).forEach(i=>{r[i]=n[i]}),t}const L={};async function I(t){let e=L[t];if(e!=null)return e;const n=await(await fetch(t)).text();return e={url:t,cssText:n},L[t]=e,e}async function A(t,e){let r=t.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,s=(r.match(/url\([^)]+\)/g)||[]).map(async c=>{let a=c.replace(n,"$1");return a.startsWith("https://")||(a=new URL(a,t.url).href),v(a,e.fetchRequestInit,({result:o})=>(r=r.replace(c,`url(${o})`),[c,o]))});return Promise.all(s).then(()=>r)}function D(t){if(t==null)return[];const e=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=t.replace(r,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const o=i.exec(n);if(o===null)break;e.push(o[0])}n=n.replace(i,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,c="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",a=new RegExp(c,"gi");for(;;){let o=s.exec(n);if(o===null){if(o=a.exec(n),o===null)break;s.lastIndex=a.lastIndex}else a.lastIndex=s.lastIndex;e.push(o[0])}return e}async function Rt(t,e){const r=[],n=[];return t.forEach(i=>{if("cssRules"in i)try{f(i.cssRules||[]).forEach((s,c)=>{if(s.type===CSSRule.IMPORT_RULE){let a=c+1;const o=s.href,g=I(o).then(h=>A(h,e)).then(h=>D(h).forEach(b=>{try{i.insertRule(b,b.startsWith("@import")?a+=1:i.cssRules.length)}catch(H){console.error("Error inserting rule from remote css",{rule:b,error:H})}})).catch(h=>{console.error("Error loading remote css",h.toString())});n.push(g)}})}catch(s){const c=t.find(a=>a.href==null)||document.styleSheets[0];i.href!=null&&n.push(I(i.href).then(a=>A(a,e)).then(a=>D(a).forEach(o=>{c.insertRule(o,i.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a)})),console.error("Error inlining remote css file",s)}}),Promise.all(n).then(()=>(t.forEach(i=>{if("cssRules"in i)try{f(i.cssRules||[]).forEach(s=>{r.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${i.href}`,s)}}),r))}function Ct(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>U(e.style.getPropertyValue("src")))}async function Pt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=f(t.ownerDocument.styleSheets),n=await Rt(r,e);return Ct(n)}async function $t(t,e){const r=await Pt(t,e);return(await Promise.all(r.map(i=>{const s=i.parentStyleSheet?i.parentStyleSheet.href:null;return k(i.cssText,s,e)}))).join(`
`)}async function Tt(t,e){const r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await $t(t,e);if(r){const n=document.createElement("style"),i=document.createTextNode(r);n.appendChild(i),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function Lt(t,e={}){const{width:r,height:n}=E(t,e),i=await w(t,e,!0);return await Tt(i,e),await V(i,e),Et(i,e),await G(i,r,n)}async function p(t,e={}){const{width:r,height:n}=E(t,e),i=await Lt(t,e),s=await y(i),c=document.createElement("canvas"),a=c.getContext("2d"),o=e.pixelRatio||q(),g=e.canvasWidth||r,h=e.canvasHeight||n;return c.width=g*o,c.height=h*o,e.skipAutoScale||B(c),c.style.width=`${g}`,c.style.height=`${h}`,e.backgroundColor&&(a.fillStyle=e.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(s,0,0,c.width,c.height),c}async function It(t,e={}){const{width:r,height:n}=E(t,e);return(await p(t,e)).getContext("2d").getImageData(0,0,r,n).data}async function At(t,e={}){return(await p(t,e)).toDataURL()}async function Dt(t,e={}){return(await p(t,e)).toDataURL("image/jpeg",e.quality||1)}async function vt(t,e={}){const r=await p(t,e);return await j(r)}export{At as a,Dt as b,vt as c,It as d,p as e,Lt as t};
