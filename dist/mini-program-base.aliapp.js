!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mipp"),require("mipp-ali")):"function"==typeof define&&define.amd?define(["exports","mipp","mipp-ali"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).miniProgramBase={},t.mipp,t.mippAli)}(this,(function(t,e,r){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function o(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function i(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,a)}c((n=n.apply(t,e||[])).next())}))}function u(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var i;return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.aom=function(){return this},function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);i>3&&u&&Object.defineProperty(e,r,u)}([r.method,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype","function"==typeof(i="undefined"!=typeof IComponent&&IComponent)?i:Object)],e.prototype,"aom",null),e}(r.ComponentBase),c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var f="__lodash_hash_undefined__",s="[object Function]",l="[object GeneratorFunction]",p=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,h=/^\w*$/,_=/^\./,y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,v=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,b="object"==typeof c&&c&&c.Object===Object&&c,g="object"==typeof self&&self&&self.Object===Object&&self,j=b||g||Function("return this")();var m,w=Array.prototype,O=Function.prototype,A=Object.prototype,P=j["__core-js_shared__"],S=(m=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",z=O.toString,x=A.hasOwnProperty,M=A.toString,k=RegExp("^"+z.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=j.Symbol,C=w.splice,E=q(j,"Map"),F=q(Object,"create"),T=$?$.prototype:void 0,R=T?T.toString:void 0;function B(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function I(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function U(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function L(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function D(t,e){var r;e=function(t,e){if(J(t))return!1;var r=typeof t;if("number"==r||"symbol"==r||"boolean"==r||null==t||Q(t))return!0;return h.test(t)||!p.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:J(r=e)?r:N(r);for(var n=0,o=e.length;null!=t&&n<o;)t=t[V(e[n++])];return n&&n==o?t:void 0}function G(t){if(!K(t)||(e=t,S&&S in e))return!1;var e,r=function(t){var e=K(t)?M.call(t):"";return e==s||e==l}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?k:d;return r.test(function(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function W(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function q(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return G(r)?r:void 0}B.prototype.clear=function(){this.__data__=F?F(null):{}},B.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},B.prototype.get=function(t){var e=this.__data__;if(F){var r=e[t];return r===f?void 0:r}return x.call(e,t)?e[t]:void 0},B.prototype.has=function(t){var e=this.__data__;return F?void 0!==e[t]:x.call(e,t)},B.prototype.set=function(t,e){return this.__data__[t]=F&&void 0===e?f:e,this},I.prototype.clear=function(){this.__data__=[]},I.prototype.delete=function(t){var e=this.__data__,r=L(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},I.prototype.get=function(t){var e=this.__data__,r=L(e,t);return r<0?void 0:e[r][1]},I.prototype.has=function(t){return L(this.__data__,t)>-1},I.prototype.set=function(t,e){var r=this.__data__,n=L(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},U.prototype.clear=function(){this.__data__={hash:new B,map:new(E||I),string:new B}},U.prototype.delete=function(t){return W(this,t).delete(t)},U.prototype.get=function(t){return W(this,t).get(t)},U.prototype.has=function(t){return W(this,t).has(t)},U.prototype.set=function(t,e){return W(this,t).set(t,e),this};var N=H((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(Q(t))return R?R.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var r=[];return _.test(t)&&r.push(""),t.replace(y,(function(t,e,n,o){r.push(n?o.replace(v,"$1"):e||t)})),r}));function V(t){if("string"==typeof t||Q(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function H(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u),u};return r.cache=new(H.Cache||U),r}H.Cache=U;var J=Array.isArray;function K(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Q(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==M.call(t)}var X=function(t,e,r){var n=null==t?void 0:D(t,e);return void 0===n?r:n},Y=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",i="[object Array]",u="[object Boolean]",a="[object Date]",f="[object Error]",s="[object Function]",l="[object Map]",p="[object Number]",h="[object Object]",_="[object Promise]",y="[object RegExp]",v="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",m="[object DataView]",w=/^\[object .+?Constructor\]$/,O=/^(?:0|[1-9]\d*)$/,A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A[o]=A[i]=A[j]=A[u]=A[m]=A[a]=A[f]=A[s]=A[l]=A[p]=A[h]=A[y]=A[v]=A[d]=A[g]=!1;var P="object"==typeof c&&c&&c.Object===Object&&c,S="object"==typeof self&&self&&self.Object===Object&&self,z=P||S||Function("return this")(),x=e&&!e.nodeType&&e,M=x&&t&&!t.nodeType&&t,k=M&&M.exports===x,$=k&&P.process,C=function(){try{return $&&$.binding&&$.binding("util")}catch(t){}}(),E=C&&C.isTypedArray;function F(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function T(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function R(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var B,I,U=Array.prototype,L=Function.prototype,D=Object.prototype,G=z["__core-js_shared__"],W=L.toString,q=D.hasOwnProperty,N=function(){var t=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),V=D.toString,H=RegExp("^"+W.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=k?z.Buffer:void 0,K=z.Symbol,Q=z.Uint8Array,X=D.propertyIsEnumerable,Y=U.splice,Z=K?K.toStringTag:void 0,tt=Object.getOwnPropertySymbols,et=J?J.isBuffer:void 0,rt=(B=Object.keys,I=Object,function(t){return B(I(t))}),nt=$t(z,"DataView"),ot=$t(z,"Map"),it=$t(z,"Promise"),ut=$t(z,"Set"),at=$t(z,"WeakMap"),ct=$t(Object,"create"),ft=Tt(nt),st=Tt(ot),lt=Tt(it),pt=Tt(ut),ht=Tt(at),_t=K?K.prototype:void 0,yt=_t?_t.valueOf:void 0;function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function gt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}function jt(t){var e=this.__data__=new dt(t);this.size=e.size}function mt(t,e){var r=It(t),n=!r&&Bt(t),o=!r&&!n&&Ut(t),i=!r&&!n&&!o&&qt(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var f in t)!e&&!q.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Ft(f,c))||a.push(f);return a}function wt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function Ot(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Z&&Z in Object(t)?function(t){var e=q.call(t,Z),r=t[Z];try{t[Z]=void 0;var n=!0}catch(t){}var o=V.call(t);n&&(e?t[Z]=r:delete t[Z]);return o}(t):function(t){return V.call(t)}(t)}function At(t){return Wt(t)&&Ot(t)==o}function Pt(t,e,r,n,c){return t===e||(null==t||null==e||!Wt(t)&&!Wt(e)?t!=t&&e!=e:function(t,e,r,n,c,s){var _=It(t),g=It(e),w=_?i:Et(t),O=g?i:Et(e),A=(w=w==o?h:w)==h,P=(O=O==o?h:O)==h,S=w==O;if(S&&Ut(t)){if(!Ut(e))return!1;_=!0,A=!1}if(S&&!A)return s||(s=new jt),_||qt(t)?xt(t,e,r,n,c,s):function(t,e,r,n,o,i,c){switch(r){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!i(new Q(t),new Q(e)));case u:case a:case p:return Rt(+t,+e);case f:return t.name==e.name&&t.message==e.message;case y:case d:return t==e+"";case l:var s=T;case v:var h=1&n;if(s||(s=R),t.size!=e.size&&!h)return!1;var _=c.get(t);if(_)return _==e;n|=2,c.set(t,e);var g=xt(s(t),s(e),n,o,i,c);return c.delete(t),g;case b:if(yt)return yt.call(t)==yt.call(e)}return!1}(t,e,w,r,n,c,s);if(!(1&r)){var z=A&&q.call(t,"__wrapped__"),x=P&&q.call(e,"__wrapped__");if(z||x){var M=z?t.value():t,k=x?e.value():e;return s||(s=new jt),c(M,k,r,n,s)}}if(!S)return!1;return s||(s=new jt),function(t,e,r,n,o,i){var u=1&r,a=Mt(t),c=a.length,f=Mt(e).length;if(c!=f&&!u)return!1;var s=c;for(;s--;){var l=a[s];if(!(u?l in e:q.call(e,l)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var h=!0;i.set(t,e),i.set(e,t);var _=u;for(;++s<c;){var y=t[l=a[s]],v=e[l];if(n)var d=u?n(v,y,l,e,t,i):n(y,v,l,t,e,i);if(!(void 0===d?y===v||o(y,v,r,n,i):d)){h=!1;break}_||(_="constructor"==l)}if(h&&!_){var b=t.constructor,g=e.constructor;b==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(h=!1)}return i.delete(t),i.delete(e),h}(t,e,r,n,c,s)}(t,e,r,n,Pt,c))}function St(t){return!(!Gt(t)||function(t){return!!N&&N in t}(t))&&(Lt(t)?H:w).test(Tt(t))}function zt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||D,e!==n)return rt(t);var e,r,n,o=[];for(var i in Object(t))q.call(t,i)&&"constructor"!=i&&o.push(i);return o}function xt(t,e,r,n,o,i){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var f=i.get(t);if(f&&i.get(e))return f==e;var s=-1,l=!0,p=2&r?new gt:void 0;for(i.set(t,e),i.set(e,t);++s<a;){var h=t[s],_=e[s];if(n)var y=u?n(_,h,s,e,t,i):n(h,_,s,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(p){if(!F(e,(function(t,e){if(u=e,!p.has(u)&&(h===t||o(h,t,r,n,i)))return p.push(e);var u}))){l=!1;break}}else if(h!==_&&!o(h,_,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function Mt(t){return function(t,e,r){var n=e(t);return It(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Nt,Ct)}function kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function $t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return St(r)?r:void 0}vt.prototype.clear=function(){this.__data__=ct?ct(null):{},this.size=0},vt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},vt.prototype.get=function(t){var e=this.__data__;if(ct){var n=e[t];return n===r?void 0:n}return q.call(e,t)?e[t]:void 0},vt.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:q.call(e,t)},vt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?r:e,this},dt.prototype.clear=function(){this.__data__=[],this.size=0},dt.prototype.delete=function(t){var e=this.__data__,r=wt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Y.call(e,r,1),--this.size,!0)},dt.prototype.get=function(t){var e=this.__data__,r=wt(e,t);return r<0?void 0:e[r][1]},dt.prototype.has=function(t){return wt(this.__data__,t)>-1},dt.prototype.set=function(t,e){var r=this.__data__,n=wt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},bt.prototype.clear=function(){this.size=0,this.__data__={hash:new vt,map:new(ot||dt),string:new vt}},bt.prototype.delete=function(t){var e=kt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return kt(this,t).get(t)},bt.prototype.has=function(t){return kt(this,t).has(t)},bt.prototype.set=function(t,e){var r=kt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},gt.prototype.add=gt.prototype.push=function(t){return this.__data__.set(t,r),this},gt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.clear=function(){this.__data__=new dt,this.size=0},jt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},jt.prototype.get=function(t){return this.__data__.get(t)},jt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof dt){var n=r.__data__;if(!ot||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(n)}return r.set(t,e),this.size=r.size,this};var Ct=tt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}(tt(t),(function(e){return X.call(t,e)})))}:function(){return[]},Et=Ot;function Ft(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||O.test(t))&&t>-1&&t%1==0&&t<e}function Tt(t){if(null!=t){try{return W.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(nt&&Et(new nt(new ArrayBuffer(1)))!=m||ot&&Et(new ot)!=l||it&&Et(it.resolve())!=_||ut&&Et(new ut)!=v||at&&Et(new at)!=g)&&(Et=function(t){var e=Ot(t),r=e==h?t.constructor:void 0,n=r?Tt(r):"";if(n)switch(n){case ft:return m;case st:return l;case lt:return _;case pt:return v;case ht:return g}return e});var Bt=At(function(){return arguments}())?At:function(t){return Wt(t)&&q.call(t,"callee")&&!X.call(t,"callee")},It=Array.isArray;var Ut=et||function(){return!1};function Lt(t){if(!Gt(t))return!1;var e=Ot(t);return e==s||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Dt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function Gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Wt(t){return null!=t&&"object"==typeof t}var qt=E?function(t){return function(e){return t(e)}}(E):function(t){return Wt(t)&&Dt(t.length)&&!!A[Ot(t)]};function Nt(t){return null!=(e=t)&&Dt(e.length)&&!Lt(e)?mt(t):zt(t);var e}t.exports=function(t,e){return Pt(t,e)}}));Object.defineProperty(t,"WeappMiniComponent",{enumerable:!0,get:function(){return e.MiniComponent}}),Object.defineProperty(t,"AliMiniComponent",{enumerable:!0,get:function(){return r.MiniComponent}}),Object.defineProperty(t,"MiniComponent",{enumerable:!0,get:function(){return r.MiniComponent}}),Object.defineProperty(t,"PageBase",{enumerable:!0,get:function(){return r.MiniPage}}),Object.defineProperty(t,"lifetimes",{enumerable:!0,get:function(){return r.lifetimes}}),Object.defineProperty(t,"method",{enumerable:!0,get:function(){return r.method}}),Object.defineProperty(t,"pageLifetime",{enumerable:!0,get:function(){return r.pageLifetime}}),t.ComponentBase=a,t.observer=function(t){return function(e,r,n){var o=n.value,a=t||r;if(!e._propsSubscribeMap){e._propsSubscribeMap={};var c=e.didUpdate;e.didUpdate=function(t,r){return i(this,void 0,void 0,(function(){var n,o=this;return u(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,4,5]),n=e._propsSubscribeMap||{},Object.keys(n).filter((function(e){return!Y(X(t,e),X(o.props,e))})).forEach((function(e){var r;null===(r=n[e])||void 0===r||r.forEach((function(r){return i(o,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return"function"!=typeof r?[3,2]:[4,r.call(this,X(t,e))];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))}))})),"function"!=typeof c?[3,2]:[4,c.call(this,t,r)];case 1:return[2,a.sent()];case 2:return[3,5];case 3:throw a.sent();case 4:return[7];case 5:return[2]}}))}))}}e._propsSubscribeMap[a]||(e._propsSubscribeMap[a]=[]),e._propsSubscribeMap[a].push(o)}},Object.defineProperty(t,"__esModule",{value:!0})}));//# sourceMappingURL=mini-program-base.aliapp.js.map
