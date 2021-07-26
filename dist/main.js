(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>i});var a=e(645),r=e.n(a)()((function(n){return n[1]}));r.push([n.id,'body {\n  background-color: white;\n}\n\nh1,\nh3,\nh6,\np {\n  margin: unset;\n}\n\nbutton {\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n}\n\n.container {\n  width: 500px;\n  min-height: max-content;\n  background: #f6f6f6;\n  box-shadow: 3px 3px 3px 3px grey;\n  justify-items: stretch;\n  display: grid;\n  grid-template-rows: 36px 36px auto 36px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;\n}\n\n.top {\n  display: grid;\n  grid-template-columns: 90% 10%;\n  min-height: 36px;\n  align-items: center;\n  background-color: white;\n}\n\n.title {\n  text-align: start;\n  font-family: monospace;\n  padding-left: 12px;\n  font-size: 14px;\n  grid-row-start: 1;\n  margin: unset;\n}\n\n#task-form {\n  min-height: 36px;\n  grid-row-start: 2;\n  font-family: monospace;\n  background-color: white;\n  border: 1px solid #dcdcdc7a;\n  display: grid;\n  grid-template-columns: auto 10%;\n}\n\n.text {\n  width: 90%;\n  font-style: italic;\n  border: unset;\n  padding-left: 12px;\n}\n\n.text::first-letter {\n  text-transform: capitalize !important;\n}\n\ninput:focus-visible {\n  border: unset;\n  outline: unset;\n}\n\nul {\n  grid-row-start: 3;\n  margin: unset;\n  padding: unset;\n  background-color: white;\n  list-style-type: none;\n}\n\nli {\n  padding: unset;\n  border: 1px solid #dcdcdc7a;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 10% auto 10%;\n  padding: 1%;\n  align-items: center;\n}\n\n.description {\n  font-family: Georgia, "Times New Roman", Times, serif;\n  font-weight: 200;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border: unset;\n  background: transparent;\n}\n\n.circle {\n  width: 28px;\n  height: 28px;\n  background-color: black;\n}\n\n#add-btn {\n  opacity: 0.3;\n}\n\n.add-btn-img {\n  width: 14px;\n  opacity: 0.3;\n}\n\n.edit-btn {\n  cursor: all-scroll;\n}\n\n.refresh-btn {\n  text-align: end;\n}\n\n.dragging {\n  opacity: 0.2;\n  cursor: all-scroll;\n}\n\n#clear-btn {\n  font-family: Georgia, "Times New Roman", Times, serif;\n  font-size: 14px;\n}\n',""]);const i=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);a&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var i={},o=[],d=0;d<n.length;d++){var s=n[d],c=a.base?s[0]+a.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:r(m,a),references:1}),o.push(u)}return o}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=e(i[o]);t[d].references--}for(var s=a(n,r),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a=e.css,r=e.media,i=e.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},72:(n,t,e)=>{n.exports=e.p+"a4735b49ce2a59d1cec5.svg"}},t={};function e(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return n[a](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),t=e.n(n),a=e(795),r=e.n(a),i=e(569),o=e.n(i),d=e(565),s=e.n(d),c=e(216),l=e.n(c),u=e(589),p=e.n(u),m=e(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=e(72);let h=null;let b=null;window.updateLocalStorage=function(n){!0===n?null===b&&(b=JSON.parse(window.localStorage.getItem("tasks"))):window.localStorage.setItem("tasks",JSON.stringify(b)),window.displayTasks()},window.callAddTask=function(){!function(n){const t=document.getElementById("description").value,e=t.charAt(0).toUpperCase();t.replace(t.charAt(0),e);const a=t,r=(new Date).getMilliseconds();n||(n=[]);const i=n.length+1;if(n&&""!==a){const t={description:a,completed:!1,index:i,id:r};n.push(t),n.sort(((n,t)=>{const e=n.position,a=t.position;return e<a?-1:e>a?1:0})),window.update(n)}}(b)},window.restart=function(){b=null,window.updateLocalStorage(!1)},window.update=function(n){if(n)b=n;else{const n=function(){const n=document.getElementsByTagName("li"),t=[];return 0!==n.length&&Array.from(n).forEach(((n,e)=>{const a=n.getElementsByTagName("div")[0],r=a.getElementsByTagName("input")[0].checked,i=a.getElementsByTagName("input")[0].name,o={completed:r,description:a.getElementsByTagName("input")[1].value,index:e,id:i};t.push(o)})),t}();b=n}window.updateLocalStorage(!1)},window.displayTasks=function(){const n=document.getElementById("container"),t=document.createElement("ul");t.id="list",b&&b.forEach(((n,e)=>{const{description:a,id:r}=n,i=document.createElement("li");i.id=e,i.addEventListener("drop",(n=>{i.classList.remove("dragging"),function(n){n.preventDefault();const t=n.dataTransfer.getData("text"),e=document.getElementById(t),a=document.getElementById(e.data),r=document.getElementById(h),i=r.getElementsByTagName("div")[0],o=e.data,d=i.data;e.data=d,i.data=o,a.appendChild(i),a.removeChild(e),r.appendChild(e),window.update()}(n)})),i.addEventListener("dragover",(n=>{var t;(t=n).preventDefault(),h=t.currentTarget.id}));const o=document.createElement("div"),d=`div${n.index}`;o.classList.add("task"),o.id=d,o.classList.add("drag-div"),o.draggable=!0,o.addEventListener("click",(()=>function(n,t){const e=document.getElementsByClassName("drag-div");Array.from(e).forEach((e=>{if(e.id===n){e.style.backgroundColor="#fff59c78";const a=e.getElementsByTagName("img")[0];a.src='<i class="far fa-trash-alt"></i>',a.alt="delete",a.style.cursor="pointer",a.addEventListener("click",(()=>{!function(n,t){const e=n.replace("div",""),a=[];t.forEach((n=>{n.index!==parseInt(e,10)&&a.push(n)})),window.update(a)}(n,t)}))}else{e.style.backgroundColor="white";const n=e.getElementsByTagName("img")[0];n.src=g,n.style.cursor="all-scroll"}}))}(d,b))),o.data=e,o.addEventListener("dragstart",(n=>{var t;o.classList.add("dragging"),(t=n).dataTransfer.setData("text",t.currentTarget.id)}));const s=document.createElement("input");s.addEventListener("click",(()=>{window.update()})),s.type="checkbox",s.name=n.id,s.id=`input-check-${r}`,s.checked=n.completed;const c=document.createElement("input");c.id=`li-description-${r}`,c.type="text",c.classList.add("description"),c.placeholder=a,c.value=a||null,c.data=n.index,c.addEventListener("change",(()=>{window.update()}));const l=document.createElement("button");l.classList.add("edit-btn"),l.id=`edit-btn-${r}`,l.type="button";const u=document.createElement("img");u.src=g,u.alt="image",u.classList.add("add-btn-img"),l.appendChild(u),o.appendChild(s),o.appendChild(c),o.appendChild(l),i.appendChild(o),t.appendChild(i)})),n.innerHTML="\n  <div class='top'>\n  <p class='title'>Today's To Do</p>\n           <button id='refresh-btn' type='button' \n            onclick='window.restart()'\n            type='button'> \n           <i class='fas  add-btn-img fa-sync-alt'></i>\n            </button>\n  </div>       \n          <form onsubmit='window.callAddTask()' id='task-form'>\n            <input\n              id='description'\n              type='text'\n              class='text'\n              placeholder='Add to your list ...' autofocus\n            />\n            <button id='add-btn' type='submit' \n            type='button'> \n          <i class='fas reflesh fa-level-down-alt fa-rotate-90'></i>\n            </button>\n          </form>       \n          ";const e=document.createElement("button");e.id="clear-btn",e.addEventListener("click",(()=>{!function(n){const t=[];n.forEach((n=>{!0!==n.completed&&t.push(n)})),window.update(t)}(b)})),e.textContent="Clear completed tasks.",n.insertAdjacentElement("beforeend",t),n.insertAdjacentElement("beforeend",e)},window.updateLocalStorage(!0),window.displayTasks()})()})();