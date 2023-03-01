import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialOffers } from 'entities/SpecialOffers';


@Injectable()
export class SpecialOffersService {
 
    
    constructor(
        @InjectRepository(SpecialOffers)
        private specialOffersRepository: Repository<SpecialOffers>
    ) {}

async findAllSpecialOffers(): Promise<any> {
    return await this.specialOffersRepository.find();
}

async findOneSpecialOffers(spofId: number): Promise<any> {
    return await this.specialOffersRepository.findOne({
        where: {
            spofId: spofId,
        },
    })
}
async createSpecialOffers(data: SpecialOffers): Promise<any> {
    return await this.specialOffersRepository.save(data)
    .then(() => {
        return 'Data berhasil Di Buat';
      }).catch(error => {
        return error;
      });

}

async updateSpecialOffers(spof_id: number, data:SpecialOffers):Promise<any>{
    return await this.specialOffersRepository.update(
        {spofId :spof_id},data).then(() => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });

    
}

async deleteSpecialOffers(spofId: number): Promise<any> {
    return await this.specialOffersRepository.delete({
        spofId: spofId,
    }).then(() => {
        return 'Berhasil dihapus';
      }).catch(error => {
        return error;
      });
}

}
