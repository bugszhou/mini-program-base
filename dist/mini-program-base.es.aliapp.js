export { MiniComponent as WeappMiniComponent, PageBase as WeappPageBase } from 'mipp';
import { method, ComponentBase as ComponentBase$1, MiniPage } from 'mipp-ali';
export { MiniComponent as AliMiniComponent, MiniComponent, lifetimes, method, pageLifetime } from 'mipp-ali';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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

var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentBase.prototype.aom = function () {
        return this;
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
        __metadata("design:returntype", typeof (_b = typeof IEvent !== "undefined" && IEvent) === "function" ? _b : Object)
    ], ComponentBase.prototype, "getEvents", null);
    return ComponentBase;
}(ComponentBase$1));

var OBSERVER_TYPE;
(function (OBSERVER_TYPE) {
    OBSERVER_TYPE["DATA"] = "data";
    OBSERVER_TYPE["PROPS"] = "props";
    OBSERVER_TYPE["ALL"] = "all";
    OBSERVER_TYPE["UNKNOWN"] = "unknown";
})(OBSERVER_TYPE || (OBSERVER_TYPE = {}));
/**
 * 监听Props的变化, for 监听函数
 * 参考微信文档进行实现：
 * https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
 * 为明确触发的字段来自props还是data，监听函数的入参除了依顺序提供监听字段的当前值，也会依顺序提供监听字段可能的参考来源
 * 具体类型可参考OBSERVER_TYPE
 */
function observer(key) {
    return function closureFn(target, property, descriptor) {
        var fn = descriptor.value;
        var subscribeKey = key || property;
        if (!target._propsSubscribeMap) {
            target._propsSubscribeMap = {};
            // didMount 监听
            var mountPublisher_1 = target.didMount;
            target.didMount = function newDidMount() {
                var mountArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    mountArgs[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var subscribeMap, result, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                subscribeMap = target._propsSubscribeMap || {};
                                checkSubscribe({
                                    context: this,
                                    subscribeMap: subscribeMap,
                                    forceEmit: true,
                                });
                                if (!(typeof mountPublisher_1 === "function")) return [3 /*break*/, 2];
                                return [4 /*yield*/, mountPublisher_1.call.apply(mountPublisher_1, __spreadArray([this], mountArgs, false))];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                            case 2: return [3 /*break*/, 4];
                            case 3:
                                e_1 = _a.sent();
                                throw e_1;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            // didUpdate 监听
            var updatePublisher_1 = target.didUpdate;
            target.didUpdate = function newDidUpdate(prevProps, prevData) {
                return __awaiter(this, void 0, void 0, function () {
                    var subscribeMap, result, e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                subscribeMap = target._propsSubscribeMap || {};
                                checkSubscribe({
                                    context: this,
                                    subscribeMap: subscribeMap,
                                    forceEmit: false,
                                    prevProps: prevProps,
                                    prevData: prevData,
                                });
                                if (!(typeof updatePublisher_1 === "function")) return [3 /*break*/, 2];
                                return [4 /*yield*/, updatePublisher_1.call(this, prevProps, prevData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                            case 2: return [3 /*break*/, 4];
                            case 3:
                                e_2 = _a.sent();
                                throw e_2;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        }
        if (!target._propsSubscribeMap[subscribeKey]) {
            target._propsSubscribeMap[subscribeKey] = [];
        }
        target._propsSubscribeMap[subscribeKey].push(fn);
    };
}
function checkSubscribe(_a) {
    var context = _a.context, subscribeMap = _a.subscribeMap, _b = _a.forceEmit, forceEmit = _b === void 0 ? false : _b, _c = _a.prevProps, prevProps = _c === void 0 ? {} : _c, _d = _a.prevData, prevData = _d === void 0 ? {} : _d;
    Object.keys(subscribeMap).forEach(function (mapKey) {
        var _a;
        var observerKeys = mapKey === null || mapKey === void 0 ? void 0 : mapKey.split(",").map(function (key) { return key === null || key === void 0 ? void 0 : key.replace(".**", "").trim(); });
        var fnParams = observerKeys === null || observerKeys === void 0 ? void 0 : observerKeys.map(function (key) {
            if (!key) {
                return {
                    value: undefined,
                    changed: false,
                    type: OBSERVER_TYPE.UNKNOWN,
                };
            }
            // 通配符触发所有监听
            if (key === "**") {
                return {
                    value: undefined,
                    changed: true,
                    type: OBSERVER_TYPE.ALL,
                };
            }
            var prevPropsValue = get(prevProps, key);
            var propsValue = get(context === null || context === void 0 ? void 0 : context.props, key);
            var prevDataValue = get(prevData, key);
            var dataValue = get(context === null || context === void 0 ? void 0 : context.data, key);
            // 优先检查props变化
            if (!isEqual(prevPropsValue, propsValue)) {
                return {
                    value: propsValue,
                    changed: true,
                    type: OBSERVER_TYPE.PROPS,
                };
            }
            // 检查data变化
            if (!isEqual(prevDataValue, dataValue)) {
                return {
                    value: dataValue,
                    changed: true,
                    type: OBSERVER_TYPE.DATA,
                };
            }
            // 处理不变化时的数据讨论
            var type = OBSERVER_TYPE.UNKNOWN;
            var value = undefined;
            if (typeof propsValue !== "undefined") {
                type = OBSERVER_TYPE.PROPS;
                value = propsValue;
            }
            else if (typeof dataValue !== "undefined") {
                type = OBSERVER_TYPE.DATA;
                value = dataValue;
            }
            return {
                value: value,
                changed: false,
                type: type,
            };
        });
        if (!forceEmit && fnParams.every(function (params) { return !(params === null || params === void 0 ? void 0 : params.changed); }))
            return;
        (_a = subscribeMap[mapKey]) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
            var _a;
            (_a = fn === null || fn === void 0 ? void 0 : fn.call) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray(__spreadArray([fn, context], fnParams.map(function (param) { return param === null || param === void 0 ? void 0 : param.value; }), false), fnParams.map(function (param) { return param === null || param === void 0 ? void 0 : param.type; }), false));
        });
    });
}

function generateRandomString() {
    return Date.now().toString(32) + Math.random().toString(32).substring(2);
}

function MiniProgramPage(target) {
    var obj = new target();
    obj.__serialNumber = generateRandomString();
    MiniPage.render(obj);
}

function MiniProgramComponent(target) {
    var obj = new target();
    ComponentBase$1.render(obj);
}

var ViewBase = /** @class */ (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewBase.prototype.getEvents = function () {
        throw new TypeError("需要在子类重写: getEvents 方法");
    };
    return ViewBase;
}(MiniPage));

export { ViewBase as AliappPageBase, ComponentBase, MiniProgramComponent, MiniProgramPage, ViewBase as PageBase, observer };
//# sourceMappingURL=mini-program-base.es.aliapp.js.map
