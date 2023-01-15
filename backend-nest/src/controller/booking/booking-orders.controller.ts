import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { BookingOrders } from 'entities/BookingOrders';
import { BookingOrdersService } from 'src/service/booking/booking-orders.service'; 

@Controller('booking-orders')
export class BookingOrdersController {

    constructor(private bokingorderService: BookingOrdersService){}

    @Get()
    findall(): Promise<any> {
        return this.bokingorderService.findAllBookingOrders();
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.bokingorderService.findOneBookingOrders(id);
    }
    @Post("create")
    create(@Body() body: BookingOrders): Promise<any> {
        return this.bokingorderService.createBookingOrders(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body: BookingOrders): Promise<any> {
        return this.bokingorderService.updateBokingOrders(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.bokingorderService.deleteBookinfOrders(params.id);
    }

}


