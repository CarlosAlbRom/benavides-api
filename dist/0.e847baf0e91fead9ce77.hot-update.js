"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 21:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagService = void 0;
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const tag_entity_1 = __webpack_require__(22);
const typeorm_2 = __webpack_require__(14);
let TagService = class TagService {
    constructor(tagRepo) {
        this.tagRepo = tagRepo;
    }
    getTags() {
        return this.tagRepo.find();
    }
    getTagById(id) {
        return this.tagRepo.findOne(id);
    }
    getMultipleTagsById(ids) {
        return this.tagRepo.findByIds(ids);
    }
    createTag(name, code) {
        return this.tagRepo.save({
            code: code,
            name: name,
        });
    }
    updateTag(id, name, code) {
        return this.tagRepo.update(id, {
            name: name,
            code: code
        });
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TagService);
exports.TagService = TagService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc8d28486e2a3509d049")
/******/ })();
/******/ 
/******/ }
;