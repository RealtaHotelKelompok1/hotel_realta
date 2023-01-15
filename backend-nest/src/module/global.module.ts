import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
import { BookingOrders } from 'entities/BookingOrders';
import { Department } from 'entities/Department';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Shift])],
  controllers: [DepartmentController, ShiftController],
  providers: [DepartmentService, ShiftService],
})
export class GlobalModule {}