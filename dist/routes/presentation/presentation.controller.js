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
exports.PresentationController = void 0;
const jwt_guard_1 = require("./../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const common_1 = require("@nestjs/common");
const presentation_service_1 = require("./presentation.service");
let PresentationController = class PresentationController {
    constructor(presentationService) {
        this.presentationService = presentationService;
    }
    getPresentations() {
        return this.presentationService.getPresentations().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getPresentationById(id) {
        return this.presentationService.getPresentationById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No presentation found");
            }
        });
    }
    createPresentation(name, code) {
        return this.presentationService.createPresentation(name, code).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updatePresentation(id, name, code) {
        return this.presentationService.updatePresentation(id, name, code).then((res) => {
            return this.getPresentationById(id);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
    deletePresentation(id) {
        return this.presentationService.deletePresentation(id).then(() => {
            return new response_model_1.APIResponse().success("presentation succesfully deleted");
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
], PresentationController.prototype, "getPresentations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "getPresentationById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "createPresentation", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], PresentationController.prototype, "updatePresentation", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PresentationController.prototype, "deletePresentation", null);
PresentationController = __decorate([
    (0, common_1.Controller)('presentation'),
    __metadata("design:paramtypes", [presentation_service_1.PresentationService])
], PresentationController);
exports.PresentationController = PresentationController;
//# sourceMappingURL=presentation.controller.js.map