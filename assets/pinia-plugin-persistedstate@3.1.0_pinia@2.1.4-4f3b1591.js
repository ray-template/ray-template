function R(e){return typeof e=="object"&&e!==null}function d(e,t){return e=R(e)?e:Object.create(null),new Proxy(e,{get(l,n,r){return n==="key"?Reflect.get(l,n,r):Reflect.get(l,n,r)||Reflect.get(t,n,r)}})}function _(e,t){return t.reduce((l,n)=>l==null?void 0:l[n],e)}function $(e,t,l){return t.slice(0,-1).reduce((n,r)=>/^(__proto__)$/.test(r)?{}:n[r]=n[r]||{},e)[t[t.length-1]]=l,e}function v(e,t){return t.reduce((l,n)=>{const r=n.split(".");return $(l,r,_(e,r))},{})}function y(e,{storage:t,serializer:l,key:n,debug:r}){try{const o=t==null?void 0:t.getItem(n);o&&e.$patch(l==null?void 0:l.deserialize(o))}catch(o){r&&console.error(o)}}function g(e,{storage:t,serializer:l,key:n,paths:r,debug:o}){try{const u=Array.isArray(r)?v(e,r):e;t.setItem(n,l.serialize(u))}catch(u){o&&console.error(u)}}function b(e={}){return t=>{const{auto:l=!1}=e,{options:{persist:n=l},store:r}=t;if(!n)return;const o=(Array.isArray(n)?n.map(u=>d(u,e)):[d(n,e)]).map(({storage:u=localStorage,beforeRestore:i=null,afterRestore:s=null,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:a=r.$id,paths:h=null,debug:S=!1})=>{var f;return{storage:u,beforeRestore:i,afterRestore:s,serializer:c,key:((f=e.key)!=null?f:m=>m)(a),paths:h,debug:S}});r.$persist=()=>{o.forEach(u=>{g(r.$state,u)})},r.$hydrate=({runHooks:u=!0}={})=>{o.forEach(i=>{const{beforeRestore:s,afterRestore:c}=i;u&&(s==null||s(t)),y(r,i),u&&(c==null||c(t))})},o.forEach(u=>{const{beforeRestore:i,afterRestore:s}=u;i==null||i(t),y(r,u),s==null||s(t),r.$subscribe((c,a)=>{g(a,u)},{detached:!0})})}}var A=b();export{A as s};
