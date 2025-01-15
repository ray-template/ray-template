import{e as C,l as W,b as T,j as p,f as D,m as Rt,g as Ae,r as A,c as k,d as F,h as _e,a as $,s as J,i as he,u as X,v as K}from"./@intlify_shared@9.13.1-BxU0OzX2.js";import{s as Lt,D as pt,u as x,N as vt,a as Pt,C as Ft,c as Ct,b as me,d as fe,e as St,g as Dt,f as yt,p as ge,t as Ee,M as be,h as de,i as Oe,j as Te,n as Ie,k as kt,l as At,m as Me,r as ht,o as Mt,q as Vt,v as Ut,w as Ne,x as xt,y as wt}from"./@intlify_core-base@9.13.1-C6DqbPB6.js";import{c as Wt}from"./@intlify_message-compiler@9.13.1-GrLDMuy_.js";import{l as ne,h as Ve,i as jt,k as Yt,Q as Gt,f as w,w as z,F as Ue,d as re,b as Ht,P as Bt}from"./@vue_runtime-core@3.5.13-Mn4UDPFA.js";import{y as $t,a as Xt,k as Jt,s as Kt}from"./@vue_reactivity@3.5.13-BUI-9P27.js";/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const qt="9.13.1";function Qt(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ae().__INTLIFY_PROD_DEVTOOLS__=!1)}const xe=Ut.__EXTEND_POINT__,S=he(xe);S(),S(),S(),S(),S(),S(),S(),S(),S();const we=Ft.__EXTEND_POINT__,N=he(we),R={UNEXPECTED_RETURN_TYPE:we,INVALID_ARGUMENT:N(),MUST_BE_CALL_SETUP_TOP:N(),NOT_INSTALLED:N(),NOT_AVAILABLE_IN_LEGACY_MODE:N(),REQUIRED_VALUE:N(),INVALID_VALUE:N(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:N(),NOT_INSTALLED_WITH_PROVIDE:N(),UNEXPECTED_ERROR:N(),NOT_COMPATIBLE_LEGACY_VUE_I18N:N(),BRIDGE_SUPPORT_VUE_2_ONLY:N(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:N(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:N(),__EXTEND_POINT__:N()};function v(e,...l){return Wt(e,null,void 0)}const Z=A("__translateVNode"),ee=A("__datetimeParts"),te=A("__numberParts"),zt=A("__setPluralRules"),Zt=A("__injectWithOption"),ae=A("__dispose");function j(e){if(!p(e))return e;for(const l in e)if(K(e,l))if(!l.includes("."))p(e[l])&&j(e[l]);else{const n=l.split("."),o=n.length-1;let s=e,c=!1;for(let r=0;r<o;r++){if(n[r]in s||(s[n[r]]={}),!p(s[n[r]])){c=!0;break}s=s[n[r]]}c||(s[n[o]]=e[l],delete e[l]),p(s[n[o]])&&j(s[n[o]])}return e}function We(e,l){const{messages:n,__i18n:o,messageResolver:s,flatJson:c}=l,r=F(n)?n:k(o)?{}:{[e]:{}};if(k(o)&&o.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:m,resource:_}=u;m?(r[m]=r[m]||{},X(_,r[m])):X(_,r)}else T(u)&&X(JSON.parse(u),r)}),s==null&&c)for(const u in r)K(r,u)&&j(r[u]);return r}function je(e){return e.type}function ea(e,l,n){let o=p(l.messages)?l.messages:{};"__i18nGlobal"in n&&(o=We(e.locale.value,{messages:o,__i18n:n.__i18nGlobal}));const s=Object.keys(o);s.length&&s.forEach(c=>{e.mergeLocaleMessage(c,o[c])});{if(p(l.datetimeFormats)){const c=Object.keys(l.datetimeFormats);c.length&&c.forEach(r=>{e.mergeDateTimeFormat(r,l.datetimeFormats[r])})}if(p(l.numberFormats)){const c=Object.keys(l.numberFormats);c.length&&c.forEach(r=>{e.mergeNumberFormat(r,l.numberFormats[r])})}}}function Re(e){return Ht(Bt,null,e,0)}const Le="__INTLIFY_META__",pe=()=>[],ta=()=>!1;let ve=0;function Pe(e){return(l,n,o,s)=>e(n,o,re()||void 0,s)}const aa=()=>{const e=re();let l=null;return e&&(l=je(e)[Le])?{[Le]:l}:null};function Ye(e={},l){const{__root:n,__injectWithOption:o}=e,s=n===void 0,c=e.flatJson,r=J?Jt:Kt,u=!!e.translateExistCompatible;let m=D(e.inheritLocale)?e.inheritLocale:!0;const _=r(n&&m?n.locale.value:T(e.locale)?e.locale:pt),b=r(n&&m?n.fallbackLocale.value:T(e.fallbackLocale)||k(e.fallbackLocale)||F(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:_.value),f=r(We(_.value,e)),g=r(F(e.datetimeFormats)?e.datetimeFormats:{[_.value]:{}}),O=r(F(e.numberFormats)?e.numberFormats:{[_.value]:{}});let L=n?n.missingWarn:D(e.missingWarn)||_e(e.missingWarn)?e.missingWarn:!0,P=n?n.fallbackWarn:D(e.fallbackWarn)||_e(e.fallbackWarn)?e.fallbackWarn:!0,M=n?n.fallbackRoot:D(e.fallbackRoot)?e.fallbackRoot:!0,Y=!!e.fallbackFormat,oe=$(e.missing)?e.missing:null,G=$(e.missing)?Pe(e.missing):null,U=$(e.postTranslation)?e.postTranslation:null,q=n?n.warnHtmlMessage:D(e.warnHtmlMessage)?e.warnHtmlMessage:!0,Q=!!e.escapeParameter;const ce=n?n.modifiers:F(e.modifiers)?e.modifiers:{};let H=e.pluralRules||n&&n.pluralRules,i;i=(()=>{s&&Ne(null);const t={version:qt,locale:_.value,fallbackLocale:b.value,messages:f.value,modifiers:ce,pluralRules:H,missing:G===null?void 0:G,missingWarn:L,fallbackWarn:P,fallbackFormat:Y,unresolving:!0,postTranslation:U===null?void 0:U,warnHtmlMessage:q,escapeParameter:Q,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};t.datetimeFormats=g.value,t.numberFormats=O.value,t.__datetimeFormatters=F(i)?i.__datetimeFormatters:void 0,t.__numberFormatters=F(i)?i.__numberFormatters:void 0;const a=Ct(t);return s&&Ne(a),a})(),x(i,_.value,b.value);function Be(){return[_.value,b.value,f.value,g.value,O.value]}const $e=w({get:()=>_.value,set:t=>{_.value=t,i.locale=_.value}}),Xe=w({get:()=>b.value,set:t=>{b.value=t,i.fallbackLocale=b.value,x(i,_.value,t)}}),Je=w(()=>f.value),Ke=w(()=>g.value),qe=w(()=>O.value);function Qe(){return $(U)?U:null}function ze(t){U=t,i.postTranslation=t}function Ze(){return oe}function et(t){t!==null&&(G=Pe(t)),oe=t,i.missing=G}const h=(t,a,E,d,y,B)=>{Be();let V;try{__INTLIFY_PROD_DEVTOOLS__&&St(aa()),s||(i.fallbackContext=n?Dt():void 0),V=t(i)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(i.fallbackContext=void 0)}if(E!=="translate exists"&&W(V)&&V===yt||E==="translate exists"&&!V){const[Nt,La]=a();return n&&M?d(n):y(Nt)}else{if(B(V))return V;throw v(R.UNEXPECTED_RETURN_TYPE)}};function ue(...t){return h(a=>Reflect.apply(Ee,null,[a,...t]),()=>ge(...t),"translate",a=>Reflect.apply(a.t,a,[...t]),a=>a,a=>T(a))}function tt(...t){const[a,E,d]=t;if(d&&!p(d))throw v(R.INVALID_ARGUMENT);return ue(a,E,C({resolvedMessage:!0},d||{}))}function at(...t){return h(a=>Reflect.apply(Oe,null,[a,...t]),()=>de(...t),"datetime format",a=>Reflect.apply(a.d,a,[...t]),()=>be,a=>T(a))}function nt(...t){return h(a=>Reflect.apply(Ie,null,[a,...t]),()=>Te(...t),"number format",a=>Reflect.apply(a.n,a,[...t]),()=>be,a=>T(a))}function rt(t){return t.map(a=>T(a)||W(a)||D(a)?Re(String(a)):a)}const lt={normalize:rt,interpolate:t=>t,type:"vnode"};function st(...t){return h(a=>{let E;const d=a;try{d.processor=lt,E=Reflect.apply(Ee,null,[d,...t])}finally{d.processor=null}return E},()=>ge(...t),"translate",a=>a[Z](...t),a=>[Re(a)],a=>k(a))}function ot(...t){return h(a=>Reflect.apply(Ie,null,[a,...t]),()=>Te(...t),"number format",a=>a[te](...t),pe,a=>T(a)||k(a))}function ct(...t){return h(a=>Reflect.apply(Oe,null,[a,...t]),()=>de(...t),"datetime format",a=>a[ee](...t),pe,a=>T(a)||k(a))}function ut(t){H=t,i.pluralRules=H}function it(t,a){return h(()=>{if(!t)return!1;const E=T(a)?a:_.value,d=ie(E),y=i.messageResolver(d,t);return u?y!=null:kt(y)||At(y)||T(y)},()=>[t],"translate exists",E=>Reflect.apply(E.te,E,[t,a]),ta,E=>D(E))}function _t(t){let a=null;const E=Me(i,b.value,_.value);for(let d=0;d<E.length;d++){const y=f.value[E[d]]||{},B=i.messageResolver(y,t);if(B!=null){a=B;break}}return a}function mt(t){const a=_t(t);return a??(n?n.tm(t)||{}:{})}function ie(t){return f.value[t]||{}}function ft(t,a){if(c){const E={[t]:a};for(const d in E)K(E,d)&&j(E[d]);a=E[t]}f.value[t]=a,i.messages=f.value}function gt(t,a){f.value[t]=f.value[t]||{};const E={[t]:a};if(c)for(const d in E)K(E,d)&&j(E[d]);a=E[t],X(a,f.value[t]),i.messages=f.value}function Et(t){return g.value[t]||{}}function bt(t,a){g.value[t]=a,i.datetimeFormats=g.value,me(i,t,a)}function dt(t,a){g.value[t]=C(g.value[t]||{},a),i.datetimeFormats=g.value,me(i,t,a)}function Ot(t){return O.value[t]||{}}function Tt(t,a){O.value[t]=a,i.numberFormats=O.value,fe(i,t,a)}function It(t,a){O.value[t]=C(O.value[t]||{},a),i.numberFormats=O.value,fe(i,t,a)}ve++,n&&J&&(z(n.locale,t=>{m&&(_.value=t,i.locale=t,x(i,_.value,b.value))}),z(n.fallbackLocale,t=>{m&&(b.value=t,i.fallbackLocale=t,x(i,_.value,b.value))}));const I={id:ve,locale:$e,fallbackLocale:Xe,get inheritLocale(){return m},set inheritLocale(t){m=t,t&&n&&(_.value=n.locale.value,b.value=n.fallbackLocale.value,x(i,_.value,b.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:Je,get modifiers(){return ce},get pluralRules(){return H||{}},get isGlobal(){return s},get missingWarn(){return L},set missingWarn(t){L=t,i.missingWarn=L},get fallbackWarn(){return P},set fallbackWarn(t){P=t,i.fallbackWarn=P},get fallbackRoot(){return M},set fallbackRoot(t){M=t},get fallbackFormat(){return Y},set fallbackFormat(t){Y=t,i.fallbackFormat=Y},get warnHtmlMessage(){return q},set warnHtmlMessage(t){q=t,i.warnHtmlMessage=t},get escapeParameter(){return Q},set escapeParameter(t){Q=t,i.escapeParameter=t},t:ue,getLocaleMessage:ie,setLocaleMessage:ft,mergeLocaleMessage:gt,getPostTranslationHandler:Qe,setPostTranslationHandler:ze,getMissingHandler:Ze,setMissingHandler:et,[zt]:ut};return I.datetimeFormats=Ke,I.numberFormats=qe,I.rt=tt,I.te=it,I.tm=mt,I.d=at,I.n=nt,I.getDateTimeFormat=Et,I.setDateTimeFormat=bt,I.mergeDateTimeFormat=dt,I.getNumberFormat=Ot,I.setNumberFormat=Tt,I.mergeNumberFormat=It,I[Zt]=o,I[Z]=st,I[ee]=ct,I[te]=ot,I}const le={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function na({slots:e},l){return l.length===1&&l[0]==="default"?(e.default?e.default():[]).reduce((o,s)=>[...o,...s.type===Ue?s.children:[s]],[]):l.reduce((n,o)=>{const s=e[o];return s&&(n[o]=s()),n},{})}function Ge(e){return Ue}const ra=ne({name:"i18n-t",props:C({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>W(e)||!isNaN(e)}},le),setup(e,l){const{slots:n,attrs:o}=l,s=e.i18n||se({useScope:e.scope,__useComponent:!0});return()=>{const c=Object.keys(n).filter(f=>f!=="_"),r={};e.locale&&(r.locale=e.locale),e.plural!==void 0&&(r.plural=T(e.plural)?+e.plural:e.plural);const u=na(l,c),m=s[Z](e.keypath,u,r),_=C({},o),b=T(e.tag)||p(e.tag)?e.tag:Ge();return Ve(b,_,m)}}}),Fe=ra;function la(e){return k(e)&&!T(e[0])}function He(e,l,n,o){const{slots:s,attrs:c}=l;return()=>{const r={part:!0};let u={};e.locale&&(r.locale=e.locale),T(e.format)?r.key=e.format:p(e.format)&&(T(e.format.key)&&(r.key=e.format.key),u=Object.keys(e.format).reduce((g,O)=>n.includes(O)?C({},g,{[O]:e.format[O]}):g,{}));const m=o(e.value,r,u);let _=[r.key];k(m)?_=m.map((g,O)=>{const L=s[g.type],P=L?L({[g.type]:g.value,index:O,parts:m}):[g.value];return la(P)&&(P[0].key=`${g.type}-${O}`),P}):T(m)&&(_=[m]);const b=C({},c),f=T(e.tag)||p(e.tag)?e.tag:Ge();return Ve(f,b,_)}}const sa=ne({name:"i18n-n",props:C({value:{type:Number,required:!0},format:{type:[String,Object]}},le),setup(e,l){const n=e.i18n||se({useScope:e.scope,__useComponent:!0});return He(e,l,vt,(...o)=>n[te](...o))}}),Ce=sa,oa=ne({name:"i18n-d",props:C({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},le),setup(e,l){const n=e.i18n||se({useScope:e.scope,__useComponent:!0});return He(e,l,Pt,(...o)=>n[ee](...o))}}),Se=oa;function ca(e,l){const n=e;if(e.mode==="composition")return n.__getInstance(l)||e.global;{const o=n.__getInstance(l);return o!=null?o.__composer:e.global.__composer}}function ua(e){const l=r=>{const{instance:u,modifiers:m,value:_}=r;if(!u||!u.$)throw v(R.UNEXPECTED_ERROR);const b=ca(e,u.$),f=De(_);return[Reflect.apply(b.t,b,[...ye(f)]),b]};return{created:(r,u)=>{const[m,_]=l(u);J&&e.global===_&&(r.__i18nWatcher=z(_.locale,()=>{u.instance&&u.instance.$forceUpdate()})),r.__composer=_,r.textContent=m},unmounted:r=>{J&&r.__i18nWatcher&&(r.__i18nWatcher(),r.__i18nWatcher=void 0,delete r.__i18nWatcher),r.__composer&&(r.__composer=void 0,delete r.__composer)},beforeUpdate:(r,{value:u})=>{if(r.__composer){const m=r.__composer,_=De(u);r.textContent=Reflect.apply(m.t,m,[...ye(_)])}},getSSRProps:r=>{const[u]=l(r);return{textContent:u}}}}function De(e){if(T(e))return{path:e};if(F(e)){if(!("path"in e))throw v(R.REQUIRED_VALUE,"path");return e}else throw v(R.INVALID_VALUE)}function ye(e){const{path:l,locale:n,args:o,choice:s,plural:c}=e,r={},u=o||{};return T(n)&&(r.locale=n),W(s)&&(r.plural=s),W(c)&&(r.plural=c),[l,u,r]}function ia(e,l,...n){const o=F(n[0])?n[0]:{},s=!!o.useI18nComponentName;(D(o.globalInstall)?o.globalInstall:!0)&&([s?"i18n":Fe.name,"I18nT"].forEach(r=>e.component(r,Fe)),[Ce.name,"I18nN"].forEach(r=>e.component(r,Ce)),[Se.name,"I18nD"].forEach(r=>e.component(r,Se))),e.directive("t",ua(l))}const _a=A("global-vue-i18n");function Sa(e={},l){const n=D(e.globalInjection)?e.globalInjection:!0,o=!0,s=new Map,[c,r]=ma(e),u=A("");function m(f){return s.get(f)||null}function _(f,g){s.set(f,g)}function b(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return o},async install(g,...O){if(g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,f),F(O[0])){const M=O[0];f.__composerExtend=M.__composerExtend,f.__vueI18nExtend=M.__vueI18nExtend}let L=null;n&&(L=Ia(g,f.global)),ia(g,f,...O);const P=g.unmount;g.unmount=()=>{L&&L(),f.dispose(),P()}},get global(){return r},dispose(){c.stop()},__instances:s,__getInstance:m,__setInstance:_,__deleteInstance:b};return f}}function se(e={}){const l=re();if(l==null)throw v(R.MUST_BE_CALL_SETUP_TOP);if(!l.isCE&&l.appContext.app!=null&&!l.appContext.app.__VUE_I18N_SYMBOL__)throw v(R.NOT_INSTALLED);const n=fa(l),o=Ea(n),s=je(l),c=ga(e,s);if(c==="global")return ea(o,e,s),o;if(c==="parent"){let m=ba(n,l,e.__useComponent);return m==null&&(m=o),m}const r=n;let u=r.__getInstance(l);if(u==null){const m=C({},e);"__i18n"in s&&(m.__i18n=s.__i18n),o&&(m.__root=o),u=Ye(m),r.__composerExtend&&(u[ae]=r.__composerExtend(u)),Oa(r,l,u),r.__setInstance(l,u)}return u}function ma(e,l,n){const o=$t();{const s=o.run(()=>Ye(e));if(s==null)throw v(R.UNEXPECTED_ERROR);return[o,s]}}function fa(e){{const l=jt(e.isCE?_a:e.appContext.app.__VUE_I18N_SYMBOL__);if(!l)throw v(e.isCE?R.NOT_INSTALLED_WITH_PROVIDE:R.UNEXPECTED_ERROR);return l}}function ga(e,l){return Rt(e)?"__i18n"in l?"local":"global":e.useScope?e.useScope:"local"}function Ea(e){return e.mode==="composition"?e.global:e.global.__composer}function ba(e,l,n=!1){let o=null;const s=l.root;let c=da(l,n);for(;c!=null;){const r=e;if(e.mode==="composition"&&(o=r.__getInstance(c)),o!=null||s===c)break;c=c.parent}return o}function da(e,l=!1){return e==null?null:l&&e.vnode.ctx||e.parent}function Oa(e,l,n){Yt(()=>{},l),Gt(()=>{const o=n;e.__deleteInstance(l);const s=o[ae];s&&(s(),delete o[ae])},l)}const Ta=["locale","fallbackLocale","availableLocales"],ke=["t","rt","d","n","tm","te"];function Ia(e,l){const n=Object.create(null);return Ta.forEach(s=>{const c=Object.getOwnPropertyDescriptor(l,s);if(!c)throw v(R.UNEXPECTED_ERROR);const r=Xt(c.value)?{get(){return c.value.value},set(u){c.value.value=u}}:{get(){return c.get&&c.get()}};Object.defineProperty(n,s,r)}),e.config.globalProperties.$i18n=n,ke.forEach(s=>{const c=Object.getOwnPropertyDescriptor(l,s);if(!c||!c.value)throw v(R.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,c)}),()=>{delete e.config.globalProperties.$i18n,ke.forEach(s=>{delete e.config.globalProperties[`$${s}`]})}}Qt();ht(xt);Mt(wt);Vt(Me);if(__INTLIFY_PROD_DEVTOOLS__){const e=Ae();e.__INTLIFY__=!0,Lt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{Sa as c};
