import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @HttpCode(200)
  findAllDepartment(): Promise<any> {
    return this.departmentService.findAllDepartment();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneDepartment(@Param() param: any): Promise<any> {
    return await this.departmentService.findOneDepartment(param.id);
  }

  @Post('insert')
  @HttpCode(201)
  async createDepartment(@Body() body: DepartmentDto): Promise<any> {
    return await this.departmentService.createDepartment(body);
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateDepartment(@Param('id') id: number, @Body() body: DepartmentDto): Promise<any> {
    return await this.departmentService.updateDepartment(id, body);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteDepartment(@Param('id') id: number) {
    return this.departmentService.deleteDepartment(id);
  }
}
