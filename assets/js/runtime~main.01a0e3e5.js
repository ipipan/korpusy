(()=>{"use strict";var e,a,c,d,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=b,r.c=t,e=[],r.O=(a,c,d,f)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],f=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,d,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",110:"66406991",285:"d3100622",453:"30a24c52",533:"b2b675dd",643:"7d2acfd0",657:"5df56ce0",931:"3bd47e31",948:"8717b14a",1477:"b2f554cd",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2535:"814f3328",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3514:"73664a40",3520:"e5bb6b35",3602:"d83466d0",3608:"9e4087bc",3792:"dff1c289",4013:"01a85c17",4106:"be520221",4193:"f55d3e7a",4195:"c4f5d8e4",4607:"533a09ca",4812:"a1c64443",4897:"ebcc017d",5012:"48b6257d",5366:"8fa7e880",5589:"5c868d36",5858:"c1ebc860",6103:"ccc49370",6504:"822bd8ab",6525:"ea88f2a1",6755:"e44a2883",6938:"608ae6a4",7007:"acab8ddf",7178:"096bfee4",7414:"393be207",7826:"7d75b08b",7918:"17896441",8610:"6875c492",8636:"f4f34a3a",8674:"bc9d517c",8818:"1e4232ab",9003:"925b3f96",9035:"4c9e35b1",9326:"c844b82d",9503:"f6d5892b",9514:"1be78505",9519:"5f603a65",9642:"7661071f",9671:"0e384e19",9700:"e16015ca",9811:"a0826222",9817:"14eb3368",9872:"e147b432"}[e]||e)+"."+{53:"5e8986df",110:"32f76223",285:"fa7ffe40",453:"ada36414",533:"57feaac3",643:"dafa8cf5",657:"c237da12",931:"bd52a355",948:"96bf162f",1477:"c830e905",1506:"59788df2",1633:"cba77ed0",1713:"311e3375",1914:"a7671afe",2267:"85fddf7f",2362:"bba71790",2529:"412a53af",2535:"3122c039",2859:"0f2bbe9c",3085:"3bc787d4",3089:"7e627099",3205:"144f46c5",3514:"810ddea2",3520:"5f38f616",3602:"e2289f12",3608:"eea2674a",3792:"54cbf86b",4013:"24599b98",4106:"4ba1fa9a",4193:"dd63fa21",4195:"25e60d16",4607:"d9fc4cdc",4812:"d09af740",4897:"a4711269",4972:"46536be3",5012:"48c6659e",5366:"ee6af574",5589:"d4b372ae",5858:"4ce5af31",6103:"fdb94e5c",6504:"624c3881",6525:"6654b87b",6755:"d0c507a9",6938:"d67ca04f",7007:"8c99eb4d",7178:"fe8ec120",7414:"762ec1c3",7826:"5b3dfc16",7918:"1c82adb8",8610:"9403f1a3",8636:"2585423a",8674:"d49ba30d",8818:"517e7d2a",9003:"82d1fb37",9035:"3f885914",9326:"c29f8649",9503:"4c4ace10",9514:"9608bd9f",9519:"a965c431",9642:"4655af15",9671:"5715d773",9700:"0ada9dfd",9811:"a38cf88b",9817:"a56873e2",9872:"5533d9be"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="korpusy:",r.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+c),t.src=e),d[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"7918",59362658:"2267",66406991:"110","935f2afb":"53",d3100622:"285","30a24c52":"453",b2b675dd:"533","7d2acfd0":"643","5df56ce0":"657","3bd47e31":"931","8717b14a":"948",b2f554cd:"1477","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914",e273c56f:"2362","814f3328":"2535","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","73664a40":"3514",e5bb6b35:"3520",d83466d0:"3602","9e4087bc":"3608",dff1c289:"3792","01a85c17":"4013",be520221:"4106",f55d3e7a:"4193",c4f5d8e4:"4195","533a09ca":"4607",a1c64443:"4812",ebcc017d:"4897","48b6257d":"5012","8fa7e880":"5366","5c868d36":"5589",c1ebc860:"5858",ccc49370:"6103","822bd8ab":"6504",ea88f2a1:"6525",e44a2883:"6755","608ae6a4":"6938",acab8ddf:"7007","096bfee4":"7178","393be207":"7414","7d75b08b":"7826","6875c492":"8610",f4f34a3a:"8636",bc9d517c:"8674","1e4232ab":"8818","925b3f96":"9003","4c9e35b1":"9035",c844b82d:"9326",f6d5892b:"9503","1be78505":"9514","5f603a65":"9519","7661071f":"9642","0e384e19":"9671",e16015ca:"9700",a0826222:"9811","14eb3368":"9817",e147b432:"9872"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,c)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(c=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],t=c[1],o=c[2],n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(c);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},c=self.webpackChunkkorpusy=self.webpackChunkkorpusy||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();