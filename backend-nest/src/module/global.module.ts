import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { OrderMenus } from 'entities/OrderMenus';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenus } from 'entities/RestoMenus';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { orderMenusController } from 'src/controller/resto/orderMenus.controller';
import { OrderMenuDetailController } from 'src/controller/resto/restoMenuDetail_controller';
import { RestoMenuPhotosContoller } from 'src/controller/resto/restoMenuPhotos.controller';
import { RestoController } from 'src/controller/resto/restoMenus.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { orderMenusService } from 'src/service/resto/orderMenus.service';
import { OrderMenuDetailService } from 'src/service/resto/restoMenuDetail.service';
import { restoMenuPhotoService } from 'src/service/resto/restoMenuPhotos.service';
import { RestoService } from 'src/service/resto/restoMenus.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      RestoMenus,
      OrderMenuDetail,
      RestoMenuPhotos,
      OrderMenus,
    ]),
  ],
  controllers: [
    DepartmentController,
    RestoController,
    OrderMenuDetailController,
    RestoMenuPhotosContoller,
    orderMenusController,
  ],
  providers: [
    DepartmentService,
    RestoService,
    OrderMenuDetailService,
    restoMenuPhotoService,
    orderMenusService,
  ],
})
export class GlobalModule {}
