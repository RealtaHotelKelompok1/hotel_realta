"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Bank_1 = require("../../entities/Bank");
const PaymentGateaway_1 = require("../../entities/PaymentGateaway");
const UserAccounts_1 = require("../../entities/UserAccounts");
const bank_controller_1 = require("../controller/payment/bank/bank.controller");
const payment_gateaway_controller_1 = require("../controller/payment/payment_gateaway/payment_gateaway.controller");
const user_accounts_controller_1 = require("../controller/payment/user_accounts/user_accounts.controller");
const bank_service_1 = require("../service/payment/bank/bank.service");
const payment_gateaway_service_1 = require("../service/payment/payment_gateaway/payment_gateaway.service");
const user_accounts_service_1 = require("../service/payment/user_accounts/user_accounts.service");
let PaymentModule = class PaymentModule {
};
PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Bank_1.Bank, PaymentGateaway_1.PaymentGateaway, UserAccounts_1.UserAccounts])],
        controllers: [
            bank_controller_1.BankController,
            payment_gateaway_controller_1.PaymentGateawayController,
            user_accounts_controller_1.UserAccountsController,
        ],
        providers: [bank_service_1.BankService, payment_gateaway_service_1.PaymentGateawayService, user_accounts_service_1.UserAccountsService],
    })
], PaymentModule);
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=payment.module.js.map