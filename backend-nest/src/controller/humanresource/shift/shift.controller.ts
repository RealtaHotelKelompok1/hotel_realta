import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ShiftDto } from './shift.dto';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';


@Controller('shift')
export class ShiftController {
  constructor(private readonly departmentService: ShiftService) {}

  @Get()
  @HttpCode(200)
  findAllShift(): Promise<any> {
    return this.departmentService.findAllShift();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneShift(@Param() param: any): Promise<any> {
    const result = await this.departmentService.findOneShift(param.id);

    if(result){
      return result;
    }else{
      throw new HttpException('Shift not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createShift(@Body() body: ShiftDto) {
    const result = await this.departmentService.createShift(body);
  }

  @Put('update/:id')
  @HttpCode(200)
  updateShift(@Param('id') id: number, @Body() body: ShiftDto) {
    return this.departmentService.updateShift(id, body);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteShift(@Param('id') id: number) {
    return this.departmentService.deleteShift(id);
  }
}
