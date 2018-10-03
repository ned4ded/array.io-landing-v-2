"use strict";var _createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}document.addEventListener("DOMContentLoaded",function(){document.querySelector("html").classList.remove("no-js");var t=Array.from(document.querySelectorAll("[data-toggle-on]")).map(function(t){var e=t.dataset.toggleOn?JSON.parse(t.dataset.toggleOn):[],n=t.dataset.toggleOff?JSON.parse(t.dataset.toggleOff):[];return{toggler:t,on:e.map(function(t){return document.getElementById(t)}),off:n.map(function(t){return document.getElementById(t)})}});t.forEach(function(t){var n=t.toggler,i=t.on,o=t.off;n.addEventListener("click",function e(t){t.preventDefault(),n.removeEventListener("click",e),anime({targets:n,opacity:[1,0],duration:500,easing:"linear",height:"ido-more"==n.getAttribute("id")?[n.firstElementChild.scrollHeight,0]:null,complete:function(t){n.dataset.visible=!1,i.forEach(function(e,t){t.dataset.visible=!0,"ido-more"==t.getAttribute("id")?anime({targets:t,opacity:[0,1],height:[0,t.firstElementChild.scrollHeight],duration:500,easing:"linear",complete:function(t){e()}}):anime({targets:t,opacity:[0,1],duration:500,easing:"linear",complete:function(t){e()}})}.bind(null,function(){n.addEventListener("click",e)}))}}),o.forEach(function(e){return anime({targets:e,opacity:[1,0],duration:500,easing:"linear",complete:function(t){e.dataset.visible=!1}})})})});var e,n,i=function(){function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"closed",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:500,i=!(3<arguments.length&&void 0!==arguments[3])||arguments[3];_classCallCheck(this,o),this.el=t,this.openTime=n,this.vacate(),this.setState(e,i)}return _createClass(o,[{key:"setState",value:function(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];switch(t){case"open":this.state="open";break;case"closed":this.state="closed";break;case"opening":this.state="opening";break;case"closing":this.state="closing";break;default:return new Error("ModalWindow: Wrong State")}return e&&this.notify(),this}},{key:"notify",value:function(){this.el.dataset.animationProcess=this.state}},{key:"getState",value:function(){return this.state}},{key:"isState",value:function(t){return this.getState()===t}},{key:"open",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){};return!this.isState("open")&&!this.isBusy()&&(this.occupy(),this.setState("opening"),setTimeout(function(){return t.setState("open"),t.vacate(),e()},this.openTime),this)}},{key:"close",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){};return!this.isState("closed")&&!this.isBusy()&&(this.occupy(),this.setState("closing"),setTimeout(function(){return t.setState("closed"),t.vacate(),e()},this.openTime),this)}},{key:"isBusy",value:function(){return!!this.busy}},{key:"occupy",value:function(){this.busy=!0}},{key:"vacate",value:function(){this.busy=!1}}]),o}(),o=function(){function i(t){var e=this;_classCallCheck(this,i),this.pause=function(){e.animation.pause(),e.animation=null,window.removeEventListener("wheel",e.pause),window.removeEventListener("touchstart",e.pause)},this.link=t;var n=this.link.getAttribute("href");if(!n||"#"!==n.slice(0,1))throw new Error("SmoothScroll: Wrong element passed");this.target=document.getElementById(n.slice(1)),this.link.addEventListener("click",function(t){t.preventDefault(),e.go()})}return _createClass(i,[{key:"getCurrentPosition",value:function(t){return this.target?(window.scrollY||document.documentElement.scrollTop)+this.target.getBoundingClientRect().top:0}},{key:"go",value:function(){var t=this;this.animation=anime({targets:[document.body,document.documentElement],scrollTop:this.getCurrentPosition(),duration:600,easing:"easeInOutQuart",autoplay:!1,complete:function(){window.removeEventListener("wheel",t.pause),window.removeEventListener("touchstart",t.pause)}}),window.addEventListener("wheel",this.pause),window.addEventListener("touchstart",this.pause),this.animation.restart()}}]),i}(),a=function(t){var e=function(t){return window.innerWidth<t};switch(t){case"xs":return e(575.98);case"sm":return e(767.98);case"md":return e(991.98);case"lg":return e(1199.98);default:throw new Error("Screen: wrong input")}},s=(Array.from(document.querySelectorAll("[data-smooth-scroll]")).forEach(function(t){return new o(t)}),document.querySelector(".jumbotron__slogan"));a("sm")?s.classList.remove("jumbotron__slogan--hidden"):(e=document.querySelector('[data-animation-process-name="cube"]'),n=new i(e,"open"),setTimeout(function(){n.close(function(){s.classList.remove("jumbotron__slogan--hidden")})},3e3))},!1);
//# sourceMappingURL=main.js.map
