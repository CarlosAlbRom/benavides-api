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
exports.ArticleService = void 0;
const article_entity_1 = require("./../../entities/article.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ArticleService = class ArticleService {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    getArticles() {
        return this.articleRepo.find();
    }
    getArticleById(id) {
        return this.articleRepo.findOne(id);
    }
    getFeaturedArticles() {
        return this.articleRepo.find({ where: {
                featured: true
            } });
    }
    getRelatedArticles(categoryId) {
        return this.articleRepo.find({
            where: {
                id_category: categoryId
            },
            take: 5,
        });
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
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map