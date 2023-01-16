import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankController } from 'src/controller/payment/bank/bank.controller';
import { BankService } from 'src/service/payment/bank/bank.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
