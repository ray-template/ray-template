import{r as j,w as M,i as U,a as G,n as K,t as H,b as k,c as q,d as z}from"./@vueuse_shared@9.13.0_vue@3.3.4-c98d11e6.js";import{l as X,k as O}from"./@vue_reactivity@3.3.4-71bff6b7.js";import{n as Y,m as A}from"./@vue_runtime-core@3.3.4-a86a886b.js";function E(e){var r;const t=j(e);return(r=t==null?void 0:t.$el)!=null?r:t}const b=U?window:void 0;function _(...e){let r,t,n,l;if(G(e[0])||Array.isArray(e[0])?([t,n,l]=e,r=b):[r,t,n,l]=e,!r)return K;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const w=[],i=()=>{w.forEach(o=>o()),w.length=0},c=(o,s,g,v)=>(o.addEventListener(s,g,v),()=>o.removeEventListener(s,g,v)),u=A(()=>[E(r),j(l)],([o,s])=>{i(),o&&w.push(...t.flatMap(g=>n.map(v=>c(o,g,v,s))))},{immediate:!0,flush:"post"}),d=()=>{u(),i()};return H(d),d}function Z(e,r=!1){const t=O(),n=()=>t.value=!!e();return n(),z(n,r),t}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";P[N]=P[N]||{};const ee=P[N];function te(e,r){return ee[e]||r}function re(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ne=Object.defineProperty,W=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,R=(e,r)=>{for(var t in r||(r={}))ae.call(r,t)&&$(e,t,r[t]);if(W)for(var t of W(r))ie.call(r,t)&&$(e,t,r[t]);return e};const se={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},T="vueuse-storage";function ge(e,r,t,n={}){var l;const{flush:w="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:d=!1,shallow:o,window:s=b,eventFilter:g,onError:v=a=>{console.error(a)}}=n,f=(o?X:O)(r);if(!t)try{t=te("getDefaultStorage",()=>{var a;return(a=b)==null?void 0:a.localStorage})()}catch(a){v(a)}if(!t)return f;const m=j(r),y=re(m),S=(l=n.serializer)!=null?l:se[y],{pause:J,resume:C}=M(f,()=>V(f.value),{flush:w,deep:i,eventFilter:g});return s&&c&&(_(s,"storage",I),_(s,T,L)),I(),f;function V(a){try{if(a==null)t.removeItem(e);else{const p=S.write(a),h=t.getItem(e);h!==p&&(t.setItem(e,p),s&&s.dispatchEvent(new CustomEvent(T,{detail:{key:e,oldValue:h,newValue:p,storageArea:t}})))}}catch(p){v(p)}}function D(a){const p=a?a.newValue:t.getItem(e);if(p==null)return u&&m!==null&&t.setItem(e,S.write(m)),m;if(!a&&d){const h=S.read(p);return k(d)?d(h,m):y==="object"&&!Array.isArray(h)?R(R({},m),h):h}else return typeof p!="string"?p:S.read(p)}function L(a){I(a.detail)}function I(a){if(!(a&&a.storageArea!==t)){if(a&&a.key==null){f.value=m;return}if(!(a&&a.key!==e)){J();try{f.value=D(a)}catch(p){v(p)}finally{a?Y(C):C()}}}}}var Q=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,le=(e,r)=>{var t={};for(var n in e)oe.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))r.indexOf(n)<0&&ue.call(e,n)&&(t[n]=e[n]);return t};function ce(e,r,t={}){const n=t,{window:l=b}=n,w=le(n,["window"]);let i;const c=Z(()=>l&&"ResizeObserver"in l),u=()=>{i&&(i.disconnect(),i=void 0)},d=A(()=>E(e),s=>{u(),c.value&&l&&s&&(i=new ResizeObserver(r),i.observe(s,w))},{immediate:!0,flush:"post"}),o=()=>{u(),d()};return H(o),{isSupported:c,stop:o}}function he(e,r={}){const{reset:t=!0,windowResize:n=!0,windowScroll:l=!0,immediate:w=!0}=r,i=O(0),c=O(0),u=O(0),d=O(0),o=O(0),s=O(0),g=O(0),v=O(0);function f(){const m=E(e);if(!m){t&&(i.value=0,c.value=0,u.value=0,d.value=0,o.value=0,s.value=0,g.value=0,v.value=0);return}const y=m.getBoundingClientRect();i.value=y.height,c.value=y.bottom,u.value=y.left,d.value=y.right,o.value=y.top,s.value=y.width,g.value=y.x,v.value=y.y}return ce(e,f),A(()=>E(e),m=>!m&&f()),l&&_("scroll",f,{capture:!0,passive:!0}),n&&_("resize",f,{passive:!0}),z(()=>{w&&f()}),{height:i,bottom:c,left:u,right:d,top:o,width:s,x:g,y:v,update:f}}var x;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(x||(x={}));var fe=Object.defineProperty,B=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,F=(e,r,t)=>r in e?fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ve=(e,r)=>{for(var t in r||(r={}))pe.call(r,t)&&F(e,t,r[t]);if(B)for(var t of B(r))de.call(r,t)&&F(e,t,r[t]);return e};const me={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ve({linear:q},me);function _e(e={}){const{window:r=b,initialWidth:t=1/0,initialHeight:n=1/0,listenOrientation:l=!0,includeScrollbar:w=!0}=e,i=O(t),c=O(n),u=()=>{r&&(w?(i.value=r.innerWidth,c.value=r.innerHeight):(i.value=r.document.documentElement.clientWidth,c.value=r.document.documentElement.clientHeight))};return u(),z(u),_("resize",u,{passive:!0}),l&&_("orientationchange",u,{passive:!0}),{width:i,height:c}}export{ge as a,_e as b,ce as c,he as u};
