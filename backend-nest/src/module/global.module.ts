/* eslint-disable prettier/prettier */
import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'entities/Address';
import { Bank } from 'entities/Bank';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
import { BookingOrders } from 'entities/BookingOrders';
import { CategoryGroup } from 'entities/CategoryGroup';
import { Country } from 'entities/Country';
import { Department } from 'entities/Department';
import { orderMenusController } from 'src/controller/resto/orderMenus.controller';
import { OrderMenuDetailController } from 'src/controller/resto/restoMenuDetail_controller';
import { RestoMenuPhotosContoller } from 'src/controller/resto/restoMenuPhotos.controller';
import { RestoController } from 'src/controller/resto/restoMenus.controller';
import { orderMenusService } from 'src/service/resto/orderMenus.service';
import { OrderMenuDetailService } from 'src/service/resto/restoMenuDetail.service';
import { restoMenuPhotoService } from 'src/service/resto/restoMenuPhotos.service';
import { RestoService } from 'src/service/resto/restoMenus.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
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
import { BookingOrdersController } from 'src/controller/booking/booking-orders.controller';
import { FacilityPriceHistoryController } from 'src/controller/hotel/facility_price_history.controller';
import { HotelController } from 'src/controller/hotel/hotel.controller';
import { HotelReviewController } from 'src/controller/hotel/hotel_review.controller';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { EmployeeController } from 'src/controller/humanresource/employee/employee.controller';
import { EmployeeDepartmentHistoryController } from 'src/controller/humanresource/employee_department_history/employee_department_history.controller';
import { EmployeePayHistoryController } from 'src/controller/humanresource/employee_pay_history/employee_pay_history.controller';
import { JobroleController } from 'src/controller/humanresource/job_role/job_role.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { WorkOrderDetailController } from 'src/controller/humanresource/work_order_detail/work_order_detail.controller';
import { WorkOrdersController } from 'src/controller/humanresource/work_orders/work_orders.controller';
import { AuthController } from 'src/controller/users/auth/auth.controller';
import { RolesController } from 'src/controller/users/roles/roles.controller';
import { UserbonuspointsController } from 'src/controller/users/userbonuspoints/userbonuspoints.controller';
import { UsermembersController } from 'src/controller/users/usermembers/usermembers.controller';
import { UserpasswordController } from 'src/controller/users/userpassword/userpassword.controller';
import { UserprofilesController } from 'src/controller/users/userprofiles/userprofiles.controller';
import { UserrolesController } from 'src/controller/users/userroles/userroles.controller';
import { UsersController } from 'src/controller/users/users/users.controller';
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
import { WorkOrderDetailService } from 'src/service/humanresource/work_order_detail/work_order_detail.service';
import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';
import { AuthService } from 'src/service/users/auth/auth.service';
import { RolesService } from 'src/service/users/roles/roles.service';
import { UserbonuspointsService } from 'src/service/users/userbonuspoints/userbonuspoints.service';
import { UsermembersService } from 'src/service/users/usermembers/usermembers.service';
import { UserpasswordService } from 'src/service/users/userpassword/userpassword.service';
import { UserprofilesService } from 'src/service/users/userprofiles/userprofiles.service';
import { UserrolesService } from 'src/service/users/userroles/userroles.service';
import { UsersService } from 'src/service/users/users/users.service';
import { BankController } from 'src/controller/payment/bank/bank.controller';
import { PaymentGateawayController } from 'src/controller/payment/payment_gateaway/payment_gateaway.controller';
import { UserAccountsController } from 'src/controller/payment/user_accounts/user_accounts.controller';
import { BankService } from 'src/service/payment/bank/bank.service';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
import { TransactionController } from 'src/controller/payment/transaction/transaction.controller';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';
import { UserAccountAuthController } from 'src/controller/payment/auth/auth.controller';
import { UserAccountAuthService } from 'src/service/payment/auth/auth.service';

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
    JobroleController,
    // EmployeeController,
    EmployeeDepartmentHistoryController,
    EmployeePayHistoryController,
    WorkOrderDetailController,
    WorkOrdersController,

    /* HOTEL */

    HotelController,
    // HotelReviewController,
    // FacilityPriceHistoryController,
    // FacilityController,
    // FacilityPhotosController,

    /* USERS */
    UsersController,
    RolesController,
    UserrolesController,
    UserpasswordController,
    AuthController,
    UserbonuspointsController,
    UsermembersController,
    UserprofilesController,
    
    /* BOOKING */
    /* RESTO */
    RestoController,
    OrderMenuDetailController,
    RestoMenuPhotosContoller,
    orderMenusController,

    /* PAYMENT */
    BankController,
    PaymentGateawayController,
    UserAccountsController,
    TransactionController,
    UserAccountAuthController,

    /* PURCHASING */
    /* MASTER */],
  providers: [
    /* HUMANRESOURCE */
    DepartmentService,
    ShiftService,
    JobRoleService,
    // EmployeeService,
    EmployeePayHistoryService,
    WorkOrderDetailService,
    EmployeeDepartmentHistoryService,
    WorkOrdersService,
    /* HOTEL */
    HotelService,
    // HotelReviewService,
    // FacilityPriceHistoryService,
    // FacilityService,
    // FacilityPhotosService,

    /* USERS */
    UsersService,
    RolesService,
    UserrolesService,
    UserpasswordService,
    AuthService,
    UserbonuspointsService,
    UsermembersService,
    UserprofilesService,
    /* BOOKING */
    /* RESTO */
    RestoService,
    OrderMenuDetailService,
    restoMenuPhotoService,
    orderMenusService,

    /* PAYMENT */
    BankService,
    PaymentGateawayService,
    UserAccountsService,
    TransactionService,
    UserAccountAuthService,
    
    /* PURCHASING */
    /* MASTER */
  ],
})
export class GlobalModule {}
