(()=>{var e={760:()=>{var e=document.querySelector("#left"),t=document.querySelector("#right"),r=document.querySelector("#items"),o=getComputedStyle(r);t.addEventListener("click",(function(e){e.preventDefault();var t=parseInt(o.right);t||(t=0),t<500&&(r.style.right=t+250+"px")})),e.addEventListener("click",(function(e){e.preventDefault();var t=parseInt(o.right);t||(t=0),t>0&&(r.style.right=t-250+"px")}))},763:()=>{document.querySelector(".calculate__progress").addEventListener("input",(function(){var e=this.value;this.style.background="linear-gradient(to right, #FEE600 0%, #FEE600 ".concat(e,"%, #E1E1E3 ").concat(e,"%, #E1E1E3 100%)"),console.log("right")})),document.querySelector(".second").addEventListener("input",(function(){var e=this.value;this.style.background="linear-gradient(to right, #FEE600 0%, #FEE600 ".concat(e,"%, #E1E1E3 ").concat(e,"%, #E1E1E3 100%)"),console.log("right")}))},247:()=>{var e,t,r,o,n,l,c;o=document.querySelector(".scrollable"),n=document.querySelector(".scrollable .content-wrapper"),document.querySelector(".scrollable .content"),l=0,c=!1,(e=document.createElement("div")).className="scroller",(r=o.offsetHeight/n.scrollHeight*o.offsetHeight)/o.offsetHeight<1&&(e.style.height=r+"px",o.appendChild(e),o.className+=" showScroll",e.addEventListener("mousedown",(function(e){normalizedPosition=e.pageY,l=n.scrollTop,c=!0})),window.addEventListener("mouseup",(function(e){c=!1})),window.addEventListener("mousemove",(function(e){if(!0===c){var t=(e.pageY-normalizedPosition)*(n.scrollHeight/o.offsetHeight);n.scrollTop=l+t}}))),n.addEventListener("scroll",(function(r){var l=r.target.scrollTop/n.scrollHeight;t=l*(o.offsetHeight-5),e.style.top=t+"px"}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(763),r(760),r(247)})()})();