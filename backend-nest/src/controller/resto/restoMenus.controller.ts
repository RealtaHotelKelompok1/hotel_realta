import { Controller, Get, Req, Res } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { RestoService } from 'src/service/resto/restoMenus.service';

@Controller('resto')
export class RestoController {
  constructor(private readonly restoService: RestoService) {}

  // Find All
  @Get()
  findAllMenusResto(): Promise<any> {
    return this.restoService.findAllMenusResto();
  }

  // Find one by Id
  @Get(':id')
  findOneMenusResto(@Param() params): any {
    return this.restoService.findOneMenusResto(params.id);
  }

  @Post()
  createMenusResto(@Body() body) {
    return this.restoService.createMenusResto(body);
  }

  //req

  // update

  // @Put(':id')
  // updateMenusResto(@Param() params, @Body() body: RestoMenus): Promise<any> {
  //   return this.restoService.updateMenusResto(params.id,body);
  // }

  @Put(':id')
  updateMenusResto(@Param() params: any, @Body() body): any {
    return this.restoService.updateMenusResto(params.id, body);
  }

  @Delete(':id')
  deleteMenusResto(@Param() params): any {
    return this.restoService.deleteMenusResto(params.id);
  }
}
