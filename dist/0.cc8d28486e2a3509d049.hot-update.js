"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tag_module_1 = __webpack_require__(6);
const department_module_1 = __webpack_require__(23);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const app_controller_1 = __webpack_require__(26);
const app_service_1 = __webpack_require__(27);
const auth_module_1 = __webpack_require__(28);
const users_module_1 = __webpack_require__(31);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const category_module_1 = __webpack_require__(34);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(constants_1.typeOrmConfig),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            department_module_1.DepartmentModule,
            category_module_1.CategoryModule,
            tag_module_1.TagModule,
            ColorModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2fe7be773f532e9ce95")
/******/ })();
/******/ 
/******/ }
;