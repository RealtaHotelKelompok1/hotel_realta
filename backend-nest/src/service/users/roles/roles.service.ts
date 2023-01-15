import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from 'entities/Roles';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Roles)
        private rolesRepository: Repository<Roles>
    ) { }

    async findAllRoles(): Promise<any>{
        return await this.rolesRepository.find({
            order: { roleId: -1 }   // -1 => DESC || 1 => ASC   
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: "Data displayed successfull",
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.error
            }
        });
    }

    async findAllJoinRoles(): Promise<any>{
        return await this.rolesRepository.find({
            order: { roleId: -1 },
            relations: {userRoles:true}
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.error
            }
        })
    }

    async findOneRoles(id: number): Promise<any> {
        return await this.rolesRepository.findOne({
            where: {roleId : id}
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.error
            }
        })
    }

    async createRoles(data: Roles): Promise<any>{
        return await this.rolesRepository.save({
            roleName: data.roleName
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException('Data insert failed');
            }
            return {
                message: 'Data inserted successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.error
            }
        });
    }

    async updateRoles(id:number,data: Roles): Promise<any>{
        return await this.rolesRepository.update(id, {
            

        })
    }
    
    
}
