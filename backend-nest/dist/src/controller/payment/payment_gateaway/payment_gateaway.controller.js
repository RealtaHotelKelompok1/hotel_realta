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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGateawayController = void 0;
const common_1 = require("@nestjs/common");
const payment_gateaway_service_1 = require("../../../service/payment/payment_gateaway/payment_gateaway.service");
const payment_gateaway_dto_1 = require("./payment_gateaway.dto");
let PaymentGateawayController = class PaymentGateawayController {
    constructor(paymentGateawayService) {
        this.paymentGateawayService = paymentGateawayService;
    }
    async findAllPaymentGateaway() {
        return await this.paymentGateawayService.find();
    }
    async findAllPaymentGateawayById(id) {
        return await this.paymentGateawayService.find(id);
    }
    async updatePaymentGateaway(id, body) {
        return await this.paymentGateawayService.update(id, body);
    }
    async insertPaymentGateaway(body) {
        return await this.paymentGateawayService.insert(body);
    }
    async deletePaymentGateaway(id) {
        return await this.paymentGateawayService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentGateawayController.prototype, "findAllPaymentGateaway", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentGateawayController.prototype, "findAllPaymentGateawayById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, payment_gateaway_dto_1.PaymentGateawayDto]),
    __metadata("design:returntype", Promise)
], PaymentGateawayController.prototype, "updatePaymentGateaway", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_gateaway_dto_1.PaymentGateawayDto]),
    __metadata("design:returntype", Promise)
], PaymentGateawayController.prototype, "insertPaymentGateaway", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentGateawayController.prototype, "deletePaymentGateaway", null);
PaymentGateawayController = __decorate([
    (0, common_1.Controller)('payment-gateaway'),
    __metadata("design:paramtypes", [payment_gateaway_service_1.PaymentGateawayService])
], PaymentGateawayController);
exports.PaymentGateawayController = PaymentGateawayController;
//# sourceMappingURL=payment_gateaway.controller.js.map