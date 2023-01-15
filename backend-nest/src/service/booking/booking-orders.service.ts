import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrders } from 'entities/BookingOrders';


@Injectable()
export class BookingOrdersService {
    constructor (@InjectRepository(BookingOrders)
    private bookingordersRepository: Repository<BookingOrders>
    ) {}

    async findAllBookingOrders():Promise<any>{
        return await this.bookingordersRepository.find()
    }

    async findOneBookingOrders(boor_id:number): Promise<any> {
        return await this.bookingordersRepository.findOne({
            where:{
                boorId: boor_id
            }
        })
    }

    async createBookingOrders(data:BookingOrders):Promise<any> {
        return await this.bookingordersRepository.save(data);
    }

    async updateBokingOrders(boor_id:number , data:BookingOrders):Promise<any>{
        return await this.bookingordersRepository.update({boorId:boor_id},data)
        .then(result => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });
    }

    async deleteBookinfOrders(boor_id:number):Promise<any> {
        return await this.bookingordersRepository.delete({
            boorId: boor_id
        })
    }
}
