(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0ef3b152":"b1e21872","chunk-1605fde5":"a4cc6383","chunk-2ace7906":"28811e37","chunk-2caf849e":"aa663b72","chunk-3eef67dc":"9b39e8f0","chunk-59acbc11":"a451183d","chunk-79dc1848":"3ccb9434","chunk-f33138b0":"72a272ea"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0ef3b152":1,"chunk-1605fde5":1,"chunk-2ace7906":1,"chunk-2caf849e":1,"chunk-3eef67dc":1,"chunk-59acbc11":1,"chunk-79dc1848":1,"chunk-f33138b0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0ef3b152":"cb569a49","chunk-1605fde5":"8c9cada8","chunk-2ace7906":"ba3d1d72","chunk-2caf849e":"e2720f16","chunk-3eef67dc":"afb52915","chunk-59acbc11":"aa40c317","chunk-79dc1848":"2e655fba","chunk-f33138b0":"f0336a07"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=n("2877"),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),s=i.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"start"},[e.showloading?n("div",{staticClass:"loading"},[e._m(0)]):e._e(),n("div",{staticClass:"start_header"},[n("svg",{staticClass:"icon cutlery",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-cutlery"}})]),e._v("\n        用餐人数\n    ")]),n("div",{staticClass:"start_content"},[n("p",{staticClass:"noticed"},[e._v("请选择正确的用餐人数，小二马上给你送餐具")]),n("ul",e._l(12,function(t){return n("li",{key:t,on:{click:function(n){return e.choosePeopleNumber(t)}}},[n("span",{staticClass:"people_number",class:{active:t==e.currentPeopleNumber}},[e._v(e._s(t)+"人")])])}),0),n("div",{staticClass:"content_mark"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mark,expression:"mark"}],staticClass:"mark_input",attrs:{type:"text",placeholder:"请填写您的口味、偏好等"},domProps:{value:e.mark},on:{input:function(t){t.target.composing||(e.mark=t.target.value)}}}),n("ul",{staticClass:"mark_tag_list"},e._l(e.markList,function(t,r){return n("li",{key:r,staticClass:"mark_tag_item",on:{click:function(n){return e.getMark(t)}}},[e._v(e._s(t))])}),0)])]),n("div",{staticClass:"start_footer"},[n("div",{staticClass:"start",on:{click:e.onStart}},[e._v("开始点餐")])])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("span",[e._v("❤")]),n("span",[e._v("❤")]),n("span",[e._v("❤")]),n("span",[e._v("❤")]),n("span",[e._v("❤")]),n("p",[e._v("加载中")])])}],p=n("ea52"),d=n("8ede"),m={name:"start",data:function(){return{currentPeopleNumber:1,mark:"",markList:["不要辣椒","打包带走","不要蒜"],api:p["a"].api,showloading:!0}},methods:{choosePeopleNumber:function(e){this.currentPeopleNumber=e,console.log(this.currentPeopleNumber)},getMark:function(e){this.mark+=e+" "},onStart:function(){var e=this,t=this.uid;this.$axios.post(this.api+"api/addPeopleInfo",{uid:t,p_num:this.currentPeopleNumber,p_mark:this.mark}).then(function(t){console.log(t),"true"===t.data.success&&e.$router.push({path:"/home"})}).catch(function(e){console.log(e)})},getPeopleInfo:function(){var e=this;this.$axios.get(this.api+"api/peopleInfoList?uid="+this.uid).then(function(t){console.log(t),t.data.result.length>0?(console.log("加载动画"),e.$router.push({path:"/home"})):e.showloading=!1}).catch(function(e){console.log(e)})}},created:function(){var e=this.$router.history.current.query.uid;e?(d["a"].set("uid",e),this.uid=e,this.getPeopleInfo()):this.$router.push("/error")},mounted:function(){}},v=m,b=(n("97f7"),Object(c["a"])(v,f,h,!1,null,"06c8ce30",null)),g=b.exports;r["a"].use(l["a"]);var k=new l["a"]({routes:[{path:"*",redirect:"/start"},{path:"/start",name:"start",component:g},{path:"/home",name:"home",component:function(){return n.e("chunk-2ace7906").then(n.bind(null,"bb51"))}},{path:"/hot",name:"hot",component:function(){return n.e("chunk-f33138b0").then(n.bind(null,"0b70"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-3eef67dc").then(n.bind(null,"2d3b"))}},{path:"/detail",name:"detail",component:function(){return n.e("chunk-2caf849e").then(n.bind(null,"c84b"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-1605fde5").then(n.bind(null,"b789"))}},{path:"/order",name:"order",component:function(){return n.e("chunk-0ef3b152").then(n.bind(null,"cf2a"))}},{path:"/updateInfo",name:"updateInfo",component:function(){return n.e("chunk-59acbc11").then(n.bind(null,"6e34"))}},{path:"/error",name:"error",component:function(){return n.e("chunk-79dc1848").then(n.bind(null,"bcec"))}}]}),_=n("2f62");r["a"].use(_["a"]);var y=new _["a"].Store({state:{},mutations:{},actions:{}}),w=n("2427"),C=n.n(w),P=n("70bb"),S=n.n(P);r["a"].config.productionTip=!1,r["a"].prototype.$axios=C.a,r["a"].use(new S.a({debug:!0,connection:"http://a.itying.com?roomid=1",vuex:{store:y}})),new r["a"]({router:k,store:y,render:function(e){return e(s)}}).$mount("#app")},"85d8":function(e,t,n){},"8ede":function(e,t,n){"use strict";var r={set:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(window.localStorage.getItem(e))},remove:function(e){window.localStorage.removeItem(e)}};t["a"]=r},"97f7":function(e,t,n){"use strict";var r=n("85d8"),a=n.n(r);a.a},ea52:function(e,t,n){"use strict";var r={api:"http://a.itying.com/"};t["a"]=r}});
//# sourceMappingURL=app.2c4c1da1.js.map