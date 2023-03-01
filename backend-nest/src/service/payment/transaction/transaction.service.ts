import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import { PaymentTransactionDto } from 'src/dto/paymentTransaction.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService { 
    constructor(
        @InjectRepository(PaymentTransaction)
        private paymentTransactionRepository: Repository<PaymentTransaction>
    ) {}

    async find(query?: string) {
        if (query) {
            return await this.paymentTransactionRepository.query(query)
                .then((result) => {
                    return result
                })
                .catch((err) => {
                    return err
                })
        } else {
            return await this.paymentTransactionRepository
                .query(
                    `SELECT * FROM payment.user_transactions`
                )
                .then((result) => {
                    return result
                })
                .catch((err) => {
                    return err
                })
        }
    }

    async create(newTransaction: PaymentTransactionDto) {
        console.log(newTransaction)
        // Set data to null if no data inserted and became an empty string.
		for (const data in newTransaction) {
			if (newTransaction[data] == '') {
				newTransaction[data] = null
			}
        }

        // Non-booking
        if (newTransaction.orderNumber == null) {
            return await this.paymentTransactionRepository.query(
                `CALL payment.InsertPaymentTransaction($1, $2, $3, $4, $5)`,
                [
                    newTransaction.userId,
                    newTransaction.transactionType,
                    newTransaction.amount,
                    newTransaction.sourceNumber,
                    newTransaction.targetNumber,
                ]
            ).then(() => {
                return this.paymentTransactionRepository.find()
            })
            .catch((err) => {
                return "There's an error in adding new payment transaction, " + err
            })
        
        // Booking
        } else {
            return await this.paymentTransactionRepository.query(
                `CALL payment.InsertBookingPaymentTransaction($1, $2, $3, $4, $5)`,
                [
                    newTransaction.userId, 
                    newTransaction.orderNumber,
                    newTransaction.amount,
                    newTransaction.sourceNumber,
                    newTransaction.targetNumber,
                ])
                .then(() => {
                    return this.paymentTransactionRepository.find()
                })
                .catch((err) => {
                    return "There's an error in adding new booking payment transaction, " + err
                })
        }
    }
}