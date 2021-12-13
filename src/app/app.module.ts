import { SliderModule } from './../routes/slider/slider.module';
import { ColorModule } from './../routes/color/color.module';
import { TagModule } from './../routes/tag/tag.module';
import { DepartmentModule } from './../routes/department/department.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../routes/auth/auth.module';
import { UsersModule } from '../routes/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants, typeOrmConfig } from './constants';
import { CategoryModule } from 'src/routes/category/category.module';
import { ImageModule } from 'src/routes/image/image.module';
import { MulterModule } from '@nestjs/platform-express';
import { ArticleModule } from 'src/routes/article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    JwtModule.register({
      secret: jwtConstants.secret
    }),
    MulterModule.register({
      dest: './assets'
    }),
    AuthModule,
    UsersModule,
    DepartmentModule,
    CategoryModule,
    TagModule,
    ColorModule,
    ImageModule,
    ArticleModule,
    SliderModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    
  ],
})
export class AppModule {}
