"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(11);
const response_model_1 = __webpack_require__(18);
const auth_service_1 = __webpack_require__(19);
let AuthController = class AuthController {
    constructor(authService, jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }
    logIn(username, password) {
        return this.authService.logIn(username, password).then((res) => {
            if (res) {
                let token = this.jwtService.sign({
                    id_user: res.id_user,
                    username: res.username,
                    last_name: res.last_name,
                    name: res.name,
                    email: res.email
                });
                return new response_model_1.APIResponse().success(null, Object.assign(Object.assign({}, res), { token: token }));
            }
        });
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AuthController.prototype, "logIn", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ 10:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const typeorm_1 = __webpack_require__(7);
const common_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(12);
const auth_controller_1 = __webpack_require__(17);
const auth_service_1 = __webpack_require__(19);
const user_entity_1 = __webpack_require__(16);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ 19:
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
exports.AuthService = void 0;
const user_entity_1 = __webpack_require__(16);
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(15);
let AuthService = class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    logIn(username, password) {
        return this.userRepo.findOne({ where: {
                username: username,
                password: password
            } });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff007574b93840a3f91f")
/******/ })();
/******/ 
/******/ }
;