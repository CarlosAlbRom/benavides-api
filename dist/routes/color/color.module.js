"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModule = void 0;
const jwt_strategy_1 = require("./../../strategies/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../app/constants");
const color_controller_1 = require("./color.controller");
const color_service_1 = require("./color.service");
const color_entity_1 = require("../../entities/color.entity");
let ColorModule = class ColorModule {
};
ColorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                color_entity_1.Color
            ]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            })
        ],
        controllers: [color_controller_1.ColorController],
        providers: [
            color_service_1.ColorService,
            jwt_strategy_1.JwtStrategy
        ]
    })
], ColorModule);
exports.ColorModule = ColorModule;
//# sourceMappingURL=color.module.js.map