import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';
import { JobRoleDto } from './job_role.dto';

@Controller('jobrole')
export class JobRoleController {
  constructor(private readonly jobRoleService: JobRoleService) {}

  @Get()
  @HttpCode(200)
  findAllJobRole(): Promise<any> {
    return this.jobRoleService.findAllJobRole();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneJobRole(@Param() param: any): Promise<any> {
    return await this.jobRoleService.findOneJobRole(param.id);
  }

  @Post('insert')
  @HttpCode(201)
  async createJobRole(@Body() body: JobRoleDto): Promise<any> {
    return await this.jobRoleService.createJobRole(body);
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateJobRole(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    return await this.jobRoleService.updateJobRole(id, body);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteJobRole(@Param('id') id: number) {
    return this.jobRoleService.deleteJobRole(id);
  }
}
