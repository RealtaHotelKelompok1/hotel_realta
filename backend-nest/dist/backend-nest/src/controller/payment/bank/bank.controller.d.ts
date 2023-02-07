import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from 'src/dto/bank.dto';
export declare class BankController {
    private bankService;
    constructor(bankService: BankService);
    findAllBank(): Promise<any>;
    findBankById(id: number): Promise<any>;
    updateBank(id: number, body: BankDto): Promise<import("@nestjs/common").HttpException>;
    insertBank(body: BankDto): Promise<any>;
    deleteBank(id: number): Promise<string | object>;
}
