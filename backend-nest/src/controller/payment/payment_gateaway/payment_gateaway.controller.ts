import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
import { PaymentGateawayDto } from './payment_gateaway.dto';

@Controller('payment-gateaway')
export class PaymentGateawayController {
  constructor(private paymentGateawayService: PaymentGateawayService) {}

  /**
   * TODO: Error Handling []
   */

  // Find All
  @Get()
  async findAllPaymentGateaway() {
    return await this.paymentGateawayService.find();
  }

  // Find by ID
  @Get(':id')
  async findAllPaymentGateawayById(@Param('id') id: number) {
    return await this.paymentGateawayService.find(id);
  }

  // Update by ID
  @Put(':id')
  async updatePaymentGateaway(
    @Param('id') id: number,
    @Body() body: PaymentGateawayDto,
  ) {
    return await this.paymentGateawayService.update(id, body);
  }

  // Insert new data
  @Post()
  async insertPaymentGateaway(@Body() body: PaymentGateawayDto) {
    return await this.paymentGateawayService.insert(body);
  }

  // Delete by ID
  @Delete(':id')
  async deletePaymentGateaway(@Param('id') id: number) {
    return await this.paymentGateawayService.delete(id);
  }
}
