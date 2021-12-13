"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const color_module_1 = __webpack_require__(6);
const tag_module_1 = __webpack_require__(23);
const department_module_1 = __webpack_require__(27);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const app_controller_1 = __webpack_require__(30);
const app_service_1 = __webpack_require__(31);
const auth_module_1 = __webpack_require__(32);
const users_module_1 = __webpack_require__(35);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const category_module_1 = __webpack_require__(38);
const image_module_1 = __webpack_require__(42);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(constants_1.typeOrmConfig),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            department_module_1.DepartmentModule,
            category_module_1.CategoryModule,
            tag_module_1.TagModule,
            color_module_1.ColorModule,
            image_module_1.ImageModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 45:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
const class_validator_1 = __webpack_require__(13);
const class_validator_2 = __webpack_require__(13);
const class_validator_3 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(14);
const typeorm_3 = __webpack_require__(14);
const typeorm_4 = __webpack_require__(14);
const class_validator_4 = __webpack_require__(13);
const typeorm_5 = __webpack_require__(14);
let Image = class Image extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Image.prototype, "id_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Image.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Image.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Image.prototype, "id_article", void 0);
Image = __decorate([
    (0, typeorm_4.Unique)('image', [
        'name',
        'code'
    ]),
    (0, typeorm_3.Entity)()
], Image);
exports.Image = Image;


/***/ }),

/***/ 43:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageController = void 0;
const jwt_guard_1 = __webpack_require__(19);
const response_model_1 = __webpack_require__(20);
const common_1 = __webpack_require__(8);
const image_service_1 = __webpack_require__(44);
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    getImages() {
        return this.imageService.getImages().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getImageById(id) {
        return this.imageService.getImageById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Image found");
            }
        });
    }
    createImage(title, code, articleId) {
        return this.imageService.createImage(title, "", articleId).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updateImage(id, title, url) {
        return this.imageService.updateImage(id, title, url).then((res) => {
            return this.getImageById(id);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
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
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ImageController.prototype, "getImages", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ImageController.prototype, "getImageById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('code')),
    __param(2, (0, common_1.Body)('article')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ImageController.prototype, "createImage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "updateImage", null);
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
    __metadata("design:paramtypes", [typeof (_d = typeof image_service_1.ImageService !== "undefined" && image_service_1.ImageService) === "function" ? _d : Object])
], ImageController);
exports.ImageController = ImageController;


/***/ }),

/***/ 42:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageModule = void 0;
const jwt_strategy_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(16);
const common_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const image_controller_1 = __webpack_require__(43);
const image_service_1 = __webpack_require__(44);
const image_entity_1 = __webpack_require__(45);
let ImageModule = class ImageModule {
};
ImageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                image_entity_1.Image
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [image_controller_1.ImageController],
        providers: [
            image_service_1.ImageService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], ImageModule);
exports.ImageModule = ImageModule;


/***/ }),

/***/ 44:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageService = void 0;
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const image_entity_1 = __webpack_require__(45);
const typeorm_2 = __webpack_require__(14);
let ImageService = class ImageService {
    constructor(imageRepo) {
        this.imageRepo = imageRepo;
    }
    getImages() {
        return this.imageRepo.find();
    }
    getImageById(id) {
        return this.imageRepo.findOne(id);
    }
    getMultipleImagesById(ids) {
        return this.imageRepo.findByIds(ids);
    }
    createImage(title, url, articleId) {
        return this.imageRepo.save({
            title: title,
            url: url,
            id_article: articleId
        });
    }
    updateImage(id, title, url) {
        return this.imageRepo.update(id, {
            title: title,
            url: url
        });
    }
    deleteImage(id) {
        return this.imageRepo.delete(id);
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ImageService);
exports.ImageService = ImageService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bdcc763cf54aea382338")
/******/ })();
/******/ 
/******/ }
;