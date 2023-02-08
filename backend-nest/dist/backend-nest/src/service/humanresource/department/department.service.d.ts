import { Repository } from 'typeorm';
import { Department } from 'entities/Department';
import { DepartmentDto } from 'src/controller/humanresource/department/department.dto';
export declare class DepartmentService {
    private departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    findAllDepartment(): Promise<any>;
    findOneDepartment(deptId: any): Promise<any>;
    createDepartment(data: DepartmentDto): Promise<import("typeorm").InsertResult>;
    updateDepartment(deptId: number, data: DepartmentDto): Promise<import("typeorm").UpdateResult>;
    deleteDepartment(deptId: number): Promise<import("typeorm").DeleteResult>;
}
