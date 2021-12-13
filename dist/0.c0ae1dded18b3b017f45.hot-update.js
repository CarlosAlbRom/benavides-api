"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 45:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
const class_validator_1 = __webpack_require__(13);
const class_validator_2 = __webpack_require__(13);
const class_validator_3 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(14);
const typeorm_3 = __webpack_require__(14);
const typeorm_4 = __webpack_require__(14);
const class_validator_4 = __webpack_require__(13);
const typeorm_5 = __webpack_require__(14);
let Image = class Image extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Image.prototype, "id_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Image.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Image.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Image.prototype, "id_article", void 0);
Image = __decorate([
    (0, typeorm_4.Unique)('image', [
        'url'
    ]),
    (0, typeorm_3.Entity)()
], Image);
exports.Image = Image;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e621fe3f9275b56789e3")
/******/ })();
/******/ 
/******/ }
;