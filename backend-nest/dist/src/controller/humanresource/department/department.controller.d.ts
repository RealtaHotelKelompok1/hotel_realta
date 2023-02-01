import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    findAllDepartment(): Promise<any>;
    findOneDepartment(param: any): Promise<any>;
    createDepartment(body: DepartmentDto): Promise<any>;
    updateDepartment(id: number, body: any): Promise<any>;
    deleteDepartment(id: number): Promise<import("typeorm").DeleteResult>;
}
