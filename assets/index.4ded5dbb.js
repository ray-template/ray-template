import{d as D,r as y,aF as h,a7 as t,am as l,ai as k,aA as a,aB as p,aD as x,ab as C}from"./index.a1f5de3b.js";function o(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!C(n)}const A=D({name:"RelyAbout",setup(){const{pkg:n}={pkg:{dependencies:{"@vueuse/core":"^9.1.0","amfe-flexible":"^2.2.1",axios:"^1.2.0","crypto-js":"^4.1.1",dayjs:"^1.11.7",echarts:"^5.4.0","lodash-es":"^4.17.21","naive-ui":"^2.34.0",pinia:"^2.0.17","pinia-plugin-persistedstate":"^2.4.0","print-js":"^1.6.0",sass:"^1.54.3",screenfull:"^6.0.2",vue:"^3.2.37","vue-i18n":"^9.2.2","vue-router":"^4.1.3",vuedraggable:"^4.1.0",xlsx:"^0.18.5"},devDependencies:{"@babel/core":"^7.20.2","@babel/eslint-parser":"^7.19.1","@intlify/unplugin-vue-i18n":"^0.5.0","@types/crypto-js":"^4.1.1","@types/scrollreveal":"^0.0.8","@typescript-eslint/eslint-plugin":"^5.42.1","@typescript-eslint/parser":"^5.42.1","@vitejs/plugin-vue":"^3.0.0","@vitejs/plugin-vue-jsx":"^2.0.0",autoprefixer:"^10.4.8",depcheck:"^1.4.3",eslint:"^8.0.1","eslint-config-prettier":"^8.5.0","eslint-config-standard-with-typescript":"^23.0.0","eslint-plugin-import":"^2.25.2","eslint-plugin-n":"^15.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.0.0","eslint-plugin-react":"^7.31.10","eslint-plugin-vue":"^9.7.0",postcss:"^8.1.0","postcss-pxtorem":"^6.0.0",prettier:"^2.7.1","svg-sprite-loader":"^6.0.11",typescript:"*","unplugin-auto-import":"^0.11.0","unplugin-vue-components":"^0.22.0",vite:"^3.2.4","vite-plugin-compression":"^0.5.1","vite-plugin-eslint":"^1.8.1","vite-plugin-imp":"^2.3.1","vite-plugin-inspect":"^0.6.0","vite-plugin-svg-icons":"^2.0.1","vite-svg-loader":"^3.4.0","vue-tsc":"^1.0.9"},name:"ray-template",version:"3.0.0"}},{dependencies:u,devDependencies:i,name:e,version:E}=n,f=[{title:"\u4F9D\u8D56\u540D\u79F0",key:"name"},{title:"\u4F9D\u8D56\u7248\u672C",key:"relyVersion"},{title:"\u4F9D\u8D56\u5730\u5740",key:"relyAddress"}],r=y([]),d=y([]),g=[{name:"\u9879\u76EE\u540D\u79F0",label:e},{name:"\u7248\u672C\u4FE1\u606F",label:E},{name:"\u9879\u76EE\u5730\u5740",label:"GitHub",url:"https://github.com/XiaoDaiGua-Ray/ray-template"}],b=()=>{const s=c=>Object.keys(c).reduce((m,v)=>(m.push({name:v,relyVersion:c[v],relyAddress:""}),m),[]);r.value=s(u),d.value=s(i)},F=s=>{s.url&&window.open(s.url)};return h(()=>{b()}),{columns:f,dependenciesOptions:r,devDependenciesOptions:d,templateOptions:g,handleTagClick:F}},render(){let n,u,i;return t("div",{class:"rely-about"},[t(l,{title:"\u5173\u4E8E\u9879\u76EE"},{default:()=>[k("ray template \u662F\u4E00\u4E2A\u57FA\u4E8E: tsx pinia vue3.x vite sass \u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848. \u9879\u76EE\u5E72\u51C0\u4E0E\u8F7B\u5DE7, \u5DF2\u7ECF\u96C6\u6210\u4E86\u5F88\u591A\u9879\u76EE\u4E2D\u53EF\u80FD\u9700\u8981\u7684\u642C\u7816\u5DE5\u5177\u53EF\u4EE5\u8BA9\u4F60\u5FEB\u901F\u8D77\u4E00\u4E2A\u76F8\u5173\u9879\u76EE, \u5E76\u4E14\u4E0D\u9700\u8981\u5254\u9664\u5927\u91CF\u65E0\u7528\u9875\u9762\u4E0E\u7EC4\u4EF6.")]}),t(l,{title:"\u9879\u76EE\u4FE1\u606F"},{default:()=>[t(a,{bordered:!0,labelPlacement:"left"},o(n=this.templateOptions.map(e=>t(p,{key:e.name,label:e.name},{default:()=>[t(x,{bordered:!1,type:"info",onClick:this.handleTagClick.bind(this,e),style:[e.url?"cursor: pointer":""]},{default:()=>[e.label]})]})))?n:{default:()=>[n]})]}),t(l,{title:"\u751F\u4EA7\u4F9D\u8D56"},{default:()=>[t(a,{bordered:!0,labelPlacement:"left"},o(u=this.dependenciesOptions.map(e=>t(p,{key:e.name,label:e.name},{default:()=>[e.relyVersion]})))?u:{default:()=>[u]})]}),t(l,{title:"\u5F00\u53D1\u4F9D\u8D56"},{default:()=>[t(a,{bordered:!0,labelPlacement:"left"},o(i=this.devDependenciesOptions.map(e=>t(p,{key:e.name,label:e.name},{default:()=>[e.relyVersion]})))?i:{default:()=>[i]})]})])}});export{A as default};
