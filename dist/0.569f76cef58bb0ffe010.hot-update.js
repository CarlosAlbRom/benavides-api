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
const tag_module_1 = __webpack_require__(34);
const department_module_1 = __webpack_require__(6);
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(16);
const app_controller_1 = __webpack_require__(17);
const app_service_1 = __webpack_require__(18);
const auth_module_1 = __webpack_require__(19);
const users_module_1 = __webpack_require__(25);
const jwt_1 = __webpack_require__(20);
const constants_1 = __webpack_require__(21);
const category_module_1 = __webpack_require__(28);
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
            tag_module_1.TagModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 37:
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
exports.Tag = void 0;
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const class_validator_3 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(9);
const typeorm_3 = __webpack_require__(9);
const typeorm_4 = __webpack_require__(9);
const class_validator_4 = __webpack_require__(8);
const typeorm_5 = __webpack_require__(9);
let Tag = class Tag extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Tag.prototype, "id_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Tag.prototype, "code", void 0);
Tag = __decorate([
    (0, typeorm_4.Unique)('tag', [
        'name',
        'code'
    ]),
    (0, typeorm_3.Entity)()
], Tag);
exports.Tag = Tag;


/***/ }),

/***/ 35:
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
exports.TagController = void 0;
const jwt_guard_1 = __webpack_require__(12);
const response_model_1 = __webpack_require__(14);
const common_1 = __webpack_require__(10);
const tag_service_1 = __webpack_require__(36);
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    getTags() {
        return this.tagService.getTags().then(res => {
            return new response_model_1.APIResponse().success(null, res);
        });
    }
    getTagById(id) {
        return this.tagService.getTagById(id).then((res) => {
            if (res) {
                return new response_model_1.APIResponse().success("", res);
            }
            else {
                return new response_model_1.APIResponse().error("No Tag found");
            }
        });
    }
    createTag(name, code) {
        return this.tagService.createTag(name, code).then((res) => {
            return new response_model_1.APIResponse().success("", res);
        }, (err) => {
            return new response_model_1.APIResponse().success(err.sqlMessage);
        });
    }
    updateTag(id, name, code) {
        return this.tagService.updateTag(id, name, code).then((res) => {
            return this.getTagById(id);
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
], TagController.prototype, "getTags", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TagController.prototype, "getTagById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TagController.prototype, "createTag", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "updateTag", null);
TagController = __decorate([
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [typeof (_d = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" ? _d : Object])
], TagController);
exports.TagController = TagController;


/***/ }),

/***/ 34:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagModule = void 0;
const typeorm_1 = __webpack_require__(16);
const common_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(20);
const constants_1 = __webpack_require__(21);
const tag_controller_1 = __webpack_require__(35);
const tag_service_1 = __webpack_require__(36);
const tag_entity_1 = __webpack_require__(37);
let TagModule = class TagModule {
};
TagModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                tag_entity_1.Tag
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [tag_controller_1.TagController],
        providers: [tag_service_1.TagService]
    })
], TagModule);
exports.TagModule = TagModule;


/***/ }),

/***/ 36:
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
exports.TagService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(16);
const tag_entity_1 = __webpack_require__(37);
const typeorm_2 = __webpack_require__(9);
let TagService = class TagService {
    constructor(tagRepo) {
        this.tagRepo = tagRepo;
    }
    getTags() {
        return this.tagRepo.find();
    }
    getTagById(id) {
        return this.tagRepo.findOne(id);
    }
    createTag(name, code) {
        return this.tagRepo.save({
            code: code,
            name: name,
        });
    }
    updateTag(id, name, code) {
        return this.tagRepo.update(id, {
            name: name,
            code: code
        });
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TagService);
exports.TagService = TagService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("657fc189df685b8decd3")
/******/ })();
/******/ 
/******/ }
;