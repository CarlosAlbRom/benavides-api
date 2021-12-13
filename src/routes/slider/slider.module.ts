import { JwtStrategy } from '../../strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { SliderController } from './slider.controller';
import { SliderService } from './slider.service';
import { Slider } from 'src/entities/slider.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Slider
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [SliderController],
  providers: [
        SliderService,
        JwtStrategy
    ]
})
export class SliderModule {}
