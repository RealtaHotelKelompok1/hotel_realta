import { IsOptional } from 'class-validator';

export class PaymentTransactionDto {
    userId: number;
    
    @IsOptional()
    orderNumber: string;

    paymentType: string;

    @IsOptional()
    transactionType: string;
    
    amount: number;
    sourceNumber: string;
    targetNumber: string;
}