import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'entities/Department';

@Injectable()
export class DepartmentService {
    constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>){}

    // Method untuk menampilkan semua data department
    async findAllDepartment() : Promise<any>{
        return await this.departmentRepository.find();
    }
}
