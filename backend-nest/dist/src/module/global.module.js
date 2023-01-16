"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const BookingOrderDetail_1 = require("../../entities/BookingOrderDetail");
const BookingOrderDetailExtra_1 = require("../../entities/BookingOrderDetailExtra");
const BookingOrders_1 = require("../../entities/BookingOrders");
const Department_1 = require("../../entities/Department");
const SpecialOfferCoupons_1 = require("../../entities/SpecialOfferCoupons");
const SpecialOffers_1 = require("../../entities/SpecialOffers");
const UserBreakfeast_1 = require("../../entities/UserBreakfeast");
const booking_order_detail_extra_controller_1 = require("../controller/booking/booking-order-detail-extra.controller");
const booking_order_detail_controller_1 = require("../controller/booking/booking-order-detail.controller");
const booking_orders_controller_1 = require("../controller/booking/booking_orders.controller");
const special_offer_coupon_controller_1 = require("../controller/booking/special-offer-coupon.controller");
const special_offers_controller_1 = require("../controller/booking/special_offers.controller");
const user_breakfeast_controller_1 = require("../controller/booking/user-breakfeast.controller");
const department_controller_1 = require("../controller/humanresource/department/department.controller");
const booking_order_detail_extra_service_1 = require("../service/booking/booking-order-detail-extra.service");
const booking_order_detail_service_1 = require("../service/booking/booking-order-detail.service");
const booking_orders_service_1 = require("../service/booking/booking-orders.service");
const special_offer_coupons_service_1 = require("../service/booking/special-offer-coupons.service");
const special_offers_service_1 = require("../service/booking/special_offers.service");
const user_breakfeast_service_1 = require("../service/booking/user-breakfeast.service");
const department_service_1 = require("../service/humanresource/department/department.service");
const shift_service_1 = require("../service/humanresource/shift/shift.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Department_1.Department, SpecialOffers_1.SpecialOffers, SpecialOfferCoupons_1.SpecialOfferCoupons, UserBreakfeast_1.UserBreakfeast, BookingOrderDetail_1.BookingOrderDetail, BookingOrderDetailExtra_1.BookingOrderDetailExtra, BookingOrders_1.BookingOrders])],
        controllers: [department_controller_1.DepartmentController, special_offers_controller_1.SpecialOffersController, booking_order_detail_controller_1.BookingOrderDetailController, booking_order_detail_extra_controller_1.BookingOrderDetailExtraController, booking_orders_controller_1.BookingOrdersController, special_offer_coupon_controller_1.SpecialOfferCouponController, user_breakfeast_controller_1.UserBreakfeastController],
        providers: [department_service_1.DepartmentService, special_offers_service_1.SpecialOffersService, special_offer_coupons_service_1.SpecialOfferCouponsService, booking_orders_service_1.BookingOrdersService, booking_order_detail_service_1.BookingOrderDetailService, booking_order_detail_extra_service_1.BookingOrderDetailExtraService, user_breakfeast_service_1.UserBreakfeastService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map