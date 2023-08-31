import{i as A}from"./vue-demi@0.14.5_vue@3.3.4-71ba0ef2.js";import{k as V,h as G,v as H,i as C,b as L,t as q,m as B,g as $,o as T,w as tt,q as et}from"./@vue_reactivity@3.3.4-1f79d3d1.js";import{i as st,m as nt,K as ot,n as ct,A as rt}from"./@vue_runtime-core@3.3.4-e708ccad.js";/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let D;const R=t=>D=t,J=Symbol();function E(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function yt(){const t=H(!0),n=t.run(()=>V({}));let s=[],e=[];const r=B({install(u){R(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!A?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const K=()=>{};function F(t,n,s,e=K){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&$()&&T(r),r}function p(t,...n){t.slice().forEach(s=>{s(...n)})}const ut=t=>t();function I(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];E(r)&&E(e)&&t.hasOwnProperty(s)&&!C(e)&&!L(e)?t[s]=I(r,e):t[s]=e}return t}const ft=Symbol();function at(t){return!E(t)||!t.hasOwnProperty(ft)}const{assign:v}=Object;function it(t){return!!(C(t)&&t.effect)}function lt(t,n,s,e){const{state:r,actions:u,getters:a}=n,f=s.state.value[t];let P;function b(){f||(s.state.value[t]=r?r():{});const y=tt(s.state.value[t]);return v(y,u,Object.keys(a||{}).reduce((m,d)=>(m[d]=B(rt(()=>{R(s);const _=s._s.get(t);return a[d].call(_,_)})),m),{}))}return P=N(t,b,n,s,e,!0),P}function N(t,n,s={},e,r,u){let a;const f=v({actions:{}},s),P={deep:!0};let b,y,m=[],d=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let O;function W(c){let o;b=y=!1,typeof c=="function"?(c(e.state.value[t]),o={type:x.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),o={type:x.patchObject,payload:c,storeId:t,events:_});const h=O=Symbol();ct().then(()=>{O===h&&(b=!0)}),y=!0,p(m,o,e.state.value[t])}const z=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{v(S,h)})}:K;function M(){a.stop(),m=[],d=[],e._s.delete(t)}function Q(c,o){return function(){R(e);const h=Array.from(arguments),S=[],w=[];function Y(i){S.push(i)}function Z(i){w.push(i)}p(d,{args:h,name:c,store:l,after:Y,onError:Z});let k;try{k=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return k instanceof Promise?k.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,k),k)}}const U={_p:e,$id:t,$onAction:F.bind(null,d),$patch:W,$reset:z,$subscribe(c,o={}){const h=F(m,c,o.detached,()=>S()),S=a.run(()=>nt(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&c({storeId:t,type:x.direct,events:_},w)},v({},P,o)));return h},$dispose:M},l=G(U);e._s.set(t,l);const X=e._a&&e._a.runWithContext||ut,g=e._e.run(()=>(a=H(),X(()=>a.run(n))));for(const c in g){const o=g[c];if(C(o)&&!it(o)||L(o))u||(j&&at(o)&&(C(o)?o.value=j[c]:I(o,j[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);g[c]=h,f.actions[c]=o}}return v(l,g),v(q(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(o=>{v(o,c)})}}),e._p.forEach(c=>{v(l,a.run(()=>c({store:l,app:e._a,pinia:e,options:f})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function St(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function a(f,P){const b=ot();return f=f||(b?st(J,null):null),f&&R(f),f=D,f._s.has(e)||(u?N(e,n,r,f):lt(e,r,f)),f._s.get(e)}return a.$id=e,a}function mt(t){{t=q(t);const n={};for(const s in t){const e=t[s];(C(e)||L(e))&&(n[s]=et(t,s))}return n}}export{yt as c,St as d,mt as s};
