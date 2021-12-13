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
            article_module_1.ArticleModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 51:
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
exports.Article = void 0;
const class_validator_1 = __webpack_require__(14);
const class_validator_2 = __webpack_require__(14);
const class_validator_3 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const typeorm_2 = __webpack_require__(15);
const typeorm_3 = __webpack_require__(15);
const typeorm_4 = __webpack_require__(15);
const class_validator_4 = __webpack_require__(14);
const typeorm_5 = __webpack_require__(15);
let Article = class Article extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Article.prototype, "id_article", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(255),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Article.prototype, "id_category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Article.prototype, "id_department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Article.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Article.prototype, "featured", void 0);
Article = __decorate([
    (0, typeorm_4.Unique)('article', [
        'name',
        'code'
    ]),
    (0, typeorm_3.Entity)()
], Article);
exports.Article = Article;


/***/ }),

/***/ 49:
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticleController = void 0;
const common_1 = __webpack_require__(8);
const jwt_guard_1 = __webpack_require__(20);
const response_model_1 = __webpack_require__(21);
const article_service_1 = __webpack_require__(50);
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    getCategories() {
        return this.articleService.getCategories().then((res) => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getArticleById(id) {
        return this.articleService.getArticleById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Article found");
            }
        });
    }
    createArticle(idDepartment, name, code) {
        return this.articleService.createArticle(name, code, idDepartment).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().error(err.sqlMessage);
        });
    }
    updateArticle(id, idDepartment, name, code) {
        if (idDepartment && name && code) {
            return this.articleService.updateArticle(id, name, code, idDepartment).then(() => {
                return this.getArticleById(id);
            }, (err) => {
                return new response_model_1.APIResponse().error(err.sqlMessage);
            });
        }
        else {
            return new response_model_1.APIResponse().error("Bad Request");
        }
    }
    deleteArticle(id) {
        return this.articleService.deleteArticle(id).then(() => {
            return new response_model_1.APIResponse().success("Article succesfully deleted");
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
], ArticleController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getArticleById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('id_department')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_department')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Object)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "deleteArticle", null);
ArticleController = __decorate([
    (0, common_1.Controller)('Article'),
    __metadata("design:paramtypes", [typeof (_e = typeof article_service_1.ArticleService !== "undefined" && article_service_1.ArticleService) === "function" ? _e : Object])
], ArticleController);
exports.ArticleController = ArticleController;


/***/ }),

/***/ 48:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticleModule = void 0;
const jwt_strategy_1 = __webpack_require__(7);
const department_entity_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(17);
const common_1 = __webpack_require__(8);
const article_controller_1 = __webpack_require__(49);
const article_service_1 = __webpack_require__(50);
const article_entity_1 = __webpack_require__(51);
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                article_entity_1.Article,
                department_entity_1.Department
            ])
        ],
        controllers: [article_controller_1.ArticleController],
        providers: [
            article_service_1.ArticleService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;


/***/ }),

/***/ 50:
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
exports.ArticleService = void 0;
const article_entity_1 = __webpack_require__(51);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(17);
const typeorm_2 = __webpack_require__(15);
let ArticleService = class ArticleService {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    getCategories() {
        return this.articleRepo.find();
    }
    getArticleById(id) {
        return this.articleRepo.findOne(id);
    }
    createArticle(name, code, idDeparment) {
        return this.articleRepo.save({
            code: code,
            name: name,
            id_department: idDeparment
        });
    }
    updateArticle(id, name, code, idDeparment) {
        return this.articleRepo.update(id, {
            code: code,
            name: name,
            id_department: idDeparment
        });
    }
    deleteArticle(id) {
        return this.articleRepo.delete(id);
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ArticleService);
exports.ArticleService = ArticleService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e7b0d32e41aa420343b")
/******/ })();
/******/ 
/******/ }
;