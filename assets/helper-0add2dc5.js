import{s as o}from"./lodash-es-de060e62.js";const d=(a,i="lang")=>{const e={};return Object.keys(a).forEach(l=>{const n=a[l].default;let t=l.replace(`./${i}/`,"").replace(/^\.\//,"");const f=t.lastIndexOf(".");t=t.substring(0,f);const c=t.split("/"),s=c.shift(),r=c.join(".");s&&(r?(o(e,s,e[s]||{}),o(e[s],r,n)):o(e,s,n||{}))}),e};export{d as m};
