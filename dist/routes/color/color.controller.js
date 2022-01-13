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
exports.ColorController = void 0;
const jwt_guard_1 = require("./../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const common_1 = require("@nestjs/common");
const color_service_1 = require("./color.service");
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    getColors() {
        return this.colorService.getColors().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getColorById(id) {
        return this.colorService.getColorById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Color found");
            }
        });
    }
    createColor(name, code, hex) {
        return this.colorService.createColor(name, code, hex).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updateColor(id, name, code, hex) {
        return this.colorService.updateColor(id, name, code, hex).then((res) => {
            return this.getColorById(id);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
    deleteColor(id) {
        return this.colorService.deleteColor(id).then(() => {
            return new response_model_1.APIResponse().success("Color succesfully deleted");
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
], ColorController.prototype, "getColors", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "getColorById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('code')),
    __param(2, (0, common_1.Body)('hex')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "createColor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __param(3, (0, common_1.Body)('hex')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "updateColor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "deleteColor", null);
ColorController = __decorate([
    (0, common_1.Controller)('color'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
exports.ColorController = ColorController;
//# sourceMappingURL=color.controller.js.map