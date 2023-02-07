/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/bank.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private BankRepository: Repository<Bank>,
  ) {}

  async find(id?: number) {
    if (id) {
      // Return bank with `where` clause
      return await this.BankRepository.findOneByOrFail({
        bankEntityId: id,
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    } else {
      // Return all bank record
      return await this.BankRepository.find()
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    }
  }

  async update(id: number, dataToUpdate: BankDto) {
    return await this.BankRepository.update(
      // Criteria
      {
        bankEntityId: id,
      },
      dataToUpdate,
    )
      .then((result) => {
        return result;
      })
      .then((err) => {
        return err;
      });
  }

  async insert(newData: BankDto) {
    return await this.BankRepository.insert(newData)
      .then((result) => {
        return 'Successfully adding new Bank data, ' + result;
      })
      .catch((err) => {
        return "There's an error in adding new Bank data, " + err.message;
      });
  }

  async delete(id: number) {
    return await this.BankRepository.delete(id)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}
