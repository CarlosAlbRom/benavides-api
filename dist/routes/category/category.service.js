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
exports.CategoryService = void 0;
const category_entity_1 = require("./../../entities/category.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
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
    deleteCategory(id) {
        return this.categoryRepo.delete(id);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map