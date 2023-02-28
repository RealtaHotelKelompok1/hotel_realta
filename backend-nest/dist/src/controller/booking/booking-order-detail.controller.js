"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const booking_order_detail_service_1 = require("src/service/booking/booking-order-detail.service");
let BookingOrderDetailController = class BookingOrderDetailController {
    constructor(bookingorderdetailService) {
        this.bookingorderdetailService = bookingorderdetailService;
    }
    findall() {
        return this.bookingorderdetailService.findAllBookingOrderDetail();
    }
    findbyid(id) {
        return this.bookingorderdetailService.findOneBookinfOrderDetail(id);
    }
    create(body) {
        return this.bookingorderdetailService.createBookingOrderDetail(body);
    }
    update(params, body) {
        return this.bookingorderdetailService.updateBokingOrderDetail(params.id, body);
    }
    remove(params) {
        return this.bookingorderdetailService.deleteBookingOrdeDetail(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingOrderDetailController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailController.prototype, "remove", null);
BookingOrderDetailController = __decorate([
    (0, common_1.Controller)('booking-order-detail'),
    __metadata("design:paramtypes", [typeof (_a = typeof booking_order_detail_service_1.BookingOrderDetailService !== "undefined" && booking_order_detail_service_1.BookingOrderDetailService) === "function" ? _a : Object])
], BookingOrderDetailController);
exports.BookingOrderDetailController = BookingOrderDetailController;
//# sourceMappingURL=booking-order-detail.controller.js.map