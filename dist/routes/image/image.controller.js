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
exports.ImageController = void 0;
const jwt_guard_1 = require("./../../guards/jwt.guard");
const response_model_1 = require("../../models/response.model");
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    getImages() {
        return this.imageService.getImages().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    seeUploadedFile(image, res) {
        return res.sendFile(image, { root: './assets/article' });
    }
    uploadImage(image, text) {
        console.log(image);
        console.log(text);
        if (image) {
            return new response_model_1.APIResponse().success("ROUTE WOKS", image);
        }
        else {
            return new response_model_1.APIResponse().error("No mages around");
        }
    }
    deleteImage(id) {
        return this.imageService.deleteImage(id).then(() => {
            return new response_model_1.APIResponse().success("Image succesfully deleted");
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
], ImageController.prototype, "getImages", null);
__decorate([
    (0, common_1.Get)(':imgpath'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "seeUploadedFile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
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
], ImageController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "deleteImage", null);
ImageController = __decorate([
    (0, common_1.Controller)('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
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
//# sourceMappingURL=image.controller.js.map