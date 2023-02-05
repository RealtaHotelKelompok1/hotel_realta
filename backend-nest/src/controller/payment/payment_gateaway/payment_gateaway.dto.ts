/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class PaymentGateawayDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'Payment Gateaway code is too long!',
  })
  paymentGateawayCode: string;
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(55, {
    message: 'Payment Gateaway name is too long!',
  })
  paymentGateawayName: string;
}
