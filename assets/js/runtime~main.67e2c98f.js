(()=>{"use strict";var e,a,f,d,t,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,e=[],b.O=(a,f,d,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],t=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,d,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&d&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",285:"d3100622",533:"b2b675dd",643:"7d2acfd0",657:"5df56ce0",817:"515d6622",931:"3bd47e31",1384:"2d7c697a",1477:"b2f554cd",1713:"a7023ddc",1774:"7149e795",1969:"fb11a714",2048:"d9fe9c14",2106:"4e74341e",2535:"814f3328",2961:"77907768",3085:"1f391b9e",3089:"a6aa9e1f",3343:"071f3319",3569:"9ec77def",3602:"d83466d0",3608:"9e4087bc",4013:"01a85c17",4106:"be520221",4195:"c4f5d8e4",4451:"1613059d",4812:"a1c64443",4897:"ebcc017d",4921:"4b9424a9",5366:"8fa7e880",5374:"831c44b5",5504:"14afe9b9",5858:"c1ebc860",6103:"ccc49370",6191:"14d89f3e",6977:"f712a899",7007:"acab8ddf",7390:"09b985f2",7403:"2f83a820",7414:"393be207",7826:"7d75b08b",7851:"b98c6712",7918:"17896441",8527:"24f15788",8610:"6875c492",8674:"bc9d517c",9503:"f6d5892b",9514:"1be78505",9519:"5f603a65",9551:"ddfa3499",9671:"0e384e19",9811:"a0826222",9817:"14eb3368",9872:"e147b432"}[e]||e)+"."+{53:"e5b6072a",285:"aa8d4d26",533:"eae4c204",643:"dafa8cf5",657:"c237da12",817:"c1b1d36c",931:"bd52a355",1384:"b7d2e700",1477:"a09abb1b",1506:"59788df2",1713:"88716dde",1774:"185f0de2",1969:"af153e90",2048:"818c8eba",2106:"1a63f23a",2529:"412a53af",2535:"51705b06",2961:"28bc5a58",3085:"3bc787d4",3089:"7e627099",3343:"d51ecc98",3569:"62d1978e",3602:"d67374bf",3608:"eea2674a",4013:"24599b98",4106:"a4ed54c9",4195:"b592911b",4451:"b267452b",4812:"d09af740",4897:"bca70439",4921:"2198d11b",4972:"46536be3",5366:"ee6af574",5374:"3172684e",5504:"d09bbc77",5858:"5a069d59",6103:"fdb94e5c",6191:"3b563f53",6977:"89a639d9",7007:"8c99eb4d",7390:"8d00c96f",7403:"d92b1641",7414:"762ec1c3",7826:"281b693d",7851:"5b705812",7918:"1c82adb8",8527:"8c58f597",8610:"9403f1a3",8674:"36ebd945",9503:"227b30c7",9514:"9608bd9f",9519:"133ad798",9551:"f76211a5",9671:"b06c1ea0",9811:"9b8cc246",9817:"a56873e2",9872:"69a25213"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="korpusy:",b.l=(e,a,f,r)=>{if(d[e])d[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",t+f),c.src=e),d[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918",77907768:"2961","935f2afb":"53",d3100622:"285",b2b675dd:"533","7d2acfd0":"643","5df56ce0":"657","515d6622":"817","3bd47e31":"931","2d7c697a":"1384",b2f554cd:"1477",a7023ddc:"1713","7149e795":"1774",fb11a714:"1969",d9fe9c14:"2048","4e74341e":"2106","814f3328":"2535","1f391b9e":"3085",a6aa9e1f:"3089","071f3319":"3343","9ec77def":"3569",d83466d0:"3602","9e4087bc":"3608","01a85c17":"4013",be520221:"4106",c4f5d8e4:"4195","1613059d":"4451",a1c64443:"4812",ebcc017d:"4897","4b9424a9":"4921","8fa7e880":"5366","831c44b5":"5374","14afe9b9":"5504",c1ebc860:"5858",ccc49370:"6103","14d89f3e":"6191",f712a899:"6977",acab8ddf:"7007","09b985f2":"7390","2f83a820":"7403","393be207":"7414","7d75b08b":"7826",b98c6712:"7851","24f15788":"8527","6875c492":"8610",bc9d517c:"8674",f6d5892b:"9503","1be78505":"9514","5f603a65":"9519",ddfa3499:"9551","0e384e19":"9671",a0826222:"9811","14eb3368":"9817",e147b432:"9872"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>d=e[a]=[f,t]));f.push(d[2]=t);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,d[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(d in c)b.o(c,d)&&(b.m[d]=c[d]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkkorpusy=self.webpackChunkkorpusy||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();