import{o as P,e as F,k as W,c as b,i as N,d as C,l as ft,g as ye,a as R,b as y,h as se,f as Y,p as $,q as Z}from"./@intlify_shared@9.2.2-e4047ebf.js";import{r as gt,a as bt,s as dt,D as Et,u as M,N as It,b as Ot,c as Lt,f as ke,d as pt,e as oe,g as ce,h as ue,i as Tt,j as Nt,p as ie,t as me,M as _e,k as fe,l as ge,m as be,n as de,o as Ee}from"./@intlify_core-base@9.2.2-a0a8715c.js";import{c as vt,C as Rt}from"./@intlify_message-compiler@9.2.2-8a818441.js";import{h as Ce,i as Ft,e as yt,f as kt,z as V,l as q,F as Ct,b as ee,a as Pt,T as St}from"./@vue_runtime-core@3.2.47-0e1d4738.js";import{q as Dt,k as U,i as ht}from"./@vue_reactivity@3.2.47-f5c8a668.js";/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const At="9.2.2";function Mt(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ye().__INTLIFY_PROD_DEVTOOLS__=!1)}let Pe=Rt.__EXTEND_POINT__;const O=()=>++Pe,p={UNEXPECTED_RETURN_TYPE:Pe,INVALID_ARGUMENT:O(),MUST_BE_CALL_SETUP_TOP:O(),NOT_INSLALLED:O(),NOT_AVAILABLE_IN_LEGACY_MODE:O(),REQUIRED_VALUE:O(),INVALID_VALUE:O(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:O(),NOT_INSLALLED_WITH_PROVIDE:O(),UNEXPECTED_ERROR:O(),NOT_COMPATIBLE_LEGACY_VUE_I18N:O(),BRIDGE_SUPPORT_VUE_2_ONLY:O(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:O(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:O(),__EXTEND_POINT__:O()};function T(e,...r){return vt(e,null,void 0)}const K=P("__transrateVNode"),J=P("__datetimeParts"),z=P("__numberParts"),Vt=P("__setPluralRules");P("__intlifyMeta");const Ut=P("__injectWithOption");function Q(e){if(!N(e))return e;for(const r in e)if(Z(e,r))if(!r.includes("."))N(e[r])&&Q(e[r]);else{const a=r.split("."),s=a.length-1;let o=e;for(let c=0;c<s;c++)a[c]in o||(o[a[c]]={}),o=o[a[c]];o[a[s]]=e[r],delete e[r],N(o[a[s]])&&Q(o[a[s]])}return e}function Se(e,r){const{messages:a,__i18n:s,messageResolver:o,flatJson:c}=r,l=y(a)?a:R(s)?{}:{[e]:{}};if(R(s)&&s.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:m,resource:_}=u;m?(l[m]=l[m]||{},w(_,l[m])):w(_,l)}else b(u)&&w(JSON.parse(u),l)}),o==null&&c)for(const u in l)Z(l,u)&&Q(l[u]);return l}const G=e=>!N(e)||R(e);function w(e,r){if(G(e)||G(r))throw T(p.INVALID_VALUE);for(const a in e)Z(e,a)&&(G(e[a])||G(r[a])?r[a]=e[a]:w(e[a],r[a]))}function De(e){return e.type}function wt(e,r,a){let s=N(r.messages)?r.messages:{};"__i18nGlobal"in a&&(s=Se(e.locale.value,{messages:s,__i18n:a.__i18nGlobal}));const o=Object.keys(s);o.length&&o.forEach(c=>{e.mergeLocaleMessage(c,s[c])});{if(N(r.datetimeFormats)){const c=Object.keys(r.datetimeFormats);c.length&&c.forEach(l=>{e.mergeDateTimeFormat(l,r.datetimeFormats[l])})}if(N(r.numberFormats)){const c=Object.keys(r.numberFormats);c.length&&c.forEach(l=>{e.mergeNumberFormat(l,r.numberFormats[l])})}}}function Ie(e){return Pt(St,null,e,0)}const Oe="__INTLIFY_META__";let Le=0;function pe(e){return(r,a,s,o)=>e(a,s,ee()||void 0,o)}const Wt=()=>{const e=ee();let r=null;return e&&(r=De(e)[Oe])?{[Oe]:r}:null};function he(e={},r){const{__root:a}=e,s=a===void 0;let o=C(e.inheritLocale)?e.inheritLocale:!0;const c=U(a&&o?a.locale.value:b(e.locale)?e.locale:Et),l=U(a&&o?a.fallbackLocale.value:b(e.fallbackLocale)||R(e.fallbackLocale)||y(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),u=U(Se(c.value,e)),m=U(y(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),_=U(y(e.numberFormats)?e.numberFormats:{[c.value]:{}});let I=a?a.missingWarn:C(e.missingWarn)||se(e.missingWarn)?e.missingWarn:!0,f=a?a.fallbackWarn:C(e.fallbackWarn)||se(e.fallbackWarn)?e.fallbackWarn:!0,g=a?a.fallbackRoot:C(e.fallbackRoot)?e.fallbackRoot:!0,L=!!e.fallbackFormat,S=Y(e.missing)?e.missing:null,k=Y(e.missing)?pe(e.missing):null,A=Y(e.postTranslation)?e.postTranslation:null,H=a?a.warnHtmlMessage:C(e.warnHtmlMessage)?e.warnHtmlMessage:!0,B=!!e.escapeParameter;const ne=a?a.modifiers:y(e.modifiers)?e.modifiers:{};let x=e.pluralRules||a&&a.pluralRules,i;i=(()=>{s&&Ee(null);const t={version:At,locale:c.value,fallbackLocale:l.value,messages:u.value,modifiers:ne,pluralRules:x,missing:k===null?void 0:k,missingWarn:I,fallbackWarn:f,fallbackFormat:L,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:H,escapeParameter:B,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=m.value,t.numberFormats=_.value,t.__datetimeFormatters=y(i)?i.__datetimeFormatters:void 0,t.__numberFormatters=y(i)?i.__numberFormatters:void 0;const n=pt(t);return s&&Ee(n),n})(),M(i,c.value,l.value);function Ve(){return[c.value,l.value,u.value,m.value,_.value]}const Ue=V({get:()=>c.value,set:t=>{c.value=t,i.locale=c.value}}),we=V({get:()=>l.value,set:t=>{l.value=t,i.fallbackLocale=l.value,M(i,c.value,t)}}),We=V(()=>u.value),xe=V(()=>m.value),je=V(()=>_.value);function Ye(){return Y(A)?A:null}function Ge(t){A=t,i.postTranslation=t}function He(){return S}function Be(t){t!==null&&(k=pe(t)),S=t,i.missing=k}const D=(t,n,v,E,X,j)=>{Ve();let h;if(__INTLIFY_PROD_DEVTOOLS__)try{ue(Wt()),s||(i.fallbackContext=a?Tt():void 0),h=t(i)}finally{ue(null),s||(i.fallbackContext=void 0)}else h=t(i);if(W(h)&&h===Nt){const[_t,na]=n();return a&&g?E(a):X(_t)}else{if(j(h))return h;throw T(p.UNEXPECTED_RETURN_TYPE)}};function re(...t){return D(n=>Reflect.apply(me,null,[n,...t]),()=>ie(...t),"translate",n=>Reflect.apply(n.t,n,[...t]),n=>n,n=>b(n))}function Xe(...t){const[n,v,E]=t;if(E&&!N(E))throw T(p.INVALID_ARGUMENT);return re(n,v,F({resolvedMessage:!0},E||{}))}function $e(...t){return D(n=>Reflect.apply(ge,null,[n,...t]),()=>fe(...t),"datetime format",n=>Reflect.apply(n.d,n,[...t]),()=>_e,n=>b(n))}function qe(...t){return D(n=>Reflect.apply(de,null,[n,...t]),()=>be(...t),"number format",n=>Reflect.apply(n.n,n,[...t]),()=>_e,n=>b(n))}function Ke(t){return t.map(n=>b(n)||W(n)||C(n)?Ie(String(n)):n)}const Je={normalize:Ke,interpolate:t=>t,type:"vnode"};function ze(...t){return D(n=>{let v;const E=n;try{E.processor=Je,v=Reflect.apply(me,null,[E,...t])}finally{E.processor=null}return v},()=>ie(...t),"translate",n=>n[K](...t),n=>[Ie(n)],n=>R(n))}function Qe(...t){return D(n=>Reflect.apply(de,null,[n,...t]),()=>be(...t),"number format",n=>n[z](...t),()=>[],n=>b(n)||R(n))}function Ze(...t){return D(n=>Reflect.apply(ge,null,[n,...t]),()=>fe(...t),"datetime format",n=>n[J](...t),()=>[],n=>b(n)||R(n))}function et(t){x=t,i.pluralRules=x}function tt(t,n){const v=b(n)?n:c.value,E=le(v);return i.messageResolver(E,t)!==null}function at(t){let n=null;const v=ke(i,l.value,c.value);for(let E=0;E<v.length;E++){const X=u.value[v[E]]||{},j=i.messageResolver(X,t);if(j!=null){n=j;break}}return n}function nt(t){const n=at(t);return n??(a?a.tm(t)||{}:{})}function le(t){return u.value[t]||{}}function rt(t,n){u.value[t]=n,i.messages=u.value}function lt(t,n){u.value[t]=u.value[t]||{},w(n,u.value[t]),i.messages=u.value}function st(t){return m.value[t]||{}}function ot(t,n){m.value[t]=n,i.datetimeFormats=m.value,oe(i,t,n)}function ct(t,n){m.value[t]=F(m.value[t]||{},n),i.datetimeFormats=m.value,oe(i,t,n)}function ut(t){return _.value[t]||{}}function it(t,n){_.value[t]=n,i.numberFormats=_.value,ce(i,t,n)}function mt(t,n){_.value[t]=F(_.value[t]||{},n),i.numberFormats=_.value,ce(i,t,n)}Le++,a&&$&&(q(a.locale,t=>{o&&(c.value=t,i.locale=t,M(i,c.value,l.value))}),q(a.fallbackLocale,t=>{o&&(l.value=t,i.fallbackLocale=t,M(i,c.value,l.value))}));const d={id:Le,locale:Ue,fallbackLocale:we,get inheritLocale(){return o},set inheritLocale(t){o=t,t&&a&&(c.value=a.locale.value,l.value=a.fallbackLocale.value,M(i,c.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:We,get modifiers(){return ne},get pluralRules(){return x||{}},get isGlobal(){return s},get missingWarn(){return I},set missingWarn(t){I=t,i.missingWarn=I},get fallbackWarn(){return f},set fallbackWarn(t){f=t,i.fallbackWarn=f},get fallbackRoot(){return g},set fallbackRoot(t){g=t},get fallbackFormat(){return L},set fallbackFormat(t){L=t,i.fallbackFormat=L},get warnHtmlMessage(){return H},set warnHtmlMessage(t){H=t,i.warnHtmlMessage=t},get escapeParameter(){return B},set escapeParameter(t){B=t,i.escapeParameter=t},t:re,getLocaleMessage:le,setLocaleMessage:rt,mergeLocaleMessage:lt,getPostTranslationHandler:Ye,setPostTranslationHandler:Ge,getMissingHandler:He,setMissingHandler:Be,[Vt]:et};return d.datetimeFormats=xe,d.numberFormats=je,d.rt=Xe,d.te=tt,d.tm=nt,d.d=$e,d.n=qe,d.getDateTimeFormat=st,d.setDateTimeFormat=ot,d.mergeDateTimeFormat=ct,d.getNumberFormat=ut,d.setNumberFormat=it,d.mergeNumberFormat=mt,d[Ut]=e.__injectWithOption,d[K]=ze,d[J]=Ze,d[z]=Qe,d}const te={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function xt({slots:e},r){return r.length===1&&r[0]==="default"?(e.default?e.default():[]).reduce((s,o)=>s=[...s,...R(o.children)?o.children:[o]],[]):r.reduce((a,s)=>{const o=e[s];return o&&(a[s]=o()),a},{})}function Ae(e){return Ct}const Te={name:"i18n-t",props:F({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>W(e)||!isNaN(e)}},te),setup(e,r){const{slots:a,attrs:s}=r,o=e.i18n||ae({useScope:e.scope,__useComponent:!0});return()=>{const c=Object.keys(a).filter(f=>f!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=b(e.plural)?+e.plural:e.plural);const u=xt(r,c),m=o[K](e.keypath,u,l),_=F({},s),I=b(e.tag)||N(e.tag)?e.tag:Ae();return Ce(I,_,m)}}};function jt(e){return R(e)&&!b(e[0])}function Me(e,r,a,s){const{slots:o,attrs:c}=r;return()=>{const l={part:!0};let u={};e.locale&&(l.locale=e.locale),b(e.format)?l.key=e.format:N(e.format)&&(b(e.format.key)&&(l.key=e.format.key),u=Object.keys(e.format).reduce((g,L)=>a.includes(L)?F({},g,{[L]:e.format[L]}):g,{}));const m=s(e.value,l,u);let _=[l.key];R(m)?_=m.map((g,L)=>{const S=o[g.type],k=S?S({[g.type]:g.value,index:L,parts:m}):[g.value];return jt(k)&&(k[0].key=`${g.type}-${L}`),k}):b(m)&&(_=[m]);const I=F({},c),f=b(e.tag)||N(e.tag)?e.tag:Ae();return Ce(f,I,_)}}const Ne={name:"i18n-n",props:F({value:{type:Number,required:!0},format:{type:[String,Object]}},te),setup(e,r){const a=e.i18n||ae({useScope:"parent",__useComponent:!0});return Me(e,r,It,(...s)=>a[z](...s))}},ve={name:"i18n-d",props:F({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},te),setup(e,r){const a=e.i18n||ae({useScope:"parent",__useComponent:!0});return Me(e,r,Ot,(...s)=>a[J](...s))}};function Yt(e,r){const a=e;if(e.mode==="composition")return a.__getInstance(r)||e.global;{const s=a.__getInstance(r);return s!=null?s.__composer:e.global.__composer}}function Gt(e){const r=l=>{const{instance:u,modifiers:m,value:_}=l;if(!u||!u.$)throw T(p.UNEXPECTED_ERROR);const I=Yt(e,u.$),f=Re(_);return[Reflect.apply(I.t,I,[...Fe(f)]),I]};return{created:(l,u)=>{const[m,_]=r(u);$&&e.global===_&&(l.__i18nWatcher=q(_.locale,()=>{u.instance&&u.instance.$forceUpdate()})),l.__composer=_,l.textContent=m},unmounted:l=>{$&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:u})=>{if(l.__composer){const m=l.__composer,_=Re(u);l.textContent=Reflect.apply(m.t,m,[...Fe(_)])}},getSSRProps:l=>{const[u]=r(l);return{textContent:u}}}}function Re(e){if(b(e))return{path:e};if(y(e)){if(!("path"in e))throw T(p.REQUIRED_VALUE,"path");return e}else throw T(p.INVALID_VALUE)}function Fe(e){const{path:r,locale:a,args:s,choice:o,plural:c}=e,l={},u=s||{};return b(a)&&(l.locale=a),W(o)&&(l.plural=o),W(c)&&(l.plural=c),[r,u,l]}function Ht(e,r,...a){const s=y(a[0])?a[0]:{},o=!!s.useI18nComponentName;(C(s.globalInstall)?s.globalInstall:!0)&&(e.component(o?"i18n":Te.name,Te),e.component(Ne.name,Ne),e.component(ve.name,ve)),e.directive("t",Gt(r))}const Bt=P("global-vue-i18n");function ua(e={},r){const a=C(e.globalInjection)?e.globalInjection:!0,s=!0,o=new Map,[c,l]=Xt(e),u=P("");function m(f){return o.get(f)||null}function _(f,g){o.set(f,g)}function I(f){o.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return s},async install(g,...L){g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,f),a&&ea(g,f.global),Ht(g,f,...L);const S=g.unmount;g.unmount=()=>{f.dispose(),S()}},get global(){return l},dispose(){c.stop()},__instances:o,__getInstance:m,__setInstance:_,__deleteInstance:I};return f}}function ae(e={}){const r=ee();if(r==null)throw T(p.MUST_BE_CALL_SETUP_TOP);if(!r.isCE&&r.appContext.app!=null&&!r.appContext.app.__VUE_I18N_SYMBOL__)throw T(p.NOT_INSLALLED);const a=$t(r),s=Kt(a),o=De(r),c=qt(e,o);if(c==="global")return wt(s,e,o),s;if(c==="parent"){let m=Jt(a,r,e.__useComponent);return m==null&&(m=s),m}const l=a;let u=l.__getInstance(r);if(u==null){const m=F({},e);"__i18n"in o&&(m.__i18n=o.__i18n),s&&(m.__root=s),u=he(m),zt(l,r),l.__setInstance(r,u)}return u}function Xt(e,r,a){const s=Dt();{const o=s.run(()=>he(e));if(o==null)throw T(p.UNEXPECTED_ERROR);return[s,o]}}function $t(e){{const r=Ft(e.isCE?Bt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!r)throw T(e.isCE?p.NOT_INSLALLED_WITH_PROVIDE:p.UNEXPECTED_ERROR);return r}}function qt(e,r){return ft(e)?"__i18n"in r?"local":"global":e.useScope?e.useScope:"local"}function Kt(e){return e.mode==="composition"?e.global:e.global.__composer}function Jt(e,r,a=!1){let s=null;const o=r.root;let c=r.parent;for(;c!=null;){const l=e;if(e.mode==="composition"&&(s=l.__getInstance(c)),s!=null||o===c)break;c=c.parent}return s}function zt(e,r,a){yt(()=>{},r),kt(()=>{e.__deleteInstance(r)},r)}const Qt=["locale","fallbackLocale","availableLocales"],Zt=["t","rt","d","n","tm"];function ea(e,r){const a=Object.create(null);Qt.forEach(s=>{const o=Object.getOwnPropertyDescriptor(r,s);if(!o)throw T(p.UNEXPECTED_ERROR);const c=ht(o.value)?{get(){return o.value.value},set(l){o.value.value=l}}:{get(){return o.get&&o.get()}};Object.defineProperty(a,s,c)}),e.config.globalProperties.$i18n=a,Zt.forEach(s=>{const o=Object.getOwnPropertyDescriptor(r,s);if(!o||!o.value)throw T(p.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,o)})}gt(Lt);bt(ke);Mt();if(__INTLIFY_PROD_DEVTOOLS__){const e=ye();e.__INTLIFY__=!0,dt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{ua as c};
