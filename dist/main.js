(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(776),t.b),l=i()(o()),p=d()(s);l.push([e.id,"@font-face {\n    font-family: Poppins;\n    src: url("+p+");\n}\n\n*, *::after, *::before{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Poppins, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nbody{\n    display: flex;\n    flex-grow: 1;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    width: 100%;\n    height: 100%;\n}\n.header{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: thick solid green;\n    height: 10vh;\n    padding: 2vh;\n}\n.body{\n    display: flex;\n    flex-direction: row-reverse;\n    flex-grow: 1;\n}\n.sidebar{\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    gap: 20px;\n    width: 25vw;\n    height: 90vh;\n    border: thin solid rgba(0, 0, 0, 0.212);\n}\nh2{\n    margin: 1vw;\n}\n.summary{\n    display: flex;\n    flex-direction: column;\n}\nh2::after{\n    content: \"\";\n    display: block;\n    border: 1px solid black;\n}\n\n.tile{\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    height: 5vh;\n    padding-left: 1vw;\n    align-items: center;\n    margin-left: 1vw;\n    margin-right: 1vw;\n    cursor: pointer;\n}\n\n.selected{\n    background-color: rgba(255, 217, 0, 0.452);\n    transition: 0.2s ease-in-out;\n}\n\n.tile:not(.selected):hover{\n    background-color: beige;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 1vh;\n    flex-grow: 1;\n    min-width: 75vw;\n    height: 90vh;\n    padding: 1vw;\n    padding-bottom: 0;\n}\n\n.todoContainer{\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 1vh;\n}\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 5vh;\n    margin-top: auto;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    height: 6vh;\n    width: 100%;\n    border: 2px solid black;\n    padding: 5px;\n    gap: 2vw;\n    font-size: 1.5rem;\n    color: black;\n}\n\n.item{\n    outline: none;\n    border: none;\n    font-size: 1.5rem;\n}\n.item:disabled{\n    background-color: white;\n    color: red;\n}\n.addItem > .item::placeholder{\n    color: grey;\n    font-style: italic;\n\n}\n.addIcon{\n    height: 2.5rem;\n    margin-left: auto;\n    transition: transform 0.4s ease-in-out;\n}\n.addIcon:hover{\n    transform: rotate(180deg);\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"]{\n    height: 40px;\n    width: 40px;\n    cursor: pointer;\n    accent-color: green;\n}\n\n.taskDescription{\n    display: flex;\n    color: grey;\n    font-style: italic;\n    flex-grow: 1;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},776:(e,n,t)=>{e.exports=t.p+"35d26b781dc5fda684cc.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=(()=>{const e=e=>{const n=document.createElement("div"),t=document.createElement("img"),r=document.createElement("p");return r.innerText=e,n.appendChild(t),n.appendChild(r),n.classList.add("tile"),n};return{initializeSidebar:()=>{const n=document.getElementById("sidebar"),t=document.createElement("div");t.classList.add("summary");const r=document.createElement("div");r.classList.add("projects");const o=document.createElement("h2");o.innerText="Summary";const a=e("All Tasks"),i=e("Today"),c=e("This Week"),d=e("Important"),s=document.createElement("h2");s.innerText="Projects";const l=e("Add a project");t.appendChild(o),t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(d),r.appendChild(s),r.appendChild(l),n.appendChild(t),n.appendChild(r)}}})(),n=t.p+"94c8a526c03879287062.png",r=(()=>{const e=(e,n,t)=>{let r=document.querySelector(".todoContainer").childElementCount;const o=document.createElement("div");o.classList.add("todoItem"),o.dataset.number=r+1;const a=document.createElement("input");a.type="checkbox",a.checked=n,a.disabled=n;const i=document.createElement("input");return i.classList.add("item"),i.type="text",i.placeholder=e,i.disabled=t,o.appendChild(a),o.appendChild(i),o};return{todoItemFactory:e,itemCreator:()=>{const t=e("add task...",!0,!1);t.dataset.number=0,t.querySelector(".item").classList.add("taskDescription");const r=document.createElement("img");return r.classList.add("addIcon"),r.src=n,t.appendChild(r),t}}})(),o=()=>{const e=document.querySelector(".footer"),n=document.createElement("p");return n.classList.add("footerText"),n.innerText="The Odin Project - CJ Pineda",e.appendChild(n),e},a=()=>{const e=document.createElement("div");return e.classList.add("footer"),e},i=()=>{const e=document.querySelector(".content"),n=document.createElement("div");n.classList.add("todoContainer"),e.appendChild(n),e.appendChild(r.itemCreator()),e.appendChild(a())},c=()=>{document.querySelector(".todoContainer")},d=(()=>{const n=()=>{const e=document.createElement("div");return e.classList.add("body"),e.appendChild(r()),e.appendChild(t()),e},t=()=>{const e=document.createElement("div");return e.classList.add("sidebar"),e.id="sidebar",e},r=()=>{const e=document.createElement("div");return e.classList.add("content"),e};return{loadPageLayOut:()=>{const t=document.getElementById("DOM");t.appendChild((()=>{const e=document.createElement("div");e.classList.add("header");const n=document.createElement("p");n.classList.add("burger"),n.innerText="///";const t=document.createElement("h1");t.classList.add("title"),t.innerText="TO DO";const r=document.createElement("button");return r.id="lightDarkSwitch",r.innerText="Dark Mode",e.appendChild(n),e.appendChild(t),e.appendChild(r),e})()),t.appendChild(n()),e.initializeSidebar(),i(),c(),o()},body:n,sideBar:t}})(),s={loadEvents:()=>{(()=>{const e=document.querySelector(".burger"),n=document.querySelector(".sidebar");n.style.display="flex",e.addEventListener("click",(()=>{"flex"==n.style.display?n.style.display="none":n.style.display="flex"}))})(),(()=>{document.querySelector(".sidebar");const e=document.querySelectorAll(".tile");e.forEach((n=>{n.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("selected")})),n.classList.add("selected")}))}))})()}},l={loadEvents:()=>{(()=>{const e=document.querySelector(".addIcon"),n=document.querySelector(".taskDescription");e.addEventListener("click",(()=>{""!=n.value&&(localStorage.setItem("task",n.value),window.dispatchEvent(new Event("storage")))}))})(),(()=>{const e=document.querySelector(".todoContainer");window.addEventListener("storage",(()=>{console.log("hello"),e.appendChild(r.todoItemFactory(localStorage.getItem("task"),!1,!0))}))})()}};var p=t(379),u=t.n(p),m=t(795),f=t.n(m),h=t(569),v=t.n(h),g=t(565),y=t.n(g),b=t(216),x=t.n(b),w=t(589),E=t.n(w),C=t(426),L={};L.styleTagTransform=E(),L.setAttributes=y(),L.insert=v().bind(null,"head"),L.domAPI=f(),L.insertStyleElement=x(),u()(C.Z,L),C.Z&&C.Z.locals&&C.Z.locals,d.loadPageLayOut(),s.loadEvents(),l.loadEvents()})()})();