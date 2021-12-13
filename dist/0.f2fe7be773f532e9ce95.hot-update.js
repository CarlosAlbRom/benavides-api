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
const color_module_1 = __webpack_require__(38);
const tag_module_1 = __webpack_require__(6);
const department_module_1 = __webpack_require__(23);
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const app_controller_1 = __webpack_require__(26);
const app_service_1 = __webpack_require__(27);
const auth_module_1 = __webpack_require__(28);
const users_module_1 = __webpack_require__(31);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const category_module_1 = __webpack_require__(34);
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
            color_module_1.ColorModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
const class_validator_1 = __webpack_require__(13);
const class_validator_2 = __webpack_require__(13);
const class_validator_3 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(14);
const typeorm_3 = __webpack_require__(14);
const typeorm_4 = __webpack_require__(14);
const class_validator_4 = __webpack_require__(13);
const typeorm_5 = __webpack_require__(14);
let Color = class Color extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Color.prototype, "id_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 6 }),
    (0, class_validator_3.MinLength)(3),
    (0, class_validator_2.MaxLength)(6),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "hex", void 0);
Color = __decorate([
    (0, typeorm_4.Unique)('color', [
        'name',
        'code',
        'hex'
    ]),
    (0, typeorm_3.Entity)()
], Color);
exports.Color = Color;


/***/ }),

/***/ 41:
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
exports.Color = void 0;
const class_validator_1 = __webpack_require__(13);
const class_validator_2 = __webpack_require__(13);
const class_validator_3 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(14);
const typeorm_3 = __webpack_require__(14);
const typeorm_4 = __webpack_require__(14);
const class_validator_4 = __webpack_require__(13);
const typeorm_5 = __webpack_require__(14);
let Color = class Color extends typeorm_2.BaseEntity {
};
__decorate([
    (0, typeorm_5.PrimaryGeneratedColumn)(),
    (0, class_validator_4.IsNumber)(),
    __metadata("design:type", Number)
], Color.prototype, "id_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_3.MinLength)(1),
    (0, class_validator_2.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 6 }),
    (0, class_validator_3.MinLength)(3),
    (0, class_validator_2.MaxLength)(6),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Color.prototype, "hex", void 0);
Color = __decorate([
    (0, typeorm_4.Unique)('color', [
        'name',
        'code',
        'hex'
    ]),
    (0, typeorm_3.Entity)()
], Color);
exports.Color = Color;


/***/ }),

/***/ 39:
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
exports.ColorController = void 0;
const jwt_guard_1 = __webpack_require__(19);
const response_model_1 = __webpack_require__(20);
const common_1 = __webpack_require__(8);
const color_service_1 = __webpack_require__(40);
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
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ColorController.prototype, "getColors", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ColorController.prototype, "getColorById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('code')),
    __param(2, (0, common_1.Body)('hex')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
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
ColorController = __decorate([
    (0, common_1.Controller)('color'),
    __metadata("design:paramtypes", [typeof (_d = typeof color_service_1.ColorService !== "undefined" && color_service_1.ColorService) === "function" ? _d : Object])
], ColorController);
exports.ColorController = ColorController;


/***/ }),

/***/ 42:
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
exports.ColorService = void 0;
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const color_entity_1 = __webpack_require__(41);
const typeorm_2 = __webpack_require__(14);
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
};
ColorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(color_entity_1.Color)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ColorService);
exports.ColorService = ColorService;


/***/ }),

/***/ 38:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorModule = void 0;
const jwt_strategy_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(16);
const common_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(11);
const Color_controller_1 = __webpack_require__(39);
const Color_service_1 = __webpack_require__(42);
const Color_entity_1 = __webpack_require__(43);
let ColorModule = class ColorModule {
};
ColorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Color_entity_1.Color
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [Color_controller_1.ColorController],
        providers: [
            Color_service_1.ColorService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], ColorModule);
exports.ColorModule = ColorModule;


/***/ }),

/***/ 40:
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
exports.ColorService = void 0;
const common_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(16);
const color_entity_1 = __webpack_require__(41);
const typeorm_2 = __webpack_require__(14);
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
};
ColorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(color_entity_1.Color)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ColorService);
exports.ColorService = ColorService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("499a54a5ed87a596d5df")
/******/ })();
/******/ 
/******/ }
;