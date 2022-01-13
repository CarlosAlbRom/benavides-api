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
exports.PresentationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presentation_entity_1 = require("../../entities/presentation.entity");
const typeorm_2 = require("typeorm");
let PresentationService = class PresentationService {
    constructor(presentationRepo) {
        this.presentationRepo = presentationRepo;
    }
    getPresentations() {
        return this.presentationRepo.find();
    }
    getPresentationById(id) {
        return this.presentationRepo.findOne(id);
    }
    getMultiplePresentationsById(ids) {
        return this.presentationRepo.findByIds(ids);
    }
    createPresentation(name, code) {
        return this.presentationRepo.save({
            code: code,
            name: name,
        });
    }
    updatePresentation(id, name, code) {
        return this.presentationRepo.update(id, {
            name: name,
            code: code
        });
    }
    deletePresentation(id) {
        return this.presentationRepo.delete(id);
    }
};
PresentationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(presentation_entity_1.Presentation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PresentationService);
exports.PresentationService = PresentationService;
//# sourceMappingURL=presentation.service.js.map