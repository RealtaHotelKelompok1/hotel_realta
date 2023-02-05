import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
import { PaymentGateawayDto } from './payment_gateaway.dto';
export declare class PaymentGateawayController {
    private paymentGateawayService;
    constructor(paymentGateawayService: PaymentGateawayService);
    findAllPaymentGateaway(): Promise<import("../../../../entities/PaymentGateaway").PaymentGateaway | import("../../../../entities/PaymentGateaway").PaymentGateaway[]>;
    findAllPaymentGateawayById(id: number): Promise<import("../../../../entities/PaymentGateaway").PaymentGateaway | import("../../../../entities/PaymentGateaway").PaymentGateaway[]>;
    updatePaymentGateaway(id: number, body: PaymentGateawayDto): Promise<import("typeorm").UpdateResult>;
    insertPaymentGateaway(body: PaymentGateawayDto): Promise<import("typeorm").InsertResult>;
    deletePaymentGateaway(id: number): Promise<import("typeorm").DeleteResult>;
}
