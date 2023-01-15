import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { Shift } from 'entities/Shift';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      Shift
    ]),
  ],
  controllers: [
    DepartmentController,
    ShiftController
  ],
  providers: [
    DepartmentService,
    ShiftService
  ],
})
export class GlobalModule {}
