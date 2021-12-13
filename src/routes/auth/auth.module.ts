import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/app/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      User
    ]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
