import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    Res,
    Next,
  } from '@nestjs/common';
  import { HotelService } from 'src/service/hotel/hotel.service';
  import { Hotels } from 'entities/Hotels';
  @Controller('hotel')
  export class HotelController {
    constructor(private readonly hotelService: HotelService) {}
  
    @Get('view')
    findAllHotel() {
      return this.hotelService.findAllHotel();
      }
      
    @Get('card')
    findProcedure() {
      return this.hotelService.findProcedure();
    }
  
    @Get('lastOrder')
    findlastOrder() {
      return this.hotelService.findLastOrder();
    }
    
    @Get('invoice')
    async getInvoice(){
        return await this.hotelService.getInvoice()
    }
  
    @Get('address')
    findAddress() {
      return this.hotelService.findAddress();
    }
  
    // @Get('card/:id')
    // getIdCard(@Param() param: any) {
    //   return this.hotelService.getIdCard(param.id);
    // }
  
    // @Get('review/:id')
    // reviewHotel(@Param() param: any) {
    //   return this.hotelService.reviewHotel(param.id);
    // }
    
    @Get('view/:id')
    findByname(@Param() Params) {
      return this.hotelService.findById(Params.id);
    }
  
    @Post('insert')
    async createHotel(@Body() data: Hotels) {
      const hotel = await this.hotelService.createHotel(data);
      if (!hotel) {
        return 'failed insert to hotels';
      } else {
        return 'success insert to hotel';
      }
    }
  
    @Put(':id')
    async updateHotel(@Param('id') id: any, @Body() body: any) {
      const newData: any = await this.hotelService.updateHotel(id, body);
      if (!newData) {
        return 'hotel dont updated';
      } else {
        return 'hotel updated';
      }
    }
    @Delete('delete/:id')
    async deleteHotel(@Param('id') id: any) {
      return this.hotelService.deleteHotels(id);
    }
  }
  