import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelReviews } from 'entities/HotelReviews';

@Injectable()
export class HotelReviewService {
    constructor(@InjectRepository(HotelReviews)
    private repositoryHotelReview:Repository<HotelReviews>){}

     // find all htels
     async findAllHotelReview():Promise<any>{
        return await this.repositoryHotelReview.find()
    }
    // insert in table hotel
    async createHotelReview(data: HotelReviews):Promise<HotelReviews>{
        return await this.repositoryHotelReview.save(
            this.repositoryHotelReview.create(data)
        )
    }

    // update
    async updateHotelReview(id:string, data: HotelReviews):Promise<any>{
        return this.repositoryHotelReview
        .createQueryBuilder()
        .update()
        .set({
            horeUserReview:data.horeUserReview
        })
        .where('horeId = :id', {id})
        .execute()
    }

     //view by userid
     async findByUser(horeUser:any):Promise<any>{
        return await this.repositoryHotelReview.findOneBy({horeUser:horeUser}
       )
   }
}
 