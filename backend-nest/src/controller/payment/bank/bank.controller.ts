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

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  /** CRUD on Bank Entity
   * TODO: Find Bank            [v] Get
   * TODO: Find Bank by ID      [v] Get
   * TODO: Update Bank by ID    [] Put
   * TODO: Insert New Bank      [] Post
   * TODO: Delete Bank          [] Delete
   */

  // Find All Bank
  @Get()
  async findAllBank() {
    return await this.bankService.find();
  }

  // Find Bank by ID
  @Get(':id')
  async findBankById(@Param('id') id: number) {
    return await this.bankService
      .find(id)
      .then((result) => {
        return result;
      })
      .catch((error) => {
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
  async updateBank(@Param('id') id: number, @Body() body) {
    return await this.bankService
      .update(id, body)
      .then(() => {
        return this.findBankById(id);
      })
      .catch();
  }

  @Post()
  async insertBank(@Body() body) {
    return await this.bankService.insert(body);
  }

  @Delete()
  async deleteBank(@Param('id') id: number) {
    return await this.bankService.delete(id);
  }
}
