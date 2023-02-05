import { HotelService } from 'src/service/hotel/hotel.service';
import { Hotels } from 'entities/Hotels';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    findAllHotel(): Promise<any>;
    findByname(Params: any): Promise<any>;
    createHotel(data: Hotels): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateHotel(id: string, body: any): Promise<"customer dont updated" | "customer updated">;
    deleteHotel(id: any): Promise<any>;
}
