"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModule = void 0;
const jwt_strategy_1 = require("../../strategies/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../app/constants");
const image_controller_1 = require("./image.controller");
const image_service_1 = require("./image.service");
const image_entity_1 = require("../../entities/image.entity");
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
//# sourceMappingURL=image.module.js.map