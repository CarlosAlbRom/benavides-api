"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 27:
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(10);
const response_model_1 = __webpack_require__(12);
const category_service_1 = __webpack_require__(28);
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getCategories() {
        return this.categoryService.getCategories().then((res) => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getCategoryById(id) {
        return this.categoryService.getCategoryById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No category found");
            }
        });
    }
    createCategory(idDepartment, name, code) {
        return this.categoryService.createCategory(name, code, idDepartment).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updateCategory(id, idDepartment, name, code) {
        if (idDepartment && name && code) {
            return this.categoryService.updateCategory(id, name, code, idDepartment).then(() => {
                return this.getCategoryById(id);
            }, (err) => {
                return new response_model_1.APIResponse().error(err.sqlMessage);
            });
        }
        else {
            return new response_model_1.APIResponse().error("Bad Request");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('id_department')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_department')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Object)
], CategoryController.prototype, "updateCategory", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [typeof (_e = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _e : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),

/***/ 28:
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
exports.CategoryService = void 0;
const category_entity_1 = __webpack_require__(29);
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(9);
let CategoryService = class CategoryService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    getCategories() {
        return this.categoryRepo.find();
    }
    getCategoryById(id) {
        return this.categoryRepo.findOne(id);
    }
    createCategory(name, code, idDeparment) {
        return this.categoryRepo.save({
            code: code,
            name: name,
            id_department: idDeparment
        });
    }
    updateCategory(id, name, code, idDeparment) {
        return this.categoryRepo.update(id, {
            code: code,
            name: name,
            id_department: idDeparment
        });
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31a6cd4ac7e429afeb81")
/******/ })();
/******/ 
/******/ }
;