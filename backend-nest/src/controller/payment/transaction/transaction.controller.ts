import { Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private paymentTransactionService: TransactionService) { }
    
    @Get()
    async findAllTransactions() {

    }

    @Get()
    async findByFilter() {

    }

    @Post()
    async createTransaction() {
        
    }
}
