"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 6:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentModule = void 0;
const jwt_strategy_1 = __webpack_require__(29);
const department_entity_1 = __webpack_require__(7);
const common_1 = __webpack_require__(10);
const department_controller_1 = __webpack_require__(11);
const department_service_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(16);
let DepartmentModule = class DepartmentModule {
};
DepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                department_entity_1.Department
            ]),
        ],
        controllers: [department_controller_1.DepartmentController],
        providers: [
            department_service_1.DepartmentService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], DepartmentModule);
exports.DepartmentModule = DepartmentModule;


/***/ }),

/***/ 34:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagModule = void 0;
const jwt_strategy_1 = __webpack_require__(29);
const typeorm_1 = __webpack_require__(16);
const common_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(20);
const constants_1 = __webpack_require__(21);
const tag_controller_1 = __webpack_require__(35);
const tag_service_1 = __webpack_require__(36);
const tag_entity_1 = __webpack_require__(37);
let TagModule = class TagModule {
};
TagModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                tag_entity_1.Tag
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [tag_controller_1.TagController],
        providers: [
            tag_service_1.TagService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], TagModule);
exports.TagModule = TagModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70ca59b13d679c2addcf")
/******/ })();
/******/ 
/******/ }
;