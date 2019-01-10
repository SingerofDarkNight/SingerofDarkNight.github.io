(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-main.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-main.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21haW4vYWRtaW4tbWFpbi9hZG1pbi1tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-main.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-main.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n    <nz-sider>\n        <bbuhot-admin-sider [siderArr]=\"this.siderArr\"></bbuhot-admin-sider>\n    </nz-sider>\n    <nz-content>Content</nz-content>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-main.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-main.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainComponent", function() { return AdminMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sider_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sider.models */ "./src/app/admin/main/admin-main/models/sider.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMainComponent = /** @class */ (function () {
    function AdminMainComponent() {
        this.setupSider();
    }
    AdminMainComponent.prototype.setupSider = function () {
        var sider1 = new _models_sider_models__WEBPACK_IMPORTED_MODULE_1__["SiderModels"]('竞猜管理', 'diff');
        var sider2 = new _models_sider_models__WEBPACK_IMPORTED_MODULE_1__["SiderModels"]('干他妈的熊猫头', 'calendar');
        this.siderArr = new Array();
        this.siderArr.push(sider1);
        this.siderArr.push(sider2);
    };
    AdminMainComponent.prototype.ngOnInit = function () { };
    AdminMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-admin-main',
            template: __webpack_require__(/*! ./admin-main.component.html */ "./src/app/admin/main/admin-main/admin-main.component.html"),
            styles: [__webpack_require__(/*! ./admin-main.component.css */ "./src/app/admin/main/admin-main/admin-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminMainComponent);
    return AdminMainComponent;
}());



/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-main.module.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-main.module.ts ***!
  \************************************************************/
/*! exports provided: AdminMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainModule", function() { return AdminMainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _admin_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-main.component */ "./src/app/admin/main/admin-main/admin-main.component.ts");
/* harmony import */ var _admin_sider_admin_sider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-sider/admin-sider.component */ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminMainModule = /** @class */ (function () {
    function AdminMainModule() {
    }
    AdminMainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_main_component__WEBPACK_IMPORTED_MODULE_3__["AdminMainComponent"], _admin_sider_admin_sider_component__WEBPACK_IMPORTED_MODULE_4__["AdminSiderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]]
        })
    ], AdminMainModule);
    return AdminMainModule;
}());



/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-sider/admin-sider.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21haW4vYWRtaW4tbWFpbi9hZG1pbi1zaWRlci9hZG1pbi1zaWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-sider/admin-sider.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" nzTheme='dark'>\n  <li *ngFor=\"let sider of siderArr\" nz-menu-item>\n    <span title>\n      <i nz-icon type=\"{{ sider.icon }}\" theme=\"fill\"></i>\n      <span>{{ sider.title }}</span>\n    </span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/main/admin-main/admin-sider/admin-sider.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminSiderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSiderComponent", function() { return AdminSiderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSiderComponent = /** @class */ (function () {
    function AdminSiderComponent() {
    }
    AdminSiderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AdminSiderComponent.prototype, "siderArr", void 0);
    AdminSiderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-admin-sider',
            template: __webpack_require__(/*! ./admin-sider.component.html */ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.html"),
            styles: [__webpack_require__(/*! ./admin-sider.component.css */ "./src/app/admin/main/admin-main/admin-sider/admin-sider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSiderComponent);
    return AdminSiderComponent;
}());



/***/ }),

/***/ "./src/app/admin/main/admin-main/models/sider.models.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/main/admin-main/models/sider.models.ts ***!
  \**************************************************************/
/*! exports provided: SiderModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiderModels", function() { return SiderModels; });
var SiderModels = /** @class */ (function () {
    function SiderModels(title, icon) {
        this.title = title;
        this.icon = icon;
        this.title = title;
        this.icon = icon;
    }
    return SiderModels;
}());



/***/ }),

/***/ "./src/app/api/api-service.ts":
/*!************************************!*\
  !*** ./src/app/api/api-service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _proto_bbuhot_service_auth_pb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proto/bbuhot/service/auth_pb */ "./src/app/proto/bbuhot/service/auth_pb.js");
/* harmony import */ var _proto_bbuhot_service_auth_pb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_proto_bbuhot_service_auth_pb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proto/bbuhot/service/game_pb */ "./src/app/proto/bbuhot/service/game_pb.js");
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService_1 = ApiService;
    ApiService.prototype.callServiceImpl = function (input, path, transform) {
        return this.http.request(new ApiService_1.MessageHttpRequest(path, input)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (httpEvent) {
            return httpEvent.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (httpEvent) {
            if (httpEvent instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                return transform(httpEvent.body);
            }
            else {
                throw new Error(JSON.stringify(httpEvent));
            }
        }));
    };
    ApiService.prototype.listGames = function (listGameRequest) {
        return this.callServiceImpl(listGameRequest, '/api/bet/list_game', _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_4__["ListGameReply"].deserializeBinary);
    };
    ApiService.prototype.userLogin = function (authRequest) {
        return this.callServiceImpl(authRequest, '/api/auth', _proto_bbuhot_service_auth_pb__WEBPACK_IMPORTED_MODULE_3__["AuthReply"].deserializeBinary);
    };
    var ApiService_1;
    ApiService.MessageHttpRequest = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(url, message) {
            return _super.call(this, 'POST', url, message.serializeBinary().buffer, {
                responseType: 'arraybuffer',
                withCredentials: true
            }) || this;
        }
        return class_1;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]));
    ApiService = ApiService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/api/api-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _admin_main_admin_main_admin_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/main/admin-main/admin-main.module */ "./src/app/admin/main/admin-main/admin-main.module.ts");
/* harmony import */ var _competition_competition_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competition/competition.module */ "./src/app/competition/competition.module.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _leader_board_leader_board_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leader-board/leader-board.module */ "./src/app/leader-board/leader-board.module.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _wayne_wayne_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wayne/wayne.module */ "./src/app/wayne/wayne.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
                _competition_competition_module__WEBPACK_IMPORTED_MODULE_6__["CompetitionModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_7__["HomepageModule"],
                _leader_board_leader_board_module__WEBPACK_IMPORTED_MODULE_8__["LeaderBoardModule"],
                _wayne_wayne_module__WEBPACK_IMPORTED_MODULE_11__["WayneModule"],
                _admin_main_admin_main_admin_main_module__WEBPACK_IMPORTED_MODULE_5__["AdminMainModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["zh_CN"] }],
            bootstrap: [_routing_routing_component__WEBPACK_IMPORTED_MODULE_9__["RoutingComponent"]],
            declarations: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competition/betting-card/betting-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/competition/betting-card/betting-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n}\n.card-bg {\n    width:350px;\n    height:184px;\n    background:rgba(255,255,255,1);\n    box-shadow:6px 6px 10px 4px rgba(216,214,214,0.5);\n}\n.card-title {\n    line-height: 53px;\n    display: flex;\n    height: 53px;\n    background:rgba(255,255,255,1);\n}\n.card-label {\n    /* width:73px;\n    height:30px; */\n    flex:1;\n    text-align: right;\n    margin-top: 12px;\n    padding-right: 5px;\n    font-size:22px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n    line-height:30px;\n    letter-spacing:2px;\n}\n.card-status-wrapper {\n    flex:1;\n}\n.card-status {\n    width:80px;\n    height: 20px;\n    margin-top: 18px;\n    line-height: 20px;\n    border-radius:50px;\n    font-size:14px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(255,255,255,1);\n    letter-spacing:1px;\n}\n.card-status-doing {\n    background:rgba(251,13,13,1);\n}\n.card-status-todo {\n    background:rgba(60,203,89,1);\n}\n.card-status-done {\n    background:rgba(102,102,102,1);\n}\n.card-horizontal_spliter {\n    height:1px;\n    border:1px solid rgba(238,238,238,1);\n}\n.team-wrapper {\n    display: flex;\n    margin-top: 1px;\n    background:rgba(255,255,255,0);\n}\n.card-vertical_spliter {\n    width:1px;\n    margin-top: -1px;\n    height: 128px;\n    border:1px solid rgba(238,238,238,1);\n}\n.team-item {\n    position: relative;\n    flex: 1;\n    height:127px;\n}\n.team-left {\n    width:174px;\n}\n.team-right {\n    width:176px;\n}\n.team-item-victory-tag {\n    width:0px;\n    height:0px;\n    border-style:solid;\n    border-width: 17px;\n    border-color:transparent;\n    border-top-color:rgba(251,13,13,1);\n    border-right-color:rgba(251,13,13,1);\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n.team-item-victory-tag-font {\n    font-size:12px;\n    transform:rotate(45deg) translate(-12px,-15px);\n    -ms-transform:rotate(45deg) translate(-12px,-15px); /* IE 9 */\n    -moz-transform:rotate(45deg) translate(-12px,-15px); /* Firefox */\n    -webkit-transform:rotate(45deg) translate(-12px,-15px); /* Safari and Chrome */\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(255,255,255,1);\n    line-height:17px;\n    letter-spacing:1px;\n}\n.team-ratio {\n    margin: auto;\n    margin-top: 21px;\n    width:101px;\n    height:46px;\n    box-shadow:0px 2px 4px 0px rgba(31,29,28,0.6);\n    border-radius:4px;\n    font-size:22px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(255,255,255,1);\n    line-height:46px;\n    letter-spacing:2px;\n    cursor: pointer;\n}\n.team-ratio-left{\n    background:rgba(34,30,30,1);\n}\n.team-ratio-left-done{\n    background:rgba(143,143,143,1);\n    cursor: not-allowed;\n}\n.team-ratio-right{\n    background: rgba(60,51,99,1);\n}\n.team-ratio-right-done{\n    background:rgba(138,132,166,1);\n    cursor: not-allowed;\n}\n.team-team_name {\n    margin: auto;\n    margin-top: 14px;\n    width:95px;\n    height:25px;\n    font-size:18px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n    line-height:25px;\n    letter-spacing:2px;\n}\n.team-active_indicator {\n    border-bottom: 5px solid rgba(62,209,83,1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb24vYmV0dGluZy1jYXJkL2JldHRpbmctY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0RBQWtEO0NBQ3JEO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJO21CQUNlO0lBQ2YsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxPQUFPO0NBQ1Y7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksV0FBVztJQUNYLHFDQUFxQztDQUN4QztBQUNEO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFDQUFxQztDQUN4QztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsT0FBTztDQUNWO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLG1EQUFtRCxDQUFDLFVBQVU7SUFDOUQsb0RBQW9ELENBQUMsYUFBYTtJQUNsRSx1REFBdUQsQ0FBQyx1QkFBdUI7SUFDL0UsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLCtCQUErQjtJQUMvQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDZCQUE2QjtDQUNoQztBQUNEO0lBQ0ksK0JBQStCO0lBQy9CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSwyQ0FBMkM7Q0FDOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wZXRpdGlvbi9iZXR0aW5nLWNhcmQvYmV0dGluZy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5jYXJkLWJnIHtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MTg0cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJveC1zaGFkb3c6NnB4IDZweCAxMHB4IDRweCByZ2JhKDIxNiwyMTQsMjE0LDAuNSk7XG59XG4uY2FyZC10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xufVxuLmNhcmQtbGFiZWwge1xuICAgIC8qIHdpZHRoOjczcHg7XG4gICAgaGVpZ2h0OjMwcHg7ICovXG4gICAgZmxleDoxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgIGZvbnQtZmFtaWx5OlBpbmdGYW5nU0MtU2VtaWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOnJnYmEoNTEsNTEsNTEsMSk7XG4gICAgbGluZS1oZWlnaHQ6MzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzoycHg7XG59XG4uY2FyZC1zdGF0dXMtd3JhcHBlciB7XG4gICAgZmxleDoxO1xufVxuLmNhcmQtc3RhdHVzIHtcbiAgICB3aWR0aDo4MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cbi5jYXJkLXN0YXR1cy1kb2luZyB7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MSwxMywxMywxKTtcbn1cbi5jYXJkLXN0YXR1cy10b2RvIHtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoNjAsMjAzLDg5LDEpO1xufVxuLmNhcmQtc3RhdHVzLWRvbmUge1xuICAgIGJhY2tncm91bmQ6cmdiYSgxMDIsMTAyLDEwMiwxKTtcbn1cbi5jYXJkLWhvcml6b250YWxfc3BsaXRlciB7XG4gICAgaGVpZ2h0OjFweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjM4LDIzOCwyMzgsMSk7XG59XG4udGVhbS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMCk7XG59XG4uY2FyZC12ZXJ0aWNhbF9zcGxpdGVyIHtcbiAgICB3aWR0aDoxcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgyMzgsMjM4LDIzOCwxKTtcbn1cbi50ZWFtLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDoxMjdweDtcbn1cbi50ZWFtLWxlZnQge1xuICAgIHdpZHRoOjE3NHB4O1xufVxuLnRlYW0tcmlnaHQge1xuICAgIHdpZHRoOjE3NnB4O1xufVxuLnRlYW0taXRlbS12aWN0b3J5LXRhZyB7XG4gICAgd2lkdGg6MHB4O1xuICAgIGhlaWdodDowcHg7XG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMTdweDtcbiAgICBib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjpyZ2JhKDI1MSwxMywxMywxKTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6cmdiYSgyNTEsMTMsMTMsMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbn1cbi50ZWFtLWl0ZW0tdmljdG9yeS10YWctZm9udCB7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0xMnB4LC0xNXB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0xMnB4LC0xNXB4KTsgLyogSUUgOSAqL1xuICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0xMnB4LC0xNXB4KTsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0xMnB4LC0xNXB4KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGxpbmUtaGVpZ2h0OjE3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xufVxuLnRlYW0tcmF0aW8ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgIHdpZHRoOjEwMXB4O1xuICAgIGhlaWdodDo0NnB4O1xuICAgIGJveC1zaGFkb3c6MHB4IDJweCA0cHggMHB4IHJnYmEoMzEsMjksMjgsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGxpbmUtaGVpZ2h0OjQ2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6MnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZWFtLXJhdGlvLWxlZnR7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDM0LDMwLDMwLDEpO1xufSAgIFxuLnRlYW0tcmF0aW8tbGVmdC1kb25le1xuICAgIGJhY2tncm91bmQ6cmdiYSgxNDMsMTQzLDE0MywxKTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnRlYW0tcmF0aW8tcmlnaHR7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2MCw1MSw5OSwxKTtcbn1cbi50ZWFtLXJhdGlvLXJpZ2h0LWRvbmV7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDEzOCwxMzIsMTY2LDEpO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4udGVhbS10ZWFtX25hbWUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIHdpZHRoOjk1cHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1TZW1pYm9sZDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6cmdiYSg1MSw1MSw1MSwxKTtcbiAgICBsaW5lLWhlaWdodDoyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOjJweDtcbn1cblxuLnRlYW0tYWN0aXZlX2luZGljYXRvciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoNjIsMjA5LDgzLDEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/competition/betting-card/betting-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/competition/betting-card/betting-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-bg\">\n    <div class=\"card-title\">\n        <div class=\"card-label\">{{quiz.name}}</div>\n        <div class=\"card-status-wrapper\">\n            <div [ngClass]=\"getStatusStyle()\">\n                <div class=\"card-statut-font\">\n                    {{getStatusName()}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-horizontal_spliter\"></div>\n    <div class=\"team-wrapper\">\n        <div class=\"team-item team-left team-active_indicator\" (click)=\"onItemClick($event, 'left')\">\n            <div *ngIf=\"isWin('left')\" class=\"team-item-victory-tag\">\n                <div class=\"team-item-victory-tag-font\">\n                    胜\n                </div>\n            </div>\n            <div [ngClass]=\"getRatioLabelStyle('left')\">{{quiz.teamLeft.ratio}}</div>\n            <div class=\"team-team_name\">{{quiz.teamLeft.teamName}}</div>\n        </div>\n        <div class=\"card-vertical_spliter\"></div>\n        <div class=\"team-item team-right\" (click)=\"onItemClick($event, 'right')\">\n            <div *ngIf=\"isWin('right')\" class=\"team-item-victory-tag\">\n                <div class=\"team-item-victory-tag-font\">\n                    胜\n                </div>\n            </div>\n            <div [ngClass]=\"getRatioLabelStyle('right')\">{{quiz.teamRight.ratio}}</div>\n            <div class=\"team-team_name\">{{quiz.teamRight.teamName}}</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/competition/betting-card/betting-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/competition/betting-card/betting-card.component.ts ***!
  \********************************************************************/
/*! exports provided: BettingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BettingCardComponent", function() { return BettingCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quiz */ "./src/app/competition/models/quiz.ts");
/* harmony import */ var _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/team-ratio */ "./src/app/competition/models/team-ratio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BettingCardComponent = /** @class */ (function () {
    function BettingCardComponent() {
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BettingCardComponent.prototype.getStatusStyle = function () {
        var _a;
        return _a = {},
            _a['card-status'] = true,
            _a['card-status-doing'] = this.quiz.status === _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DOING,
            _a['card-status-todo'] = this.quiz.status === _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_TODO,
            _a['card-status-done'] = this.quiz.status === _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE,
            _a;
    };
    BettingCardComponent.prototype.getRatioLabelStyle = function (position) {
        var _a;
        return _a = {},
            _a['team-ratio'] = true,
            _a["team-ratio-" + position + (this.quiz.status === _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE ? '-done' : '')] = true,
            _a;
    };
    BettingCardComponent.prototype.onItemClick = function ($event, position) {
        if (this.quiz.status !== _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE) {
            this.clickEvent.emit({
                $event: $event,
                team: this["team" + (position.charAt(0).toUpperCase() + position.slice(1))],
                quiz: this.quiz
            });
        }
        else {
            return;
        }
    };
    BettingCardComponent.prototype.isWin = function (position) {
        return this.quiz.result === position && this.quiz.status === _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE;
    };
    BettingCardComponent.prototype.getStatusName = function () {
        switch (this.quiz.status) {
            case _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DOING:
                return '进行中';
            case _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE:
                return '已完成';
            case _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_TODO:
                return '未开始';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"])
    ], BettingCardComponent.prototype, "quiz", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"])
    ], BettingCardComponent.prototype, "teamLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"])
    ], BettingCardComponent.prototype, "teamRight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BettingCardComponent.prototype, "clickEvent", void 0);
    BettingCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-betting-card',
            template: __webpack_require__(/*! ./betting-card.component.html */ "./src/app/competition/betting-card/betting-card.component.html"),
            styles: [__webpack_require__(/*! ./betting-card.component.css */ "./src/app/competition/betting-card/betting-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BettingCardComponent);
    return BettingCardComponent;
}());



/***/ }),

/***/ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/competition/betting-footer-bar/betting-footer-bar.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root { }\n.footer-chip-alert {\n    background:rgba(255,255,255,1);\n    box-shadow:6px 6px 10px 4px rgba(216,214,214,0.5);\n    padding-left: 20px;\n    line-height: 80px;\n    height: 80px;\n    font-size:22px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n    letter-spacing:1px;\n    margin-bottom: 38px;\n    display: flex;\n}\n.footer-chip-container {\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    background: rgba(255,255,255,1);\n    box-shadow: 6px 6px 10px 4px rgba(216, 214, 214, 0.5);\n    line-height: 80px;\n}\n.footer-chip-label {\n    width: 560px;\n    font-size: 22px;\n    font-family: PingFangSC-Semibold;\n    font-weight: 600;\n    color: rgba(51, 51, 51, 1);\n    line-height: 30px;\n    margin: auto 0;\n    letter-spacing: 1px;\n}\n.footer-chip-input {\n    padding-left: 11px;\n    margin: auto 0;\n    margin-left: 22px;\n    width: 349px;\n    height: 48px;\n    background: rgba(255, 255, 255, 1);\n    border-radius: 4px;\n    border: 1px solid rgba(198, 198, 198, 1);\n}\n.footer-chip-input::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    height: 22px;\n    font-size: 16px;\n    font-family: PingFangSC-Light;\n    font-weight: 300;\n    color: rgba(153, 153, 153, 1);\n    line-height: 22px;\n    letter-spacing: 1px;\n}\n.footer-chip-confirm {\n    margin: auto 0;\n    margin-left: 30px;\n    width: 101px;\n    height: 46px;\n    line-height: 46px;\n    text-align: center;\n    /* background: rgba(155, 155, 155, 1); */\n    background: rgba(34, 30, 30, 1);\n    cursor: pointer;\n    box-shadow: 0px 2px 4px 0px rgba(31, 29, 28, 0.6);\n    border-radius: 4px;\n    font-size: 22px;\n    font-family: PingFangSC-Semibold;\n    font-weight: 600;\n    color: rgba(255, 255, 255, 1);\n    letter-spacing: 1px;\n}\n.footer-chip-confirm-disabled {\n    cursor: not-allowed;\n    background: rgba(155, 155, 155, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb24vYmV0dGluZy1mb290ZXItYmFyL2JldHRpbmctZm9vdGVyLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVDtJQUNJLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLHNEQUFzRDtJQUN0RCxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix5Q0FBeUM7Q0FDNUM7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGtEQUFrRDtJQUNsRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG1DQUFtQztDQUN0QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9uL2JldHRpbmctZm9vdGVyLWJhci9iZXR0aW5nLWZvb3Rlci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHsgfVxuLmZvb3Rlci1jaGlwLWFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgYm94LXNoYWRvdzo2cHggNnB4IDEwcHggNHB4IHJnYmEoMjE2LDIxNCwyMTQsMC41KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgIGZvbnQtZmFtaWx5OlBpbmdGYW5nU0MtU2VtaWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOnJnYmEoNTEsNTEsNTEsMSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5mb290ZXItY2hpcC1jb250YWluZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCA0cHggcmdiYSgyMTYsIDIxNCwgMjE0LCAwLjUpO1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xufVxuLmZvb3Rlci1jaGlwLWxhYmVsIHtcbiAgICB3aWR0aDogNTYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMSk7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5mb290ZXItY2hpcC1pbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIHdpZHRoOiAzNDlweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTgsIDE5OCwgMTk4LCAxKTtcbn1cbi5mb290ZXItY2hpcC1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogV2ViS2l0LCBCbGluaywgRWRnZSAqL1xuICAgIGhlaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtTGlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAxKTtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmZvb3Rlci1jaGlwLWNvbmZpcm0ge1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDFweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMSk7ICovXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzAsIDMwLCAxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMzEsIDI5LCAyOCwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5mb290ZXItY2hpcC1jb25maXJtLWRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/competition/betting-footer-bar/betting-footer-bar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\n    <div class=\"footer-chip-alert\">\n        您还为选择任何盘口, 请先选择\n    </div>\n    <div class=\"footer-chip-container\">\n        <div class=\"footer-chip-label\">您在<span class=\"footer-chip-team-type\">{{quiz.name}}</span>中选择了<span class=\"footer-chip-team-team\">{{selectedTeam.teamName}}</span>，您的下注数额为：\n        </div>\n        <!-- <input class='footer-chip-input' placeholder='您的金币可用余额为：321,000' /> -->\n        <input class='footer-chip-input' nz-input placeholder=\"您的金币可用余额为：321,000\" [(ngModel)]=\"inputValue\" (input)=\"onInputChange($event)\">\n        <div [ngClass]=\"{ 'footer-chip-confirm': true, 'footer-chip-confirm-disabled': btnDisabled}\" (click)=\"onBtnClick()\">确定</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competition/betting-footer-bar/betting-footer-bar.component.ts ***!
  \********************************************************************************/
/*! exports provided: BettingFooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BettingFooterBarComponent", function() { return BettingFooterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quiz */ "./src/app/competition/models/quiz.ts");
/* harmony import */ var _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/team-ratio */ "./src/app/competition/models/team-ratio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BettingFooterBarComponent = /** @class */ (function () {
    function BettingFooterBarComponent() {
        this.btnDisabled = !this.inputValue;
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BettingFooterBarComponent.prototype.onBtnClick = function () {
        if (this.inputValue) {
            this.confirmEvent.emit(this.inputValue);
        }
        else {
            return;
        }
    };
    BettingFooterBarComponent.prototype.onInputChange = function ($event) {
        this.btnDisabled = !this.inputValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"])
    ], BettingFooterBarComponent.prototype, "quiz", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"])
    ], BettingFooterBarComponent.prototype, "selectedTeam", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BettingFooterBarComponent.prototype, "btnDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BettingFooterBarComponent.prototype, "confirmEvent", void 0);
    BettingFooterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-betting-footer-bar',
            template: __webpack_require__(/*! ./betting-footer-bar.component.html */ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./betting-footer-bar.component.css */ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BettingFooterBarComponent);
    return BettingFooterBarComponent;
}());



/***/ }),

/***/ "./src/app/competition/competition-detail/competition-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/competition/competition-detail/competition-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n}\n.competition-detail-bg {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.logo {\n    margin: auto;\n    margin-top: 53px;\n    margin-bottom: 0;\n}\n.title label{\n    width:216px;\n    height:33px;\n    font-size:24px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n    text-align: center;\n}\n.match-count {\n    margin-top: 10px;\n}\n.match-count label {\n    width:104px;\n    height:25px;\n    font-size:18px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n    line-height:25px;\n}\n.match-start-time {\n    margin-top: 10px;\n}\n.match-start-time label {\n    width:149px;\n    height:25px;\n    font-size:18px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(102,102,102,1);\n    line-height:25px;\n}\n.match-status {\n    margin-top: 20px;\n    margin-bottom: 0;\n}\n.match-status label {\n    font-size: 20px;\n    color: red;\n}\n.match-dead-line-label {\n    margin-top: 26px;\n}\n.match-dead-line-label label {\n    width:140px;\n    height:28px;\n    background:rgba(251,13,13,1);\n    border-radius:50px;\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 28px;\n\n}\n.match-dead-line-time {\n    margin-top: 16px;\n}\n.match-dead-line-time label {\n    width:162px;\n    height:25px;\n    font-size:18px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(251,13,13,1);\n    line-height:25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb24vY29tcGV0aXRpb24tZGV0YWlsL2NvbXBldGl0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCOztDQUVyQjtBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wZXRpdGlvbi9jb21wZXRpdGlvbi1kZXRhaWwvY29tcGV0aXRpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5jb21wZXRpdGlvbi1kZXRhaWwtYmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGl0bGUgbGFiZWx7XG4gICAgd2lkdGg6MjE2cHg7XG4gICAgaGVpZ2h0OjMzcHg7XG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1TZW1pYm9sZDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6cmdiYSg1MSw1MSw1MSwxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0Y2gtY291bnQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWF0Y2gtY291bnQgbGFiZWwge1xuICAgIHdpZHRoOjEwNHB4O1xuICAgIGhlaWdodDoyNXB4O1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIGZvbnQtZmFtaWx5OlBpbmdGYW5nU0MtU2VtaWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOnJnYmEoNTEsNTEsNTEsMSk7XG4gICAgbGluZS1oZWlnaHQ6MjVweDtcbn1cblxuLm1hdGNoLXN0YXJ0LXRpbWUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWF0Y2gtc3RhcnQtdGltZSBsYWJlbCB7XG4gICAgd2lkdGg6MTQ5cHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1TZW1pYm9sZDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6cmdiYSgxMDIsMTAyLDEwMiwxKTtcbiAgICBsaW5lLWhlaWdodDoyNXB4O1xufVxuXG4ubWF0Y2gtc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXRjaC1zdGF0dXMgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmVkO1xufVxuLm1hdGNoLWRlYWQtbGluZS1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cbi5tYXRjaC1kZWFkLWxpbmUtbGFiZWwgbGFiZWwge1xuICAgIHdpZHRoOjE0MHB4O1xuICAgIGhlaWdodDoyOHB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNTEsMTMsMTMsMSk7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuXG59XG5cbi5tYXRjaC1kZWFkLWxpbmUtdGltZSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdGNoLWRlYWQtbGluZS10aW1lIGxhYmVsIHtcbiAgICB3aWR0aDoxNjJweDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICBmb250LXNpemU6MThweDtcbiAgICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjpyZ2JhKDI1MSwxMywxMywxKTtcbiAgICBsaW5lLWhlaWdodDoyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/competition/competition-detail/competition-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/competition/competition-detail/competition-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"competition-detail-bg\">\n    <div class=\"logo\">\n        <img src=\"../../assets/image/dota2@2x.png\" alt=\"\">\n    </div>\n    <div class=\"title\">\n        <label for=\"\">The International 8</label>\n    </div>\n    <div class=\"match-count\">\n        <label for=\"\">淘汰赛 BO5</label>\n    </div>\n    <div class=\"match-start-time\">\n        <label for=\"\">2018-12-12 18:30</label>\n    </div>\n    <div class=\"match-status\">\n        <label for=\"\">暂时代替竞猜中图片</label>\n    </div>\n    <div class=\"match-dead-line-label\">\n        <label for=\"\">下注截止时间</label>\n    </div>\n    <div class=\"match-dead-line-time\">\n        <label for=\"\">2018-12-12 18：30</label>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/competition/competition-detail/competition-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competition/competition-detail/competition-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompetitionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionDetailComponent", function() { return CompetitionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompetitionDetailComponent = /** @class */ (function () {
    function CompetitionDetailComponent() {
    }
    CompetitionDetailComponent.prototype.ngOnInit = function () { };
    CompetitionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-competition-detail',
            template: __webpack_require__(/*! ./competition-detail.component.html */ "./src/app/competition/competition-detail/competition-detail.component.html"),
            styles: [__webpack_require__(/*! ./competition-detail.component.css */ "./src/app/competition/competition-detail/competition-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetitionDetailComponent);
    return CompetitionDetailComponent;
}());



/***/ }),

/***/ "./src/app/competition/competition-player/competition-player.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/competition/competition-player/competition-player.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".competition-player-bg {\n    width: 100%;\n    height: 500px;\n    background-image: url('card-bg-batman@2x.png');\n    background-size:100% 100%;\n    background-repeat: no-repeat;\n    box-shadow:4px 4px 12px 1px rgba(0,0,0,0.5);\n}\n\n.player-logo-bg {\n    width: 200px;\n    height: 200px;\n    background-color: rgba(255, 255, 255, 0.1);\n    margin-top: 63px;\n}\n\n.player-logo img{\n    width: 103px;\n    height: 160px;\n    margin-top: 20px;\n}\n\n.player-name {\n    width:176px;\n    height:51px;\n    font-size:36px;\n    font-family:Arial-Black;\n    font-weight:900;\n    color:rgba(255,255,255,1);\n    line-height:51px;\n    margin-top: 21px;\n}\n\n.player-ratio {\n    width:204px;\n    height:78px;\n    font-size:56px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(255,255,255,1);\n    line-height:78px;\n    margin-top: 24px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb24vY29tcGV0aXRpb24tcGxheWVyL2NvbXBldGl0aW9uLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCwrQ0FBaUY7SUFDakYsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7Q0FDL0M7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJDQUEyQztJQUMzQyxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcGV0aXRpb24vY29tcGV0aXRpb24tcGxheWVyL2NvbXBldGl0aW9uLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBldGl0aW9uLXBsYXllci1iZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvY29tcGV0aXRpb24vY2FyZC1iZy1iYXRtYW5AMngucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3gtc2hhZG93OjRweCA0cHggMTJweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4ucGxheWVyLWxvZ28tYmcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBtYXJnaW4tdG9wOiA2M3B4O1xufVxuLnBsYXllci1sb2dvIGltZ3tcbiAgICB3aWR0aDogMTAzcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBsYXllci1uYW1lIHtcbiAgICB3aWR0aDoxNzZweDtcbiAgICBoZWlnaHQ6NTFweDtcbiAgICBmb250LXNpemU6MzZweDtcbiAgICBmb250LWZhbWlseTpBcmlhbC1CbGFjaztcbiAgICBmb250LXdlaWdodDo5MDA7XG4gICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBsaW5lLWhlaWdodDo1MXB4O1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG59XG5cbi5wbGF5ZXItcmF0aW8ge1xuICAgIHdpZHRoOjIwNHB4O1xuICAgIGhlaWdodDo3OHB4O1xuICAgIGZvbnQtc2l6ZTo1NnB4O1xuICAgIGZvbnQtZmFtaWx5OlBpbmdGYW5nU0MtU2VtaWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgbGluZS1oZWlnaHQ6NzhweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/competition/competition-player/competition-player.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/competition/competition-player/competition-player.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"competition-player-bg\">\n\t<div>\n\t\t<div nz-row nzType=\"flex\" nzJustify=\"center\" nzAlign=\"middle\" class=\"player-logo\">\n\t\t\t<div class=\"player-logo-bg\">\n\t\t\t\t<img src=\"../../assets/image/dota2@2x.png\" alt=\"\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div nz-row nzType=\"flex\" nzJustify=\"center\" nzAlign=\"middle\">\n\t\t\t<label for=\"\" class=\"player-name\">PSG.LGD</label>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div nz-row nzType=\"flex\" nzJustify=\"center\" nzAlign=\"middle\">\n\t\t\t<label for=\"\" class=\"player-ratio\">1 ：0.12</label>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/competition/competition-player/competition-player.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competition/competition-player/competition-player.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompetitionPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPlayerComponent", function() { return CompetitionPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompetitionPlayerComponent = /** @class */ (function () {
    function CompetitionPlayerComponent() {
    }
    CompetitionPlayerComponent.prototype.ngOnInit = function () { };
    CompetitionPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-competition-player',
            template: __webpack_require__(/*! ./competition-player.component.html */ "./src/app/competition/competition-player/competition-player.component.html"),
            styles: [__webpack_require__(/*! ./competition-player.component.css */ "./src/app/competition/competition-player/competition-player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetitionPlayerComponent);
    return CompetitionPlayerComponent;
}());



/***/ }),

/***/ "./src/app/competition/competition.component.css":
/*!*******************************************************!*\
  !*** ./src/app/competition/competition.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n}\n.layout-bg {\n    text-align: center;\n    background-color: white;\n}\n:host ::ng-deep .ant-layout-footer {\n    background: #7dbcea;\n    color: #fff;\n    text-align: center;\n}\n:host ::ng-deep .ant-layout-content {\n    color: #fff;\n    text-align: center;\n    margin-top: 33px;\n}\n.content-bg {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    align-items: flex-end;\n    width: 1110px;\n    padding-bottom: 47px;\n}\n.player {\n    padding: 0;\n    width: 360px;\n    height: 500px;\n}\n.detail {\n    width: 320px;\n    height: 486px;\n    margin-left: 35px;\n    margin-right: 35px;\n}\n.footer-wrapper {\n    width: 1110px;\n    padding-top: 42px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    /* align-content: flex-start;\n    align-items: flex-start;\n    justify-content: flex-start; */\n}\n.footer-card{\n    margin: 0 0 33px 0;\n}\n.footer-card:nth-child(3n+2) {\n    margin-left: 30px;\n}\n.footer-card:nth-child(3n+0) {\n    margin-left: 30px;\n}\n.footer-bar-wrapper {\n    width: 1110px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n}\n.footer-bg {\n    height: 100%;\n    background:rgba(245,245,245,1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb24vY29tcGV0aXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCOzttQ0FFK0I7Q0FDbEM7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcGV0aXRpb24vY29tcGV0aXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmxheW91dC1iZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzdkYmNlYTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzNweDtcbn1cblxuLmNvbnRlbnQtYmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTExMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0N3B4O1xufVxuXG4ucGxheWVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuLmRldGFpbCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogNDg2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICB3aWR0aDogMTExMHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xufVxuLmZvb3Rlci1jYXJke1xuICAgIG1hcmdpbjogMCAwIDMzcHggMDtcbn1cbi5mb290ZXItY2FyZDpudGgtY2hpbGQoM24rMikge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLmZvb3Rlci1jYXJkOm50aC1jaGlsZCgzbiswKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5mb290ZXItYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMTEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb290ZXItYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjQ1LDI0NSwyNDUsMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/competition/competition.component.html":
/*!********************************************************!*\
  !*** ./src/app/competition/competition.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n\t<div class=\"layout-bg\">\n\t\t<nz-content>\n\t\t\t<div class=\"content-bg\">\n\t\t\t\t<div class=\"player\">\n\t\t\t\t\t<bbuhot-competition-player></bbuhot-competition-player>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"detail\">\n\t\t\t\t\t<bbuhot-competition-detail></bbuhot-competition-detail>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"player\">\n\t\t\t\t\t<bbuhot-competition-player></bbuhot-competition-player>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nz-content>\n\t\t<nz-footer>\n\t\t\t<div class=\"footer-bg\">\n\t\t\t\t<div class=\"footer-wrapper\">\n\t\t\t\t\t<bbuhot-betting-card (clickEvent)=\"onItemClick($event, quiz)\" *ngFor=\"let quiz of QuizArr\" [quiz]=\"quiz\" [teamLeft]=\"quiz.teamLeft\"\n\t\t\t\t\t [teamRight]=\"quiz.teamRight\" class=\"footer-card\"></bbuhot-betting-card>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"footer-bar-wrapper\">\n\t\t\t\t\t<bbuhot-betting-footer-bar (onConfirm)=\"onConfirmClick($event)\" [quiz]=\"QuizArr[0]\" [selectedTeam]=\"QuizArr[0].teamLeft\"></bbuhot-betting-footer-bar>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nz-footer>\n\t</div>\n</nz-layout>"

/***/ }),

/***/ "./src/app/competition/competition.component.ts":
/*!******************************************************!*\
  !*** ./src/app/competition/competition.component.ts ***!
  \******************************************************/
/*! exports provided: CompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionComponent", function() { return CompetitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/quiz */ "./src/app/competition/models/quiz.ts");
/* harmony import */ var _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/team-ratio */ "./src/app/competition/models/team-ratio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompetitionComponent = /** @class */ (function () {
    function CompetitionComponent() {
        this.QuizArr = [];
        this.QuizArr = [
            new _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"](1, '猜输赢', _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE, new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](1, 'PSG.LGD', 0.12), new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](2, 'OG', 0.18), 'left'),
            new _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"](2, '第一局赢', _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE, new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](1, 'PSG.LGD', 0.14), new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](2, 'OasdG', 0.1), 'unknown'),
            new _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"](3, '猜输赢', _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DOING, new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](1, 'PSG.LGD', 0.12), new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](2, 'OG', 0.18), 'left'),
            new _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"](4, '猜输赢', _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DONE, new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](1, 'PSG.LGD', 0.12), new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](2, 'OG', 0.18), 'left'),
            // new Quiz(5, '猜输赢', 1, new TeamRatio(1, 'PSG.LGD', 0.12), new TeamRatio(2, 'OG', 0.18)),
            // new Quiz(6, '第二局赢', 3, new TeamRatio(1, 'PSG.LGD', 0.12), new TeamRatio(2, 'OG', 0.18), 'right'),
            new _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"](7, '猜输赢', _models_quiz__WEBPACK_IMPORTED_MODULE_1__["Quiz"].Status.STATUS_DOING, new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](1, 'PSG.LGD', 0.12), new _models_team_ratio__WEBPACK_IMPORTED_MODULE_2__["TeamRatio"](2, 'OG', 0.18), 'unknown')
        ];
    }
    CompetitionComponent.prototype.onItemClick = function (_a) {
        var $event = _a.$event, team = _a.team, quiz = _a.quiz;
        // TODO
        console.log('TODO: onItemClick', $event, team, quiz);
    };
    CompetitionComponent.prototype.onConfirmClick = function (inputValue) {
        // 点击确定按钮将输入框的值带入
        console.log(inputValue);
    };
    CompetitionComponent.prototype.ngOnInit = function () { };
    CompetitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-competition',
            template: __webpack_require__(/*! ./competition.component.html */ "./src/app/competition/competition.component.html"),
            styles: [__webpack_require__(/*! ./competition.component.css */ "./src/app/competition/competition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetitionComponent);
    return CompetitionComponent;
}());



/***/ }),

/***/ "./src/app/competition/competition.module.ts":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.module.ts ***!
  \***************************************************/
/*! exports provided: CompetitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionModule", function() { return CompetitionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _betting_card_betting_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./betting-card/betting-card.component */ "./src/app/competition/betting-card/betting-card.component.ts");
/* harmony import */ var _betting_footer_bar_betting_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./betting-footer-bar/betting-footer-bar.component */ "./src/app/competition/betting-footer-bar/betting-footer-bar.component.ts");
/* harmony import */ var _competition_detail_competition_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competition-detail/competition-detail.component */ "./src/app/competition/competition-detail/competition-detail.component.ts");
/* harmony import */ var _competition_player_competition_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competition-player/competition-player.component */ "./src/app/competition/competition-player/competition-player.component.ts");
/* harmony import */ var _competition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./competition.component */ "./src/app/competition/competition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CompetitionModule = /** @class */ (function () {
    function CompetitionModule() {
    }
    CompetitionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _betting_card_betting_card_component__WEBPACK_IMPORTED_MODULE_4__["BettingCardComponent"],
                _betting_footer_bar_betting_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__["BettingFooterBarComponent"],
                _competition_component__WEBPACK_IMPORTED_MODULE_8__["CompetitionComponent"],
                _competition_detail_competition_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompetitionDetailComponent"],
                _competition_player_competition_player_component__WEBPACK_IMPORTED_MODULE_7__["CompetitionPlayerComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]]
        })
    ], CompetitionModule);
    return CompetitionModule;
}());



/***/ }),

/***/ "./src/app/competition/models/quiz.ts":
/*!********************************************!*\
  !*** ./src/app/competition/models/quiz.ts ***!
  \********************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
var QuizStatus;
(function (QuizStatus) {
    // TODO(anyone): rename to reflect statuses.
    QuizStatus[QuizStatus["STATUS_DOING"] = 0] = "STATUS_DOING";
    QuizStatus[QuizStatus["STATUS_TODO"] = 1] = "STATUS_TODO";
    QuizStatus[QuizStatus["STATUS_DONE"] = 2] = "STATUS_DONE";
})(QuizStatus || (QuizStatus = {}));
var Quiz = /** @class */ (function () {
    function Quiz(quizId, name, status, teamLeft, teamRight, result) {
        this.quizId = quizId;
        this.name = name;
        this.status = status;
        this.teamLeft = teamLeft;
        this.teamRight = teamRight;
        this.result = result;
    }
    Quiz.Status = QuizStatus;
    return Quiz;
}());



/***/ }),

/***/ "./src/app/competition/models/team-ratio.ts":
/*!**************************************************!*\
  !*** ./src/app/competition/models/team-ratio.ts ***!
  \**************************************************/
/*! exports provided: TeamRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRatio", function() { return TeamRatio; });
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team */ "./src/app/competition/models/team.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TeamRatio = /** @class */ (function (_super) {
    __extends(TeamRatio, _super);
    function TeamRatio(teamId, teamName, ratio) {
        var _this = _super.call(this, teamId, teamName) || this;
        _this.ratio = ratio;
        return _this;
    }
    return TeamRatio;
}(_team__WEBPACK_IMPORTED_MODULE_0__["Team"]));



/***/ }),

/***/ "./src/app/competition/models/team.ts":
/*!********************************************!*\
  !*** ./src/app/competition/models/team.ts ***!
  \********************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(teamId, teamName) {
        this.teamId = teamId;
        this.teamName = teamName;
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage{\n    background-color: #F5F5F5;\n}\n\n.navigation{\n    background-image:url('Gindex.png');\n    background-size:100% 100%;\n    height: 389px;\n    margin-bottom: 2rem;\n    display: block;\n}\n\n.banner-slogan{\n    display: inline-block;\n    background-image: url('banner-slogan@2x.png');\n    background-size: 100% 100%;\n    height: 160px;\n    width: 627px;\n    margin-left: 184px;\n    margin-top: 67px;\n}\n\n.user-interface{\n    height: 280px;\n    width: 270px;\n    background-color: white;\n    float:right;\n    margin-top: 22px;\n    margin-right: 178px;\n}\n\n.avatar{\n    height: 110px;\n}\n\n.avatar>img{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.letter{\n    font-size:14px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n}\n\n.number{\n    font-size:24px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n    color:rgba(51,51,51,1);\n}\n\n.quiz{\n    width: 85%;\n    background: #222222;\n    box-shadow: 0 2px 4px 0 rgba(31,29,28,0.60);\n    border-radius: 4px;\n    color: white;\n    border: none;\n    outline: none;\n    font-size:14px;\n    font-family:PingFangSC-Semibold;\n    font-weight:600;\n}\n\n.upcoming{\n    background-image: url('part-title-upcoming@2x.png');\n    background-size: 100% 100%;\n    width: 221px;\n    height: 66px;\n    margin-bottom: 2.2rem;\n}\n\n.quiz-page{\n    margin: 0 9rem;\n}\n\n.spinach-items{\n    height: 170px;\n    background-color: white;\n    margin-bottom: 1rem;\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1DQUFvRDtJQUNwRCwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLDhDQUErRDtJQUMvRCwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBa0I7T0FBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0RBQXFFO0lBQ3JFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5uYXZpZ2F0aW9ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9HaW5kZXgucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xuICAgIGhlaWdodDogMzg5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5iYW5uZXItc2xvZ2Fue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2Jhbm5lci1zbG9nYW5AMngucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiA2MjdweDtcbiAgICBtYXJnaW4tbGVmdDogMTg0cHg7XG4gICAgbWFyZ2luLXRvcDogNjdweDtcbn1cblxuLnVzZXItaW50ZXJmYWNle1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNzhweDtcbn1cblxuLmF2YXRhcntcbiAgICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uYXZhdGFyPmltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5sZXR0ZXJ7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1TZW1pYm9sZDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6cmdiYSg1MSw1MSw1MSwxKTtcbn1cblxuLm51bWJlcntcbiAgICBmb250LXNpemU6MjRweDtcbiAgICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLVNlbWlib2xkO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjpyZ2JhKDUxLDUxLDUxLDEpO1xufVxuXG4ucXVpentcbiAgICB3aWR0aDogODUlO1xuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgzMSwyOSwyOCwwLjYwKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGZvbnQtZmFtaWx5OlBpbmdGYW5nU0MtU2VtaWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuXG4udXBjb21pbmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9wYXJ0LXRpdGxlLXVwY29taW5nQDJ4LnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDIyMXB4O1xuICAgIGhlaWdodDogNjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjJyZW07XG59XG5cbi5xdWl6LXBhZ2V7XG4gICAgbWFyZ2luOiAwIDlyZW07XG59XG5cbi5zcGluYWNoLWl0ZW1ze1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n\t<div class=\"navigation\">\n\t\t<button (click)=\"onClickMe()\">Test button.</button>\n\t\t<div class=\"banner-slogan\"></div>\n\t\t<div class=\"user-interface\">\n\t\t\t<div class=\"avatar\"><img src=\"../../assets/image/avator.png\" alt=\"\"></div>\n\t\t\t<div class=\"detail-infomation\">\n\t\t\t\t<div class=\"name\">\n\t\t\t\t\t<h1 class=\"text-center\">Berk</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"col-6 gold\">\n\t\t\t\t\t\t<div class=\"text-center letter mb-2\">金币</div>\n\t\t\t\t\t\t<div class=\"text-center number mb-2\">500,000</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6 integral\">\n\t\t\t\t\t\t<div class=\"text-center letter mb-2\">积分</div>\n\t\t\t\t\t\t<div class=\"text-center number mb-2\">12,323</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<button class=\"quiz\">我的竞猜</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"quiz-page\">\n\t\t<div class=\"upcoming\">\n\n\t\t</div>\n\t\t<div *ngFor=\"let game of gamesList\">\n\t\t\t<div class=\"spinach-items\">\n\t\t\t\t<bbuhot-spinach-items [game]=\"game\"></bbuhot-spinach-items>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api-service */ "./src/app/api/api-service.ts");
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proto/bbuhot/service/game_pb */ "./src/app/proto/bbuhot/service/game_pb.js");
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(apiService) {
        this.apiService = apiService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.loadGamesListData();
    };
    HomepageComponent.prototype.loadGamesListData = function () {
        var _this = this;
        var listGameRequest = new _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_2__["ListGameRequest"]();
        listGameRequest.setIsAdminRequest(true);
        listGameRequest.setGameStatus(_proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_2__["Game"].Status.DRAFT);
        this.apiService.listGames(listGameRequest).subscribe(function (reply) {
            _this.gamesList = reply.getGamesList();
        }, function (error) {
            console.log(error);
        });
    };
    HomepageComponent.prototype.onClickMe = function () { };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _spinach_items_spinach_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinach-items/spinach-items.component */ "./src/app/homepage/spinach-items/spinach-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _spinach_items_spinach_items_component__WEBPACK_IMPORTED_MODULE_6__["SpinachItemsComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/spinach-items/spinach-items.component.css":
/*!********************************************************************!*\
  !*** ./src/app/homepage/spinach-items/spinach-items.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  display: flex;\n  height: 100%;\n}\n\n.item-detail {\n  display: flex;\n  width: 20%;\n}\n\n.item-detail img {\n  width: 70px;\n  height: 70px;\n  margin-left: 27px;\n  margin-top: 50px;\n}\n\n.item-detail .item-time {\n  margin-left: 15px;\n  margin-top: 60px;\n}\n\n.item-player {\n   display: block;\n   margin: 0 25px;\n   /* margin-left: 150px;\n   margin-top: 50px; */\n}\n\n.item .item-player-name {\n  position: relative;\n  width:106px;\n  height:33px;\n  font-size:24px;\n  font-family:PingFangSC-Semibold;\n  font-weight:600;\n  color:rgba(51,51,51,1);\n  line-height:33px;\n}\n\n.item .item-player-ratio {\n  position: relative;\n  font-size:18px;\n  font-family:PingFangSC-Medium;\n  font-weight:500;\n  color:rgba(251,13,13,1);\n  line-height:25px;\n}\n\n.item-guess {\n  width: 80%;\n}\n\n.team-pic {\n  margin: 0 20px;\n}\n\n.center-button {\n  margin: 8px 0;\n}\n\n.red-font {\n  color: red;\n  font-weight: 600;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2Uvc3BpbmFjaC1pdGVtcy9zcGluYWNoLWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7R0FDRyxlQUFlO0dBQ2YsZUFBZTtHQUNmO3VCQUNvQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL3NwaW5hY2gtaXRlbXMvc3BpbmFjaC1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pdGVtLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5pdGVtLWRldGFpbCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tbGVmdDogMjdweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLml0ZW0tZGV0YWlsIC5pdGVtLXRpbWUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLml0ZW0tcGxheWVyIHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgbWFyZ2luOiAwIDI1cHg7XG4gICAvKiBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICBtYXJnaW4tdG9wOiA1MHB4OyAqL1xufVxuXG4uaXRlbSAuaXRlbS1wbGF5ZXItbmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6MTA2cHg7XG4gIGhlaWdodDozM3B4O1xuICBmb250LXNpemU6MjRweDtcbiAgZm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1TZW1pYm9sZDtcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBjb2xvcjpyZ2JhKDUxLDUxLDUxLDEpO1xuICBsaW5lLWhlaWdodDozM3B4O1xufVxuXG4uaXRlbSAuaXRlbS1wbGF5ZXItcmF0aW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICBmb250LWZhbWlseTpQaW5nRmFuZ1NDLU1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6NTAwO1xuICBjb2xvcjpyZ2JhKDI1MSwxMywxMywxKTtcbiAgbGluZS1oZWlnaHQ6MjVweDtcbn1cblxuLml0ZW0tZ3Vlc3Mge1xuICB3aWR0aDogODAlO1xufVxuXG4udGVhbS1waWMge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmNlbnRlci1idXR0b24ge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4ucmVkLWZvbnQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/homepage/spinach-items/spinach-items.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/spinach-items/spinach-items.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <div class=\"item-detail\">\n    <img src=\"../../assets/image/dota2.png\" alt=\"item-type\">\n    <div class=\"item-time\">\n      <div class=\"text-nowrap\">12-12</div>\n      <div class=\"text-nowrap\">18:30</div>\n    </div>\n  </div>\n  <div class=\"item-guess d-flex justify-content-around\">\n    <div class=\"item-player d-flex flex-row justify-content-center flex-nowrap\">\n      <div class=\"d-flex flex-column align-items-center justify-content-center\">\n          <div style=\"width:100%\" class=\"item-player-name d-flex justify-content-end\">{{game.getName()}}</div>\n          <div style=\"width:100%\" class=\"item-player-ratio d-flex justify-content-end\">1 : 0.12</div>\n      </div>\n      <div class=\"d-flex justify-content-center align-items-center team-pic\">\n          <img src=\"../../assets/image/dota2.png\" width=\"70px\" height=\"70px\" alt=\"item-type\">\n      </div>\n    </div>\n    <div style=\"width:120px\" class=\"item-player d-flex flex-column justify-content-center flex-nowrap\">\n      <div class=\"d-flex justify-content-center red-font\">BO 8</div>\n      <div class=\"center-button\">\n        <button type=\"button\" class=\"btn btn-danger btn-block\">预测</button>\n      </div>\n      <div class=\"center-button\">\n        <button type=\"button\" class=\"btn btn-outline-danger btn-block\">详情</button>\n      </div>\n    </div>\n    <div class=\"item-player d-flex flex-row justify-content-center flex-nowrap\">\n      <div class=\"d-flex justify-content-center align-items-center team-pic\">\n        <img src=\"../../assets/image/dota2.png\" width=\"70px\" height=\"70px\" alt=\"item-type\">\n      </div>\n      <div class=\"d-flex flex-column align-items-center justify-content-center\">\n        <div style=\"width:100%\" class=\"item-player-name d-flex justify-content-start\">OG</div>\n        <div style=\"width:100%\" class=\"item-player-ratio d-flex justify-content-start\">1 : 0.12</div>\n      </div>\n    </div>\n    <div class=\"item-player d-flex flex-row justify-content-center flex-nowrap\" style=\"padding:15px;\">\n      <img src=\"../../assets/image/csgo@2x.png\" alt=\"item-type\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/homepage/spinach-items/spinach-items.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/spinach-items/spinach-items.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpinachItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinachItemsComponent", function() { return SpinachItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../proto/bbuhot/service/game_pb */ "./src/app/proto/bbuhot/service/game_pb.js");
/* harmony import */ var _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinachItemsComponent = /** @class */ (function () {
    function SpinachItemsComponent() {
    }
    SpinachItemsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _proto_bbuhot_service_game_pb__WEBPACK_IMPORTED_MODULE_1__["Game"])
    ], SpinachItemsComponent.prototype, "game", void 0);
    SpinachItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-spinach-items',
            template: __webpack_require__(/*! ./spinach-items.component.html */ "./src/app/homepage/spinach-items/spinach-items.component.html"),
            styles: [__webpack_require__(/*! ./spinach-items.component.css */ "./src/app/homepage/spinach-items/spinach-items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinachItemsComponent);
    return SpinachItemsComponent;
}());



/***/ }),

/***/ "./src/app/leader-board/leader-board.component.css":
/*!*********************************************************!*\
  !*** ./src/app/leader-board/leader-board.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlci1ib2FyZC9sZWFkZXItYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/leader-board/leader-board.component.html":
/*!**********************************************************!*\
  !*** ./src/app/leader-board/leader-board.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n尽请期待\n</p>\n"

/***/ }),

/***/ "./src/app/leader-board/leader-board.component.ts":
/*!********************************************************!*\
  !*** ./src/app/leader-board/leader-board.component.ts ***!
  \********************************************************/
/*! exports provided: LeaderBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderBoardComponent", function() { return LeaderBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeaderBoardComponent = /** @class */ (function () {
    function LeaderBoardComponent() {
    }
    LeaderBoardComponent.prototype.ngOnInit = function () { };
    LeaderBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-leader-board',
            template: __webpack_require__(/*! ./leader-board.component.html */ "./src/app/leader-board/leader-board.component.html"),
            styles: [__webpack_require__(/*! ./leader-board.component.css */ "./src/app/leader-board/leader-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaderBoardComponent);
    return LeaderBoardComponent;
}());



/***/ }),

/***/ "./src/app/leader-board/leader-board.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/leader-board/leader-board.module.ts ***!
  \*****************************************************/
/*! exports provided: LeaderBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderBoardModule", function() { return LeaderBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leader_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leader-board.component */ "./src/app/leader-board/leader-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LeaderBoardModule = /** @class */ (function () {
    function LeaderBoardModule() {
    }
    LeaderBoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_leader_board_component__WEBPACK_IMPORTED_MODULE_1__["LeaderBoardComponent"]]
        })
    ], LeaderBoardModule);
    return LeaderBoardModule;
}());



/***/ }),

/***/ "./src/app/proto/bbuhot/service/auth_pb.js":
/*!*************************************************!*\
  !*** ./src/app/proto/bbuhot/service/auth_pb.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bhuhot.service.AuthReply', null, global);
goog.exportSymbol('proto.bhuhot.service.AuthReply.AuthErrorCode', null, global);
goog.exportSymbol('proto.bhuhot.service.AuthReply.User', null, global);
goog.exportSymbol('proto.bhuhot.service.AuthRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AuthRequest.displayName = 'proto.bhuhot.service.AuthRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: jspb.Message.getField(msg, 1),
    saltKey: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.AuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AuthRequest;
  return proto.bhuhot.service.AuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.AuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSaltKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string auth = 1;
 * @return {string}
 */
proto.bhuhot.service.AuthRequest.prototype.getAuth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bhuhot.service.AuthRequest.prototype.setAuth = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.AuthRequest.prototype.clearAuth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string salt_key = 2;
 * @return {string}
 */
proto.bhuhot.service.AuthRequest.prototype.getSaltKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bhuhot.service.AuthRequest.prototype.setSaltKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.AuthRequest.prototype.clearSaltKey = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthRequest.prototype.hasSaltKey = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AuthReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AuthReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AuthReply.displayName = 'proto.bhuhot.service.AuthReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AuthReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AuthReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AuthReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorCode: jspb.Message.getField(msg, 1),
    user: (f = msg.getUser()) && proto.bhuhot.service.AuthReply.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AuthReply}
 */
proto.bhuhot.service.AuthReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AuthReply;
  return proto.bhuhot.service.AuthReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AuthReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AuthReply}
 */
proto.bhuhot.service.AuthReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (reader.readEnum());
      msg.setErrorCode(value);
      break;
    case 2:
      var value = new proto.bhuhot.service.AuthReply.User;
      reader.readMessage(value,proto.bhuhot.service.AuthReply.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AuthReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AuthReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AuthReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bhuhot.service.AuthReply.User.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bhuhot.service.AuthReply.AuthErrorCode = {
  NO_ERROR: 0,
  KEY_NOT_MATCHING: 1,
  PERMISSION_DENY: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AuthReply.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AuthReply.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AuthReply.User.displayName = 'proto.bhuhot.service.AuthReply.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AuthReply.User.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AuthReply.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AuthReply.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthReply.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    name: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AuthReply.User}
 */
proto.bhuhot.service.AuthReply.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AuthReply.User;
  return proto.bhuhot.service.AuthReply.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AuthReply.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AuthReply.User}
 */
proto.bhuhot.service.AuthReply.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AuthReply.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AuthReply.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AuthReply.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AuthReply.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required int32 uid = 1;
 * @return {number}
 */
proto.bhuhot.service.AuthReply.User.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bhuhot.service.AuthReply.User.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.AuthReply.User.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthReply.User.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string name = 2;
 * @return {string}
 */
proto.bhuhot.service.AuthReply.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bhuhot.service.AuthReply.User.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.AuthReply.User.prototype.clearName = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthReply.User.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required AuthErrorCode error_code = 1;
 * @return {!proto.bhuhot.service.AuthReply.AuthErrorCode}
 */
proto.bhuhot.service.AuthReply.prototype.getErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bhuhot.service.AuthReply.AuthErrorCode} value */
proto.bhuhot.service.AuthReply.prototype.setErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.AuthReply.prototype.clearErrorCode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthReply.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.bhuhot.service.AuthReply.User}
 */
proto.bhuhot.service.AuthReply.prototype.getUser = function() {
  return /** @type{?proto.bhuhot.service.AuthReply.User} */ (
    jspb.Message.getWrapperField(this, proto.bhuhot.service.AuthReply.User, 2));
};


/** @param {?proto.bhuhot.service.AuthReply.User|undefined} value */
proto.bhuhot.service.AuthReply.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.bhuhot.service.AuthReply.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AuthReply.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.bhuhot.service);


/***/ }),

/***/ "./src/app/proto/bbuhot/service/game_pb.js":
/*!*************************************************!*\
  !*** ./src/app/proto/bbuhot/service/game_pb.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = Function('return this')();

var bbuhot_service_auth_pb = __webpack_require__(/*! ../../bbuhot/service/auth_pb.js */ "./src/app/proto/bbuhot/service/auth_pb.js");
goog.exportSymbol('proto.bhuhot.service.AdminGameReply', null, global);
goog.exportSymbol('proto.bhuhot.service.AdminGameRequest', null, global);
goog.exportSymbol('proto.bhuhot.service.AdminGameStatusReply', null, global);
goog.exportSymbol('proto.bhuhot.service.AdminGameStatusReply.ErrorCode', null, global);
goog.exportSymbol('proto.bhuhot.service.AdminGameStatusRequest', null, global);
goog.exportSymbol('proto.bhuhot.service.BetReply', null, global);
goog.exportSymbol('proto.bhuhot.service.BetReply.BetErrorCode', null, global);
goog.exportSymbol('proto.bhuhot.service.BetRequest', null, global);
goog.exportSymbol('proto.bhuhot.service.Game', null, global);
goog.exportSymbol('proto.bhuhot.service.Game.Bet', null, global);
goog.exportSymbol('proto.bhuhot.service.Game.BettingOption', null, global);
goog.exportSymbol('proto.bhuhot.service.Game.Status', null, global);
goog.exportSymbol('proto.bhuhot.service.ListGameReply', null, global);
goog.exportSymbol('proto.bhuhot.service.ListGameRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.Game = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bhuhot.service.Game.repeatedFields_, null);
};
goog.inherits(proto.bhuhot.service.Game, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.Game.displayName = 'proto.bhuhot.service.Game';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bhuhot.service.Game.repeatedFields_ = [10,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.Game.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.Game.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.Game} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    name: jspb.Message.getField(msg, 2),
    description: jspb.Message.getField(msg, 3),
    normalUserVisible: jspb.Message.getFieldWithDefault(msg, 4, false),
    status: jspb.Message.getField(msg, 5),
    betOptionLimit: jspb.Message.getField(msg, 6),
    betAmountLowest: jspb.Message.getField(msg, 7),
    betAmountHighest: jspb.Message.getField(msg, 8),
    endTimeMs: jspb.Message.getField(msg, 9),
    bettingOptionsList: jspb.Message.toObjectList(msg.getBettingOptionsList(),
    proto.bhuhot.service.Game.BettingOption.toObject, includeInstance),
    winningOption: jspb.Message.getField(msg, 11),
    betsList: jspb.Message.toObjectList(msg.getBetsList(),
    proto.bhuhot.service.Game.Bet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.Game}
 */
proto.bhuhot.service.Game.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.Game;
  return proto.bhuhot.service.Game.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.Game} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.Game}
 */
proto.bhuhot.service.Game.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNormalUserVisible(value);
      break;
    case 5:
      var value = /** @type {!proto.bhuhot.service.Game.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBetOptionLimit(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBetAmountLowest(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBetAmountHighest(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    case 10:
      var value = new proto.bhuhot.service.Game.BettingOption;
      reader.readMessage(value,proto.bhuhot.service.Game.BettingOption.deserializeBinaryFromReader);
      msg.addBettingOptions(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinningOption(value);
      break;
    case 12:
      var value = new proto.bhuhot.service.Game.Bet;
      reader.readMessage(value,proto.bhuhot.service.Game.Bet.deserializeBinaryFromReader);
      msg.addBets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.Game.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.Game.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.Game} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getBettingOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.bhuhot.service.Game.BettingOption.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getBetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.bhuhot.service.Game.Bet.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bhuhot.service.Game.Status = {
  DRAFT: 0,
  PUBLISHED: 1,
  SETTLED: 2,
  CANCELLED: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.Game.BettingOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.Game.BettingOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.Game.BettingOption.displayName = 'proto.bhuhot.service.Game.BettingOption';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.Game.BettingOption.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.Game.BettingOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.Game.BettingOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.BettingOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    odds: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.Game.BettingOption}
 */
proto.bhuhot.service.Game.BettingOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.Game.BettingOption;
  return proto.bhuhot.service.Game.BettingOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.Game.BettingOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.Game.BettingOption}
 */
proto.bhuhot.service.Game.BettingOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOdds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.Game.BettingOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.Game.BettingOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.Game.BettingOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.BettingOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required string name = 1;
 * @return {string}
 */
proto.bhuhot.service.Game.BettingOption.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bhuhot.service.Game.BettingOption.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.Game.BettingOption.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.BettingOption.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 odds = 2;
 * @return {number}
 */
proto.bhuhot.service.Game.BettingOption.prototype.getOdds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.BettingOption.prototype.setOdds = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.Game.BettingOption.prototype.clearOdds = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.BettingOption.prototype.hasOdds = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.Game.Bet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.Game.Bet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.Game.Bet.displayName = 'proto.bhuhot.service.Game.Bet';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.Game.Bet.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.Game.Bet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.Game.Bet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.Bet.toObject = function(includeInstance, msg) {
  var f, obj = {
    bettingOptionId: jspb.Message.getField(msg, 1),
    money: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.Game.Bet}
 */
proto.bhuhot.service.Game.Bet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.Game.Bet;
  return proto.bhuhot.service.Game.Bet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.Game.Bet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.Game.Bet}
 */
proto.bhuhot.service.Game.Bet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBettingOptionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMoney(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.Game.Bet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.Game.Bet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.Game.Bet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.Game.Bet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required int32 betting_option_id = 1;
 * @return {number}
 */
proto.bhuhot.service.Game.Bet.prototype.getBettingOptionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.Bet.prototype.setBettingOptionId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.Game.Bet.prototype.clearBettingOptionId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.Bet.prototype.hasBettingOptionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 money = 2;
 * @return {number}
 */
proto.bhuhot.service.Game.Bet.prototype.getMoney = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.Bet.prototype.setMoney = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.Game.Bet.prototype.clearMoney = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.Bet.prototype.hasMoney = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 id = 1;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.Game.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string name = 2;
 * @return {string}
 */
proto.bhuhot.service.Game.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bhuhot.service.Game.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.Game.prototype.clearName = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string description = 3;
 * @return {string}
 */
proto.bhuhot.service.Game.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bhuhot.service.Game.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.bhuhot.service.Game.prototype.clearDescription = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool normal_user_visible = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.bhuhot.service.Game.prototype.getNormalUserVisible = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.bhuhot.service.Game.prototype.setNormalUserVisible = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.bhuhot.service.Game.prototype.clearNormalUserVisible = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasNormalUserVisible = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Status status = 5;
 * @return {!proto.bhuhot.service.Game.Status}
 */
proto.bhuhot.service.Game.prototype.getStatus = function() {
  return /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.bhuhot.service.Game.Status} value */
proto.bhuhot.service.Game.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.bhuhot.service.Game.prototype.clearStatus = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int32 bet_option_limit = 6;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getBetOptionLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setBetOptionLimit = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.bhuhot.service.Game.prototype.clearBetOptionLimit = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasBetOptionLimit = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required int32 bet_amount_lowest = 7;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getBetAmountLowest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setBetAmountLowest = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.bhuhot.service.Game.prototype.clearBetAmountLowest = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasBetAmountLowest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * required int32 bet_amount_highest = 8;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getBetAmountHighest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setBetAmountHighest = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.bhuhot.service.Game.prototype.clearBetAmountHighest = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasBetAmountHighest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * required int64 end_time_ms = 9;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setEndTimeMs = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.bhuhot.service.Game.prototype.clearEndTimeMs = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasEndTimeMs = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated BettingOption betting_options = 10;
 * @return {!Array<!proto.bhuhot.service.Game.BettingOption>}
 */
proto.bhuhot.service.Game.prototype.getBettingOptionsList = function() {
  return /** @type{!Array<!proto.bhuhot.service.Game.BettingOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bhuhot.service.Game.BettingOption, 10));
};


/** @param {!Array<!proto.bhuhot.service.Game.BettingOption>} value */
proto.bhuhot.service.Game.prototype.setBettingOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.bhuhot.service.Game.BettingOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bhuhot.service.Game.BettingOption}
 */
proto.bhuhot.service.Game.prototype.addBettingOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.bhuhot.service.Game.BettingOption, opt_index);
};


proto.bhuhot.service.Game.prototype.clearBettingOptionsList = function() {
  this.setBettingOptionsList([]);
};


/**
 * optional int32 winning_option = 11;
 * @return {number}
 */
proto.bhuhot.service.Game.prototype.getWinningOption = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.bhuhot.service.Game.prototype.setWinningOption = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.bhuhot.service.Game.prototype.clearWinningOption = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.Game.prototype.hasWinningOption = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Bet bets = 12;
 * @return {!Array<!proto.bhuhot.service.Game.Bet>}
 */
proto.bhuhot.service.Game.prototype.getBetsList = function() {
  return /** @type{!Array<!proto.bhuhot.service.Game.Bet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bhuhot.service.Game.Bet, 12));
};


/** @param {!Array<!proto.bhuhot.service.Game.Bet>} value */
proto.bhuhot.service.Game.prototype.setBetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.bhuhot.service.Game.Bet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bhuhot.service.Game.Bet}
 */
proto.bhuhot.service.Game.prototype.addBets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.bhuhot.service.Game.Bet, opt_index);
};


proto.bhuhot.service.Game.prototype.clearBetsList = function() {
  this.setBetsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AdminGameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AdminGameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AdminGameRequest.displayName = 'proto.bhuhot.service.AdminGameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AdminGameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AdminGameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AdminGameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && bbuhot_service_auth_pb.AuthRequest.toObject(includeInstance, f),
    game: (f = msg.getGame()) && proto.bhuhot.service.Game.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AdminGameRequest}
 */
proto.bhuhot.service.AdminGameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AdminGameRequest;
  return proto.bhuhot.service.AdminGameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AdminGameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AdminGameRequest}
 */
proto.bhuhot.service.AdminGameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bbuhot_service_auth_pb.AuthRequest;
      reader.readMessage(value,bbuhot_service_auth_pb.AuthRequest.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = new proto.bhuhot.service.Game;
      reader.readMessage(value,proto.bhuhot.service.Game.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AdminGameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AdminGameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AdminGameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bbuhot_service_auth_pb.AuthRequest.serializeBinaryToWriter
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bhuhot.service.Game.serializeBinaryToWriter
    );
  }
};


/**
 * required AuthRequest auth = 1;
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.AdminGameRequest.prototype.getAuth = function() {
  return /** @type{!proto.bhuhot.service.AuthRequest} */ (
    jspb.Message.getWrapperField(this, bbuhot_service_auth_pb.AuthRequest, 1, 1));
};


/** @param {!proto.bhuhot.service.AuthRequest} value */
proto.bhuhot.service.AdminGameRequest.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.bhuhot.service.AdminGameRequest.prototype.clearAuth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Game game = 2;
 * @return {!proto.bhuhot.service.Game}
 */
proto.bhuhot.service.AdminGameRequest.prototype.getGame = function() {
  return /** @type{!proto.bhuhot.service.Game} */ (
    jspb.Message.getWrapperField(this, proto.bhuhot.service.Game, 2, 1));
};


/** @param {!proto.bhuhot.service.Game} value */
proto.bhuhot.service.AdminGameRequest.prototype.setGame = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.bhuhot.service.AdminGameRequest.prototype.clearGame = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameRequest.prototype.hasGame = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AdminGameReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AdminGameReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AdminGameReply.displayName = 'proto.bhuhot.service.AdminGameReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AdminGameReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AdminGameReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AdminGameReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authErrorCode: jspb.Message.getField(msg, 1),
    game: (f = msg.getGame()) && proto.bhuhot.service.Game.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AdminGameReply}
 */
proto.bhuhot.service.AdminGameReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AdminGameReply;
  return proto.bhuhot.service.AdminGameReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AdminGameReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AdminGameReply}
 */
proto.bhuhot.service.AdminGameReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (reader.readEnum());
      msg.setAuthErrorCode(value);
      break;
    case 2:
      var value = new proto.bhuhot.service.Game;
      reader.readMessage(value,proto.bhuhot.service.Game.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AdminGameReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AdminGameReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AdminGameReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bhuhot.service.Game.serializeBinaryToWriter
    );
  }
};


/**
 * required AuthReply.AuthErrorCode auth_error_code = 1;
 * @return {!proto.bhuhot.service.AuthReply.AuthErrorCode}
 */
proto.bhuhot.service.AdminGameReply.prototype.getAuthErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bhuhot.service.AuthReply.AuthErrorCode} value */
proto.bhuhot.service.AdminGameReply.prototype.setAuthErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.AdminGameReply.prototype.clearAuthErrorCode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameReply.prototype.hasAuthErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Game game = 2;
 * @return {?proto.bhuhot.service.Game}
 */
proto.bhuhot.service.AdminGameReply.prototype.getGame = function() {
  return /** @type{?proto.bhuhot.service.Game} */ (
    jspb.Message.getWrapperField(this, proto.bhuhot.service.Game, 2));
};


/** @param {?proto.bhuhot.service.Game|undefined} value */
proto.bhuhot.service.AdminGameReply.prototype.setGame = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.bhuhot.service.AdminGameReply.prototype.clearGame = function() {
  this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameReply.prototype.hasGame = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AdminGameStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AdminGameStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AdminGameStatusRequest.displayName = 'proto.bhuhot.service.AdminGameStatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AdminGameStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AdminGameStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && bbuhot_service_auth_pb.AuthRequest.toObject(includeInstance, f),
    gameId: jspb.Message.getField(msg, 2),
    gameStatus: jspb.Message.getField(msg, 3),
    winningOption: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AdminGameStatusRequest}
 */
proto.bhuhot.service.AdminGameStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AdminGameStatusRequest;
  return proto.bhuhot.service.AdminGameStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AdminGameStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AdminGameStatusRequest}
 */
proto.bhuhot.service.AdminGameStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bbuhot_service_auth_pb.AuthRequest;
      reader.readMessage(value,bbuhot_service_auth_pb.AuthRequest.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameId(value);
      break;
    case 3:
      var value = /** @type {!proto.bhuhot.service.Game.Status} */ (reader.readEnum());
      msg.setGameStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinningOption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AdminGameStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AdminGameStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bbuhot_service_auth_pb.AuthRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * required AuthRequest auth = 1;
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.getAuth = function() {
  return /** @type{!proto.bhuhot.service.AuthRequest} */ (
    jspb.Message.getWrapperField(this, bbuhot_service_auth_pb.AuthRequest, 1, 1));
};


/** @param {!proto.bhuhot.service.AuthRequest} value */
proto.bhuhot.service.AdminGameStatusRequest.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.bhuhot.service.AdminGameStatusRequest.prototype.clearAuth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 game_id = 2;
 * @return {number}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bhuhot.service.AdminGameStatusRequest.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.AdminGameStatusRequest.prototype.clearGameId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.hasGameId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required Game.Status game_status = 3;
 * @return {!proto.bhuhot.service.Game.Status}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.getGameStatus = function() {
  return /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.bhuhot.service.Game.Status} value */
proto.bhuhot.service.AdminGameStatusRequest.prototype.setGameStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.bhuhot.service.AdminGameStatusRequest.prototype.clearGameStatus = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.hasGameStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 winning_option = 4;
 * @return {number}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.getWinningOption = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.bhuhot.service.AdminGameStatusRequest.prototype.setWinningOption = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.bhuhot.service.AdminGameStatusRequest.prototype.clearWinningOption = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusRequest.prototype.hasWinningOption = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.AdminGameStatusReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.AdminGameStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.AdminGameStatusReply.displayName = 'proto.bhuhot.service.AdminGameStatusReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.AdminGameStatusReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.AdminGameStatusReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameStatusReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authErrorCode: jspb.Message.getField(msg, 1),
    gameStatusErrorCode: jspb.Message.getField(msg, 2),
    game: (f = msg.getGame()) && proto.bhuhot.service.Game.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.AdminGameStatusReply}
 */
proto.bhuhot.service.AdminGameStatusReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.AdminGameStatusReply;
  return proto.bhuhot.service.AdminGameStatusReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.AdminGameStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.AdminGameStatusReply}
 */
proto.bhuhot.service.AdminGameStatusReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (reader.readEnum());
      msg.setAuthErrorCode(value);
      break;
    case 2:
      var value = /** @type {!proto.bhuhot.service.AdminGameStatusReply.ErrorCode} */ (reader.readEnum());
      msg.setGameStatusErrorCode(value);
      break;
    case 3:
      var value = new proto.bhuhot.service.Game;
      reader.readMessage(value,proto.bhuhot.service.Game.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.AdminGameStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.AdminGameStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.AdminGameStatusReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.bhuhot.service.AdminGameStatusReply.ErrorCode} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bhuhot.service.Game.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bhuhot.service.AdminGameStatusReply.ErrorCode = {
  NO_ERROR: 0,
  LOCKED: 1
};

/**
 * required AuthReply.AuthErrorCode auth_error_code = 1;
 * @return {!proto.bhuhot.service.AuthReply.AuthErrorCode}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.getAuthErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bhuhot.service.AuthReply.AuthErrorCode} value */
proto.bhuhot.service.AdminGameStatusReply.prototype.setAuthErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.AdminGameStatusReply.prototype.clearAuthErrorCode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.hasAuthErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorCode game_status_error_code = 2;
 * @return {!proto.bhuhot.service.AdminGameStatusReply.ErrorCode}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.getGameStatusErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AdminGameStatusReply.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.bhuhot.service.AdminGameStatusReply.ErrorCode} value */
proto.bhuhot.service.AdminGameStatusReply.prototype.setGameStatusErrorCode = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.AdminGameStatusReply.prototype.clearGameStatusErrorCode = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.hasGameStatusErrorCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Game game = 3;
 * @return {?proto.bhuhot.service.Game}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.getGame = function() {
  return /** @type{?proto.bhuhot.service.Game} */ (
    jspb.Message.getWrapperField(this, proto.bhuhot.service.Game, 3));
};


/** @param {?proto.bhuhot.service.Game|undefined} value */
proto.bhuhot.service.AdminGameStatusReply.prototype.setGame = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.bhuhot.service.AdminGameStatusReply.prototype.clearGame = function() {
  this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.AdminGameStatusReply.prototype.hasGame = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.ListGameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bhuhot.service.ListGameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.ListGameRequest.displayName = 'proto.bhuhot.service.ListGameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.ListGameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.ListGameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.ListGameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.ListGameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && bbuhot_service_auth_pb.AuthRequest.toObject(includeInstance, f),
    isAdminRequest: jspb.Message.getFieldWithDefault(msg, 2, false),
    gameStatus: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.ListGameRequest}
 */
proto.bhuhot.service.ListGameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.ListGameRequest;
  return proto.bhuhot.service.ListGameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.ListGameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.ListGameRequest}
 */
proto.bhuhot.service.ListGameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bbuhot_service_auth_pb.AuthRequest;
      reader.readMessage(value,bbuhot_service_auth_pb.AuthRequest.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdminRequest(value);
      break;
    case 3:
      var value = /** @type {!proto.bhuhot.service.Game.Status} */ (reader.readEnum());
      msg.setGameStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.ListGameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.ListGameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.ListGameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.ListGameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bbuhot_service_auth_pb.AuthRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * required AuthRequest auth = 1;
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.ListGameRequest.prototype.getAuth = function() {
  return /** @type{!proto.bhuhot.service.AuthRequest} */ (
    jspb.Message.getWrapperField(this, bbuhot_service_auth_pb.AuthRequest, 1, 1));
};


/** @param {!proto.bhuhot.service.AuthRequest} value */
proto.bhuhot.service.ListGameRequest.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.bhuhot.service.ListGameRequest.prototype.clearAuth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.ListGameRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_admin_request = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.bhuhot.service.ListGameRequest.prototype.getIsAdminRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.bhuhot.service.ListGameRequest.prototype.setIsAdminRequest = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.ListGameRequest.prototype.clearIsAdminRequest = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.ListGameRequest.prototype.hasIsAdminRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required Game.Status game_status = 3;
 * @return {!proto.bhuhot.service.Game.Status}
 */
proto.bhuhot.service.ListGameRequest.prototype.getGameStatus = function() {
  return /** @type {!proto.bhuhot.service.Game.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.bhuhot.service.Game.Status} value */
proto.bhuhot.service.ListGameRequest.prototype.setGameStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.bhuhot.service.ListGameRequest.prototype.clearGameStatus = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.ListGameRequest.prototype.hasGameStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.ListGameReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bhuhot.service.ListGameReply.repeatedFields_, null);
};
goog.inherits(proto.bhuhot.service.ListGameReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.ListGameReply.displayName = 'proto.bhuhot.service.ListGameReply';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bhuhot.service.ListGameReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.ListGameReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.ListGameReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.ListGameReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.ListGameReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authErrorCode: jspb.Message.getField(msg, 1),
    gamesList: jspb.Message.toObjectList(msg.getGamesList(),
    proto.bhuhot.service.Game.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.ListGameReply}
 */
proto.bhuhot.service.ListGameReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.ListGameReply;
  return proto.bhuhot.service.ListGameReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.ListGameReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.ListGameReply}
 */
proto.bhuhot.service.ListGameReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (reader.readEnum());
      msg.setAuthErrorCode(value);
      break;
    case 2:
      var value = new proto.bhuhot.service.Game;
      reader.readMessage(value,proto.bhuhot.service.Game.deserializeBinaryFromReader);
      msg.addGames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.ListGameReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.ListGameReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.ListGameReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.ListGameReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bhuhot.service.Game.serializeBinaryToWriter
    );
  }
};


/**
 * required AuthReply.AuthErrorCode auth_error_code = 1;
 * @return {!proto.bhuhot.service.AuthReply.AuthErrorCode}
 */
proto.bhuhot.service.ListGameReply.prototype.getAuthErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bhuhot.service.AuthReply.AuthErrorCode} value */
proto.bhuhot.service.ListGameReply.prototype.setAuthErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.ListGameReply.prototype.clearAuthErrorCode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.ListGameReply.prototype.hasAuthErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Game games = 2;
 * @return {!Array<!proto.bhuhot.service.Game>}
 */
proto.bhuhot.service.ListGameReply.prototype.getGamesList = function() {
  return /** @type{!Array<!proto.bhuhot.service.Game>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bhuhot.service.Game, 2));
};


/** @param {!Array<!proto.bhuhot.service.Game>} value */
proto.bhuhot.service.ListGameReply.prototype.setGamesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bhuhot.service.Game=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bhuhot.service.Game}
 */
proto.bhuhot.service.ListGameReply.prototype.addGames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bhuhot.service.Game, opt_index);
};


proto.bhuhot.service.ListGameReply.prototype.clearGamesList = function() {
  this.setGamesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.BetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bhuhot.service.BetRequest.repeatedFields_, null);
};
goog.inherits(proto.bhuhot.service.BetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.BetRequest.displayName = 'proto.bhuhot.service.BetRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bhuhot.service.BetRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.BetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.BetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.BetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.BetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && bbuhot_service_auth_pb.AuthRequest.toObject(includeInstance, f),
    gameId: jspb.Message.getField(msg, 2),
    betsList: jspb.Message.toObjectList(msg.getBetsList(),
    proto.bhuhot.service.Game.Bet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.BetRequest}
 */
proto.bhuhot.service.BetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.BetRequest;
  return proto.bhuhot.service.BetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.BetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.BetRequest}
 */
proto.bhuhot.service.BetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bbuhot_service_auth_pb.AuthRequest;
      reader.readMessage(value,bbuhot_service_auth_pb.AuthRequest.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameId(value);
      break;
    case 3:
      var value = new proto.bhuhot.service.Game.Bet;
      reader.readMessage(value,proto.bhuhot.service.Game.Bet.deserializeBinaryFromReader);
      msg.addBets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.BetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.BetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.BetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.BetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bbuhot_service_auth_pb.AuthRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bhuhot.service.Game.Bet.serializeBinaryToWriter
    );
  }
};


/**
 * required AuthRequest auth = 1;
 * @return {!proto.bhuhot.service.AuthRequest}
 */
proto.bhuhot.service.BetRequest.prototype.getAuth = function() {
  return /** @type{!proto.bhuhot.service.AuthRequest} */ (
    jspb.Message.getWrapperField(this, bbuhot_service_auth_pb.AuthRequest, 1, 1));
};


/** @param {!proto.bhuhot.service.AuthRequest} value */
proto.bhuhot.service.BetRequest.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.bhuhot.service.BetRequest.prototype.clearAuth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.BetRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 game_id = 2;
 * @return {number}
 */
proto.bhuhot.service.BetRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bhuhot.service.BetRequest.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.BetRequest.prototype.clearGameId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.BetRequest.prototype.hasGameId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Game.Bet bets = 3;
 * @return {!Array<!proto.bhuhot.service.Game.Bet>}
 */
proto.bhuhot.service.BetRequest.prototype.getBetsList = function() {
  return /** @type{!Array<!proto.bhuhot.service.Game.Bet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bhuhot.service.Game.Bet, 3));
};


/** @param {!Array<!proto.bhuhot.service.Game.Bet>} value */
proto.bhuhot.service.BetRequest.prototype.setBetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bhuhot.service.Game.Bet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bhuhot.service.Game.Bet}
 */
proto.bhuhot.service.BetRequest.prototype.addBets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bhuhot.service.Game.Bet, opt_index);
};


proto.bhuhot.service.BetRequest.prototype.clearBetsList = function() {
  this.setBetsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bhuhot.service.BetReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bhuhot.service.BetReply.repeatedFields_, null);
};
goog.inherits(proto.bhuhot.service.BetReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bhuhot.service.BetReply.displayName = 'proto.bhuhot.service.BetReply';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bhuhot.service.BetReply.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bhuhot.service.BetReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bhuhot.service.BetReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bhuhot.service.BetReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.BetReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authErrorCode: jspb.Message.getField(msg, 1),
    betErrorCode: jspb.Message.getField(msg, 2),
    betsList: jspb.Message.toObjectList(msg.getBetsList(),
    proto.bhuhot.service.Game.Bet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bhuhot.service.BetReply}
 */
proto.bhuhot.service.BetReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bhuhot.service.BetReply;
  return proto.bhuhot.service.BetReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bhuhot.service.BetReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bhuhot.service.BetReply}
 */
proto.bhuhot.service.BetReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (reader.readEnum());
      msg.setAuthErrorCode(value);
      break;
    case 2:
      var value = /** @type {!proto.bhuhot.service.BetReply.BetErrorCode} */ (reader.readEnum());
      msg.setBetErrorCode(value);
      break;
    case 3:
      var value = new proto.bhuhot.service.Game.Bet;
      reader.readMessage(value,proto.bhuhot.service.Game.Bet.deserializeBinaryFromReader);
      msg.addBets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bhuhot.service.BetReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bhuhot.service.BetReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bhuhot.service.BetReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bhuhot.service.BetReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.bhuhot.service.BetReply.BetErrorCode} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bhuhot.service.Game.Bet.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bhuhot.service.BetReply.BetErrorCode = {
  NO_ERROR: 0,
  MONEY_TOO_LOW: 1,
  MONEY_TOO_HIGH: 2,
  OPTION_TOO_MANY: 3,
  NO_ENOUGH_MONEY: 4
};

/**
 * required AuthReply.AuthErrorCode auth_error_code = 1;
 * @return {!proto.bhuhot.service.AuthReply.AuthErrorCode}
 */
proto.bhuhot.service.BetReply.prototype.getAuthErrorCode = function() {
  return /** @type {!proto.bhuhot.service.AuthReply.AuthErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bhuhot.service.AuthReply.AuthErrorCode} value */
proto.bhuhot.service.BetReply.prototype.setAuthErrorCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.bhuhot.service.BetReply.prototype.clearAuthErrorCode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.BetReply.prototype.hasAuthErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BetErrorCode bet_error_code = 2;
 * @return {!proto.bhuhot.service.BetReply.BetErrorCode}
 */
proto.bhuhot.service.BetReply.prototype.getBetErrorCode = function() {
  return /** @type {!proto.bhuhot.service.BetReply.BetErrorCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.bhuhot.service.BetReply.BetErrorCode} value */
proto.bhuhot.service.BetReply.prototype.setBetErrorCode = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.bhuhot.service.BetReply.prototype.clearBetErrorCode = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.bhuhot.service.BetReply.prototype.hasBetErrorCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Game.Bet bets = 3;
 * @return {!Array<!proto.bhuhot.service.Game.Bet>}
 */
proto.bhuhot.service.BetReply.prototype.getBetsList = function() {
  return /** @type{!Array<!proto.bhuhot.service.Game.Bet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bhuhot.service.Game.Bet, 3));
};


/** @param {!Array<!proto.bhuhot.service.Game.Bet>} value */
proto.bhuhot.service.BetReply.prototype.setBetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bhuhot.service.Game.Bet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bhuhot.service.Game.Bet}
 */
proto.bhuhot.service.BetReply.prototype.addBets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bhuhot.service.Game.Bet, opt_index);
};


proto.bhuhot.service.BetReply.prototype.clearBetsList = function() {
  this.setBetsList([]);
};


goog.object.extend(exports, proto.bhuhot.service);


/***/ }),

/***/ "./src/app/routing/navigation-bar/navigation-bar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/routing/navigation-bar/navigation-bar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-bar {\n    height: 59px;\n    padding: 0;\n    margin:0;\n}\n\n.navigation-bar,.second{\n    margin: 0 10rem;\n}\n\n.logo{\n    background-image: url('BETMAN_LOGO.png');\n    background-size: 100% 100%;\n    height: 33px;\n    width: 165px;\n    margin-top: 14px;\n}\n\n.ant-menu-item-selected {\n    color: white;\n    background-color: red;\n}\n\n.ant-menu.ant-menu-dark .ant-menu-item-selected {\n    background-color: rgba(0, 0, 0, .01);\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nli:hover{\n    text-decoration: underline;\n    -webkit-text-decoration-color: white;\n            text-decoration-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0NBQ1o7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSx5Q0FBNkQ7SUFDN0QsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLHFDQUFxQztDQUN4Qzs7QUFHRDtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixxQ0FBNkI7WUFBN0IsNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcm91dGluZy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tYmFyIHtcbiAgICBoZWlnaHQ6IDU5cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46MDtcbn1cblxuLm5hdmlnYXRpb24tYmFyLC5zZWNvbmR7XG4gICAgbWFyZ2luOiAwIDEwcmVtO1xufVxuXG4ubG9nb3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlL0JFVE1BTl9MT0dPLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAxNjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5hbnQtbWVudS5hbnQtbWVudS1kYXJrIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wMSk7XG59XG5cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5saTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routing/navigation-bar/navigation-bar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routing/navigation-bar/navigation-bar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-bar d-flex justify-content-between\">\n  <div class=\"logo\"></div>\n  <div>\n    <ul nz-menu [nzMode]=\"'horizontal'\" [nzTheme]=\"'dark'\" class=\"menu-bg\" >\n      <li nz-menu-item><a [routerLink]=\"['home']\">主页</a></li>\n      <li nz-menu-item><a [routerLink]=\"['competition']\">赛事</a></li>\n      <li nz-menu-item><a [routerLink]=\"['leaderboard']\">排行榜</a></li>\n      <li nz-menu-item><a [routerLink]=\"['wayne']\">韦恩大厦</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routing/navigation-bar/navigation-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routing/navigation-bar/navigation-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () { };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/routing/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/routing/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.component.css":
/*!***********************************************!*\
  !*** ./src/app/routing/routing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-header {\n    padding: 0;\n    margin: 0;\n    height: 59px;\n}\n\nnz-footer {\n    background-color: pink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9yb3V0aW5nL3JvdXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiA1OXB4O1xufVxuXG5uei1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/routing/routing.component.html":
/*!************************************************!*\
  !*** ./src/app/routing/routing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n  <nz-header class=\"header-bg\" >\n      <!--TODO: 后台视UI情况是否隐藏这个nav bar-->\n      <div>\n        <bbuhot-navigation-bar></bbuhot-navigation-bar>\n      </div>\n  </nz-header>\n    <router-outlet></router-outlet>\n  <nz-footer>\n    如无需要footer删除. 所有component 布局在router-outlet中, 对应html在\"/< nz-layout >/\"下布局, 尽量使用阿里UI组件库\n  </nz-footer>\n</nz-layout>\n\n"

/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoutingComponent = /** @class */ (function () {
    function RoutingComponent() {
        this.title = 'Gotham-Spinach';
    }
    RoutingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-root',
            template: __webpack_require__(/*! ./routing.component.html */ "./src/app/routing/routing.component.html"),
            styles: [__webpack_require__(/*! ./routing.component.css */ "./src/app/routing/routing.component.css")]
        })
    ], RoutingComponent);
    return RoutingComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _admin_main_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/main/admin-main/admin-main.component */ "./src/app/admin/main/admin-main/admin-main.component.ts");
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../competition/competition.component */ "./src/app/competition/competition.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leader-board/leader-board.component */ "./src/app/leader-board/leader-board.component.ts");
/* harmony import */ var _wayne_wayne_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wayne/wayne.component */ "./src/app/wayne/wayne.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/routing/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _routing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing.component */ "./src/app/routing/routing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'competition', component: _competition_competition_component__WEBPACK_IMPORTED_MODULE_5__["CompetitionComponent"] },
    { path: 'leaderboard', component: _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_7__["LeaderBoardComponent"] },
    { path: 'wayne', component: _wayne_wayne_component__WEBPACK_IMPORTED_MODULE_8__["WayneComponent"] },
    { path: 'admin', component: _admin_main_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_4__["AdminMainComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_routing_component__WEBPACK_IMPORTED_MODULE_10__["RoutingComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] }]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/wayne/wayne.component.css":
/*!*******************************************!*\
  !*** ./src/app/wayne/wayne.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dheW5lL3dheW5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wayne/wayne.component.html":
/*!********************************************!*\
  !*** ./src/app/wayne/wayne.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  wayne works!\n</p>\n"

/***/ }),

/***/ "./src/app/wayne/wayne.component.ts":
/*!******************************************!*\
  !*** ./src/app/wayne/wayne.component.ts ***!
  \******************************************/
/*! exports provided: WayneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WayneComponent", function() { return WayneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WayneComponent = /** @class */ (function () {
    function WayneComponent() {
    }
    WayneComponent.prototype.ngOnInit = function () { };
    WayneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bbuhot-wayne',
            template: __webpack_require__(/*! ./wayne.component.html */ "./src/app/wayne/wayne.component.html"),
            styles: [__webpack_require__(/*! ./wayne.component.css */ "./src/app/wayne/wayne.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WayneComponent);
    return WayneComponent;
}());



/***/ }),

/***/ "./src/app/wayne/wayne.module.ts":
/*!***************************************!*\
  !*** ./src/app/wayne/wayne.module.ts ***!
  \***************************************/
/*! exports provided: WayneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WayneModule", function() { return WayneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wayne_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wayne.component */ "./src/app/wayne/wayne.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WayneModule = /** @class */ (function () {
    function WayneModule() {
    }
    WayneModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_wayne_component__WEBPACK_IMPORTED_MODULE_1__["WayneComponent"]]
        })
    ], WayneModule);
    return WayneModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/victor/IdeaProjects/bbuhot/bbuhot_client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map