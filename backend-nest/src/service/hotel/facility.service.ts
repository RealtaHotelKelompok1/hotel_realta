import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'entities/Facilities';

@Injectable()
export class FacilityService {
    constructor(@InjectRepository(Facilities)
    private repositoryFac:Repository<Facilities>){}

     // find all htels
     async findAllFacility():Promise<any>{
        return await this.repositoryFac.find()
    }
    // insert in table hotel
    async createFacility(data: Facilities):Promise<Facilities>{
        return await this.repositoryFac.save(
            this.repositoryFac.create(data)
        )
    }

    // update
    async updateFacility(id:string, data: Facilities):Promise<any>{
        return this.repositoryFac
        .createQueryBuilder()
        .update()
        .set({
            faciDescription:data.faciDescription
        })
        .where('faciId = :id', {id})
        .execute()
    }

     //view by userid
     async findByNoRoom(faciRoomNumber:any):Promise<any>{
        return await this.repositoryFac.findOneBy({faciRoomNumber:faciRoomNumber}
       )
   }
}
