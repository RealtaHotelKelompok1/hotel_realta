import { Controller, Get, HttpCode } from '@nestjs/common';
import { DepartmentService } from 'src/service/humanresource/department/department.service';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService : DepartmentService){}

    @Get()
    @HttpCode(200)
    findAllDepartment(): Promise<any>{
        return this.departmentService.findAllDepartment();
    }
}
