import { JwtStrategy } from './../../strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { Color } from 'src/entities/color.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Color
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [ColorController],
  providers: [
        ColorService,
        JwtStrategy
    ]
})
export class ColorModule {}
