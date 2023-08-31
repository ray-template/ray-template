var _={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.loop=p.conditional=p.parse=void 0;var w=function o(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:t;if(Array.isArray(e))e.forEach(function(s){return o(r,s,t,i)});else if(typeof e=="function")e(r,t,i,o);else{var a=Object.keys(e)[0];Array.isArray(e[a])?(i[a]={},o(r,e[a],t,i[a])):i[a]=e[a](r,t,i,o)}return t};p.parse=w;var C=function(r,e){return function(t,i,a,s){e(t,i,a)&&s(t,r,i,a)}};p.conditional=C;var j=function(r,e){return function(t,i,a,s){for(var f=[],c=t.pos;e(t,i,a);){var v={};if(s(t,r,i,v),t.pos===c)break;c=t.pos,f.push(v)}return f}};p.loop=j;var d={};Object.defineProperty(d,"__esModule",{value:!0});d.readBits=d.readArray=d.readUnsigned=d.readString=d.peekBytes=d.readBytes=d.peekByte=d.readByte=d.buildStream=void 0;var M=function(r){return{data:r,pos:0}};d.buildStream=M;var U=function(){return function(r){return r.data[r.pos++]}};d.readByte=U;var z=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+r]}};d.peekByte=z;var x=function(r){return function(e){return e.data.subarray(e.pos,e.pos+=r)}};d.readBytes=x;var I=function(r){return function(e){return e.data.subarray(e.pos,e.pos+r)}};d.peekBytes=I;var O=function(r){return function(e){return Array.from(x(r)(e)).map(function(t){return String.fromCharCode(t)}).join("")}};d.readString=O;var P=function(r){return function(e){var t=x(2)(e);return r?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]}};d.readUnsigned=P;var D=function(r,e){return function(t,i,a){for(var s=typeof e=="function"?e(t,i,a):e,f=x(r),c=new Array(s),v=0;v<s;v++)c[v]=f(t);return c}};d.readArray=D;var T=function(r,e,t){for(var i=0,a=0;a<t;a++)i+=r[e+a]&&Math.pow(2,t-a-1);return i},E=function(r){return function(e){for(var t=U()(e),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(t&1<<a);return Object.keys(r).reduce(function(s,f){var c=r[f];return c.length?s[f]=T(i,c.index,c.length):s[f]=i[c.index],s},{})}};d.readBits=E;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=p,e=d,t={blocks:function(n){for(var y=0,l=[],b=n.data.length,h=0,g=(0,e.readByte)()(n);g!==y&&g;g=(0,e.readByte)()(n)){if(n.pos+g>=b){var S=b-n.pos;l.push((0,e.readBytes)(S)(n)),h+=S;break}l.push((0,e.readBytes)(g)(n)),h+=g}for(var k=new Uint8Array(h),A=0,B=0;B<l.length;B++)k.set(l[B],A),A+=l[B].length;return k}},i=(0,r.conditional)({gce:[{codes:(0,e.readBytes)(2)},{byteSize:(0,e.readByte)()},{extras:(0,e.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,e.readUnsigned)(!0)},{transparentColorIndex:(0,e.readByte)()},{terminator:(0,e.readByte)()}]},function(u){var n=(0,e.peekBytes)(2)(u);return n[0]===33&&n[1]===249}),a=(0,r.conditional)({image:[{code:(0,e.readByte)()},{descriptor:[{left:(0,e.readUnsigned)(!0)},{top:(0,e.readUnsigned)(!0)},{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{lct:(0,e.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,r.conditional)({lct:(0,e.readArray)(3,function(u,n,y){return Math.pow(2,y.descriptor.lct.size+1)})},function(u,n,y){return y.descriptor.lct.exists}),{data:[{minCodeSize:(0,e.readByte)()},t]}]},function(u){return(0,e.peekByte)()(u)===44}),s=(0,r.conditional)({text:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{preData:function(n,y,l){return(0,e.readBytes)(l.text.blockSize)(n)}},t]},function(u){var n=(0,e.peekBytes)(2)(u);return n[0]===33&&n[1]===1}),f=(0,r.conditional)({application:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{id:function(n,y,l){return(0,e.readString)(l.blockSize)(n)}},t]},function(u){var n=(0,e.peekBytes)(2)(u);return n[0]===33&&n[1]===255}),c=(0,r.conditional)({comment:[{codes:(0,e.readBytes)(2)},t]},function(u){var n=(0,e.peekBytes)(2)(u);return n[0]===33&&n[1]===254}),v=[{header:[{signature:(0,e.readString)(3)},{version:(0,e.readString)(3)}]},{lsd:[{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{gct:(0,e.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,e.readByte)()},{pixelAspectRatio:(0,e.readByte)()}]},(0,r.conditional)({gct:(0,e.readArray)(3,function(u,n){return Math.pow(2,n.lsd.gct.size+1)})},function(u,n){return n.lsd.gct.exists}),{frames:(0,r.loop)([i,f,c,a,s],function(u){var n=(0,e.peekByte)()(u);return n===33||n===44})}],m=v;o.default=m})(_);export{_ as g,p as l,d as u};
