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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const department_entity_1 = require("./department.entity");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Category = class Category extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Category.prototype, "id_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Category.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Category.prototype, "id_department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => department_entity_1.Department, department => department.id_department),
    (0, typeorm_1.JoinColumn)({ name: 'id_department' }),
    __metadata("design:type", department_entity_1.Department)
], Category.prototype, "department", void 0);
Category = __decorate([
    (0, typeorm_1.Unique)('category', [
        'name',
        'code'
    ]),
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map