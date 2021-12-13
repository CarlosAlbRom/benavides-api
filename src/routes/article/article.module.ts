import { JwtStrategy } from './../../strategies/jwt.strategy';
import { Department } from './../../entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from 'src/entities/article.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Article,
      Department
    ])
  ],
  controllers: [ArticleController],
  providers: [
    ArticleService, 
    JwtStrategy
  ]
})
export class ArticleModule {}