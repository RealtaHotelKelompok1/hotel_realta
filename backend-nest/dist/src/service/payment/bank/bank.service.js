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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Bank_1 = require("../../../../entities/Bank");
const typeorm_2 = require("typeorm");
let BankService = class BankService {
    constructor(BankRepository) {
        this.BankRepository = BankRepository;
    }
    async find(id) {
        if (id) {
            return await this.BankRepository.findOneByOrFail({
                bankEntityId: id,
            })
                .then((result) => {
                return result;
            })
                .catch((err) => {
                return new common_1.HttpException({ error: `Bank with ID ${id} is not found!` }, common_1.HttpStatus.NOT_FOUND, { cause: err });
            });
        }
        else {
            return await this.BankRepository.find()
                .then((result) => {
                return result;
            })
                .catch((err) => {
                return err;
            });
        }
    }
    async findByBankCode(code) {
        return await this.BankRepository.findOneByOrFail({
            bankCode: code,
        })
            .then((result) => {
            return result;
        })
            .catch((err) => {
            return err;
        });
    }
    async update(id, dataToUpdate) {
        return await this.BankRepository.update({
            bankEntityId: id,
        }, dataToUpdate)
            .then((result) => {
            return result;
        })
            .then((err) => {
            return new common_1.HttpException({ error: `Bank with ID ${id} is not found!` + err }, common_1.HttpStatus.NOT_FOUND);
        });
    }
    async insert(newData) {
        return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
            newData.bankCode.toString(),
            newData.bankName,
        ])
            .then(() => {
            return this.findByBankCode(newData.bankCode.toString());
        })
            .catch((err) => {
            return "There's an error in adding new Bank data, " + err;
        });
    }
    async delete(id) {
        const bankExists = await this.find(id);
        if (bankExists instanceof common_1.HttpException) {
            return bankExists.getResponse();
        }
        else {
            return await this.BankRepository.delete(id).then(() => {
                return `Bank with ID ${id} is successfully deleted!`;
            });
        }
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Bank_1.Bank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map