var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"jumbotron jumbotron-fluid align-middle\">\n  <div class=\"container\">\n    <h1 translate HOME.TITLE class=\"display-2\"></h1>\n    <!-- <div translate>HOME.HELLO</div> -->\n    <div>{{ 'HOME.HELLO' | translate:param }}</div>\n    <p class=\"lead\">Jumbo helper text</p>\n    <hr class=\"my-2\">\n    <p>More info</p>\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <mat-card>\n          <mat-card-content>\n            <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n              <div class=\"container-fluid\">\n                <div class=\"row\" style=\"margin-bottom: 10px;\">\n                  <div class=\"col-lg-12\">\n                    <span class=\"box\">\n                      <label class=\"single-cell\" style=\"font-size: x-large;\">\n                        Υλικά:\n                      </label>\n                      <select style=\"width: 80%; font-size: x-large;\" formControlName=\"ingredientSelection\"\n                        id=\"ingredientSelection\">\n                        <option *ngFor=\"let ingredient of ingredients let i = index\" [value]=\"ingredient.id\">\n                          {{ingredient.name}}\n                        </option>\n                      </select>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin-bottom: 10px;\">\n                  <div class=\"col-lg-4\">\n                    <input style=\"font-size: x-large;\" type=\"number\" name=\"inputUnitValue\"\n                      placeholder=\"Εισάγετε μια τιμή\" formControlName=\"inputUnitValue\">\n                  </div>\n                  <div class=\"col-lg-2\">\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <label for=\"units\"></label>\n                    <span class=\"unit\">\n                      <select formControlName=\"inputUnit\" id=\"inputUnit\" style=\"font-size: x-large;\">\n                        <option *ngFor=\"let u of units; let i = index\" [value]=\"units[i].id\">\n                          {{units[i].name}}\n                        </option>\n                      </select>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin-bottom: 10px;\">\n                  <div class=\"col-lg-4\">\n                    <button mat-flat-button color=\"primary\" type=\"submit\" style=\"font-size: x-large;\"\n                      class=\"btn btn-primary btn-lg\">Μετάτρεψε σε</button>\n                  </div>\n                  <div class=\"col-lg-2\">\n                  </div>\n\n                  <div class=\"col-lg-4\">\n                    <label for=\"units\"></label>\n                    <span class=\"unit\">\n                      <select formControlName=\"outputUnit\" id=\"outputUnit\" style=\"font-size: x-large;\">\n                        <option *ngFor=\"let u of units; let i = index\" [value]=\"units[i].id\">\n                          {{units[i].name}}\n                        </option>\n                      </select>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"col-lg-4\" style=\"font-size: xx-large;\">\n        <mat-card class=\"wrap-text\" style=\"color: white; background-color: green;\" class=\"example-card\"\n          [innerHtml]=\"htmlVariable\" [hidden]=\"hiddenVar\"></mat-card>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- \n  <div class=\"row\">\n    <mat-card class=\"example-card\">\n      <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n        <div>\n          <div>\n            <label class=\"single-cell\">\n              Υλικά:\n            </label>\n            <span class=\"box\">\n              <select formControlName=\"ingredientSelection\" id=\"ingredientSelection\">\n                <option *ngFor=\"let ingredient of ingredients let i = index\" [value]=\"ingredient.id\">\n                  {{ingredient.name}}\n                </option>\n              </select>\n            </span>\n          </div>\n          <table mat-table matSortActive=\"prod_name\" matSortDisableClear matSortDirection=\"asc\">\n\n            <tr>\n              <td><label for=\"units\"></label>\n                <span class=\"unit\">\n                  <select formControlName=\"inputUnit\" id=\"inputUnit\">\n                    <option *ngFor=\"let u of units; let i = index\" [value]=\"units[i].id\">\n                      {{units[i].name}}\n                    </option>\n                  </select>\n                </span></td>\n              <td class=\"abstract\" colspan=\"1\">\n                <input type=\"number\" name=\"inputUnitValue\" placeholder=\"Εισάγετε μια τιμή\"\n                  formControlName=\"inputUnitValue\">\n              </td>\n            </tr>\n            <tr>\n\n              <td>\n                <label for=\"units\"></label>\n                <span class=\"unit\">\n                  <select formControlName=\"outputUnit\" id=\"outputUnit\">\n                    <option *ngFor=\"let u of units; let i = index\" [value]=\"units[i].id\">\n                      {{units[i].name}}\n                    </option>\n                  </select>\n                </span>\n              </td>\n              <td class=\"abstract\">\n                <button mat-flat-button color=\"primary\" type=\"submit\" class=\"btn btn-primary\">Μετατροπή</button>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </form>\n    </mat-card>\n  </div> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* .box {\n    position: absolute;\n    padding:3% 3% 3% 3%;\n  }\n  \n  .box select {\n    background-color: #0563af;\n    color: white;\n    padding: 12px;\n    width: 250px;\n    border: none;\n    font-size: 20px;\n    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);\n    -webkit-appearance: button;\n    appearance: button;\n    outline: none;\n    padding:3% 3% 3% 3%;\n    \n  }\n  \n  .box::before {\n    content: \"\\f13a\";\n    padding:5% 5% 5% 1%;\n    font-family: FontAwesome;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20%;\n    height: 100%;\n    text-align: center;\n    font-size: 28px;\n    line-height: 45px;\n    color: rgba(255, 255, 255, 0.5);\n    background-color: rgba(255, 255, 255, 0.1);\n    pointer-events: none;\n  }\n  \n  .box:hover::before {\n    color: rgba(255, 255, 255, 0.6);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  \n  .box select option {\n    padding: 30px;\n  }\n  .unit {\n    position: absolute;\n  }\n  \n  .unit select {\n    background-color: #3b4146;\n    color: white;\n    padding: 11px;\n    width: 125px;\n    border: none;\n    font-size: 15px;\n    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);\n    -webkit-appearance: button;\n    appearance: button;\n    outline: none;\n    \n  }\n  \n  .unit::before {\n    content: \"\\f13a\";\n    font-family: FontAwesome;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 25%;\n    height: 100%;\n    text-align: center;\n    font-size: 28px;\n    line-height: 45px;\n    color: rgba(255, 255, 255, 0.5);\n    background-color: rgba(255, 255, 255, 0.1);\n    pointer-events: none;\n  }\n  \n  .unit:hover::before {\n    color: rgba(255, 255, 255, 0.6);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  \n  .unit select option {\n    padding: 30px;\n  }\n  \n.example-container {\n    position: relative;\n    padding: 5px;\n    width: 500px;\n    height: 100%\n  }\n\n  .single-cell {\n      width: 20%;\n      height:10%;\n      padding: 4% 4% 4% 8% \n  }\n\n\n  table {\n    height: 70%;\n    text-align: center;\n    margin-top: 4%;\n  }\n\n  td {\n    vertical-align: text-top;\n    width: 2%;\n    height:2%;\n  }\n\n  .mat-elevation-z8 {\n      height: 250px;\n      width: 100%;\n  }\n\n  .abstract {\n    vertical-align: text-bottom;\n  }\n\n.example-card {\n    width: 500px;\n    margin-top:1.5%;\n    text-align: center;\n    background-color: rgb(51, 143, 51);\n    font-size: 23px;\n    color: white;\n    border-radius: 0%;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUlHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzozJSAzJSAzJSAzJTtcbiAgfVxuICBcbiAgLmJveCBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTYzYWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzozJSAzJSAzJSAzJTtcbiAgICBcbiAgfVxuICBcbiAgLmJveDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjEzYVwiO1xuICAgIHBhZGRpbmc6NSUgNSUgNSUgMSU7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmJveDpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICBcbiAgLmJveCBzZWxlY3Qgb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gIC51bml0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC51bml0IHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDE0NjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgfVxuICBcbiAgLnVuaXQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxM2FcIjtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAudW5pdDpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICBcbiAgLnVuaXQgc2VsZWN0IG9wdGlvbiB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICBcbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlXG4gIH1cblxuICAuc2luZ2xlLWNlbGwge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGhlaWdodDoxMCU7XG4gICAgICBwYWRkaW5nOiA0JSA0JSA0JSA4JSBcbiAgfVxuXG5cbiAgdGFibGUge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgfVxuXG4gIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgd2lkdGg6IDIlO1xuICAgIGhlaWdodDoyJTtcbiAgfVxuXG4gIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hYnN0cmFjdCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOjEuNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTQzLCA1MSk7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbn0gKi9cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(formBuilder, dataService, translate) {
                    this.formBuilder = formBuilder;
                    this.dataService = dataService;
                    this.translate = translate;
                    this.param = { value: 'world' };
                    this.selected_ingredient = "";
                    this.selected_in_unit = "";
                    this.selected_in_unit_name = "";
                    this.selected_out_unit = "";
                    this.units = [];
                    this.unitText = "";
                    this.createContactForm();
                    console.log(this.translate.getBrowserLang());
                    console.log(this.translate.getBrowserCultureLang());
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translate.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translate.use('en');
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.htmlVariable = "";
                    this.hiddenVar = true;
                    // this.contactForm.controls.inputUnit;
                    this.units = this.getUnits();
                    this.dataService.GetIngredients().then(function (data) {
                        console.log(data.data);
                        _this.ingredients = data.data;
                        _this.selected_ingredient = _this.ingredients[0].id;
                        _this.selected_in_unit = _this.units[0].id;
                        console.log(_this.selected_in_unit);
                        _this.selected_out_unit = _this.units[1].id;
                        _this.createContactForm();
                        // this.contactForm.controls.ingredientSelection;
                    });
                };
                AppComponent.prototype.createContactForm = function () {
                    console.log(this.selected_in_unit);
                    this.contactForm = this.formBuilder.group({
                        // name: new FormControl(1),
                        inputUnitValue: [''],
                        ingredientSelection: [this.selected_ingredient],
                        inputUnit: [this.selected_in_unit],
                        outputUnit: [this.selected_out_unit],
                    });
                };
                AppComponent.prototype.getUnits = function () {
                    return [
                        { id: 'grams', name: 'γραμμάρια' },
                        { id: 'oz', name: 'oz' },
                        { id: 'cup', name: 'κούπες' },
                        { id: 'tablespoon', name: 'κ.σ.' }
                    ];
                };
                AppComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.hiddenVar = false;
                    var inputUnitValue = this.contactForm.value.inputUnitValue;
                    var ingredientSelection = this.contactForm.value.ingredientSelection;
                    var inputUnit = this.contactForm.value.inputUnit;
                    var outputUnit = this.contactForm.value.outputUnit;
                    console.log('Your form data : ', this.contactForm.value, this.hiddenVar);
                    this.dataService.Convert(ingredientSelection, inputUnit, outputUnit, inputUnitValue).then(function (response) {
                        // this.htmlVariable = response.data.result + " " + (v => v.id == this.contactForm.get('name').value)[0].name;
                        console.log('selected name', _this.units.filter(function (v) { return v.name == outputUnit; }));
                        _this.unitText = _this.units.filter(function (v) { return v.id == outputUnit; })[0].name;
                        _this.htmlVariable = response.data.result + " " + _this.unitText;
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: createTranslateLoader, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () { return createTranslateLoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            function createTranslateLoader(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                                useFactory: createTranslateLoader,
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                            }
                        })],
                    exports: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]],
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/data.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/data.service.ts ***!
          \*********************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_autogenerated_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/autogenerated/client */ "./src/autogenerated/client.ts");
            var DataService = /** @class */ (function () {
                function DataService() {
                    this.BASE_URL = "https://touti-conversions-api.azurewebsites.net";
                    this.client = new src_autogenerated_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"].Client(this.BASE_URL);
                }
                DataService.prototype.GetIngredients = function (language, apiVersion) {
                    if (language === void 0) { language = "en"; }
                    if (apiVersion === void 0) { apiVersion = "1.0"; }
                    return this.client.ingredients(language, apiVersion);
                };
                /**
                 * GetLanguages
                 */
                DataService.prototype.GetLanguages = function (apiVersion) {
                    if (apiVersion === void 0) { apiVersion = "1.0"; }
                    return this.client.languages(apiVersion);
                };
                /**
                 * Convert
                 */
                DataService.prototype.Convert = function (ingredientId, from, to, quantity, language, apiVersion) {
                    if (language === void 0) { language = "en"; }
                    if (apiVersion === void 0) { apiVersion = "1.0"; }
                    return this.client.conversions(ingredientId, from, to, quantity, language, apiVersion);
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/autogenerated/client.ts": 
        /*!*************************************!*\
          !*** ./src/autogenerated/client.ts ***!
          \*************************************/
        /*! exports provided: ApiClient */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClient", function () { return ApiClient; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* tslint:disable */
            /* eslint-disable */
            //----------------------
            // <auto-generated>
            //     Generated using the NSwag toolchain v13.1.6.0 (NJsonSchema v10.0.28.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
            // </auto-generated>
            //----------------------
            // ReSharper disable InconsistentNaming
            var ApiClient;
            (function (ApiClient) {
                var Client = /** @class */ (function () {
                    function Client(baseUrl, http) {
                        this.jsonParseReviver = undefined;
                        this.http = http ? http : window;
                        this.baseUrl = baseUrl ? baseUrl : "";
                    }
                    /**
                     * Get conversion
                     * @param from unit of measure from
                     * @param to unit of measure to
                     * @param language (optional)
                     * @param api_version The requested API version
                     * @return Success
                     */
                    Client.prototype.conversions = function (ingredientId, from, to, quantity, language, api_version) {
                        var _this = this;
                        var url_ = this.baseUrl + "/api/Conversions?";
                        if (ingredientId === undefined || ingredientId === null)
                            throw new Error("The parameter 'ingredientId' must be defined and cannot be null.");
                        else
                            url_ += "ingredientId=" + encodeURIComponent("" + ingredientId) + "&";
                        if (from === undefined || from === null)
                            throw new Error("The parameter 'from' must be defined and cannot be null.");
                        else
                            url_ += "from=" + encodeURIComponent("" + from) + "&";
                        if (to === undefined || to === null)
                            throw new Error("The parameter 'to' must be defined and cannot be null.");
                        else
                            url_ += "to=" + encodeURIComponent("" + to) + "&";
                        if (quantity === undefined || quantity === null)
                            throw new Error("The parameter 'quantity' must be defined and cannot be null.");
                        else
                            url_ += "quantity=" + encodeURIComponent("" + quantity) + "&";
                        if (language === null)
                            throw new Error("The parameter 'language' cannot be null.");
                        else if (language !== undefined)
                            url_ += "language=" + encodeURIComponent("" + language) + "&";
                        if (api_version === undefined || api_version === null)
                            throw new Error("The parameter 'api_version' must be defined and cannot be null.");
                        else
                            url_ += "api-version=" + encodeURIComponent("" + api_version) + "&";
                        url_ = url_.replace(/[?&]$/, "");
                        var options_ = {
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        };
                        return this.http.fetch(url_, options_).then(function (_response) {
                            return _this.processConversions(_response);
                        });
                    };
                    Client.prototype.processConversions = function (response) {
                        var _this = this;
                        var status = response.status;
                        var _headers = {};
                        if (response.headers && response.headers.forEach) {
                            response.headers.forEach(function (v, k) { return _headers[k] = v; });
                        }
                        ;
                        if (status === 200) {
                            return response.text().then(function (_responseText) {
                                var result200 = null;
                                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                                result200 = ConversionDTOErrorDTOResponseDTO.fromJS(resultData200);
                                return result200;
                            });
                        }
                        else if (status !== 200 && status !== 204) {
                            return response.text().then(function (_responseText) {
                                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                            });
                        }
                        return Promise.resolve(null);
                    };
                    /**
                     * Get ingredients
                     * @param language (optional)
                     * @param api_version The requested API version
                     * @return Success
                     */
                    Client.prototype.ingredients = function (language, api_version) {
                        var _this = this;
                        var url_ = this.baseUrl + "/api/Ingredients?";
                        if (language === null)
                            throw new Error("The parameter 'language' cannot be null.");
                        else if (language !== undefined)
                            url_ += "language=" + encodeURIComponent("" + language) + "&";
                        if (api_version === undefined || api_version === null)
                            throw new Error("The parameter 'api_version' must be defined and cannot be null.");
                        else
                            url_ += "api-version=" + encodeURIComponent("" + api_version) + "&";
                        url_ = url_.replace(/[?&]$/, "");
                        var options_ = {
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        };
                        return this.http.fetch(url_, options_).then(function (_response) {
                            return _this.processIngredients(_response);
                        });
                    };
                    Client.prototype.processIngredients = function (response) {
                        var _this = this;
                        var status = response.status;
                        var _headers = {};
                        if (response.headers && response.headers.forEach) {
                            response.headers.forEach(function (v, k) { return _headers[k] = v; });
                        }
                        ;
                        if (status === 200) {
                            return response.text().then(function (_responseText) {
                                var result200 = null;
                                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                                result200 = IngredientDTOListErrorDTOResponseDTO.fromJS(resultData200);
                                return result200;
                            });
                        }
                        else if (status !== 200 && status !== 204) {
                            return response.text().then(function (_responseText) {
                                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                            });
                        }
                        return Promise.resolve(null);
                    };
                    /**
                     * Get ingredients by id
                     * @param language (optional)
                     * @param api_version The requested API version
                     * @return Success
                     */
                    Client.prototype.ingredients2 = function (id, language, api_version) {
                        var _this = this;
                        var url_ = this.baseUrl + "/api/Ingredients/{id}?";
                        if (id === undefined || id === null)
                            throw new Error("The parameter 'id' must be defined.");
                        url_ = url_.replace("{id}", encodeURIComponent("" + id));
                        if (language === null)
                            throw new Error("The parameter 'language' cannot be null.");
                        else if (language !== undefined)
                            url_ += "language=" + encodeURIComponent("" + language) + "&";
                        if (api_version === undefined || api_version === null)
                            throw new Error("The parameter 'api_version' must be defined and cannot be null.");
                        else
                            url_ += "api-version=" + encodeURIComponent("" + api_version) + "&";
                        url_ = url_.replace(/[?&]$/, "");
                        var options_ = {
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        };
                        return this.http.fetch(url_, options_).then(function (_response) {
                            return _this.processIngredients2(_response);
                        });
                    };
                    Client.prototype.processIngredients2 = function (response) {
                        var _this = this;
                        var status = response.status;
                        var _headers = {};
                        if (response.headers && response.headers.forEach) {
                            response.headers.forEach(function (v, k) { return _headers[k] = v; });
                        }
                        ;
                        if (status === 200) {
                            return response.text().then(function (_responseText) {
                                var result200 = null;
                                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                                result200 = IngredientDTOErrorDTOResponseDTO.fromJS(resultData200);
                                return result200;
                            });
                        }
                        else if (status !== 200 && status !== 204) {
                            return response.text().then(function (_responseText) {
                                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                            });
                        }
                        return Promise.resolve(null);
                    };
                    /**
                     * Get languages
                     * @param api_version The requested API version
                     * @return Success
                     */
                    Client.prototype.languages = function (api_version) {
                        var _this = this;
                        var url_ = this.baseUrl + "/api/Languages?";
                        if (api_version === undefined || api_version === null)
                            throw new Error("The parameter 'api_version' must be defined and cannot be null.");
                        else
                            url_ += "api-version=" + encodeURIComponent("" + api_version) + "&";
                        url_ = url_.replace(/[?&]$/, "");
                        var options_ = {
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        };
                        return this.http.fetch(url_, options_).then(function (_response) {
                            return _this.processLanguages(_response);
                        });
                    };
                    Client.prototype.processLanguages = function (response) {
                        var _this = this;
                        var status = response.status;
                        var _headers = {};
                        if (response.headers && response.headers.forEach) {
                            response.headers.forEach(function (v, k) { return _headers[k] = v; });
                        }
                        ;
                        if (status === 200) {
                            return response.text().then(function (_responseText) {
                                var result200 = null;
                                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                                result200 = LanguageDTOListErrorDTOResponseDTO.fromJS(resultData200);
                                return result200;
                            });
                        }
                        else if (status !== 200 && status !== 204) {
                            return response.text().then(function (_responseText) {
                                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                            });
                        }
                        return Promise.resolve(null);
                    };
                    /**
                     * Get language by id
                     * @param api_version The requested API version
                     * @return Success
                     */
                    Client.prototype.languages2 = function (id, api_version) {
                        var _this = this;
                        var url_ = this.baseUrl + "/api/Languages/{id}?";
                        if (id === undefined || id === null)
                            throw new Error("The parameter 'id' must be defined.");
                        url_ = url_.replace("{id}", encodeURIComponent("" + id));
                        if (api_version === undefined || api_version === null)
                            throw new Error("The parameter 'api_version' must be defined and cannot be null.");
                        else
                            url_ += "api-version=" + encodeURIComponent("" + api_version) + "&";
                        url_ = url_.replace(/[?&]$/, "");
                        var options_ = {
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        };
                        return this.http.fetch(url_, options_).then(function (_response) {
                            return _this.processLanguages2(_response);
                        });
                    };
                    Client.prototype.processLanguages2 = function (response) {
                        var _this = this;
                        var status = response.status;
                        var _headers = {};
                        if (response.headers && response.headers.forEach) {
                            response.headers.forEach(function (v, k) { return _headers[k] = v; });
                        }
                        ;
                        if (status === 200) {
                            return response.text().then(function (_responseText) {
                                var result200 = null;
                                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                                result200 = LanguageDTOErrorDTOResponseDTO.fromJS(resultData200);
                                return result200;
                            });
                        }
                        else if (status !== 200 && status !== 204) {
                            return response.text().then(function (_responseText) {
                                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                            });
                        }
                        return Promise.resolve(null);
                    };
                    return Client;
                }());
                ApiClient.Client = Client;
                var IngredientDTO = /** @class */ (function () {
                    function IngredientDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    IngredientDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.id = _data["id"];
                            this.name = _data["name"];
                        }
                    };
                    IngredientDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new IngredientDTO();
                        result.init(data);
                        return result;
                    };
                    IngredientDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["id"] = this.id;
                        data["name"] = this.name;
                        return data;
                    };
                    return IngredientDTO;
                }());
                ApiClient.IngredientDTO = IngredientDTO;
                var ConversionDTO = /** @class */ (function () {
                    function ConversionDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    ConversionDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.ingredient = _data["ingredient"] ? IngredientDTO.fromJS(_data["ingredient"]) : undefined;
                            this.fromValue = _data["fromValue"];
                            this.fromMU = _data["fromMU"];
                            this.toMU = _data["toMU"];
                            this.result = _data["result"];
                        }
                    };
                    ConversionDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new ConversionDTO();
                        result.init(data);
                        return result;
                    };
                    ConversionDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["ingredient"] = this.ingredient ? this.ingredient.toJSON() : undefined;
                        data["fromValue"] = this.fromValue;
                        data["fromMU"] = this.fromMU;
                        data["toMU"] = this.toMU;
                        data["result"] = this.result;
                        return data;
                    };
                    return ConversionDTO;
                }());
                ApiClient.ConversionDTO = ConversionDTO;
                var ErrorDTO = /** @class */ (function () {
                    function ErrorDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    ErrorDTO.prototype.init = function (_data) {
                        if (_data) {
                            if (Array.isArray(_data["errorMessages"])) {
                                this.errorMessages = [];
                                for (var _i = 0, _a = _data["errorMessages"]; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    this.errorMessages.push(item);
                                }
                            }
                        }
                    };
                    ErrorDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new ErrorDTO();
                        result.init(data);
                        return result;
                    };
                    ErrorDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        if (Array.isArray(this.errorMessages)) {
                            data["errorMessages"] = [];
                            for (var _i = 0, _a = this.errorMessages; _i < _a.length; _i++) {
                                var item = _a[_i];
                                data["errorMessages"].push(item);
                            }
                        }
                        return data;
                    };
                    return ErrorDTO;
                }());
                ApiClient.ErrorDTO = ErrorDTO;
                var ConversionDTOErrorDTOResponseDTO = /** @class */ (function () {
                    function ConversionDTOErrorDTOResponseDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    ConversionDTOErrorDTOResponseDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.data = _data["data"] ? ConversionDTO.fromJS(_data["data"]) : undefined;
                            this.errors = _data["errors"] ? ErrorDTO.fromJS(_data["errors"]) : undefined;
                        }
                    };
                    ConversionDTOErrorDTOResponseDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new ConversionDTOErrorDTOResponseDTO();
                        result.init(data);
                        return result;
                    };
                    ConversionDTOErrorDTOResponseDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["data"] = this.data ? this.data.toJSON() : undefined;
                        data["errors"] = this.errors ? this.errors.toJSON() : undefined;
                        return data;
                    };
                    return ConversionDTOErrorDTOResponseDTO;
                }());
                ApiClient.ConversionDTOErrorDTOResponseDTO = ConversionDTOErrorDTOResponseDTO;
                var IngredientDTOListErrorDTOResponseDTO = /** @class */ (function () {
                    function IngredientDTOListErrorDTOResponseDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    IngredientDTOListErrorDTOResponseDTO.prototype.init = function (_data) {
                        if (_data) {
                            if (Array.isArray(_data["data"])) {
                                this.data = [];
                                for (var _i = 0, _a = _data["data"]; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    this.data.push(IngredientDTO.fromJS(item));
                                }
                            }
                            this.errors = _data["errors"] ? ErrorDTO.fromJS(_data["errors"]) : undefined;
                        }
                    };
                    IngredientDTOListErrorDTOResponseDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new IngredientDTOListErrorDTOResponseDTO();
                        result.init(data);
                        return result;
                    };
                    IngredientDTOListErrorDTOResponseDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        if (Array.isArray(this.data)) {
                            data["data"] = [];
                            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                                var item = _a[_i];
                                data["data"].push(item.toJSON());
                            }
                        }
                        data["errors"] = this.errors ? this.errors.toJSON() : undefined;
                        return data;
                    };
                    return IngredientDTOListErrorDTOResponseDTO;
                }());
                ApiClient.IngredientDTOListErrorDTOResponseDTO = IngredientDTOListErrorDTOResponseDTO;
                var IngredientDTOErrorDTOResponseDTO = /** @class */ (function () {
                    function IngredientDTOErrorDTOResponseDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    IngredientDTOErrorDTOResponseDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.data = _data["data"] ? IngredientDTO.fromJS(_data["data"]) : undefined;
                            this.errors = _data["errors"] ? ErrorDTO.fromJS(_data["errors"]) : undefined;
                        }
                    };
                    IngredientDTOErrorDTOResponseDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new IngredientDTOErrorDTOResponseDTO();
                        result.init(data);
                        return result;
                    };
                    IngredientDTOErrorDTOResponseDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["data"] = this.data ? this.data.toJSON() : undefined;
                        data["errors"] = this.errors ? this.errors.toJSON() : undefined;
                        return data;
                    };
                    return IngredientDTOErrorDTOResponseDTO;
                }());
                ApiClient.IngredientDTOErrorDTOResponseDTO = IngredientDTOErrorDTOResponseDTO;
                var LanguageDTO = /** @class */ (function () {
                    function LanguageDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    LanguageDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.id = _data["id"];
                            this.isoCode = _data["isoCode"];
                            this.name = _data["name"];
                        }
                    };
                    LanguageDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new LanguageDTO();
                        result.init(data);
                        return result;
                    };
                    LanguageDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["id"] = this.id;
                        data["isoCode"] = this.isoCode;
                        data["name"] = this.name;
                        return data;
                    };
                    return LanguageDTO;
                }());
                ApiClient.LanguageDTO = LanguageDTO;
                var LanguageDTOListErrorDTOResponseDTO = /** @class */ (function () {
                    function LanguageDTOListErrorDTOResponseDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    LanguageDTOListErrorDTOResponseDTO.prototype.init = function (_data) {
                        if (_data) {
                            if (Array.isArray(_data["data"])) {
                                this.data = [];
                                for (var _i = 0, _a = _data["data"]; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    this.data.push(LanguageDTO.fromJS(item));
                                }
                            }
                            this.errors = _data["errors"] ? ErrorDTO.fromJS(_data["errors"]) : undefined;
                        }
                    };
                    LanguageDTOListErrorDTOResponseDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new LanguageDTOListErrorDTOResponseDTO();
                        result.init(data);
                        return result;
                    };
                    LanguageDTOListErrorDTOResponseDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        if (Array.isArray(this.data)) {
                            data["data"] = [];
                            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                                var item = _a[_i];
                                data["data"].push(item.toJSON());
                            }
                        }
                        data["errors"] = this.errors ? this.errors.toJSON() : undefined;
                        return data;
                    };
                    return LanguageDTOListErrorDTOResponseDTO;
                }());
                ApiClient.LanguageDTOListErrorDTOResponseDTO = LanguageDTOListErrorDTOResponseDTO;
                var LanguageDTOErrorDTOResponseDTO = /** @class */ (function () {
                    function LanguageDTOErrorDTOResponseDTO(data) {
                        if (data) {
                            for (var property in data) {
                                if (data.hasOwnProperty(property))
                                    this[property] = data[property];
                            }
                        }
                    }
                    LanguageDTOErrorDTOResponseDTO.prototype.init = function (_data) {
                        if (_data) {
                            this.data = _data["data"] ? LanguageDTO.fromJS(_data["data"]) : undefined;
                            this.errors = _data["errors"] ? ErrorDTO.fromJS(_data["errors"]) : undefined;
                        }
                    };
                    LanguageDTOErrorDTOResponseDTO.fromJS = function (data) {
                        data = typeof data === 'object' ? data : {};
                        var result = new LanguageDTOErrorDTOResponseDTO();
                        result.init(data);
                        return result;
                    };
                    LanguageDTOErrorDTOResponseDTO.prototype.toJSON = function (data) {
                        data = typeof data === 'object' ? data : {};
                        data["data"] = this.data ? this.data.toJSON() : undefined;
                        data["errors"] = this.errors ? this.errors.toJSON() : undefined;
                        return data;
                    };
                    return LanguageDTOErrorDTOResponseDTO;
                }());
                ApiClient.LanguageDTOErrorDTOResponseDTO = LanguageDTOErrorDTOResponseDTO;
                var ApiException = /** @class */ (function (_super) {
                    __extends(ApiException, _super);
                    function ApiException(message, status, response, headers, result) {
                        var _this = _super.call(this) || this;
                        _this.isApiException = true;
                        _this.message = message;
                        _this.status = status;
                        _this.response = response;
                        _this.headers = headers;
                        _this.result = result;
                        return _this;
                    }
                    ApiException.isApiException = function (obj) {
                        return obj.isApiException === true;
                    };
                    return ApiException;
                }(Error));
                ApiClient.ApiException = ApiException;
                function throwException(message, status, response, headers, result) {
                    if (result !== null && result !== undefined)
                        throw result;
                    else
                        throw new ApiException(message, status, response, headers, null);
                }
            })(ApiClient || (ApiClient = {}));
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/ioannapsylla/volume-converter/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map