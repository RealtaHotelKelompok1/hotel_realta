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
    
    async find(id?: number) {
        if (id) {
            return await this.paymentTransactionRepository.findOneByOrFail({
                patrId: id
            }).then((result) => {
                return result
            }).catch((err) => {
                return err
            })
        } else {
            return await this.paymentTransactionRepository
                .find().then((result) => {
                    return result
                })
                .catch((err) => {
                    return err
                })
        }
    }

    async create(newTransaction: PaymentTransactionDto) {
        // TODO: Booking & non-booking transaction
        return await this.paymentTransactionRepository.query(
            `CALL payment.InsertPaymentTransaction()`
        )
    }
}