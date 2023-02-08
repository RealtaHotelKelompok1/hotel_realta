import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'entities/UserAccounts';
import { Repository } from 'typeorm';
import { AccountType } from '../../../../../types/enums';

@Injectable()
export class UserAccountsService {
  constructor(
    @InjectRepository(UserAccounts)
    private UserAccountsRepository: Repository<UserAccounts>,
  ) {}

  /** TODO
   * [] Find all
   * [] Find by UserID
   * [] Find by Account Number
   * [] Find by Entity ID/Bank name (BANK)
   * [] Find all Dompet Realta accounts (DOMPET)
   * [] Update user accounts
   * [] Create new account
   * [?] Delete
   *
   */
  async find(filter?: {
    usacUserId?: number;
    usacAccountNumber?: string;
    // usacBankName?: string;
    usacType?: string;
  }): Promise<any> {
    if (filter) {
      return await this.UserAccountsRepository.find({ where: filter });
    }

    return await this.UserAccountsRepository.find();
  }

  async update() {}

  async create() {}
}
