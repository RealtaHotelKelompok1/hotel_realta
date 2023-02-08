import { Repository } from 'typeorm';
import { Hotels } from 'entities/Hotels';
export declare class HotelService {
    private hotelsRepository;
    constructor(hotelsRepository: Repository<Hotels>);
    findAllHotel(): Promise<any>;
    createHotel(data: Hotels): Promise<Hotels>;
    findByName(hotelName: any): Promise<any>;
    updateHotel(id: string, data: Hotels): Promise<any>;
    deleteHotels(id: any): Promise<any>;
}
