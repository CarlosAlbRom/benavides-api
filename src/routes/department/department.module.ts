import { JwtStrategy } from './../../strategies/jwt.strategy';
import { Department } from './../../entities/department.entity';
import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department
    ]),
  ],
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    JwtStrategy
  ]
})
export class DepartmentModule {}
