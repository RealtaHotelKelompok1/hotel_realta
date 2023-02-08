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
exports.UserAccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserAccounts_1 = require("../../../../entities/UserAccounts");
const typeorm_2 = require("typeorm");
let UserAccountsService = class UserAccountsService {
    constructor(UserAccountsRepository) {
        this.UserAccountsRepository = UserAccountsRepository;
    }
    async find(filter) {
        if (filter) {
            return await this.UserAccountsRepository.find({ where: filter });
        }
        return await this.UserAccountsRepository.find();
    }
    async findByQuery(query) {
        if (query) {
            return await this.UserAccountsRepository.query(query);
        }
        return await this.UserAccountsRepository.find();
    }
    async update() { }
    async create() { }
};
UserAccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserAccounts_1.UserAccounts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserAccountsService);
exports.UserAccountsService = UserAccountsService;
//# sourceMappingURL=user_accounts.service.js.map