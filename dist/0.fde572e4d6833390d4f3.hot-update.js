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
const slider_module_1 = __webpack_require__(52);
const color_module_1 = __webpack_require__(6);
const tag_module_1 = __webpack_require__(24);
const department_module_1 = __webpack_require__(28);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(17);
const app_controller_1 = __webpack_require__(31);
const app_service_1 = __webpack_require__(32);
const auth_module_1 = __webpack_require__(33);
const users_module_1 = __webpack_require__(36);
const jwt_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(11);
const category_module_1 = __webpack_require__(39);
const image_module_1 = __webpack_require__(43);
const platform_express_1 = __webpack_require__(47);
const article_module_1 = __webpack_require__(48);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(constants_1.typeOrmConfig),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            }),
            platform_express_1.MulterModule.register({
                dest: './assets'
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            department_module_1.DepartmentModule,
            category_module_1.CategoryModule,
            tag_module_1.TagModule,
            color_module_1.ColorModule,
            image_module_1.ImageModule,
            article_module_1.ArticleModule,
            slider_module_1.SliderModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 55:
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
exports.Slider = void 0;
const class_validator_1 = __webpack_require__(14);
const class_validator_2 = __webpack_require__(14);
const class_validator_3 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const typeorm_2 = __webpack_require__(15);
const typeorm_3 = __webpack_require__(15);
const typeorm_4 = __webpack_require__(15);
const class_validator_4 = __webpack_require__(14);
const typeorm_5 = __webpack_require__(15);
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


/***/ }),

/***/ 53:
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SliderController = void 0;
const jwt_guard_1 = __webpack_require__(20);
const response_model_1 = __webpack_require__(21);
const common_1 = __webpack_require__(8);
const slider_service_1 = __webpack_require__(54);
const platform_express_1 = __webpack_require__(47);
const multer_1 = __webpack_require__(12);
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
        return res.sendFile(Slider, { root: './assets/article' });
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
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
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
    __metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object, String]),
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
    __metadata("design:paramtypes", [typeof (_f = typeof slider_service_1.SliderService !== "undefined" && slider_service_1.SliderService) === "function" ? _f : Object])
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


/***/ }),

/***/ 52:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SliderModule = void 0;
const jwt_strategy_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(17);
const common_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(11);
const slider_controller_1 = __webpack_require__(53);
const slider_service_1 = __webpack_require__(54);
const slider_entity_1 = __webpack_require__(55);
let SliderModule = class SliderModule {
};
SliderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                slider_entity_1.Slider
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [slider_controller_1.SliderController],
        providers: [
            slider_service_1.SliderService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], SliderModule);
exports.SliderModule = SliderModule;


/***/ }),

/***/ 54:
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
exports.SliderService = void 0;
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(17);
const slider_entity_1 = __webpack_require__(55);
const typeorm_2 = __webpack_require__(15);
let SliderService = class SliderService {
    constructor(sliderRepo) {
        this.sliderRepo = sliderRepo;
    }
    getSliders() {
        return this.sliderRepo.find();
    }
    getSliderById(id) {
        return this.sliderRepo.findOne(id);
    }
    getMultipleSlidersById(ids) {
        return this.sliderRepo.findByIds(ids);
    }
    createSlider(title, url, articleId) {
        return this.sliderRepo.save({
            title: title,
            url: url,
            id_article: articleId
        });
    }
    updateSlider(id, title, url) {
        return this.sliderRepo.update(id, {
            title: title,
            url: url
        });
    }
    deleteSlider(id) {
        return this.sliderRepo.delete(id);
    }
};
SliderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(slider_entity_1.Slider)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SliderService);
exports.SliderService = SliderService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("84678ca4d8e3a667ee03")
/******/ })();
/******/ 
/******/ }
;