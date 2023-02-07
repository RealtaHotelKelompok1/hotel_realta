import { HttpException } from '@nestjs/common';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/bank.dto';
import { Repository } from 'typeorm';
export declare class BankService {
    private BankRepository;
    constructor(BankRepository: Repository<Bank>);
    find(id?: number): Promise<any>;
    findByBankCode(code: string): Promise<any>;
    update(id: number, dataToUpdate: BankDto): Promise<HttpException>;
    insert(newData: BankDto): Promise<any>;
    delete(id: number): Promise<string | object>;
}
