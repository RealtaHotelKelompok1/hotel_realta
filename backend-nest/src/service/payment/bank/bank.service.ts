import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private BankRepository: Repository<Bank>,
  ) {}

  /** CRUD on Bank Entity
   * TODO: Find Bank          [V]
   * TODO: Find Bank by ID    []
   * TODO: Update Bank by ID  []
   * TODO: Insert New Bank    []
   * TODO: Delete Bank        []
   */

  async find(id?: number) {
    if (id) {
      // return bank with `where` clause
      return await this.BankRepository.findOneBy({
        bankEntityId: id,
      });
    } else {
      // return all bank
      return await this.BankRepository.find();
    }
  }

  async update(id: number, bankData) {
    return await this.BankRepository.update(
      {
        // criteria
        bankEntityId: id,
      },
      {
        // Data from body
        bankCode: bankData.bankCode,
        bankName: bankData.bankName,
      },
    );
  }

  async insert(newBankData) {}

  async delete(id: number) {}
}
