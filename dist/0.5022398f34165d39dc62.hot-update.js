"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 26:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const department_entity_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(14);
const common_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(19);
const category_controller_1 = __webpack_require__(30);
const category_service_1 = __webpack_require__(31);
const category_entity_1 = __webpack_require__(32);
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                category_entity_1.Category,
                department_entity_1.Department
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [category_controller_1.CategoryController],
        providers: [
            category_service_1.CategoryService,
        ]
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("538ec35490c1926ab580")
/******/ })();
/******/ 
/******/ }
;