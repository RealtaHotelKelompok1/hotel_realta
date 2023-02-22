import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentTransactionDto } from 'src/dto/paymentTransaction.dto';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private paymentTransactionService: TransactionService) { }
    
    @Get()
    async findAllTransactions() {
        return await this.paymentTransactionService.find()
    }

    @Get('filter?')
    async findByFilter(@Query() filter: {
        transactionId?: number;
        userId?: number;
        transactionType?: string;
        transactionNumber?: string;
        sourceNumber?: string
    }) {
        switch (true) {
            // Find by transaction ID
            case filter.transactionId != undefined:
                return await this.paymentTransactionService.find(
                    `
                    SELECT *
                    FROM payment.user_transactions
                    WHERE patr_id = ${filter.transactionId}
                    `
                )
            // Find by transaction type
            case filter.transactionType != undefined:
                return await this.paymentTransactionService.find(
                    `
                    SELECT *
                    FROM payment.user_transactions
                    WHERE patr_type = '${filter.transactionType}'
                    `
                )
    
            // Find by user ID
            case filter.userId != undefined:
                return await this.paymentTransactionService.find(
                    `
                    SELECT *
                    FROM payment.user_transactions
                    WHERE patr_user_id = ${filter.userId}
                    `
                )
                
            // Find by transaction number
            case filter.transactionNumber != undefined:
                return await this.paymentTransactionService.find(
                    `
                    SELECT *
                    FROM payment.user_transactions
                    WHERE patr_trx_number = '${filter.transactionNumber}'
                    `
                )
                
            // Find by source number
            case filter.sourceNumber != undefined:
                return await this.paymentTransactionService.find(
                    `
                    SELECT *
                    FROM payment.user_transactions
                    WHERE patr_source_id = '${filter.sourceNumber}'
                    `
                )
        }

    }

    @Post('new')
    async createTransaction(@Body() body: PaymentTransactionDto) {
        return await this.paymentTransactionService.create(body);
    }
}
