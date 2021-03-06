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
exports.SliderController = void 0;
const jwt_guard_1 = require("./../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const common_1 = require("@nestjs/common");
const slider_service_1 = require("./slider.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let SliderController = class SliderController {
    constructor(sliderService) {
        this.sliderService = sliderService;
    }
    getSliders() {
        return this.sliderService.getSliders().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    seeUploadedFile(Slider, res) {
        return res.sendFile(Slider, { root: './assets/slider' });
    }
    uploadSlider(Slider, text) {
        console.log(Slider);
        console.log(text);
        if (Slider) {
            return new response_model_1.APIResponse().success("ROUTE WOKS", Slider);
        }
        else {
            return new response_model_1.APIResponse().error("No mages around");
        }
    }
    deleteSlider(id) {
        return this.sliderService.deleteSlider(id).then(() => {
            return new response_model_1.APIResponse().success("Slider succesfully deleted");
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
], SliderController.prototype, "getSliders", null);
__decorate([
    (0, common_1.Get)(':imgpath'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SliderController.prototype, "seeUploadedFile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Slider', {
        storage: (0, multer_1.diskStorage)({
            destination: './assets/article/',
            filename: (req, file, cb) => {
                cb(null, `${file.originalname.split(' ').join('-')}`);
            }
        }),
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], SliderController.prototype, "uploadSlider", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SliderController.prototype, "deleteSlider", null);
SliderController = __decorate([
    (0, common_1.Controller)('slider'),
    __metadata("design:paramtypes", [slider_service_1.SliderService])
], SliderController);
exports.SliderController = SliderController;
const storage = (0, multer_1.diskStorage)({
    destination: "./assets/articles",
    filename: (req, file, callback) => {
        callback(null, generateFilename(file));
    }
});
function generateFilename(file) {
    let str = file.originalname;
    while (str.indexOf(' ') > -1) {
        str.replace(' ', '-');
    }
    return str;
}
//# sourceMappingURL=slider.controller.js.map