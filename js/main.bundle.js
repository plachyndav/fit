!function(o){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=o,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,o){o(1),t.exports=o(2)},function(t,e,o){"use strict";var n,r,c,u;n=document.querySelector(".js-phone"),r=["https://www.dropbox.com/s/un8g080s3sunnzf/phone0.png?dl=1","https://www.dropbox.com/s/ugsm5vcrj4hsbiy/phone1.png?dl=1","https://www.dropbox.com/s/wc2n1bkhu6bkdgg/phone2.png?dl=1","https://www.dropbox.com/s/17f3zf5x3hmp5qt/phone3.png?dl=1","https://www.dropbox.com/s/6lq106c2iw95adh/phone4.png?dl=1"],c=document.querySelector(".js-toggles-list"),u=c.querySelectorAll(".js-toggle"),c.addEventListener("click",function(t){if(t.target.classList.contains("js-toggle")){u.forEach(function(t){t.classList.remove("toggles__button--active")}),t.target.classList.add("toggles__button--active");var e=Array.prototype.indexOf.call(u,t.target);n.src=r[e]}})},function(t,e,o){}]);