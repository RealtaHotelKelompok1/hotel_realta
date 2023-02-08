/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserAccountsDto } from 'src/dto/userAccounts.dto';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
import { AccountType } from 'src/types/enums';

@Controller('user-accounts')
export class UserAccountsController {
	constructor(private userAccountsService: UserAccountsService) { }

	@Get()
	async findAllAccounts() {
		return await this.userAccountsService.find();
	}

  /** TODO:
   * [V] Find by UserID
   * [V] Find by user name
   * [V] Find by Account Number
   * [] Find by Entity ID/Bank name
   * [] Find all Dompet Realta accounts
   * 
   * [] Add new user accounts: insert bank
   * [] Add new user accounts: activate Dompet Realta
   * 
   * [?] Update?
   * 
   * [] Delete: bank account
   * */
	
	@Get('filter?')
	// Find by user ID
	async findByFilter(
		@Query()
		filter: {
				userId?: number;
				userName?: string;
				accountNumber?: number;
				accountType?: string;
				// bankName?: string;
		},
	) {
		switch (true) {
			// Filter by user ID
			case filter.userId != undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE userId = ${filter.userId}
					`,
				);
			// Filter by user's full name
			case filter.userName != undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE fullName ILIKE '%${filter.userName}%'
					`
				)
			// Filter by user's account number
			case filter.accountNumber != undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE accountNumber = '${filter.accountNumber}'
					`,
				);
			// // Filter by 
			// case filter.bankName != undefined:
			// 	return await this.userAccountsService.findByQuery(
			// 		`
			// 		SELECT *
			// 		FROM payment.user_payment_methods
			// 		WHERE paymentType <> '${AccountType.dompet}'
			// 		`
			// 	)
		}
	}

	@Post('add')
	async addAccount(@Body() body: UserAccountsDto) {
		return await this.userAccountsService.create(body)
		
	}

	@Put()
	async updateAccount() {
		
	}

	@Delete()
	async deleteAccouunt() {

	}

}
