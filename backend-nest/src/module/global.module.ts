import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
import { BookingOrders } from 'entities/BookingOrders';
import { Department } from 'entities/Department';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';
import { SpecialOffers } from 'entities/SpecialOffers';
import { UserBreakfeast } from 'entities/UserBreakfeast';
import { BookingOrderDetailExtraController } from 'src/controller/booking/booking-order-detail-extra.controller';
import { BookingOrderDetailController } from 'src/controller/booking/booking-order-detail.controller';
import { SpecialOfferCouponController } from 'src/controller/booking/special-offer-coupon.controller';
import { SpecialOffersController } from 'src/controller/booking/special_offers.controller';
import { UserBreakfeastController } from 'src/controller/booking/user-breakfeast.controller';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { BookingOrderDetailExtraService } from 'src/service/booking/booking-order-detail-extra.service';
import { BookingOrderDetailService } from 'src/service/booking/booking-order-detail.service';
import { BookingOrdersService } from 'src/service/booking/booking-orders.service';
import { SpecialOfferCouponsService } from 'src/service/booking/special-offer-coupons.service';
import { SpecialOffersService } from 'src/service/booking/special_offers.service';
import { UserBreakfeastService } from 'src/service/booking/user-breakfeast.service';
import { DepartmentService } from 'src/service/humanresource/department/department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department,SpecialOffers,SpecialOfferCoupons,UserBreakfeast,BookingOrderDetail,BookingOrderDetailExtra,BookingOrders])],
  controllers: [DepartmentController,SpecialOffersController,BookingOrderDetailController,BookingOrderDetailExtraController,SpecialOfferCouponController,UserBreakfeastController,BookingOrders],
  providers: [DepartmentService,SpecialOffersService,SpecialOfferCouponsService,BookingOrdersService,BookingOrderDetailService,BookingOrderDetailExtraService,UserBreakfeastService],
})
export class GlobalModule {}