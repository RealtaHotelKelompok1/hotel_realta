import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPhotos } from 'entities/FacilityPhotos';

@Injectable()
export class FacilityPhotosService {
    constructor(@InjectRepository(FacilityPhotos)
    private repositoryFacPhotos:Repository<FacilityPhotos>){}

     // find all htels
     async findAllFaciPhotos():Promise<any>{
        return await this.repositoryFacPhotos.find()
    }
    // insert in table hotel
    async createFaciPhotos(data: FacilityPhotos):Promise<FacilityPhotos>{
        return await this.repositoryFacPhotos.save(
            this.repositoryFacPhotos.create(data)
        )
    }

    // update
    async updateFacilityPhotos(id:string, data: FacilityPhotos):Promise<any>{
        return this.repositoryFacPhotos
        .createQueryBuilder()
        .update()
        .set({
            faphoPhotoFilename:data.faphoPhotoFilename
        })
        .where('faphoId = :id', {id})
        .execute()
    }

     //view by userid
     async findByFaphoId(faphoId:any):Promise<any>{
        return await this.repositoryFacPhotos.findOneBy({faphoId:faphoId}
       )
   }
}
