"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeOrmConfig = exports.jwtConstants = void 0;
const department_entity_1 = __webpack_require__(22);
const user_entity_1 = __webpack_require__(18);
exports.jwtConstants = {
    secret: "TheLongerTheTextTheBetterItBecomesYaKnowSoKeepItGoingEvenFurtherBeyond"
};
exports.typeOrmConfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "pinturas_benavides_db",
    entities: [
        user_entity_1.User,
        department_entity_1.Department
    ],
    synchronize: true,
    autoLoadEntities: true
};


/***/ }),

/***/ 22:
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
exports.Department = void 0;
const class_validator_1 = __webpack_require__(19);
const typeorm_1 = __webpack_require__(20);
let Department = class Department extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Department.prototype, "id_department", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(45),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Department.prototype, "code", void 0);
Department = __decorate([
    (0, typeorm_1.Entity)()
], Department);
exports.Department = Department;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dd03bcaa28ab1f78e957")
/******/ })();
/******/ 
/******/ }
;