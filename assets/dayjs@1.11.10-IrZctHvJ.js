import{c as B,g as tt}from"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";var U={exports:{}},V;function G(){return V||(V=1,function(z,P){(function(O,D){z.exports=D()})(B,function(){var O=1e3,D=6e4,j=36e5,b="millisecond",d="second",y="minute",m="hour",v="day",C="week",M="month",J="quarter",p="year",L="date",Z="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},F=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},X={s:F,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+F(r,2,"0")+":"+F(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,M),i=t-e<0,u=n.clone().add(r+(i?-1:1),M);return+(-(r+(t-e)/(i?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M,y:p,w:C,d:v,D:L,h:m,m:y,s:d,ms:b,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},k="en",g={};g[k]=K;var q="$isDayjsObject",N=function(s){return s instanceof A||!(!s||!s[q])},W=function s(n,t,r){var e;if(!n)return k;if(typeof n=="string"){var i=n.toLowerCase();g[i]&&(e=i),t&&(g[i]=t,e=i);var u=n.split("-");if(!e&&u.length>1)return s(u[0])}else{var o=n.name;g[o]=n,e=o}return!r&&e&&(k=e),e||!r&&k},f=function(s,n){if(N(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new A(t)},a=X;a.l=W,a.i=N,a.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var A=function(){function s(t){this.$L=W(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[q]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(Q);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return i?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!a.u(r)||r,u=a.p(t),o=function(w,$){var Y=a.w(e.$u?Date.UTC(e.$y,$,w):new Date(e.$y,$,w),e);return i?Y:Y.endOf(v)},c=function(w,$){return a.w(e.toDate()[w].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,l=this.$M,_=this.$D,H="set"+(this.$u?"UTC":"");switch(u){case p:return i?o(1,0):o(31,11);case M:return i?o(1,l):o(0,l+1);case C:var S=this.$locale().weekStart||0,x=(h<S?h+7:h)-S;return o(i?_-x:_+(6-x),l);case v:case L:return c(H+"Hours",0);case m:return c(H+"Minutes",1);case y:return c(H+"Seconds",2);case d:return c(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[v]=u+"Date",e[L]=u+"Date",e[M]=u+"Month",e[p]=u+"FullYear",e[m]=u+"Hours",e[y]=u+"Minutes",e[d]=u+"Seconds",e[b]=u+"Milliseconds",e)[i],c=i===v?this.$D+(r-this.$W):r;if(i===M||i===p){var h=this.clone().set(L,1);h.$d[o](c),h.init(),this.$d=h.set(L,Math.min(this.$D,h.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var u=a.p(r),o=function(l){var _=f(i);return a.w(_.date(_.date()+Math.round(l*t)),i)};if(u===M)return this.set(M,this.$M+t);if(u===p)return this.set(p,this.$y+t);if(u===v)return o(1);if(u===C)return o(7);var c=(e={},e[y]=D,e[m]=j,e[d]=O,e)[u]||1,h=this.$d.getTime()+t*c;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Z;var i=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,h=this.$M,l=e.weekdays,_=e.months,H=e.meridiem,S=function($,Y,T,I){return $&&($[Y]||$(r,i))||T[Y].slice(0,I)},x=function($){return a.s(o%12||12,$,"0")},w=H||function($,Y,T){var I=$<12?"AM":"PM";return T?I.toLowerCase():I};return i.replace(R,function($,Y){return Y||function(T){switch(T){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return h+1;case"MM":return a.s(h+1,2,"0");case"MMM":return S(e.monthsShort,h,_,3);case"MMMM":return S(_,h);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return S(e.weekdaysMin,r.$W,l,2);case"ddd":return S(e.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return x(1);case"hh":return x(2);case"a":return w(o,c,!0);case"A":return w(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,u=this,o=a.p(r),c=f(t),h=(c.utcOffset()-this.utcOffset())*D,l=this-c,_=function(){return a.m(u,c)};switch(o){case p:i=_()/12;break;case M:i=_();break;case J:i=_()/3;break;case C:i=(l-h)/6048e5;break;case v:i=(l-h)/864e5;break;case m:i=l/j;break;case y:i=l/D;break;case d:i=l/O;break;default:i=l}return e?i:a.a(i)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return g[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=W(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),E=A.prototype;return f.prototype=E,[["$ms",b],["$s",d],["$m",y],["$H",m],["$W",v],["$M",M],["$y",p],["$D",L]].forEach(function(s){E[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,A,f),s.$i=!0),f},f.locale=W,f.isDayjs=N,f.unix=function(s){return f(1e3*s)},f.en=g[k],f.Ls=g,f.p={},f})}(U)),U.exports}var et=G();const st=tt(et);var nt={exports:{}};(function(z,P){(function(O,D){z.exports=D(G())})(B,function(O){function D(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var j=D(O),b={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(d,y){return y==="W"?d+"周":d+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(d,y){var m=100*d+y;return m<600?"凌晨":m<900?"早上":m<1100?"上午":m<1300?"中午":m<1800?"下午":"晚上"}};return j.default.locale(b,null,!0),b})})(nt);export{st as d};
