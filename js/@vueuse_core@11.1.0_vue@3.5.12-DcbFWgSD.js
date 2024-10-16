import{t as I,w as q,a as F,i as Q,n as M,b as Y,c as x,d as W,e as K}from"./@vueuse_shared@11.1.0_vue@3.5.12-C48LWOin.js";import{s as $,k as b}from"./@vue_reactivity@3.5.12-IcmYCeX3.js";import{n as G,w as _,f as U,j as R,k as X,d as Z}from"./@vue_runtime-core@3.5.12-o4JnKqGq.js";const A=Q?window:void 0;function S(e){var r;const n=I(e);return(r=n==null?void 0:n.$el)!=null?r:n}function N(...e){let r,n,o,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,u]=e,r=A):[r,n,o,u]=e,!r)return M;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const i=[],d=()=>{i.forEach(a=>a()),i.length=0},l=(a,s,m,t)=>(a.addEventListener(s,m,t),()=>a.removeEventListener(s,m,t)),v=_(()=>[S(r),I(u)],([a,s])=>{if(d(),!a)return;const m=Y(s)?{...s}:s;i.push(...n.flatMap(t=>o.map(c=>l(a,t,c,m))))},{immediate:!0,flush:"post"}),p=()=>{v(),d()};return W(p),p}let V=!1;function de(e,r,n={}){const{window:o=A,ignore:u=[],capture:i=!0,detectIframe:d=!1}=n;if(!o)return M;K&&!V&&(V=!0,Array.from(o.document.body.children).forEach(t=>t.addEventListener("click",M)),o.document.documentElement.addEventListener("click",M));let l=!0;const v=t=>I(u).some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(h=>h===t.target||t.composedPath().includes(h));{const h=S(c);return h&&(t.target===h||t.composedPath().includes(h))}}),p=t=>{const c=S(e);if(!(!c||c===t.target||t.composedPath().includes(c))){if(t.detail===0&&(l=!v(t)),!l){l=!0;return}r(t)}};let a=!1;const s=[N(o,"click",t=>{a||(a=!0,setTimeout(()=>{a=!1},0),p(t))},{passive:!0,capture:i}),N(o,"pointerdown",t=>{const c=S(e);l=!v(t)&&!!(c&&!t.composedPath().includes(c))},{passive:!0}),d&&N(o,"blur",t=>{setTimeout(()=>{var c;const h=S(e);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&r(t)},0)})].filter(Boolean);return()=>s.forEach(t=>t())}function ee(){const e=b(!1),r=Z();return r&&X(()=>{e.value=!0},r),e}function C(e){const r=ee();return R(()=>(r.value,!!e()))}function te(e,r,n={}){const{window:o=A,...u}=n;let i;const d=C(()=>o&&"MutationObserver"in o),l=()=>{i&&(i.disconnect(),i=void 0)},v=R(()=>{const m=I(e),t=(Array.isArray(m)?m:[m]).map(S).filter(x);return new Set(t)}),p=_(()=>v.value,m=>{l(),d.value&&m.size&&(i=new MutationObserver(r),m.forEach(t=>i.observe(t,u)))},{immediate:!0,flush:"post"}),a=()=>i==null?void 0:i.takeRecords(),s=()=>{p(),l()};return W(s),{isSupported:d,stop:s,takeRecords:a}}function ne(e,r={}){const{window:n=A}=r,o=C(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let u;const i=b(!1),d=p=>{i.value=p.matches},l=()=>{u&&("removeEventListener"in u?u.removeEventListener("change",d):u.removeListener(d))},v=U(()=>{o.value&&(l(),u=n.matchMedia(I(e)),"addEventListener"in u?u.addEventListener("change",d):u.addListener(d),i.value=u.matches)});return W(()=>{v(),l(),u=void 0}),i}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__",re=oe();function oe(){return T in L||(L[T]=L[T]||{}),L[T]}function se(e,r){return re[e]||r}function ie(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},j="vueuse-storage";function pe(e,r,n,o={}){var u;const{flush:i="pre",deep:d=!0,listenToStorageChanges:l=!0,writeDefaults:v=!0,mergeDefaults:p=!1,shallow:a,window:s=A,eventFilter:m,onError:t=f=>{console.error(f)},initOnMounted:c}=o,h=(a?$:b)(r);if(!n)try{n=se("getDefaultStorage",()=>{var f;return(f=A)==null?void 0:f.localStorage})()}catch(f){t(f)}if(!n)return h;const w=I(r),O=ie(w),y=(u=o.serializer)!=null?u:ae[O],{pause:D,resume:P}=q(h,()=>H(h.value),{flush:i,deep:d,eventFilter:m});s&&l&&F(()=>{n instanceof Storage?N(s,"storage",z):N(s,j,B),c&&z()}),c||z();function k(f,g){if(s){const E={key:e,oldValue:f,newValue:g,storageArea:n};s.dispatchEvent(n instanceof Storage?new StorageEvent("storage",E):new CustomEvent(j,{detail:E}))}}function H(f){try{const g=n.getItem(e);if(f==null)k(g,null),n.removeItem(e);else{const E=y.write(f);g!==E&&(n.setItem(e,E),k(g,E))}}catch(g){t(g)}}function J(f){const g=f?f.newValue:n.getItem(e);if(g==null)return v&&w!=null&&n.setItem(e,y.write(w)),w;if(!f&&p){const E=y.read(g);return typeof p=="function"?p(E,w):O==="object"&&!Array.isArray(E)?{...w,...E}:E}else return typeof g!="string"?g:y.read(g)}function z(f){if(!(f&&f.storageArea!==n)){if(f&&f.key==null){h.value=w;return}if(!(f&&f.key!==e)){D();try{(f==null?void 0:f.newValue)!==y.write(h.value)&&(h.value=J(f))}catch(g){t(g)}finally{f?G(P):P()}}}}function B(f){z(f.detail)}return h}function ue(e,r,n={}){const{window:o=A,...u}=n;let i;const d=C(()=>o&&"ResizeObserver"in o),l=()=>{i&&(i.disconnect(),i=void 0)},v=R(()=>{const s=I(e);return Array.isArray(s)?s.map(m=>S(m)):[S(s)]}),p=_(v,s=>{if(l(),d.value&&o){i=new ResizeObserver(r);for(const m of s)m&&i.observe(m,u)}},{immediate:!0,flush:"post"}),a=()=>{l(),p()};return W(a),{isSupported:d,stop:a}}function me(e,r={}){const{reset:n=!0,windowResize:o=!0,windowScroll:u=!0,immediate:i=!0,updateTiming:d="sync"}=r,l=b(0),v=b(0),p=b(0),a=b(0),s=b(0),m=b(0),t=b(0),c=b(0);function h(){const O=S(e);if(!O){n&&(l.value=0,v.value=0,p.value=0,a.value=0,s.value=0,m.value=0,t.value=0,c.value=0);return}const y=O.getBoundingClientRect();l.value=y.height,v.value=y.bottom,p.value=y.left,a.value=y.right,s.value=y.top,m.value=y.width,t.value=y.x,c.value=y.y}function w(){d==="sync"?h():d==="next-frame"&&requestAnimationFrame(()=>h())}return ue(e,w),_(()=>S(e),O=>!O&&w()),te(e,w,{attributeFilter:["style","class"]}),u&&N("scroll",w,{capture:!0,passive:!0}),o&&N("resize",w,{passive:!0}),F(()=>{i&&w()}),{height:l,bottom:v,left:p,right:a,top:s,width:m,x:t,y:c,update:w}}function ve(e,r,n={}){const{root:o,rootMargin:u="0px",threshold:i=0,window:d=A,immediate:l=!0}=n,v=C(()=>d&&"IntersectionObserver"in d),p=R(()=>{const c=I(e);return(Array.isArray(c)?c:[c]).map(S).filter(x)});let a=M;const s=b(l),m=v.value?_(()=>[p.value,S(o),s.value],([c,h])=>{if(a(),!s.value||!c.length)return;const w=new IntersectionObserver(r,{root:S(h),rootMargin:u,threshold:i});c.forEach(O=>O&&w.observe(O)),a=()=>{w.disconnect(),a=M}},{immediate:l,flush:"post"}):M,t=()=>{a(),m(),s.value=!1};return W(t),{isSupported:v,isActive:s,pause(){a(),s.value=!1},resume(){s.value=!0},stop:t}}function he(e={}){const{window:r=A,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:u=!0,includeScrollbar:i=!0,type:d="inner"}=e,l=b(n),v=b(o),p=()=>{r&&(d==="outer"?(l.value=r.outerWidth,v.value=r.outerHeight):i?(l.value=r.innerWidth,v.value=r.innerHeight):(l.value=r.document.documentElement.clientWidth,v.value=r.document.documentElement.clientHeight))};if(p(),F(p),N("resize",p,{passive:!0}),u){const a=ne("(orientation: portrait)");_(a,()=>p())}return{width:l,height:v}}export{ve as a,ue as b,me as c,he as d,pe as e,de as o,N as u};
