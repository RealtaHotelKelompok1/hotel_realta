import { BookingOrders } from 'entities/BookingOrders';
import { BookingOrdersService } from 'src/service/booking/booking-orders.service';
export declare class BookingOrdersController {
    private bokingorderService;
    constructor(bokingorderService: BookingOrdersService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: BookingOrders): Promise<any>;
    update(params: any, body: BookingOrders): Promise<any>;
    remove(params: any): Promise<any>;
}
