import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { PaymentGateawayDto } from 'src/controller/payment/payment_gateaway/payment_gateaway.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentGateawayService {
  constructor(
    @InjectRepository(PaymentGateaway)
    private PaymentGateawayRepository: Repository<PaymentGateaway>,
  ) {}

  /** CRUD on Payment Gateaway Entity
   * TODO: Find Payment Gateaway          [V]
   * TODO: Find Payment Gateaway by ID    [V]
   * TODO: Update Payment Gateaway by ID  [V]
   * TODO: Insert New Payment Gateaway    [V]
   * TODO: Delete Payment Gateaway        [V]
   */

  async find(id?: number) {
    if (id) {
      return await this.PaymentGateawayRepository.findOneByOrFail({
        pagaEntityId: id,
      });
    } else {
      return await this.PaymentGateawayRepository.find();
    }
  }

  async update(id: number, dataToUpdate: PaymentGateawayDto) {
    return await this.PaymentGateawayRepository.update(
      {
        pagaEntityId: id,
      },
      {
        pagaCode: dataToUpdate.paymentGateawayCode,
        pagaName: dataToUpdate.paymentGateawayName,
      },
    );
  }

  async insert(newData: PaymentGateawayDto) {
    return await this.PaymentGateawayRepository.insert({
      pagaCode: newData.paymentGateawayCode,
      pagaName: newData.paymentGateawayName,
    });
  }

  async delete(id: number) {
    return await this.PaymentGateawayRepository.delete(id);
  }
}
