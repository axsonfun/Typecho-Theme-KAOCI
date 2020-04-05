/* Zepto v1.1.4-x Modified by xiaogezi (e.el.trigger bugfix && $.browser) - zepto event ajax form ie detect fx fx_methods touch gesture - zeptojs.com/license */
var Zepto=function(){function _(t){return null==t?String(t):E[S.call(t)]||"object"}function A(t){return"function"==_(t)}function L(t){return null!=t&&t==t.window}function k(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function Z(t){return"object"==_(t)}function D(t){return Z(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function $(t){return"number"==typeof t.length}function R(t){return a.call(t,function(t){return null!=t})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function q(t,e){return"number"!=typeof e||c[z(t)]?e:e+"px"}function B(t){var e,n;return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function H(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function U(n,i,r){for(e in i)r&&(D(i[e])||M(i[e]))?(D(i[e])&&!D(n[e])&&(n[e]={}),M(i[e])&&!M(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function V(t,e){return null==e?n(t):n(t).filter(e)}function X(t,e,n,i){return A(e)?e.call(t,n,i):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function J(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,P,C,r=[],o=r.slice,a=r.filter,s=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),b=s.createElement("tr"),w={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":s.createElement("div")},x=/complete|loaded|interactive/,T=/^[\w-]*$/,E={},S=E.toString,j={},O=s.createElement("div"),N={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};return j.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~j.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},j.fragment=function(e,i,r){var a,u,f;return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in w||(i="*"),f=w[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),D(r)&&(u=n(a),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),a},j.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},j.isZ=function(t){return t instanceof j.Z},j.init=function(e,i){var r;if(!e)return j.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=j.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=j.qsa(s,e)}else{if(A(e))return n(s).ready(e);if(j.isZ(e))return e;if(M(e))r=R(e);else if(Z(e))r=[e],e=null;else if(l.test(e))r=j.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=j.qsa(s,e)}}return j.Z(r,e)},n=function(t,e){return j.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},j.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=T.test(a);return k(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=s.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=_,n.isFunction=A,n.isWindow=L,n.isArray=M,n.isPlainObject=D,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=P,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if($(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return F(i)},n.each=function(t,e){var n,i;if($(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return a.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){E["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return x.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return A(t)?this.not(this.not(t)):n(a.call(this,function(e){return j.matches(e,t)}))},add:function(t,e){return n(C(this.concat(n(t,e))))},is:function(t){return this.length>0&&j.matches(this[0],t)},not:function(e){var i=[];if(A(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):$(e)&&A(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return Z(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!Z(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!Z(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(j.qsa(this[0],t)):this.map(function(){return j.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:j.matches(i,t));)i=i!==e&&!k(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!k(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return V(e,t)},parent:function(t){return V(C(this.pluck("parentNode")),t)},children:function(t){return V(this.map(function(){return H(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return V(this.map(function(t,e){return a.call(H(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=A(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=A(t);return this.each(function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(X(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=X(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(Z(n))for(e in n)Y(this,e,n[e]);else Y(this,n,X(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&Y(this,t)})},prop:function(t,e){return t=N[t]||t,1 in arguments?this.each(function(n){this[t]=X(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?J(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=X(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=X(this,t,e,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[P(t)]||o.getPropertyValue(t);if(M(t)){var a={};return n.each(M(t)?t:[t],function(t,e){a[e]=r.style[P(e)]||o.getPropertyValue(e)}),a}}var s="";if("string"==_(t))i||0===i?s=z(t)+":"+q(t,i):this.each(function(){this.style.removeProperty(z(t))});else for(e in t)t[e]||0===t[e]?s+=z(e)+":"+q(e,t[e])+";":this.each(function(){this.style.removeProperty(z(e))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},I(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=X(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),X(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(I(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),a=X(this,e,r,W(this));a.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||s.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,a=this[0];return r===t?L(a)?a["inner"+i]:k(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){a=n(this),a.css(e,X(this,r,t,a[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=_(e),"object"==t||"array"==t||null==e?e:j.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(s.documentElement,o);r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),j.Z.prototype=n.fn,j.uniq=C,j.deserializeValue=J,n.zepto=j,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(a[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,s,u,f){var h=l(e),d=a[h]||(a[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var a=p(i);a.fn=r,a.sel=s,a.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var l=u||r;a.proxy=function(t){if(t=E(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function E(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(T,function(t,n){var r=i[t];e[t]=function(){return this[n]=b,r&&r.apply(i,arguments)},e[n]=w}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function S(t){var e,i={originalEvent:t};for(e in t)x.test(e)||t[e]===n||(i[e]=t[e]);return E(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var a=2 in arguments&&i.call(arguments,2);if(r(e)){var s=function(){return e.apply(n,a?a.concat(i.call(arguments)):arguments)};return s._zid=l(e),s}if(o(n))return a?(a.unshift(e[n],e),t.proxy.apply(null,a)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,a,s,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,a,s,e,f)}),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=w),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),a&&(l=function(e){var n,o=t(e.target).closest(a,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a){var s=this;return e&&!o(e)?(t.each(e,function(t,e){s.off(t,i,e)}),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=w),s.each(function(){y(this,e,a,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):E(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(a,s){i=S(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),E(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function x(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=x(e.url,e.data),e.data=void 0)}function E(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function j(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?j(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(s).on("load error",function(e,n){clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[a]=function(){f=arguments},s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),T(n);var a=n.dataType,s=/\?.+=\?/.test(n.url);if(s&&(a="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=a&&"jsonp"!=a)||(n.url=x(n.url,"_="+Date.now())),"jsonp"==a)return s||(n.url=x(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var E,u=n.accepts[a],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=b,clearTimeout(E);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){a=a||w(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==a?(1,eval)(e):"xml"==a?e=d.responseXML:"json"==a&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(E=setTimeout(function(){d.onreadystatechange=b,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(E.apply(null,arguments))},t.post=function(){var e=E.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=E.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,a=e.split(/\s/),u=E(e,n,i),f=u.success;return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e){r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},j(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),
/* detect.js */
(function(f){function d(a,f){var b=this.os={},c=this.browser={},d=a.match(/Web[kK]it[\/]{0,1}([\d.]+)/),g=a.match(/(Android);?[\s\/]+([\d.]+)?/),u=!!a.match(/\(Macintosh\; Intel /),h=a.match(/(iPad).*OS\s([\d_]+)/),k=a.match(/(iPod)(.*OS\s([\d_]+))?/),n=!h&&a.match(/(iPhone\sOS)\s([\d_]+)/),v=/Win\d{2}|Windows/.test(f),p=a.match(/Windows Phone ([\d.]+)/),q=a.match(/Kindle\/([\d.]+)/),e=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),l=a.match(/Firefox\/([\d.]+)/),m=a.match(/MSIE\s([\d.]+)/)||
a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),r=!e&&a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),t=r||a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),w=a.match(/MicroMessenger/);if(c.webkit=!!d)c.version=d[1];g&&(b.android=!0,b.version=g[2]);n&&!k&&(b.ios=b.iphone=!0,b.version=n[2].replace(/_/g,"."));h&&(b.ios=b.ipad=!0,b.version=h[2].replace(/_/g,"."));k&&(b.ios=b.ipod=!0,b.version=k[3]?k[3].replace(/_/g,"."):null);p&&(b.wp=!0,b.version=p[1]);q&&(b.kindle=!0,b.version=
q[1]);e&&(c.chrome=!0,c.version=e[1]);l&&(c.firefox=!0,c.version=l[1]);m&&(c.ie=!0,c.version=m[1]);t&&(u||b.ios||v)&&(c.safari=!0,b.ios||(c.version=t[1]));r&&(c.webview=!0);c.wechat=!!w;b.tablet=!!(h||g&&!a.match(/Mobile/)||l&&a.match(/Tablet/)||m&&!a.match(/Phone/)&&a.match(/Touch/));b.phone=!(b.tablet||b.ipod||!(g||n||e&&a.match(/Android/)||e&&a.match(/CriOS\/([\d.]+)/)||l&&a.match(/Mobile/)||m&&a.match(/Touch/)))}d.call(f,navigator.userAgent,navigator.platform);f.__detect=d})(Zepto),

function(t,e){function w(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function x(t){return i?i+t:t.toLowerCase()}var i,c,l,h,p,d,m,g,v,y,n="",a={Webkit:"webkit",Moz:"",O:"o"},s=window.document,u=s.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(a,function(t,r){return u.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),c=n+"transform",b[l=n+"transition-property"]=b[h=n+"transition-duration"]=b[d=n+"transition-delay"]=b[p=n+"transition-timing-function"]=b[m=n+"animation-name"]=b[g=n+"animation-duration"]=b[y=n+"animation-delay"]=b[v=n+"animation-timing-function"]="",t.fx={off:i===e&&u.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:x("TransitionEnd"),animationEnd:x("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(n,i,r,o,a){var s,x,S,u={},T="",E=this,j=t.fx.transitionEnd,P=!1;if(i===e&&(i=t.fx.speeds._default/1e3),a===e&&(a=0),t.fx.off&&(i=0),"string"==typeof n)u[m]=n,u[g]=i+"s",u[y]=a+"s",u[v]=r||"linear",j=t.fx.animationEnd;else{x=[];for(s in n)f.test(s)?T+=s+"("+n[s]+") ":(u[s]=n[s],x.push(w(s)));T&&(u[c]=T,x.push(c)),i>0&&"object"==typeof n&&(u[l]=x.join(", "),u[h]=i+"s",u[d]=a+"s",u[p]=r||"linear")}return S=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,S)}else t(this).unbind(j,S);P=!0,t(this).css(b),o&&o.call(this)},i>0&&(this.bind(j,S),setTimeout(function(){P||S.call(E)},1e3*(i+a)+25)),this.size()&&this.get(0).clientLeft,this.css(u),0>=i&&setTimeout(function(){E.each(function(){S.call(this)})},0),this},u=null}(Zepto),function(t,e){function s(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function u(e,n,i,r){return s(e,n,0,i,function(){o.call(t(this)),r&&r.call(this)})}var n=window.document,r=(n.documentElement,t.fn.show),o=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,n){return r.call(this),t===e?t=0:this.css("opacity",0),s(this,t,1,"1,1",n)},t.fn.hide=function(t,n){return t===e?o.call(this):u(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,n){return s(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return u(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),
/* touch.js */
(function(e){function v(a,c,d,e){return Math.abs(a-c)>=Math.abs(d-e)?0<a-c?"Left":"Right":0<d-e?"Up":"Down"}function w(){c=null;a.last&&(a.el.trigger("longTap"),a={})}function r(){d&&clearTimeout(d);k&&clearTimeout(k);l&&clearTimeout(l);c&&clearTimeout(c);d=k=l=c=null;a={}}function t(a){return("touch"==a.pointerType||a.pointerType==a.MSPOINTER_TYPE_TOUCH)&&a.isPrimary}function u(a,c){return a.type=="pointer"+c||a.type.toLowerCase()=="mspointer"+c}var a={},d,k,l,c,m;e(document).ready(function(){var h,
n,p=0,q=0,f,g;"MSGesture"in window&&(m=new MSGesture,m.target=document.body);e(document).bind("MSGestureEnd",function(b){if(b=1<b.velocityX?"Right":-1>b.velocityX?"Left":1<b.velocityY?"Down":-1>b.velocityY?"Up":null)a.el.trigger("swipe"),a.el.trigger("swipe"+b)}).on("touchstart MSPointerDown pointerdown",function(b){if(!(g=u(b,"down"))||t(b))f=g?b:b.touches[0],b.touches&&1===b.touches.length&&a.x2&&(a.x2=void 0,a.y2=void 0),h=Date.now(),n=h-(a.last||h),a.el=e("tagName"in f.target?f.target:f.target.parentNode),
d&&clearTimeout(d),a.x1=f.pageX,a.y1=f.pageY,0<n&&250>=n&&(a.isDoubleTap=!0),a.last=h,c=setTimeout(w,750),m&&g&&m.addPointer(b.pointerId)}).on("touchmove MSPointerMove pointermove",function(b){if(!(g=u(b,"move"))||t(b))f=g?b:b.touches[0],c&&clearTimeout(c),c=null,a.x2=f.pageX,a.y2=f.pageY,p+=Math.abs(a.x1-a.x2),q+=Math.abs(a.y1-a.y2)}).on("touchend MSPointerUp pointerup",function(b){if(!(g=u(b,"up"))||t(b))c&&clearTimeout(c),c=null,a.x2&&30<Math.abs(a.x1-a.x2)||a.y2&&30<Math.abs(a.y1-a.y2)?l=setTimeout(function(){a.el&&
(a.el.trigger("swipe"),a.el.trigger("swipe"+v(a.x1,a.x2,a.y1,a.y2)));a={}},0):"last"in a&&(30>p&&30>q?k=setTimeout(function(){var b=e.Event("tap");b.cancelTouch=r;a.el&&a.el.trigger(b);a.isDoubleTap?(a.el&&a.el.trigger("doubleTap"),a={}):d=setTimeout(function(){d=null;a.el&&a.el.trigger("singleTap");a={}},250)},0):a={}),p=q=0}).on("touchcancel MSPointerCancel pointercancel",r);e(window).on("scroll",r)});"swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(a){e.fn[a]=
function(c){return this.on(a,c)}})})(Zepto),
/* gesture.js */
function(t){function i(t){return"tagName"in t?t:t.parentNode}if(t.os.ios){var n,e={};t(document).bind("gesturestart",function(t){{var r=Date.now();
r-(e.last||r)}e.target=i(t.target),n&&clearTimeout(n),e.e1=t.scale,e.last=r}).bind("gesturechange",function(t){e.e2=t.scale}).bind("gestureend",function(){e.e2>0?(0!=Math.abs(e.e1-e.e2)&&t(e.target).trigger("pinch")&&t(e.target).trigger("pinch"+(e.e1-e.e2>0?"In":"Out")),e.e1=e.e2=e.last=0):"last"in e&&(e={})}),["pinch","pinchIn","pinchOut"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}}(Zepto);
/* Callbacks.js */
(function(f){f.Callbacks=function(g){g=f.extend({},g);var e,n,l,p,h,k,a=[],c=!g.once&&[],q=function(b){e=g.memory&&b;n=!0;k=p||0;p=0;h=a.length;for(l=!0;a&&k<h;++k)if(!1===a[k].apply(b[0],b[1])&&g.stopOnFalse){e=!1;break}l=!1;a&&(c?c.length&&q(c.shift()):e?a.length=0:m.disable())},m={add:function(){if(a){var b=a.length,d=function(b){f.each(b,function(b,c){"function"===typeof c?g.unique&&m.has(c)||a.push(c):c&&c.length&&"string"!==typeof c&&d(c)})};d(arguments);l?h=a.length:e&&(p=b,q(e))}return this},
remove:function(){a&&f.each(arguments,function(c,d){for(var b;-1<(b=f.inArray(d,a,b));)a.splice(b,1),l&&(b<=h&&--h,b<=k&&--k)});return this},has:function(b){return!!(a&&(b?-1<f.inArray(b,a):a.length))},empty:function(){h=a.length=0;return this},disable:function(){a=c=e=void 0;return this},disabled:function(){return!a},lock:function(){c=void 0;e||m.disable();return this},locked:function(){return!c},fireWith:function(b,d){!a||n&&!c||(d=d||[],d=[b,d.slice?d.slice():d],l?c.push(d):q(d));return this},
fire:function(){return m.fireWith(this,arguments)},fired:function(){return!!n}};return m}})(Zepto);
/* deferred.js */
(function(c){function k(e){var d=[["resolve","done",c.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",c.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",c.Callbacks({memory:1})]],g="pending",f={state:function(){return g},always:function(){a.done(arguments).fail(arguments);return this},then:function(){var h=arguments;return k(function(b){c.each(d,function(d,g){var e=c.isFunction(h[d])&&h[d];a[g[1]](function(){var a=e&&e.apply(this,arguments);if(a&&c.isFunction(a.promise))a.promise().done(b.resolve).fail(b.reject).progress(b.notify);
else{var d=this===f?b.promise():this;b[g[0]+"With"](d,e?[a]:arguments)}})});h=null}).promise()},promise:function(a){return null!=a?c.extend(a,f):f}},a={};c.each(d,function(c,b){var e=b[2],h=b[3];f[b[1]]=e.add;h&&e.add(function(){g=h},d[c^1][2].disable,d[2][2].lock);a[b[0]]=function(){a[b[0]+"With"](this===a?f:this,arguments);return this};a[b[0]+"With"]=e.fireWith});f.promise(a);e&&e.call(a,a);return a}var n=Array.prototype.slice;c.when=function(e){var d=n.call(arguments),g=d.length,f=0,a=1!==g||e&&
c.isFunction(e.promise)?g:0,h=1===a?e:k(),b,l=function(d,b,c){return function(e){b[d]=this;c[d]=1<arguments.length?n.call(arguments):e;c===m?h.notifyWith(b,c):--a||h.resolveWith(b,c)}};if(1<g){var m=Array(g);var p=Array(g);for(b=Array(g);f<g;++f)d[f]&&c.isFunction(d[f].promise)?d[f].promise().done(l(f,b,d)).fail(h.reject).progress(l(f,p,m)):--a}a||h.resolveWith(b,d);return h.promise()};c.Deferred=k})(Zepto);
/* tpl.js from https://github.com/frozenui/ modified by xiaogezi */
(function($){
$.tpl = function (str, data, env) {
		// 判断str参数，如str为script标签的id，则取该标签的innerHTML，再递归调用自身
		// 如str为HTML文本，则分析文本并构造渲染函数
		if(!/[^\w\-\.:]/.test(str)){
            str = document.getElementById(str).innerHTML;
        }
		var fn = function (data, env) {
			var i, variable = [], value = []; // variable数组存放变量名，对应data结构的成员变量；value数组存放各变量的值
			for (i in data) {
                var val = data[i];
                    variable.push(i);
                    value.push(val);
			}
			return (new Function(variable, fn.code))
				.apply(env || data, value); // 此处的new Function是由下面fn.code产生的渲染函数；执行后即返回渲染结果HTML
		};

		fn.code = fn.code || "var $parts=[]; $parts.push('"
			+ str
			.replace(/\\/g, '\\\\') // 处理模板中的\转义
			.replace(/[\r\t\n]/g, " ") // 去掉换行符和tab符，将模板合并为一行
			.split("<%").join("\t") // 将模板左标签<%替换为tab，起到分割作用
			.replace(/\t=\?(.*?)%>/g, function(match, $1){ // 将模板中<%=? %> 替换成“ xxx="yyy"”，如果 xxx 存在，则在前添加空格。 
                if(data.hasOwnProperty($1)){
                    return "'," + "' ' + " + $1 + ",'";
                }
                return '';
            })
			.replace(/\t=(.*?)%>/g, function(match, $1){ // 将模板中<%= %>的直接数据引用（无逻辑代码）与两侧的文本用'和,隔开，同时去掉了左标签产生的tab符
                if(data.hasOwnProperty($1)){
                    return "'," + $1 + ",'";
                }
                return '';
            })
			.replace(/\t=(.*?)%>/g, "',this.$1||'','") // 将模板中<%= %>的直接数据引用（无逻辑代码）与两侧的文本用'和,隔开，同时去掉了左标签产生的tab符
			.split("\t").join("');") // 将tab符（上面替换左标签产生）替换为'); 由于上一步已经把<%=产生的tab符去掉，因此这里实际替换的只有逻辑代码的左标签
			.split("%>").join("$parts.push('") // 把剩下的右标签%>（逻辑代码的）替换为"$parts.push('"
			+ "'); return $parts.join('');"; // 最后得到的就是一段JS代码，保留模板中的逻辑，并依次把模板中的常量和变量压入$parts数组

		return data ? fn(data, env) : fn; // 如果传入了数据，则直接返回渲染结果HTML文本，否则返回一个渲染函数
	};
})(Zepto);

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

; (function ($) {
    var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

    function visible(elem) {
        elem = $(elem)
        return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
    }

    // Implements a subset from:
    // http://api.jquery.com/category/selectors/jquery-selector-extensions/
    //
    // Each filter function receives the current index, all nodes in the
    // considered set, and a value if there were parentheses. The value
    // of `this` is the node currently being considered. The function returns the
    // resulting node(s), null, or undefined.
    //
    // Complex selectors are not supported:
    //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
    //   ul.inner:first > li
    var filters = $.expr[':'] = {
        visible: function () { if (visible(this)) return this },
        hidden: function () { if (!visible(this)) return this },
        selected: function () { if (this.selected) return this },
        checked: function () { if (this.checked) return this },
        parent: function () { return this.parentNode },
        first: function (idx) { if (idx === 0) return this },
        last: function (idx, nodes) { if (idx === nodes.length - 1) return this },
        eq: function (idx, _, value) { if (idx === value) return this },
        contains: function (idx, _, text) { if ($(this).text().indexOf(text) > -1) return this },
        has: function (idx, _, sel) { if (zepto.qsa(this, sel).length) return this }
    }

    var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
        childRe = /^\s*>/,
        classTag = 'Zepto' + (+new Date())

    function process(sel, fn) {
        // quote the hash in `a[href^=#]` expression
        sel = sel.replace(/=#\]/g, '="#"]')
        var filter, arg, match = filterRe.exec(sel)
        if (match && match[2] in filters) {
            filter = filters[match[2]], arg = match[3]
            sel = match[1]
            if (arg) {
                var num = Number(arg)
                if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
                else arg = num
            }
        }
        return fn(sel, filter, arg)
    }

    zepto.qsa = function (node, selector) {
        return process(selector, function (sel, filter, arg) {
            try {
                var taggedParent
                if (!sel && filter) sel = '*'
                else if (childRe.test(sel))
                    // support "> *" child queries by tagging the parent node with a
                    // unique class and prepending that classname onto the selector
                    taggedParent = $(node).addClass(classTag), sel = '.' + classTag + ' ' + sel

                var nodes = oldQsa(node, sel)
            } catch (e) {
                console.error('error performing selector: %o', selector)
                throw e
            } finally {
                if (taggedParent) taggedParent.removeClass(classTag)
            }
            return !filter ? nodes :
                zepto.uniq($.map(nodes, function (n, i) { return filter.call(n, i, nodes, arg) }))
        })
    }

    zepto.matches = function (node, selector) {
        return process(selector, function (sel, filter, arg) {
            return (!sel || oldMatches(node, sel)) &&
                (!filter || filter.call(node, null, arg) === node)
        })
    }
})(Zepto)

/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.6
 * Modified by xiaogezi v1.5.0
 *
 */

(function ($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function (options) {
        var elements = this;
        var $container;
        var settings = {
            threshold: 0,       // 设置一个值，表示元素距离底部的距离时，触发lazyload
            failure_limit: 0,
            event: "scroll",    // 默认绑定 scroll 事件
            effect: "show",     // 默认使用 show 效果
            container: window,  // 用于lazyload的父容器
            data_attribute: "src",
            skip_invisible: true,
            skip_above: true,   // 是否跳过滚动条上方的元素，比如在页面中部或底部刷新时，页面上方的内容是否加载。设置为 false 则为加载
            remove_attribute: false,
            appear: null,
            load: null,         // lazyload 触发后的回调
            update: false,      // 是否立即渲染可见区域的 lazyload
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function () {
                var $this = $(this);
                if (settings.skip_invisible && $this.css("display") === "none") {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                    /* Nothing. */
                    !settings.skip_above && $this.trigger("appear");
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                    /* if we found an image we'll load, reset the counter */
                    counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if (options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
            settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, function (event) {
                return update();
            });
        }

        this.each(function () {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function () {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }

                    if (!$self.is('[data-class]')) { //xiaogezi
                        var original = $self.data(settings.data_attribute);

                        $("<img />")
                            .on("load", function () {
                                settings.effect !== false && $self.hide()

                                if ($self.is("img")) {
                                    $self.attr("src", original);
                                } else {
                                    $self.css('background-image', 'url(' + original + ')');
                                }
                                var fn = $self[settings.effect];
                                fn && fn(settings.effect_speed);
                                self.loaded = true;

                                $self.trigger('appeared');
                                settings.remove_attribute && $self.removeAttr('data-src');

                                /* Remove image from array so it is not looped next time. */
                                var temp = $.grep(elements, function (element) {
                                    return !element.loaded;
                                });
                                elements = $(temp);

                                if (settings.load) {
                                    var elements_left = elements.length;
                                    settings.load.call(self, elements_left, settings);
                                }
                            })
                            .attr("src", original);
                    } else { //xiaogezi
                        var cssclass = $self.data('class');
                        settings.effect == 'hide' && $self.hide();
                        $self.addClass(cssclass);
                        settings.remove_attribute && $self.removeAttr('data-class');
                        self.loaded = true;
                        $self.trigger('appeared');

                        /* Remove image from array so it is not looped next time. */
                        var temp = $.grep(elements, function (element) {
                            return !element.loaded;
                        });
                        elements = $(temp);

                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function (event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function (event) {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function (event) {
                // if (event.originalEvent.persisted) {
                event = event.originalEvent || event;
                if (event.persisted) {
                    elements.each(function () {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(window).on("load", function () {
            update();
        });

        settings.update && update(); // 异步加载后，立即更新

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window[0].scrollY;
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window[0].scrollX;
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window[0].scrollY;
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };

    $.leftofbegin = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window[0].scrollX;
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function (element, settings) {
        
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
            !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.fn, {
        "below-the-fold": function (a) { return $.belowthefold(a, { threshold: 0 }); },
        "above-the-top": function (a) { return !$.belowthefold(a, { threshold: 0 }); },
        "right-of-screen": function (a) { return $.rightoffold(a, { threshold: 0 }); },
        "left-of-screen": function (a) { return !$.rightoffold(a, { threshold: 0 }); },
        "in-viewport": function (a) { return $.inviewport(a, { threshold: 0 }); },
        /* Maintain BC for couple of versions. */
        "above-the-fold": function (a) { return !$.belowthefold(a, { threshold: 0 }); },
        "right-of-fold": function (a) { return $.rightoffold(a, { threshold: 0 }); },
        "left-of-fold": function (a) { return !$.rightoffold(a, { threshold: 0 }); }
    });

})(window.Zepto || window.jQuery, window, document);
/**
 * Design platform global page animation
 * Author: Sandyxjiang 
 * Date: 2017/06/16
 * version 1.0
 */

/* 用于动态加入的元素的动画初始化 */
window.scrollShowAnimation = new Event('scrollShowAnimation');
window.defaultShowAnimation = new Event('defaultShowAnimation');

/* 入场动画 */
function ScrollAnimation(opts) {

    var that = this;

    //默认动画参数，可以通过初始化传入
    this.defaults = {
        scrollElement: document,
        //navigator slidein animation
        slide: {
            max: 180,
            min: 80,
            animateItem: 'navigator'
        },
        // show-animate-item animation
        show: {
            animateItem: 'show-animate-item',
            animClass: 'showup',
            animedClass: 'showed',
            animingClass: 'showing',
            durTime: 0.4,
            delayTime: 0.2,
            eachDelayTime: 0.1,
            timingFunction: 'ease-out',
            animDiffHeight: 80
        },
        // fade-animate-item animation
        fade: {
            animateItem: 'fade-animate-item',
            animClass: 'fadein',
            animedClass: 'faded',
            animingClass: 'fading',
            durTime: 0.4,
            delayTime: 0.2,
            eachDelayTime: 0.1,
            timingFunction: 'ease-out',
            animDiffHeight: 80
        }

    };
    this.Index = 1;

    this.scrollAction = { x: 'undefined', y: 'undefined' },

        this.scrollDirection,

        /* 判断鼠标滚动方向 */
        this.updateScrollDirection = function () {
            if (typeof this.scrollAction.x == 'undefined') {
                this.scrollAction.x = window.pageXOffset;
                this.scrollAction.y = window.pageYOffset;
            }

            var diffX = this.scrollAction.x - window.pageXOffset;
            var diffY = this.scrollAction.y - window.pageYOffset;

            if (diffX < 0) {
                this.scrollDirection = 'right';
            } else if (diffX > 0) {
                this.scrollDirection = 'left';
            } else if (diffY < 0) {
                this.scrollDirection = 'down';
            } else if (diffY > 0) {
                this.scrollDirection = 'up';
            }

            this.scrollAction.x = window.pageXOffset;
            this.scrollAction.y = window.pageYOffset;
        },

        /**
         * navigator入场时滑下动画
         */
        this.slidein = function (el) {
            el.parentNode.style = 'display:initial;';
            el.style.transform = 'translate3d(0,0,0)';
        };

    this.slideout = function (el) {
        el.style.transform = 'translate3d(0,-' + that.defaults.slide.max + 'px,0)';
        el.parentNode.style = 'display:none;';
    };

    /**
     * scroll的时候，nav高度变低到opts.min
     */
    this.slideup = function (el, opts, eventType) {

        var scrollTop = this.getScrollY();

        // var isuxIcon = document.getElementsByClassName('js-nav-isux')[0];

        // 滚动到顶部的时候，全logo
        // if(scrollTop == 0){
        //     isuxIcon.style.opacity = 1;
        // }else{
        // // 其他时候都是只有菊花
        //     isuxIcon.style.opacity = 0;
        // }

        if (scrollTop < Number(opts.max - opts.min)) {

            el.style.height = Number(opts.max - scrollTop) + 'px';

        } else {

            el.style.height = opts.min + 'px';

            if (scrollTop > opts.max) {

                /* 在resize的时候，如果 scrollTop > opts.max ，则不进行 slidein 动画 */
                if (eventType == 'scroll') {

                    /* up scroll show navigator */
                    if (this.scrollDirection == 'up') {
                        this.slidein(el);
                    } else {
                        this.slideout(el);
                    }
                }

                /* resize的时候，持续保持 header slideout */
                if (eventType == 'resize') {
                    this.slideout(el);
                }

            }

        }

    };

    /**
     * 获取页面滚动高度 
     */
    this.getScrollY = function () {

        if (this.defaults.scrollElement == document) {
            return window.scrollY;
        } else {
            return this.defaults.scrollElement.scrollTop;
        }
    };

    /**
     * 获取屏幕的高度
     */
    this.getDocumentHeight = function () {
        if (this.defaults.scrollElement == document) {
            return document.documentElement.clientHeight;
        } else {
            return (this.getElPos(this.defaults.scrollElement).bottom - this.getElPos(this.defaults.scrollElement).top);
        }
    };

    /**
     * 获取屏幕的宽度
     */
    this.getDocumentWidth = function () {
        return document.documentElement.clientWidth;
    };

    /**
     * 获取el的BoundingClientRect
     */
    this.getElPos = function (el) {
        return el.getBoundingClientRect();
    };

    this.removeClass = function (el, classname) {
        var classArr = classname.split(' ');

        for (var i = 0; i < classArr.length; i++) {
            el.className = el.className.replace(classArr[i], '');
        }

    };

    /**
     * check 元素是否在屏幕可视范围内
     * 在刚进入页面时需要判断 => add opts.animingClass for default animation elements, diffHeight == 0;
     * 在滚动页面时也需要判断 => add opts.animClass for showing elements on scroll, diffHeight == 80;增强滚动时的视觉效果
     */
    this.checkAnimingPos = function (el, diffHeight) {

        var toTop = 0;

        if (this.defaults.scrollElement == document) {
            toTop = this.getElPos(el).top;
        } else {
            toTop = this.getElPos(el).top - this.getElPos(this.defaults.scrollElement).top;
        }

        if (toTop < this.getDocumentHeight() - diffHeight) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * check 元素是否在屏幕可视范围之上,视为已经展示过了，不需要再逐个展示
     */
    this.checkAnimedPos = function (el) {

        var toBottom = 0;

        if (this.defaults.scrollElement == document) {
            toBottom = this.getElPos(el).bottom;
        } else {
            toBottom = this.getElPos(el).bottom - this.getElPos(this.defaults.scrollElement).top;
        }

        //元素整体在都可视范围之上
        if (this.getElPos(el).bottom <= 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * 获取导航元素 js-nav-state
     */
    this.getNavEl = function (opts) {
        return document.getElementById(opts.animateItem);
    };

    /**
     * 获取onscroll-animation的元素集合 
     * 不同的动画show || fade
     * 获取不同的animate-items
     */
    this.getAnimateEls = function (opts) {
        
        return that.defaults.scrollElement.getElementsByClassName(opts.animateItem);
    };

    /**
     * 初始化 可视范围内 & 之上 => opts.animed & opts.animing
     */
    this.defaultAnimation = function (animEls, opts) {

        var curDelayTime = opts.delayTime;

        Array.prototype.forEach.call(animEls, function (element, idx) {

            //如果是在screen可视范围之上，则直接增加opts.animed class
            if (this.checkAnimedPos(element)) {
                element.classList.add(opts.animedClass);
                this.removeClass(element, this.defaults.show.animateItem + " " + this.defaults.show.animClass + " " + this.defaults.fade.animateItem + " " + this.defaults.fade.animClass);
            } else if (this.checkAnimingPos(element, 0)) {
                //如果是在screen可视范围内，则直接增加 opts.animing class

                /* clip 动效 */
                var clipItems = this.getClipItems(element);

                this.calcClipRect(clipItems);

                /* showup 动效 和 clip 动效 */

                /* 特殊处理首页 index(1开始) 为 5,6 的顺序  */
                if (element.getAttribute('data-home-index') == "5") {

                    curDelayTime += opts.eachDelayTime;

                    // clip 动效
                    if (clipItems.length) {
                        clipItems.forEach(function (item) {
                            item.style.clip = 'clip:rect(0px,0px,0px,0px)';
                            item.style.webkitClip = '-webkit-clip:rect(0px,0px,0px,0px)';

                            item.style.animation = 'showclip' + this.Index + ' ' + opts.durTime + 's' + ' ' + Number(curDelayTime + opts.eachDelayTime) + 's' + ' forwards cubic-bezier(0,.3,.6,1)';
                            item.style.webkitAnimation = 'showclip' + this.Index + ' ' + opts.durTime + 's' + ' ' + Number(curDelayTime + opts.eachDelayTime) + 's' + ' forwards cubic-bezier(0,.3,.6,1)';

                        }, this);
                        this.Index++;
                    }

                    element.style.animation = opts.animClass + " " + opts.durTime + "s " + (curDelayTime + opts.eachDelayTime) + "s forwards " + opts.timingFunction;
                    element.style.webkitAnimation = opts.animClass + " " + opts.durTime + "s " + (curDelayTime + opts.eachDelayTime) + "s forwards " + opts.timingFunction;

                } else if (element.getAttribute('data-home-index') == "6") {

                    // clip 动效
                    if (clipItems.length) {
                        clipItems.forEach(function (item) {
                            item.style.clip = 'clip:rect(0px,0px,0px,0px)';
                            item.style.webkitClip = '-webkit-clip:rect(0px,0px,0px,0px)';
                            item.style.animation = "showclip" + this.Index + " " + opts.durTime + "s " + (curDelayTime - opts.eachDelayTime) + "s forwards cubic-bezier(0,.3,.6,1)";
                            item.style.webkitAnimation = "showclip" + this.Index + " " + opts.durTime + "s " + (curDelayTime - opts.eachDelayTime) + "s forwards cubic-bezier(0,.3,.6,1)";

                        }, this);
                        this.Index++;
                    }

                    element.style.animation = opts.animClass + " " + opts.durTime + "s " + (curDelayTime - opts.eachDelayTime) + "s forwards " + opts.timingFunction;
                    element.style.webkitAnimation = opts.animClass + " " + opts.durTime + "s " + (curDelayTime - opts.eachDelayTime) + "s forwards " + opts.timingFunction;
                    curDelayTime += opts.eachDelayTime;

                } else {

                    if (clipItems.length) {
                        clipItems.forEach(function (item) {
                            item.style.clip = 'clip:rect(0px,0px,0px,0px)';
                            item.style.webkitClip = '-webkit-clip:rect(0px,0px,0px,0px)';
                            item.style.animation = "showclip" + this.Index + " " + opts.durTime + "s " + curDelayTime + "s forwards cubic-bezier(0,.3,.6,1)";;
                            item.style.webkitAnimation = "showclip" + this.Index + " " + opts.durTime + "s " + curDelayTime + "s forwards cubic-bezier(0,.3,.6,1)";;


                        }, this);
                        this.Index++;
                    }

                    element.style.animation = opts.animClass + " " + opts.durTime + "s " + curDelayTime + "s forwards " + opts.timingFunction;
                    element.style.webkitAnimation = opts.animClass + " " + opts.durTime + "s " + curDelayTime + "s forwards " + opts.timingFunction;
                    curDelayTime += opts.eachDelayTime;

                }

                element.addEventListener('animationend', this.animationendHandler, false);
                element.addEventListener('webkitAnimationEnd', this.animationendHandler, false);

            }

        }, this);

    };

    /**
     * animation for show-animate-item & fade-animate-item on scrolling
     */
    this.scrollAnimate = function (els, opts) {

        /* anim, animed, animing分别代表，可视范围之下的加载，可视范围之上的加载，可视范围之内的加载 */
        Array.prototype.forEach.call(els, function (element) {

            var defaultAniming = (element.classList).toString().includes(opts.animingClass);
            var animed = (element.classList).toString().includes(opts.animedClass);

            if (this.checkAnimingPos(element, opts.animDiffHeight) && !defaultAniming && !animed) {

                if (!element.classList.contains(opts.animClass)) {

                    element.classList.add(opts.animClass);

                    /* clip 动效 */
                    var clipItems = this.getClipItems(element);

                    this.calcClipRect(clipItems);

                    clipItems.forEach(function (item) {

                        /* 避免手机端首屏图片，在还未加载完时，触发了滚动，导致showclip属性错乱 */
                        /* 要准确检测style里面是否有showclip */
                        if ( item.getAttribute('style') == null ) {

                            item.classList.add('showclip' + this.Index);
                            item.setAttribute('data-clipclass', 'showclip' + this.Index);

                        }else if( item.getAttribute('style').indexOf('showclip') == -1 ){

                            item.classList.add('showclip' + this.Index);
                            item.setAttribute('data-clipclass', 'showclip' + this.Index);
                        }

                    }, this);

                    this.Index++;

                    element.addEventListener('animationend', this.animationendHandler, false);
                    element.addEventListener('webkitAnimationEnd', this.animationendHandler, false);

                }
            }

        }, this);

    };

    this.getClipItems = function (element) {
        return [].slice.call(element.querySelectorAll('.clip-animate-item'));
    }

    /* 计算 clip rect 的宽高 */
    this.calcClipRect = function (clipItems) {

        if (clipItems.length) {

            var rect = clipItems[0].parentNode.getBoundingClientRect();

            if (rect.right - rect.left == 0) {
                rect = clipItems[0].parentNode.parentNode.getBoundingClientRect();
            }

            var width = rect.right - rect.left,
                height = rect.bottom - rect.top;

            var scale = clipItems[0].getAttribute('data-scale');

            if (scale) {
                width = width / Number(scale);
                height = height / Number(scale);
            }

            this.overrideKeyframes('showclip' + this.Index, width, height);

        }

    }

    this.insertStyleNodes = [];

    this.overrideKeyframes = function (name, width, height) {

        var style = document.createElement('style');
        style.type = 'text/css';

        var keyFrames = "." + name + "{-webkit-clip:rect(0px,0px,0px,0px); -webkit-animation: " + name + " 0.4s forwards cubic-bezier(0,.3,.6,1);}\n@-webkit-keyframes " + name + "{\n  0%{-webkit-clip: rect(0,0," + height + "px,0);}\n  100%{-webkit-clip: rect(0," + width + "px," + height + "px,0);}\n}";
        keyFrames += "." + name + "{clip:rect(0px,0px,0px,0px); animation: " + name + " 0.4s forwards cubic-bezier(0,.3,.6,1);}\n@keyframes " + name + "{\n  0%{clip: rect(0,0," + height + "px,0);}\n  100%{clip: rect(0," + width + "px," + height + "px,0);}\n}";
        /* cubic-bezier(0,.3,.6,1) */
        /* cubic-bezier(.19, 1, .22, 1) */

        style.innerHTML = keyFrames;

        document.getElementsByTagName('head')[0].appendChild(style);

        this.insertStyleNodes.push(style);

    };

    this.removeInsertStyles = function () {

        var head = document.getElementsByTagName('head')[0];

        head.removeChild(this.insertStyleNodes.shift());
    };

    /**sss
     * 监听scroll的处理函数
     */
    this.eventHandler = function (eventType) {

        if (eventType == "scroll") {
            // 判断滚动方向
            that.updateScrollDirection();

            // show-animate-item
            that.scrollAnimate(that.getAnimateEls(that.defaults.show), that.defaults.show);

            // fade-animate-item
            that.scrollAnimate(that.getAnimateEls(that.defaults.fade), that.defaults.fade);
        }

        if (eventType == "resize") {
            // resize 的时候，要判断浏览器的宽度，然后更新nav的高度。
            that.updateNavMax();
        }

        //.js-nav-state
        that.slideup(that.getNavEl(that.defaults.slide), that.defaults.slide, eventType);

    };

    /**
     * 监听动画元素结束
     */
    this.animationendHandler = function () {
        //this => current element

        var classlist = this.classList.toString();

        if (classlist.includes(that.defaults.fade.animateItem)) {
            this.classList.add(that.defaults.show.animingClass);
        }

        if (classlist.includes(that.defaults.show.animateItem)) {
            this.classList.add(that.defaults.show.animingClass);
        }

        this.style.animation = '';
        this.style.webkitAnimation = '';

        that.removeClass(this, that.defaults.show.animateItem + " " + that.defaults.show.animClass + " " + that.defaults.fade.animateItem + " " + that.defaults.fade.animClass);
        /* that.removeClass(this, `${that.defaults.show.animateItem} ${that.defaults.show.animClass} ${that.defaults.fade.animateItem} ${that.defaults.fade.animClass}`); */

        /* remove clip 动效 */
        var clipItems = that.getClipItems(this);

        if (clipItems.length) {

            clipItems.forEach(function (item) {
                item.style.animation = '';
                item.style.webkitAnimation = '';
                item.classList.remove(item.getAttribute('data-clipclass'));
            }, this);

            /* 动画运动完一个，就 remove 一个新增的 style */
            that.removeInsertStyles();

        }

        this.removeEventListener('animationend', that.animationendHandler, false);
        this.removeEventListener('webkitAnimationEnd', that.animationendHandler, false);

    };
    /**
     * 初始化document监听scroll事件，并绑定监听函数
     */
    this.setupListener = function () {

        var el = this.defaults.scrollElement;

        el.addEventListener('scroll', this.scrollHandler, false);
        window.addEventListener('resize', this.resizeHandler, false);

    };

    this.scrollHandler = function () {
        that.eventHandler('scroll');
    };

    this.resizeHandler = function () {
        that.eventHandler('resize');
    };

    /**
     * 初始化默认在可视屏幕范围内的动画
     */
    this.setDefaultAnimEls = function (opts) {
        //初始化 show-animate-item & fade-animate-item animation
        that.defaultAnimation(that.getAnimateEls(opts.show), opts.show);
        that.defaultAnimation(that.getAnimateEls(opts.fade), opts.fade);

    };

    /* search 搜索结果的 default show animation 触发 */
    this.triggerSearchEvent = function () {
        that.setDefaultAnimEls(that.defaults);
    };

    this.updateNavMax = function () {

        var opts = this.defaults.slide;

        if (this.getDocumentWidth() < 440) {
            opts.max = 80;
            opts.min = 80;

        } else if (this.getDocumentWidth() >= 440 && this.getDocumentWidth() <= 1024) {
            opts.max = 120;
            opts.min = 80;

        } else {
            opts.max = 180;
            opts.min = 80;
        }

    }

    this.init = function (opts) {

        //合并覆盖默认参数, opts 覆盖this.defaults，并返回this.defaults
        $.extend(true, this.defaults, opts);

        this.setupListener();

        this.updateNavMax();


        this.setDefaultAnimEls(this.defaults);

        /* 自定义事件，scroll/default show animation */
        opts.scrollElement.addEventListener('scrollShowAnimation', this.scrollHandler, false);
        opts.scrollElement.addEventListener('defaultShowAnimation', this.triggerSearchEvent, false);


        if (this.getScrollY() < this.defaults.slide.max) {

            this.slidein(this.getNavEl(this.defaults.slide));

        } else {

            this.slideout(this.getNavEl(this.defaults.slide));
        }

    };

    this.init(opts);

}
/**
 * Design platform global rotation animation
 * Author: Sandyxjiang 
 * Date: 2017/06/17
 * version 1.0
 */

/**
 * 轮播组件
 * pc端首页广告位
 * 移动端详情页推荐文章模块
 */

/** 
 * new 一个轮播动画实例
 * 目前默认滑动
 * 后续会增加fadein fadeout 等动画效果
 */

/*new SlideAnimation({
    listId: 'testlist',                  //unordered list id
    listItem: '.test-item',              //list item class
    isScale: false,                      //item是否需要缩小
    scale: 0.8,                          //缩小的比例值 (0-1]，相对于可视范围的比例
                                            //为了显示左右两边的元素，以示可滑动查看
    scaleBig: 'scale3d(1, 1, 1)',        //当前元素缩放比例
    scaleSmall: 'scale3d(0.9, 0.9, 1)',  //除当前元素以外的元素的缩放比例
    transition: 'all 0.5s ease-out',     //轮播动画的过度参数
    defaultIndex: 1,                     //默认显示的item的index，
                                            //如果 loop == true，defaultIndex = 1;表示第一个item
                                            //否则 defaultIndex = 0; 表示第一个item
    maxIndex: 5,                         //如果 loop == true，maxIndex要在实际items maxIndex+2
    minIndex: 0,                         //minIndex 从 0 开始计
    listLength: 6,                       //如果 loop == true，listLength要在实际items长度+2
    loop: true,                          //是否需要左右循环无缝轮播
    autoplay: false,                     //是否需要自动切换轮播
    autoDirection: true,                 //初始轮播的方向，true表示向右，false表示向左 
    durTime: 0.5,  //s                   //动画时间，默认0.5s
    stayTime: 3000 //ms                  //自动轮播切换间隔时间，默认3000ms
});*/

function SlideAnimation(opts){

    var that = this;

    this.defaults = {
        listId: 'list',
        listItem: '.related-item',
        prevBtn: '.js-prev',
        nextBtn: '.js-next',
        isScale: false,
        scale: 1,
        scaleBig: 'scale3d(1, 1, 1)',
        scaleSmall: 'scale3d(1, 1, 1)',
        transition: 'all 0.5s ease-out',
        defaultIndex: 1,
        maxIndex: 4,
        minIndex: 0,
        listLength: 5,
        loop: true,
        autoplay: true,
        autoDirection: true,
        durTime: 0.5,  //s
        stayTime: 3000 //ms
    };
    this.timer = 'listTimer';

    /**
     * touch event => get touchstart position
     */
    this.startXY = { X : 0, Y : 0 };

    /**
     * touch event => get touchend position
     */
    this.endXY = { X : 0, Y : 0 };

    /**
     * touchMove direction
     * true = right
     * false = left
     */
    this.slideDirection = true;
    this.autoDirection = true;

    this.eachItemWidth = function(){
        var eachPercent = 100/this.defaults.listLength;
        return eachPercent;
    };

    /**
     * current item index
     * start from 0
     * 0, 1, 2, 3, 4
     */
    this.curIndex = 0;

    /**
     * get list element by id from this.defaults.listId
     */
    this.getListEl = function(){
        return document.getElementById(this.defaults.listId);
    };

    this.getPrevBtn = function(){
        return document.querySelectorAll(this.defaults.prevBtn)[0];
    };
    this.getNextBtn = function(){
        return document.querySelectorAll(this.defaults.nextBtn)[0];
    };

    /**
     * get list items by classname from this.defaults.listItem
     */
    this.getLiItems = function(){
        return document.querySelectorAll(this.defaults.listItem);
    };

    this.getItemWidth = function(el){
        return el.getBoundingClientRect().right - el.getBoundingClientRect().left;
    };
    
    /**
     * clone the first item of ul-list for temporary last item
     */
    this.createLiItem = function(){

        var cloneFirstItem = this.getLiItems()[0].cloneNode(true),
            cloneLastItem = this.getLiItems()[this.defaults.listLength - 3].cloneNode(true);
        
        this.getListEl().appendChild(cloneFirstItem);
        this.getListEl().insertBefore(cloneLastItem, this.getLiItems()[0]);
    };

    /**
     * remove last item of ul-list
     */
    this.removeLiItem = function(){
        var lastItem = this.getLiItems()[Number(this.defaults.maxIndex+1)];

        this.getListEl().removeChild(lastItem);
    };

    this.setTransition = function(el, style){
        el.style.transition = style;
    };

    this.setTransform = function(el, style){
        el.style.transform = style;
    };
    
    /**
     * update current translateX position precent
     */
    this.updateCurTrans = function(el, opts){

        var transX = -( opts.scale * this.curIndex - (1/2 - opts.scale/2) ) / (opts.listLength * opts.scale) * 100;

        this.setTransform(el, 'translate3d(' + transX + '%,0,0)');
    };

     /**
     * update slide direction, only trigger by slide action not by autoplay
     */
    this.updateDirection = function(diffX, diffY){

        //previous one
        if(diffX >= 10 && diffY < 5){

            this.slideDirection = false;
            this.doSlide(this.slideDirection, this.defaults);

        }else if(diffX <= -10 && diffY < 5){
        //next one
            this.slideDirection = true;
            this.doSlide(this.slideDirection, this.defaults);

        }else{
            this.touchCancelHandler();
        }

    };

    /**
     * update current item index
     */
    this.updateCurIndex = function(direction){
        //next one
        if(direction){

            if(this.curIndex < this.defaults.maxIndex){
                this.curIndex++;

            }else if(this.curIndex == this.defaults.maxIndex  && this.defaults.loop){
                this.curIndex = this.defaults.minIndex+2;
            }

        }else{
        //previous one
            if(this.curIndex > this.defaults.minIndex){
                this.curIndex--;
            }else if(this.curIndex == this.defaults.minIndex  && this.defaults.loop){
                this.curIndex = this.defaults.maxIndex-2;
            }
        }
    };

    /**
     * check slide direction
     */
    this.checkSlideDirection = function(el){

        if(this.curIndex == this.defaults.maxIndex){

            /* 在进行translate的时候，一定要同时更新curIndex */

            this.curIndex = this.defaults.minIndex + 1;

            this.slideLoop(el);

        }
        if(this.curIndex == this.defaults.minIndex){

            /* 在进行translate的时候，一定要同时更新curIndex */

            this.curIndex = this.defaults.maxIndex - 1;

            this.slideLoop(el);
        }
    };

    /**
     * special handler for slide loop
     */
    this.slideLoop = function(el){

            setTimeout(function(){

                that.setTransition(el, 'none');

                that.updateCurTrans(el, that.defaults);

                setTimeout(function(){

                    that.setTransition(el, that.defaults.transition);

                },100);

            },that.defaults.durTime*1000);

    };

    /**
     * do slide animation function
     */
    this.doSlide = function(direction, opts){

        //listen touchEnd and then update curIndex
        this.updateCurIndex(direction);

        //perform animation
        this.slide(opts);

    };

    /**
     * list slide animation for translate3d(x, 0, 0);
     */
    this.slide = function(opts){

        if(this.defaults.isScale){

            var idxarr = [];

            /**
             * deal with the loop scale problem 
             * if curIndex == maxIndex || minIndex, then scale two item at the same time
             * 
             */
            if(this.curIndex == this.defaults.maxIndex){
                idxarr = [this.curIndex, this.defaults.minIndex + 1];
            }
            else if(this.curIndex == this.defaults.minIndex){
                idxarr = [this.curIndex, this.defaults.maxIndex - 1];
            }else{
                idxarr = [this.curIndex];
            }

            this.scale(idxarr);
        }

        this.updateCurTrans(this.getListEl(), opts);
        

        if(this.defaults.loop){
           this.checkSlideDirection(this.getListEl());
        }

    };

    /**
     * list item aniamtion for scale3d();
     */
    this.scale = function(idxArr){

        /*idxArr 可同时scale多个元素*/
        var els = this.getLiItems();
        
        for(var i = 0; i < this.defaults.listLength; i++){

            //setTimeout(function(){ console.log(slideAnimation.getItemWidth(els[i])) },0);

            if(idxArr.includes(i)){
                els[i].style.transform = this.defaults.scaleBig;
            }else{
                els[i].style.transform = this.defaults.scaleSmall;
            }
        }
    };

    /**
     * defaults.autoplay == true
     */
    this.autoplay = function(opts){

        this.timer = setInterval(function(){

            that.doSlide(that.autoDirection, opts);

        }, this.defaults.stayTime);

    };

    /**
     * defaults.autoplay == true;
     * clearInterval and autoplay;
     */
    this.checkIsAutoplay = function(){
        //autoplay == true
        if(that.defaults.autoplay){
            clearInterval(that.timer);
            that.autoplay(that.defaults);
        }
    };

    /**
     * click prev btn event handler
     */
    this.prevHandler = function(event){

        if(that.defaults.autoplay){
            clearInterval(that.timer);
        }

        that.slideDirection = false;
        that.doSlide(that.slideDirection, that.defaults);

        that.checkIsAutoplay();
    };

    /**
     * click next btn event handler
     */
    this.nextHandler = function(event){

        if(that.defaults.autoplay){
            clearInterval(that.timer);
        }

        that.slideDirection = true;
        that.doSlide(that.slideDirection, that.defaults);
        
        that.checkIsAutoplay();
    };

    /**
     * touchstart event handler
     */
    this.touchStartHandler = function(event){

        if(that.defaults.autoplay){
            clearInterval(that.timer);
        }

        var touches = event.changedTouches;
        that.startXY = { X: touches[0].pageX, Y: touches[0].pageY };
    };

    /**
     * touchmove event handler
     */
    this.touchMoveHandler = function(event){
        event.preventDefault();
    };

    /**
     * touchEnd event handler
     */
    this.touchEndHandler = function(event){

        var touches = event.changedTouches;

        that.endXY = { X: touches[0].pageX, Y: touches[0].pageY };

        var diffX = that.endXY.X - that.startXY.X,
            diffY = that.endXY.Y - that.startXY.Y;
        
        that.updateDirection(diffX, diffY);

        that.checkIsAutoplay();

    };

    /**
     * touchEnd event handler
     */
    this.touchCancelHandler = function(event){
        that.checkIsAutoplay();
    }

    /**
     * 
     */
    this.resizeHandler = function(){

    };

    /**
     * addEventListener to list
     */
    this.setupListener = function(){

        var el = this.getListEl();
        if(el){
            el.addEventListener('touchstart', this.touchStartHandler, false);
            el.addEventListener('touchmove', this.touchMoveHandler, false);
            el.addEventListener('touchend', this.touchEndHandler, false);
            el.addEventListener('touchcancel', this.touchCancelHandler, false);
        }

        var prevBtn = this.getPrevBtn(),
            nextBtn = this.getNextBtn();

        if(prevBtn){
            prevBtn.addEventListener('click', this.prevHandler, false);
        }
        if(nextBtn){
            nextBtn.addEventListener('click', this.nextHandler, false);
        }

        window.addEventListener('resize', this.resizeHandler, false);
    };
    
    /**
     * initial
     */
    this.init = function(opts){
        
        //合并覆盖默认参数, opts 覆盖this.defaults，并返回this.defaults
        $.extend(true, this.defaults, opts);

        this.setupListener();

        /* update curIndex from defaults.defaultIndex */
        this.curIndex = this.defaults.defaultIndex;

        /* loop == true, add item for ul-list */
        if(this.defaults.loop){
            this.createLiItem();
        }
        
        /**
         * initial item scale
         * scale should be after createLiItem
         */
        if(this.defaults.isScale){
            this.scale([this.defaults.defaultIndex]);
        }

        /* initial list translateX */
        this.slide(this.defaults);

        if(this.defaults.autoplay){
            this.autoDirection = this.defaults.autoDirection;
            this.autoplay(this.defaults);
        }

    };
    
    this.init(opts);

}
/*
 * mosaicTransition 马赛克离场效果
 *
 * Copyright (c) 2017
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  1.0.0
 * Author by xiaogezi
 * 
 */
var mosaicTransition = {
    debug: /debugger;/g.test(location.href),         // 调试模式开关
    log: function () {                               // 日志输出
        this.debug && window.console && console.log.apply && console.log.apply(console, arguments);
    },
    cssclass: 'mosaic',
    throttle: function (method, context) {           // 函数节流
        clearTimeout(method.tId);
        method.tId = setTimeout(function () {
            method.call(context);
        }, 100);
    },
    /* 
       TODO 后续要做成 ajax 加载，页面不刷新
    */
    createIframe: function () {                      // 创建隐藏 <iframe> 做预加载
        var id = '_inner_frame',
            el = document.getElementById(id);
        if (!el) {
            el = document.createElement('iframe');
            el.id = id;
            el.name = '_inner';
            el.className = 'hide';
            el.frameborder = 0;
            document.body.appendChild(el);
        }
        return el;
    },
    updateHeight: function(){
        var top = $('._fake-header').height();
        $('.mosaic').css({height: document.documentElement.scrollHeight});
    },
    initDom: function(){
        var style=' style="flex:1;"';
        var html = [];
        var l = location.href.indexOf('/brands') == -1 ? 3 : 4;
        for(var i = 0; i < l; i++){
            html.push('<i' + style + '></i>');
        }
        $('<div class="mosaic"><div class="mosaic-inner">' + html.join('\n') + '</div></div>').appendTo('body');
        this.updateHeight();
    },
    events: function(){
        var me = this;
        var $win = $(window),
            $body = $('body');
        // 响应页面 resize 事件
        $win.resize(function (e) {
            me.throttle(me.updateHeight, me);
        })

        // 响应“加载更多”自定义事件
        $win.on('moreLoaded', function (e) {
            me.throttle(me.updateHeight, me);
        })

        $('body').delegate('a[href]', 'mousedown', function (e) {
            var eo = this,
                href = eo.getAttribute('href'),
                target = eo.getAttribute('target');
            if(e.button == 0 && !e.ctrlKey && href && target != '_blank' && href.indexOf('#') != 0 && href.indexOf('javascript:') != 0){
                $(eo).attr('target', '_inner');
            }else{
                $(eo).data('ignore', 'true');
            }
        })

        $('body').delegate('a[target="_inner"]', 'mouseup', function (e) {
            var $eo = $(this);
            if(!$eo.data('ignore')){
                document.body.classList.add('mosaic-animated');
                var href = this.href;
                if(!me.debug){
                    setTimeout(function () {
                        location.href = href;
                    }, 410);
                }else{
                    setTimeout(function () {
                        location.reload();
                    }, 1500);
                }
            }
        })
    },
    init: function () { // 初始化组件
        var me = this;
        me.log('[mosaicTransition init]');
        me.initDom();
        me.events();
        me.createIframe();
        me.debug && $('body').addClass('debugger-mosaic');  // 调试模式下添加样式
    }
};
/*
 * 全局 Search 组件
 *
 * Copyright (c) 2017
 *
 * Version:  1.0.0
 * Author by Xiaogezi
 */
(function ($) {

	var search = {
		keyword: null,
		page: 1,
		pagesize: 10,
		eof: false,
		showclass: '-search-on',
		hideclass: '-search-off',
		emptyclass: '-search-empty',
		loadingcss: /loading2/.test(location.href) ? '-loading-icon2' : '-loading-icon',
		$body: $('body'),
		$search: $('.-search'),
		$searchForm: $('.-search-form'),
		$keyword: $('.-search-input'),
		$searchBtn: $('.-m-search,._nav-search a'),
		$reset: $('.-search-reset'),
		$result: $('.-search-result'),
		$loading: $('.-search-loading'),
		$resultGallery: $('.-search-gallery'),
		loadingTimeout: 800, // 加载延迟时间，原则上应该设置为 0，但为了 loading 动画，哎
		data: null,
		windowHeight : window.innerHeight,
		debug: /debugger;/g.test(location.href),         // 调试模式开关
		log: function () {
			this.debug && window.console && console.log.apply && console.log.apply(console, arguments);
		},
		throttle: function (method, context, timeout, args) {
			clearTimeout(method.tId);
			method.tId = setTimeout(function () {
				method.call(context, args);

			}, timeout || 100);
		},
		css: function () { // 加载 search.css
			
		},
		reset: function () { // 复位
			var me = this;
			me.keyword = null;
			me.$resultGallery.html('');
			me.page = 1;
			me.eof = false;
			me.data = null;
			me.$body.removeClass(this.emptyclass);
			//me.$resultGallery.css('flex', 1);	// 标题需要展示两行时，解开此注释
		},
		scrollHandler: function (e) { // 滚动事件
			var me = this;
			if (me.eof) return;
			var gallery = me.$resultGallery.get(0),
				scrollTop = gallery.scrollTop;
			if (scrollTop == 0) return;	// 防止内容为空时触发

			var clientHeight = gallery.clientHeight,
				scrollHeight = gallery.scrollHeight;
			if (scrollTop + clientHeight == scrollHeight) {
				me.log('[load 加载第', me.page, ' 页]');
				me.log('scroll-load');
				me.load();
			}
		},
		events: function () { // 事件初始化
			var me = this;

			me.$searchBtn.on('click', function (e) { // 搜索按钮点击
				me.$search.removeClass('hide');
				me.toggleSearch(true);
				setTimeout(function(){
					me.$keyword.focus();
				}, 300);
				e.preventDefault();
			})

			me.$reset.on('click', function () { // 关闭按钮点击
				me.$body.addClass(me.hideclass);
				me.$search.one('transitionend', function(){
					me.reset();
					me.$keyword.val('');
					me.$body.removeClass(me.hideclass + ' ' + me.showclass);
					me.$search.addClass('hide');
					me.$result.css('height', null);
				})
			})

			me.$keyword.on('keydown', function (e) { // 关键词输入事件
				if (e.keyCode != 13) return;
				this.blur();
				var val = $.trim(me.$keyword.val());
				if (val && val != me.keyword) {
					me.reset();
					me.keyword = val;

					me.$result.velocity({ 'height': me.windowHeight - me.$searchForm.height() }, 500, function () {
						me.$loading.removeClass('hide');
						me.$loading.find('.-loading-icon').addClass(me.loadingcss); // TODO 测试 loading 效果使用
						me.log('[load keyword]');
						me.throttle(me.load, me, me.loadingTimeout);
					});
				}
			})

			me.$resultGallery.on('scroll', function (e) { // 结果浮层滚动绑定
				me.throttle(me.scrollHandler, me, null, e);
			})
		},
		emptyTips: function () { // 搜索结果为空时，显示推荐
			this.$body.addClass(this.emptyclass);
			this.recommend();
		},
		lazy: function () { // 图片懒加载绑定
			var me = this;
			var all = me.$resultGallery.find('.lazy');
			all.lazyload({
				container: me.$resultGallery,
				threshold: 0,
				effect: false,
				update: true,
				load: function () {
					$(this).removeClass('lazy');
				}
			});
			var anis = me.$resultGallery.find('.lazy-ani');
			anis.lazyload({
				container: me.$resultGallery,
				threshold: 0,
				effect: false,
				update: false,
				load: function () {
					$(this).removeClass('lazy-ani');
				}
			});
			me.$resultGallery.resize(); // 主动触发 resize 事件，lazyload 会自动 update 一次
		},
		categorys: { // TODO 暂时是写死的，后续需要后端输出 /category/ 接口
			1: 'ARTICLES',
			2: 'BRANDS',
			3: 'RESOURCES',
			10: 'FEATURED'
		},
		getURI: function(item){ // 获取结果链接
			var uri = '';
			if(item.category == 2){ 	// TODO
				uri = '/brands/#' + item.attachment;
			}else if(item.category == 3){
				uri = '/resources/#' + item.attachment;
			}else{
				uri = '/articles/' + (item.permalink || item.id) + '.html';
			}
			return uri;
		},
		renderTitle: function(title){ // 渲染换行的标题
			return title.replace(/\n/g, '');
		},
		renderCategory: function(category, categoryName){ // 渲染分类
			var name = this.categorys[category];
			return name || categoryName || '';
		},
		renderAbstract: function(abstract, category){ // 渲染摘要
			return abstract;
		},
		renderArticles: function (data) { // 渲染文章结果
			var me = this;
			var html = [];
			var source = $('#itemTpl').html();
			data.forEach(function (item, i) {
				var img = '', imgsrc = '';

				if(item.category == '1'){
					img = 'https://cdn-isux.qq.com/upload/covers/'+item.id+'_a.jpg';
					imgsrc = 'https://cdn-isux.qq.com/upload/covers/'+item.id+'_a_src.jpg';
				}else{
					img = item.image || 'about:blank';
					imgsrc = item.image1x || item.image || 'about:blank';
				}

				html.push($.tpl(source, {
					cssclass: 'category-' + item.category,
					url: me.getURI(item, item.id, item.category, item.permalink),
					title: me.renderTitle(item.title),
					abstract: me.renderAbstract(item.abstract, item.category),
					category_name: me.renderCategory(item.category, item.category_name),
					image: img,
					image1x: imgsrc,
					//dataset: ' style="animation-delay:.0' + i + 's"'	// 需要一个个显示时，解开此注释
				}));
			});
			me.$resultGallery.append(html.join('\n'));

			document.getElementById('searchResult').dispatchEvent(scrollShowAnimation); //自定义事件 scrollShowAnimation
			
			/* // 搜索结果只有一行时，修复 // 标题需要展示两行时，解开此注释
			if(me.$resultGallery.height() == me.$resultGallery.get(0).scrollHeight){
				me.$resultGallery.css('flex', 'none');
			}
			*/
		},
		renderLinks: function (data) { // 渲染热搜结果
			var me = this;
			var html = [];
			var source = $('#itemTpl').html();
			if(data.length){
				html.push('<div class="-search-links"><h3 class="-search-title lazy-ani" data-class="ani-slideup">以下为外部链接</h3>');
				data.forEach(function (item, i) {
					html.push($.tpl(source, {
						cssclass: ' link-item',
						url: item.url,
						title: me.renderTitle(item.title),
						abstract: item.desc,
						category_name: '',
						image: item.logo || 'about:blank',
						image1x: item.logo || 'about:blank'
					}));
				});
				html.push('</div>');
			}
			me.$resultGallery.append(html.join('\n'));
			document.getElementById('searchResult').dispatchEvent(scrollShowAnimation); //自定义事件 scrollShowAnimation
		},
		load: function () { // 请求搜索分页数据
			var me = this;
			$.ajax({
				url: '/search/list/',
				data: {
					__CSRF__: G_csrf,
					keyword: me.keyword,
					page: me.page,
					pagesize: me.pagesize
				},
				success: function (res) {
					if (res.errno == 0) {

						var result = res.data.result;
						if (result.data.length > 0) {
							me.data = result.data;
							me.renderArticles(result.data);
							me.lazy();
							me.page++;
						}
						me.$loading.addClass('hide');
						if (result.totalPages == 0 || result.totalPages == result.currentPage) {
							me.eof = true;
							me.links();
						}
					} else {
						// TODO 异常处理
					}
				}
			})
		},
		links: function () { // 请求热搜内容
			var me = this;
			$.ajax({
				url: '/search/links/',
				data: {
					__CSRF__: G_csrf,
					keyword: me.keyword,
					page: 1,
					pagesize: 10
				},
				success: function (res) {
					if (res.errno == 0) {
						var html = [];
						var source = $('#itemTpl').html();
						var result = res.data;
						if (result.data.length > 0) {
							//me.renderLinks(result.data);	// TODO 当前已经注释掉了，搜索外链的结果，如需要放出，解开注释即可。
							me.lazy();
						} else {
							if (!me.data) {
								me.emptyTips();
							}
						}
						me.$loading.addClass('hide');
					}
				}
			})
		},
		recommend: function () { // 请求推荐的内容
			var me = this;
			$.ajax({
				url: '/search/list/',
				data: {
					__CSRF__: G_csrf,
					flag: 'recommended',
					page: 1,
					pagesize: 10
				},
				success: function (res) {
					if (res.errno == 0) {
						var html = [];
						var source = $('#itemTpl').html();
						var result = res.data.result;
						if (result.data.length > 0) {
							me.renderArticles(result.data);
							me.lazy();
						}
						me.$loading.addClass('hide');
					}
				}
			})
		},
		toggleSearch: function (add) { // 显示/隐藏搜索界面
			this.$body.toggleClass(this.showclass, add);
		},
		init: function () {
			this.css();
			this.events();
		}
	};
	search.init();

	window.search = search;

})(window.Zepto || window.jQuery);
/* 初始化 lazyload */
$('.lazy').lazyload({threshold : 450, effect : false, skip_above: false});
/* 初始化 mosaicTransition */
mosaicTransition.init();

/* check if it is mobile or PC */
var u = navigator.userAgent, app = navigator.appVersion;
/* global variable window.mobile*/
window.mobile = !!u.match(/AppleWebKit.*Mobile.*/);


/** initial
 *  navigator & 
 *  show-animate-item animation & 
 *  fade-animate-item animation
 */
var DOCSCROLL = new ScrollAnimation({scrollElement: document});

 /* 搜索页面的滚动效果 */
var SEARCHSCROLL = new ScrollAnimation({
    scrollElement: document.getElementById('searchResult'),
    show:{
        animateItem: 'show-search-animate-item',
        delayTime:0
    }
});

/* mobile navigator handler & animation */
var mNavlist = $('.js-m-navlist');

mNavlist.on('click',function(){
    var addclass = $(this).parent('._m-nav-list').data('cssclass'),
        isShowed = $(this).parent('._m-nav-list').hasClass(addclass);

    /* calculation the client height */
    var clientHeight = document.documentElement.clientHeight,
        setHeight = clientHeight*0.56 + 'px',
        padding = clientHeight*0.22 + 'px',
        navWrapper = $('._m-nav-wrapper');

    navWrapper.css({
        'height': setHeight,
        'padding': padding+' 0 '+padding,
        'transform': 'translate3d(0,-'+clientHeight+'px,0)',
    });

    /* if it is showed */
    if(isShowed){
        $(this).parent('._m-nav-list').removeClass(addclass);
        /* hide the navlist */
        navWrapper.css({
            'transform': 'translate3d(0,-'+clientHeight+'px,0)'
        });

    }else{
        /* if it is closed */
        $(this).parent('._m-nav-list').addClass(addclass);
        /* show the navlist */
        navWrapper.css({
            'transform': 'translate3d(0,0,0)'
        });
    }
});

// Firebug Lite 引入
if(/#firebug/.test(location.href)){
    (function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+'NS']&&F.documentElement.namespaceURI;E=E?F[i+'NS'](E,'script'):F[i]('script');E[r]('id',b);E[r]('src',I+g+T);E[r](b,u);(F[e]('head')[0]||F[e]('body')[0]).appendChild(E);E=new Image;E[r]('src',I+L);})(document,'createElement','setAttribute','getElementsByTagName','FirebugLite','4','firebug-lite.js','releases/lite/latest/skin/xp/sprite.png','https://getfirebug.com/','#startOpened');
}