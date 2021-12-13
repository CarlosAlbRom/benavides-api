"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 49:
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
exports.ArticleController = void 0;
const common_1 = __webpack_require__(8);
const jwt_guard_1 = __webpack_require__(20);
const response_model_1 = __webpack_require__(21);
const article_service_1 = __webpack_require__(50);
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    getCategories() {
        return this.articleService.getCategories().then((res) => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getArticleById(id) {
        return this.articleService.getArticleById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Article found");
            }
        });
    }
    createArticle(idDepartment, name, code, idCategory, description, featured, price) {
        return this.articleService.createArticle(name, code, idDepartment, idCategory, description, featured, price).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
    updateArticle(id, idDepartment, name, code, idCategory, description, featured, price, url) {
        if (idDepartment && name && code) {
            return this.articleService.updateArticle(id, name, code, idDepartment, idCategory, description, featured, price, url).then(() => {
                return this.getArticleById(id);
            }, (err) => {
                return new response_model_1.APIResponse().error(err.sqlMessage);
            });
        }
        else {
            return new response_model_1.APIResponse().error("Bad Request");
        }
    }
    deleteArticle(id) {
        return this.articleService.deleteArticle(id).then(() => {
            return new response_model_1.APIResponse().success("Article succesfully deleted");
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
], ArticleController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getArticleById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('id_department')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __param(3, (0, common_1.Body)('id_category')),
    __param(4, (0, common_1.Body)('description')),
    __param(5, (0, common_1.Body)('featured')),
    __param(6, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number, String, Boolean, Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_department')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('code')),
    __param(4, (0, common_1.Body)('id_category')),
    __param(5, (0, common_1.Body)('description')),
    __param(6, (0, common_1.Body)('featured')),
    __param(7, (0, common_1.Body)('price')),
    __param(8, (0, common_1.Body)('image_url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, String, Boolean, Number, String]),
    __metadata("design:returntype", Object)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "deleteArticle", null);
ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [typeof (_e = typeof article_service_1.ArticleService !== "undefined" && article_service_1.ArticleService) === "function" ? _e : Object])
], ArticleController);
exports.ArticleController = ArticleController;


/***/ }),

/***/ 50:
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
exports.ArticleService = void 0;
const article_entity_1 = __webpack_require__(51);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(17);
const typeorm_2 = __webpack_require__(15);
let ArticleService = class ArticleService {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    getCategories() {
        return this.articleRepo.find();
    }
    getArticleById(id) {
        return this.articleRepo.findOne(id);
    }
    createArticle(name, code, idDeparment, idCategory, description, featured, price) {
        return this.articleRepo.save({
            code: code,
            name: name,
            id_department: idDeparment,
            id_category: idCategory,
            description: description,
            featured: featured,
            price: price
        });
    }
    updateArticle(id, name, code, idDeparment, idCategory, description, featured, price, url) {
        return this.articleRepo.update(id, {
            code: code,
            name: name,
            id_department: idDeparment,
            id_category: idCategory,
            description: description,
            featured: featured,
            price: price,
            image_url: url
        });
    }
    deleteArticle(id) {
        return this.articleRepo.delete(id);
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ArticleService);
exports.ArticleService = ArticleService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("defb4e6f14ec751743de")
/******/ })();
/******/ 
/******/ }
;