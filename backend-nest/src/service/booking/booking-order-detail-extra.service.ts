import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';

@Injectable()
export class BookingOrderDetailExtraService {
    constructor (@InjectRepository(BookingOrderDetailExtra)
    private bookingorderdetailextraRepository: Repository<BookingOrderDetailExtra>
    ){}

    async findAllBookingOrderDetailExtra():Promise<any>{
        return await this.bookingorderdetailextraRepository.find()
    }

   async findOneBookingOrderDetailExtra(boex_id:number):Promise<any> {
        return await this.bookingorderdetailextraRepository.findOne({
            where:{
                boexId: boex_id
            }
        })
   }

   async createBookingOrderDetailExtra(data:BookingOrderDetailExtra):Promise<any>{
        return await this.bookingorderdetailextraRepository.save(data)
   }

   async updateBookingOrderExtra(boex_id:number, data:BookingOrderDetailExtra):Promise<any>{
        return await this.bookingorderdetailextraRepository.update({boexId:boex_id},data)
        .then(result => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });
   }

   async deleteBookingOrderDetailExtra(boex_id:number):Promise<any>{
        return await this.bookingorderdetailextraRepository.delete({
            boexId:boex_id
        })
   }


}
