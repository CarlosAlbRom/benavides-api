import { JwtStrategy } from './../../strategies/jwt.strategy';
import { Department } from './../../entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/category.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Category,
      Department
    ])
  ],
  controllers: [CategoryController],
  providers: [
    CategoryService, 
    JwtStrategy
  ]
})
export class CategoryModule {}