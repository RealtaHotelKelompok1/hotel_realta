import { Repository } from 'typeorm';
import { BookingOrders } from 'entities/BookingOrders';
export declare class BookingOrdersService {
    private bookingordersRepository;
    constructor(bookingordersRepository: Repository<BookingOrders>);
    findAllBookingOrders(): Promise<any>;
    findOneBookingOrders(boor_id: number): Promise<any>;
    createBookingOrders(data: BookingOrders): Promise<any>;
    updateBokingOrders(boor_id: number, data: BookingOrders): Promise<any>;
    deleteBookinfOrders(boor_id: number): Promise<any>;
}
