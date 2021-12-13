import { JwtStrategy } from '../../strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { Image } from 'src/entities/image.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Image
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [ImageController],
  providers: [
        ImageService,
        JwtStrategy
    ]
})
export class ImageModule {}
