import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _bank = require("./bank");
var _booking_order_detail = require("./booking_order_detail");
var _booking_order_detail_extra = require("./booking_order_detail_extra");
var _booking_orders = require("./booking_orders");
var _category_group = require("./category_group");
var _country = require("./country");
var _department = require("./department");
var _employee = require("./employee");
var _employee_department_history = require("./employee_department_history");
var _employee_pay_history = require("./employee_pay_history");
var _entity = require("./entity");
var _facilities = require("./facilities");
var _facility_photos = require("./facility_photos");
var _facility_price_history = require("./facility_price_history");
var _hotel_reviews = require("./hotel_reviews");
var _hotels = require("./hotels");
var _job_role = require("./job_role");
var _members = require("./members");
var _order_menu_detail = require("./order_menu_detail");
var _order_menus = require("./order_menus");
var _payment_gateaway = require("./payment_gateaway");
var _payment_transaction = require("./payment_transaction");
var _policy = require("./policy");
var _policy_category_group = require("./policy_category_group");
var _price_items = require("./price_items");
var _provinces = require("./provinces");
var _purchase_order_detail = require("./purchase_order_detail");
var _purchase_order_header = require("./purchase_order_header");
var _regions = require("./regions");
var _resto_menu_photos = require("./resto_menu_photos");
var _resto_menus = require("./resto_menus");
var _roles = require("./roles");
var _service_task = require("./service_task");
var _shift = require("./shift");
var _special_offer_coupons = require("./special_offer_coupons");
var _special_offers = require("./special_offers");
var _stock_detail = require("./stock_detail");
var _stock_photo = require("./stock_photo");
var _stocks = require("./stocks");
var _user_accounts = require("./user_accounts");
var _user_breakfeast = require("./user_breakfeast");
var _user_members = require("./user_members");
var _user_password = require("./user_password");
var _user_profiles = require("./user_profiles");
var _user_roles = require("./user_roles");
var _users = require("./users");
var _vendor = require("./vendor");
var _work_order_detail = require("./work_order_detail");
var _work_orders = require("./work_orders");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var bank = _bank(sequelize, DataTypes);
  var booking_order_detail = _booking_order_detail(sequelize, DataTypes);
  var booking_order_detail_extra = _booking_order_detail_extra(sequelize, DataTypes);
  var booking_orders = _booking_orders(sequelize, DataTypes);
  var category_group = _category_group(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employee_department_history = _employee_department_history(sequelize, DataTypes);
  var employee_pay_history = _employee_pay_history(sequelize, DataTypes);
  var entity = _entity(sequelize, DataTypes);
  var facilities = _facilities(sequelize, DataTypes);
  var facility_photos = _facility_photos(sequelize, DataTypes);
  var facility_price_history = _facility_price_history(sequelize, DataTypes);
  var hotel_reviews = _hotel_reviews(sequelize, DataTypes);
  var hotels = _hotels(sequelize, DataTypes);
  var job_role = _job_role(sequelize, DataTypes);
  var members = _members(sequelize, DataTypes);
  var order_menu_detail = _order_menu_detail(sequelize, DataTypes);
  var order_menus = _order_menus(sequelize, DataTypes);
  var payment_gateaway = _payment_gateaway(sequelize, DataTypes);
  var payment_transaction = _payment_transaction(sequelize, DataTypes);
  var policy = _policy(sequelize, DataTypes);
  var policy_category_group = _policy_category_group(sequelize, DataTypes);
  var price_items = _price_items(sequelize, DataTypes);
  var provinces = _provinces(sequelize, DataTypes);
  var purchase_order_detail = _purchase_order_detail(sequelize, DataTypes);
  var purchase_order_header = _purchase_order_header(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var resto_menu_photos = _resto_menu_photos(sequelize, DataTypes);
  var resto_menus = _resto_menus(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var service_task = _service_task(sequelize, DataTypes);
  var shift = _shift(sequelize, DataTypes);
  var special_offer_coupons = _special_offer_coupons(sequelize, DataTypes);
  var special_offers = _special_offers(sequelize, DataTypes);
  var stock_detail = _stock_detail(sequelize, DataTypes);
  var stock_photo = _stock_photo(sequelize, DataTypes);
  var stocks = _stocks(sequelize, DataTypes);
  var user_accounts = _user_accounts(sequelize, DataTypes);
  var user_breakfeast = _user_breakfeast(sequelize, DataTypes);
  var user_members = _user_members(sequelize, DataTypes);
  var user_password = _user_password(sequelize, DataTypes);
  var user_profiles = _user_profiles(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);
  var work_order_detail = _work_order_detail(sequelize, DataTypes);
  var work_orders = _work_orders(sequelize, DataTypes);

  category_group.belongsToMany(policy, { as: 'poca_poli_id_policies', through: policy_category_group, foreignKey: "poca_cagro_id", otherKey: "poca_poli_id" });
  policy.belongsToMany(category_group, { as: 'poca_cagro_id_category_groups', through: policy_category_group, foreignKey: "poca_poli_id", otherKey: "poca_cagro_id" });
  entity.belongsToMany(users, { as: 'usac_user_id_users', through: user_accounts, foreignKey: "usac_entity_id", otherKey: "usac_user_id" });
  users.belongsToMany(entity, { as: 'usac_entity_id_entities', through: user_accounts, foreignKey: "usac_user_id", otherKey: "usac_entity_id" });
  members.belongsToMany(users, { as: 'usme_user_id_users', through: user_members, foreignKey: "usme_memb_name", otherKey: "usme_user_id" });
  roles.belongsToMany(users, { as: 'usro_user_id_users', through: user_roles, foreignKey: "usro_role_id", otherKey: "usro_user_id" });
  users.belongsToMany(members, { as: 'usme_memb_name_members', through: user_members, foreignKey: "usme_user_id", otherKey: "usme_memb_name" });
  users.belongsToMany(roles, { as: 'usro_role_id_roles', through: user_roles, foreignKey: "usro_user_id", otherKey: "usro_role_id" });
  booking_order_detail_extra.belongsTo(booking_order_detail, { as: "boex_borde", foreignKey: "boex_borde_id"});
  booking_order_detail.hasMany(booking_order_detail_extra, { as: "booking_order_detail_extras", foreignKey: "boex_borde_id"});
  special_offer_coupons.belongsTo(booking_order_detail, { as: "soco_borde", foreignKey: "soco_borde_id"});
  booking_order_detail.hasMany(special_offer_coupons, { as: "special_offer_coupons", foreignKey: "soco_borde_id"});
  user_breakfeast.belongsTo(booking_order_detail, { as: "usbr_borde", foreignKey: "usbr_borde_id"});
  booking_order_detail.hasMany(user_breakfeast, { as: "user_breakfeasts", foreignKey: "usbr_borde_id"});
  booking_order_detail.belongsTo(facilities, { as: "borde_faci", foreignKey: "borde_faci_id"});
  facilities.hasMany(booking_order_detail, { as: "booking_order_details", foreignKey: "borde_faci_id"});
  booking_orders.belongsTo(hotels, { as: "boor_hotel", foreignKey: "boor_hotel_id"});
  hotels.hasMany(booking_orders, { as: "booking_orders", foreignKey: "boor_hotel_id"});
  booking_order_detail_extra.belongsTo(price_items, { as: "boex_prit", foreignKey: "boex_prit_id"});
  price_items.hasMany(booking_order_detail_extra, { as: "booking_order_detail_extras", foreignKey: "boex_prit_id"});
  special_offer_coupons.belongsTo(special_offers, { as: "soco_spof", foreignKey: "soco_spof_id"});
  special_offers.hasMany(special_offer_coupons, { as: "special_offer_coupons", foreignKey: "soco_spof_id"});
  booking_orders.belongsTo(users, { as: "boor_user", foreignKey: "boor_user_id"});
  users.hasMany(booking_orders, { as: "booking_orders", foreignKey: "boor_user_id"});
  hotels.belongsTo(address, { as: "hotel_addr", foreignKey: "hotel_addr_id"});
  address.hasMany(hotels, { as: "hotels", foreignKey: "hotel_addr_id"});
  facilities.belongsTo(category_group, { as: "faci_cagro", foreignKey: "faci_cagro_id"});
  category_group.hasMany(facilities, { as: "facilities", foreignKey: "faci_cagro_id"});
  facility_photos.belongsTo(facilities, { as: "fapho_faci", foreignKey: "fapho_faci_id"});
  facilities.hasMany(facility_photos, { as: "facility_photos", foreignKey: "fapho_faci_id"});
  facility_price_history.belongsTo(facilities, { as: "faph_faci", foreignKey: "faph_faci_id"});
  facilities.hasMany(facility_price_history, { as: "facility_price_histories", foreignKey: "faph_faci_id"});
  facilities.belongsTo(hotels, { as: "faci_hotel", foreignKey: "faci_hotel_id"});
  hotels.hasMany(facilities, { as: "facilities", foreignKey: "faci_hotel_id"});
  hotel_reviews.belongsTo(hotels, { as: "hore_hotel", foreignKey: "hore_hotel_id"});
  hotels.hasMany(hotel_reviews, { as: "hotel_reviews", foreignKey: "hore_hotel_id"});
  facility_price_history.belongsTo(users, { as: "faph_user", foreignKey: "faph_user_id"});
  users.hasMany(facility_price_history, { as: "facility_price_histories", foreignKey: "faph_user_id"});
  hotel_reviews.belongsTo(users, { as: "hore_user", foreignKey: "hore_user_id"});
  users.hasMany(hotel_reviews, { as: "hotel_reviews", foreignKey: "hore_user_id"});
  employee_department_history.belongsTo(department, { as: "edhi_dept", foreignKey: "edhi_dept_id"});
  department.hasMany(employee_department_history, { as: "employee_department_histories", foreignKey: "edhi_dept_id"});
  employee.belongsTo(employee, { as: "emp_emp", foreignKey: "emp_emp_id"});
  employee.hasMany(employee, { as: "employees", foreignKey: "emp_emp_id"});
  employee_department_history.belongsTo(employee, { as: "edhi_emp", foreignKey: "edhi_emp_id"});
  employee.hasMany(employee_department_history, { as: "employee_department_histories", foreignKey: "edhi_emp_id"});
  employee_pay_history.belongsTo(employee, { as: "ephi_emp", foreignKey: "ephi_emp_id"});
  employee.hasMany(employee_pay_history, { as: "employee_pay_histories", foreignKey: "ephi_emp_id"});
  work_order_detail.belongsTo(employee, { as: "wode_emp", foreignKey: "wode_emp_id"});
  employee.hasMany(work_order_detail, { as: "work_order_details", foreignKey: "wode_emp_id"});
  work_order_detail.belongsTo(facilities, { as: "wode_faci", foreignKey: "wode_faci_id"});
  facilities.hasMany(work_order_detail, { as: "work_order_details", foreignKey: "wode_faci_id"});
  employee.belongsTo(job_role, { as: "emp_joro", foreignKey: "emp_joro_id"});
  job_role.hasMany(employee, { as: "employees", foreignKey: "emp_joro_id"});
  work_order_detail.belongsTo(service_task, { as: "wode_setum", foreignKey: "wode_seta_id"});
  service_task.hasMany(work_order_detail, { as: "work_order_details", foreignKey: "wode_seta_id"});
  employee_department_history.belongsTo(shift, { as: "edhi_shift", foreignKey: "edhi_shift_id"});
  shift.hasMany(employee_department_history, { as: "employee_department_histories", foreignKey: "edhi_shift_id"});
  work_orders.belongsTo(users, { as: "woro_user", foreignKey: "woro_user_id"});
  users.hasMany(work_orders, { as: "work_orders", foreignKey: "woro_user_id"});
  work_order_detail.belongsTo(work_orders, { as: "wode_woro", foreignKey: "wode_woro_id"});
  work_orders.hasMany(work_order_detail, { as: "work_order_details", foreignKey: "wode_woro_id"});
  policy_category_group.belongsTo(category_group, { as: "poca_cagro", foreignKey: "poca_cagro_id"});
  category_group.hasMany(policy_category_group, { as: "policy_category_groups", foreignKey: "poca_cagro_id"});
  provinces.belongsTo(country, { as: "prov_country", foreignKey: "prov_country_id"});
  country.hasMany(provinces, { as: "provinces", foreignKey: "prov_country_id"});
  policy_category_group.belongsTo(policy, { as: "poca_poli", foreignKey: "poca_poli_id"});
  policy.hasMany(policy_category_group, { as: "policy_category_groups", foreignKey: "poca_poli_id"});
  address.belongsTo(provinces, { as: "addr_prov", foreignKey: "addr_prov_id"});
  provinces.hasMany(address, { as: "addresses", foreignKey: "addr_prov_id"});
  country.belongsTo(regions, { as: "country_region", foreignKey: "country_region_id"});
  regions.hasMany(country, { as: "countries", foreignKey: "country_region_id"});
  bank.belongsTo(entity, { as: "bank_entity", foreignKey: "bank_entity_id"});
  entity.hasOne(bank, { as: "bank", foreignKey: "bank_entity_id"});
  payment_gateaway.belongsTo(entity, { as: "paga_entity", foreignKey: "paga_entity_id"});
  entity.hasOne(payment_gateaway, { as: "payment_gateaway", foreignKey: "paga_entity_id"});
  user_accounts.belongsTo(entity, { as: "usac_entity", foreignKey: "usac_entity_id"});
  entity.hasMany(user_accounts, { as: "user_accounts", foreignKey: "usac_entity_id"});
  payment_transaction.belongsTo(users, { as: "patr_user", foreignKey: "patr_user_id"});
  users.hasMany(payment_transaction, { as: "payment_transactions", foreignKey: "patr_user_id"});
  user_accounts.belongsTo(users, { as: "usac_user", foreignKey: "usac_user_id"});
  users.hasMany(user_accounts, { as: "user_accounts", foreignKey: "usac_user_id"});
  purchase_order_header.belongsTo(employee, { as: "pohe_emp", foreignKey: "pohe_emp_id"});
  employee.hasMany(purchase_order_header, { as: "purchase_order_headers", foreignKey: "pohe_emp_id"});
  stock_detail.belongsTo(facilities, { as: "stod_faci", foreignKey: "stod_faci_id"});
  facilities.hasMany(stock_detail, { as: "stock_details", foreignKey: "stod_faci_id"});
  purchase_order_detail.belongsTo(purchase_order_header, { as: "pode_pohe", foreignKey: "pode_pohe_id"});
  purchase_order_header.hasMany(purchase_order_detail, { as: "purchase_order_details", foreignKey: "pode_pohe_id"});
  stock_detail.belongsTo(purchase_order_header, { as: "stod_pohe", foreignKey: "stod_pohe_id"});
  purchase_order_header.hasMany(stock_detail, { as: "stock_details", foreignKey: "stod_pohe_id"});
  stock_detail.belongsTo(stocks, { as: "stod_stock", foreignKey: "stod_stock_id"});
  stocks.hasMany(stock_detail, { as: "stock_details", foreignKey: "stod_stock_id"});
  stock_photo.belongsTo(stocks, { as: "spho_stock", foreignKey: "spho_stock_id"});
  stocks.hasMany(stock_photo, { as: "stock_photos", foreignKey: "spho_stock_id"});
  purchase_order_header.belongsTo(vendor, { as: "pohe_vendor", foreignKey: "pohe_vendor_id"});
  vendor.hasMany(purchase_order_header, { as: "purchase_order_headers", foreignKey: "pohe_vendor_id"});
  resto_menus.belongsTo(facilities, { as: "reme_faci", foreignKey: "reme_faci_id"});
  facilities.hasMany(resto_menus, { as: "resto_menus", foreignKey: "reme_faci_id"});
  order_menu_detail.belongsTo(order_menus, { as: "omde_orme", foreignKey: "omde_orme_id"});
  order_menus.hasMany(order_menu_detail, { as: "order_menu_details", foreignKey: "omde_orme_id"});
  order_menu_detail.belongsTo(resto_menus, { as: "omde_reme", foreignKey: "omde_reme_id"});
  resto_menus.hasMany(order_menu_detail, { as: "order_menu_details", foreignKey: "omde_reme_id"});
  resto_menu_photos.belongsTo(resto_menus, { as: "remp_reme", foreignKey: "remp_reme_id"});
  resto_menus.hasMany(resto_menu_photos, { as: "resto_menu_photos", foreignKey: "remp_reme_id"});
  order_menus.belongsTo(users, { as: "orme_user", foreignKey: "orme_user_id"});
  users.hasMany(order_menus, { as: "order_menus", foreignKey: "orme_user_id"});
  user_profiles.belongsTo(address, { as: "uspro_addr", foreignKey: "uspro_addr_id"});
  address.hasMany(user_profiles, { as: "user_profiles", foreignKey: "uspro_addr_id"});
  user_members.belongsTo(members, { as: "usme_memb_name_member", foreignKey: "usme_memb_name"});
  members.hasMany(user_members, { as: "user_members", foreignKey: "usme_memb_name"});
  user_roles.belongsTo(roles, { as: "usro_role", foreignKey: "usro_role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_role_id"});
  user_members.belongsTo(users, { as: "usme_user", foreignKey: "usme_user_id"});
  users.hasMany(user_members, { as: "user_members", foreignKey: "usme_user_id"});
  user_password.belongsTo(users, { as: "uspa_user", foreignKey: "uspa_user_id"});
  users.hasOne(user_password, { as: "user_password", foreignKey: "uspa_user_id"});
  user_profiles.belongsTo(users, { as: "uspro_user", foreignKey: "uspro_user_id"});
  users.hasMany(user_profiles, { as: "user_profiles", foreignKey: "uspro_user_id"});
  user_roles.belongsTo(users, { as: "usro_user", foreignKey: "usro_user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_user_id"});

  return {
    address,
    bank,
    booking_order_detail,
    booking_order_detail_extra,
    booking_orders,
    category_group,
    country,
    department,
    employee,
    employee_department_history,
    employee_pay_history,
    entity,
    facilities,
    facility_photos,
    facility_price_history,
    hotel_reviews,
    hotels,
    job_role,
    members,
    order_menu_detail,
    order_menus,
    payment_gateaway,
    payment_transaction,
    policy,
    policy_category_group,
    price_items,
    provinces,
    purchase_order_detail,
    purchase_order_header,
    regions,
    resto_menu_photos,
    resto_menus,
    roles,
    service_task,
    shift,
    special_offer_coupons,
    special_offers,
    stock_detail,
    stock_photo,
    stocks,
    user_accounts,
    user_breakfeast,
    user_members,
    user_password,
    user_profiles,
    user_roles,
    users,
    vendor,
    work_order_detail,
    work_orders,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize }