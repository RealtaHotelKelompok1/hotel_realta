import { SpecialOfferCouponsService } from 'src/service/booking/special-offer-coupons.service';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';
export declare class SpecialOfferCouponController {
    private specialoffercouponService;
    constructor(specialoffercouponService: SpecialOfferCouponsService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: SpecialOfferCoupons): Promise<any>;
    update(params: any, body: SpecialOfferCoupons): Promise<any>;
    remove(params: any): Promise<any>;
}
