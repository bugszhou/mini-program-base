import { method, lifetimes, ComponentBase as ComponentBase$1, PageBase, observer as observer$1 } from 'mipp';
export { MiniComponent, MiniComponent as WeappMiniComponent, lifetimes, method, pageLifetime } from 'mipp';
export { MiniComponent as AliMiniComponent, PageBase as AliappPageBase } from 'mipp-ali';

/******************************************************************************
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
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewStatus = "load";
        return _this;
    }
    ComponentBase.prototype.aom = function () {
        return this;
    };
    ComponentBase.prototype.created = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            this.viewStatus = "load";
            if (typeof _super.prototype.created === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.created.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    ComponentBase.prototype.show = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            if (this.viewStatus !== "ready") {
                this.viewStatus = "show";
            }
            if (typeof _super.prototype.show === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.show.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    ComponentBase.prototype.ready = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            this.viewStatus = "ready";
            if (typeof _super.prototype.ready === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.ready.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    ComponentBase.prototype.isReady = function () {
        return (this === null || this === void 0 ? void 0 : this.viewStatus) === "ready";
    };
    ComponentBase.prototype.getEvents = function () {
        throw new TypeError("需要在子类重写: getEvents 方法");
    };
    var _a, _b;
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_a = typeof IComponent !== "undefined" && IComponent) === "function" ? _a : Object)
    ], ComponentBase.prototype, "aom", null);
    __decorate([
        lifetimes,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "created", null);
    __decorate([
        lifetimes,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "show", null);
    __decorate([
        lifetimes,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "ready", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "isReady", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_b = typeof IEvent !== "undefined" && IEvent) === "function" ? _b : Object)
    ], ComponentBase.prototype, "getEvents", null);
    return ComponentBase;
}(ComponentBase$1));

function generateRandomString() {
    return Date.now().toString(32) + Math.random().toString(32).substring(2);
}

function MiniProgramPage(target) {
    var obj = new target();
    obj.__serialNumber = generateRandomString();
    PageBase.render(obj);
}

function MiniProgramComponent(target) {
    var obj = new target();
    ComponentBase$1.render(obj);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function observer(key) {
    return observer$1;
}
var ViewBase = /** @class */ (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewStatus = "load";
        return _this;
    }
    ViewBase.prototype.onLoad = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            this.viewStatus = "load";
            if (typeof _super.prototype.onLoad === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.onLoad.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    ViewBase.prototype.onShow = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            if (this.viewStatus !== "ready") {
                this.viewStatus = "show";
            }
            if (typeof _super.prototype.onShow === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.onShow.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    ViewBase.prototype.onReady = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            this.viewStatus = "ready";
            if (typeof _super.prototype.onReady === "function") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _super.prototype.onReady.apply(this, opts);
            }
        }
        catch (_a) { }
    };
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    ViewBase.prototype.isReady = function () {
        return (this === null || this === void 0 ? void 0 : this.viewStatus) === "ready";
    };
    ViewBase.prototype.getEvents = function () {
        throw new TypeError("需要在子类重写: getEvents 方法");
    };
    return ViewBase;
}(PageBase));

export { ComponentBase, MiniProgramComponent, MiniProgramPage, ViewBase as PageBase, ViewBase as WeappPageBase, observer };
//# sourceMappingURL=mini-program-base.es.js.map
