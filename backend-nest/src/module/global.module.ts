import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { Shift } from 'entities/Shift';
import { Regions } from 'entities/Regions';
import { DepartmentController } from 'src/controller/humanresource/department/department.controller';
import { ShiftController } from 'src/controller/humanresource/shift/shift.controller';
import { RegionController } from 'src/controller/master/region/region.controller';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { RegionService } from 'src/service/master/region/region.service';
import { Country } from 'entities/Country';
import { Policy } from 'entities/Policy';
import { PolicyCategoryGroup } from 'entities/PolicyCategoryGroup';
import { CategoryGroup } from 'entities/CategoryGroup';
import { ServiceTask } from 'entities/ServiceTask';
import { Members } from 'entities/Members';
import { PriceItems } from 'entities/PriceItems';
import { Address } from 'entities/Address';
import { Provinces } from 'entities/Provinces';
import { CountriesController } from 'src/controller/master/countries/countries.controller';
import { ProvincesController } from 'src/controller/master/provinces/provinces.controller';
import { AddressController } from 'src/controller/master/address/address.controller';
import { CategoryGroupController } from 'src/controller/master/category_group/category_group.controller';
import { PolicyController } from 'src/controller/master/policy/policy.controller';
import { PolicyCategoryGroupController } from 'src/controller/master/policy_category_group/policy_category_group.controller';
import { PriceItemsController } from 'src/controller/master/price_items/price_items.controller';
import { ServiceTaskController } from 'src/controller/master/service_task/service_task.controller';
import { CountriesService } from 'src/service/master/countries/countries.service';
import { MembersService } from 'src/service/master/members/members.service';
import { PolicyService } from 'src/service/master/policy/policy.service';
import { PolicyCategoryGroupService } from 'src/service/master/policy_category_group/policy_category_group.service';
import { PriceItemsService } from 'src/service/master/price_items/price_items.service';
import { ProvincesService } from 'src/service/master/provinces/provinces.service';
import { AddressService } from 'src/service/master/address/address.service';
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      Department,
      Shift,
      Regions,
      Country,
      Policy,
      PolicyCategoryGroup,
      CategoryGroup,
      Members,
      ServiceTask,
      PriceItems,
      Address,
      Provinces
    ]
  )],
  controllers: [
    DepartmentController,
    ShiftController,
    RegionController,
    CountriesController,
    ProvincesController,
    AddressController,
    CategoryGroupController,
    PolicyController,
    PolicyCategoryGroupController,
    PriceItemsController,
    ServiceTaskController
  ],
  providers: [
    DepartmentService,
    ShiftService,
    
    RegionService,
    CountriesService,
    MembersService,
    PolicyService,
    PolicyCategoryGroupService,
    PriceItemsService,
    ProvincesService,
    AddressService,
    CategoryGroupService,
    ProvincesService

  ],
})
export class GlobalModule { }