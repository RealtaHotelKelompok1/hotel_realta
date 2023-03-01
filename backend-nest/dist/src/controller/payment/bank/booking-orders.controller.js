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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
<<<<<<< Updated upstream:backend-nest/dist/src/controller/payment/bank/bank.controller.js
const bank_service_1 = require("../../../service/payment/bank/bank.service");
const bank_dto_1 = require("../../../dto/bank.dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
=======
const booking_orders_service_1 = require("../../service/booking/booking-orders.service");
let BookingOrdersController = class BookingOrdersController {
    constructor(bokingorderService) {
        this.bokingorderService = bokingorderService;
>>>>>>> Stashed changes:backend-nest/dist/src/controller/payment/bank/booking-orders.controller.js
    }
    async findAllBank() {
        return await this.bankService.find();
    }
    async findBankById(id) {
        return await this.bankService.find(id);
    }
    async updateBank(id, body) {
        return await this.bankService.update(id, body);
    }
    async insertBank(body) {
        return await this.bankService.insert(body);
    }
    async deleteBank(id) {
        return await this.bankService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findAllBank", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findBankById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
<<<<<<< Updated upstream:backend-nest/dist/src/controller/payment/bank/bank.controller.js
    __metadata("design:paramtypes", [Number, bank_dto_1.BankDto]),
=======
    __metadata("design:paramtypes", [Object]),
>>>>>>> Stashed changes:backend-nest/dist/src/controller/payment/bank/booking-orders.controller.js
    __metadata("design:returntype", Promise)
], BankController.prototype, "updateBank", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
<<<<<<< Updated upstream:backend-nest/dist/src/controller/payment/bank/bank.controller.js
    __metadata("design:paramtypes", [bank_dto_1.BankDto]),
=======
    __metadata("design:paramtypes", [Object, Object]),
>>>>>>> Stashed changes:backend-nest/dist/src/controller/payment/bank/booking-orders.controller.js
    __metadata("design:returntype", Promise)
], BankController.prototype, "insertBank", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
<<<<<<< Updated upstream:backend-nest/dist/src/controller/payment/bank/bank.controller.js
], BankController.prototype, "deleteBank", null);
BankController = __decorate([
    (0, common_1.Controller)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map
=======
], BookingOrdersController.prototype, "remove", null);
BookingOrdersController = __decorate([
    (0, common_1.Controller)('booking-orders'),
    __metadata("design:paramtypes", [booking_orders_service_1.BookingOrdersService])
], BookingOrdersController);
exports.BookingOrdersController = BookingOrdersController;
//# sourceMappingURL=booking-orders.controller.js.map
>>>>>>> Stashed changes:backend-nest/dist/src/controller/payment/bank/booking-orders.controller.js
