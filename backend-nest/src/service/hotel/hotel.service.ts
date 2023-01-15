import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotels } from 'entities/Hotels';

@Injectable()
export class HotelService {
    constructor (@InjectRepository(Hotels)
    private hotelsRepository:Repository<Hotels>,
    ){}
    // find all htels
    async findAllHotel():Promise<any>{
        return await this.hotelsRepository.find()
    }
    // insert in table hotel
    async createHotel(data: Hotels):Promise<Hotels>{
        return await this.hotelsRepository.save(
            this.hotelsRepository.create(data)
        )
    }
    //view by hotel name 
    async findByName(hotelName:any):Promise<any>{
         return await this.hotelsRepository.findOneBy({hotelName:hotelName}
        )
    }
    // update
    async updateHotel(id:string, data: Hotels):Promise<any>{
        return this.hotelsRepository
        .createQueryBuilder()
        .update()
        .set({
            hotelName: data.hotelName,
            hotelDescription: data.hotelDescription,
            hotelRatingStar:data.hotelRatingStar,
            hotelPhonenumber:data.hotelPhonenumber,
            hotelModifiedDate:data.hotelModifiedDate,
            hotelAddr:data.hotelAddr
        })
        .where('hotelId = :id', {id})
        .execute()
    }
}
