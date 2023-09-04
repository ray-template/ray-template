import{u as v,k as g,o as B,h as j,i as Q,w as G}from"./@vue_reactivity@3.3.4-1f79d3d1.js";import{D as P,m as N,A,i as Y}from"./@vue_runtime-core@3.3.4-e708ccad.js";import{d as z,t as J}from"./lodash@4.17.21-43af7cf3.js";const V=(n,{manual:e,ready:t=!0,refreshDeps:s=[],refreshDepsAction:r})=>{const o=g(!1);return P(()=>{!e&&n.options.refreshDeps!==!0&&(o.value=v(t))}),s instanceof Array?N([o,...s],([i])=>{i&&!e&&i&&(r?r():n.refresh())},{deep:!0,immediate:!1}):N(o,i=>{!e&&i&&(r?r():n.refresh())}),{name:"autoRunPlugin",onBefore:()=>{if(!v(t))return{stopNow:!0}}}};V.onInit=({ready:n=!0,manual:e})=>({loading:!e&&v(n)});const S=new Map,W=(n,e,t)=>{const s=S.get(n);s!=null&&s.timer&&clearTimeout(s.timer);let r;e>-1&&(r=setTimeout(()=>{S.delete(n)},e)),S.set(n,{...t,timer:r})},X=n=>S.get(n),D=new Map,Z=n=>D.get(n),K=(n,e)=>{D.set(n,e),e.then(t=>(D.delete(n),t)).catch(t=>{throw D.delete(n),t})},_={},k=[],ee=(n,e)=>{_[n]&&(_[n].forEach(t=>t(e)),k.forEach(t=>t({type:n,data:e})))},T=(n,e)=>(_[n]||(_[n]=[]),_[n].push(e),function(){const s=_[n].indexOf(e);_[n].splice(s,1)}),te=(n,{cacheKey:e,cacheTime:t=5*60*1e3,staleTime:s=0,setCache:r,getCache:o})=>{const i=g(),l=g(),c=(a,u)=>{r?r(u):W(a,t,u),ee(a,u.data)},h=(a,u=[])=>o?o(u):X(a);return P(()=>{if(!e)return;const a=h(e);a&&Object.hasOwnProperty.call(a,"data")&&(n.state.data=a.data,n.state.params=a.params,(s===-1||new Date().getTime()-a.time<=s)&&(n.state.loading=!1)),i.value=T(e,u=>{n.setState({data:u})})}),B(()=>{var a;(a=i.value)==null||a.call(i)}),e?{name:"cachePlugin",onBefore:a=>{const u=h(e,a);return!u||!Object.hasOwnProperty.call(u,"data")?{}:s===-1||new Date().getTime()-u.time<=s?{loading:!1,data:u==null?void 0:u.data,returnNow:!0}:{data:u==null?void 0:u.data}},onRequest:(a,u)=>{let m=Z(e);return m&&m!==l.value?{servicePromise:m}:(m=a(...u),l.value=m,K(e,m),{servicePromise:m})},onSuccess:(a,u)=>{var m;e&&((m=i.value)==null||m.call(i),c(e,{data:a,params:u,time:new Date().getTime()}),i.value=T(e,d=>{n.setState({data:d})}))},onMutate:a=>{var u;e&&((u=i.value)==null||u.call(i),c(e,{data:a,params:n.state.params,time:new Date().getTime()}),i.value=T(e,m=>{n.setState({data:m})}))}}:{}},ne=(n,{debounceWait:e,debounceLeading:t,debounceTrailing:s,debounceMaxWait:r})=>{const o=g(),i=A(()=>{const l={},c=v(t),h=v(s),a=v(r);return c!==void 0&&(l.leading=c),h!==void 0&&(l.trailing=h),a!==void 0&&(l.maxWait=a),l});return P(l=>{if(v(e)){const c=n.runAsync.bind(n);o.value=z(h=>{h()},v(e),i.value),n.runAsync=(...h)=>new Promise((a,u)=>{var m;(m=o.value)==null||m.call(o,()=>{c(...h).then(a).catch(u)})}),l(()=>{var h;(h=o.value)==null||h.cancel(),n.runAsync=c})}}),v(e)?{name:"debouncePlugin",onCancel:()=>{var l;(l=o.value)==null||l.cancel()}}:{}};var se=Object.defineProperty,ie=(n,e,t)=>e in n?se(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$=(n,e,t)=>(ie(n,typeof e!="symbol"?e+"":e,t),t);class re{constructor(){$(this,"table",{}),$(this,"hashTable",{})}insert(e){const t=Symbol(e);return this.table[e]=!0,this.hashTable[t]=e,t}find(e){return this.hashTable[e]}}new re;var oe=Object.defineProperty,ae=(n,e,t)=>e in n?oe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e,t)=>(ae(n,typeof e!="symbol"?e+"":e,t),t);class ue{constructor(){y(this,"requestInstances",new Map),y(this,"listeners",[])}emit(e){this.listeners.forEach(t=>t(e))}subscribe(e){return this.listeners.push(e),()=>{const t=this.listeners.indexOf(e);this.listeners.splice(t,1)}}insert(e,t){this.requestInstances.set(e,{...t}),this.emit({key:e,...t})}update(e,t){this.has(e)&&this.requestInstances.set(e,{...this.requestInstances.get(e),...t})}has(e){return this.requestInstances.has(e)}reset(e){if(this.requestInstances.has(e)){const t=this.requestInstances.get(e);this.requestInstances.clear(),this.insert(e,t)}else this.requestInstances.clear()}getAll(){return this.requestInstances}}new ue;const le=(n,{loadingDelay:e})=>{const t=g();if(!v(e))return{};const s=()=>{t.value&&clearTimeout(t.value)};return{name:"loadingDelayPlugin",onBefore:()=>(s(),t.value=setTimeout(()=>{n.setState({loading:!0})},v(e)),{loading:!1}),onFinally:()=>{s()},onCancel:()=>{s()}}};function q(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}const ce=!!(typeof window<"u"&&window.document&&window.document.createElement);function F(){return q()?document.visibilityState!=="hidden":!0}const w=[];function fe(n){return w.push(n),function(){const t=w.indexOf(n);w.splice(t,1)}}if(q()){const n=()=>{if(F())for(let e=0;e<w.length;e++){const t=w[e];t()}};window.addEventListener("visibilitychange",n,!1)}const de=(n,{pollingInterval:e,pollingWhenHidden:t=!0,pollingErrorRetryCount:s=-1})=>{const r=g(),o=g(),i=g(0),l=()=>{var c;r.value&&clearInterval(r.value),(c=o.value)==null||c.call(o)};return P(()=>{v(e)||l()}),v(e)?{name:"pollingPlugin",onBefore:()=>{l()},onError:()=>{i.value+=1},onSuccess:()=>{i.value=0},onFinally:()=>{s===-1||s!==-1&&i.value<=s?r.value=setTimeout(()=>{!t&&!F()?o.value=fe(()=>{n.refresh()}):n.refresh()},v(e)):i.value=0},onCancel:()=>{l()}}:{}};function ve(n,e){let t=!1;return(...s)=>{t||(t=!0,n(...s),setTimeout(()=>{t=!1},e))}}function he(){return q()&&typeof navigator.onLine<"u"?navigator.onLine:!0}const R=[];function me(n){return R.push(n),function(){const t=R.indexOf(n);t>-1&&R.splice(t,1)}}if(ce){const n=()=>{if(!(!F()||!he()))for(let e=0;e<R.length;e++){const t=R[e];t()}};window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1)}const ge=(n,{refreshOnWindowFocus:e,focusTimespan:t=5e3})=>{const s=g(),r=()=>{var o;(o=s.value)==null||o.call(s)};return P(o=>{if(v(e)){const i=ve(n.refresh.bind(n),v(t));s.value=me(()=>{i()})}o(()=>{r()})}),B(()=>{r()}),{name:"refreshOnWindowFocusPlugin"}},pe=(n,{retryInterval:e,retryCount:t})=>{const s=g(),r=g(0),o=g(!1);return t?{name:"retryPlugin",onBefore:()=>{o.value||(r.value=0),o.value=!1,s.value&&clearTimeout(s.value)},onSuccess:()=>{r.value=0},onError:()=>{if(r.value+=1,t===-1||r.value<=t){const i=e??Math.min(1e3*2**r.value,3e4);s.value=setTimeout(()=>{o.value=!0,n.refresh()},i)}else r.value=0},onCancel:()=>{r.value=0,s.value&&clearTimeout(s.value)}}:{}},be=(n,{throttleWait:e,throttleLeading:t,throttleTrailing:s})=>{const r=A(()=>{const i={};return v(t)!==void 0&&(i.leading=v(t)),v(s)!==void 0&&(i.trailing=v(s)),i}),o=A(()=>J(i=>{i()},v(e),r.value));return P(i=>{if(v(e)){const l=n.runAsync.bind(n);n.runAsync=(...c)=>new Promise((h,a)=>{var u;(u=o.value)==null||u.call(o,()=>{l(...c).then(h).catch(a)})}),i(()=>{var c;n.runAsync=l,(c=o.value)==null||c.cancel()})}}),v(e)?{name:"throttlePlugin",onCancel:()=>{var i;(i=o.value)==null||i.cancel()}}:{}},M=n=>typeof n=="function",_e=n=>typeof n=="boolean";var Pe=Object.defineProperty,we=(n,e,t)=>e in n?Pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,E=(n,e,t)=>(we(n,typeof e!="symbol"?e+"":e,t),t);class Re{constructor(e,t,s,r={}){E(this,"pluginImpls"),E(this,"count",0),E(this,"state",{loading:!1,params:void 0,data:void 0,error:void 0}),E(this,"previousValidData"),this.serviceRef=e,this.options=t,this.setUpdateData=s,this.initState=r,this.state={...this.state,loading:!t.manual,...r}}setState(e={}){this.state={...this.state,...e},this.setUpdateData(this.state)}setData(e,t){console.warn("Please use 'setFetchState' instead of 'setData'"),t instanceof Array?t.forEach(s=>{this.state[s]=e,this.setUpdateData(e,s)}):(this.state[t]=e,this.setUpdateData(e,t))}setFetchState(e,t){t instanceof Array?t.forEach(s=>{this.state[s]=e,this.setUpdateData(e,s)}):(this.state[t]=e,this.setUpdateData(e,t))}runPluginHandler(e,...t){var s,r,o;const i=(o=(r=(s=this.pluginImpls)==null?void 0:s.map(l=>{var c;return(c=l[e])==null?void 0:c.call(l,...t)}))!=null?r:[])==null?void 0:o.filter(Boolean);return Object.assign({},...i)}async runAsync(...e){var t,s,r,o,i,l,c,h,a;this.count+=1;const u=this.count,{stopNow:m=!1,returnNow:d=!1,...O}=this.runPluginHandler("onBefore",e);if(m)return new Promise(()=>{});if(this.setState({loading:!0,params:e,...O}),d)return Promise.resolve(O.data);(s=(t=this.options).onBefore)==null||s.call(t,e);try{let{servicePromise:f}=this.runPluginHandler("onRequest",this.serviceRef.value,e);const p=U=>{var C,L,x,H;if(u!==this.count)return new Promise(()=>{});const b=this.options.formatResult?this.options.formatResult(U):U;return this.setState({data:b,error:void 0,loading:!1}),(L=(C=this.options).onSuccess)==null||L.call(C,b,e),this.runPluginHandler("onSuccess",b,e),this.previousValidData=b,(H=(x=this.options).onFinally)==null||H.call(x,e,b,void 0),u===this.count&&this.runPluginHandler("onFinally",e,b,void 0),b};f||(f=this.serviceRef.value(...e));const I=await f;return p(I)}catch(f){if(u!==this.count)return new Promise(()=>{});throw this.setState({error:f,loading:!1}),(o=(r=this.options).onError)==null||o.call(r,f,e),this.runPluginHandler("onError",f,e),(M((i=this.options)==null?void 0:i.rollbackOnError)&&((l=this.options)!=null&&l.rollbackOnError(e))||_e((c=this.options)==null?void 0:c.rollbackOnError)&&this.options.rollbackOnError)&&this.setState({data:this.previousValidData}),(a=(h=this.options).onFinally)==null||a.call(h,e,void 0,f),u===this.count&&this.runPluginHandler("onFinally",e,void 0,f),f}}run(...e){this.runAsync(...e).catch(t=>{this.options.onError||console.error(t)})}cancel(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")}refresh(){this.run(...this.state.params||[])}refreshAsync(){return this.runAsync(...this.state.params||[])}mutate(e){const t=M(e)?e(this.state.data):e;this.runPluginHandler("onMutate",t),this.setState({data:t})}}const Oe=Symbol("USEREQUEST_GLOBAL_OPTIONS_PROVIDE_KEY");function Ee(n){return Object.keys(n).filter(t=>["data","loading","params","error"].includes(t)).length===4}function Se(n,e={},t=[]){const s=Y(Oe,{}),{initialData:r=void 0,manual:o=!1,ready:i=!0,...l}={...s??{},...e??{}},c={manual:o,ready:i,...l},h=g(n),a=j({data:r,loading:!1,params:void 0,error:void 0}),u=(f,p)=>{p?a[p]=f:Ee(f)&&(a.data=f.data,a.loading=f.loading,a.error=f.error,a.params=f.params)},m=t.map(f=>{var p;return(p=f==null?void 0:f.onInit)==null?void 0:p.call(f,c)}).filter(Boolean),d=new Re(h,c,u,Object.assign({},...m,a));d.options=c,d.pluginImpls=t.map(f=>f(d,c));const O=A(()=>Q(i)?i.value:i);if(P(()=>{if(!o){const f=d.state.params||e.defaultParams||[];O.value&&d.options.refreshDeps===!0&&h.value&&d.run(...f)}}),!o&&d.options.refreshDeps!==!0){const f=d.state.params||e.defaultParams||[];v(i)&&d.run(...f)}return B(()=>{d.cancel()}),{...G(a),cancel:d.cancel.bind(d),refresh:d.refresh.bind(d),refreshAsync:d.refreshAsync.bind(d),run:d.run.bind(d),runAsync:d.runAsync.bind(d),mutate:d.mutate.bind(d)}}function Be(n,e,t){var s;const r=(s=[null,ne,le,de,ge,be,V,te,pe])==null?void 0:s.filter(Boolean);return Se(n,e,[...t||[],...r])}export{Be as u};
