import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'entities/Address';
import { Bank } from 'entities/Bank';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
import { BookingOrders } from 'entities/BookingOrders';
import { CategoryGroup } from 'entities/CategoryGroup';
import { Country } from 'entities/Country';
import { Department } from 'entities/Department';
import { Employee } from 'entities/Employee';
import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { EmployeePayHistory } from 'entities/EmployeePayHistory';
import { Facilities } from 'entities/Facilities';
import { FacilityPhotos } from 'entities/FacilityPhotos';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
import { HotelReviews } from 'entities/HotelReviews';
import { Hotels } from 'entities/Hotels';
import { JobRole } from 'entities/JobRole';
import { Members } from 'entities/Members';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { OrderMenus } from 'entities/OrderMenus';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import { Policy } from 'entities/Policy';
import { PolicyCategoryGroup } from 'entities/PolicyCategoryGroup';
import { PriceItems } from 'entities/PriceItems';
import { Provinces } from 'entities/Provinces';
import { PurchaseOrderDetail } from 'entities/PurchaseOrderDetail';
import { PurchaseOrderHeader } from 'entities/PurchaseOrderHeader';
import { Regions } from 'entities/Regions';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenus } from 'entities/RestoMenus';
import { Roles } from 'entities/Roles';
import { ServiceTask } from 'entities/ServiceTask';
import { Shift } from 'entities/Shift';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';
import { SpecialOffers } from 'entities/SpecialOffers';
import { StockDetail } from 'entities/StockDetail';
import { StockPhoto } from 'entities/StockPhoto';
import { Stocks } from 'entities/Stocks';
import { UserAccounts } from 'entities/UserAccounts';
import { UserBonusPoints } from 'entities/UserBonusPoints';
import { UserBreakfeast } from 'entities/UserBreakfeast';
import { UserMembers } from 'entities/UserMembers';
import { UserPassword } from 'entities/UserPassword';
import { UserProfiles } from 'entities/UserProfiles';
import { UserRoles } from 'entities/UserRoles';
import { Users } from 'entities/Users';
import { Vendor } from 'entities/Vendor';
import { WorkOrderDetail } from 'entities/WorkOrderDetail';
import { WorkOrders } from 'entities/WorkOrders';
import { FacilityController } from 'src/controller/hotel/facility.controller';
import { FacilityPhotosController } from 'src/controller/hotel/facility_photos.controller';
import { FacilityPriceHistoryController } from 'src/controller/hotel/facility_price_history.controller';
import { HotelController } from 'src/controller/hotel/hotel.controller';
import { HotelReviewController } from 'src/controller/hotel/hotel_review.controller';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { EmployeeController } from 'src/controller/humanresource/employee/employee.controller';
import { EmployeeDepartmentHistoryController } from 'src/controller/humanresource/employee_department_history/employee_department_history.controller';
import { EmployeePayHistoryController } from 'src/controller/humanresource/employee_pay_history/employee_pay_history.controller';
import { JobRoleController } from 'src/controller/humanresource/job_role/job_role.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { WorkOrderDetailController } from 'src/controller/humanresource/work_order_detail/work_order_detail.controller';
import { WorkOrdersController } from 'src/controller/humanresource/work_orders/work_orders.controller';
import { FacilityService } from 'src/service/hotel/facility.service';
import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';
import { FacilityPriceHistoryService } from 'src/service/hotel/facility_price_history.service';
import { HotelService } from 'src/service/hotel/hotel.service';
import { HotelReviewService } from 'src/service/hotel/hotel_review.service';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';
import { EmployeePayHistoryService } from 'src/service/humanresource/employee_pay_history/employee_pay_history.service';
import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { WorkOrderDetailService } from 'src/service/humanresource/work_order_detail/work_order_detail.service';
import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Facilities,
      FacilityPhotos,
      FacilityPriceHistory,
      HotelReviews,
      Hotels,
      JobRole,
      Members,
      OrderMenuDetail,
      OrderMenus,
      PaymentGateaway,
      PaymentTransaction,
      Policy,
      PolicyCategoryGroup,
      PriceItems,
      Provinces,
      PurchaseOrderDetail,
      PurchaseOrderHeader,
      Regions,
      RestoMenuPhotos,
      RestoMenus,
      Roles,
      ServiceTask,
      Shift,
      SpecialOfferCoupons,
      SpecialOffers,
      StockDetail,
      StockPhoto,
      Stocks,
      UserAccounts,
      UserBonusPoints,
      UserBreakfeast,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Vendor,
      WorkOrderDetail,
      WorkOrders,
    ]),
  ],
  controllers: [
    DepartmentController,
    ShiftController,
    JobRoleController,
    EmployeeController,
    EmployeeDepartmentHistoryController,
    EmployeePayHistoryController,
    WorkOrderDetailController,
    WorkOrdersController,
    
    /* HOTEL */
    HotelController,
    HotelReviewController,
    FacilityPriceHistoryController,
    FacilityController,
    FacilityPhotosController,

    /* USERS */

    /* BOOKING */
    /* RESTO */
    /* PAYMENT */
    /* PURCHASING */
    /* MASTER */
  ],
  providers: [
    /* HUMANRESOURCE */
    DepartmentService,
    ShiftService,
    JobRoleService,
    EmployeeService,
    EmployeePayHistoryService,
    WorkOrderDetailService,
    EmployeeDepartmentHistoryService,
    WorkOrdersService,
    /* HOTEL */
    HotelService,
    HotelReviewService,
    FacilityPriceHistoryService,
    FacilityService,
    FacilityPhotosService,

    /* USERS */

    /* BOOKING */
    /* RESTO */
    /* PAYMENT */
    /* PURCHASING */
    /* MASTER */
  ],
})
export class GlobalModule {}
