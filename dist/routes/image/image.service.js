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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("../../entities/image.entity");
const typeorm_2 = require("typeorm");
let ImageService = class ImageService {
    constructor(imageRepo) {
        this.imageRepo = imageRepo;
    }
    getImages() {
        return this.imageRepo.find();
    }
    getImageById(id) {
        return this.imageRepo.findOne(id);
    }
    getMultipleImagesById(ids) {
        return this.imageRepo.findByIds(ids);
    }
    createImage(title, url, articleId) {
        return this.imageRepo.save({
            title: title,
            url: url,
            id_article: articleId
        });
    }
    updateImage(id, title, url) {
        return this.imageRepo.update(id, {
            title: title,
            url: url
        });
    }
    deleteImage(id) {
        return this.imageRepo.delete(id);
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map