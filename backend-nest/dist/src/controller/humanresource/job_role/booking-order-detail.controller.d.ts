import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailService } from 'src/service/booking/booking-order-detail.service';
export declare class BookingOrderDetailController {
    private bookingorderdetailService;
    constructor(bookingorderdetailService: BookingOrderDetailService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: BookingOrderDetail): Promise<any>;
    update(params: any, body: BookingOrderDetail): Promise<any>;
    remove(params: any): Promise<any>;
}
