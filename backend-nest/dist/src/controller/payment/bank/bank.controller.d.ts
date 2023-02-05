import { HttpException } from '@nestjs/common';
import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from './bank.dto';
export declare class BankController {
    private bankService;
    constructor(bankService: BankService);
    findAllBank(): Promise<import("../../../../entities/Bank").Bank | import("../../../../entities/Bank").Bank[]>;
    findBankById(id: number): Promise<import("../../../../entities/Bank").Bank | HttpException | import("../../../../entities/Bank").Bank[]>;
    updateBank(id: number, body: BankDto): Promise<import("../../../../entities/Bank").Bank | HttpException | import("../../../../entities/Bank").Bank[]>;
    insertBank(body: BankDto): Promise<import("typeorm").InsertResult>;
    deleteBank(id: number): Promise<string>;
}
