import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RestoMenus } from 'entities/RestoMenus';
import { InjectRepository } from '@nestjs/typeorm';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class RestoService {
  constructor(
    @InjectRepository(RestoMenus)
    private restoMenusRepository: Repository<RestoMenus>,
  ) {}

  //Method Menampilkan Semua Data
  async findAllMenusResto(): Promise<any> {
    return await this.restoMenusRepository.find();
  }

  //Menampilkan satu data by ID
  async findOneMenusResto(reme_Id: number): Promise<any> {
    const result = await this.restoMenusRepository.findOne({
      where: {
        remeId: reme_Id,
      },
    });

    if (result) {
      return result;
    }

    throw new HttpException('Categories not found', HttpStatus.NOT_FOUND);
  }

  // Create
  async createMenusResto(data: RestoMenus): Promise<any> {
    let now = new Date();
    // const newRestoMenus = new RestoMenus();
    const result = await this.restoMenusRepository.save({
      remeName: data.remeName,
      remeDescription: data.remeDescription,
      remePrice: data.remePrice,
      remeStatus: data.remeStatus,
      remeModifiedDate: now,
    });
    return result;
  }

  //update

  // async updateMenusResto(id: number, data: RestoMenus): Promise<any> {
  //   return await this.restoMenusRepository.update({remeId:id},data)
  // }

  async updateMenusResto(id: number, data: RestoMenus): Promise<any> {
    let now = new Date();
    let result = await this.restoMenusRepository.update(
      {
        remeId: id,
      },
      {
        remeName: data.remeName,
        remeDescription: data.remeDescription,
        remePrice: data.remePrice,
        remeStatus: data.remeStatus,
        remeModifiedDate: now,
      },
    );
    return result + ' Sukses Mengupdate';
  }

  // Delete

  async deleteMenusResto(id: number): Promise<any> {
    await this.restoMenusRepository.delete({
      remeId: id,
    });
    return ' Sukses Menghapus';
  }
}
