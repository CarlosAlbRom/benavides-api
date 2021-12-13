import { JwtStrategy } from './../../strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { Tag } from 'src/entities/tag.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Tag
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [TagController],
  providers: [
        TagService,
        JwtStrategy
    ]
})
export class TagModule {}
