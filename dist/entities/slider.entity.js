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
exports.Slider = void 0;
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const class_validator_3 = require("class-validator");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
const class_validator_4 = require("class-validator");
const typeorm_5 = require("typeorm");
let Slider = class Slider extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Slider.prototype, "id_slider", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Slider.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Slider.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Slider.prototype, "order", void 0);
Slider = __decorate([
    (0, typeorm_4.Unique)('slider', [
        'url'
    ]),
    (0, typeorm_3.Entity)()
], Slider);
exports.Slider = Slider;
//# sourceMappingURL=slider.entity.js.map