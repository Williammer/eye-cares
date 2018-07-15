(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)a=o[l],r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={1:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var m=c;s.push([5,0]),n()})({5:function(e,t,n){e.exports=n("Vtdi")},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var i=n("Kw5r"),r=n("kBLR"),s=n.n(r),a=(n("dv4V"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-layout",[n("v-sider",{attrs:{breakpoint:"xs","collapsed-width":0}},[n("div",{staticClass:"logo"}),n("div",{staticClass:"menu"},e._l(e.menuData,function(t){return n("router-link",{key:t.name,attrs:{to:t.path,"active-class":"active",exact:""}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),n("v-layout",{staticClass:"main"},[n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"footer"},[n("div",{staticClass:"credits"},[e._v("\n          Icons made by\n          "),n("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-buddha",title:"Pixel Buddha"}},[e._v("Pixel Buddha")]),e._v("\n          and\n          "),n("a",{attrs:{href:"http://www.freepik.com",title:"Freepik"}},[e._v("Freepik")]),e._v("\n          from\n          "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v("\n          is licensed by\n          "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")])])])],1)],1)],1)}),o=[],c={data:function(){return{menuData:[{name:"Number Memory",path:"/"},{name:"More",path:"/more"}]}}},u=c,m=(n("nNx0"),n("KHd+")),l=Object(m["a"])(u,a,o,!1,null,null,null),f=l.exports,v=n("jE9Z"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"num-mem-container"},[n("span",{staticClass:"num-mem-title"},[e._v("\n    Number Memory Game\n  ")]),n("v-tooltip",{staticClass:"num-mem-tip",attrs:{placement:"bottomRight"}},[n("v-icon",{staticClass:"more-info-btn",attrs:{type:"info-circle-o"}}),n("div",{attrs:{slot:"content"},slot:"content"},[n("span",{staticClass:"num-mem-intro"},[e._v("\n        Number memory game practice the eyes and brain by memorizing a number in a short period of glimpse time.\n        "),n("br"),e._v("\n        It is a good exercise for photographic memory, which helps keep the eyes active and vigorous.\n        "),n("br"),n("br"),e._v("\n        The larger the digits and shorter the glimpse time, the more challenging it is.\n        "),n("br"),n("br"),e._v("\n        Have fun practicing the brain and eyes!\n      ")])])],1),n("div",{staticClass:"num-mem-main"},[n("div",{staticClass:"num-mem-ctrl-panel"},[n("div",{staticClass:"num-mem-inputs"},[n("label",{attrs:{for:"min-digit"}},[e._v("Digits range (Min - Max):")]),n("v-input-number",{staticClass:"digits",attrs:{min:3,max:e.maxDigits,name:"min-digit"},model:{value:e.minDigits,callback:function(t){e.minDigits=t},expression:"minDigits"}}),n("label",{attrs:{for:"max-digit"}},[e._v("- ")]),n("v-input-number",{staticClass:"digits",attrs:{min:e.minDigits,name:"max-digit"},model:{value:e.maxDigits,callback:function(t){e.maxDigits=t},expression:"maxDigits"}}),n("br",{staticClass:"input-divider"}),n("label",{attrs:{for:"recite-time"}},[e._v("Glimpse time(ms):")]),n("v-input-number",{attrs:{name:"recite-time"},model:{value:e.reciteTime,callback:function(t){e.reciteTime=t},expression:"reciteTime"}})],1),n("v-button",{staticClass:"start-btn",attrs:{type:"error",size:"large"},on:{click:e.setupNumMemory}},[e._v("\n        Start new game\n      ")]),e.numbers.length?n("v-button",{staticClass:"recite-all-btn",attrs:{type:"primary",size:"large"},on:{click:e.memorizeAll}},[e._v("\n        Memorize one by one\n      ")]):e._e()],1),n("ul",{staticClass:"num-mem-playground"},e._l(e.numbers,function(t,i){var r=t.num;return n("num-memory-row",{key:i+"-"+r,attrs:{idx:i,num:r,reciteTime:e.reciteTime,eventHub:e.eventHub}})})),e.allDone?n("div",{staticClass:"num-mem-win"},[n("div",{staticClass:"icon"}),n("span",[e._v("You win!")]),n("p",[e._v("You can memorize these numbers again, or challenge bigger max digits, shorter glimpse time!")])]):e._e()])],1)},p=[],h=(n("9XZr"),n("a1Th"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return!0===e.answered?n("li",{staticClass:"row-container"},[n("span",{staticClass:"mem-verify-result",class:{verified:e.verified}},[e._v("\n    "+e._s(!0===e.verified?"✔ correct":"✘ incorrect")+"!\n  ")]),!1===e.verified?n("v-button",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"mem-play-btn",attrs:{ghost:"",type:"primary",size:"large"},on:{click:e.startRecite}},[e._v("\n      Retry\n  ")]):e._e()],1):!0===e.recited?n("li",{staticClass:"row-container"},[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"mem-answer",domProps:{value:e.answer},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.startVerify(t):null},input:function(t){t.target.composing||(e.answer=t.target.value)}}}),n("v-button",{attrs:{type:"success",size:"large"},on:{click:e.startVerify}},[e._v("\n    OK\n  ")])],1):n("li",{staticClass:"row-container"},[n("span",{staticClass:"mem-number",class:{reciting:e.reciting}},[e._v("\n    "+e._s(e.reciting?e.num:e.num.length+" digits number")+"\n  ")]),e.reciting?e._e():n("v-button",{staticClass:"mem-play-btn",attrs:{size:"large"},on:{click:e.startRecite}},[e._v("\n    Memorize\n  ")])],1)}),b=[],g=(n("xfY5"),{name:"num-memory-row",props:{idx:Number,num:String,reciteTime:Number,eventHub:Object},directives:{focus:{inserted:function(e){e.focus()}}},data:function(){return{answer:"",answered:!1,verified:!1,recited:!1,reciting:!1}},mounted:function(){this.eventHub&&this.eventHub.$on("start",this.onStartEvent)},beforeDestroy:function(){this.eventHub&&this.eventHub.$off("start",this.onStartEvent)},methods:{onStartEvent:function(e){e===this.idx&&this.startRecite()},startRecite:function(){var e=this;this.reciteTimer=setTimeout(function(){e.onReciteEnded()},this.reciteTime),this.answered=!1,this.verified=!1,this.recited=!1,this.reciting=!0},onReciteEnded:function(){this.recited=!0,this.reciting=!1,clearTimeout(this.reciteTimer)},startVerify:function(){this.answered=!0,this.answer===this.num?(this.answer="",this.verified=!0,this.eventHub&&this.eventHub.$emit("done",this.idx)):this.answer=""}}}),y=g,w=(n("jIdA"),Object(m["a"])(y,h,b,!1,null,"49c21230",null)),_=w.exports,x={name:"num-memory",components:{NumMemoryRow:_},mounted:function(){this.eventHub.$on("done",this.onNumDoneEvent)},beforeDestroy:function(){this.eventHub.$off("done",this.onNumDoneEvent)},data:function(){return{numbers:[],minDigits:3,maxDigits:4,reciteTime:300,notifyNext:!1,eventHub:new i["default"]}},computed:{allDone:function(){return this.numbers.length&&this.numbers.every(function(e){var t=e.done;return!0===t})}},methods:{setupNumMemory:function(){this.numbers.length=0,this.notifyNext=!1,this.numbers=this.generateNumbers(this.minDigits,this.maxDigits)},memorizeAll:function(){this.notifyNext=!0,this.eventHub.$emit("start",0)},generateNumbers:function(e,t){var n=[],i=e;while(i<=t)n.push({num:this.generateNumber(i),done:!1}),n.push({num:this.generateNumber(i),done:!1}),i+=1;return n},generateNumber:function(e){var t=Math.floor(Math.random()*Math.pow(10,e)).toString();return t.padStart(e,"0")},onNumDoneEvent:function(e){this.numbers[e].done=!0,this.notifyNext&&this.eventHub.$emit("start",e+1)}}},C=x,k=(n("yEnX"),Object(m["a"])(C,d,p,!1,null,null,null)),N=k.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"more"},[e._v("\n  More eye care games are coming soon...\n")])},j=[],M=(n("e1LD"),{}),E=Object(m["a"])(M,D,j,!1,null,null,null),O=E.exports;i["default"].use(v["a"]);var T=new v["a"]({routes:[{path:"/",name:"num-memory",component:N},{path:"/more",name:"more",component:O}]}),H=n("lIOY");Object(H["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["default"].config.productionTip=!1,i["default"].use(s.a),new i["default"]({router:T,render:function(e){return e(f)}}).$mount("#app")},boi5:function(e,t,n){},e1LD:function(e,t,n){"use strict";var i=n("p0Sl"),r=n.n(i);r.a},ejL8:function(e,t,n){},jIdA:function(e,t,n){"use strict";var i=n("ejL8"),r=n.n(i);r.a},nNx0:function(e,t,n){"use strict";var i=n("boi5"),r=n.n(i);r.a},p0Sl:function(e,t,n){},rIP5:function(e,t,n){},yEnX:function(e,t,n){"use strict";var i=n("rIP5"),r=n.n(i);r.a}});
//# sourceMappingURL=app.9e4d56d4.js.map