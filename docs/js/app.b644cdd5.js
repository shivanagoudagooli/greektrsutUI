(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-015cc367":"949aeb94","chunk-3488eed2":"0b1fceb2","chunk-5141177e":"34898feb","chunk-2616965f":"bd4f749a","chunk-3dc69d38":"9deb9907","chunk-4bc6af4e":"319abf25","chunk-53291029":"7d3da33d","chunk-563e2230":"bd7e3b51","chunk-48a720b1":"8420bee1","chunk-fd4a870e":"75ef5856"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-015cc367":1,"chunk-3488eed2":1,"chunk-5141177e":1,"chunk-2616965f":1,"chunk-3dc69d38":1,"chunk-4bc6af4e":1,"chunk-53291029":1,"chunk-563e2230":1,"chunk-48a720b1":1,"chunk-fd4a870e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-015cc367":"18fa5a18","chunk-3488eed2":"3a84397e","chunk-5141177e":"abc9af63","chunk-2616965f":"60628284","chunk-3dc69d38":"ab8c4ab4","chunk-4bc6af4e":"de1c688f","chunk-53291029":"88e5bb65","chunk-563e2230":"da5aa69c","chunk-48a720b1":"e0d3fef5","chunk-fd4a870e":"ab8c4ab4"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0f1a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{background:"#e7e7e7"},attrs:{id:"app"}},[n("AdminPage",{attrs:{msg:"ADMIN UI"}})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"data-count"},[e._v(e._s(e.msg))]),n("div",{staticClass:"delete-btn"},[n("Button",{staticClass:"btn-style",attrs:{primary:"",plus:!1,mButtonProperty:e.mButtonProperty},on:{"on-btn-click":function(t){return e.deleteContent()}}},[e._v("Delete Selected")])],1),n("Tabel",{staticClass:"table-stripped",attrs:{mTableProperty:e.mTableProperty,headerArray:e.jobHeader,data:e.jobData,offset:e.offset,prechecked:e.setPrechecked},on:{filters:function(t){return e.getFilterData(t)}}}),n("Pagination",{staticClass:"tw__pagination",attrs:{totalPages:e.perPage,maxVisibleButtons:e.maxVisibleButtons,currentPage:e.currentPage,hidePrevious:!0},on:{pagechanged:e.onPageChange}})],1)},u=[],i=n("5530"),l=n("2909"),s=(n("d81d"),n("fb6a"),n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),f={name:"AdminPage",data:function(){return{mButtonProperty:{},mTableProperty:{},perPage:0,maxVisibleButtons:3,currentPage:1,jobHeader:[],jobData:[],offset:0}},props:{msg:String},computed:{setPrechecked:function(){var e=[];return e=this.jobData.map((function(e){return e})),console.log("getaList",e),e}},created:function(){this.mTableProperty={width:"90vw"},this.mButtonproperty={defaultProperty:{height:"35px",width:"100%"}},this.jobHeader=[{type:"smallColumn",textHeader:"INDEX",filterType:!1,valueType:"index",value:1},{type:"lg5",textHeader:"NAME",valueType:"column",value:"name",filterType:"search",filterData:{label:"Name",showfilter:!1,filterName:"nameQuery",default:""}},{type:"lg5",textHeader:"EMAIL",valueType:"column",value:"email",filterType:"search",filterData:{label:"Email",showfilter:!1,filterName:"emailQuery",default:""}},{type:"lg5",textHeader:"ROLE",valueType:"column",value:"role",filterType:"search",filterData:{label:"Role",showfilter:!1,filterName:"roleQuery",default:""}},{type:"sm3",valueType:"checkbox",textHeader:"SELECT",value:"id",checkArr:{checked:function(e,t){console.log("checkedArr",t,Object(l["a"])(e))}}},{type:"text",textHeader:"ACTIONS",filterType:!1,valueType:"action",value:{edit:function(e){console.log(e)},delete:function(e){console.log(e)}}}],this.getData()},watch:{perPage:function(){this.perPage>3?this.maxVisibleButtons=3:this.maxVisibleButtons=this.perPage}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["actGetData"])),{},{onPageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e)this.offset=10*(e-1),this.getData(e);else{var t=this.currentPage;this.getData(t)}},getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t,this.actGetData().then((function(n){console.log(e.currentPage,"this.currentPage"),n.errorcode?(e.perPage=0,e.jobData=[]):n.length&&(n.length<=10&&(e.currentPage=1),1===e.currentPage?e.jobData=n.slice(0,10):2===e.currentPage?e.jobData=n.slice(10,20):3===e.currentPage?e.jobData=n.slice(20,30):4===e.currentPage?e.jobData=n.slice(30,40):5===e.currentPage&&(e.jobData=n.slice(40,50)),console.log(e.jobData,"this.jobData"),e.offset=10*(t-1)),e.perPage=[],e.perPage=Math.ceil(n.length/10)})).catch((function(e){e.status,401===e.status&&console.log(e)}))},getFilterData:function(e){console.log(e,"data")},deleteContent:function(){console.log("clicked")}}),components:{Tabel:function(){return n.e("chunk-5141177e").then(n.bind(null,"adf6"))},Pagination:function(){return n.e("chunk-015cc367").then(n.bind(null,"e121"))},Button:function(){return n.e("chunk-3488eed2").then(n.bind(null,"1b5a"))}}},d=f,h=(n("59d7"),n("2877")),p=Object(h["a"])(d,c,u,!1,null,"0c4c046c",null),g=p.exports,b={name:"App",components:{AdminPage:g}},m=b,v=(n("034f"),Object(h["a"])(m,r,o,!1,null,null,null)),y=v.exports;a["a"].use(s["a"]);var k=new s["a"].Store({state:{},getters:{},mutations:{},actions:{actGetData:function(){var e={method:"GET"};return new Promise((function(t,n){fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",e).then((function(e){e.ok?t(e.json()):n(e)})).catch((function(e){n(e)}))}))}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:k,render:function(e){return e(y)}}).$mount("#app")},"59d7":function(e,t,n){"use strict";n("0f1a")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b644cdd5.js.map