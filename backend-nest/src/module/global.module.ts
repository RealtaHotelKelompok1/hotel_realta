import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { Users } from 'entities/Users';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Users])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class GlobalModule {}