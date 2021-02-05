if (typeof $ === "undefined") {
    if (jQuery != "undefined") {
        $ = jQuery;
    }
}

/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'])+parseFloat(e['border'+n+'Width'])}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth),c=parseFloat(m.borderLeftWidth);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop),y=parseFloat(m.marginLeft);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f]),E=parseFloat(w['border'+f+'Width']),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function r(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||a.triggerTransitionEnd(n)}),t),this}var a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&a.isElement(s)?"element":null===(l=s)||"undefined"==typeof l?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?a.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};a.jQueryDetection(),e.fn.emulateTransitionEnd=r,e.event.special[a.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var l="alert",c=e.fn[l],h=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',h._handleDismiss(new h)),e.fn[l]=h._jQueryInterface,e.fn[l].Constructor=h,e.fn[l].noConflict=function(){return e.fn[l]=c,h._jQueryInterface};var u=e.fn.button,d=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();("LABEL"!==i.tagName||o&&"checkbox"!==o.type)&&d._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=d._jQueryInterface,e.fn.button.Constructor=d,e.fn.button.noConflict=function(){return e.fn.button=u,d._jQueryInterface};var f="carousel",g=".bs.carousel",m=e.fn[f],p={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},_={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},v={TOUCH:"touch",PEN:"pen"},b=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(g),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=s({},p,t),a.typeCheckConfig(f,t,_),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&v[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&v[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,l=this._element.querySelector(".active.carousel-item"),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&l&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:c,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),a.reflow(h),e(l).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(l).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(l).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=s({},p,e(this).data());"object"==typeof n&&(o=s({},o,n));var r="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof r){if("undefined"==typeof i[r])throw new TypeError('No method named "'+r+'"');i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var r=s({},e(o).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(r.interval=!1),t._jQueryInterface.call(e(o),r),l&&e(o).data("bs.carousel").to(l),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return p}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",b._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);b._jQueryInterface.call(o,o.data())}})),e.fn[f]=b._jQueryInterface,e.fn[f].Constructor=b,e.fn[f].noConflict=function(){return e.fn[f]=m,b._jQueryInterface};var y="collapse",E=e.fn[y],w={toggle:!0,parent:""},T={toggle:"boolean",parent:"(string|element)"},C=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=a.getSelectorFromElement(s),l=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&l.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(r[0].toUpperCase()+r.slice(1)),c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(c),this._element.style[r]=this._element[l]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],l=a.getSelectorFromElement(r);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=s({},w,t)).toggle=Boolean(t.toggle),a.typeCheckConfig(y,t,T),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;a.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=a.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),r=s({},w,i.data(),"object"==typeof n&&n?n:{});if(!o&&r.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(r.toggle=!1),o||(o=new t(this,r),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return w}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=a.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();C._jQueryInterface.call(t,i)}))})),e.fn[y]=C._jQueryInterface,e.fn[y].Constructor=C,e.fn[y].noConflict=function(){return e.fn[y]=E,C._jQueryInterface};var S="dropdown",k=e.fn[S],D=new RegExp("38|40|27"),N={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},A={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},I=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=r:a.isElement(this._config.reference)&&(l=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=s({},this.constructor.Default,e(this._element).data(),t),a.typeCheckConfig(S,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),s({},t,this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=a.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!D.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return N}},{key:"DefaultType",get:function(){return A}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',I._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",I._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",I._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),I._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[S]=I._jQueryInterface,e.fn[S].Constructor=I,e.fn[S].noConflict=function(){return e.fn[S]=k,I._jQueryInterface};var O=e.fn.modal,j={backdrop:!0,keyboard:!0,focus:!0,show:!0},x={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},P=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=s({},j,t),a.typeCheckConfig("modal",t,x),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;var i=this._element.scrollHeight>document.documentElement.clientHeight;i||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var o=a.getTransitionDurationFromElement(this._dialog);e(this._element).off(a.TRANSITION_END),e(this._element).one(a.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),i||e(t._element).one(a.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var l=a.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(a.TRANSITION_END,r).emulateTransitionEnd(l)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&a.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),r=s({},j,e(this).data(),"object"==typeof n&&n?n:{});if(o||(o=new t(this,r),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else r.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return j}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=a.getSelectorFromElement(this);o&&(n=document.querySelector(o));var r=e(n).data("bs.modal")?"toggle":s({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||l.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));P._jQueryInterface.call(e(n),r,this)})),e.fn.modal=P._jQueryInterface,e.fn.modal.Constructor=P,e.fn.modal.noConflict=function(){return e.fn.modal=O,P._jQueryInterface};var R=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],L={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,F=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Q(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===R.indexOf(n)||Boolean(t.nodeValue.match(q)||t.nodeValue.match(F));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var B="tooltip",H=e.fn[B],U=new RegExp("(^|\\s)bs-tooltip\\S+","g"),M=["sanitize","whiteList","sanitizeFn"],W={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},V={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},z={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:L,popperConfig:null},K={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},X=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=a.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),l=a.getUID(this.constructor.NAME);r.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(r).addClass("fade");var c="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(c);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Q(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return s({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return V[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==M.indexOf(t)&&delete n[t]})),"number"==typeof(t=s({},this.constructor.Default,n,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a.typeCheckConfig(B,t,this.constructor.DefaultType),t.sanitize&&(t.template=Q(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(U);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return z}},{key:"NAME",get:function(){return B}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return K}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return W}}]),t}();e.fn[B]=X._jQueryInterface,e.fn[B].Constructor=X,e.fn[B].noConflict=function(){return e.fn[B]=H,X._jQueryInterface};var Y="popover",$=e.fn[Y],J=new RegExp("(^|\\s)bs-popover\\S+","g"),G=s({},X.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Z=s({},X.DefaultType,{content:"(string|element|function)"}),tt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},et=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(J);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return G}},{key:"NAME",get:function(){return Y}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return tt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Z}}]),s}(X);e.fn[Y]=et._jQueryInterface,e.fn[Y].Constructor=et,e.fn[Y].noConflict=function(){return e.fn[Y]=$,et._jQueryInterface};var nt="scrollspy",it=e.fn[nt],ot={offset:10,method:"auto",target:""},st={offset:"number",method:"string",target:"(string|element)"},rt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=a.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=s({},ot,"object"==typeof t&&t?t:{})).target&&a.isElement(t.target)){var n=e(t.target).attr("id");n||(n=a.getUID(nt),e(t.target).attr("id",n)),t.target="#"+n}return a.typeCheckConfig(nt,t,st),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return ot}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);rt._jQueryInterface.call(i,i.data())}})),e.fn[nt]=rt._jQueryInterface,e.fn[nt].Constructor=rt,e.fn[nt].noConflict=function(){return e.fn[nt]=it,rt._jQueryInterface};var at=e.fn.tab,lt=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=a.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var l=e.Event("hide.bs.tab",{relatedTarget:this._element}),c=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),l=function(){return o._transitionComplete(t,s,i)};if(s&&r){var c=a.getTransitionDurationFromElement(s);e(s).removeClass("show").one(a.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),lt._jQueryInterface.call(e(this),"show")})),e.fn.tab=lt._jQueryInterface,e.fn.tab.Constructor=lt,e.fn.tab.noConflict=function(){return e.fn.tab=at,lt._jQueryInterface};var ct=e.fn.toast,ht={animation:"boolean",autohide:"boolean",delay:"number"},ut={animation:!0,autohide:!0,delay:500},dt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),a.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=s({},ut,e(this._element).data(),"object"==typeof t&&t?t:{}),a.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"DefaultType",get:function(){return ht}},{key:"Default",get:function(){return ut}}]),t}();e.fn.toast=dt._jQueryInterface,e.fn.toast.Constructor=dt,e.fn.toast.noConflict=function(){return e.fn.toast=ct,dt._jQueryInterface},t.Alert=h,t.Button=d,t.Carousel=b,t.Collapse=C,t.Dropdown=I,t.Modal=P,t.Popover=et,t.Scrollspy=rt,t.Tab=lt,t.Toast=dt,t.Tooltip=X,t.Util=a,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("UniversalTilt",[],t):"object"==typeof exports?exports.UniversalTilt=t():e.UniversalTilt=t()}("object"!=typeof window?global.window=global:window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=(i=n(1))&&i.__esModule?i:{default:i};var o=s.default;t.default=o,t.default=s.default,e.exports=t.default},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.length>0?this.init(t,n):0!==t.length&&(this.element=t,this.settings=this.settings(n),this.reverse=this.settings.reverse?-1:1,this.settings.shine&&this.shine(),this.element.style.transform="perspective(".concat(this.settings.perspective,"px)"),this.addEventListeners())}var t,n,s;return t=e,(n=[{key:"init",value:function(t,n){var i=!0,s=!1,o=void 0;try{for(var a,r=t[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var l=a.value;this.universalTilt=new e(l,n)}}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}}},{key:"isMobile",value:function(){if(window.DeviceMotionEvent&&"ontouchstart"in document.documentElement)return!0}},{key:"addEventListeners",value:function(){var e=this;navigator.userAgent.match(this.settings.exclude)||(this.isMobile()?window.addEventListener("devicemotion",function(t){return e.onDeviceMove(t)}):("element"===this.settings["position-base"]?this.base=this.element:"window"===this.settings["position-base"]&&(this.base=window),this.base.addEventListener("mouseenter",function(){return e.onMouseEnter()}),this.base.addEventListener("mousemove",function(t){return e.onMouseMove(t)}),this.base.addEventListener("mouseleave",function(){return e.onMouseLeave()})))}},{key:"onMouseEnter",value:function(){this.updateElementPosition(),this.transitions(),"function"==typeof this.settings.onMouseEnter&&this.settings.onMouseEnter(this.element)}},{key:"onMouseMove",value:function(e){var t=this;this.event=e,this.updateElementPosition(),window.requestAnimationFrame(function(){return t.update()}),"function"==typeof this.settings.onMouseMove&&this.settings.onMouseMove(this.element)}},{key:"onMouseLeave",value:function(){var e=this;this.transitions(),window.requestAnimationFrame(function(){return e.reset()}),"function"==typeof this.settings.onMouseLeave&&this.settings.onMouseLeave(this.element)}},{key:"onDeviceMove",value:function(e){this.event=e,this.update(),this.updateElementPosition(),this.transitions(),"function"==typeof this.settings.onDeviceMove&&this.settings.onDeviceMove(this.element)}},{key:"reset",value:function(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.settings.reset&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")),this.settings.shine&&!this.settings["shine-save"]&&Object.assign(this.shineElement.style,{transform:"rotate(180deg) translate3d(-50%, -50%, 0)",opacity:"0"})}},{key:"getValues",value:function(){var e,t,n;this.isMobile()?(e=this.event.accelerationIncludingGravity.x/4,t=this.event.accelerationIncludingGravity.y/4,90===window.orientation?(n=(1-t)/2,t=(1+e)/2,e=n):-90===window.orientation?(n=(1+t)/2,t=(1-e)/2,e=n):0===window.orientation?(t=n=(1+t)/2,e=(1+e)/2):180===window.orientation&&(t=n=(1-t)/2,e=(1-e)/2)):"element"===this.settings["position-base"]?(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height):"window"===this.settings["position-base"]&&(e=this.event.clientX/window.innerWidth,t=this.event.clientY/window.innerHeight);e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);var i=(this.settings.max/2-e*this.settings.max).toFixed(2),s=(t*this.settings.max-this.settings.max/2).toFixed(2),o=Math.atan2(e-.5,.5-t)*(180/Math.PI);return{tiltX:this.reverse*i,tiltY:this.reverse*s,angle:o}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(){var e=this.getValues();this.element.style.transform="perspective(".concat(this.settings.perspective,"px)\n      rotateX(").concat(this.settings.disabled&&"X"===this.settings.disabled.toUpperCase()?0:e.tiltY,"deg)\n      rotateY(").concat(this.settings.disabled&&"Y"===this.settings.disabled.toUpperCase()?0:e.tiltX,"deg)\n      scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")"),this.settings.shine&&Object.assign(this.shineElement.style,{transform:"rotate(".concat(e.angle,"deg) translate3d(-50%, -50%, 0)"),opacity:"".concat(this.settings["shine-opacity"])}),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e}))}},{key:"shine",value:function(){var e=document.createElement("div"),t=document.createElement("div");e.classList.add("shine"),t.classList.add("shine-inner"),e.appendChild(t),this.element.appendChild(e),this.shineWrapper=this.element.querySelector(".shine"),this.shineElement=this.element.querySelector(".shine-inner"),Object.assign(this.shineWrapper.style,{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",overflow:"hidden"}),Object.assign(this.shineElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:"".concat(2*this.element.offsetWidth,"px"),height:"".concat(2*this.element.offsetWidth,"px"),transform:"rotate(180deg) translate3d(-50%, -50%, 0)","transform-origin":"0% 0%",opacity:"0"})}},{key:"transitions",value:function(){var e=this;clearTimeout(this.timeout),this.element.style.transition="all ".concat(this.settings.speed,"ms ").concat(this.settings.easing),this.settings.shine&&(this.shineElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.timeout=setTimeout(function(){e.element.style.transition="",e.settings.shine&&(e.shineElement.style.transition="")},this.settings.speed)}},{key:"settings",value:function(e){var t={"position-base":"element",reset:!0,exclude:null,shine:!1,"shine-opacity":0,"shine-save":!1,max:35,perspective:1e3,scale:1,disabled:null,reverse:!1,speed:300,easing:"cubic-bezier(.03, .98, .52, .99)",onMouseEnter:null,onMouseMove:null,onMouseLeave:null,onDeviceMove:null},n={};for(var i in t)if(i in e)n[i]=e[i];else if(this.element.getAttribute("data-".concat(i))){var s=this.element.getAttribute("data-".concat(i));try{n[i]=JSON.parse(s)}catch(e){n[i]=s}}else n[i]=t[i];return n}}])&&i(t.prototype,n),s&&i(t,s),e}();if(t.default=s,"undefined"!=typeof document){var o=document.querySelectorAll("[data-tilt]");o.length&&new s(o)}window.jQuery&&(window.jQuery.fn.universalTilt=function(e){new s(this,e)})}])});
/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.4
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(n,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};n.exports=t}).call(this,t(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),a=n(3),r=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,c,u=a.window.jarallax;a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=u,this},void 0!==a.jQuery&&((s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=r.default.apply(a.window,t);return"object"!==l(o)?o:this}).constructor=r.default.constructor,c=a.jQuery.fn.jarallax,a.jQuery.fn.jarallax=s,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=c,this}),i()(function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),b=n(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,h,p=b.window.navigator,d=-1<p.userAgent.indexOf("MSIE ")||-1<p.userAgent.indexOf("Trident/")||-1<p.userAgent.indexOf("Edge/"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function f(){h=s?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),(l?l.clientHeight:0)||b.window.innerHeight||document.documentElement.clientHeight):b.window.innerHeight||document.documentElement.clientHeight}f(),b.window.addEventListener("resize",f),b.window.addEventListener("orientationchange",f),b.window.addEventListener("load",f),i()(function(){f()});var g=[];function y(){g.length&&(g.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:b.window.innerWidth,wndH:h},r=!o||o.wndW!==a.wndW||o.wndH!==a.wndH||o.width!==a.width||o.height!==a.height,l=r||!o||o.top!==a.top||o.bottom!==a.bottom;g[t].oldData=a,r&&n.onResize(),l&&n.onScroll()}),b.window.requestAnimationFrame(y))}function v(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?e instanceof HTMLElement:e&&"object"===u(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n,o=e.length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===u(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e}var x=0,w=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=this;n.instanceID=x,x+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(p.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(p.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===u(l)&&void 0!==l.length&&(l=c(l,1)[0]),l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(p.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=s,(t=[{key:"css",value:function(t,n){return"string"==typeof n?b.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:b.window.innerWidth||document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t,n,o=this,i={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},a={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};o.options.keepImg||((e=o.$item.getAttribute("style"))&&o.$item.setAttribute("data-jarallax-original-styles",e),!o.image.useImgTag||(t=o.image.$item.getAttribute("style"))&&o.image.$item.setAttribute("data-jarallax-original-styles",t)),"static"===o.css(o.$item,"position")&&o.css(o.$item,{position:"relative"}),"auto"===o.css(o.$item,"z-index")&&o.css(o.$item,{zIndex:0}),o.image.$container=document.createElement("div"),o.css(o.image.$container,i),o.css(o.image.$container,{"z-index":o.options.zIndex}),d&&o.css(o.image.$container,{opacity:.9999}),o.image.$container.setAttribute("id","jarallax-container-".concat(o.instanceID)),o.$item.appendChild(o.image.$container),o.image.useImgTag?a=o.extend({"object-fit":o.options.imgSize,"object-position":o.options.imgPosition,"font-family":"object-fit: ".concat(o.options.imgSize,"; object-position: ").concat(o.options.imgPosition,";"),"max-width":"none"},i,a):(o.image.$item=document.createElement("div"),o.image.src&&(a=o.extend({"background-position":o.options.imgPosition,"background-size":o.options.imgSize,"background-repeat":o.options.imgRepeat,"background-image":o.image.bgImage||'url("'.concat(o.image.src,'")')},i,a))),"opacity"!==o.options.type&&"scale"!==o.options.type&&"scale-opacity"!==o.options.type&&1!==o.options.speed||(o.image.position="absolute"),"fixed"===o.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(o.$item).filter(function(e){var t=b.window.getComputedStyle(e),n=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return n&&"none"!==n||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),o.image.position=n.length?"absolute":"fixed"),a.position=o.image.position,o.css(o.image.$item,a),o.image.$container.appendChild(o.image.$item),o.onResize(),o.onScroll(!0),o.options.onInit&&o.options.onInit.call(o),"none"!==o.css(o.$item,"background-image")&&o.css(o.$item,{"background-image":"none"}),o.addToParallaxList()}},{key:"addToParallaxList",value:function(){g.push({instance:this}),1===g.length&&b.window.requestAnimationFrame(y)}},{key:"removeFromParallaxList",value:function(){var n=this;g.forEach(function(e,t){e.instance.instanceID===n.instanceID&&g.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n,o,i;"fixed"===this.image.position&&(n=(t=(e=this).image.$container.getBoundingClientRect()).width,o=t.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),i="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(n,"px ").concat(o,"px 0);\n            clip: rect(0, ").concat(n,"px, ").concat(o,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,h),h<n&&(a-=o*(n-h))):a=o*(n+h),1<o?r=Math.abs(a-h):o<0?r=a/o+Math.abs(a):r+=(h-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(h-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s,c,u,p=this,d=p.$item.getBoundingClientRect(),m=d.top,f=d.height,g={},y=d;p.options.elementInViewport&&(y=p.options.elementInViewport.getBoundingClientRect()),p.isElementInViewport=0<=y.bottom&&0<=y.right&&y.top<=h&&y.left<=b.window.innerWidth,(e||p.isElementInViewport)&&(t=Math.max(0,m),n=Math.max(0,f+m),o=Math.max(0,-m),i=Math.max(0,m+f-h),a=Math.max(0,f-(m+f-h)),r=Math.max(0,-m+h-f),l=1-(h-m)/(h+f)*2,s=1,f<h?s=1-(o||i)/f:n<=h?s=n/h:a<=h&&(s=a/h),"opacity"!==p.options.type&&"scale-opacity"!==p.options.type&&"scroll-opacity"!==p.options.type||(g.transform="translate3d(0,0,0)",g.opacity=s),"scale"!==p.options.type&&"scale-opacity"!==p.options.type||(c=1,p.options.speed<0?c-=p.options.speed*s:c+=p.options.speed*(1-s),g.transform="scale(".concat(c,") translate3d(0,0,0)")),"scroll"!==p.options.type&&"scroll-opacity"!==p.options.type||(u=p.parallaxScrollDistance*l,"absolute"===p.image.position&&(u-=m),g.transform="translate3d(0,".concat(u,"px,0)")),p.css(p.image.$item,g),p.options.onScroll&&p.options.onScroll.call(p,{section:d,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:s,fromViewportCenter:l}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&r(e.prototype,t),n&&r(e,n),s}();v.constructor=w,t.default=v}]);
//# sourceMappingURL=jarallax.min.js.map

/*!
 * Name    : DEPRECATED Elements Extension for Jarallax. Use laxxx instead https://github.com/alexfoxy/laxxx
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(3),a=n.n(i),l=n(5);Object(l.default)(),r()(function(){void 0!==a.a.jarallax&&a.a.jarallax(document.querySelectorAll("[data-jarallax-element]"))})},function(t,e){t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},function(n,t,e){(function(t){var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};n.exports=e}).call(this,e(4))},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});var o=n(3),r=n.n(o);function i(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r.a.jarallax;void 0!==e&&(t=e.constructor,["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach(function(y){var h=t.prototype[y];t.prototype[y]=function(){var t=this;"initImg"===y&&null!==t.$item.getAttribute("data-jarallax-element")&&(t.options.type="element",t.pureOptions.speed=t.$item.getAttribute("data-jarallax-element")||t.pureOptions.speed);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if("element"!==t.options.type)return h.apply(t,n);switch(t.pureOptions.threshold=t.$item.getAttribute("data-threshold")||"",y){case"init":var r=t.pureOptions.speed.split(" ");t.options.speed=t.pureOptions.speed||0,t.options.speedY=r[0]?parseFloat(r[0]):0,t.options.speedX=r[1]?parseFloat(r[1]):0;var i=t.pureOptions.threshold.split(" ");t.options.thresholdY=i[0]?parseFloat(i[0]):null,t.options.thresholdX=i[1]?parseFloat(i[1]):null,h.apply(t,n);var a=t.$item.getAttribute("data-jarallax-original-styles");return a&&t.$item.setAttribute("style",a),!0;case"onResize":var l=t.css(t.$item,"transform");t.css(t.$item,{transform:""});var s=t.$item.getBoundingClientRect();t.itemData={width:s.width,height:s.height,y:s.top+t.getWindowData().y,x:s.left},t.css(t.$item,{transform:l});break;case"onScroll":var u=t.getWindowData(),c=(u.y+u.height/2-t.itemData.y-t.itemData.height/2)/(u.height/2),p=c*t.options.speedY,d=c*t.options.speedX,f=p,m=d;null!==t.options.thresholdY&&p>t.options.thresholdY&&(f=0),null!==t.options.thresholdX&&d>t.options.thresholdX&&(m=0),t.css(t.$item,{transform:"translate3d(".concat(m,"px,").concat(f,"px,0)")});break;case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return h.apply(t,n)}}))}}]);
//# sourceMappingURL=jarallax-element.min.js.map

/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(o,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};o.exports=t}).call(this,t(4))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(i=window)}e.exports=i},,function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t);var i=o(8),n=o(3),a=o.n(n),r=o(2),l=o.n(r),p=o(9);a.a.VideoWorker=a.a.VideoWorker||i.default,Object(p.default)(),l()(function(){void 0!==a.a.jarallax&&a.a.jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return v});var i=o(3),s=o.n(i);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){this.doneCallbacks=[],this.failCallbacks=[]}r.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o;)e[--o].apply(null,t)},resolve:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.doneCallbacks,t)},reject:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.failCallbacks,t)},done:function(e){this.doneCallbacks.push(e)},fail:function(e){this.failCallbacks.push(e)}};var l=0,p=0,u=0,d=0,c=0,y=new r,m=new r,v=function(){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=l,l+=1,o.loadAPI(),o.init())}var e,t,o;return e=i,(t=[{key:"extend",value:function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];var i=o[0]||{};return Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){i[e]=o[t][e]})}),i}},{key:"parseURL",value:function(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],p=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!p&&(this.type="local",p)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1)}):delete this.userEventsList[o])}},{key:"fire",value:function(e){for(var t=this,o=arguments.length,i=new Array(1<o?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,i)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),s.a.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&s.a.YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var e,o,i,n,a=this;a.videoImage?t(a.videoImage):("youtube"===a.type&&(e=["maxresdefault","sddefault","hqdefault","0"],o=0,(i=new Image).onload=function(){120!==(this.naturalWidth||this.width)||o===e.length-1?(a.videoImage="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"),t(a.videoImage)):(o+=1,this.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"))},i.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg")),"vimeo"===a.type&&((n=new XMLHttpRequest).open("GET","https://vimeo.com/api/v2/video/".concat(a.videoID,".json"),!0),n.onreadystatechange=function(){var e;4===this.readyState&&200<=this.status&&this.status<400&&(e=JSON.parse(this.responseText),a.videoImage=e[0].thumbnail_large,t(a.videoImage))},n.send(),n=null))}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(p){var u=this;u.$video?p(u.$video):u.onAPIready(function(){var e,t,o,i,n,a,r,l;u.$video||((e=document.createElement("div")).style.display="none"),"youtube"===u.type&&(u.playerOptions={},u.playerOptions.videoId=u.videoID,u.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},u.options.showContols||(u.playerOptions.playerVars.iv_load_policy=3,u.playerOptions.playerVars.modestbranding=1,u.playerOptions.playerVars.controls=0,u.playerOptions.playerVars.showinfo=0,u.playerOptions.playerVars.disablekb=1),u.playerOptions.events={onReady:function(t){u.options.mute?t.target.mute():u.options.volume&&t.target.setVolume(u.options.volume),u.options.autoplay&&u.play(u.options.startTime),u.fire("ready",t),u.options.loop&&!u.options.endTime&&(u.options.endTime=u.player.getDuration()-.1),setInterval(function(){u.getVolume(function(e){u.options.volume!==e&&(u.options.volume=e,u.fire("volumechange",t))})},150)},onStateChange:function(e){u.options.loop&&e.data===s.a.YT.PlayerState.ENDED&&u.play(u.options.startTime),t||e.data!==s.a.YT.PlayerState.PLAYING||(t=1,u.fire("started",e)),e.data===s.a.YT.PlayerState.PLAYING&&u.fire("play",e),e.data===s.a.YT.PlayerState.PAUSED&&u.fire("pause",e),e.data===s.a.YT.PlayerState.ENDED&&u.fire("ended",e),e.data===s.a.YT.PlayerState.PLAYING?o=setInterval(function(){u.fire("timeupdate",e),u.options.endTime&&u.player.getCurrentTime()>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())},150):clearInterval(o)},onError:function(e){u.fire("error",e)}},(i=!u.$video)&&((n=document.createElement("div")).setAttribute("id",u.playerID),e.appendChild(n),document.body.appendChild(e)),u.player=u.player||new s.a.YT.Player(u.playerID,u.playerOptions),i&&(u.$video=document.getElementById(u.playerID),u.videoWidth=parseInt(u.$video.getAttribute("width"),10)||1280,u.videoHeight=parseInt(u.$video.getAttribute("height"),10)||720)),"vimeo"===u.type&&(u.playerOptions={id:u.videoID,autopause:0,transparent:0,autoplay:u.options.autoplay?1:0,loop:u.options.loop?1:0,muted:u.options.mute?1:0},u.options.volume&&(u.playerOptions.volume=u.options.volume),u.options.showContols||(u.playerOptions.badge=0,u.playerOptions.byline=0,u.playerOptions.portrait=0,u.playerOptions.title=0,u.playerOptions.background=1),u.$video||(a="",Object.keys(u.playerOptions).forEach(function(e){""!==a&&(a+="&"),a+="".concat(e,"=").concat(encodeURIComponent(u.playerOptions[e]))}),u.$video=document.createElement("iframe"),u.$video.setAttribute("id",u.playerID),u.$video.setAttribute("src","https://player.vimeo.com/video/".concat(u.videoID,"?").concat(a)),u.$video.setAttribute("frameborder","0"),u.$video.setAttribute("mozallowfullscreen",""),u.$video.setAttribute("allowfullscreen",""),e.appendChild(u.$video),document.body.appendChild(e)),u.player=u.player||new s.a.Vimeo.Player(u.$video,u.playerOptions),u.options.startTime&&u.options.autoplay&&u.player.setCurrentTime(u.options.startTime),u.player.getVideoWidth().then(function(e){u.videoWidth=e||1280}),u.player.getVideoHeight().then(function(e){u.videoHeight=e||720}),u.player.on("timeupdate",function(e){r||(u.fire("started",e),r=1),u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&e.seconds>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.on("play",function(e){u.fire("play",e),u.options.startTime&&0===e.seconds&&u.play(u.options.startTime)}),u.player.on("pause",function(e){u.fire("pause",e)}),u.player.on("ended",function(e){u.fire("ended",e)}),u.player.on("loaded",function(e){u.fire("ready",e)}),u.player.on("volumechange",function(e){u.fire("volumechange",e)}),u.player.on("error",function(e){u.fire("error",e)})),"local"===u.type&&(u.$video||(u.$video=document.createElement("video"),u.options.showContols&&(u.$video.controls=!0),u.options.mute?u.$video.muted=!0:u.$video.volume&&(u.$video.volume=u.options.volume/100),u.options.loop&&(u.$video.loop=!0),u.$video.setAttribute("playsinline",""),u.$video.setAttribute("webkit-playsinline",""),u.$video.setAttribute("id",u.playerID),e.appendChild(u.$video),document.body.appendChild(e),Object.keys(u.videoID).forEach(function(e){var t,o,i,n;t=u.$video,o=u.videoID[e],i="video/".concat(e),(n=document.createElement("source")).src=o,n.type=i,t.appendChild(n)})),u.player=u.player||u.$video,u.player.addEventListener("playing",function(e){l||u.fire("started",e),l=1}),u.player.addEventListener("timeupdate",function(e){u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&this.currentTime>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.addEventListener("play",function(e){u.fire("play",e)}),u.player.addEventListener("pause",function(e){u.fire("pause",e)}),u.player.addEventListener("ended",function(e){u.fire("ended",e)}),u.player.addEventListener("loadedmetadata",function(){u.videoWidth=this.videoWidth||1280,u.videoHeight=this.videoHeight||720,u.fire("ready"),u.options.autoplay&&u.play(u.options.startTime)}),u.player.addEventListener("volumechange",function(e){u.getVolume(function(e){u.options.volume=e}),u.fire("volumechange",e)}),u.player.addEventListener("error",function(e){u.fire("error",e)})),p(u.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!p||!u){var e,t,o="";if("youtube"!==this.type||p||(p=1,o="https://www.youtube.com/iframe_api"),"vimeo"===this.type&&!u){if(u=1,void 0!==s.a.Vimeo)return;o="https://player.vimeo.com/api/player.js"}o&&(e=document.createElement("script"),t=document.getElementsByTagName("head")[0],e.src=o,t.appendChild(e),e=t=null)}}},{key:"onAPIready",value:function(e){var t;"youtube"===this.type&&(void 0!==s.a.YT&&0!==s.a.YT.loaded||d?"object"===n(s.a.YT)&&1===s.a.YT.loaded?e():y.done(function(){e()}):(d=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,y.resolve("done"),e()})),"vimeo"===this.type&&(void 0!==s.a.Vimeo||c?void 0!==s.a.Vimeo?e():m.done(function(){e()}):(c=1,t=setInterval(function(){void 0!==s.a.Vimeo&&(clearInterval(t),m.resolve("done"),e())},20))),"local"===this.type&&e()}}])&&a(e.prototype,t),o&&a(e,o),i}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return n});var r=o(8),i=o(3),p=o.n(i);function n(){var e,t,l,o,n,i,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.a.jarallax;void 0!==a&&(e=a.constructor,t=e.prototype.onScroll,e.prototype.onScroll=function(){var o=this;t.apply(o),o.isVideoInserted||!o.video||o.options.videoLazyLoading&&!o.isElementInViewport||o.options.disableVideo()||(o.isVideoInserted=!0,o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity",margin:0,zIndex:-1}),o.$video=e,"local"===o.video.type&&(o.image.src?o.$video.setAttribute("poster",o.image.src):o.image.$item&&"IMG"===o.image.$item.tagName&&o.image.$item.src&&o.$video.setAttribute("poster",o.image.$item.src)),o.image.$container.appendChild(e),t.parentNode.removeChild(t)}))},l=e.prototype.coverImage,e.prototype.coverImage=function(){var e,t,o,i,n=this,a=l.apply(n),r=!!n.image.$item&&n.image.$item.nodeName;return a&&n.video&&r&&("IFRAME"===r||"VIDEO"===r)&&(t=(e=a.image.height)*n.image.width/n.image.height,o=(a.container.width-t)/2,i=a.image.marginTop,a.container.width>t&&(e=(t=a.container.width)*n.image.height/n.image.width,o=0,i+=(a.image.height-e)/2),"IFRAME"===r&&(e+=400,i-=200),n.css(n.$video,{width:"".concat(t,"px"),marginLeft:"".concat(o,"px"),height:"".concat(e,"px"),marginTop:"".concat(i,"px")})),a},o=e.prototype.initImg,e.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t},n=e.prototype.canInitParallax,e.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r.default(o.options.videoSrc,{autoplay:!0,loop:o.options.videoLoop,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});function i(){o.image.$default_item&&(o.image.$item=o.image.$default_item,o.image.$item.style.display="block",o.coverImage(),o.clipContainer(),o.onScroll())}if(t.isValid())if(this.options.disableParallax()&&(e=!0,o.image.position="absolute",o.options.type="scroll",o.options.speed=1),e){if(t.on("ready",function(){var e;o.options.videoPlayOnlyVisible?(e=o.onScroll,o.onScroll=function(){e.apply(o),o.videoError||!o.options.videoLoop&&(o.options.videoLoop||o.videoEnded)||(o.isVisible()?t.play():t.pause())}):t.play()}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none")}),t.on("ended",function(){o.videoEnded=!0,o.options.videoLoop||i()}),t.on("error",function(){o.videoError=!0,i()}),o.video=t,!o.defaultInitImgResult&&(o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==t.type))return t.getImageURL(function(e){o.image.bgImage='url("'.concat(e,'")'),o.init()}),!1}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'.concat(e,'")'),"background-position":"center","background-size":"cover"})});return e},i=e.prototype.destroy,e.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),i.apply(e)})}}]);
//# sourceMappingURL=jarallax-video.min.js.map

// animations
// v1.0
// By Firas ODEH

var piximations = (function($) {
    "use strict";

    var api = {
        test: 1,
        init: function() {
            initHeadline();
            initSlidingHeadline();
			return this;
		},
        update: function(){
            initHeadline();
            initSlidingHeadline();
        },
        play: function(el = false){
            playSlidingHeadline(el);
        }
    };


    function playSlidingHeadline(el){
        if(!el){
            el = $('body');
        }
        el.find('.pix-sliding-headline:not(.pix-ready)').each(function(i, headline){
            var headling_text = $(headline).text();
            var words = headling_text.split(" ");
            var textStyle = $(headline).attr('data-style');
            var textClass = $(headline).attr('data-class');
            var html = '';
            $.each(words, function(i, w){
                if(textStyle&&textStyle!=""){
                    html += '<span class="slide-in-container"><span class="d-inline-block group-animate-in" style="'+textStyle+'" >'+w+'</span></span> ';
                }else{
                    html += '<span class="slide-in-container"><span class="d-inline-block group-animate-in '+textClass+'" >'+w+'</span></span> ';
                }
            });
            $(headline).html(html);
            $(headline).addClass('pix-ready');
            var delay = 200;
            $(headline).find('.group-animate-in').each(function(i, elem){
                // Animate
                setTimeout(function() {
                    $(elem).addClass('animating').addClass('slide-in-up').removeClass('group-animate-in');
                }, delay);
                // On animation end
                $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // Clear animation
                    $(elem).removeClass('animating').removeClass('slide-in-up').addClass('animated');
                });
                delay+=150;
            });
        });
    }

    function initSlidingHeadline(){

        $('.pix-sliding-headline:not(.pix-ready)').each(function(i, headline){
            var headling_text = $(headline).text();
            var words = headling_text.split(" ");
            var textStyle = $(headline).attr('data-style');
            var textClass = $(headline).attr('data-class');

            var html = '';

            $.each(words, function(i, w){
                if(textStyle&&textStyle!=""){
                    html += '<span class="slide-in-container"><span class="d-inline-block group-animate-in" style="'+textStyle+'" >'+w+'</span></span> ';
                }else{
                    html += '<span class="slide-in-container"><span class="d-inline-block group-animate-in '+textClass+'" >'+w+'</span></span> ';
                }
            });

            var normal_trigger = true;
            if($('body').hasClass('pix-sections-stack')&&!window.vc_iframe){
                if($(headline).closest('.pix-slides-section').length>0){
                    normal_trigger = false;
                    if(!$(headline).closest('.pix-slides-section').hasClass('is-sticky-active') && $(headline).closest('.site-footer2').length<1){
                        return false;
                    }
                }
            }

            $(headline).html(html);
            $(headline).addClass('pix-ready');




            var waypoint = new Waypoint({
              element: headline,
              offset: '100%',
              triggerOnce: normal_trigger,
              handler: function() {

                  var delay = 200;
                  $(headline).find('.group-animate-in').each(function(i, elem){

                      // Animate
                          setTimeout(function() {
                              $(elem).addClass('animating').addClass('slide-in-up').removeClass('group-animate-in');
                          }, delay);


                      // On animation end
                          $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                              // Clear animation
                                  $(elem).removeClass('animating').removeClass('slide-in-up').addClass('animated');
                          });


                      delay+=150;

                  });


                // trigger Once
                this.destroy();
              }
            });

        });

    }



    // New Test
    var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

        function initHeadline() {
    		//insert <i> element for each letter of a changing word
    		singleLetters($('.pix-headline:not(.pix-ready).letters').find('span'));
    		//initialise headline animation
    		animateHeadline($('.pix-headline:not(.pix-ready)'));
    	}

        function singleLetters($words) {
    		$words.each(function(){
    			var word = $(this),
    				letters = word.text().split(''),
    				selected = word.hasClass('is-visible');
    			for (i in letters) {
    				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
    				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
    			}
    		    var newLetters = letters.join('');
    		    word.html(newLetters).css('opacity', 1);
    		});
    	}

    	function animateHeadline($headlines) {
    		var duration = animationDelay;
    		$headlines.each(function(){
    			var headline = $(this);
                $(headline).addClass('pix-ready');

    			if(headline.hasClass('loading-bar')) {
    				duration = barAnimationDelay;
                    var color = headline.attr('data-color');
                    if(color&&color!=''){
                        headline.find('.pix-bar').css('background', color);
                    }
    				setTimeout(function(){ headline.find('.pix-words-wrapper').addClass('is-loading') }, barWaiting);
    			} else if (headline.hasClass('clip')){
    				var spanWrapper = headline.find('.pix-words-wrapper'),
    					newWidth = spanWrapper.width() + 10
    				spanWrapper.css('width', newWidth);
    			} else if (!headline.hasClass('type') ) {
    				//assign to .pix-words-wrapper the width of its longest word
    				var words = headline.find('.pix-words-wrapper span'),
    					width = 0;
                    width = headline.find('.pix-words-wrapper span').first().width();
                    var height = headline.find('.pix-words-wrapper span').first().height();
    				headline.find('.pix-words-wrapper').width(width);
    			};
    			//trigger animation
    			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    		});
    	}

    	function hideWord($word) {
    		var nextWord = takeNext($word);

    		if($word.parents('.pix-headline').hasClass('type')) {
    			var parentSpan = $word.parent('.pix-words-wrapper');
    			parentSpan.addClass('selected').removeClass('waiting');
    			setTimeout(function(){
    				parentSpan.removeClass('selected');
    				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
    			}, selectionDuration);
    			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

    		} else if($word.parents('.pix-headline').hasClass('letters')) {
    			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
    			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
    			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    		}  else if($word.parents('.pix-headline').hasClass('clip')) {
    			$word.parents('.pix-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
    				switchWord($word, nextWord);
    				showWord(nextWord);
    			});

    		} else if ($word.parents('.pix-headline').hasClass('loading-bar')){
    			$word.parents('.pix-words-wrapper').removeClass('is-loading');
    			switchWord($word, nextWord);
    			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
    			setTimeout(function(){ $word.parents('.pix-words-wrapper').addClass('is-loading') }, barWaiting);

    		} else {
    			switchWord($word, nextWord);
    			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    		}
    	}

    	function showWord($word, $duration) {
    		if($word.parents('.pix-headline').hasClass('type')) {
    			showLetter($word.find('i').eq(0), $word, false, $duration);
    			$word.addClass('is-visible').removeClass('is-hidden');
    		}  else if($word.parents('.pix-headline').hasClass('clip')) {
    			$word.parents('.pix-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
    				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
    			});
    		}
    	}

    	function hideLetter($letter, $word, $bool, $duration) {
    		$letter.removeClass('in').addClass('out');

    		if(!$letter.is(':last-child')) {
    		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    		} else if($bool) {
    		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    		}

    		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
    			var nextWord = takeNext($word);
    			switchWord($word, nextWord);
    		}
    	}

    	function showLetter($letter, $word, $bool, $duration) {
    		$letter.addClass('in').removeClass('out');

    		if(!$letter.is(':last-child')) {
    			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    		} else {
    			if($word.parents('.pix-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.pix-words-wrapper').addClass('waiting'); }, 200);}
    			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    		}
    	}

    	function takeNext($word) {
    		return (!$word.is(':last-child')&&!$word.next().hasClass('pix-bar')) ? $word.next() : $word.parent().children().eq(0);
    	}

    	function takePrev($word) {
    		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    	}

    	function switchWord($oldWord, $newWord) {
    		$oldWord.removeClass('is-visible').addClass('is-hidden');
            var new_width = $newWord.width();
            if($oldWord.parents('.pix-headline').hasClass('rotate-1')) {
                $oldWord.parents('.pix-words-wrapper').width(new_width);
            }else{
                $oldWord.parents('.pix-words-wrapper').width(new_width);
            }
    		$newWord.removeClass('is-hidden').addClass('is-visible');
    	}

    return api;

})(jQuery);

/*!
 * jquery-confirm v3.3.4 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2019 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof module==="object"&&module.exports){module.exports=function(root,jQuery){if(jQuery===undefined){if(typeof window!=="undefined"){jQuery=require("jquery");}else{jQuery=require("jquery")(root);}}factory(jQuery);return jQuery;};}else{factory(jQuery);}}}(function($){var w=window;$.fn.confirm=function(options,option2){if(typeof options==="undefined"){options={};}if(typeof options==="string"){options={content:options,title:(option2)?option2:false};}$(this).each(function(){var $this=$(this);if($this.attr("jc-attached")){console.warn("jConfirm has already been attached to this element ",$this[0]);return;}$this.on("click",function(e){e.preventDefault();var jcOption=$.extend({},options);if($this.attr("data-title")){jcOption.title=$this.attr("data-title");}if($this.attr("data-content")){jcOption.content=$this.attr("data-content");}if(typeof jcOption.buttons==="undefined"){jcOption.buttons={};}jcOption["$target"]=$this;if($this.attr("href")&&Object.keys(jcOption.buttons).length===0){var buttons=$.extend(true,{},w.jconfirm.pluginDefaults.defaultButtons,(w.jconfirm.defaults||{}).defaultButtons||{});var firstBtn=Object.keys(buttons)[0];jcOption.buttons=buttons;jcOption.buttons[firstBtn].action=function(){location.href=$this.attr("href");};}jcOption.closeIcon=false;var instance=$.confirm(jcOption);});$this.attr("jc-attached",true);});return $(this);};$.confirm=function(options,option2){if(typeof options==="undefined"){options={};}if(typeof options==="string"){options={content:options,title:(option2)?option2:false};}var putDefaultButtons=!(options.buttons===false);if(typeof options.buttons!=="object"){options.buttons={};}if(Object.keys(options.buttons).length===0&&putDefaultButtons){var buttons=$.extend(true,{},w.jconfirm.pluginDefaults.defaultButtons,(w.jconfirm.defaults||{}).defaultButtons||{});options.buttons=buttons;}return w.jconfirm(options);};$.alert=function(options,option2){if(typeof options==="undefined"){options={};}if(typeof options==="string"){options={content:options,title:(option2)?option2:false};}var putDefaultButtons=!(options.buttons===false);if(typeof options.buttons!=="object"){options.buttons={};}if(Object.keys(options.buttons).length===0&&putDefaultButtons){var buttons=$.extend(true,{},w.jconfirm.pluginDefaults.defaultButtons,(w.jconfirm.defaults||{}).defaultButtons||{});var firstBtn=Object.keys(buttons)[0];options.buttons[firstBtn]=buttons[firstBtn];}return w.jconfirm(options);};$.dialog=function(options,option2){if(typeof options==="undefined"){options={};}if(typeof options==="string"){options={content:options,title:(option2)?option2:false,closeIcon:function(){}};}options.buttons={};if(typeof options.closeIcon==="undefined"){options.closeIcon=function(){};}options.confirmKeys=[13];return w.jconfirm(options);};w.jconfirm=function(options){if(typeof options==="undefined"){options={};}var pluginOptions=$.extend(true,{},w.jconfirm.pluginDefaults);if(w.jconfirm.defaults){pluginOptions=$.extend(true,pluginOptions,w.jconfirm.defaults);}pluginOptions=$.extend(true,{},pluginOptions,options);var instance=new w.Jconfirm(pluginOptions);w.jconfirm.instances.push(instance);return instance;};w.Jconfirm=function(options){$.extend(this,options);this._init();};w.Jconfirm.prototype={_init:function(){var that=this;if(!w.jconfirm.instances.length){w.jconfirm.lastFocused=$("body").find(":focus");}this._id=Math.round(Math.random()*99999);this.contentParsed=$(document.createElement("div"));if(!this.lazyOpen){setTimeout(function(){that.open();},0);}},_buildHTML:function(){var that=this;this._parseAnimation(this.animation,"o");this._parseAnimation(this.closeAnimation,"c");this._parseBgDismissAnimation(this.backgroundDismissAnimation);this._parseColumnClass(this.columnClass);this._parseTheme(this.theme);this._parseType(this.type);var template=$(this.template);template.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);if(this.typeAnimated){template.find(".jconfirm-box").addClass("jconfirm-type-animated");}if(this.useBootstrap){template.find(".jc-bs3-row").addClass(this.bootstrapClasses.row);template.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center");template.find(".jconfirm-box-container").addClass(this.columnClassParsed);if(this.containerFluid){template.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid);}else{template.find(".jc-bs3-container").addClass(this.bootstrapClasses.container);}}else{template.find(".jconfirm-box").css("width",this.boxWidth);}if(this.titleClass){template.find(".jconfirm-title-c").addClass(this.titleClass);}template.addClass(this.themeParsed);var ariaLabel="jconfirm-box"+this._id;template.find(".jconfirm-box").attr("aria-labelledby",ariaLabel).attr("tabindex",-1);template.find(".jconfirm-content").attr("id",ariaLabel);if(this.bgOpacity!==null){template.find(".jconfirm-bg").css("opacity",this.bgOpacity);}if(this.rtl){template.addClass("jconfirm-rtl");}this.$el=template.appendTo(this.container);this.$jconfirmBoxContainer=this.$el.find(".jconfirm-box-container");this.$jconfirmBox=this.$body=this.$el.find(".jconfirm-box");this.$jconfirmBg=this.$el.find(".jconfirm-bg");this.$title=this.$el.find(".jconfirm-title");this.$titleContainer=this.$el.find(".jconfirm-title-c");this.$content=this.$el.find("div.jconfirm-content");this.$contentPane=this.$el.find(".jconfirm-content-pane");this.$icon=this.$el.find(".jconfirm-icon-c");this.$closeIcon=this.$el.find(".jconfirm-closeIcon");this.$holder=this.$el.find(".jconfirm-holder");this.$btnc=this.$el.find(".jconfirm-buttons");this.$scrollPane=this.$el.find(".jconfirm-scrollpane");that.setStartingPoint();this._contentReady=$.Deferred();this._modalReady=$.Deferred();this.$holder.css({"padding-top":this.offsetTop,"padding-bottom":this.offsetBottom,});this.setTitle();this.setIcon();this._setButtons();this._parseContent();this.initDraggable();if(this.isAjax){this.showLoading(false);}$.when(this._contentReady,this._modalReady).then(function(){if(that.isAjaxLoading){setTimeout(function(){that.isAjaxLoading=false;that.setContent();that.setTitle();that.setIcon();setTimeout(function(){that.hideLoading(false);that._updateContentMaxHeight();},100);if(typeof that.onContentReady==="function"){that.onContentReady();}},50);}else{that._updateContentMaxHeight();that.setTitle();that.setIcon();if(typeof that.onContentReady==="function"){that.onContentReady();}}if(that.autoClose){that._startCountDown();}}).then(function(){that._watchContent();});if(this.animation==="none"){this.animationSpeed=1;this.animationBounce=1;}this.$body.css(this._getCSS(this.animationSpeed,this.animationBounce));this.$contentPane.css(this._getCSS(this.animationSpeed,1));this.$jconfirmBg.css(this._getCSS(this.animationSpeed,1));this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed,1));},_typePrefix:"jconfirm-type-",typeParsed:"",_parseType:function(type){this.typeParsed=this._typePrefix+type;},setType:function(type){var oldClass=this.typeParsed;this._parseType(type);this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);},themeParsed:"",_themePrefix:"jconfirm-",setTheme:function(theme){var previous=this.theme;this.theme=theme||this.theme;this._parseTheme(this.theme);if(previous){this.$el.removeClass(previous);}this.$el.addClass(this.themeParsed);this.theme=theme;},_parseTheme:function(theme){var that=this;theme=theme.split(",");$.each(theme,function(k,a){if(a.indexOf(that._themePrefix)===-1){theme[k]=that._themePrefix+$.trim(a);}});this.themeParsed=theme.join(" ").toLowerCase();},backgroundDismissAnimationParsed:"",_bgDismissPrefix:"jconfirm-hilight-",_parseBgDismissAnimation:function(bgDismissAnimation){var animation=bgDismissAnimation.split(",");var that=this;$.each(animation,function(k,a){if(a.indexOf(that._bgDismissPrefix)===-1){animation[k]=that._bgDismissPrefix+$.trim(a);}});this.backgroundDismissAnimationParsed=animation.join(" ").toLowerCase();},animationParsed:"",closeAnimationParsed:"",_animationPrefix:"jconfirm-animation-",setAnimation:function(animation){this.animation=animation||this.animation;this._parseAnimation(this.animation,"o");},_parseAnimation:function(animation,which){which=which||"o";var animations=animation.split(",");var that=this;$.each(animations,function(k,a){if(a.indexOf(that._animationPrefix)===-1){animations[k]=that._animationPrefix+$.trim(a);}});var a_string=animations.join(" ").toLowerCase();if(which==="o"){this.animationParsed=a_string;}else{this.closeAnimationParsed=a_string;}return a_string;},setCloseAnimation:function(closeAnimation){this.closeAnimation=closeAnimation||this.closeAnimation;this._parseAnimation(this.closeAnimation,"c");},setAnimationSpeed:function(speed){this.animationSpeed=speed||this.animationSpeed;},columnClassParsed:"",setColumnClass:function(colClass){if(!this.useBootstrap){console.warn("cannot set columnClass, useBootstrap is set to false");return;}this.columnClass=colClass||this.columnClass;this._parseColumnClass(this.columnClass);this.$jconfirmBoxContainer.addClass(this.columnClassParsed);},_updateContentMaxHeight:function(){var height=$(window).height()-(this.$jconfirmBox.outerHeight()-this.$contentPane.outerHeight())-(this.offsetTop+this.offsetBottom);this.$contentPane.css({"max-height":height+"px"});},setBoxWidth:function(width){if(this.useBootstrap){console.warn("cannot set boxWidth, useBootstrap is set to true");return;}this.boxWidth=width;this.$jconfirmBox.css("width",width);},_parseColumnClass:function(colClass){colClass=colClass.toLowerCase();var p;switch(colClass){case"xl":case"xlarge":p="col-md-12";break;case"l":case"large":p="col-md-8 col-md-offset-2";break;case"m":case"medium":p="col-md-6 col-md-offset-3";break;case"s":case"small":p="col-md-4 col-md-offset-4";break;case"xs":case"xsmall":p="col-md-2 col-md-offset-5";break;default:p=colClass;}this.columnClassParsed=p;},initDraggable:function(){var that=this;var $t=this.$titleContainer;this.resetDrag();if(this.draggable){$t.on("mousedown",function(e){$t.addClass("jconfirm-hand");that.mouseX=e.clientX;that.mouseY=e.clientY;that.isDrag=true;});$(window).on("mousemove."+this._id,function(e){if(that.isDrag){that.movingX=e.clientX-that.mouseX+that.initialX;that.movingY=e.clientY-that.mouseY+that.initialY;that.setDrag();}});$(window).on("mouseup."+this._id,function(){$t.removeClass("jconfirm-hand");if(that.isDrag){that.isDrag=false;that.initialX=that.movingX;that.initialY=that.movingY;}});}},resetDrag:function(){this.isDrag=false;this.initialX=0;this.initialY=0;this.movingX=0;this.movingY=0;this.mouseX=0;this.mouseY=0;this.$jconfirmBoxContainer.css("transform","translate("+0+"px, "+0+"px)");},setDrag:function(){if(!this.draggable){return;}this.alignMiddle=false;var boxWidth=this.$jconfirmBox.outerWidth();var boxHeight=this.$jconfirmBox.outerHeight();var windowWidth=$(window).width();var windowHeight=$(window).height();var that=this;var dragUpdate=1;if(that.movingX%dragUpdate===0||that.movingY%dragUpdate===0){if(that.dragWindowBorder){var leftDistance=(windowWidth/2)-boxWidth/2;var topDistance=(windowHeight/2)-boxHeight/2;topDistance-=that.dragWindowGap;leftDistance-=that.dragWindowGap;if(leftDistance+that.movingX<0){that.movingX=-leftDistance;}else{if(leftDistance-that.movingX<0){that.movingX=leftDistance;}}if(topDistance+that.movingY<0){that.movingY=-topDistance;}else{if(topDistance-that.movingY<0){that.movingY=topDistance;}}}that.$jconfirmBoxContainer.css("transform","translate("+that.movingX+"px, "+that.movingY+"px)");}},_scrollTop:function(){if(typeof pageYOffset!=="undefined"){return pageYOffset;}else{var B=document.body;var D=document.documentElement;D=(D.clientHeight)?D:B;return D.scrollTop;}},_watchContent:function(){var that=this;if(this._timer){clearInterval(this._timer);}var prevContentHeight=0;this._timer=setInterval(function(){if(that.smoothContent){var contentHeight=that.$content.outerHeight()||0;if(contentHeight!==prevContentHeight){prevContentHeight=contentHeight;}var wh=$(window).height();var total=that.offsetTop+that.offsetBottom+that.$jconfirmBox.height()-that.$contentPane.height()+that.$content.height();if(total<wh){that.$contentPane.addClass("no-scroll");}else{that.$contentPane.removeClass("no-scroll");}}},this.watchInterval);},_overflowClass:"jconfirm-overflow",_hilightAnimating:false,highlight:function(){this.hiLightModal();},hiLightModal:function(){var that=this;if(this._hilightAnimating){return;}that.$body.addClass("hilight");var duration=parseFloat(that.$body.css("animation-duration"))||2;this._hilightAnimating=true;setTimeout(function(){that._hilightAnimating=false;that.$body.removeClass("hilight");},duration*1000);},_bindEvents:function(){var that=this;this.boxClicked=false;this.$scrollPane.click(function(e){if(!that.boxClicked){var buttonName=false;var shouldClose=false;var str;if(typeof that.backgroundDismiss==="function"){str=that.backgroundDismiss();}else{str=that.backgroundDismiss;}if(typeof str==="string"&&typeof that.buttons[str]!=="undefined"){buttonName=str;shouldClose=false;}else{if(typeof str==="undefined"||!!(str)===true){shouldClose=true;}else{shouldClose=false;}}if(buttonName){var btnResponse=that.buttons[buttonName].action.apply(that);shouldClose=(typeof btnResponse==="undefined")||!!(btnResponse);}if(shouldClose){that.close();}else{that.hiLightModal();}}that.boxClicked=false;});this.$jconfirmBox.click(function(e){that.boxClicked=true;});var isKeyDown=false;$(window).on("jcKeyDown."+that._id,function(e){if(!isKeyDown){isKeyDown=true;}});$(window).on("keyup."+that._id,function(e){if(isKeyDown){that.reactOnKey(e);isKeyDown=false;}});$(window).on("resize."+this._id,function(){that._updateContentMaxHeight();setTimeout(function(){that.resetDrag();},100);});},_cubic_bezier:"0.36, 0.55, 0.19",_getCSS:function(speed,bounce){return{"-webkit-transition-duration":speed/1000+"s","transition-duration":speed/1000+"s","-webkit-transition-timing-function":"cubic-bezier("+this._cubic_bezier+", "+bounce+")","transition-timing-function":"cubic-bezier("+this._cubic_bezier+", "+bounce+")"};},_setButtons:function(){var that=this;var total_buttons=0;if(typeof this.buttons!=="object"){this.buttons={};}$.each(this.buttons,function(key,button){total_buttons+=1;if(typeof button==="function"){that.buttons[key]=button={action:button};}that.buttons[key].text=button.text||key;that.buttons[key].btnClass=button.btnClass||"btn-default";that.buttons[key].action=button.action||function(){};that.buttons[key].keys=button.keys||[];that.buttons[key].isHidden=button.isHidden||false;that.buttons[key].isDisabled=button.isDisabled||false;$.each(that.buttons[key].keys,function(i,a){that.buttons[key].keys[i]=a.toLowerCase();});var button_element=$('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop("disabled",that.buttons[key].isDisabled).css("display",that.buttons[key].isHidden?"none":"").click(function(e){e.preventDefault();var res=that.buttons[key].action.apply(that,[that.buttons[key]]);that.onAction.apply(that,[key,that.buttons[key]]);that._stopCountDown();if(typeof res==="undefined"||res){that.close();}});that.buttons[key].el=button_element;that.buttons[key].setText=function(text){button_element.html(text);};that.buttons[key].addClass=function(className){button_element.addClass(className);};that.buttons[key].removeClass=function(className){button_element.removeClass(className);};that.buttons[key].disable=function(){that.buttons[key].isDisabled=true;button_element.prop("disabled",true);};that.buttons[key].enable=function(){that.buttons[key].isDisabled=false;button_element.prop("disabled",false);};that.buttons[key].show=function(){that.buttons[key].isHidden=false;button_element.css("display","");};that.buttons[key].hide=function(){that.buttons[key].isHidden=true;button_element.css("display","none");};that["$_"+key]=that["$$"+key]=button_element;that.$btnc.append(button_element);});if(total_buttons===0){this.$btnc.hide();}if(this.closeIcon===null&&total_buttons===0){this.closeIcon=true;}if(this.closeIcon){if(this.closeIconClass){var closeHtml='<i class="'+this.closeIconClass+'"></i>';this.$closeIcon.html(closeHtml);}this.$closeIcon.click(function(e){e.preventDefault();var buttonName=false;var shouldClose=false;var str;if(typeof that.closeIcon==="function"){str=that.closeIcon();}else{str=that.closeIcon;}if(typeof str==="string"&&typeof that.buttons[str]!=="undefined"){buttonName=str;shouldClose=false;}else{if(typeof str==="undefined"||!!(str)===true){shouldClose=true;}else{shouldClose=false;}}if(buttonName){var btnResponse=that.buttons[buttonName].action.apply(that);shouldClose=(typeof btnResponse==="undefined")||!!(btnResponse);}if(shouldClose){that.close();}});this.$closeIcon.show();}else{this.$closeIcon.hide();}},setTitle:function(string,force){force=force||false;if(typeof string!=="undefined"){if(typeof string==="string"){this.title=string;}else{if(typeof string==="function"){if(typeof string.promise==="function"){console.error("Promise was returned from title function, this is not supported.");}var response=string();if(typeof response==="string"){this.title=response;}else{this.title=false;}}else{this.title=false;}}}if(this.isAjaxLoading&&!force){return;}this.$title.html(this.title||"");this.updateTitleContainer();},setIcon:function(iconClass,force){force=force||false;if(typeof iconClass!=="undefined"){if(typeof iconClass==="string"){this.icon=iconClass;}else{if(typeof iconClass==="function"){var response=iconClass();if(typeof response==="string"){this.icon=response;}else{this.icon=false;}}else{this.icon=false;}}}if(this.isAjaxLoading&&!force){return;}this.$icon.html(this.icon?'<i class="'+this.icon+'"></i>':"");this.updateTitleContainer();},updateTitleContainer:function(){if(!this.title&&!this.icon){this.$titleContainer.hide();}else{this.$titleContainer.show();}},setContentPrepend:function(content,force){if(!content){return;}this.contentParsed.prepend(content);},setContentAppend:function(content){if(!content){return;}this.contentParsed.append(content);},setContent:function(content,force){force=!!force;var that=this;if(content){this.contentParsed.html("").append(content);}if(this.isAjaxLoading&&!force){return;}this.$content.html("");this.$content.append(this.contentParsed);setTimeout(function(){that.$body.find("input[autofocus]:visible:first").focus();},100);},loadingSpinner:false,showLoading:function(disableButtons){this.loadingSpinner=true;this.$jconfirmBox.addClass("loading");if(disableButtons){this.$btnc.find("button").prop("disabled",true);}},hideLoading:function(enableButtons){this.loadingSpinner=false;this.$jconfirmBox.removeClass("loading");if(enableButtons){this.$btnc.find("button").prop("disabled",false);}},ajaxResponse:false,contentParsed:"",isAjax:false,isAjaxLoading:false,_parseContent:function(){var that=this;var e="&nbsp;";if(typeof this.content==="function"){var res=this.content.apply(this);if(typeof res==="string"){this.content=res;}else{if(typeof res==="object"&&typeof res.always==="function"){this.isAjax=true;this.isAjaxLoading=true;res.always(function(data,status,xhr){that.ajaxResponse={data:data,status:status,xhr:xhr};that._contentReady.resolve(data,status,xhr);if(typeof that.contentLoaded==="function"){that.contentLoaded(data,status,xhr);}});this.content=e;}else{this.content=e;}}}if(typeof this.content==="string"&&this.content.substr(0,4).toLowerCase()==="url:"){this.isAjax=true;this.isAjaxLoading=true;var u=this.content.substring(4,this.content.length);$.get(u).done(function(html){that.contentParsed.html(html);}).always(function(data,status,xhr){that.ajaxResponse={data:data,status:status,xhr:xhr};that._contentReady.resolve(data,status,xhr);if(typeof that.contentLoaded==="function"){that.contentLoaded(data,status,xhr);}});}if(!this.content){this.content=e;}if(!this.isAjax){this.contentParsed.html(this.content);this.setContent();that._contentReady.resolve();}},_stopCountDown:function(){clearInterval(this.autoCloseInterval);if(this.$cd){this.$cd.remove();}},_startCountDown:function(){var that=this;var opt=this.autoClose.split("|");if(opt.length!==2){console.error("Invalid option for autoClose. example 'close|10000'");return false;}var button_key=opt[0];var time=parseInt(opt[1]);if(typeof this.buttons[button_key]==="undefined"){console.error("Invalid button key '"+button_key+"' for autoClose");return false;}var seconds=Math.ceil(time/1000);this.$cd=$('<span class="countdown"> ('+seconds+")</span>").appendTo(this["$_"+button_key]);this.autoCloseInterval=setInterval(function(){that.$cd.html(" ("+(seconds-=1)+") ");if(seconds<=0){that["$$"+button_key].trigger("click");that._stopCountDown();}},1000);},_getKey:function(key){switch(key){case 192:return"tilde";case 13:return"enter";case 16:return"shift";case 9:return"tab";case 20:return"capslock";case 17:return"ctrl";case 91:return"win";case 18:return"alt";case 27:return"esc";case 32:return"space";}var initial=String.fromCharCode(key);if(/^[A-z0-9]+$/.test(initial)){return initial.toLowerCase();}else{return false;}},reactOnKey:function(e){var that=this;var a=$(".jconfirm");if(a.eq(a.length-1)[0]!==this.$el[0]){return false;}var key=e.which;if(this.$content.find(":input").is(":focus")&&/13|32/.test(key)){return false;}var keyChar=this._getKey(key);if(keyChar==="esc"&&this.escapeKey){if(this.escapeKey===true){this.$scrollPane.trigger("click");}else{if(typeof this.escapeKey==="string"||typeof this.escapeKey==="function"){var buttonKey;if(typeof this.escapeKey==="function"){buttonKey=this.escapeKey();}else{buttonKey=this.escapeKey;}if(buttonKey){if(typeof this.buttons[buttonKey]==="undefined"){console.warn("Invalid escapeKey, no buttons found with key "+buttonKey);}else{this["$_"+buttonKey].trigger("click");}}}}}$.each(this.buttons,function(key,button){if(button.keys.indexOf(keyChar)!==-1){that["$_"+key].trigger("click");}});},setDialogCenter:function(){console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");},_unwatchContent:function(){clearInterval(this._timer);},close:function(onClosePayload){var that=this;if(typeof this.onClose==="function"){this.onClose(onClosePayload);}this._unwatchContent();$(window).unbind("resize."+this._id);$(window).unbind("keyup."+this._id);$(window).unbind("jcKeyDown."+this._id);if(this.draggable){$(window).unbind("mousemove."+this._id);$(window).unbind("mouseup."+this._id);this.$titleContainer.unbind("mousedown");}that.$el.removeClass(that.loadedClass);$("body").removeClass("jconfirm-no-scroll-"+that._id);that.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");setTimeout(function(){that.$body.addClass(that.closeAnimationParsed);that.$jconfirmBg.addClass("jconfirm-bg-h");var closeTimer=(that.closeAnimation==="none")?1:that.animationSpeed;setTimeout(function(){that.$el.remove();var l=w.jconfirm.instances;var i=w.jconfirm.instances.length-1;for(i;i>=0;i--){if(w.jconfirm.instances[i]._id===that._id){w.jconfirm.instances.splice(i,1);}}if(!w.jconfirm.instances.length){if(that.scrollToPreviousElement&&w.jconfirm.lastFocused&&w.jconfirm.lastFocused.length&&$.contains(document,w.jconfirm.lastFocused[0])){var $lf=w.jconfirm.lastFocused;if(that.scrollToPreviousElementAnimate){var st=$(window).scrollTop();var ot=w.jconfirm.lastFocused.offset().top;var wh=$(window).height();if(!(ot>st&&ot<(st+wh))){var scrollTo=(ot-Math.round((wh/3)));$("html, body").animate({scrollTop:scrollTo},that.animationSpeed,"swing",function(){$lf.focus();});}else{$lf.focus();}}else{$lf.focus();}w.jconfirm.lastFocused=false;}}if(typeof that.onDestroy==="function"){that.onDestroy();}},closeTimer*0.4);},50);return true;},open:function(){if(this.isOpen()){return false;}this._buildHTML();this._bindEvents();this._open();return true;},setStartingPoint:function(){var el=false;if(this.animateFromElement!==true&&this.animateFromElement){el=this.animateFromElement;w.jconfirm.lastClicked=false;}else{if(w.jconfirm.lastClicked&&this.animateFromElement===true){el=w.jconfirm.lastClicked;w.jconfirm.lastClicked=false;}else{return false;}}if(!el){return false;}var offset=el.offset();var iTop=el.outerHeight()/2;var iLeft=el.outerWidth()/2;iTop-=this.$jconfirmBox.outerHeight()/2;iLeft-=this.$jconfirmBox.outerWidth()/2;var sourceTop=offset.top+iTop;sourceTop=sourceTop-this._scrollTop();var sourceLeft=offset.left+iLeft;var wh=$(window).height()/2;var ww=$(window).width()/2;var targetH=wh-this.$jconfirmBox.outerHeight()/2;var targetW=ww-this.$jconfirmBox.outerWidth()/2;sourceTop-=targetH;sourceLeft-=targetW;if(Math.abs(sourceTop)>wh||Math.abs(sourceLeft)>ww){return false;}this.$jconfirmBoxContainer.css("transform","translate("+sourceLeft+"px, "+sourceTop+"px)");},_open:function(){var that=this;if(typeof that.onOpenBefore==="function"){that.onOpenBefore();}this.$body.removeClass(this.animationParsed);this.$jconfirmBg.removeClass("jconfirm-bg-h");this.$body.focus();that.$jconfirmBoxContainer.css("transform","translate("+0+"px, "+0+"px)");setTimeout(function(){that.$body.css(that._getCSS(that.animationSpeed,1));that.$body.css({"transition-property":that.$body.css("transition-property")+", margin"});that.$jconfirmBoxContainer.addClass("jconfirm-no-transition");that._modalReady.resolve();if(typeof that.onOpen==="function"){that.onOpen();}that.$el.addClass(that.loadedClass);},this.animationSpeed);},loadedClass:"jconfirm-open",isClosed:function(){return !this.$el||this.$el.parent().length===0;},isOpen:function(){return !this.isClosed();},toggle:function(){if(!this.isOpen()){this.open();}else{this.close();}}};w.jconfirm.instances=[];w.jconfirm.lastFocused=false;w.jconfirm.pluginDefaults={template:'<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',title:"Hello",titleClass:"",type:"default",typeAnimated:true,draggable:true,dragWindowGap:15,dragWindowBorder:true,animateFromElement:true,alignMiddle:true,smoothContent:true,content:"Are you sure to continue?",buttons:{},defaultButtons:{ok:{action:function(){}},close:{action:function(){}}},contentLoaded:function(){},icon:"",lazyOpen:false,bgOpacity:null,theme:"light",animation:"scale",closeAnimation:"scale",animationSpeed:400,animationBounce:1,escapeKey:true,rtl:false,container:"body",containerFluid:false,backgroundDismiss:false,backgroundDismissAnimation:"shake",autoClose:false,closeIcon:null,closeIconClass:false,watchInterval:100,columnClass:"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",boxWidth:"50%",scrollToPreviousElement:true,scrollToPreviousElementAnimate:true,useBootstrap:true,offsetTop:40,offsetBottom:40,bootstrapClasses:{container:"container",containerFluid:"container-fluid",row:"row"},onContentReady:function(){},onOpenBefore:function(){},onOpen:function(){},onClose:function(){},onDestroy:function(){},onAction:function(){}};var keyDown=false;$(window).on("keydown",function(e){if(!keyDown){var $target=$(e.target);var pass=false;if($target.closest(".jconfirm-box").length){pass=true;}if(pass){$(window).trigger("jcKeyDown");}keyDown=true;}});$(window).on("keyup",function(){keyDown=false;});w.jconfirm.lastClicked=false;$(document).on("mousedown","button, a, [jc-source]",function(){w.jconfirm.lastClicked=$(this);});}));



const ease = {
    exponentialIn: (t) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialOut: (t) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    },
    exponentialInOut: (t) => {
        return t == 0.0 || t == 1.0
        ? t
        : t < 0.5
        ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
    },
    sineOut: (t) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
    },
    circularInOut: (t) => {
        return t < 0.5
        ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
        : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    },
    cubicIn: (t) => {
        return t * t * t;
    },
    cubicOut: (t) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
    },
    cubicInOut: (t) => {
        return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    },
    quadraticOut: (t) => {
        return -t * (t - 2.0);
    },
    quarticOut: (t) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    },
}



class ShapeOverlays {
    constructor(elm) {
        if(!elm)return;
        this.elm = elm;
        this.path = elm.querySelectorAll('path');
        this.numPoints = 10;
        this.duration = 700;
        this.delayPointsArray = [];
        this.delayPointsMax = 300;
        this.delayPerPath = 250;
        this.timeStart = Date.now();
        this.isOpened = false;
        this.isAnimating = false;
        this.type = "pix-overlay-6";
        // if($('body').attr('pix-overlay')){
        // if(document.getElementsByTagName('body')[0].getAttribute('data-pix-overlay')){
        //     this.type = document.getElementsByTagName('body')[0].getAttribute('data-pix-overlay');
        // }
        if(pixfort_main_object != 'undefined' || pixfort_main_object != undefined){
            if(pixfort_main_object.hasOwnProperty('dataPixOverlay')){
                this.type = pixfort_main_object.dataPixOverlay;
            }
        }


        if(this.type == "pix-overlay-1"){
            this.numPoints = 18;
            this.duration = 500;
            this.delayPointsMax = 300;
            this.delayPerPath = 100;
        }
        if(this.type == "pix-overlay-2"){
            this.numPoints = 4;
            this.duration = 600;
            this.delayPointsMax = 180;
            this.delayPerPath = 70;
        }
        if(this.type == "pix-overlay-3"){
            this.numPoints = 2;
            this.duration = 500;
            this.delayPointsMax = 0;
            this.delayPerPath = 200;
        }
        if(this.type == "pix-overlay-4"){
            this.numPoints = 4;
            this.duration = 900;
            this.delayPointsMax = 0;
            this.delayPerPath = 60;
        }
        if(this.type == "pix-overlay-5"){
            this.numPoints = 85;
            this.duration = 400;
            this.delayPointsMax = 300;
            this.delayPerPath = 150;
        }
    }
    toggle() {
        this.isAnimating = true;

        if(this.type == "pix-overlay-1"){
            const range = 4 * Math.random() + 6;
            for (var i = 0; i < this.numPoints; i++) {
                const radian = i / (this.numPoints - 1) * Math.PI;
                this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * this.delayPointsMax;
            }

        }

        if(this.type == "pix-overlay-2"){
            const range = Math.random() * Math.PI * 2;
            for (var i = 0; i < this.numPoints; i++) {
                const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
                this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
            }
        }

        if(this.type == "pix-overlay-3" || this.type == "pix-overlay-4"){
            for (var i = 0; i < this.numPoints; i++) {
                this.delayPointsArray[i] = 0;
            }
        }

        if(this.type == "pix-overlay-5" || this.type == "pix-overlay-6"){
            for (var i = 0; i < this.numPoints; i++) {
                this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
            }
        }


        if (this.isOpened === false) {
            this.open();
        } else {
            this.close();
        }
    }
    open() {
        this.isOpened = true;
        this.elm.classList.add('is-opened');
        this.timeStart = Date.now();
        this.renderLoop();
    }
    close() {
        this.isOpened = false;
        this.elm.classList.remove('is-opened');
        this.timeStart = Date.now();
        this.renderLoop();
    }
    updatePath(time) {
        const points = [];
        let str = '';

        if(this.type == "pix-overlay-1" || this.type == "pix-overlay-2"){
            for (var i = 0; i < this.numPoints + 1; i++) {
                points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
            }

            str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
            }
            str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
        }

        if(this.type == "pix-overlay-3"){
            for (var i = 0; i < this.numPoints; i++) {
                const thisEase = this.isOpened ?
                (i == 1) ? ease.cubicOut : ease.cubicInOut:
                (i == 1) ? ease.cubicInOut : ease.cubicOut;
                points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
            }

            str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
            }
            str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
        }

        if(this.type == "pix-overlay-4"){
            for (var i = 0; i < this.numPoints; i++) {
                const thisEase = (i % 2 === 1) ? ease.sineOut : ease.exponentialInOut;
                points[i] = (1 - thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
            }

            str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
            }
            str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
        }

        if(this.type == "pix-overlay-5"){
            for (var i = 0; i < this.numPoints; i++) {
                points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
            }

            str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
            }
            str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
        }

        if(this.type == "pix-overlay-6"){
            for (var i = 0; i < this.numPoints; i++) {
                points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
            }

            str += (this.isOpened) ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]} `;
            for (var i = 0; i < this.numPoints - 1; i++) {
                const p = (i + 1) / (this.numPoints - 1) * 100;
                const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
            }
            str += (this.isOpened) ? `V 100 H 0` : `V 0 H 0`;
        }
        return str;


    }
    render() {
        if (this.isOpened) {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
            }
        } else {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
            }
        }
    }
    renderLoop() {
        this.render();
        if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
            requestAnimationFrame(() => {
                this.renderLoop();
            });
        }
        else {
            this.isAnimating = false;
        }
    }
}







class dividerShapes {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 3;
    this.speed = 0.4;
    this.paths = [];
    this.pointsDir = [];
    this.pathsDir = [];
    this.min = 20;
    this.max = 80;
  }
  initPoints() {
      for (var i = 0; i < this.path.length; i++) {
          let points = [];
          let pointsDir = [];
          var rand = this.getRndInteger(this.min+1, this.max-1);
          const range = Math.random() * Math.PI * 2;
          for (var j = 0; j < this.numPoints; j++) {
            pointsDir[j] = this.getRndInteger(0, 1);

            const radian = (j / (this.numPoints - 1)) * Math.PI * 2;
            points[j] = ((Math.sin(radian + range) + 1) / 2)*100 ;

          }
          this.paths[i] = points;
          this.pathsDir[i] = pointsDir;
      }
      for (var j = 0; j < this.path.length; j++) {
          let str = '';
          str +=  `M 0 ${this.paths[j][0]} `;
          for (var i = 0; i < this.numPoints - 1; i++) {
            const p = (i + 1) / (this.numPoints - 1) * 100;
            const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
            str += `C ${cp} ${this.paths[j][i]} ${cp} ${this.paths[j][i + 1]} ${p} ${this.paths[j][i + 1]} `;
          }
          str += `V 100 H 0`;
          this.path[j].setAttribute('d', str);
      }
      // if(window.innerWidth>600){
          this.loop();
      // }
  }
  loop(){
      var self = this;
      setTimeout(function () {
          if(window.isInViewport(self.elm)){
              for (var j = 0; j < self.path.length; j++) {
                  for (var i = 0; i < self.numPoints; i++) {
                      var teta = self.getRndInteger(0, 40)/100; ;
                      if(self.pathsDir[j][i]>0){
                          self.paths[j][i]+= Math.abs(Math.sin( ((self.paths[j][i]-self.min)/(self.max-self.min))*Math.PI ))*self.speed+teta;
                          if(self.paths[j][i]>=(j==0 ? self.max-10 : self.max) ){
                              self.pathsDir[j][i]=0;
                          }
                      }else{
                          self.paths[j][i]-= Math.abs(Math.sin( ((self.max-self.paths[j][i]-self.min)/(self.max-self.min))*Math.PI ))*self.speed+teta;
                          if(self.paths[j][i]<=self.min){
                              self.pathsDir[j][i]=1;
                          }
                      }
                  }
                  let str = '';
                  str +=  `M 0 ${self.paths[j][0]} `;
                  for (var i = 0; i < self.numPoints - 1; i++) {
                    const p = (i + 1) / (self.numPoints - 1) * 100;
                    const cp = p - (1 / (self.numPoints - 1) * 100) / 2;
                    str += `C ${cp} ${self.paths[j][i]} ${cp} ${self.paths[j][i + 1]} ${p} ${self.paths[j][i + 1]} `;
                  }
                  str += `V 100 H 0`;
                  self.path[j].setAttribute('d', str);
              }
          }

        self.loop();
    }, 40);
  }
  getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
  }
}

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
//# sourceMappingURL=parallax.min.js.map

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.Countdown=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var defaultOptions={date:"June 7, 2087 15:03:25",refresh:1e3,offset:0,onEnd:function(){return},render:function(date){this.el.innerHTML=date.years+" years, "+date.days+" days, "+this.leadingZeros(date.hours)+" hours, "+this.leadingZeros(date.min)+" min and "+this.leadingZeros(date.sec)+" sec"}};var Countdown=function(el,options){this.el=el;this.options={};this.interval=false;this.mergeOptions=function(options){for(var i in defaultOptions){if(defaultOptions.hasOwnProperty(i)){this.options[i]=typeof options[i]!=="undefined"?options[i]:defaultOptions[i];if(i==="date"&&typeof this.options.date!=="object"){this.options.date=new Date(this.options.date)}if(typeof this.options[i]==="function"){this.options[i]=this.options[i].bind(this)}}}if(typeof this.options.date!=="object"){this.options.date=new Date(this.options.date)}}.bind(this);this.mergeOptions(options);this.getDiffDate=function(){var diff=(this.options.date.getTime()-Date.now()+this.options.offset)/1e3;var dateData={years:0,days:0,hours:0,min:0,sec:0,millisec:0};if(diff<=0){if(this.interval){this.stop();this.options.onEnd()}return dateData}if(diff>=365.25*86400){dateData.years=Math.floor(diff/(365.25*86400));diff-=dateData.years*365.25*86400}if(diff>=86400){dateData.days=Math.floor(diff/86400);diff-=dateData.days*86400}if(diff>=3600){dateData.hours=Math.floor(diff/3600);diff-=dateData.hours*3600}if(diff>=60){dateData.min=Math.floor(diff/60);diff-=dateData.min*60}dateData.sec=Math.round(diff);dateData.millisec=diff%1*1e3;return dateData}.bind(this);this.leadingZeros=function(num,length){length=length||2;num=String(num);if(num.length>length){return num}return(Array(length+1).join("0")+num).substr(-length)};this.update=function(newDate){if(typeof newDate!=="object"){newDate=new Date(newDate)}this.options.date=newDate;this.render();return this}.bind(this);this.stop=function(){if(this.interval){clearInterval(this.interval);this.interval=false}return this}.bind(this);this.render=function(){this.options.render(this.getDiffDate());return this}.bind(this);this.start=function(){if(this.interval){return}this.render();if(this.options.refresh){this.interval=setInterval(this.render,this.options.refresh)}return this}.bind(this);this.updateOffset=function(offset){this.options.offset=offset;return this}.bind(this);this.restart=function(options){this.mergeOptions(options);this.interval=false;this.start();return this}.bind(this);this.start()};module.exports=Countdown},{}],2:[function(require,module,exports){var Countdown=require("./countdown.js");var NAME="countdown";var DATA_ATTR="date";jQuery.fn.countdown=function(options){return $.each(this,function(i,el){var $el=$(el);if(!$el.data(NAME)){if($el.data(DATA_ATTR)){options.date=$el.data(DATA_ATTR)}$el.data(NAME,new Countdown(el,options))}})};module.exports=Countdown},{"./countdown.js":1}]},{},[2])(2)});
/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(P){"use strict";var d=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],e={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,a=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function v(e,t){var i=e.nodeName.toLowerCase();if(-1!==P.inArray(i,t))return-1===P.inArray(i,r)||Boolean(e.nodeValue.match(l)||e.nodeValue.match(a));for(var s=P(t).filter(function(e,t){return t instanceof RegExp}),n=0,o=s.length;n<o;n++)if(i.match(s[n]))return!0;return!1}function W(e,t,i){if(i&&"function"==typeof i)return i(e);for(var s=Object.keys(t),n=0,o=e.length;n<o;n++)for(var r=e[n].querySelectorAll("*"),l=0,a=r.length;l<a;l++){var c=r[l],d=c.nodeName.toLowerCase();if(-1!==s.indexOf(d))for(var h=[].slice.call(c.attributes),p=[].concat(t["*"]||[],t[d]||[]),u=0,f=h.length;u<f;u++){var m=h[u];v(m,p)||c.removeAttribute(m.nodeName)}else c.parentNode.removeChild(c)}}"classList"in document.createElement("_")||function(e){if("Element"in e){var t="classList",i="prototype",s=e.Element[i],n=Object,o=function(){var i=P(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.removeClass(e)},toggle:function(e,t){return i.toggleClass(e,t)},contains:function(e){return i.hasClass(e)}}};if(n.defineProperty){var r={get:o,enumerable:!0,configurable:!0};try{n.defineProperty(s,t,r)}catch(e){void 0!==e.number&&-2146823252!==e.number||(r.enumerable=!1,n.defineProperty(s,t,r))}}else n[i].__defineGetter__&&s.__defineGetter__(t,o)}}(window);var t,c,i=document.createElement("_");if(i.classList.add("c1","c2"),!i.classList.contains("c2")){var s=DOMTokenList.prototype.add,n=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,s.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,n.bind(this))}}if(i.classList.toggle("c3",!1),i.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:o.call(this,e)}}function h(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,o=1<arguments.length?arguments[1]:void 0,r=o?Number(o):0;r!=r&&(r=0);var l=Math.min(Math.max(r,0),i);if(i<n+l)return!1;for(var a=-1;++a<n;)if(t.charCodeAt(l+a)!=s.charCodeAt(a))return!1;return!0}function O(e,t){var i,s=e.selectedOptions,n=[];if(t){for(var o=0,r=s.length;o<r;o++)(i=s[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i);return n}return s}function z(e,t){for(var i,s=[],n=t||e.selectedOptions,o=0,r=n.length;o<r;o++)(i=n[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||s.push(i.value);return e.multiple?s:s.length?s[0]:null}i=null,String.prototype.startsWith||(t=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),c={}.toString,t?t(String.prototype,"startsWith",{value:h,configurable:!0,writable:!0}):String.prototype.startsWith=h),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var p={useDefault:!1,_set:P.valHooks.select.set};P.valHooks.select.set=function(e,t){return t&&!p.useDefault&&P(e).data("selected",!0),p._set.apply(this,arguments)};var T=null,u=function(){try{return new Event("change"),!0}catch(e){return!1}}();function k(e,t,i,s){for(var n=["display","subtext","tokens"],o=!1,r=0;r<n.length;r++){var l=n[r],a=e[l];if(a&&(a=a.toString(),"display"===l&&(a=a.replace(/<[^>]+>/g,"")),s&&(a=w(a)),a=a.toUpperCase(),o="contains"===i?0<=a.indexOf(t):a.startsWith(t)))break}return o}function N(e){return parseInt(e,10)||0}P.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(u?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var f={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,g=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function b(e){return f[e]}function w(e){return(e=e.toString())&&e.replace(m,b).replace(g,"")}var I,x,y,$,S=(I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},x="(?:"+Object.keys(I).join("|")+")",y=RegExp(x),$=RegExp(x,"g"),function(e){return e=null==e?"":""+e,y.test(e)?e.replace($,E):e});function E(e){return I[e]}var C={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},A=27,L=13,D=32,H=9,B=38,R=40,M={success:!1,major:"3"};try{M.full=(P.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),M.major=M.full[0],M.success=!0}catch(e){}var U=0,j=".bs.select",V={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},F={MENU:"."+V.MENU},_={div:document.createElement("div"),span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode("\xa0"),fragment:document.createDocumentFragment()};_.noResults=_.li.cloneNode(!1),_.noResults.className="no-results",_.a.setAttribute("role","option"),_.a.className="dropdown-item",_.subtext.className="text-muted",_.text=_.span.cloneNode(!1),_.text.className="text",_.checkMark=_.span.cloneNode(!1);var G=new RegExp(B+"|"+R),q=new RegExp("^"+H+"$|"+A),K={li:function(e,t,i){var s=_.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?s.appendChild(e):s.innerHTML=e),void 0!==t&&""!==t&&(s.className=t),null!=i&&s.classList.add("optgroup-"+i),s},a:function(e,t,i){var s=_.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&s.classList.add.apply(s.classList,t.split(/\s+/)),i&&s.setAttribute("style",i),s},text:function(e,t){var i,s,n=_.text.cloneNode(!1);if(e.content)n.innerHTML=e.content;else{if(n.textContent=e.text,e.icon){var o=_.whitespace.cloneNode(!1);(s=(!0===t?_.i:_.span).cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(s),_.fragment.appendChild(o)}e.subtext&&((i=_.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(i))}if(!0===t)for(;0<n.childNodes.length;)_.fragment.appendChild(n.childNodes[0]);else _.fragment.appendChild(n);return _.fragment},label:function(e){var t,i,s=_.text.cloneNode(!1);if(s.innerHTML=e.display,e.icon){var n=_.whitespace.cloneNode(!1);(i=_.span.cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(i),_.fragment.appendChild(n)}return e.subtext&&((t=_.subtext.cloneNode(!1)).textContent=e.subtext,s.appendChild(t)),_.fragment.appendChild(s),_.fragment}};var Y=function(e,t){var i=this;p.useDefault||(P.valHooks.select.set=p._set,p.useDefault=!0),this.$element=P(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{},search:{},current:{},view:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){i.selectpicker.keydown.keyHistory=""},800)}}}},this.sizeInfo={},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=Y.prototype.val,this.render=Y.prototype.render,this.refresh=Y.prototype.refresh,this.setStyle=Y.prototype.setStyle,this.selectAll=Y.prototype.selectAll,this.deselectAll=Y.prototype.deselectAll,this.destroy=Y.prototype.destroy,this.remove=Y.prototype.remove,this.show=Y.prototype.show,this.hide=Y.prototype.hide,this.init()};function Z(e){var l,a=arguments,c=e;if([].shift.apply(a),!M.success){try{M.full=(P.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){Y.BootstrapVersion?M.full=Y.BootstrapVersion.split(" ")[0].split("."):(M.full=[M.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}M.major=M.full[0],M.success=!0}if("4"===M.major){var t=[];Y.DEFAULTS.style===V.BUTTONCLASS&&t.push({name:"style",className:"BUTTONCLASS"}),Y.DEFAULTS.iconBase===V.ICONBASE&&t.push({name:"iconBase",className:"ICONBASE"}),Y.DEFAULTS.tickIcon===V.TICKICON&&t.push({name:"tickIcon",className:"TICKICON"}),V.DIVIDER="dropdown-divider",V.SHOW="show",V.BUTTONCLASS="btn-light",V.POPOVERHEADER="popover-header",V.ICONBASE="",V.TICKICON="bs-ok-default";for(var i=0;i<t.length;i++){e=t[i];Y.DEFAULTS[e.name]=V[e.className]}}var s=this.each(function(){var e=P(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof c&&c;if(t){if(i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t.options[s]=i[s])}else{var n=e.data();for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&-1!==P.inArray(o,d)&&delete n[o];var r=P.extend({},Y.DEFAULTS,P.fn.selectpicker.defaults||{},n,i);r.template=P.extend({},Y.DEFAULTS.template,P.fn.selectpicker.defaults?P.fn.selectpicker.defaults.template:{},n.template,i.template),e.data("selectpicker",t=new Y(this,r))}"string"==typeof c&&(l=t[c]instanceof Function?t[c].apply(t,a):t.options[c])}});return void 0!==l?l:s}Y.VERSION="1.13.18",Y.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:V.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:V.ICONBASE,tickIcon:V.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:e},Y.prototype={constructor:Y,init:function(){var i=this,e=this.$element.attr("id"),t=this.$element[0],s=t.form;U++,this.selectId="bs-select-"+U,t.classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),t.classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.buildData(),this.$element.after(this.$newElement).prependTo(this.$newElement),s&&null===t.form&&(s.id||(s.id="form-"+this.selectId),t.setAttribute("form",s.id)),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(F.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),t.classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(V.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+j,function(){if(i.isVirtual()){var e=i.$menuInner[0],t=e.firstChild.cloneNode(!1);e.replaceChild(t,e.firstChild),e.scrollTop=0}}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$element.trigger("hide"+j,e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden"+j,e)},"show.bs.dropdown":function(e){i.$element.trigger("show"+j,e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown"+j,e)}}),t.hasAttribute("required")&&this.$element.on("invalid"+j,function(){i.$button[0].classList.add("bs-invalid"),i.$element.on("shown"+j+".invalid",function(){i.$element.val(i.$element.val()).off("shown"+j+".invalid")}).on("rendered"+j,function(){this.validity.valid&&i.$button[0].classList.remove("bs-invalid"),i.$element.off("rendered"+j)}),i.$button.on("blur"+j,function(){i.$element.trigger("focus").trigger("blur"),i.$button.off("blur"+j)})}),setTimeout(function(){i.buildList(),i.$element.trigger("loaded"+j)})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.multiple?' aria-multiselectable="true"':"",i="",s=this.autofocus?" autofocus":"";M.major<4&&this.$element.parent().hasClass("input-group")&&(i=" input-group-btn");var n,o="",r="",l="",a="";return this.options.header&&(o='<div class="'+V.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(r='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+S(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+V.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+V.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(a='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+V.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),n='<div class="dropdown bootstrap-select'+e+i+'"><button type="button" tabindex="-1" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===M.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+V.MENU+" "+("4"===M.major?"":V.SHOW)+'">'+o+r+l+'<div class="inner '+V.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+t+'><ul class="'+V.MENU+" inner "+("4"===M.major?V.SHOW:"")+'" role="presentation"></ul></div>'+a+"</div></div>",P(n)},setPositionData:function(){this.selectpicker.view.canHighlight=[],this.selectpicker.view.size=0,this.selectpicker.view.firstHighlightIndex=!1;for(var e=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size,!1===this.selectpicker.view.firstHighlightIndex&&(this.selectpicker.view.firstHighlightIndex=e)),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(N,e,t){var A,L,D=this,i=0,H=[];if(this.selectpicker.isSearching=N,this.selectpicker.current=N?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),e)if(t)i=this.$menuInner[0].scrollTop;else if(!D.multiple){var s=D.$element[0],n=(s.options[s.selectedIndex]||{}).liIndex;if("number"==typeof n&&!1!==D.options.size){var o=D.selectpicker.main.data[n],r=o&&o.position;r&&(i=r-(D.sizeInfo.menuInnerHeight+D.sizeInfo.liHeight)/2)}}function l(e,t){var i,s,n,o,r,l,a,c,d=D.selectpicker.current.elements.length,h=[],p=!0,u=D.isVirtual();D.selectpicker.view.scrollTop=e,i=Math.ceil(D.sizeInfo.menuInnerHeight/D.sizeInfo.liHeight*1.5),s=Math.round(d/i)||1;for(var f=0;f<s;f++){var m=(f+1)*i;if(f===s-1&&(m=d),h[f]=[f*i+(f?1:0),m],!d)break;void 0===r&&e-1<=D.selectpicker.current.data[m-1].position-D.sizeInfo.menuInnerHeight&&(r=f)}if(void 0===r&&(r=0),l=[D.selectpicker.view.position0,D.selectpicker.view.position1],n=Math.max(0,r-1),o=Math.min(s-1,r+1),D.selectpicker.view.position0=!1===u?0:Math.max(0,h[n][0])||0,D.selectpicker.view.position1=!1===u?d:Math.min(d,h[o][1])||0,a=l[0]!==D.selectpicker.view.position0||l[1]!==D.selectpicker.view.position1,void 0!==D.activeIndex&&(L=D.selectpicker.main.elements[D.prevActiveIndex],H=D.selectpicker.main.elements[D.activeIndex],A=D.selectpicker.main.elements[D.selectedIndex],t&&(D.activeIndex!==D.selectedIndex&&D.defocusItem(H),D.activeIndex=void 0),D.activeIndex&&D.activeIndex!==D.selectedIndex&&D.defocusItem(A)),void 0!==D.prevActiveIndex&&D.prevActiveIndex!==D.activeIndex&&D.prevActiveIndex!==D.selectedIndex&&D.defocusItem(L),(t||a)&&(c=D.selectpicker.view.visibleElements?D.selectpicker.view.visibleElements.slice():[],D.selectpicker.view.visibleElements=!1===u?D.selectpicker.current.elements:D.selectpicker.current.elements.slice(D.selectpicker.view.position0,D.selectpicker.view.position1),D.setOptionStatus(),(N||!1===u&&t)&&(p=!function(e,i){return e.length===i.length&&e.every(function(e,t){return e===i[t]})}(c,D.selectpicker.view.visibleElements)),(t||!0===u)&&p)){var v,g,b=D.$menuInner[0],w=document.createDocumentFragment(),I=b.firstChild.cloneNode(!1),x=D.selectpicker.view.visibleElements,k=[];b.replaceChild(I,b.firstChild);f=0;for(var y=x.length;f<y;f++){var $,S,E=x[f];D.options.sanitize&&($=E.lastChild)&&(S=D.selectpicker.current.data[f+D.selectpicker.view.position0])&&S.content&&!S.sanitized&&(k.push($),S.sanitized=!0),w.appendChild(E)}if(D.options.sanitize&&k.length&&W(k,D.options.whiteList,D.options.sanitizeFn),!0===u?(v=0===D.selectpicker.view.position0?0:D.selectpicker.current.data[D.selectpicker.view.position0-1].position,g=D.selectpicker.view.position1>d-1?0:D.selectpicker.current.data[d-1].position-D.selectpicker.current.data[D.selectpicker.view.position1-1].position,b.firstChild.style.marginTop=v+"px",b.firstChild.style.marginBottom=g+"px"):(b.firstChild.style.marginTop=0,b.firstChild.style.marginBottom=0),b.firstChild.appendChild(w),!0===u&&D.sizeInfo.hasScrollBar){var C=b.firstChild.offsetWidth;if(t&&C<D.sizeInfo.menuInnerInnerWidth&&D.sizeInfo.totalMenuWidth>D.sizeInfo.selectWidth)b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px";else if(C>D.sizeInfo.menuInnerInnerWidth){D.$menu[0].style.minWidth=0;var O=b.firstChild.offsetWidth;O>D.sizeInfo.menuInnerInnerWidth&&(D.sizeInfo.menuInnerInnerWidth=O,b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px"),D.$menu[0].style.minWidth=""}}}if(D.prevActiveIndex=D.activeIndex,D.options.liveSearch){if(N&&t){var z,T=0;D.selectpicker.view.canHighlight[T]||(T=1+D.selectpicker.view.canHighlight.slice(1).indexOf(!0)),z=D.selectpicker.view.visibleElements[T],D.defocusItem(D.selectpicker.view.currentActive),D.activeIndex=(D.selectpicker.current.data[T]||{}).index,D.focusItem(z)}}else D.$menuInner.trigger("focus")}l(i,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(e,t){D.noScroll||l(this.scrollTop,t),D.noScroll=!1}),P(window).off("resize"+j+"."+this.selectId+".createView").on("resize"+j+"."+this.selectId+".createView",function(){D.$newElement.hasClass(V.SHOW)&&l(D.$menuInner[0].scrollTop)})},focusItem:function(e,t,i){if(e){t=t||this.selectpicker.main.data[this.activeIndex];var s=e.firstChild;s&&(s.setAttribute("aria-setsize",this.selectpicker.view.size),s.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",s.id),e.classList.add("active"),s.classList.add("active")))}},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e=this,t=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),t=!0;var i=this.$element[0],s=!1,n=!this.selectpicker.view.titleOption.parentNode,o=i.selectedIndex,r=i.options[o],l=window.performance&&window.performance.getEntriesByType("navigation"),a=l&&l.length?"back_forward"!==l[0].type:2!==window.performance.navigation.type;n&&(this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",s=!r||0===o&&!1===r.defaultSelected&&void 0===this.$element.data("selected")),!n&&0===this.selectpicker.view.titleOption.index||i.insertBefore(this.selectpicker.view.titleOption,i.firstChild),s&&a?i.selectedIndex=0:"complete"!==document.readyState&&window.addEventListener("pageshow",function(){e.selectpicker.view.displayedValue!==i.value&&e.render()})}return t},buildData:function(){var p=':not([hidden]):not([data-hidden="true"])',u=[],f=0,m=this.setPlaceholder()?1:0;this.options.hideDisabled&&(p+=":not(:disabled)");var e=this.$element[0].querySelectorAll("select > *"+p);function v(e){var t=u[u.length-1];t&&"divider"===t.type&&(t.optID||e.optID)||((e=e||{}).type="divider",u.push(e))}function g(e,t){if((t=t||{}).divider="true"===e.getAttribute("data-divider"),t.divider)v({optID:t.optID});else{var i=u.length,s=e.style.cssText,n=s?S(s):"",o=(e.className||"")+(t.optgroupClass||"");t.optID&&(o="opt "+o),t.optionClass=o.trim(),t.inlineStyle=n,t.text=e.textContent,t.content=e.getAttribute("data-content"),t.tokens=e.getAttribute("data-tokens"),t.subtext=e.getAttribute("data-subtext"),t.icon=e.getAttribute("data-icon"),e.liIndex=i,t.display=t.content||t.text,t.type="option",t.index=i,t.option=e,t.selected=!!e.selected,t.disabled=t.disabled||!!e.disabled,u.push(t)}}function t(e,t){var i=t[e],s=!(e-1<m)&&t[e-1],n=t[e+1],o=i.querySelectorAll("option"+p);if(o.length){var r,l,a={display:S(i.label),subtext:i.getAttribute("data-subtext"),icon:i.getAttribute("data-icon"),type:"optgroup-label",optgroupClass:" "+(i.className||"")};f++,s&&v({optID:f}),a.optID=f,u.push(a);for(var c=0,d=o.length;c<d;c++){var h=o[c];0===c&&(l=(r=u.length-1)+d),g(h,{headerIndex:r,lastIndex:l,optID:a.optID,optgroupClass:a.optgroupClass,disabled:i.disabled})}n&&v({optID:f})}}for(var i=e.length,s=m;s<i;s++){var n=e[s];"OPTGROUP"!==n.tagName?g(n,{}):t(s,e)}this.selectpicker.main.data=this.selectpicker.current.data=u},buildList:function(){var s=this,e=this.selectpicker.main.data,n=[],o=0;function t(e){var t,i=0;switch(e.type){case"divider":t=K.li(!1,V.DIVIDER,e.optID?e.optID+"div":void 0);break;case"option":(t=K.li(K.a(K.text.call(s,e),e.optionClass,e.inlineStyle),"",e.optID)).firstChild&&(t.firstChild.id=s.selectId+"-"+e.index);break;case"optgroup-label":t=K.li(K.label.call(s,e),"dropdown-header"+e.optgroupClass,e.optID)}e.element=t,n.push(t),e.display&&(i+=e.display.length),e.subtext&&(i+=e.subtext.length),e.icon&&(i+=1),o<i&&(o=i,s.selectpicker.view.widestOption=n[n.length-1])}!s.options.showTick&&!s.multiple||_.checkMark.parentNode||(_.checkMark.className=this.options.iconBase+" "+s.options.tickIcon+" check-mark",_.a.appendChild(_.checkMark));for(var i=e.length,r=0;r<i;r++){t(e[r])}this.selectpicker.main.elements=this.selectpicker.current.elements=n},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var e,t=this,i=this.$element[0],s=this.setPlaceholder()&&0===i.selectedIndex,n=O(i,this.options.hideDisabled),o=n.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),a=document.createTextNode(this.options.multipleSeparator),c=_.fragment.cloneNode(!1),d=!1;if(r.classList.toggle("bs-placeholder",t.multiple?!o:!z(i,n)),t.multiple||1!==n.length||(t.selectpicker.view.displayedValue=z(i,n)),"static"===this.options.selectedTextFormat)c=K.text.call(this,{text:this.options.title},!0);else if(!1===(this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&1<o&&(1<(e=this.options.selectedTextFormat.split(">")).length&&o>e[1]||1===e.length&&2<=o))){if(!s){for(var h=0;h<o&&h<50;h++){var p=n[h],u=this.selectpicker.main.data[p.liIndex],f={};this.multiple&&0<h&&c.appendChild(a.cloneNode(!1)),p.title?f.text=p.title:u&&(u.content&&t.options.showContent?(f.content=u.content.toString(),d=!0):(t.options.showIcon&&(f.icon=u.icon),t.options.showSubtext&&!t.multiple&&u.subtext&&(f.subtext=" "+u.subtext),f.text=p.textContent.trim())),c.appendChild(K.text.call(this,f,!0))}49<o&&c.appendChild(document.createTextNode("..."))}}else{var m=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(m+=":not(:disabled)");var v=this.$element[0].querySelectorAll("select > option"+m+", optgroup"+m+" option"+m).length,g="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,v):this.options.countSelectedText;c=K.text.call(this,{text:g.replace("{0}",o.toString()).replace("{1}",v.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),c.childNodes.length||(c=K.text.call(this,{text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=c.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&d&&W([c],t.options.whiteList,t.options.sanitizeFn),l.innerHTML="",l.appendChild(c),M.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var b=r.querySelector(".filter-expand"),w=l.cloneNode(!0);w.className="filter-expand",b?r.replaceChild(w,b):r.appendChild(w)}this.$element.trigger("rendered"+j)},setStyle:function(e,t){var i,s=this.$button[0],n=this.$newElement[0],o=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),M.major<4&&(n.classList.add("bs3"),n.parentNode.classList&&n.parentNode.classList.contains("input-group")&&(n.previousElementSibling||n.nextElementSibling)&&(n.previousElementSibling||n.nextElementSibling).classList.contains("input-group-addon")&&n.classList.add("bs3-has-addon")),i=e?e.trim():o,"add"==t?i&&s.classList.add.apply(s.classList,i.split(" ")):"remove"==t?i&&s.classList.remove.apply(s.classList,i.split(" ")):(o&&s.classList.remove.apply(s.classList,o.split(" ")),i&&s.classList.add.apply(s.classList,i.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var t,i=_.div.cloneNode(!1),s=_.div.cloneNode(!1),n=_.div.cloneNode(!1),o=document.createElement("ul"),r=_.li.cloneNode(!1),l=_.li.cloneNode(!1),a=_.a.cloneNode(!1),c=_.span.cloneNode(!1),d=this.options.header&&0<this.$menu.find("."+V.POPOVERHEADER).length?this.$menu.find("."+V.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?_.div.cloneNode(!1):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,f=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,c.className="text",a.className="dropdown-item "+(f?f.className:""),i.className=this.$menu[0].parentNode.className+" "+V.SHOW,i.style.width=0,"auto"===this.options.width&&(s.style.minWidth=0),s.className=V.MENU+" "+V.SHOW,n.className="inner "+V.SHOW,o.className=V.MENU+" inner "+("4"===M.major?V.SHOW:""),r.className=V.DIVIDER,l.className="dropdown-header",c.appendChild(document.createTextNode("\u200b")),this.selectpicker.current.data.length)for(var m=0;m<this.selectpicker.current.data.length;m++){var v=this.selectpicker.current.data[m];if("option"===v.type){t=v.element;break}}else t=_.li.cloneNode(!1),a.appendChild(c),t.appendChild(a);if(l.appendChild(c.cloneNode(!0)),this.selectpicker.view.widestOption&&o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),o.appendChild(t),o.appendChild(r),o.appendChild(l),d&&s.appendChild(d),h){var g=document.createElement("input");h.className="bs-searchbox",g.className="form-control",h.appendChild(g),s.appendChild(h)}p&&s.appendChild(p),n.appendChild(o),s.appendChild(n),u&&s.appendChild(u),i.appendChild(s),document.body.appendChild(i);var b,w=t.offsetHeight,I=l?l.offsetHeight:0,x=d?d.offsetHeight:0,k=h?h.offsetHeight:0,y=p?p.offsetHeight:0,$=u?u.offsetHeight:0,S=P(r).outerHeight(!0),E=!!window.getComputedStyle&&window.getComputedStyle(s),C=s.offsetWidth,O=E?null:P(s),z={vert:N(E?E.paddingTop:O.css("paddingTop"))+N(E?E.paddingBottom:O.css("paddingBottom"))+N(E?E.borderTopWidth:O.css("borderTopWidth"))+N(E?E.borderBottomWidth:O.css("borderBottomWidth")),horiz:N(E?E.paddingLeft:O.css("paddingLeft"))+N(E?E.paddingRight:O.css("paddingRight"))+N(E?E.borderLeftWidth:O.css("borderLeftWidth"))+N(E?E.borderRightWidth:O.css("borderRightWidth"))},T={vert:z.vert+N(E?E.marginTop:O.css("marginTop"))+N(E?E.marginBottom:O.css("marginBottom"))+2,horiz:z.horiz+N(E?E.marginLeft:O.css("marginLeft"))+N(E?E.marginRight:O.css("marginRight"))+2};n.style.overflowY="scroll",b=s.offsetWidth-C,document.body.removeChild(i),this.sizeInfo.liHeight=w,this.sizeInfo.dropdownHeaderHeight=I,this.sizeInfo.headerHeight=x,this.sizeInfo.searchHeight=k,this.sizeInfo.actionsHeight=y,this.sizeInfo.doneButtonHeight=$,this.sizeInfo.dividerHeight=S,this.sizeInfo.menuPadding=z,this.sizeInfo.menuExtras=T,this.sizeInfo.menuWidth=C,this.sizeInfo.menuInnerInnerWidth=C-z.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=b,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=P(window),i=this.$newElement.offset(),s=P(this.options.container);this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var n=this.options.windowPadding;this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-n[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-n[1],this.sizeInfo.selectOffsetTop-=n[0],this.sizeInfo.selectOffsetLeft-=n[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,r,l,a,c=this.sizeInfo.selectWidth,d=this.sizeInfo.liHeight,h=this.sizeInfo.headerHeight,p=this.sizeInfo.searchHeight,u=this.sizeInfo.actionsHeight,f=this.sizeInfo.doneButtonHeight,m=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,g=0;if(this.options.dropupAuto&&(l=d*this.selectpicker.current.elements.length+v.vert,a=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&l+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(a=this.selectpicker.dropup),this.$newElement.toggleClass(V.DROPUP,a),this.selectpicker.dropup=a),"auto"===this.options.size)n=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=n+h+p+u+f,r=Math.max(n-v.vert,0),this.$newElement.hasClass(V.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),t=(o=i)-h-p-u-f-v.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var b=0;b<this.options.size;b++)"divider"===this.selectpicker.current.data[b].type&&g++;t=(i=d*this.options.size+g*m+v.vert)-v.vert,o=i+h+p+u+f,s=r=""}this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":r+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(V.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-c),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t=this,i=P(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return t.setMenuSize()}),"auto"===this.options.size?i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize").on("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize",function(){return t.setMenuSize()}):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize")}this.createView(!1,!0,e)},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame(function(){i.$menu.css("min-width","0"),i.$element.on("loaded"+j,function(){i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")})}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=P('<div class="bs-container" />');function e(e){var t={},i=r.options.display||!!P.fn.dropdown.Constructor.Default&&P.fn.dropdown.Constructor.Default.display;r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(V.DROPUP,e.hasClass(V.DROPUP)),s=e.offset(),l.is("body")?n={top:0,left:0}:((n=l.offset()).top+=parseInt(l.css("borderTopWidth"))-l.scrollTop(),n.left+=parseInt(l.css("borderLeftWidth"))-l.scrollLeft()),o=e.hasClass(V.DROPUP)?0:e[0].offsetHeight,(M.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,r.$bsContainer.css(t)}var s,n,o,r=this,l=P(this.options.container);this.$button.on("click.bs.dropdown.data-api",function(){r.isDisabled()||(e(r.$newElement),r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW,!r.$button.hasClass(V.SHOW)).append(r.$menu))}),P(window).off("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId).on("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId,function(){r.$newElement.hasClass(V.SHOW)&&e(r.$newElement)}),this.$element.on("hide"+j,function(){r.$menu.data("height",r.$menu.height()),r.$bsContainer.detach()})},setOptionStatus:function(e){var t=this;if(t.noScroll=!1,t.selectpicker.view.visibleElements&&t.selectpicker.view.visibleElements.length)for(var i=0;i<t.selectpicker.view.visibleElements.length;i++){var s=t.selectpicker.current.data[i+t.selectpicker.view.position0],n=s.option;n&&(!0!==e&&t.setDisabled(s.index,s.disabled),t.setSelected(s.index,n.selected))}},setSelected:function(e,t){var i,s,n=this.selectpicker.main.elements[e],o=this.selectpicker.main.data[e],r=void 0!==this.activeIndex,l=this.activeIndex===e||t&&!this.multiple&&!r;o.selected=t,s=n.firstChild,t&&(this.selectedIndex=e),n.classList.toggle("selected",t),l?(this.focusItem(n,o),this.selectpicker.view.currentActive=n,this.activeIndex=e):this.defocusItem(n),s&&(s.classList.toggle("selected",t),t?s.setAttribute("aria-selected",!0):this.multiple?s.setAttribute("aria-selected",!1):s.removeAttribute("aria-selected")),l||r||!t||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(e,t){var i,s=this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled=t,i=s.firstChild,s.classList.toggle(V.DISABLED,t),i&&("4"===M.major&&i.classList.toggle(V.DISABLED,t),t?(i.setAttribute("aria-disabled",t),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(V.DISABLED),this.$button.addClass(V.DISABLED).attr("aria-disabled",!0)):this.$button[0].classList.contains(V.DISABLED)&&(this.$newElement[0].classList.remove(V.DISABLED),this.$button.removeClass(V.DISABLED).attr("aria-disabled",!1))},clickListener:function(){var C=this,t=P(document);function e(){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$menuInner.trigger("focus")}function i(){C.dropdown&&C.dropdown._popper&&C.dropdown._popper.state.isCreated?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){3<M.major&&!C.dropdown&&(C.dropdown=C.$button.data("bs.dropdown"),C.dropdown._menu=C.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(){C.$newElement.hasClass(V.SHOW)||C.setSize()}),this.$element.on("shown"+j,function(){C.$menuInner[0].scrollTop!==C.selectpicker.view.scrollTop&&(C.$menuInner[0].scrollTop=C.selectpicker.view.scrollTop),3<M.major?requestAnimationFrame(i):e()}),this.$menuInner.on("mouseenter","li a",function(e){var t=this.parentElement,i=C.isVirtual()?C.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(t.parentElement.children,t),n=C.selectpicker.current.data[s+i];C.focusItem(t,n,!0)}),this.$menuInner.on("click","li a",function(e,t){var i=P(this),s=C.$element[0],n=C.isVirtual()?C.selectpicker.view.position0:0,o=C.selectpicker.current.data[i.parent().index()+n],r=o.index,l=z(s),a=s.selectedIndex,c=s.options[a],d=!0;if(C.multiple&&1!==C.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!C.isDisabled()&&!i.parent().hasClass(V.DISABLED)){var h=o.option,p=P(h),u=h.selected,f=p.parent("optgroup"),m=f.find("option"),v=C.options.maxOptions,g=f.data("maxOptions")||!1;if(r===C.activeIndex&&(t=!0),t||(C.prevActiveIndex=C.activeIndex,C.activeIndex=void 0),C.multiple){if(h.selected=!u,C.setSelected(r,!u),C.focusedParent.focus(),!1!==v||!1!==g){var b=v<O(s).length,w=g<f.find("option:selected").length;if(v&&b||g&&w)if(v&&1==v)s.selectedIndex=-1,h.selected=!0,C.setOptionStatus(!0);else if(g&&1==g){for(var I=0;I<m.length;I++){var x=m[I];x.selected=!1,C.setSelected(x.liIndex,!1)}h.selected=!0,C.setSelected(r,!0)}else{var k="string"==typeof C.options.maxOptionsText?[C.options.maxOptionsText,C.options.maxOptionsText]:C.options.maxOptionsText,y="function"==typeof k?k(v,g):k,$=y[0].replace("{n}",v),S=y[1].replace("{n}",g),E=P('<div class="notify"></div>');y[2]&&($=$.replace("{var}",y[2][1<v?0:1]),S=S.replace("{var}",y[2][1<g?0:1])),h.selected=!1,C.$menu.append(E),v&&b&&(E.append(P("<div>"+$+"</div>")),d=!1,C.$element.trigger("maxReached"+j)),g&&w&&(E.append(P("<div>"+S+"</div>")),d=!1,C.$element.trigger("maxReachedGrp"+j)),setTimeout(function(){C.setSelected(r,!1)},10),E[0].classList.add("fadeOut"),setTimeout(function(){E.remove()},1050)}}}else c&&(c.selected=!1),h.selected=!0,C.setSelected(r,!0);!C.multiple||C.multiple&&1===C.options.maxOptions?C.$button.trigger("focus"):C.options.liveSearch&&C.$searchbox.trigger("focus"),d&&(!C.multiple&&a===s.selectedIndex||(T=[h.index,p.prop("selected"),l],C.$element.triggerNative("change")))}}),this.$menu.on("click","li."+V.DISABLED+" a, ."+V.POPOVERHEADER+", ."+V.POPOVERHEADER+" :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),C.options.liveSearch&&!P(e.target).hasClass("close")?C.$searchbox.trigger("focus"):C.$button.trigger("focus"))}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus")}),this.$menu.on("click","."+V.POPOVERHEADER+" .close",function(){C.$button.trigger("click")}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus"),e.preventDefault(),e.stopPropagation(),P(this).hasClass("bs-select-all")?C.selectAll():C.deselectAll()}),this.$button.on("focus"+j,function(e){var t=C.$element[0].getAttribute("tabindex");void 0!==t&&e.originalEvent&&e.originalEvent.isTrusted&&(this.setAttribute("tabindex",t),C.$element[0].setAttribute("tabindex",-1),C.selectpicker.view.tabindex=t)}).on("blur"+j,function(e){void 0!==C.selectpicker.view.tabindex&&e.originalEvent&&e.originalEvent.isTrusted&&(C.$element[0].setAttribute("tabindex",C.selectpicker.view.tabindex),this.setAttribute("tabindex",-1),C.selectpicker.view.tabindex=void 0)}),this.$element.on("change"+j,function(){C.render(),C.$element.trigger("changed"+j,T),T=null}).on("focus"+j,function(){C.options.mobile||C.$button[0].focus()})},liveSearchListener:function(){var u=this;this.$button.on("click.bs.dropdown.data-api",function(){u.$searchbox.val()&&(u.$searchbox.val(""),u.selectpicker.search.previousValue=void 0)}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var e=u.$searchbox[0].value;if(u.selectpicker.search.elements=[],u.selectpicker.search.data=[],e){var t=[],i=e.toUpperCase(),s={},n=[],o=u._searchStyle(),r=u.options.liveSearchNormalize;r&&(i=w(i));for(var l=0;l<u.selectpicker.main.data.length;l++){var a=u.selectpicker.main.data[l];s[l]||(s[l]=k(a,i,o,r)),s[l]&&void 0!==a.headerIndex&&-1===n.indexOf(a.headerIndex)&&(0<a.headerIndex&&(s[a.headerIndex-1]=!0,n.push(a.headerIndex-1)),s[a.headerIndex]=!0,n.push(a.headerIndex),s[a.lastIndex+1]=!0),s[l]&&"optgroup-label"!==a.type&&n.push(l)}l=0;for(var c=n.length;l<c;l++){var d=n[l],h=n[l-1],p=(a=u.selectpicker.main.data[d],u.selectpicker.main.data[h]);("divider"!==a.type||"divider"===a.type&&p&&"divider"!==p.type&&c-1!==l)&&(u.selectpicker.search.data.push(a),t.push(u.selectpicker.main.elements[d]))}u.activeIndex=void 0,u.noScroll=!0,u.$menuInner.scrollTop(0),u.selectpicker.search.elements=t,u.createView(!0),function(e,t){e.length||(_.noResults.innerHTML=this.options.noneResultsText.replace("{0}",'"'+S(t)+'"'),this.$menuInner[0].firstChild.appendChild(_.noResults))}.call(u,t,e)}else u.selectpicker.search.previousValue&&(u.$menuInner.scrollTop(0),u.createView(!1));u.selectpicker.search.previousValue=e})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){var t=this.$element[0];if(void 0===e)return this.$element.val();var i=z(t);if(T=[null,null,i],this.$element.val(e).trigger("changed"+j,T),this.$newElement.hasClass(V.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var s=(t.options[t.selectedIndex]||{}).liIndex;"number"==typeof s&&(this.setSelected(this.selectedIndex,!1),this.setSelected(s,!0))}return this.render(),T=null,this.$element},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,s=0,n=z(t);t.classList.add("bs-select-hidden");for(var o=0,r=this.selectpicker.current.data,l=r.length;o<l;o++){var a=r[o],c=a.option;c&&!a.disabled&&"divider"!==a.type&&(a.selected&&i++,!0===(c.selected=e)&&s++)}t.classList.remove("bs-select-hidden"),i!==s&&(this.setOptionStatus(),T=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var t,i,s,n,o,r=P(this),l=r.hasClass("dropdown-toggle"),a=(l?r.closest(".dropdown"):r.closest(F.MENU)).data("this"),c=a.findLis(),d=!1,h=e.which===H&&!l&&!a.options.selectOnTab,p=G.test(e.which)||h,u=a.$menuInner[0].scrollTop,f=!0===a.isVirtual()?a.selectpicker.view.position0:0;if(!(112<=e.which&&e.which<=123))if(!(i=a.$newElement.hasClass(V.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(a.$button.trigger("click.bs.dropdown.data-api"),a.options.liveSearch))a.$searchbox.trigger("focus");else{if(e.which===A&&i&&(e.preventDefault(),a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),p){if(!c.length)return;-1!==(t=(s=a.selectpicker.main.elements[a.activeIndex])?Array.prototype.indexOf.call(s.parentElement.children,s):-1)&&a.defocusItem(s),e.which===B?(-1!==t&&t--,t+f<0&&(t+=c.length),a.selectpicker.view.canHighlight[t+f]||-1===(t=a.selectpicker.view.canHighlight.slice(0,t+f).lastIndexOf(!0)-f)&&(t=c.length-1)):e.which!==R&&!h||(++t+f>=a.selectpicker.view.canHighlight.length&&(t=a.selectpicker.view.firstHighlightIndex),a.selectpicker.view.canHighlight[t+f]||(t=t+1+a.selectpicker.view.canHighlight.slice(t+f+1).indexOf(!0))),e.preventDefault();var m=f+t;e.which===B?0===f&&t===c.length-1?(a.$menuInner[0].scrollTop=a.$menuInner[0].scrollHeight,m=a.selectpicker.current.elements.length-1):d=(o=(n=a.selectpicker.current.data[m]).position-n.height)<u:e.which!==R&&!h||(t===a.selectpicker.view.firstHighlightIndex?(a.$menuInner[0].scrollTop=0,m=a.selectpicker.view.firstHighlightIndex):d=u<(o=(n=a.selectpicker.current.data[m]).position-a.sizeInfo.menuInnerHeight)),s=a.selectpicker.current.elements[m],a.activeIndex=a.selectpicker.current.data[m].index,a.focusItem(s),a.selectpicker.view.currentActive=s,d&&(a.$menuInner[0].scrollTop=o),a.options.liveSearch?a.$searchbox.trigger("focus"):r.trigger("focus")}else if(!r.is("input")&&!q.test(e.which)||e.which===D&&a.selectpicker.keydown.keyHistory){var v,g,b=[];e.preventDefault(),a.selectpicker.keydown.keyHistory+=C[e.which],a.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),a.selectpicker.keydown.resetKeyHistory.cancel=a.selectpicker.keydown.resetKeyHistory.start(),g=a.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(g)&&(g=g.charAt(0));for(var w=0;w<a.selectpicker.current.data.length;w++){var I=a.selectpicker.current.data[w];k(I,g,"startsWith",!0)&&a.selectpicker.view.canHighlight[w]&&b.push(I.index)}if(b.length){var x=0;c.removeClass("active").find("a").removeClass("active"),1===g.length&&(-1===(x=b.indexOf(a.activeIndex))||x===b.length-1?x=0:x++),v=b[x],d=0<u-(n=a.selectpicker.main.data[v]).position?(o=n.position-n.height,!0):(o=n.position-a.sizeInfo.menuInnerHeight,n.position>u+a.sizeInfo.menuInnerHeight),s=a.selectpicker.main.elements[v],a.activeIndex=b[x],a.focusItem(s),s&&s.firstChild.focus(),d&&(a.$menuInner[0].scrollTop=o),r.trigger("focus")}}i&&(e.which===D&&!a.selectpicker.keydown.keyHistory||e.which===L||e.which===H&&a.options.selectOnTab)&&(e.which!==D&&e.preventDefault(),a.options.liveSearch&&e.which===D||(a.$menuInner.find(".active a").trigger("click",!0),r.trigger("focus"),a.options.liveSearch||(e.preventDefault(),P(document).data("spaceSelect",!0))))}},mobile:function(){this.options.mobile=!0,this.$element[0].classList.add("mobile-device")},refresh:function(){var e=P.extend({},this.options,this.$element.data());this.options=e,this.checkDisabled(),this.buildData(),this.setStyle(),this.render(),this.buildList(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+j)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.selectpicker.view.titleOption&&this.selectpicker.view.titleOption.parentNode&&this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),P(window).off(j+"."+this.selectId)}};var J=P.fn.selectpicker;function Q(){if(P.fn.dropdown)return(P.fn.dropdown.Constructor._dataApiKeydownHandler||P.fn.dropdown.Constructor.prototype.keydown).apply(this,arguments)}P.fn.selectpicker=Z,P.fn.selectpicker.Constructor=Y,P.fn.selectpicker.noConflict=function(){return P.fn.selectpicker=J,this},P(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",':not(.bootstrap-select) > [data-toggle="dropdown"]',Q).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",Q).on("keydown"+j,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',Y.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',function(e){e.stopPropagation()}),P(window).on("load"+j+".data-api",function(){P(".selectpicker").each(function(){var e=P(this);Z.call(e,e.data())})})}(e)});
//# sourceMappingURL=bootstrap-select.min.js.map
(function ( $ ) {

    $.fn.stack = function() {
        // Disable in the builder
        if($('body').hasClass('vc_editor')||window.vc_iframe) return false;
        if (typeof elementorFrontend !== 'undefined' && elementorFrontend !== null) {
            if(elementorFrontend.config.environmentMode.edit){
                $('body').removeClass('pix-sections-stack');
                return false;
            }
        }
        this.css( "position", "fixed" );
        if($('.sticky-overlay').length==0){
            $('#content').append('<div class="sticky-overlay"></div>');
        }
        if($('#pix-vertical-nav').length==0){
            $('body').append('<nav id="pix-vertical-nav"><ul></ul></nav>');
        }

        // Init vars
        var elemCount = this.length,
        elems = [],
        currentElem = 0,
        prevHeight = 0,
        ptop = 0,
        ph = $( window ).height(),
        sections_h = 0,
        sections = [],
        active = true,
        start = 0,
        current = 0,
        admin_bar = 0,
        footer_height = 0,
        footer = false;
        if($('#wpadminbar').length>0){
            admin_bar = $('#wpadminbar').outerHeight();
        }
        this.each(function(i) {
            sections_h += $( this ).outerHeight();
            // console.log($( this ).outerHeight());
            $( this ).css( 'z-index' , elemCount * 10);
            var section_name = 'Section '+i;
            if($(this).attr('data-section-name') && $(this).attr('data-section-name')!=''){
                section_name = $(this).attr('data-section-name');
            }
            elems.push( $( this ) );
            var nav = '';

            var bottom = false;
            if($(this).hasClass('site-footer2')){
                // console.log("Footer");
                // console.log(elemCount);
                bottom = true;
                footer_height = $( this ).outerHeight();
                $(this).css({
                    // 'top': 'auto',
                    'bottom': '0',
                });
            }else{
                $( this ).css( 'top' , ptop + 'px');
                nav = '<li><a class="pix-stack-links" id="pix-stack-link-'+i+'" data-top="'+start+'" href="#pix-stack-section-'+i+'" data-number="'+i+'"><span class="pix-dot"></span><span class="pix-label">'+section_name+'</span></a></li>';
            }
            sections.push({
                el: $(this),
                height: $( this ).outerHeight(),
                index: elemCount * 10,
                num: elemCount,
                active: active,
                start: start,
                limit: sections_h,
                bottom: bottom,
                link: 'pix-stack-link-'+i
            });
            elemCount--;
            $(this).attr('data-scroll', start);
            $(this).addClass('pix-slides-section');
            start = sections_h;
            active = false;
            $(this).attr('id', 'pix-stack-section-'+i);
            $('#pix-vertical-nav ul').append(nav);
        });
        $( '#page' ).css( 'height' , sections_h - admin_bar);
        if( sections[sections.length-1].bottom ){
            footer = sections[sections.length-1];
        }
        var s = sections[current];
        $('#'+s.link).addClass('is-selected');

        s.el.addClass('is-sticky-active');
        document.addEventListener('scroll', (e) => {
            let pos = $( window ).scrollTop();
            if(pos>=s.start&&pos<=s.limit){
            }else{
                s = get_current(pos, s);
                setTimeout(fix_sections(pos),0);
                window.pix_animation_display(s.el);
                piximations.init();
            }
            $('.site-content').css('z-index', s.index);
            $('.sticky-overlay').css('z-index', s.index-1);
            var op = (s.height + s.el.position().top) /  ph;
            if(s.num==2){

                op = ( $( window ).scrollTop() + s.height + s.el.position().top - sections_h - admin_bar) /  footer_height;
                // console.log({footer});
                if(footer){
                    window.pix_animation(footer.el, true);
                    piximations.play(footer.el);
                    // window.pix_animation($('.site-footer2'), true);
                }
            }
            if (op<0){op = 0};
            if (op>1){op = 1};
            op = op*0.8;
            if(!s.el.bottom){
                s.el.css('top', - $( window ).scrollTop() + s.start );
            }
            $('.sticky-overlay').css('opacity', op);
        }, {
            passive: true
        });
        // $( window ).scroll(function() {
        //     let pos = $( window ).scrollTop();
        //     if(pos>=s.start&&pos<=s.limit){
        //     }else{
        //         s = get_current(pos, s);
        //         setTimeout(fix_sections(pos),0);
        //         window.pix_animation_display(s.el);
        //         piximations.init();
        //     }
        //     $('.site-content').css('z-index', s.index);
        //     $('.sticky-overlay').css('z-index', s.index-1);
        //     var op = (s.height + s.el.position().top) /  ph;
        //     if(s.num==2){
        //
        //         op = ( $( window ).scrollTop() + s.height + s.el.position().top - sections_h - admin_bar) /  footer_height;
        //         // console.log({footer});
        //         if(footer){
        //             window.pix_animation(footer.el, true);
        //             piximations.play(footer.el);
        //             // window.pix_animation($('.site-footer2'), true);
        //         }
        //     }
        //     if (op<0){op = 0};
        //     if (op>1){op = 1};
        //     op = op*0.8;
        //     if(!s.el.bottom){
        //         s.el.css('top', - $( window ).scrollTop() + s.start );
        //     }
        //     $('.sticky-overlay').css('opacity', op);
        // });
        setTimeout(function(){
            pix_update_heights();
        }, 1000);
        setTimeout(function(){
            pix_update_heights();
        }, 2000);
        window.addEventListener("resize", pix_update_heights);
        function pix_update_heights(){
            var up_section = 0;
            var up_start = 0;
            $.each(sections, function(i) {
                up_section += sections[i].el.outerHeight();
                sections[i].height = sections[i].el.outerHeight();
                sections[i].start = up_start;
                sections[i].limit = up_section;
                up_start = up_section;
                // console.log(sections[i].el.outerHeight());
            });
            $( '#page' ).css( 'height' , up_section - admin_bar );
        }

        function get_current(pos, current){
            var res = current;
            $.each(sections, function(i) {
                if(sections[i].start<=pos&&sections[i].limit>=pos){
                    current.active = false;
                    current.el.removeClass('is-sticky-active');
                    $('.pix-stack-links').removeClass('is-selected');
                    sections[i].active = true;
                    sections[i].el.addClass('is-sticky-active');
                    $('#'+sections[i].link).addClass('is-selected');
                    res = sections[i];
                }
            });
            return res;
        }
        function fix_sections(pos){
            $.each(sections, function(i) {
                if(!sections[i].active && !sections[i].bottom){
                    if(sections[i].limit<=pos){
                        sections[i].el.css('top', -sections[i].height);
                    }else{
                        sections[i].el.css('top', '0');
                    }
                }
            });
        }











        var contentSections = $('.pix-section'),
        navigationItems = $('#pix-vertical-nav a');

        updateNavigation();
        $(window).on('scroll', function(){
            updateNavigation();
        });

        //smooth scroll to the section
        $('#pix-vertical-nav a').on('click', function(event){
            event.preventDefault();
            // console.log($(this.hash));

            // console.log({start});
            // console.log({sections});
            let start = $(this.hash).data('scroll');
            if($(this).data('number')){
                start = sections[$(this).data('number')].start;
            }
            smoothScroll(start);

            // if($(this).data('top')){
            //     smoothScroll($(this.hash));
            // }else{
            //     smoothScroll($(this.hash));
            // }
            return false;
        });
        //smooth scroll to second section
        $('.pix-scroll-down').on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        // //open-close navigation on touch devices
        // $('.touch .pix-nav-trigger').on('click', function(){
        // 	$('.touch #pix-vertical-nav').toggleClass('open');
        //
        // });
        // //close navigation on touch devices when selectin an elemnt from the list
        // $('.touch #pix-vertical-nav a').on('click', function(){
        // 	$('.touch #pix-vertical-nav').removeClass('open');
        // });

        function updateNavigation() {
            contentSections.each(function(){
                $this = $(this);
                var activeSection = $('#pix-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
                if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                    navigationItems.eq(activeSection).addClass('is-selected');
                }else {
                    navigationItems.eq(activeSection).removeClass('is-selected');
                }
            });
        }

        function smoothScroll(start) {
            // var start = target.data('scroll');

            $('body,html').animate(
                // {'scrollTop':target.offset().top},
                {'scrollTop':start+1},
                600
            );
        }



    };



}( jQuery ));

(function ( $ ) {

        window.pix_section_stack = function() {
            if(!$('body').hasClass('vc_editor')){
                $('.pix-scale-in, .pix-scale-in-xs, .pix-scale-in-sm, .pix-scale-in-lg').each(function(){
                    var section = $(this);
                    if(section.hasClass('pix-loaded')) return false;

                    section.addClass('pix-loaded');

                    var top = section.offset().top;
                    var height = section.outerHeight();
                    var bottom = section.offset().top + height;
                    var scale_val = 2;
                    var offset = 600;
                    var translate_val = height / 3;
                    if(section.hasClass('pix-scale-in-xs')) {
                        scale_val = 1.1;
                        if(translate_val>300) translate_val = 300;
                        offset = 200;
                    }
                    if(section.hasClass('pix-scale-in-sm')) {
                        scale_val = 1.2;
                        offset = 200;
                    }
                    if(section.hasClass('pix-scale-in')) {
                        scale_val = 1.6;
                        offset = 400;
                    }
                    section.css({
                        'z-index' : '99999999',
                        'transform-style': 'preserve-3d',
                        // 'transition': 'transform 0.05s ease',
                    });
                    let start = top - offset ;
                    var range = 600;
                    if(height<500) range = height;
                    var rect = this.getBoundingClientRect();
                    var that = this;
                    // console.log(section.offset().top);
                    // console.log("popup.getBoundingClientRect(): " + rect.top);
                    var range_start = $(window).height();
                    var range_end = $(window).height()/2;
                    var range_total = range_start - range_end;

                    if(rect.top <= range_start && rect.top >= range_end){
                        var per = (rect.top - range_end) / range_total;
                        var scale = (scale_val - 1)  * per;
                        scale++;
                        var translate = translate_val  * per;

                        section.css({
                            'transform' : 'scale('+scale+') translateY('+translate+'px)'
                        });
                    }else if (rect.top > range_start) {
                        // Before
                        section.css({
                            'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                        });
                    }else{
                        // After
                        section.css({
                            'transform' : 'scale(1) translateY(0px)'
                        });
                    }
                    document.addEventListener('scroll', (e) => {
                        // console.log(section.offset().top);
                        rect = that.getBoundingClientRect();
                        // console.log("popup.getBoundingClientRect(): " + rect.top);

                        if(rect.top <= range_start && rect.top >= range_end){
                            var per = (rect.top - range_end) / range_total;
                            var scale = (scale_val - 1)  * per;
                            scale++;
                            var translate = translate_val  * per;

                            section.css({
                                'transform' : 'scale('+scale+') translateY('+translate+'px)'
                            });
                        }else if (rect.top > range_start) {
                            // Before
                            section.css({
                                'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                            });
                        }else{
                            // After
                            section.css({
                                'transform' : 'scale(1) translateY(0px)'
                            });
                        }
                    }, {
                        passive: true
                    });
                    // $( window ).scroll(function() {
                    //
                    //     // console.log(section.offset().top);
                    //     rect = that.getBoundingClientRect();
                    //     // console.log("popup.getBoundingClientRect(): " + rect.top);
                    //
                    //     if(rect.top <= range_start && rect.top >= range_end){
                    //         var per = (rect.top - range_end) / range_total;
                    //         var scale = (scale_val - 1)  * per;
                    //         scale++;
                    //         var translate = translate_val  * per;
                    //
                    //         section.css({
                    //             'transform' : 'scale('+scale+') translateY('+translate+'px)'
                    //         });
                    //     }else if (rect.top > range_start) {
                    //         // Before
                    //         section.css({
                    //             'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                    //         });
                    //     }else{
                    //         // After
                    //         section.css({
                    //             'transform' : 'scale(1) translateY(0px)'
                    //         });
                    //     }
                    // });
                });
            }
        };




}( jQuery ));

(function ( $ ) {
    $.fn.pixfooter = function() {
        if(!$('body').hasClass('pix-is-sticky-footer') ){
            return false;
        }
        var bgclass = 'bg-gradient-primary';
        var bgstyle = '';
        if($('.pix-footer-overlay').length==0){
            if( $('.site-footer2:first').data('sticky-bg') ){
                bgclass = $('.site-footer2:first').data('sticky-bg');
                if( bgclass=='custom' ){
                    if($('.site-footer2:first').data('sticky-color')){
                        bgstyle = 'style="background:'+$('.site-footer2:first').data('sticky-color')+';"';
                    }
                }
                bgclass = 'bg-'+bgclass;
            }
            $('#page').append('<div class="pix-footer-overlay '+bgclass+'" '+bgstyle+'></div>');
        }
        var ph = $('#page').outerHeight();
        var fh = $('.pix-sticky-footer').outerHeight();
        $('.pix-footer-sticky-placeholder').height(fh);
        var bp = $('body').css('padding');
        if(bp&&bp!=''&&bp!='0px'){
            $('.pix-sticky-footer, .pix-footer-overlay').css('bottom', bp);
        }

        setTimeout(function(){
            ph = $('#page').height();
            fh = $('.pix-sticky-footer').outerHeight();
            ph = ph - fh;
            $('.pix-footer-sticky-placeholder').height(fh);
        }, 2000);

        $(window).on('resize', function(){
            ph = $('#page').height();
            fh = $('.pix-sticky-footer').outerHeight();
            ph = ph - fh;
            $('.pix-footer-sticky-placeholder').height(fh);
        });
        setTimeout(function(){
            ph = $('#page').height();
            fh = $('.pix-sticky-footer').outerHeight();
            ph = ph - fh;
            $('.pix-footer-sticky-placeholder').height(fh);
        }, 6000);
        setTimeout(function(){
            ph = $('#page').height();
            fh = $('.pix-sticky-footer').outerHeight();
            ph = ph - fh;
            $('.pix-footer-sticky-placeholder').height(fh);
        }, 12000);
        $( '.pix-footer-overlay' ).css( 'height' , fh);
        if($('body').hasClass('pix-sections-stack')){
            $('.pix-footer-overlay').css({
                'z-index': 11
            });
        }
        var s = $('.site-content');
        if($('.site-content').length>0){
            s = $('.pix-portfolio-site-content');
        }
        var f = $('.pix-sticky-footer');

        let pos = $( window ).scrollTop();
        if((pos + $( window ).height()) > ph){
            var op = 1 - (( pos + $( window ).height() - ph ) / fh);
            if (op<0){op = 0};
            if (op>1){op = 1};
            op = op*1.2;
            $('.pix-footer-overlay').css('opacity', op);
        }
        $( window ).scroll(function() {
            let pos = $( window ).scrollTop();
            if((pos + $( window ).height()) > ph){
                $('.pix-sticky-footer').css('opacity', 1);
                var op = 1 - (( pos + $( window ).height() - ph ) / fh);
                if (op<0){op = 0};
                op = op*1.2;
                if (op>1){op = 1};
                $('.pix-footer-overlay').css('opacity', op);
            }else{
                $('.pix-footer-overlay, .pix-sticky-footer').css('opacity', 0);
            }

        });

    };
}( jQuery ));

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


!function(t,e){"use strict";"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):e(t.jQuery)}(this,function(t){"use strict";var e=function(s,i){this.$element=t(s),this.options=t.extend({},e.defaults,i),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.select=this.options.select||this.select,this.autoSelect="boolean"!=typeof this.options.autoSelect||this.options.autoSelect,this.highlighter=this.options.highlighter||this.highlighter,this.render=this.options.render||this.render,this.updater=this.options.updater||this.updater,this.displayText=this.options.displayText||this.displayText,this.itemLink=this.options.itemLink||this.itemLink,this.itemTitle=this.options.itemTitle||this.itemTitle,this.followLinkOnSelect=this.options.followLinkOnSelect||this.followLinkOnSelect,this.source=this.options.source,this.delay=this.options.delay,this.theme=this.options.theme&&this.options.themes&&this.options.themes[this.options.theme]||e.defaults.themes[e.defaults.theme],this.$menu=t(this.options.menu||this.theme.menu),this.$appendTo=this.options.appendTo?t(this.options.appendTo):null,this.fitToElement="boolean"==typeof this.options.fitToElement&&this.options.fitToElement,this.shown=!1,this.listen(),this.showHintOnFocus=("boolean"==typeof this.options.showHintOnFocus||"all"===this.options.showHintOnFocus)&&this.options.showHintOnFocus,this.afterSelect=this.options.afterSelect,this.afterEmptySelect=this.options.afterEmptySelect,this.addItem=!1,this.value=this.$element.val()||this.$element.text(),this.keyPressed=!1,this.focused=this.$element.is(":focus"),this.changeInputOnSelect=this.options.changeInputOnSelect||this.changeInputOnSelect,this.changeInputOnMove=this.options.changeInputOnMove||this.changeInputOnMove,this.openLinkInNewTab=this.options.openLinkInNewTab||this.openLinkInNewTab,this.selectOnBlur=this.options.selectOnBlur||this.selectOnBlur,this.showCategoryHeader=this.options.showCategoryHeader||this.showCategoryHeader};e.prototype={constructor:e,setDefault:function(t){if(this.$element.data("active",t),this.autoSelect||t){var e=this.updater(t);e||(e=""),this.$element.val(this.displayText(e)||e).text(this.displayText(e)||e).change(),this.afterSelect(e)}return this.hide()},select:function(){var t=this.$menu.find(".active").data("value");if(this.$element.data("active",t),this.autoSelect||t){var e=this.updater(t);e||(e=""),this.changeInputOnSelect&&this.$element.val(this.displayText(e)||e).text(this.displayText(e)||e).change(),this.followLinkOnSelect&&this.itemLink(t)?(this.openLinkInNewTab?window.open(this.itemLink(t),"_blank"):document.location=this.itemLink(t),this.afterSelect(e)):this.followLinkOnSelect&&!this.itemLink(t)?this.afterEmptySelect(e):this.afterSelect(e)}else this.afterEmptySelect();return this.hide()},updater:function(t){return t},setSource:function(t){this.source=t},show:function(){var e,s=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),i="function"==typeof this.options.scrollHeight?this.options.scrollHeight.call():this.options.scrollHeight;if(this.shown?e=this.$menu:this.$appendTo?(e=this.$menu.appendTo(this.$appendTo),this.hasSameParent=this.$appendTo.is(this.$element.parent())):(e=this.$menu.insertAfter(this.$element),this.hasSameParent=!0),!this.hasSameParent){e.css("position","fixed");var o=this.$element.offset();s.top=o.top,s.left=o.left}var n=t(e).parent().hasClass("dropup")?"auto":s.top+s.height+i,h=t(e).hasClass("dropdown-menu-right")?"auto":s.left;return e.css({top:n,left:h}).show(),!0===this.options.fitToElement&&e.css("width",this.$element.outerWidth()+"px"),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(e){if(this.query=null!=e?e:this.$element.val(),this.query.length<this.options.minLength&&!this.options.showHintOnFocus)return this.shown?this.hide():this;var s=t.proxy(function(){t.isFunction(this.source)&&3===this.source.length?this.source(this.query,t.proxy(this.process,this),t.proxy(this.process,this)):t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source&&this.process(this.source)},this);clearTimeout(this.lookupWorker),this.lookupWorker=setTimeout(s,this.delay)},process:function(e){var s=this;return e=t.grep(e,function(t){return s.matcher(t)}),(e=this.sorter(e)).length||this.options.addItem?(e.length>0?this.$element.data("active",e[0]):this.$element.data("active",null),"all"!=this.options.items&&(e=e.slice(0,this.options.items)),this.options.addItem&&e.push(this.options.addItem),this.render(e).show()):this.shown?this.hide():this},matcher:function(t){return~this.displayText(t).toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,s=[],i=[],o=[];e=t.shift();){var n=this.displayText(e);n.toLowerCase().indexOf(this.query.toLowerCase())?~n.indexOf(this.query)?i.push(e):o.push(e):s.push(e)}return s.concat(i,o)},highlighter:function(t){var e=this.query;if(""===e)return t;var s,i=t.match(/(>)([^<]*)(<)/g),o=[],n=[];if(i&&i.length)for(s=0;s<i.length;++s)i[s].length>2&&o.push(i[s]);else(o=[]).push(t);e=e.replace(/[\(\)\/\.\*\+\?\[\]]/g,function(t){return"\\"+t});var h,a=new RegExp(e,"g");for(s=0;s<o.length;++s)(h=o[s].match(a))&&h.length>0&&n.push(o[s]);for(s=0;s<n.length;++s)t=t.replace(n[s],n[s].replace(a,"<strong>$&</strong>"));return t},render:function(e){var s=this,i=this,o=!1,n=[],h=s.options.separator;return t.each(e,function(t,s){t>0&&s[h]!==e[t-1][h]&&n.push({__type:"divider"}),this.showCategoryHeader&&(!s[h]||0!==t&&s[h]===e[t-1][h]||n.push({__type:"category",name:s[h]})),n.push(s)}),e=t(n).map(function(e,n){if("category"==(n.__type||!1))return t(s.options.headerHtml||s.theme.headerHtml).text(n.name)[0];if("divider"==(n.__type||!1))return t(s.options.headerDivider||s.theme.headerDivider)[0];var h=i.displayText(n);return(e=t(s.options.item||s.theme.item).data("value",n)).find(s.options.itemContentSelector||s.theme.itemContentSelector).addBack(s.options.itemContentSelector||s.theme.itemContentSelector).html(s.highlighter(h,n)),s.options.followLinkOnSelect&&e.find("a").attr("href",i.itemLink(n)),e.find("a").attr("title",i.itemTitle(n)),h==i.$element.val()&&(e.addClass("active"),i.$element.data("active",n),o=!0),e[0]}),this.autoSelect&&!o&&(e.filter(":not(.dropdown-header)").first().addClass("active"),this.$element.data("active",e.first().data("value"))),this.$menu.html(e),this},displayText:function(t){return void 0!==t&&void 0!==t.name?t.name:t},itemLink:function(t){return null},itemTitle:function(t){return null},next:function(e){var s=this.$menu.find(".active").removeClass("active").next();for(s.length||(s=t(this.$menu.find(t(this.options.item||this.theme.item).prop("tagName"))[0]));s.hasClass("divider")||s.hasClass("dropdown-header");)s=s.next();s.addClass("active");var i=this.updater(s.data("value"));this.changeInputOnMove&&this.$element.val(this.displayText(i)||i)},prev:function(e){var s=this.$menu.find(".active").removeClass("active").prev();for(s.length||(s=this.$menu.find(t(this.options.item||this.theme.item).prop("tagName")).last());s.hasClass("divider")||s.hasClass("dropdown-header");)s=s.prev();s.addClass("active");var i=this.updater(s.data("value"));this.changeInputOnMove&&this.$element.val(this.displayText(i)||i)},listen:function(){this.$element.on("focus.bootstrap3Typeahead",t.proxy(this.focus,this)).on("blur.bootstrap3Typeahead",t.proxy(this.blur,this)).on("keypress.bootstrap3Typeahead",t.proxy(this.keypress,this)).on("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead",t.proxy(this.input,this)).on("keyup.bootstrap3Typeahead",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown.bootstrap3Typeahead",t.proxy(this.keydown,this));var e=t(this.options.item||this.theme.item).prop("tagName");"ontouchstart"in document.documentElement?this.$menu.on("touchstart",e,t.proxy(this.touchstart,this)).on("touchend",e,t.proxy(this.click,this)):this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter",e,t.proxy(this.mouseenter,this)).on("mouseleave",e,t.proxy(this.mouseleave,this)).on("mousedown",t.proxy(this.mousedown,this))},destroy:function(){this.$element.data("typeahead",null),this.$element.data("active",null),this.$element.unbind("focus.bootstrap3Typeahead").unbind("blur.bootstrap3Typeahead").unbind("keypress.bootstrap3Typeahead").unbind("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead").unbind("keyup.bootstrap3Typeahead"),this.eventSupported("keydown")&&this.$element.unbind("keydown.bootstrap3-typeahead"),this.$menu.remove(),this.destroyed=!0},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown)switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:if(t.shiftKey)return;t.preventDefault(),this.prev();break;case 40:if(t.shiftKey)return;t.preventDefault(),this.next()}},keydown:function(e){17!==e.keyCode&&(this.keyPressed=!0,this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.shown||40!=e.keyCode?this.move(e):this.lookup())},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},input:function(t){var e=this.$element.val()||this.$element.text();this.value!==e&&(this.value=e,this.lookup())},keyup:function(t){if(!this.destroyed)switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:if(!this.shown||this.showHintOnFocus&&!this.keyPressed)return;this.select();break;case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide()}},focus:function(t){this.focused||(this.focused=!0,this.keyPressed=!1,this.options.showHintOnFocus&&!0!==this.skipShowHintOnFocus&&("all"===this.options.showHintOnFocus?this.lookup(""):this.lookup())),this.skipShowHintOnFocus&&(this.skipShowHintOnFocus=!1)},blur:function(t){this.mousedover||this.mouseddown||!this.shown?this.mouseddown&&(this.skipShowHintOnFocus=!0,this.$element.focus(),this.mouseddown=!1):(this.selectOnBlur&&this.select(),this.hide(),this.focused=!1,this.keyPressed=!1)},click:function(t){t.preventDefault(),this.skipShowHintOnFocus=!0,this.select(),this.$element.focus(),this.hide()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(t){this.mousedover=!1,!this.focused&&this.shown&&this.hide()},mousedown:function(t){this.mouseddown=!0,this.$menu.one("mouseup",function(t){this.mouseddown=!1}.bind(this))},touchstart:function(e){e.preventDefault(),this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},touchend:function(t){t.preventDefault(),this.select(),this.$element.focus()}};var s=t.fn.typeahead;t.fn.typeahead=function(s){var i=arguments;return"string"==typeof s&&"getActive"==s?this.data("active"):this.each(function(){var o=t(this),n=o.data("typeahead"),h="object"==typeof s&&s;n||o.data("typeahead",n=new e(this,h)),"string"==typeof s&&n[s]&&(i.length>1?n[s].apply(n,Array.prototype.slice.call(i,1)):n[s]())})},e.defaults={source:[],items:8,minLength:1,scrollHeight:0,autoSelect:!0,afterSelect:t.noop,afterEmptySelect:t.noop,addItem:!1,followLinkOnSelect:!1,delay:0,separator:"category",changeInputOnSelect:!0,changeInputOnMove:!0,openLinkInNewTab:!1,selectOnBlur:!0,showCategoryHeader:!0,theme:"bootstrap3",themes:{bootstrap3:{menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',itemContentSelector:"a",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'},bootstrap4:{menu:'<div class="typeahead dropdown-menu" role="listbox"></div>',item:'<button class="dropdown-item" role="option"></button>',itemContentSelector:".dropdown-item",headerHtml:'<h6 class="dropdown-header"></h6>',headerDivider:'<div class="dropdown-divider"></div>'}}},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=s,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var s=t(this);s.data("typeahead")||s.typeahead(s.data())})});

(function($){
    "use strict";

    jQuery.cachedScript = function( url, options ) {
        options = $.extend( options || {}, {
            dataType: "script",
            cache: true,
            url: url
        });
        return jQuery.ajax( options );
    };
    let mapsScriptsStarted = false;
    let mapsScriptsLoaded = false;
    function pixDynamicMaps(){
        if(pixfort_main_object.hasOwnProperty('googleMapsUrl')){
            // console.log(pixfort_main_object.googleMapsUrl);
            mapsScriptsStarted = true;
            $.cachedScript(pixfort_main_object.googleMapsUrl)
            .done(function( script, textStatus ) {
                // self.libLoaded = true;
                // console.log(pixfort_main_object.googleMapsUrl);
                // console.log(textStatus);
                mapsScriptsLoaded = true;
                if(pixfort_main_object.hasOwnProperty('googleMapsScript')){
                    $.cachedScript(pixfort_main_object.googleMapsScript)
                    .done(function( script, textStatus ) {
                        // self.libLoaded = true;
                        // console.log(pixfort_main_object.googleMapsScript);
                        // console.log(textStatus);
                        init_pix_maps();
                        mapsScriptsStarted = false;
                    })
                    .fail(function( jqxhr, settings, exception ) {
                        console.log("Script was not loaded!");
                    });
                }
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log("Library was not loaded!");
            });
        }
    }
    window.pixLoadMaps = function(){
        if($('.pix-google-map').length>0){
            if(mapsScriptsLoaded){
                init_pix_maps();
            }else{
                if(!mapsScriptsStarted){
                    pixDynamicMaps();
                }

            }

        }
    }

})(jQuery);

(function($){
    "use strict";
    let lightboxScriptsStarted = false;
    let lightboxScriptsLoaded = false;
    function pixDynamicLightbox(){
        if(pixfort_main_object.hasOwnProperty('lightboxUrl')){
            lightboxScriptsStarted = true;
            $.cachedScript(pixfort_main_object.lightboxUrl)
            .done(function( script, textStatus ) {
                lightboxScriptsLoaded = true;
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log("Lightbox Library was not loaded!");
            });
        }
    }
    jQuery(document).ready(function($) {
        pixLoadLightbox();
    });

    window.pixLoadLightbox = function(){
        if($('.pix-lightbox').length>0){
            if(!lightboxScriptsLoaded){
                console.log("Lightbox Ready to load");
                if(!lightboxScriptsStarted){
                    console.log("Loading...");
                    pixDynamicLightbox();
                }
            }
        }
    }

})(jQuery);

(function($){
    "use strict";
    let isotopeScriptsStarted = false;
    let isotopeScriptsLoaded = false;
    function pixDynamicIsotope(cb=false){
        if(pixfort_main_object.hasOwnProperty('isotopeUrl')){
            isotopeScriptsStarted = true;
            $.cachedScript(pixfort_main_object.isotopeUrl)
            .done(function( script, textStatus ) {
                isotopeScriptsLoaded = true;
                if(cb){
                    setTimeout(cb, 0);
                }
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log("Isotope Library was not loaded!");
            });
        }
    }

    window.pixLoadIsotope = function(cb=false){
        if(!isotopeScriptsLoaded){
            console.log("Loading Isotope...");
            pixDynamicIsotope(cb);
        }else{
            setTimeout(cb, 0);
        }
    }

})(jQuery);

(function($){
    "use strict";

    NProgress.configure({
        minimum: 0.01,
        speed: 800,
        trickleSpeed: 800,
        showSpinner: true,
        parent: 'body',
        template: '<div class="bar" role="bar"><div class="peg"></div></div>'
    });
    if($('.pix-post-area').length==0){
        NProgress.start();
    }

    jQuery(document).ready(function($) {
        // Page transition
        var last_clicked;
        $(window).on('click', function (e) {
            last_clicked = e.target;
            return true;
        });
        $(window).on('beforeunload', function (e) {
            var e = e || window.event;
            let showTransition = true;
            if(last_clicked){
                if(last_clicked.href && last_clicked.href!= 'undefined'){
                    if(last_clicked.href.startsWith('tel')||last_clicked.href.startsWith('mailto')){
                        showTransition = false;
                    }
                }else{
                    let plink = $(last_clicked).closest('a');
                    if(plink && plink.href != undefined){
                        if(plink.href.startsWith('tel')||plink.href.startsWith('mailto')){
                            showTransition = false;
                        }
                    }
                }
            }
            if(showTransition){
                document.body.classList.remove('render');
            }else{
                document.body.classList.add('render');
            }
        });

        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

        setTimeout(() => document.body.classList.add('render'), 0);
        setTimeout(() => document.body.classList.add('pix-body-loaded'), 0);

        function pixfort_popup(link){
            $.alert({
                title: '',
                columnClass: '',
                backgroundDismiss: true,
                buttons: false,
                theme: 'pix-main-popup',
                content: '<div></div>',
                onOpenBefore: function () {
                    var self = this;
                    self.setColumnClass('col-2 pix-popup-edit');
                    self.showLoading(true);
                },
                onContentReady: function () {
                    var self = this;
                    return $.ajax({
                        url: link,
                        method: 'get'
                    }).done(function (response) {
                        var data = false;
                        try {
                            data =  JSON.parse(response);
                        } catch (e) {
                            return false;
                        }
                        if(data){
                            if(data.html){
                                let size = data.size + ' pix-popup-edit pix-popup-ready';
                                self.setColumnClass(size);
                                self.setContentAppend( '<div class="pix-popup-content-div">' + data.html + '</div>');
                                self.hideLoading(true);
                                setTimeout(function(){
                                    self.$body.addClass('pix-popup-animate');
                                    $('.pix-intro-img img').addClass('animated');
                                    $('body').trigger('pix_popup_open');
                                    pix_animation(self.$body, true);
                                    piximations.init();
                                    pix_init_c7();
                                    pixLoadImgs();
                                    // init_pix_maps();
                                    pixLoadMaps();
                                    pix_countdown();
                                    if(self.$body.find('[data-toggle="tooltip"]').length){
                                        self.$body.find('[data-toggle="tooltip"]').tooltip();
                                    }
                                    if($('[data-toggle="tooltip"]').length){
                                        $('[data-toggle="tooltip"]').tooltip();
                                    }

                                }, 200);
                                setTimeout(function(){
                                    self.$body.find('.elementor-invisible').removeClass('elementor-invisible');
                                    if (typeof elementorFrontend !== 'undefined' && elementorFrontend !== null) {
                                        if(elementorFrontend){
                                            elementorFrontend.hooks.addAction( 'init', function() {
                                                pix_animation(false, true);
                                            } );
                                            self.$body.find(".elementor-element").each(function() {
                                				elementorFrontend.elementsHandler.runReadyTrigger( jQuery( this ) );
                                			});
                                            // fix elementor init conflict
                                            // elementorFrontend.init();
                                            pix_animation(false, true);
                                            pix_animation(self.$body, true);
                                        }
                                    }
                                    if (typeof self.$body.find('.quform-form').quform == 'function') {
                                        self.$body.find('.quform-form').quform();
                                        if (self.$body.find('.quform-recaptcha').length && window.QuformRecaptchaLoaded) {
                                            window.QuformRecaptchaLoaded();
                                        }
                                    }

                                }, 300);
                                setTimeout(function(){
                                    pix_animation_display(self.$body);
                                }, 1000);
                                self.$body.find( 'div.wpcf7 > form' ).each( function() {
                                    var $form = $( this );
                                    wpcf7.initForm( $form );
                                    if ( wpcf7.cached ) {
                                        wpcf7.refill( $form );
                                    }
                                });
                            }
                        }
                    }).fail(function(){
                        self.setContent('Something went wrong, please try again.');
                    });
                }
            });
        }

        if(pixfort_main_object.hasOwnProperty('dataBodyBg')){
            $('body').css({'background-color': pixfort_main_object.dataBodyBg});
        }
        if(pixfort_main_object.hasOwnProperty('dataExitPopup')){
            setTimeout(function(){
                var link = pixfort_main_object.dataExitPopup;
                var checkLink = pixfort_main_object.dataPopupCheckLink;
                var exit_opened = false;
                if(checkLink){
                    checkLink += '&exitpopup=true';
                    $.ajax({
                        url: checkLink,
                        method: 'get'
                    }).done(function (response) {
                        try {
                            var data =  JSON.parse(response);
                            if(data&&data.result){
                                if(link&&link!=''){
                                    addEvent(document, "mouseout", function(e) {
                                        if(!exit_opened){
                                            e = e ? e : window.event;
                                            var from = e.relatedTarget || e.toElement;
                                            if (!from || from.nodeName == "HTML") {
                                                exit_opened = true;
                                                pixfort_popup(link);
                                            }
                                        }
                                    });
                                }
                            }
                        } catch (e) {
                            return false;
                        }
                    });
                }
            },0);
        }



        // if($('body').hasClass('pix-auto-popup')){
        if(pixfort_main_object.hasOwnProperty('dataAutoPopup')){
            setTimeout(function(){
                // var link = $('body').data('auto-popup');
                var link = pixfort_main_object.dataAutoPopup;
                // var checkLink = $('body').data('popup-check');
                var checkLink = pixfort_main_object.dataPopupCheckLink;
                var time = 1000;
                if(pixfort_main_object.hasOwnProperty('dataAutoPopupTime')){
                    time = pixfort_main_object.dataAutoPopupTime;
                }
                if(time && !isNaN(time)){
                    time = time * 1000;
                }else{
                    time = 5000;
                }
                if(checkLink){
                    checkLink += '&autopopup=true';
                    $.ajax({
                        url: checkLink,
                        method: 'get'
                    }).done(function (response) {
                        try {
                            var data =  JSON.parse(response);
                            if(data&&data.result){
                                if(link&&link!=''){
                                    setTimeout(function(){
                                        pixfort_popup(link);
                                    }, time);
                                }
                            }
                        } catch (e) {
                            return false;
                        }
                    });
                }
            },0);
        }
        if($('.pix-cookie-banner').length){
            setTimeout(function(){
                if(pixfort_main_object.hasOwnProperty('datacookiesId')){
                    let currentCookies = localStorage.getItem("pix_cookiesbanner");
                    if(currentCookies && currentCookies == pixfort_main_object.datacookiesId){
                        $('.pix-cookie-banner').addClass('pix-closed');
                        setTimeout(function(){
                            $('.pix-cookie-banner').remove();
                        }, 2500);
                    }
                }else{
                    var checkLink = pixfort_main_object.dataPopupCheckLink;
                    if(checkLink){
                        checkLink += '&cookiesbanner=true';
                        // $('.pix-cookie-banner').addClass('pix-closed');
                        $.ajax({
                            url: checkLink,
                            method: 'get'
                        }).done(function (response) {
                            try {
                                var data = JSON.parse(response);
                                if(data){
                                    if(data.result===false){
                                        setTimeout(function(){
                                            $('.pix-cookie-banner').addClass('pix-closed');
                                        }, 2000);
                                        setTimeout(function(){
                                            $('.pix-cookie-banner').remove();
                                        }, 2500);
                                    }else{
                                        // $('.pix-cookie-banner').removeClass('pix-closed');
                                    }
                                }
                            } catch (e) {
                                return false;
                            }
                        });
                    }
                }

            },0);
        }


        // woocommerce product preview popup
        $('.pix-product-preview').on('click', function(e){
            e.preventDefault();
            var link = $(this).data('preview-link');
            $.alert({
                title: '',
                columnClass: 'col-12 col-sm-10',
                backgroundDismiss: true,
                theme: 'pix-product-popup',
                closeIcon: true,
                content: '<div></div>',
                onOpenBefore: function () {
                    var self = this;
                    self.showLoading(true);
                },
                onContentReady: function () {
                    var self = this;
                    return $.ajax({
                        url: link,
                        method: 'get'
                    }).done(function (response) {
                        self.setContentAppend( '<div class="pix-popup-content-div">' + response + '</div>');
                        self.hideLoading(true);
                        setTimeout(function(){
                            self.$body.addClass('pix-popup-animate');
                        }, 300);
                    }).fail(function(){
                        self.setContent('Something went wrong, please try again.');
                    });
                }
            });
        });
        $('body').on( 'click', '.flickity-slider, .flickity-button', function(e){
            pix_animation_display();
        });
        $('body').on( 'click', '.pix-popup-link', function(e){
            e.preventDefault();
            if($(this).data('popup-link')&&$(this).data('popup-link')!=''){
                var link = $(this).data('popup-link');
                pixfort_popup(link);
            }
            return false;
        });





        $('body').on( 'click', '.pix-story-popup', function(e){
            e.preventDefault();
            var stories = $(this).data('stories');
            if(stories&&stories!=''){
                var aspect = 'embed-responsive-21by9';

                var html = '';
                html += '<div class="firas2 pix-popup-content-div"><div class="pix-story-slider bg-black pix-slider-story no-dots2">';
                $.each(stories, function(i, el){
                    html += '<div class="carousel-cell p-0">';
                    html += '<img class="jarallax-img pix-fit-cover w-100 pix-opacity-8" src="'+el+'" />';
                    html += '</div>';
                });
                html += '</div>';
                html += '</div>';
                $.alert({
                    title: '',
                    columnClass: 'col-12 col-sm-6',
                    backgroundDismiss: true,
                    buttons: false,
                    theme: 'pix-video-popup',
                    content: html,
                    onOpenBefore: function () {
                        this.showLoading(true);
                    },
                    onContentReady: function(){
                        let self = this;
                        $('.pix-story-slider').flickity({
                            draggable: true,
                            adaptiveHeight: true,
                            wrapAround: true,
                            autoPlay: 3500,
                            prevNextButtons: false,
                            imagesLoaded: true,
                            contain: true,
                            resize: true,
                            ready: function(){
                                $('.pix-story-slider').flickity('resize');
                            },
                            on: {
                                ready: function() {

                                    $(this).closest('.pix-story-slider').show();
                                    $(this).closest('.pix-story-slider').removeClass('d-in');
                                    $(this).removeClass('d-in');
                                    setTimeout(function(){
                                        self.$body.addClass('pix-popup-animate');
                                    }, 400);
                                    setTimeout(function(){
                                        self.hideLoading(true);
                                    }, 600);
                                }
                            }
                        });

                    }
                });
            }
            return false;
        });
        $('body').on( 'click', '.pix-video-popup', function(e){
            e.preventDefault();
            if($(this).data('content')&&$(this).data('content')!=''){
                var content = $(this).data('content');
                var aspect = 'embed-responsive-21by9';
                if($(this).data('aspect')&&$(this).data('aspect')!=''){
                    aspect = $(this).data('aspect');
                }
                var html = '';
                html += '<div class="pix-video video-active">';
                html += '<div class="embed-responsive '+aspect+'">';
                html += content;
                html += '</div>';
                html += '</div>';
                $.alert({
                    title: '',
                    columnClass: 'col-12',
                    backgroundDismiss: true,
                    buttons: false,
                    theme: 'pix-video-popup',
                    content: html,
                    onContentReady: function(){
                        this.$content.find('iframe').each(function(i, elem){
                            let src = $(elem).data('src');
                            // elem.src = "";
                            $(elem).attr('src', src).click();
                            setTimeout(function(){
                                $(elem).click();
                            }, 1000);
                        });
                    }
                });
            }
            return false;
        });

        $('body').on( 'click', '.pix-audio-popup', function(e){
            e.preventDefault();
            if($(this).data('content')&&$(this).data('content')!=''){
                var content = $(this).data('content');
                var aspect = 'embed-responsive-21by9';
                if($(this).data('aspect')&&$(this).data('aspect')!=''){
                    aspect = $(this).data('aspect');
                }
                var html = '';
                html += content;
                $.alert({
                    title: '',
                    columnClass: 'col-12',
                    backgroundDismiss: true,
                    buttons: false,
                    theme: 'pix-audio-popup',
                    content: html,
                    onContentReady: function(){
                        this.$content.find('iframe').each(function(i, elem){
                            let src = $(elem).data('src');
                            $(elem).attr('src', src).click();
                            setTimeout(function(){
                                $(elem).click();
                            }, 1000);
                        });

                    }
                });
            }
            return false;
        });


        // header optimisation
        let pixfort_one,
            pixfort_top,
            pixfort_main,
            pixfort_stack,
            pixfort_m_top,
            pixfort_m_main,
            pixfort_m_stack = false;
        if( $('.pix-header-transparent-parent').length ){
            pixfort_one = $('.pix-header-transparent-parent');
        }else if( $('.pix-header-boxed').length ){
            pixfort_one = $('.pix-header-boxed');
        }else{
            if( $('.pix-topbar.pix-header-desktop').length ){
                pixfort_top = $('.pix-topbar.pix-header-desktop');
            }
            if( $('.pix-header.pix-header-desktop').length ){
                pixfort_main = $('.pix-header.pix-header-desktop');
            }
            if( $('.pix-header-stack.pix-header-desktop').length ){
                pixfort_stack = $('.pix-header-stack.pix-header-desktop');
            }
        }
        if( $('.pix-topbar.pix-header-mobile').length ){
            pixfort_m_top = $('.pix-topbar.pix-header-mobile');
        }
        if( $('.pix-header.pix-header-mobile').length ){
            pixfort_m_main = $('.pix-header.pix-header-mobile');
        }
        if( $('.pix-stack-mobile').length ){
            pixfort_m_stack = $('.pix-stack-mobile');
        }
        let header_mode = 'desktop';
        if( $(window).width() >= 992 ){
            if(pixfort_m_top) pixfort_m_top.remove();
            if(pixfort_m_main) pixfort_m_main.remove();
            if(pixfort_m_stack) pixfort_m_stack.remove();
        }else{
            header_mode = 'mobile';
            if(pixfort_one) pixfort_one.remove();
            if(pixfort_top) pixfort_top.remove();
            if(pixfort_main) pixfort_main.remove();
            if(pixfort_stack) pixfort_stack.remove();
        }
        $(window).resize(function(){
            if( $(window).width() >= 992 ){
                if(header_mode==='mobile'){
                    header_mode = 'desktop';
                    if(pixfort_m_top) pixfort_m_top.remove();
                    if(pixfort_m_main) pixfort_m_main.remove();
                    if(pixfort_m_stack) pixfort_m_stack.remove();

                    if(pixfort_one) $('#page').prepend(pixfort_one);
                    if(pixfort_stack) $('#page').prepend(pixfort_stack);
                    if(pixfort_main) $('#page').prepend(pixfort_main);
                    if(pixfort_top) $('#page').prepend(pixfort_top);
                    pix_animation(false, true);
                }
            }else{
                if(header_mode==='desktop'){
                    header_mode = 'mobile';
                    if(pixfort_one) pixfort_one.remove();
                    if(pixfort_top) pixfort_top.remove();
                    if(pixfort_main) pixfort_main.remove();
                    if(pixfort_stack) pixfort_stack.remove();

                    if(pixfort_m_stack)  $('#page').prepend(pixfort_m_stack);
                    if(pixfort_m_main)  $('#page').prepend(pixfort_m_main);
                    if(pixfort_m_top)  $('#page').prepend(pixfort_m_top);
                    pix_animation(false, true);
                }
            }
        });



        // Misc actions
        $('body').on( 'click', '.hamburger.small-menu-toggle', function(e){
            if($(this).attr('aria-expanded')==='true'){
                $(this).removeClass('is-active');
            }else{
                $(this).addClass('is-active');
            }
        });
        $('body').on( 'click', '.hamburger.normal-menu-toggle', function(e){
            e.preventDefault();
            // $(this).closest('.navbar-nav').find('li').removeClass('d-md-flex');
            if($(this).hasClass('is-active')){
                $(this).removeClass('is-active');
                // $(this).closest('.navbar-nav').find('li').addClass('is-shown').hide(300);
                $(this).closest('.navbar-nav').find('li').removeClass('is-shown');
            }else{
                $(this).addClass('is-active');
                // $(this).closest('.navbar-nav').find('li').show(300);
                $(this).closest('.navbar-nav').find('li').addClass('is-shown');
            }
        });
        $('body').on( 'click', '.pix-tabs-btn', function(e){
            var el = $(this).closest('.pix_tabs_container');
            let $sliders = el.find('.pix-main-slider');
            $sliders.each(function(i, elem){
                $(elem).addClass('pix-tabs-slider');
                $(elem).removeClass('pix-slider-loaded');
            });
            setTimeout(function(){
                init_fancy_mockup(el);
                pix_main_slider(el);

            }, 500);
        });

        // Remove paragraph padding
        $('p:empty').remove();
        // elementor fix
        $('.animate-in, .pix-main-slider, .pix-fancy-mockup, .feature_img').closest('.elementor-invisible').removeClass('elementor-invisible');
        $('.particles-wrapper2').closest('.vc_column_container').css('z-index', '3');

        $('.entry-content2 > section, .elementor-section-wrap > section').each(function(i, elem){
            if(!$(elem).find('.sticky-top').length){
                if(
                    $(elem).find('.pix-slider').length
                    || $(elem).find('.pix-scale-in-sm').length
                    || $(elem).find('.pix-scale-in').length
                    || $(elem).find('.pix-scale-in-lg').length
                ){
                    $(elem).removeClass('vc_section_visible vc_row_visible').addClass('overflow-hidden');
                }
            }
        });
        $('.dropdown-item.dropdown-toggle').on("click", function(e){

            $(this).closest('.menu-item.dropdown.nav-item').find('> .dropdown-menu').toggleClass('show');
            e.stopPropagation();
            e.preventDefault();
        });



        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if(isSafari){
            $('body').addClass('pix-is-safari');
            // if( $('body').find('.sticky-top').length ){
            //     // $('body').addClass('overflow-hidden');
            // }
            $('.pix-slider-full').closest('section:not(.overflow-visible)').removeClass('vc_section_visible').addClass('overflow-hidden');
            $('.pix-slider-full').closest('.vc_row:not(.overflow-visible)').removeClass('vc_row_visible').addClass('overflow-hidden');
            $('.pix-scene').each(function(i, el){
                $(el).closest('section:not(.overflow-visible)').removeClass('vc_section_visible').addClass('overflow-hidden');
            });
        }

        // Make sure to search suggestions
        $('.pix-small-search').closest('.vc_row').css({"z-index": 50});
        $('.pix_element_overlay').each(function(i, el){
            $(el).css({
                'border-radius': $(el).parent().css('border-radius')
            });
        });
        setTimeout(function(){
            $('.bg-video').each(function(i, elem){
                $(elem).controls = false;
                elem.controls = false;
            });
        }, 1000);

        if($('.pix-post-area').length>0){
            NProgress.configure({
                minimum: 0.0001,
                trickleRate: 0.02,
                easing: false,
                trickleSpeed: 800,
                showSpinner: false,
                parent: 'body',
                template: '<div class="bar" role="bar"><div class="peg"></div></div>'
            });
        }

        if($('.pix-post-area').length>0){
            var entry_top = $('#pix-entry-content').offset().top;
            var entry_height = $('#pix-entry-content').height();
        }

        var mainFooter = false;
        if( $('.site-footer2:not(.pix-sticky-footer)').length ){
            mainFooter = $('.site-footer2:not(.pix-sticky-footer)')[0];
        }
        var windowHeight = $(window).height();

        document.addEventListener('scroll', (e) => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                $('.back_to_top').addClass('active');
            } else {
                $('.back_to_top').removeClass('active');
            }
            if($('.pix-post-area').length>0){
                if(document.documentElement.scrollTop>entry_top){
                    let prog = 0.0;
                    if(document.documentElement.scrollTop>(entry_top+entry_height)){
                        prog = 0.999;
                        NProgress.set(prog);
                    }else{
                        prog = (document.documentElement.scrollTop - entry_top)/entry_height;
                        NProgress.set(prog);
                    }
                }else{
                    NProgress.set(0.001);
                }
            }

            if (mainFooter) {
                var footerRect = mainFooter.getBoundingClientRect();
                if( footerRect.top < windowHeight ){
                    pix_animation_display( $('.site-footer2:not(.pix-sticky-footer)') );
                    // pix_animation( $('.site-footer2:not(.pix-sticky-footer)'), true);
                }
            }
        }, {
          passive: true
      });

        // window.onscroll = function() {
        //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //         $('.back_to_top').addClass('active');
        //     } else {
        //         $('.back_to_top').removeClass('active');
        //     }
        //     if($('.pix-post-area').length>0){
        //         if(document.documentElement.scrollTop>entry_top){
        //             let prog = 0.0;
        //             if(document.documentElement.scrollTop>(entry_top+entry_height)){
        //                 prog = 0.999;
        //                 NProgress.set(prog);
        //             }else{
        //                 prog = (document.documentElement.scrollTop - entry_top)/entry_height;
        //                 NProgress.set(prog);
        //             }
        //         }else{
        //             NProgress.set(0.001);
        //         }
        //     }
        //
        //     if (mainFooter) {
        //         var footerRect = mainFooter.getBoundingClientRect();
        //         if( footerRect.top < windowHeight ){
        //             pix_animation_display( $('.site-footer2:not(.pix-sticky-footer)') );
        //             // pix_animation( $('.site-footer2:not(.pix-sticky-footer)'), true);
        //         }
        //     }
        // };

        // Back to top
        var scroll_top_duration = 700,
        back_to_top = $('.back_to_top');
        back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({scrollTop: 0}, scroll_top_duration);
        });

        // Smooth scroll
        let header_height = 0;
        if($('#masthead').length){
            header_height = $('#masthead').height()
        }
        if($('#wpadminbar').length){
            header_height += $('#wpadminbar').height();
        }
        $('body').on('click', 'a', function(event){
            var link = $(this).attr('href');
            if(link!== 'undefined'){
                if( link && link.startsWith('#pix_section') ){
                    if($(link).length){
                        event.preventDefault();
                        $('body,html').animate({scrollTop: $(link).offset().top - header_height }, scroll_top_duration);
                        return false;
                    }
                }
                if( link && link.startsWith('#pix-product-') ){
                    if($(link).length){
                        event.stopPropagation();
                        event.preventDefault();
                            $('body,html').animate({scrollTop: $(link).offset().top - header_height - 20 }, scroll_top_duration);
                        return false;
                    }
                }
            }
        });

        function is_touch_device() {
          try {
            document.createEvent("TouchEvent");
            return true;
          } catch (e) {
            return false;
          }
        }
        let IS_TOUCH_DEVICE = is_touch_device();
        let IS_MOBILE_DEVICE = false;
        if($( window ).width()<920){
            IS_MOBILE_DEVICE = true;
        }
        $('.pix-nav-link.dropdown-toggle.nav-link').on('click', function (e) {
            if($(this).attr('href')){
                let link = $(this).attr('href');
                let target = $(this).attr('target');
                if(!IS_MOBILE_DEVICE){
                    if(link&&!link.startsWith('#')){
                        if(IS_TOUCH_DEVICE){
                            if(!$(this).hasClass('pix-item-clicked')){
                                $(this).addClass('pix-item-clicked');
                            }else{
                                if(target=='_blank'){
                                    window.open(link);
                                }else{
                                    window.location = link;
                                }
                            }
                        }else{
                            if(target=='_blank'){
                                window.open(link);
                            }else{
                                window.location = link;
                            }
                        }
                    }
                }

            }
        });


        var page_hash = location.hash.substr(1);
        if( page_hash && page_hash.startsWith('pix_section') ){
            if($('#'+page_hash).length){
                setTimeout(function(){
                    $('body,html').animate({scrollTop: $('#'+page_hash).offset().top - header_height }, scroll_top_duration);
                }, 700);
            }
        }

        // Fix intro loading inside VC
        setTimeout(function(){
            $('.pix-intro-img').addClass('pix-loaded');
        }, 2000);

        // Init bootstrap tooltip
        if($('[data-toggle="tooltip"]').length){
            $('[data-toggle="tooltip"]').tooltip();
        }

        // pixfort custom dropdown
        $('.pixfort-select').selectpicker({
            styleBase: 'btn dropdown-toggle btn-light bg-white shadow-sm2 font-weight-bold text-body-default text-sm'
        });
        $('.widget select, .wp-block-archives.wp-block-archives-dropdown select, .wp-block-categories.wp-block-categories-dropdown select').selectpicker({
            styleBase: 'pix-widget-select pix-mb-15 btn dropdown-toggle btn-light bg-white shadow-sm2 font-weight-bold text-body-default text-sm'
        });
        $('.pixfort-shop-select').selectpicker({
            styleBase: 'btn dropdown-toggle btn-light bg-white shadow-sm font-weight-bold text-body-default text-sm'
        });

        // Video element
        $('body').on( 'click', '.video-play-btn-inline', function(e){
            e.preventDefault();
            var btn = $(this);
            var iframe = btn.closest('.pix-video').find('iframe');
            if(iframe.attr('data-src')) {
                iframe.attr('src', iframe.attr('data-src')).click();
            }
            btn.parent('.pix-video').addClass('video-active');
            setTimeout(function() {
                btn.parent('.pix-video').addClass('video-start');
            }, 400);
            return false;
        });


        // Header
        var header_top = 0;
        if($('#masthead').length){
            header_top = $('#masthead').offset().top;
        }
        if($('#masthead').hasClass('pix-mt-20')){
            header_top +=20;
        }

        if($('.pix-header-transparent').length>0){
            var tran_height = $('.pix-header-transparent > div').height();
            $('.pix-main-intro-placeholder').addClass('d-block w-100').height(tran_height);
        }
        if($('.pix-header-boxed').length>0){
            var tran_height = $('.pix-header-boxed > div').height();
            $('.pix-main-intro-placeholder').addClass('d-block w-100').height(tran_height);
        }

        if($('.pix-header').length>0){
            let top = $('.pix-header').height() + 20;
            if($('#wpadminbar').length>0){
                top += $('#wpadminbar').height();
            }
            if($('#masthead').length>0){
                if($('#masthead').hasClass('pix-header-box')){
                    top += 20;
                }
            }
            $('.pix-sticky-top-adjust').css({"top": top});
        }

        // Blog floating meta box (comments + likes)
        var update_meta = false;
        if($('.pix-floating-meta').length){
            if($( window ).width()>1300){
                update_meta = true;
                var blog_post = $('.post').offset().top;


                $('.pix-floating-meta').addClass('position-fixed sticky-top2').css({
                    'top': blog_post,
                    'width': "70px",
                    'margin-left': "-90px",
                });
                if( $('.post').hasClass('post-sidebar-left') ){
                    var blog_post_right = $('.post:first-of-type').offset().left+$('.post:first-of-type').width() + 20;
                    $('.pix-floating-meta').addClass('position-fixed sticky-top2').css({
                        'left': blog_post_right,
                        'margin-left': "0px",
                    });
                }

                var top_val = 20;
                if($('#masthead').length){
                    top_val += $('#masthead').height();
                }
                if($('#wpadminbar').length){
                    top_val += $('#wpadminbar').height();
                }
                var blog_post_end = $('.post').offset().top + $('.post').height();
            }
        }else{
            update_meta = false;
        }
        if($('.pix-floating-meta').length){
            $(window).resize(function(){
                if($( window ).width()<1300){
                    update_meta = false;
                    $('.pix-floating-meta').removeClass('position-fixed sticky-top2').css({
                        'top': 'auto',
                        'width': "auto",
                        'margin-left': "0px",
                    });
                }else{
                    update_meta = true;
                    if($('.post').length){
                        var blog_post = $('.post').offset().top;
                        $('.pix-floating-meta').addClass('position-fixed sticky-top2').css({
                            'top': blog_post,
                            'width': "70px",
                            'margin-left': "-90px",
                        });
                        if( $('.post').hasClass('post-sidebar-left') ){
                            var blog_post_right = $('.post:first-of-type').offset().left+$('.post:first-of-type').width() + 20;
                            $('.pix-floating-meta').addClass('position-fixed sticky-top2').css({
                                'left': blog_post_right,
                                'margin-left': "0px",
                            });
                        }
                        var top_val = 20;
                        if($('#masthead').length){
                            top_val += $('#masthead').height();
                        }
                        if($('#wpadminbar').length){
                            top_val += $('#wpadminbar').height();
                        }
                        var blog_post_end = $('.post').offset().top + $('.post').height();
                    }

                }
            });
        }

        var body_padding = 0;
        if($('body').hasClass('pix-padding-style')){
             body_padding = $('body').css('padding');
            if(body_padding&&body_padding!=''&&body_padding!='0'&&body_padding!='0px'){
                $('.vc_row-fluid').css({
                    'padding-left': body_padding,
                    'padding-right': body_padding
                });
                $('.back_to_top').css({ 'margin': body_padding });
            }else{
                body_padding = 0;
            }
        }

        $('body').on( 'click', 'a.plus, a.minus', function(e) {
            e.preventDefault();
           // Get current quantity values
           var qty = $( this ).closest( '.quantity' ).find( '.qty' );
           var val   = parseFloat(qty.val());
           var max = parseFloat(qty.attr( 'max' ));
           var min = parseFloat(qty.attr( 'min' ));
           var step = parseFloat(qty.attr( 'step' ));

           // Change the value if plus or minus
           if ( $( this ).is( '.plus' ) ) {
              if ( max && ( max <= val ) ) {
                 qty.val( max );
              } else {
                 qty.val( val + step ).change();
              }
           } else {
              if ( min && ( min >= val ) ) {
                 qty.val( min );
              } else if ( val > 1 ) {
                 qty.val( val - step ).change();
              }
           }

        });


        var header_scroll_val = 50;
        var header_text_class = '',
            header_text_scroll = '';
        if($('#page').length){
            header_scroll_val = $('#page').offset().top;
            if($('.pix-topbar').length){
                header_scroll_val += $('.pix-topbar').height();
            }
        }
        if(header_scroll_val===0){
            header_scroll_val = 6;
        }
        if($('#masthead').length){
            if($('#masthead').hasClass('pix-mt-20')){
                header_scroll_val +=20;
            }
            if($('#masthead').data('text-scroll') && $('#masthead').data('text-scroll') != ''){
                header_text_class = 'text-' + $('#masthead').data('text');
                header_text_scroll = 'text-' + $('#masthead').data('text-scroll');
            }

        }

        if($('#wpadminbar').length){
            header_scroll_val += $('#wpadminbar').height();
        }

        var header_scroll_class = $('.pix-header-container-area').attr('data-scroll-class');
        var header_scroll_color = $('.pix-header-container-area').attr('data-scroll-color');
        var header_bg_class = $('.pix-header-container-area').attr('data-bg-class');
        var header_bg_color = $('.pix-header-container-area').attr('data-bg-color');


        // sticky header option
        var pix_enable_sticky = false;
        if($('.pix-is-sticky-header').length){
            pix_enable_sticky = true;
        }
        // Moible header sticky option
        let pix_enable_mobile_sticky = false;
        let pix_mobile_header_height = 0;
        let mobile_header_scroll_val = header_scroll_val;
        if($('.pix-mobile-header-sticky').length && $('#mobile_head').length){
            pix_enable_mobile_sticky = true;
            pix_mobile_header_height = $('#mobile_head').outerHeight();
            mobile_header_scroll_val = $('#mobile_head').offset().top;
        }
        $('.pix-header-container-area .pix-header-text').addClass(header_text_class);

        $('.pix-header-scroll-placeholder').addClass('d-none');
        $('.pix-header-scroll-placeholder').css({'height': $('.pix-header-normal').height()});


        document.addEventListener('scroll', (e) => {
            if(update_meta){
                if ( ($(this).scrollTop()+top_val) > blog_post ){
                    if (($(this).scrollTop()+top_val) > blog_post_end){
                        $('.pix-floating-meta').addClass('is-hidden')
                    }else{
                        $('.pix-floating-meta').css({
                            'top': top_val
                        }).removeClass('is-hidden');
                    }
                }else{
                    $('.pix-floating-meta').css({
                        'top': blog_post - $(this).scrollTop()
                    }).removeClass('is-hidden');
                }
            }



            if(pix_enable_mobile_sticky){
                if (($(this).scrollTop() > header_scroll_val)){
                    pix_mobile_header_height = $('#mobile_head').outerHeight();
                    $('#mobile_head').addClass('pix-mobile-sticky shadow');
                    $('.pix-mobile-header-sticky').height(pix_mobile_header_height);
                }else if (($(this).scrollTop() < (header_scroll_val-5))){
                    $('#mobile_head').removeClass('pix-mobile-sticky shadow');
                    $('.pix-mobile-header-sticky').height(0);
                }
            }
            if(pix_enable_sticky){
                if (($(this).scrollTop() > header_scroll_val)){

                    if(body_padding!=0){
                        $('.pix-header-box').css('padding-left', body_padding);
                        $('.pix-header-box').css('padding-right', body_padding);
                    }
                    $('.pix-header').addClass('is-scroll');
                    if($( window ).width() > 600){
                        $('.pix-topbar').addClass('pix-hidden');
                    }
                    $('.pix-header-container-area').removeClass(header_bg_class);
                    $('.pix-header-container-area').addClass(header_scroll_class);
                    $('.pix-header-container-area').css('background', header_scroll_color);

                    $('.pix-header-container-area .pix-header-text').removeClass(header_text_class);
                    $('.pix-header-container-area .pix-header-text').addClass(header_text_scroll);

                    $('.pix-header-boxed').addClass('pix-boxed-sticky pix-scroll-shadow');
                    $('.pix-header-box:not(.pix-no-topbar)').addClass('pix-pt-20');


                    if(body_padding!=0){
                        $('.pix-header-transparent-full').css('padding-left', body_padding);
                        $('.pix-header-transparent-full').css('padding-right', body_padding);
                    }
                    $('.pix-header-transparent').addClass('pix-transparent-sticky');
                    $('.pix-header-normal').addClass('pix-normal-sticky');
                    if($('.pix-header-normal').length){
                        $('.pix-header-scroll-placeholder').removeClass('d-none');
                        $('.pix-header-scroll-placeholder').css({'height': $('.pix-header-normal').height()});
                    }

                }else if (($(this).scrollTop() < (header_scroll_val-5))){
                    if($('.pix-header-normal').length){
                        $('.pix-header-scroll-placeholder').addClass('d-none');
                    }

                    $('.pix-header').removeClass('is-scroll');
                    $('.pix-topbar').removeClass('pix-hidden');
                    $('.pix-header-container-area').removeClass(header_scroll_class);
                    $('.pix-header-container-area').addClass(header_bg_class);
                    $('.pix-header-container-area').css('background', "");
                    $('.pix-header-container-area').css('background', header_bg_color);


                    $('.pix-header-container-area .pix-header-text').removeClass(header_text_scroll);
                    $('.pix-header-container-area .pix-header-text').addClass(header_text_class);

                    $('.pix-header-boxed').removeClass('pix-boxed-sticky pix-scroll-shadow');
                    $('.pix-header-box:not(.pix-no-topbar)').removeClass('pix-pt-20');

                    if(body_padding!=0){
                        $('.pix-header-box').css('padding-left', '');
                        $('.pix-header-box').css('padding-right', '');
                    }

                    $('.pix-header-transparent').removeClass('pix-transparent-sticky');
                    $('.pix-header-normal').removeClass('pix-normal-sticky');
                    if(body_padding!=0){
                        $('.pix-header-transparent-full').css('padding-left', '');
                        $('.pix-header-transparent-full').css('padding-right', '');
                    }
                }
            }

        }, {
            passive: true
        });

        // Search
        setTimeout(function(){
            var elmOverlay = $('.shape-overlays')[0];
            var overlay = new ShapeOverlays(elmOverlay);
            $('.pix-search-btn').on('click', function(e){
                e.preventDefault();
                if(overlay){
                    if (overlay.isAnimating) {
                        return false;
                    }
                    overlay.toggle();
                    $('.pix-overlay-item').toggleClass('is-opened');
                }
                $('.pix-search-input').focus();
                return false;
            });
            $('.pix-search-close').on('click', function(e){
                e.preventDefault();
                if(overlay){
                    if (overlay.isAnimating) {
                        return false;
                    }
                    overlay.toggle();
                    $('.pix-overlay-item').toggleClass('is-opened');
                }
                return false;
            });
            $(document).keyup(function(e) {
                if(overlay&&overlay.isOpened){
                    if (e.keyCode === 27) $('.pix-search-close').click();   // esc
                }
            });
        }, 0);


        if( $(window).width() > 992 ){
            if($('body').hasClass('pix-sections-stack')&&!window.vc_iframe){
                if($('body').hasClass('elementor-page')){
                    $('.site-main .elementor-section-wrap > section, .site-main .elementor-section-wrap > div, .site-footer2').stack();
                }else{
                    $('.site-content section, .site-footer2').stack();
                }
                if($('.pix-cookie-banner').length){
                    pix_animation_display($('.pix-cookie-banner'), true);
                }
            }
        }else{
            $('body').removeClass('pix-sections-stack');
        }


        setTimeout(function(){
            pix_section_stack();
        }, 500);


        if( $(window).width() > 992 ){
            $('.pix-sticky-footer').pixfooter();
        }else{
            $('.pix-sticky-footer').removeClass('pix-sticky-footer');
        }


        // firefox fix
        $('.pix-main-slider.clients').each(function(i, elem){
            var waypoint = new Waypoint({
                element: elem,
                offset: '100%',
                triggerOnce: true,
                handler: function() {
                    $('.pix-main-slider').flickity('resize');
                    setTimeout(function() {
                        $('.pix-main-slider').flickity('resize');
                    }, 500);
                    this.destroy();
                }
            });
        });

        $('.widget_product_categories .count').each(function(i, elem){
            let c = $(this).html().replace('(', '').replace(')', '');
            $(this).html(c);
        });

        $('.pix-ajax-search').each(function(i, elem){
            var container = $(elem).closest('.pix-ajax-search-container');
            var link = $(this).data('search-link');
            link = link ;
            $(elem).typeahead({
                matcher: function(a){
                    return true;
                },
                showHintOnFocus: false,
                autoSelect: false,
                // openLinkInNewTab: true,
                source: function (query, process) {
                    return $.get(link, { term: $(elem).val() }, function (response) {
                        if(!response.error){
                            var data =  JSON.parse(response);
                            return process(data);
                            // return process([
                            //     { name: "Display name 1", href: "http://www.example1.com"},
                            //     { name: "Display name 2", href: "http://www.example12.com"}
                            //   ]);
                        }
                        return false;
                    });
                },
                appendTo: container,
            });
        });

        $('.pix-add-to-cart').on('click', function(e){
            e.preventDefault();
            var self = $(this);
            var name = "Success";
            if($(this).data('name')){
                name = $(this).data('name');
            }
            var link = $(this).attr('href');
            var img = false;
            if(self.data('img')){
                img = self.data('img');
            }
            var id = $(this).data('product_id');
            $(this).find('.btn-icon').removeClass('pixicon-bag-2');
            var loading_icon = '<svg class="pix-icon-loading bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z" clip-rule="evenodd"/></svg>';
            $(this).find('.btn-icon').addClass('').html(loading_icon);
            var html = '<div class="toast pix-notification bg-white shadow-lg border-0 rounded-lg w-100" role="alert" aria-live="assertive" aria-atomic="true">';
            html += '<div class="toast-header pix-p-10">';
            if(img){
                html += '<img src="'+img+'" class="rounded-lg pix-mr-10 " alt="" style="width:25px;height:25px;">';
            }
            html += '<strong class="mr-auto">'+name+'</strong>';
            html += '<button type="button" class="ml-2 close" data-dismiss="toast" aria-label="Close">';
            html += '<span aria-hidden="true">&times;</span>';
            html += '</button>';
            html += '</div>';
            html += '<div class="toast-body pix-p-10 text-body-default font-weight-bold">';
            if(pixfort_main_object.hasOwnProperty('dataAddCartMsg')){
                html += pixfort_main_object.dataAddCartMsg;
            }else{
                html += 'The item has been added to your shopping cart!';
            }
            html += '</div>';
            html += '</div>';
            var data = {
                product_id: id,
                quantity: 1
            }
            return $.ajax({
                url: link,
                method: 'GET'
            }).done(function (data) {
                $( document.body ).trigger( 'wc_fragment_refresh' );
                var el = $(html);
                $('.pix-notifications-area').append(el);
                el.toast({
                    autohide: true,
                    animation: true,
                    delay: 3000
                });
                el.toast('show');
                self.find('.btn-icon').replaceWith('<span class="btn-icon text-success pixicon-check-circle-1 align-self-center"></span>');
                self.find('.btn-icon').removeClass('pixicon-rotate-right pix-icon-loading').html('');
                self.find('.btn-icon').addClass('text-success pixicon-check-circle-1');
                setTimeout(function(){
                    self.find('.btn-icon').removeClass('text-success pixicon-check-circle-1');
                    self.find('.btn-icon').addClass('pixicon-bag-2');
                }, 1000);

            }).fail(function(){
                // console.log('Something went wrong, please try again.');
                self.find('.btn-icon').removeClass('pixicon-rotate-right pix-icon-loading').html('');
                self.find('.btn-icon').addClass('text-red pixicon-close-circle');
                setTimeout(function(){
                    self.find('.btn-icon').removeClass('text-red pixicon-close-circle');
                    self.find('.btn-icon').addClass('pixicon-bag-2');
                }, 1000);
            });
        });

        $('.pix-add-to-wishlist').on('click', function(e){
            e.preventDefault();
            var self = $(this);
            var id = false;
            id = self.data('id');
            if(!id) return false;
            var link = $(this).attr('href');
            $(this).find('.btn-icon').removeClass('pixicon-heart');
            var loading_icon = '<svg class="pix-icon-loading bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z" clip-rule="evenodd"/></svg>';
            $(this).find('.btn-icon').addClass('').html(loading_icon);
            var data = {
                add_to_wishlist: id,
                product_type: 'simple',
                action: 'add_to_wishlist'
            }
            if(self.hasClass('remove-item')){
                data = {
                    remove_from_wishlist: id,
                    product_type: 'simple',
                    action: 'remove_from_wishlist'
                }
            }
            return $.ajax({
                url: link,
                data: data,
                method: 'POST'
            }).done(function (data) {

                if(self.hasClass('remove-item')){
                    self.removeClass('remove-item');
                    self.find('.btn-icon').removeClass('pixicon-rotate-right pix-icon-loading text-red').html('');
                    self.find('.btn-icon').addClass('text-body-default pixicon-heart');
                }else{
                    self.find('.btn-icon').removeClass('pixicon-rotate-right pix-icon-loading text-body-default').html('');
                    self.find('.btn-icon').addClass('text-red pixicon-heart');
                    self.addClass('remove-item');
                }
            }).fail(function(){
                // console.log('Something went wrong, please try again.');
                self.find('.btn-icon').removeClass('pixicon-rotate-right pix-icon-loading').html('');
                self.find('.btn-icon').addClass('text-red pixicon-close-circle');
                setTimeout(function(){
                    self.find('.btn-icon').removeClass('text-red pixicon-close-circle').html('');
                    self.find('.btn-icon').addClass('pixicon-heart');
                }, 1000);
            });
        });


        // sidebar
        $('.pix-open-sidebar').on('click', function(e){
            e.preventDefault();
            $('.pix-sidebar').addClass('opened');
            return false;
        });
        $('.pix-close-sidebar').on('click', function(e){
            e.preventDefault();
            $('.pix-sidebar').removeClass('opened');
            return false;
        });


        // Banner
        $('.pix-banner-close').on('click', function(e){
            e.preventDefault();
            var link = $(this).attr('href');
            var banner = $(this).closest('.pix-banner');
            $.ajax({
                url: link,
                method: 'GET'
            }).done(function (data) {
                // banner.addClass('pix-closed');

            }).fail(function(){
                // banner.addClass('pix-closed');
            });
            banner.addClass('pix-closed');
            return false;

        });

        // Cookies bar
        $('.pix-cookies-close').on('click', function(e){
            e.preventDefault();
            var link = $(this).attr('href');
            var cookies_banner = $(this).closest('.pix-cookie-banner');
            $.ajax({
                url: link,
                method: 'GET'
            }).done(function (data) {
                // cookies_banner.addClass('pix-closed');

            }).fail(function(){
                // cookies_banner.addClass('pix-closed');
            });
            if(pixfort_main_object.hasOwnProperty('datacookiesId')){
                localStorage.setItem("pix_cookiesbanner", pixfort_main_object.datacookiesId);
                console.log("set");
            }
            cookies_banner.addClass('pix-closed');
            return false;
        });

        $('.widget_nav_menu .menu > .menu-item.menu-item-has-children > a').on('click', function(e){
            e.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).parent().find('.sub-menu').slideToggle(300, 'linear');
            return false;
        });



        setTimeout(() => document.body.classList.add('render'), 0);
        setTimeout(function(){
            if($('body').hasClass(' vc_editor compose-mode')){
                return false;
            }
            piximations.init();
            pix_countdown();
            // init_pix_maps();
            pixLoadMaps();
            init_chart();
            update_collapse();
            update_numbers();
            update_masonry();
            init_bars();
            init_scroll_rotate();
            init_fancy_mockup();
            init_portfolio();
            video_element();
            pix_init_c7();
            init_tilts();
            init_Parallax();
            init_Parallax();
            pix_animation();
            pixLazy();
            $('.pix_tabs_btns').each(function(i, elem){
                $(elem).find('.nav-item:first a').tab('show');
            });
            $("body").on("click", 'a[data-toggle="pill"]', function(e) {
                $(this).closest('.pix_tabs_btns').find('.nav-link').removeClass('active');
            });
            $('.pix-contact7-form').each(function(i, elem){
                $('input[type="text"], input[type="email"], input[type="phone"], input[type="password"], textarea').each(function(i, el){
                    $(el).addClass('form-control');
                    $(el).closest('p').addClass('form-group');
                });
            });
            $('.vc_controls-out-tl').each(function(i, elem){
                if($(elem).offset().top<0){
                    $(elem).css({ top: '-17px' });
                }
            });
        }, 0);

        setTimeout(function(){
            pixLoadImgs();
        }, 3000);

        jQuery(document.body).on("post-load", function(e) {
            pix_animation();
        })

        $('.jarallax-video').each(function(){
            let src = false;
            if($(this).attr('data-pix-bg-video')){
                src = $(this).attr('data-pix-bg-video');
            }else{
                return false;
            }
            $(this).jarallax({
                speed: 0.4,
                videoSrc: src
            });
        });
        setTimeout(function(){
            $('.pix-video-elem source').each(function(){
                if($(this).parents('.navbar').length) return false;
                var sourceFile = $(this).attr("data-src");
                $(this).attr("src", sourceFile);
                var video = this.parentElement;
                video.load();
                video.play();
            });
        }, 10000);

        let navVideos = true;
        $('.navbar').hover(function(e) {
            if(navVideos){
                $(this).find('.pix-video-elem source').each(function(){
                    var sourceFile = $(this).attr("data-src");
                    $(this).attr("src", sourceFile);
                    var video = this.parentElement;
                    video.load();
                    video.play();
                });
                navVideos = false;
            }
        });
        // navbar pix-main-menu navbar-hover-drop navbar-expand-lg navbar-light d-inline-block2
        $('.intro-jarallax').jarallax({
            speed: 0.4,
            imgSize: 'object-fit',
            imgPosition: 'object-position',
        });

        /* ---------------------------------------------------------------------------
        * Pix overlay
        * --------------------------------------------------------------------------- */

        $('.pix-shape-dividers').each(function(){
            if(!$(this).hasClass('loaded')){
                let divider = new dividerShapes(this);
                divider.initPoints();
                $(this).addClass('loaded');
            }
        });

        pix_intro_bg();

        pix_init_particles();

        window.onpageshow = function(event) {
            if (event.persisted) {
                document.body.classList.add('render');
            }
        };

        $('body').addClass('pix-loaded');
        setTimeout(() => document.body.classList.add('render'), 0);
        setTimeout(() => $('.pix-loading-circ-path').remove(), 600);
        setTimeout(() => $('.flickity-enabled').flickity('resize'), 0);
        NProgress.done();
    });





    document.addEventListener("DOMContentLoaded", function() {
        let lazyImages = [].slice.call(document.querySelectorAll("img.pix-lazy"));
        let active = false;
        const lazyLoad = function() {
        if (active === false) {
          active = true;

          setTimeout(function() {
            lazyImages.forEach(function(lazyImage) {
              if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) ) {
                lazyImage.src = lazyImage.dataset.src;
                if(lazyImage.dataset.srcset) lazyImage.srcset = lazyImage.dataset.srcset;
                lazyImage.classList.remove("pix-lazy");

                lazyImages = lazyImages.filter(function(image) {
                  return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                  document.removeEventListener("scroll", lazyLoad);
                  window.removeEventListener("resize", lazyLoad);
                  window.removeEventListener("orientationchange", lazyLoad);
                }
              }
            });


            active = false;
          }, 200);
        }
    };
    window.pixLazy = function(){
        lazyLoad();
    }


    // var img = document.querySelector('.pix-main-slider img');
    //
    // function loaded() {
    //   $('.pix-main-slider').flickity('resize');
    // }
    //
    // if (img.complete) {
    //   loaded();
    // } else {
    //   img.addEventListener('load', loaded);
    //   img.addEventListener('error', function() {
    //       console.log('Image was not loaded');
    //   });
    // }


    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});


window.pixLoadImgs = function(){
    let lazyImages = [].slice.call(document.querySelectorAll("img.pix-lazy"));
    lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("pix-lazy");
        lazyImages = lazyImages.filter(function(image) {
          return image !== lazyImage;
        });
    });
}

    window.pixInitJs = async function(el){
        if($('body').hasClass('vc_editor')){
            piximations.init();
            if(!el){
                el = $('body');
            }
            el.find('[data-toggle="tooltip"]').tooltip();
            // destroy_Parallax();
            // init_Parallax();
            $('.vc_controls-out-tl').each(function(i, elem){
                if($(elem).offset().top<0){
                    $(elem).css({ top: '-17px' });
                }
            });
            el.find('.pix-contact7-form').each(function(i, elem){
                $('input[type="text"], input[type="email"], input[type="phone"], input[type="password"], textarea').each(function(i, el){
                    $(el).addClass('form-control');
                    $(el).closest('p').addClass('form-group');
                });
            });
            el.find('.pix-shape-dividers').each(function(){
                if(!$(this).hasClass('loaded')){
                    let divider = new dividerShapes(this);
                    divider.initPoints();
                    $(this).addClass('loaded');
                }
            });
            pix_intro_bg();
        }
    }

    // window.pixBgVideo = async function(el){
    //     if(el){
    //         el.find('.jarallax').each(function(i, elem){
    //             if( $(elem).attr('data-jarallax-video') && $(elem).attr('data-jarallax-video')!='' ){
    //                 $(elem).jarallax();
    //             }
    // 		});
    //     }
    // }

    window.pix_init_particles = async function(){
        if( $(window).width() < 600 ){
            pix_particles_test();
        }
        $(window).resize(function(){
            if( $(window).width() < 600 ){
                pix_particles_test();
            }else{
                $('.pix-scene').css('display', 'block');
            }
        });
    }
    function pix_particles_test(){
        $('.pix-scene').each(function(i, elem){
            if( $(elem).find('.pix-scene-elm-res:not(.pix-particle-sm-hide)').length == 0 ){
                $(elem).css('display', 'none');
            }else{
                $(elem).css('display', 'block');
            }
        });
    }

    async function pix_intro_bg(){
        $('.pix-intro-1 .pix-intro-img img').each(function(i, elem){
            var self = this;
            var waypoint = new Waypoint({
                element: elem,
                offset: '100%',
                triggerOnce: true,
                handler		: function(){
                    setTimeout(function(){
                        $(self).addClass('animated');
                    }, 10);
                    setTimeout(function(){
                        $(self).addClass('slow-transition');
                    }, 1000);
                }
            });
        });

    }

    window.pix_cb_fn = async function(cb){
        setTimeout(cb, 0);
    }
    window.pix_init_c7 = async function(){
        $('.pix-contact7-form').each(function(i, elem){
            $('input[type="text"], input[type="email"], input[type="phone"], input[type="password"], select, textarea').each(function(i, el){
                $(el).addClass('form-control');
                $(el).closest('p').addClass('form-group');
            });
        });
    }


    window.update_masonry = async function(el){
        if(!el){
            el = $('body');
        }
        if(el.find('.pix_masonry').length){
            window.pixLoadIsotope(function(){
                el.find('.pix_masonry').each(function(i, elem){
                    setTimeout(function(){
                        $(elem).isotope({
                            itemSelector: '.grid-item',
                            percentPosition: true,
                            resize: true,
                            masonry: {
                                columnWidth: '.grid-sizer',
                                gutter: '.gutter-sizer'
                            }
                        });
                    }, 200);
                    setTimeout(function(){
                        $(elem).isotope( 'reloadItems' );
                    }, 1900);
                });
            });
        }
    }
    window.init_fancy_mockup = async function(el){
        if(!el){
            el = $('body');
        }
        el.find('.pix-fancy-mockup').each(function(i, elem){
            var el_mockup = $(elem).find('.pix-fancy-device-img');
            var el_content = $(elem).find('.pix-fancy-content img');
            var e_top = $(elem).offset().top ;
            var range = $(elem).outerHeight();
            var rect = elem.getBoundingClientRect();
            var range_start = $(window).height();
            var range_end = $(window).height()/4;
            var range_total = range_start - range_end;

            var w_top = $(window).scrollTop() + $( window ).height();

            var percent = (rect.top - range_end) / range_total;
            var rot_per = 80*percent;
            var trans_per = 100* percent;
            var scale_per = 0.9 + (0.1*(1-percent));
            el_content.css({
                "transform": 'translate3d(0px, '+trans_per+'px, 0px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            });
            el_mockup.css({
                "transform": 'translate3d(0px, '+trans_per+'px, 2px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            });

            document.addEventListener('scroll', (e) => {
                rect = elem.getBoundingClientRect();
                if(rect.top <= range_start && rect.top >= range_end){
                    var percent = (rect.top - range_end) / range_total;
                    var rot_per = 80*percent;
                    var trans_per = 100* percent;
                    var scale_per = 0.9 + (0.1*(1-percent));
                    el_content.css({
                        "transform": 'translate3d(0px, '+trans_per+'px, 0px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                    el_mockup.css({
                        "transform": 'translate3d(0px, '+trans_per+'px, 2px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                }else if (rect.top > range_start) {
                    el_content.css({
                        "transform": 'translate3d(0px, 100px, 0px) scale3d(1, 0.9, 1) rotateX(80deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                    el_mockup.css({
                        "transform": 'translate3d(0px, 100px, 2px) scale3d(1, 0.9, 1) rotateX(80deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                }else{
                    el_content.css({
                        "transform": 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                    el_mockup.css({
                        "transform": 'translate3d(0px, 0px, 2px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                    });
                }
            }, {
              passive: true
            });
            // $(window).scroll(function() {
            //     rect = elem.getBoundingClientRect();
            //     if(rect.top <= range_start && rect.top >= range_end){
            //         var percent = (rect.top - range_end) / range_total;
            //         var rot_per = 80*percent;
            //         var trans_per = 100* percent;
            //         var scale_per = 0.9 + (0.1*(1-percent));
            //         el_content.css({
            //             "transform": 'translate3d(0px, '+trans_per+'px, 0px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //         el_mockup.css({
            //             "transform": 'translate3d(0px, '+trans_per+'px, 2px) scale3d(1, '+scale_per+', 1) rotateX('+rot_per+'deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //     }else if (rect.top > range_start) {
            //         el_content.css({
            //             "transform": 'translate3d(0px, 100px, 0px) scale3d(1, 0.9, 1) rotateX(80deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //         el_mockup.css({
            //             "transform": 'translate3d(0px, 100px, 2px) scale3d(1, 0.9, 1) rotateX(80deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //     }else{
            //         el_content.css({
            //             "transform": 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //         el_mockup.css({
            //             "transform": 'translate3d(0px, 0px, 2px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
            //         });
            //     }
            // });

        });

    }


    /* ---------------------------------------------------------------------------
    * Portfolio
    * --------------------------------------------------------------------------- */
    window.init_portfolio = async function(el){
        if($('.portfolio_grid').length || $('.portfolio_filter').length){
            window.pixLoadIsotope(function(){
                if(!el){
                    el = $('body');
                }
                $('.portfolio_grid').isotope({
                    // options
                    itemSelector: '.grid-item',
                    packery: {
                        gutter: 0
                    },
                });


                $('.portfolio_filter').click(function(e){
                    e.preventDefault();
                    var el = $(this);
                    var filter = el.data('category');
                    var portfolio = el.closest('.pix-portfolio').find('.portfolio_grid');

                    $(this).closest('.pix-portfolio-nav').find('.portfolio_filter').removeClass( 'is-checked' );
                    $(this).addClass( 'is-checked' );

                    portfolio.isotope({
                        // options
                        itemSelector: '.grid-item',
                        // layoutMode: 'fitRows',
                        filter: filter
                    });
                    window.pix_animation_display( portfolio );
                    return false;
                });

                setTimeout(function() {
                    window.pix_animation( $('.portfolio_grid'), true );
                }, 1500);

            });
        }
    }

    /* ---------------------------------------------------------------------------
    * Elements Parallax
    * --------------------------------------------------------------------------- */
    window.pixParallax = [];
    window.init_Parallax = async function(){


        $('.scene').each(function(){
            var parallaxInstance = new Parallax(this, {
                relativeInput: true
            });
            window.pixParallax.push(parallaxInstance);
        });
        $('.pix-scene').each(function(){

            var depth = $(this).find('.pix-scene-particle').attr('data-pix-depth');
            var parallaxInstance = new Parallax(this, {
                relativeInput: true,
                friction: (0.2, 0.2)
            });
            window.pixParallax.push(parallaxInstance);
        });

    }
    window.destroy_Parallax = async function(){
        window.pixParallax.forEach(function(item){
            item.destroy();
            var index = window.pixParallax.indexOf(item);
            if (index > -1) {
                window.pixParallax.splice(index, 1);
            }
        });
    }

    window.init_tilts = async function(el){
        if(!el){
            el = $('body');
        }
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if(!isSafari){
            el.find('.tilt').each(function(i, elem){
                $(elem).universalTilt({
                    base: window,
                    reset: true,
                    scale: 1.04,
                    reverse: false,
                    max: 15,
                    perspective: 3000,
                    speed: 4000
                });
            });
            el.find('.tilt_small').each(function(i, elem){
                $(elem).universalTilt({
                    reset: true,
                    scale: 1.01,
                    reverse: false,
                    max: 15,
                    perspective: 5000,
                    speed: 4000
                });
            });
            el.find('.tilt_big').each(function(i, elem){
                $(elem).universalTilt({
                    reset: true,
                    scale: 1.07,
                    reverse: false,
                    max: 15,
                    perspective: 1000,
                    speed: 4000
                });
            });
        }

    }

    // function destroy_tilts(){
    //     var tilt = $('.tilt, .tilt_small, .tilt_big');
    //     if(tilt.methods){
    //         tilt.methods.destroy.call(tilt);
    //     }
    // }

    window.update_collapse = async function(){
        $('.collapse').each(function(i, elem){
            var parent = $(elem).closest('.accordion');
            if(parent.attr('id') && parent.attr('id')!=''){
                $(elem).attr('data-parent', '#'+ parent.attr('id'));
            }
        });
    }

    window.init_scroll_rotate = async function(el){
        if(!el){
            el = $('body');
        }
        el.find('.pix-rotate-scroll').each(function(){
            var el = $(this);
            var speed = el.attr('data-speed');
            if(!speed||speed==''){
                speed = 300;
            }
            document.addEventListener('scroll', (e) => {
                var theta = $(window).scrollTop() / speed ;
                var rotationStr = "rotate(" + theta + "rad)";
                el.css({
                    "-webkit-transform": rotationStr,
                    "-moz-transform": rotationStr,
                    "transform": rotationStr
                });
            }, {
                passive: true
            });
            // $(window).scroll(function() {
            //     var theta = $(window).scrollTop() / speed ;
            //     var rotationStr = "rotate(" + theta + "rad)";
            //     el.css({
            //         "-webkit-transform": rotationStr,
            //         "-moz-transform": rotationStr,
            //         "transform": rotationStr
            //     });
            // });
        });
    }

    window.video_element = async function(el){
        if(!el){
            el = $('body');
        }
        el.find('video.pix-video-bg-element').each(function(i, elem){
            var that = this;
            var waypoint = new Waypoint({
                element: elem,
                offset: '100%',
                triggerOnce: true,
                handler		: function(){
                    if (that.paused) that.play();
                    this.destroy();
                }
            });
        });
    }
    window.init_bars = async function(){
        var delay = 500;
        $(".pix-progress:not(.pix_ready)").each(function(i, elem) {
            var that = this;
            $(elem).addClass('pix_ready');
            var waypoint = new Waypoint({
                element: elem,
                offset: '100%',
                triggerOnce: true,
                handler		: function(){
                    var duration = 1000;
                    var bar = $(elem).find('.progress-bar');
                    $(bar).animate({
                        width: $(bar).attr('aria-valuenow') + '%'
                    }, duration);

                    var el = $(elem).find('.pix-progress-counter');
                    var counter = 0;
                    if(el.attr('data-counter')&&el.attr('data-counter')!=''){
                        counter = Math.floor(el.attr('data-counter'));
                    }
                    $({property:0}).animate({property:counter}, {
                        duration	: duration+600,
                        easing		:'swing',
                        step		: function() {
                            el.text(Math.floor(this.property)+ '%');
                        },
                        complete	: function() {
                            el.text(this.property+ '%');
                        }
                    });
                    this.destroy();
                }
            });
        });
    }

    /* ---------------------------------------------------------------------------
    * Animate Math [counter, numbers, etc.]
    * --------------------------------------------------------------------------- */
    window.update_numbers = async function(){
        $('.animate-math .number').each(function(i, elem){
            var waypoint = new Waypoint({
                element: elem,
                offset: '100%',
                triggerOnce: true,
                handler		: function(){
                    var el			= $(elem);
                    var duration	= Math.floor((Math.random()*1000)+3000);
                    if(el.attr('data-duration')&&el.attr('data-duration')!=''){
                        duration = Math.floor(el.attr('data-duration'));
                    }
                    var to			= el.attr('data-to');
                    $({property:0}).animate({property:to}, {
                        duration	: duration,
                        easing		:'swing',
                        step		: function() {
                            el.text(Math.floor(this.property));
                        },
                        complete	: function() {
                            el.text(this.property);
                        }
                    });
                    this.destroy();
                }
            });
        });
    };

    /* ---------------------------------------------------------------------------
    * Chart
    * --------------------------------------------------------------------------- */
    window.init_chart = async function(el){
        if(!el){
            el = $('body');
        }
        el.find('.chart:not(.pix-loaded)').each(function(i, elem){
            $(elem).addClass('pix-loaded');
            var tbg = 'rgba(0,0,0,0.03)';
            if($(elem).attr('data-track')&&$(elem).attr('data-track')!=''){
                tbg =$(elem).attr('data-track');
            }
            var waypoint = new Waypoint({
                element:    elem,
                offset		: '100%',
                triggerOnce	: true,
                handler		: function(){
                    var color = $(this.element).attr('data-color');
                    $(this.element).easyPieChart({
                        animate		: 1000,
                        barColor: function(percent) {
                            var color = "";
                            if($(this.el).attr('data-gradient-1')){
                                var ctx = this.renderer.getCtx();
                                var canvas = this.renderer.getCanvas();
                                color = ctx.createRadialGradient(0,0,100, 100,70,70);
                                color.addColorStop(0, $(this.el).attr('data-gradient-1'));
                                if($(this.el).attr('data-gradient-3')&&$(this.el).attr('data-gradient-3')!=''){
                                    color.addColorStop(0.5, $(this.el).attr('data-gradient-2'));
                                    color.addColorStop(1, $(this.el).attr('data-gradient-3'));
                                }else{
                                    color.addColorStop(1, $(this.el).attr('data-gradient-2'));
                                }
                            }else{
                                color = $(this.el).attr('data-barColor');
                            }
                            return color;
                        },
                        trackColor: tbg,
                        lineCap		: 'round',
                        lineWidth	: 18,
                        size		: 140,
                        scaleColor	: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.number').text(Math.round(percent));
                        }
                    });
                }
            });

        });
    }


    /* ---------------------------------------------------------------------------
    * Pix Sliders
    * --------------------------------------------------------------------------- */
    window.pix_sliders = async function(){
        $('.pix-slider').each(function(i, slider) {
            var opts  = {};
            if($(slider).attr('data-flickity')){
                opts = JSON.parse($(slider).attr('data-flickity'));
            }
            opts.draggable= true;
            opts.adaptiveHeight= true;
            opts.wrapAround= true;
            opts.prevNextButtons= false;
            opts.imagesLoaded= true;
            opts.contain= true;
            opts.resize= true;
            opts.ready= function(){
                $('.pix-slider').flickity('resize');
                setTimeout(function() {
                    $('.pix-slider').flickity('resize');
                }, 900);
            };
            opts.on= {
                ready: function() {
                    $('.pix-slider').flickity('resize');
                    setTimeout(function() {
                        $('.pix-slider').flickity('resize');
                    }, 900);
                }
            };
            $(slider).flickity(opts);
        });
        $('.pix-slider-nav-full').each(function(i, nav) {
            var slider = false;
            var align = 'center';
            if($(nav).attr('data-slider')){
                if($(nav).attr('data-nav-align')){
                    align = $(nav).attr('data-nav-align');
                }
                slider = $(nav).attr('data-slider');
                $(nav).flickity({
                    asNavFor: slider,
                    cellAlign: align,
                    prevNextButtons: false,
                    contain: true,
                    pageDots: false,
                    on: {
                        ready: function() {
                            $(nav).flickity('resize');
                            setTimeout(function() {
                                $(nav).flickity('resize');
                            }, 1000);
                        }
                    }
                });
            }

        });
    }

    pix_sliders();

    window.pix_main_slider =  function(el){
        if(!el){
            el = $('body');
        }
        var $sliders = el.find('.pix-main-slider');

        $sliders.each(function(i, elem){
            if($(elem).hasClass('flickity-enabled')){
                $(elem).flickity('destroy');
            }
            var opts  = {};
            if($(elem).attr('data-flickity')){
                opts = JSON.parse($(elem).attr('data-flickity'));
            }
            opts.draggable = true;
            if(opts.adaptiveHeight) opts.adaptiveHeight = true;
            opts.resize = true;
            opts.imagesLoaded = true;
            opts.arrowShape = 'M83.7718595,45.4606514 L31.388145,45.4606514 L54.2737785,23.1973134 C56.1027533,21.4180712 56.1027533,18.4982892 54.2737785,16.719047 C52.4448037,14.9398048 49.4903059,14.9398048 47.6613311,16.719047 L16.7563465,46.7836776 C14.9273717,48.5629198 14.9273717,51.4370802 16.7563465,53.2163224 L47.6613311,83.280953 C49.4903059,85.0601952 52.4448037,85.0601952 54.2737785,83.280953 C56.1027533,81.5017108 56.1027533,78.6275504 54.2737785,76.8483082 L31.388145,54.5849702 L83.7718595,54.5849702 C86.3511829,54.5849702 88.4615385,52.5319985 88.4615385,50.0228108 C88.4615385,47.5136231 86.3511829,45.4606514 83.7718595,45.4606514 Z';
            if($( window ).width()<600) opts.autoPlay = false;
            $(elem).on( 'ready.flickity', function() {
                if(opts.pix_id && $(opts.pix_id).hasClass('flickity-enabled') ){
                    setTimeout(function(){ $(opts.pix_id).flickity('resize'); }, 500);
                }
                if(opts.pix_id && $(opts.pix_id).hasClass('flickity-enabled') ){
                    setTimeout(function(){ $(opts.pix_id).flickity('resize'); }, 1500);
                }
                setTimeout(function(){
                    $(elem).addClass('pix-slider-loaded');
                },100);

            });
            $(elem).flickity((opts));
            if(opts.slider_effect){
                var slider_style = '';
                if(opts.slider_style) slider_style = opts.slider_style;
                $(elem).closest('.vc_row:not(.overflow-visible)').removeClass('vc_row_visible').addClass('overflow-hidden').css({'overflow': 'hidden !important'});
                $(elem).closest('.elementor-top-section').addClass('overflow-hidden').css({'overflow': 'hidden !important'});
                var frameRender = 4;
                $(elem).on( 'scroll.flickity', function( event, progress ) {
                    var el_width = $(elem).width();
                    if($( window ).width()<600) return false;
                    var el_left = $(elem).offset().left;
                    var slideWidth = $(elem).find('.carousel-cell').width();
                    if(!$(elem).data('flickity') || !$(elem).data('flickity').slides) return false;
                    $(elem).data('flickity').slides.forEach(function(slide, j) {
                        var flkInstanceSlide = $(elem).find('.carousel-cell:nth-child(' + (j + 1) + ')');
                        var slide_offset = $(slide.cells[0].element).offset().left;
                        var op = 1;
                        var local_offset = 0;
                        var rotate = 0;
                        var translate = 0;
                        var scale = 1;
                        var depth = 0;
                        var index = 10;
                        var pointer = 'auto';
                        if(slide_offset - el_left < 0 ){
                                if(opts.slider_effect== 'pix-circular-slider'
                                || opts.slider_effect== 'pix-circular-left'
                                || opts.slider_effect== 'pix-fade-out-effect'
                            ){
                                local_offset = slide_offset - el_left;
                                op = 1 + ( local_offset / slideWidth);
                                if(op<0){op=0;}
                                if(op>1){op=1;}
                                if(opts.slider_effect!='pix-fade-out-effect'){
                                    rotate = (1-op)*20;
                                    translate =  1.8 * ( -1 * slide_offset + el_left );
                                    depth = -180 * ( (el_left-slide_offset) / slideWidth);
                                    scale = 1- ((1 - op)*0.1);
                                }
                            }else if(slider_style=='pix-opacity-slider'){
                                local_offset = slide_offset - el_left;
                                op = 1 + ( local_offset / slideWidth);
                                if(op<0.3){op=0.3;}
                                if(op>1){op=1;}
                            }
                            if(op<0.1) op = 0;
                            if( (slide_offset - el_left) < -10 ){
                                pointer = 'none';
                            }


                            index = -1;
                        }else if(slide_offset  > (el_left + el_width - slideWidth + 1) ){
                            pointer = 'none';
                            if(opts.slider_effect== 'pix-circular-slider'
                                || opts.slider_effect== 'pix-circular-right'
                                || opts.slider_effect== 'pix-fade-out-effect'
                            ){
                                local_offset = el_left  + el_width - slide_offset;
                                op =  local_offset / slideWidth;
                                if(op<0){op=0;}
                                if(op>1){op=1;}
                                if(opts.slider_effect!='pix-fade-out-effect'){
                                    rotate = -1 * (1-op)*20;
                                    translate = -1*(1-op)*2.2*slideWidth * 0.82;
                                    depth = -1*(1-op)*slideWidth*0.52;
                                    scale = 1- ((1 - op)*0.1);
                                }
                            }else if(slider_style=='pix-opacity-slider'){
                                local_offset = el_left  + el_width - slide_offset;
                                op =  local_offset / slideWidth;
                                if(op<0.3){op=0.3;}
                                if(op>1){op=1;}
                            }
                            index = -1;
                            if(op<0.2) op = 0;
                        }
                        flkInstanceSlide.find('.slide-inner').css({
                            'transform': 'perspective('+slideWidth+'px) translateX(' + translate + 'px) rotateY(' + rotate + 'deg) translateZ( '+depth+'px)',
                            '-webkit-transform': 'perspective('+slideWidth+'px) translateX(' + translate + 'px) rotateY(' + rotate + 'deg) translateZ( '+depth+'px)',
                            '-moz-transform': 'perspective('+slideWidth+'px) translateX(' + translate + 'px) rotateY(' + rotate + 'deg) translateZ( '+depth+'px)'
                        });
                        if(opts.slider_effect== 'pix-circular-slider'
                        || opts.slider_effect== 'pix-circular-right'
                        || opts.slider_effect== 'pix-circular-left'
                        || opts.slider_effect== 'pix-fade-out-effect'
                        ){
                            flkInstanceSlide.css({
                                'opacity': op,
                                'z-index': index
                            });
                        }
                        flkInstanceSlide.css({
                            'pointer-events': pointer
                        });
                        flkInstanceSlide.parent().css({
                            'pointer-events': pointer
                        });
                    });
                });
            }

        });
}
window.pix_main_slider();

/* ---------------------------------------------------------------------------
* Pix Countdown
* --------------------------------------------------------------------------- */
window.pix_countdown = async function(el){
    if(!el){
        el = $('body');
    }
    if(el.find('.pix-countdown:not(.pix-count-loaded)').length){
        el.find('.pix-countdown:not(.pix-count-loaded)').each(function(i, elem){
            var endDate = $(elem).attr('data-date');
            $(elem).countdown({
                date: endDate,
                render: function(data) {
                    $.each(data, function(key, value) {
                        $(elem).find('.pix-count-'+key).html(value);
                    });
                },
                onEnd: function(){
                    if($(this.el).attr('data-redirect')){
                        window.location.href = $(this.el).attr('data-redirect');
                    }
                }
            });
            $(elem).addClass('pix-count-loaded');
        });
    }
}

  window.pix_animation_display = async function(el=false){
    if(!el){
        el = $('body');
    }
    var effects	=	[
        'fade-in-Img',
        'fade-in-down',
        'fade-in-left',
        'fade-in-up',
        'fade-in-up-big',
        'fade-in-right-big',
        'fade-in-left-big',
        'highlight-grow',
        'slide-in-up'
    ];
    el.find('.animate-in').each(function(i, elem){
        var	type = $(elem).attr('data-anim-type'),
        delay = $(elem).attr('data-anim-delay');
        $(elem).addClass('pix-waiting');
        // Animate
        if($(elem).hasClass('animate-in') && !$(elem).hasClass('animating-init')){
            $(elem).addClass('animating-init');
            setTimeout(function() {
                $(elem).addClass('animating').addClass(type).removeClass('animate-in');
            }, delay);

            // On animation end
            $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend transitionend webkitTransitionEnd oTransitionEnd', function() {
                // Clear animation
                $(elem).removeClass('animating animating-init').removeClass(effects.join(' ')).addClass('animated');
            });
        }
    });
}
window.pix_animation = async function(el=false, refresh=false){
    var effects	=	[
        'fade-in-Img',
        'fade-in-down',
        'fade-in-left',
        'fade-in-up',
        'fade-in-up-big',
        'fade-in-right-big',
        'fade-in-left-big',
        'highlight-grow',
        'slide-in-up'
    ];
    if(!el){
        el = $('body');
    }
    var state = ':not(.pix-waiting)';
    if(refresh){
        state = '';
    }
    el.find('.animate-in'+state).each(function(i, elem){
        var normal_trigger = true;
        var offset = '100%';
        if($('body').hasClass('pix-sections-stack') && !$('body').hasClass('vc_editor')){
            if( $(window).width() > 992 ){
                if($(elem).closest('section').length>0){
                    normal_trigger = false;
                    var offset = '200%';
                    if(!$(elem).closest('section').hasClass('is-sticky-active') && $(elem).closest('.site-footer2').length<1){
                        return false;
                    }
                }
            }
        }
        var	type = $(elem).attr('data-anim-type'),
        delay = $(elem).attr('data-anim-delay');
        $(elem).addClass('pix-waiting');
        var waypoint = new Waypoint({
            element: elem,
            offset: offset,
            triggerOnce: normal_trigger,
            handler: function() {
                // Animate
                if($(elem).hasClass('animate-in') && !$(elem).hasClass('animating-init')){
                    $(elem).addClass('animating-init');
                    setTimeout(function() {
                        $(elem).addClass('animating').addClass(type).removeClass('animate-in');
                    }, delay);

                    // On animation end
                    $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend transitionend webkitTransitionEnd oTransitionEnd', function() {
                        // Clear animation
                        $(elem).removeClass('animating animating-init').removeClass(effects.join(' ')).addClass('animated');
                    });
                }
                // trigger Once
                this.destroy();
            }
        });
    });
}
window.isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= -10 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 10
    );
};

})(jQuery);
