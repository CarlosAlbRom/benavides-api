"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const article_service_1 = require("./article.service");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    getCategories() {
        return this.articleService.getArticles().then((res) => {
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
    getFeaturedArticles() {
        return this.articleService.getFeaturedArticles().then((res) => {
            return new response_model_1.APIResponse().success(null, res);
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
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getArticleById", null);
__decorate([
    (0, common_1.Get)('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getFeaturedArticles", null);
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
    __metadata("design:returntype", Promise)
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
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map