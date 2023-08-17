import { ComponentBase as ComponentBase$1, method, PageBase, observer as observer$1 } from 'mipp';
export { MiniComponent, MiniComponent as WeappMiniComponent, extendLifetime, lifetime, lifetimes, method, pageLifetime } from 'mipp';
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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

ComponentBase$1.before = function () {
    var _a, _b;
    return (_b = (_a = ComponentBase === null || ComponentBase === void 0 ? void 0 : ComponentBase.before) === null || _a === void 0 ? void 0 : _a.call(ComponentBase)) !== null && _b !== void 0 ? _b : Object.create(null);
};
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewStatus = "load";
        _this.pageViewIns = null;
        return _this;
    }
    ComponentBase.before = function () {
        return Object.create(null);
    };
    ComponentBase.prototype.aom = function () {
        return this;
    };
    ComponentBase.prototype.isComponent = function () {
        return true;
    };
    ComponentBase.prototype.isPage = function () {
        return false;
    };
    ComponentBase.prototype.getPageViewIns = function () {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.pageViewIns) !== null && _a !== void 0 ? _a : null;
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
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "isComponent", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "isPage", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComponentBase.prototype, "getPageViewIns", null);
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
PageBase.before = function () {
    var _a, _b;
    return (_b = (_a = ViewBase === null || ViewBase === void 0 ? void 0 : ViewBase.before) === null || _a === void 0 ? void 0 : _a.call(ViewBase)) !== null && _b !== void 0 ? _b : Object.create(null);
};
var ViewBase = /** @class */ (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewStatus = "load";
        _this.myComponents = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _this.viewOptions = {};
        return _this;
    }
    ViewBase.before = function () {
        return Object.create(null);
    };
    ViewBase.prototype.isComponent = function () {
        return false;
    };
    ViewBase.prototype.isPage = function () {
        return true;
    };
    ViewBase.prototype.getComponents = function () {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.myComponents) !== null && _a !== void 0 ? _a : [];
    };
    ViewBase.prototype.getViewOptions = function () {
        var _a;
        return (_a = this.viewOptions) !== null && _a !== void 0 ? _a : Object.create(null);
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
    ViewBase.prototype.beforeOnLoad = function () {
        var _a, _b;
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        try {
            this.viewOptions = (_a = opts === null || opts === void 0 ? void 0 : opts[0]) !== null && _a !== void 0 ? _a : Object.create(null);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (_b = _super.prototype.beforeOnLoad) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([this], opts, false));
        }
        catch (_c) { }
    };
    return ViewBase;
}(PageBase));

export { ComponentBase, MiniProgramComponent, MiniProgramPage, ViewBase as PageBase, ViewBase as WeappPageBase, observer };
//# sourceMappingURL=mini-program-base.es.js.map
