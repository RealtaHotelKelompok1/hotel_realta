import { Repository } from 'typeorm';
import { HotelReviews } from 'entities/HotelReviews';
export declare class HotelReviewService {
    private repositoryHotelReview;
    constructor(repositoryHotelReview: Repository<HotelReviews>);
    findAllHotelReview(): Promise<any>;
    createHotelReview(data: HotelReviews): Promise<HotelReviews>;
    updateHotelReview(id: string, data: HotelReviews): Promise<any>;
    findByUser(horeUser: any): Promise<any>;
}
