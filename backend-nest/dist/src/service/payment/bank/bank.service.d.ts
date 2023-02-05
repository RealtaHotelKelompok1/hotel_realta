import { Bank } from 'entities/Bank';
import { BankDto } from 'src/controller/payment/bank/bank.dto';
import { Repository } from 'typeorm';
export declare class BankService {
    private BankRepository;
    constructor(BankRepository: Repository<Bank>);
    find(id?: number): Promise<Bank | Bank[]>;
    update(id: number, dataToUpdate: BankDto): Promise<import("typeorm").UpdateResult>;
    insert(newData: BankDto): Promise<import("typeorm").InsertResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
