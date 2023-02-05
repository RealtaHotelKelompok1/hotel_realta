import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { OrderMenus } from 'entities/OrderMenus';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenus } from 'entities/RestoMenus';
import { orderMenusController } from 'src/controller/resto/orderMenus.controller';
import { OrderMenuDetailController } from 'src/controller/resto/restoMenuDetail_controller';
import { RestoMenuPhotosContoller } from 'src/controller/resto/restoMenuPhotos.controller';
import { RestoController } from 'src/controller/resto/restoMenus.controller';
import { orderMenusService } from 'src/service/resto/orderMenus.service';
import { OrderMenuDetailService } from 'src/service/resto/restoMenuDetail.service';
import { restoMenuPhotoService } from 'src/service/resto/restoMenuPhotos.service';
import { RestoService } from 'src/service/resto/restoMenus.service';

import { Shift } from 'entities/Shift';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { Hotels } from 'entities/Hotels';
import { HotelService } from 'src/service/hotel/hotel.service';
import { HotelController } from 'src/controller/hotel/hotel.controller';
import { HotelReviewController } from 'src/controller/hotel/hotel_review.controller';
import { HotelReviewService } from 'src/service/hotel/hotel_review.service';
import { HotelReviews } from 'entities/HotelReviews';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
import { FacilityPriceHistoryService } from 'src/service/hotel/facility_price_history.service';
import { FacilityPriceHistoryController } from 'src/controller/hotel/facility_price_history.controller';
import { Facilities } from 'entities/Facilities';
import { FacilityController } from 'src/controller/hotel/facility.controller';
import { FacilityService } from 'src/service/hotel/facility.service';
import { FacilityPhotos } from 'entities/FacilityPhotos';
import { FacilityPhotosController } from 'src/controller/hotel/facility_photos.controller';
import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      Shift,
      Hotels,
      HotelReviews,
      FacilityPriceHistory,
      Facilities,
      FacilityPhotos,
      Department,
      RestoMenus,
      OrderMenuDetail,
      RestoMenuPhotos,
      OrderMenus,
    ]),
  ],
  controllers: [
    DepartmentController,
    ShiftController,
    HotelController,
    HotelReviewController,
    FacilityPriceHistoryController,
    FacilityController,
    FacilityPhotosController,
    DepartmentController,
    RestoController,
    OrderMenuDetailController,
    RestoMenuPhotosContoller,
    orderMenusController,
  ],
  providers: [
    DepartmentService,
    ShiftService,
    HotelService,
    HotelReviewService,
    FacilityPriceHistoryService,
    FacilityService,
    FacilityPhotosService,
    DepartmentService,
    RestoService,
    OrderMenuDetailService,
    restoMenuPhotoService,
    orderMenusService,
  ],
})
export class GlobalModule {}
