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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const category_service_1 = require("./category.service");
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
            return new response_model_1.APIResponse().error(err.sqlMessage);
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
    deleteCategory(id) {
        return this.categoryService.deleteCategory(id).then(() => {
            return new response_model_1.APIResponse().success("Category succesfully deleted");
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
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('id_department')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_department')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Object)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "deleteCategory", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map