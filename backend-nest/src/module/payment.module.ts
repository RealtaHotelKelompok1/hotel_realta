import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { UserAccounts } from 'entities/UserAccounts';
import { BankController } from 'src/controller/payment/bank/bank.controller';
import { PaymentGateawayController } from 'src/controller/payment/payment_gateaway/payment_gateaway.controller';
import { UserAccountsController } from 'src/controller/payment/user_accounts/user_accounts.controller';
import { BankService } from 'src/service/payment/bank/bank.service';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bank, PaymentGateaway, UserAccounts])],
  controllers: [
    BankController,
    PaymentGateawayController,
    UserAccountsController,
  ],
  providers: [BankService, PaymentGateawayService, UserAccountsService],
})
export class PaymentModule {}
