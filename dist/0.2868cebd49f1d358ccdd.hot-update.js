"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 25:
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagController = void 0;
const jwt_guard_1 = __webpack_require__(19);
const response_model_1 = __webpack_require__(20);
const common_1 = __webpack_require__(8);
const tag_service_1 = __webpack_require__(26);
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    getTags() {
        return this.tagService.getTags().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getTagById(id) {
        return this.tagService.getTagById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Tag found");
            }
        });
    }
    createTag(name, code) {
        return this.tagService.createTag(name, code).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updateTag(id, name, code) {
        return this.tagService.updateTag(id, name, code).then((res) => {
            return this.getTagById(id);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
    deleteTag(id) {
        return this.tagService.deleteTag(id).then(() => {
            return new response_model_1.APIResponse().success("Tag succesfully deleted");
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], TagController.prototype, "getTags", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TagController.prototype, "getTagById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TagController.prototype, "createTag", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "updateTag", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    Delete(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "deleteTag", null);
TagController = __decorate([
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [typeof (_d = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" ? _d : Object])
], TagController);
exports.TagController = TagController;


/***/ }),

/***/ 26:
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
const tag_entity_1 = __webpack_require__(27);
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
    deleteTag(id) {
        return this.tagRepo.delete(id);
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
/******/ 	__webpack_require__.h = () => ("270df0dfc98e9b281441")
/******/ })();
/******/ 
/******/ }
;