import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from './bank.dto';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  /** CRUD on Bank Entity
   * TODO: Find Bank            [v] Get
   * TODO: Find Bank by ID      [v] Get
   * TODO: Update Bank by ID    [] Put =====> TODO: error handling catch()
   * TODO: Insert New Bank      [] Post ====> TODO: error handling catch()
   * TODO: Delete Bank          [] Delete ==> TODO: error handling catch()
   */

  // Find All Bank
  @Get()
  async findAllBank() {
    return await this.bankService.find();
  }

  // Find Bank by ID
  @Get(':id')
  async findBankById(@Param('id') id: number) {
    return await this.bankService.find(id).catch((error) => {
      return new HttpException(
        // Response: Custom message
        { error: `Bank with ID ${id} is not found!` },
        // Status: Http status
        HttpStatus.NOT_FOUND,
        // Cause
        { cause: error },
      );
    });
  }

  // Update Bank
  @Put(':id')
  async updateBank(@Param('id') id: number, @Body() body: BankDto) {
    return await this.bankService
      .update(id, body)
      .then(() => {
        return this.findBankById(id);
      })
      /**
       * TODO: Error handling if failed updating bank */
      .catch();
  }

  @Post()
  async insertBank(@Body() body: BankDto) {
    return await this.bankService.insert(body);
    /**
     * TODO: insert exception to handle existing data (name and code must be unique)
     * */
  }

  @Delete(':id')
  async deleteBank(@Param('id') id: number) {
    return await this.bankService
      .delete(id)
      .then(() => {
        return `Bank with ID ${id} has been deleted!`;
      })
      /**
       * TODO: insert exception to handle failed deleting data
       */
      .catch();
  }
}
