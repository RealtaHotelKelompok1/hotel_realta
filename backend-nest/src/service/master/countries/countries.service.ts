import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'entities/Country';

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.countryRepository.find()
        return ShowData
    }
    async getById(countryId: number): Promise<any> {
        const ShowDataId = await this.countryRepository.findOne({
            where: {
                countryId: countryId
            }
        })
        return ShowDataId
    }
    async create(data: Country): Promise<any> {
        const addData = await this.countryRepository.save({
            countryName: data.countryName,
            countryRegion: data.countryRegion
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Country, countryId: any) {
        const editData = await this.countryRepository.update({
            countryId: countryId
        },
            {
                countryName: data.countryName,
                countryRegion: data.countryRegion
            }
        )
        console.log(editData)
        if (editData.affected) {
            return { message: 'Data berhasil di edit' }
        }
        else {
            return { message: 'Data gagal di edit' }
        }
    }

    async delete(countryId: any) {
        const deleteData = await this.countryRepository.delete({
            countryId: countryId
        })
        return deleteData
    }
}
