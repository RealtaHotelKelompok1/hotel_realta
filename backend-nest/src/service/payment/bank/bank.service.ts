import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/controller/payment/bank/bank.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private BankRepository: Repository<Bank>,
  ) {}

  /** CRUD on Bank Entity
   * TODO: Find Bank          [V]
   * TODO: Find Bank by ID    [V]
   * TODO: Update Bank by ID  [V]
   * TODO: Insert New Bank    [V]
   * TODO: Delete Bank        [V]
   */

  async find(id?: number) {
    if (id) {
      // Return bank with `where` clause
      return await this.BankRepository.findOneByOrFail({
        bankEntityId: id,
      });
    } else {
      // Return all bank record
      return await this.BankRepository.find();
    }
  }

  async update(id: number, bankData: BankDto) {
    return await this.BankRepository.update(
      {
        // Criteria
        bankEntityId: id,
      },
      {
        // Data from body
        bankCode: bankData.bankCode,
        bankName: bankData.bankName,
      },
    );
  }

  async insert(newBankData: BankDto) {
    return await this.BankRepository.insert(newBankData);
  }

  async delete(id: number) {
    return await this.BankRepository.delete(id);
  }
}
