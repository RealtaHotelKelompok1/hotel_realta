import { BookingOrderDetailExtraService } from 'src/service/booking/booking-order-detail-extra.service';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
export declare class BookingOrderDetailExtraController {
    private bookingorderdetailextraService;
    constructor(bookingorderdetailextraService: BookingOrderDetailExtraService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: BookingOrderDetailExtra): Promise<any>;
    update(params: any, body: BookingOrderDetailExtra): Promise<any>;
    remove(params: any): Promise<any>;
}
