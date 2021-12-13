import { JwtStrategy } from './../../strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { PresentationController } from './presentation.controller';
import { PresentationService } from './presentation.service';
import { Presentation } from 'src/entities/presentation.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Presentation
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [PresentationController],
  providers: [
        PresentationService,
        JwtStrategy
    ]
})
export class PresentationModule {}
