(()=>{"use strict";var e,a,f,r,t,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,e=[],b.O=(a,f,r,t)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],r=e[i][1],t=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&t||c>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,t<c&&(c=t));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,r,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(t,c),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",589:"f5f9e5b8",643:"7d2acfd0",657:"5df56ce0",931:"3bd47e31",948:"8717b14a",1178:"65eb553c",1759:"04cabfe3",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2366:"2f606885",2535:"814f3328",2614:"e8c3e151",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3835:"492dc712",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4471:"ce9eaadd",4607:"533a09ca",5193:"669c4b6e",5589:"5c868d36",5766:"87239603",6103:"ccc49370",6111:"55ac48a0",6221:"f5e9d18e",6454:"c8c4dc4a",6504:"822bd8ab",6560:"d039d8c3",6755:"e44a2883",6873:"5506eec0",7414:"393be207",7418:"a9fb1f93",7918:"17896441",8610:"6875c492",8632:"61dfb791",8636:"f4f34a3a",8818:"1e4232ab",8820:"deaee1e1",8876:"e56863d7",9003:"925b3f96",9503:"f6d5892b",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9773:"aef8ebd5",9817:"14eb3368",9872:"e147b432"}[e]||e)+"."+{53:"9153f12e",589:"b25d35ae",643:"dafa8cf5",657:"c237da12",931:"bd52a355",948:"011a9a27",1178:"c0f230e7",1506:"59788df2",1759:"63836b23",1914:"ef9dba3d",2267:"0208618e",2362:"53d413f7",2366:"742077f9",2529:"412a53af",2535:"446f79e5",2614:"ce4fb73c",2859:"977db1d1",3085:"3bc787d4",3089:"7e627099",3514:"3e312453",3608:"eea2674a",3792:"83412d68",3835:"ebfcd255",4013:"24599b98",4193:"0d2bc3e6",4195:"25e60d16",4471:"db5735bc",4607:"97f74852",4972:"46536be3",5193:"21878363",5589:"334926cd",5766:"f43b9412",6103:"fdb94e5c",6111:"01ebaf04",6221:"b8d7c80e",6454:"7e8b7a0b",6504:"93ea945d",6560:"302deb25",6755:"5cec7811",6873:"ce3d6ad2",7414:"539e5fe8",7418:"04f295bb",7918:"1c82adb8",8610:"9403f1a3",8632:"216b3a4f",8636:"311aa7df",8818:"fe1a4dbc",8820:"cf9ae949",8876:"9a989868",9003:"4c9647c9",9503:"1074ff81",9514:"9608bd9f",9642:"5018fd3c",9671:"c4a87f79",9773:"d67d5f13",9817:"a56873e2",9872:"b83708ac"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},t="korpusy:",b.l=(e,a,f,c)=>{if(r[e])r[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+f),d.src=e),r[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var t=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/korpusy/",b.gca=function(e){return e={17896441:"7918",59362658:"2267",87239603:"5766","935f2afb":"53",f5f9e5b8:"589","7d2acfd0":"643","5df56ce0":"657","3bd47e31":"931","8717b14a":"948","65eb553c":"1178","04cabfe3":"1759",d9f32620:"1914",e273c56f:"2362","2f606885":"2366","814f3328":"2535",e8c3e151:"2614","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","492dc712":"3835","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195",ce9eaadd:"4471","533a09ca":"4607","669c4b6e":"5193","5c868d36":"5589",ccc49370:"6103","55ac48a0":"6111",f5e9d18e:"6221",c8c4dc4a:"6454","822bd8ab":"6504",d039d8c3:"6560",e44a2883:"6755","5506eec0":"6873","393be207":"7414",a9fb1f93:"7418","6875c492":"8610","61dfb791":"8632",f4f34a3a:"8636","1e4232ab":"8818",deaee1e1:"8820",e56863d7:"8876","925b3f96":"9003",f6d5892b:"9503","1be78505":"9514","7661071f":"9642","0e384e19":"9671",aef8ebd5:"9773","14eb3368":"9817",e147b432:"9872"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)f.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>r=e[a]=[f,t]));f.push(r[2]=t);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var t=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+c+")",d.name="ChunkLoadError",d.type=t,d.request=c,r[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var r,t,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)b.o(d,r)&&(b.m[r]=d[r]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)t=c[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkkorpusy=self.webpackChunkkorpusy||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();