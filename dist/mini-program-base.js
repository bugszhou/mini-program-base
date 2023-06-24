!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mipp"),require("mipp-ali")):"function"==typeof define&&define.amd?define(["exports","mipp","mipp-ali"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).miniProgramBase={},e.mipp,e.mippAli)}(this,(function(e,t,n){"use strict";var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,o){var r,i=arguments.length,p=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(p=(i<3?r(p):i>3?r(t,n,p):r(t,n))||p);return i>3&&p&&Object.defineProperty(t,n,p),p}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function a(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var u=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.viewStatus="load",t}var o,u;return r(n,e),n.prototype.aom=function(){return this},n.prototype.isComponent=function(){return!0},n.prototype.isPage=function(){return!1},n.prototype.created=function(){for(var t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];try{this.viewStatus="load",null===(t=e.prototype.created)||void 0===t||t.call.apply(t,a([this],n,!1))}catch(e){}},n.prototype.show=function(){for(var t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];try{"ready"!==this.viewStatus&&(this.viewStatus="show"),null===(t=e.prototype.show)||void 0===t||t.call.apply(t,a([this],n,!1))}catch(e){}},n.prototype.ready=function(){for(var t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];try{this.viewStatus="ready",null===(t=e.prototype.ready)||void 0===t||t.call.apply(t,a([this],n,!1))}catch(e){}},n.prototype.isReady=function(){return"ready"===(null==this?void 0:this.viewStatus)},n.prototype.getEvents=function(){throw new TypeError("需要在子类重写: getEvents 方法")},i([t.method,p("design:type",Function),p("design:paramtypes",[]),p("design:returntype","function"==typeof(o="undefined"!=typeof IComponent&&IComponent)?o:Object)],n.prototype,"aom",null),i([t.method,p("design:type",Function),p("design:paramtypes",[]),p("design:returntype",void 0)],n.prototype,"isComponent",null),i([t.method,p("design:type",Function),p("design:paramtypes",[]),p("design:returntype",void 0)],n.prototype,"isPage",null),i([t.lifetime,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],n.prototype,"created",null),i([t.lifetime,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],n.prototype,"show",null),i([t.lifetime,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],n.prototype,"ready",null),i([t.method,p("design:type",Function),p("design:paramtypes",[]),p("design:returntype",void 0)],n.prototype,"isReady",null),i([t.method,p("design:type",Function),p("design:paramtypes",[]),p("design:returntype","function"==typeof(u="undefined"!=typeof IEvent&&IEvent)?u:Object)],n.prototype,"getEvents",null),n}(t.ComponentBase);var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.viewStatus="load",t}return r(t,e),t.prototype.isComponent=function(){return!1},t.prototype.isPage=function(){return!0},t.prototype.onLoad=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{this.viewStatus="load","function"==typeof e.prototype.onLoad&&e.prototype.onLoad.apply(this,t)}catch(e){}},t.prototype.onShow=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{"ready"!==this.viewStatus&&(this.viewStatus="show"),"function"==typeof e.prototype.onShow&&e.prototype.onShow.apply(this,t)}catch(e){}},t.prototype.onReady=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{this.viewStatus="ready","function"==typeof e.prototype.onReady&&e.prototype.onReady.apply(this,t)}catch(e){}},t.prototype.isReady=function(){return"ready"===(null==this?void 0:this.viewStatus)},t.prototype.getEvents=function(){throw new TypeError("需要在子类重写: getEvents 方法")},t}(t.PageBase);Object.defineProperty(e,"MiniComponent",{enumerable:!0,get:function(){return t.MiniComponent}}),Object.defineProperty(e,"WeappMiniComponent",{enumerable:!0,get:function(){return t.MiniComponent}}),Object.defineProperty(e,"lifetimes",{enumerable:!0,get:function(){return t.lifetimes}}),Object.defineProperty(e,"method",{enumerable:!0,get:function(){return t.method}}),Object.defineProperty(e,"pageLifetime",{enumerable:!0,get:function(){return t.pageLifetime}}),Object.defineProperty(e,"AliMiniComponent",{enumerable:!0,get:function(){return n.MiniComponent}}),Object.defineProperty(e,"AliappPageBase",{enumerable:!0,get:function(){return n.PageBase}}),e.ComponentBase=u,e.MiniProgramComponent=function(e){var n=new e;t.ComponentBase.render(n)},e.MiniProgramPage=function(e){var n=new e;n.__serialNumber=Date.now().toString(32)+Math.random().toString(32).substring(2),t.PageBase.render(n)},e.PageBase=s,e.WeappPageBase=s,e.observer=function(e){return t.observer},Object.defineProperty(e,"__esModule",{value:!0})}));//# sourceMappingURL=mini-program-base.js.map
