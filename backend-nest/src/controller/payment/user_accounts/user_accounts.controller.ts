import { Controller, Get, Query } from '@nestjs/common';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';

@Controller('user-accounts')
export class UserAccountsController {
  constructor(private userAccountsService: UserAccountsService) {}

  @Get()
  async findAllAccounts() {
    return await this.userAccountsService.find();
  }

  /** TODO
   * [] Find by UserID
   * [] Find by Account Number
   * [] Find by Entity ID/Bank name
   * [] Find all Dompet Realta accounts
   * */
  @Get('findByFilter')
  // Find by user ID
  async findByUserId(@Query('userId') usacUserId: number) {
    return await this.userAccountsService.find({ usacUserId });
  }

  // Find by account number
  async findByAccountNumber(@Query('accountNumber') accountNumber: string) {
    return await this.userAccountsService.find({
      usacAccountNumber: accountNumber,
    });
  }

  async findDompetRealtaAccount(@Query('accountType') usacType: string) {
    return await this.userAccountsService.find({ usacType });
  }

  // Find by Bank name
  /** TODO:  Find by Bank name using usac_entity_id */
//   async findByBankName(@Query('bankName') bankName: string) {
//     return await this.userAccountsService.find({ bankName });
//   }

  // Find Dompet Realta accounts
}
