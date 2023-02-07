"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const members_controller_1 = require("../controller/master/members/members.controller");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Department_1 = require("../../entities/Department");
const Shift_1 = require("../../entities/Shift");
const Regions_1 = require("../../entities/Regions");
const region_controller_1 = require("../controller/master/region/region.controller");
const region_service_1 = require("../service/master/region/region.service");
const Country_1 = require("../../entities/Country");
const Policy_1 = require("../../entities/Policy");
const PolicyCategoryGroup_1 = require("../../entities/PolicyCategoryGroup");
const CategoryGroup_1 = require("../../entities/CategoryGroup");
const ServiceTask_1 = require("../../entities/ServiceTask");
const Members_1 = require("../../entities/Members");
const PriceItems_1 = require("../../entities/PriceItems");
const Address_1 = require("../../entities/Address");
const Provinces_1 = require("../../entities/Provinces");
const countries_controller_1 = require("../controller/master/countries/countries.controller");
const provinces_controller_1 = require("../controller/master/provinces/provinces.controller");
const address_controller_1 = require("../controller/master/address/address.controller");
const category_group_controller_1 = require("../controller/master/category_group/category_group.controller");
const policy_controller_1 = require("../controller/master/policy/policy.controller");
const policy_category_group_controller_1 = require("../controller/master/policy_category_group/policy_category_group.controller");
const price_items_controller_1 = require("../controller/master/price_items/price_items.controller");
const service_task_controller_1 = require("../controller/master/service_task/service_task.controller");
const countries_service_1 = require("../service/master/countries/countries.service");
const members_service_1 = require("../service/master/members/members.service");
const policy_service_1 = require("../service/master/policy/policy.service");
const policy_category_group_service_1 = require("../service/master/policy_category_group/policy_category_group.service");
const price_items_service_1 = require("../service/master/price_items/price_items.service");
const provinces_service_1 = require("../service/master/provinces/provinces.service");
const address_service_1 = require("../service/master/address/address.service");
const category_group_service_1 = require("../service/master/category_group/category_group.service");
const service_task_service_1 = require("../service/master/service_task/service_task.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Department_1.Department,
                Shift_1.Shift,
                Regions_1.Regions,
                Country_1.Country,
                Policy_1.Policy,
                PolicyCategoryGroup_1.PolicyCategoryGroup,
                CategoryGroup_1.CategoryGroup,
                Members_1.Members,
                ServiceTask_1.ServiceTask,
                PriceItems_1.PriceItems,
                Address_1.Address,
                Provinces_1.Provinces
            ])],
        controllers: [
            region_controller_1.RegionController,
            countries_controller_1.CountriesController,
            provinces_controller_1.ProvincesController,
            address_controller_1.AddressController,
            category_group_controller_1.CategoryGroupController,
            policy_controller_1.PolicyController,
            policy_category_group_controller_1.PolicyCategoryGroupController,
            price_items_controller_1.PriceItemsController,
            service_task_controller_1.ServiceTaskController,
            members_controller_1.MembersController,
        ],
        providers: [
            region_service_1.RegionService,
            countries_service_1.CountriesService,
            members_service_1.MembersService,
            policy_service_1.PolicyService,
            policy_category_group_service_1.PolicyCategoryGroupService,
            price_items_service_1.PriceItemsService,
            provinces_service_1.ProvincesService,
            address_service_1.AddressService,
            category_group_service_1.CategoryGroupService,
            provinces_service_1.ProvincesService,
            service_task_service_1.ServiceTaskService
        ],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map