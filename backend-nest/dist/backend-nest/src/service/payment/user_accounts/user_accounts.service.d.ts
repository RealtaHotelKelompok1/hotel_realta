import { UserAccounts } from 'entities/UserAccounts';
import { Repository } from 'typeorm';
export declare class UserAccountsService {
    private UserAccountsRepository;
    constructor(UserAccountsRepository: Repository<UserAccounts>);
    find(filter?: {
        usacUserId?: number;
        usacAccountNumber?: string;
        usacType?: string;
    }): Promise<any>;
    findByQuery(query?: string): Promise<any>;
    update(): Promise<void>;
    create(): Promise<void>;
}
