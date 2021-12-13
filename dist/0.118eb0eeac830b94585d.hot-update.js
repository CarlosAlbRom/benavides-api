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
exports.ColorModule = void 0;
const jwt_strategy_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(16);
const common_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const color_controller_1 = __webpack_require__(18);
const color_service_1 = __webpack_require__(21);
const color_entity_1 = __webpack_require__(22);
let ColorModule = class ColorModule {
};
ColorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                color_entity_1.Color
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [color_controller_1.ColorController],
        providers: [
            color_service_1.ColorService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], ColorModule);
exports.ColorModule = ColorModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2868cebd49f1d358ccdd")
/******/ })();
/******/ 
/******/ }
;