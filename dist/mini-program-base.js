!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).miniProgramBase={})}(this,(function(e){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){var t={exports:{}};return e(t,t.exports),t.exports}var r=function(e){return(e=e||{}).circles?function(e){var t=[],n=[];return e.proto?function e(i){if("object"!=typeof i||null===i)return i;if(i instanceof Date)return new Date(i);if(Array.isArray(i))return r(i,e);if(i instanceof Map)return new Map(r(Array.from(i),e));if(i instanceof Set)return new Set(r(Array.from(i),e));var a={};for(var u in t.push(i),n.push(a),i){var f=i[u];if("object"!=typeof f||null===f)a[u]=f;else if(f instanceof Date)a[u]=new Date(f);else if(f instanceof Map)a[u]=new Map(r(Array.from(f),e));else if(f instanceof Set)a[u]=new Set(r(Array.from(f),e));else if(ArrayBuffer.isView(f))a[u]=o(f);else{var l=t.indexOf(f);a[u]=-1!==l?n[l]:e(f)}}return t.pop(),n.pop(),a}:function e(i){if("object"!=typeof i||null===i)return i;if(i instanceof Date)return new Date(i);if(Array.isArray(i))return r(i,e);if(i instanceof Map)return new Map(r(Array.from(i),e));if(i instanceof Set)return new Set(r(Array.from(i),e));var a={};for(var u in t.push(i),n.push(a),i)if(!1!==Object.hasOwnProperty.call(i,u)){var f=i[u];if("object"!=typeof f||null===f)a[u]=f;else if(f instanceof Date)a[u]=new Date(f);else if(f instanceof Map)a[u]=new Map(r(Array.from(f),e));else if(f instanceof Set)a[u]=new Set(r(Array.from(f),e));else if(ArrayBuffer.isView(f))a[u]=o(f);else{var l=t.indexOf(f);a[u]=-1!==l?n[l]:e(f)}}return t.pop(),n.pop(),a};function r(e,r){for(var i=Object.keys(e),a=new Array(i.length),u=0;u<i.length;u++){var f=i[u],l=e[f];if("object"!=typeof l||null===l)a[f]=l;else if(l instanceof Date)a[f]=new Date(l);else if(ArrayBuffer.isView(l))a[f]=o(l);else{var c=t.indexOf(l);a[f]=-1!==c?n[c]:r(l)}}return a}}(e):e.proto?function e(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,e);if(n instanceof Map)return new Map(t(Array.from(n),e));if(n instanceof Set)return new Set(t(Array.from(n),e));var r={};for(var i in n){var a=n[i];"object"!=typeof a||null===a?r[i]=a:a instanceof Date?r[i]=new Date(a):a instanceof Map?r[i]=new Map(t(Array.from(a),e)):a instanceof Set?r[i]=new Set(t(Array.from(a),e)):ArrayBuffer.isView(a)?r[i]=o(a):r[i]=e(a)}return r}:function e(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,e);if(n instanceof Map)return new Map(t(Array.from(n),e));if(n instanceof Set)return new Set(t(Array.from(n),e));var r={};for(var i in n)if(!1!==Object.hasOwnProperty.call(n,i)){var a=n[i];"object"!=typeof a||null===a?r[i]=a:a instanceof Date?r[i]=new Date(a):a instanceof Map?r[i]=new Map(t(Array.from(a),e)):a instanceof Set?r[i]=new Set(t(Array.from(a),e)):ArrayBuffer.isView(a)?r[i]=o(a):r[i]=e(a)}return r};function t(e,t){for(var n=Object.keys(e),r=new Array(n.length),i=0;i<n.length;i++){var a=n[i],u=e[a];"object"!=typeof u||null===u?r[a]=u:u instanceof Date?r[a]=new Date(u):ArrayBuffer.isView(u)?r[a]=o(u):r[a]=t(u)}return r}};function o(e){return e instanceof Buffer?Buffer.from(e):new e.constructor(e.buffer.slice(),e.byteOffset,e.length)}var i=t&&t.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r},a=(t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(r),u=function(){function e(){return this.data={},this.delProperties=["constructor"],e.serialize(this)}return Object.defineProperty(e.prototype,"componentName",{get:function(){return this.constructor.name},enumerable:!1,configurable:!0}),e.prototype.setDataAsync=function(e){var t=this;return new Promise((function(n){t.setData(e,(function(){n(void 0)}))}))},e.serialize=function(e){var t=a.default({proto:!0})(e);return i(Array.isArray(e.delProperties)?e.delProperties:[]).forEach((function(e){delete t[e]})),t},e.render=function(e){Page(e)},e}(),f=u,l=Object.defineProperty({default:f},"__esModule",{value:!0}),c=function(){function e(){}return Object.defineProperty(e.prototype,"componentName",{get:function(){return this.constructor.name},enumerable:!1,configurable:!0}),e}(),s=Object.defineProperty({default:c},"__esModule",{value:!0}),p=n((function(e,n){var o=t&&t.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{f(r.next(e))}catch(e){i(e)}}function u(e){try{f(r.throw(e))}catch(e){i(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}f((r=r.apply(e,t||[])).next())}))},i=t&&t.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=t&&t.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r},u=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.lifetimes=n.pageLifetime=n.observer=n.method=n.MiniComponent=void 0;var f=u(r);var l=function(){function e(){this.data={}}return Object.defineProperty(e.prototype,"componentName",{get:function(){return this.constructor.name},enumerable:!1,configurable:!0}),e}();n.default=l;var c=function(){function e(){this.data=Object.create(null),this.delProperties=["constructor"]}return e.prototype.setDataAsync=function(e){var t=this;return new Promise((function(n){t.setData(e,(function(){n(void 0)}))}))},e.serialize=function(e){var t=f.default({proto:!0})(e),n=t;a(Array.isArray(e.delProperties)?e.delProperties:[]).forEach((function(e){delete t[e]}));try{"object"==typeof(null==n?void 0:n.props)&&(n.properties=null==n?void 0:n.props,null==n||delete n.props),Object.keys((null==n?void 0:n.properties)||{}).forEach((function(e){var t,r,o,i,a=null===(t=null==n?void 0:n.properties)||void 0===t?void 0:t[e];if(void 0!==a)if("string"!=typeof a)if("number"!=typeof a)if("boolean"!=typeof a)if(Array.isArray(a))n.properties[e]={type:Array,value:null==n?void 0:n.properties[e]};else if(function(e){if(null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}(a)||null===a){var u=null===(o=n.properties[e])||void 0===o?void 0:o.type,f=null===(i=n.properties[e])||void 0===i?void 0:i.value,l=f||null===f||""===f||0===f||!1===f?f:Object.create(null);n.properties[e]={type:"function"==typeof u?u:Object,value:"function"==typeof u?l:a}}else;else n.properties[e]={type:Boolean,value:a};else n.properties[e]={type:Number,value:a};else n.properties[e]={type:String,value:a};else null===(r=null==n?void 0:n.properties)||void 0===r||delete r[e]}))}catch(e){console.error(e)}(null==n?void 0:n.methods)||(n.methods=Object.create(null)),n.methods.setDataAsync=n.setDataAsync,delete n.setDataAsync;try{a(Object.keys(n.methods),Object.keys((null==n?void 0:n.pageLifetimes)||{}),Object.keys((null==n?void 0:n.observers)||{}),Object.keys((null==n?void 0:n.lifetimes)||{})).forEach((function(e){delete n[e]})),delete n.delProperties}catch(e){console.error(e)}return t},e.Component=function(t){e.render(t)},e.render=function(t){Component(e.serialize(t))},e}();n.MiniComponent=c,n.method=function(e,t,n){e.methods||(e.methods=Object.create(null)),e.methods[t]=n.value},n.observer=function(e,t,n){e.observers||(e.observers=Object.create(null)),e.observers[t]=n.value},n.pageLifetime=function(e,t,n){e.pageLifetimes||(e.pageLifetimes=Object.create(null)),e.pageLifetimes[t]=n.value},n.lifetimes=function(e,t,n){e.lifetimes||(e.lifetimes=Object.create(null));var r=Object.getPrototypeOf(e),a=n.value;e.lifetimes[t]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return"function"!=typeof(null==r?void 0:r.created)?[3,2]:[4,r.created.apply(this,e)];case 1:t.sent(),t.label=2;case 2:return[4,a.apply(this,e)];case 3:return t.sent(),[2]}}))}))}}})),d=n((function(e,n){var r=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.ComponentBase=n.MiniComponent=n.method=n.lifetimes=n.pageLifetime=n.observer=n.EmptyBase=n.PageBase=void 0;var o=r(l),i=r(s);Object.defineProperty(n,"MiniComponent",{enumerable:!0,get:function(){return p.MiniComponent}}),Object.defineProperty(n,"ComponentBase",{enumerable:!0,get:function(){return p.MiniComponent}}),Object.defineProperty(n,"method",{enumerable:!0,get:function(){return p.method}}),Object.defineProperty(n,"observer",{enumerable:!0,get:function(){return p.observer}}),Object.defineProperty(n,"pageLifetime",{enumerable:!0,get:function(){return p.pageLifetime}}),Object.defineProperty(n,"lifetimes",{enumerable:!0,get:function(){return p.lifetimes}}),n.PageBase=o.default,n.EmptyBase=i.default,n.default={EmptyBase:i.default,PageBase:o.default,MiniComponent:p.MiniComponent,ComponentBase:p.MiniComponent,observer:p.observer,pageLifetime:p.pageLifetime,lifetimes:p.lifetimes,method:p.method}})),y=t&&t.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{f(r.next(e))}catch(e){i(e)}}function u(e){try{f(r.throw(e))}catch(e){i(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}f((r=r.apply(e,t||[])).next())}))},v=t&&t.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},h=t&&t.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r},m=function(){function e(){return this.data={},this.delProperties=["constructor"],e.serialize(this)}return Object.defineProperty(e.prototype,"componentName",{get:function(){return this.constructor.name},enumerable:!1,configurable:!0}),e.prototype.setDataAsync=function(e){var t=this;return new Promise((function(n){t.setData(e,(function(){n(void 0)}))}))},e.serialize=function(e){var t=Object.create(null),n=h(e.delProperties);h(Object.keys(e),Object.keys(Object.getPrototypeOf(e))).forEach((function(r){n.includes(r)||(t[r]=e[r])}));var r=t.onShow;t.onShow=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return y(this,void 0,void 0,(function(){var t,n=this;return v(this,(function(o){switch(o.label){case 0:return"function"!=typeof r?[3,2]:[4,r.apply(this,e)];case 1:t=o.sent(),o.label=2;case 2:return setTimeout((function(){var t;Array.isArray(null==n?void 0:n.pageShow)&&(null===(t=null==n?void 0:n.pageShow)||void 0===t||t.forEach((function(t){return y(n,void 0,void 0,(function(){return v(this,(function(n){switch(n.label){case 0:return"function"!=typeof t?[3,2]:[4,t.apply(void 0,e)];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))})))}),0),[2,t]}}))}))};var o=t.onHide;return t.onHide=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return y(this,void 0,void 0,(function(){var t,n=this;return v(this,(function(r){switch(r.label){case 0:return"function"!=typeof o?[3,2]:[4,o.apply(this,e)];case 1:t=r.sent(),r.label=2;case 2:return setTimeout((function(){var t;Array.isArray(null==n?void 0:n.pageHide)&&(null===(t=null==n?void 0:n.pageHide)||void 0===t||t.forEach((function(t){return y(n,void 0,void 0,(function(){return v(this,(function(n){switch(n.label){case 0:return"function"!=typeof t?[3,2]:[4,t.apply(void 0,e)];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))})))}),0),[2,t]}}))}))},t},e.render=function(e){Page(e)},e}(),b=m,g=Object.defineProperty({default:b},"__esModule",{value:!0}),w=n((function(e,n){var o=t&&t.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=t&&t.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{f(r.next(e))}catch(e){i(e)}}function u(e){try{f(r.throw(e))}catch(e){i(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}f((r=r.apply(e,t||[])).next())}))},a=t&&t.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=t&&t.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r},f=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.lifetimes=n.pageLifetime=n.method=void 0;var l=f(r),c={created:"onInit",ready:"didMount",detached:"didUnmount",error:"onError"},s=function(){function e(){this.data=Object.create(null),this.delProperties=["constructor"],this.lifetimesMappings={created:"onInit",ready:"didMount",detached:"didUnmount",error:"onError"}}return e.prototype.triggerEvent=function(e,t){this.props[e]({type:e,detail:t})},e.prototype.setDataAsync=function(e){var t=this;return new Promise((function(n){t.setData(e,(function(){n(void 0)}))}))},e.serialize=function(e){var t,n,r,f=l.default({proto:!0})(e);u(Array.isArray(e.delProperties)?e.delProperties:[]).forEach((function(e){delete f[e]}));try{"object"==typeof(null===(t=f)||void 0===t?void 0:t.properties)&&(f.props=null===(n=f)||void 0===n?void 0:n.properties,null===(r=f)||void 0===r||delete r.properties)}catch(e){console.error(e)}var s=f;(null==s?void 0:s.lifetimes)||(s.lifetimes=Object.create(null));var p=(null==e?void 0:e.lifetimesMappings)||c||{};Object.keys(p).forEach((function(e){var t;s[e]&&(s.lifetimes[null==p?void 0:p[e]]=s[e]),(null===(t=s.lifetimes)||void 0===t?void 0:t[e])&&(s.lifetimes[null==p?void 0:p[e]]=s.lifetimes[e]);try{delete s[e],delete s.lifetimes[e]}catch(e){console.error(e)}})),Object.keys((null==s?void 0:s.lifetimes)||{}).forEach((function(e){var t;s[e]=null===(t=null==s?void 0:s.lifetimes)||void 0===t?void 0:t[e]})),(null==s?void 0:s.methods)||(s.methods=Object.create(null)),s.methods.triggerEvent=s.triggerEvent,delete s.triggerEvent;var d=s.deriveDataFromProps,y=s.onInit;try{Object.keys(s.methods).forEach((function(e){delete s[e]})),delete s.delProperties,delete s.lifetimesMappings}catch(e){console.error(e)}return s.onInit=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return this.data=o(o({},this.data||{}),this.props||{}),"function"!=typeof y?[3,2]:[4,y.apply(this,e)];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},s.deriveDataFromProps=function(e){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return this.setData(o({},e||{})),"function"!=typeof d?[3,2]:[4,d.apply(this,[e])];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},f},e.Component=function(t){e.render(t)},e.render=function(t){Component(e.serialize(t))},e}();n.default=s,n.method=function(e,t,n){e.methods||(e.methods=Object.create(null)),e.methods[t]=n.value},n.pageLifetime=function(e,t,n){var r=e.onInit;e.onInit=function(){for(var e,o,u=[],f=0;f<arguments.length;f++)u[f]=arguments[f];return i(this,void 0,void 0,(function(){return a(this,(function(i){switch(i.label){case 0:return(null==this?void 0:this.$page)||(this.$page=Object.create(null)),(null===(e=null==this?void 0:this.$page)||void 0===e?void 0:e.pageShow)||(this.$page.pageShow=[]),(null===(o=null==this?void 0:this.$page)||void 0===o?void 0:o.pageHide)||(this.$page.pageHide=[]),"show"===t&&this.$page.pageShow.push(n.value.bind(this)),"hide"===t&&this.$page.pageHide.push(n.value.bind(this)),"function"!=typeof r?[2]:[4,r.apply(this,u)];case 1:return[2,i.sent()]}}))}))}},n.lifetimes=function(e,t,n){e.lifetimes||(e.lifetimes=Object.create(null));var r=Object.getPrototypeOf(e),o=n.value;e.lifetimes[t]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return"function"!=typeof(null==r?void 0:r.created)?[3,2]:[4,r.created.apply(this,e)];case 1:t.sent(),t.label=2;case 2:return[4,o.apply(this,e)];case 3:return t.sent(),[2]}}))}))}}})),j=n((function(e,n){var r=t&&t.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=t&&t.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=t&&t.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.lifetimes=n.pageLifetime=n.method=n.MiniComponent=n.PageBase=void 0;var u=a(g),f=i(w);Object.defineProperty(n,"pageLifetime",{enumerable:!0,get:function(){return f.pageLifetime}}),Object.defineProperty(n,"lifetimes",{enumerable:!0,get:function(){return f.lifetimes}}),n.PageBase=u.default,n.MiniComponent=f.default,n.method=f.method,n.default={PageBase:n.PageBase,MiniComponent:n.MiniComponent,method:n.method,pageLifetime:f.pageLifetime,lifetimes:f.lifetimes}})),O=function(e,t){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},O(e,t)};function _(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.aom=function(){return this},function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([j.method,_("design:type",Function),_("design:paramtypes",[]),_("design:returntype","function"==typeof(n="undefined"!=typeof IComponent&&IComponent)?n:Object)],t.prototype,"aom",null),t}(d.ComponentBase);e.AliMiniComponent=j.MiniComponent,e.ComponentBase=P,e.WeappMiniComponent=d.MiniComponent,e.lifetimes=d.lifetimes,e.method=d.method,e.observer=d.observer,e.pageLifetime=d.pageLifetime,Object.defineProperty(e,"__esModule",{value:!0})}));//# sourceMappingURL=mini-program-base.js.map
