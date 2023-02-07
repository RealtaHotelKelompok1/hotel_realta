import { SpecialOffers } from 'entities/SpecialOffers';
import { SpecialOffersService } from 'src/service/booking/special_offers.service';
export declare class SpecialOffersController {
    private specialOfferservice;
    constructor(specialOfferservice: SpecialOffersService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: SpecialOffers): Promise<any>;
    update(params: any, body: SpecialOffers): Promise<any>;
    remove(params: any): Promise<any>;
}
