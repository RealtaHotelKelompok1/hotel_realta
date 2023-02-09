/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'entities/UserAccounts';
import { Repository } from 'typeorm';
import { AccountType } from '../../../types/enums';
import { UserAccountsDto } from 'src/dto/userAccounts.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserAccountsService {
	constructor(
		@InjectRepository(UserAccounts)
		private UserAccountsRepository: Repository<UserAccounts>,
	) { }

  /** TODO:
   * [V] Find all
   * [V] Find by filter
   * [] Update user accounts
   * [V] Create new account
   * [] Delete (BANK ONLY)
   *
   */
	async find(query?: string) {
		if (query) {
			return await this.UserAccountsRepository.query(query)
				.then((result) => {
					return result;
				})
				.catch((err) => {
					return new HttpException(
						{ error: `Data with query ${query} is not found!` },
						HttpStatus.NOT_FOUND,
						{ cause: err }
					)
				});
		}

		return await this.UserAccountsRepository.find()
			.then((result) => {
				return result
			})
			.catch((err) => {
				return err
			});
	}

	async update() { }

	async create(newData: UserAccountsDto) {
		// Set data to null if no data inserted and became an empty string.
		for (const data in newData) {
			if (newData[data] == '') {
				newData[data] = null
			}
		}

		// Hash PIN or CVV
		const salt = bcrypt.genSaltSync(10);
		const hashedKey = bcrypt.hashSync(newData.securedKey, salt);

		// Check account type
		if (newData.accountType !== AccountType.dompet) {
			// Return an error if bank expiry date is null
			if (newData.expMonth == null || newData.expYear == null) {
				return "Bank expiry date can't be null!"
			} 
		}

		// Insert into database using Stored Procedure
		return await this.UserAccountsRepository.query(
			`CALL payment.InsertUserAccount($1, $2, $3, $4, $5, $6, $7, $8)`,
			[
				newData.userId,
				newData.accountType,
				newData.cardHolderName,
				hashedKey,
				newData.entityName,
				newData.accountNumber,
				newData.expMonth,
				newData.expYear
			]
		)
			.then(() => {
				return this.UserAccountsRepository.query(
					`SELECT * FROM payment.user_payment_methods WHERE userId = $1`, [newData.userId]
				)
			})
			.catch((err) => {
				return "There's an error in adding new account, " + err
			})
	}
	
	async delete(id: number) {
		// Check if there's an account data with corresponding ID.
		const accountExists = this.UserAccountsRepository.findOneByOrFail(
			{ usacEntityId: id })
		
		if (accountExists) {
			return await this.UserAccountsRepository.delete(id)
				.then(() => {
					return `Account with ID ${id} is successfully deleted!`
			})
		} else {
			return new HttpException(
				{ error: `Account with ID ${id} is not found!` },
				HttpStatus.NOT_FOUND,
			)
		}
	}
}
