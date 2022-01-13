"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const slider_module_1 = require("./../routes/slider/slider.module");
const color_module_1 = require("./../routes/color/color.module");
const tag_module_1 = require("./../routes/tag/tag.module");
const department_module_1 = require("./../routes/department/department.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("../routes/auth/auth.module");
const users_module_1 = require("../routes/users/users.module");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
const category_module_1 = require("../routes/category/category.module");
const image_module_1 = require("../routes/image/image.module");
const platform_express_1 = require("@nestjs/platform-express");
const article_module_1 = require("../routes/article/article.module");
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
//# sourceMappingURL=app.module.js.map