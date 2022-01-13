"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderModule = void 0;
const jwt_strategy_1 = require("../../strategies/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../app/constants");
const slider_controller_1 = require("./slider.controller");
const slider_service_1 = require("./slider.service");
const slider_entity_1 = require("../../entities/slider.entity");
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
//# sourceMappingURL=slider.module.js.map