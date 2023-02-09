"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMenus_1 = require("../../../entities/OrderMenus");
const typeorm_2 = require("typeorm");
let orderMenusService = class orderMenusService {
    constructor(orderMenusRepository) {
        this.orderMenusRepository = orderMenusRepository;
    }
    async findAllOrderMenus() {
        return await this.orderMenusRepository.find();
    }
    async findOneOrderMenus(orme_id) {
        const result = await this.orderMenusRepository.findOne({
            where: {
                ormeId: orme_id,
            },
        });
        if (result) {
            return result;
        }
        throw new common_1.HttpException('Categori not Found', common_1.HttpStatus.NOT_FOUND);
    }
    async createOrderMenus(data) {
        let date = new Date();
        const result = await this.orderMenusRepository.save({
            ormeOrderNumber: data.ormeOrderNumber,
            ormeOrderDate: data.ormeOrderDate,
            ormeTotalItem: data.ormeTotalItem,
            ormeTotalDiscount: data.ormeTotalDiscount,
            ormeTotalAmount: data.ormeTotalAmount,
            ormePayType: data.ormePayType,
            ormeCardnumber: data.ormeCardnumber,
            ormeIsPaid: data.ormeIsPaid,
            ormeModifiedDate: date,
        });
        return result;
    }
    async updateOrderMenus(id, data) {
        let date = new Date();
        let result = await this.orderMenusRepository.update({
            ormeId: id,
        }, {
            ormeOrderNumber: data.ormeOrderNumber,
            ormeOrderDate: data.ormeOrderDate,
            ormeTotalItem: data.ormeTotalItem,
            ormeTotalDiscount: data.ormeTotalDiscount,
            ormeTotalAmount: data.ormeTotalAmount,
            ormePayType: data.ormePayType,
            ormeCardnumber: data.ormeCardnumber,
            ormeIsPaid: data.ormeIsPaid,
            ormeModifiedDate: date,
        });
        return result + ' Sukses Mengupdate';
    }
    async deleteOrderMenus(id) {
        await this.orderMenusRepository.delete({
            ormeId: id,
        });
        return 'Sukses Menghapus';
    }
};
orderMenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMenus_1.OrderMenus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], orderMenusService);
exports.orderMenusService = orderMenusService;
//# sourceMappingURL=orderMenus.service.js.map