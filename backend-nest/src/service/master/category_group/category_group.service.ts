import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
@Injectable()
export class CategoryGroupService {
    constructor(
        @InjectRepository(CategoryGroup)
        private CategoryGroupRepository: Repository<CategoryGroup>
    ) { }

    async getAll(): Promise<any> {
        const ShowData = await this.CategoryGroupRepository.find()
        return ShowData
    }
    async getById(cagroId: number): Promise<any> {
        const ShowDataId = await this.CategoryGroupRepository.findOne({
            where: {
                cagroId: cagroId
            }
        })
        return ShowDataId
    }
    async create(data: CategoryGroup): Promise<any> {
        const addData = await this.CategoryGroupRepository.save({
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            cagroIcon: data.cagroIcon,
            cagroIconUrl: data.cagroIconUrl

        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: CategoryGroup, _cagroId: number) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: data.cagroId
        },
            {
                cagroName: data.cagroName,
                cagroDescription: data.cagroDescription,
                cagroType: data.cagroType,
                cagroIcon: data.cagroIcon,
                cagroIconUrl: data.cagroIconUrl
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

    async delete(cagroId: number) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        })
        return deleteData
    }
}
