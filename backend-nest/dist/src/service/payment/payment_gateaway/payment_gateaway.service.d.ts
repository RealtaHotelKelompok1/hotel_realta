import { PaymentGateaway } from 'entities/PaymentGateaway';
import { PaymentGateawayDto } from 'src/controller/payment/payment_gateaway/payment_gateaway.dto';
import { Repository } from 'typeorm';
export declare class PaymentGateawayService {
    private PaymentGateawayRepository;
    constructor(PaymentGateawayRepository: Repository<PaymentGateaway>);
    find(id?: number): Promise<PaymentGateaway | PaymentGateaway[]>;
    update(id: number, dataToUpdate: PaymentGateawayDto): Promise<import("typeorm").UpdateResult>;
    insert(newData: PaymentGateawayDto): Promise<import("typeorm").InsertResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
