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
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const color_entity_1 = require("../../entities/color.entity");
const typeorm_2 = require("typeorm");
let ColorService = class ColorService {
    constructor(colorRepo) {
        this.colorRepo = colorRepo;
    }
    getColors() {
        return this.colorRepo.find();
    }
    getColorById(id) {
        return this.colorRepo.findOne(id);
    }
    getMultipleColorsById(ids) {
        return this.colorRepo.findByIds(ids);
    }
    createColor(name, code, hex) {
        return this.colorRepo.save({
            code: code,
            name: name,
            hex: hex
        });
    }
    updateColor(id, name, code, hex) {
        return this.colorRepo.update(id, {
            name: name,
            code: code,
            hex: hex
        });
    }
    deleteColor(id) {
        return this.colorRepo.delete(id);
    }
};
ColorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(color_entity_1.Color)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ColorService);
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map