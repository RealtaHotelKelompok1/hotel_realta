import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { BankController } from 'src/controller/payment/bank/bank.controller';
import { PaymentGateawayController } from 'src/controller/payment/payment_gateaway/payment_gateaway.controller';
import { BankService } from 'src/service/payment/bank/bank.service';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bank, PaymentGateaway])],
  controllers: [BankController, PaymentGateawayController],
  providers: [BankService, PaymentGateawayService],
})
export class PaymentModule {}
