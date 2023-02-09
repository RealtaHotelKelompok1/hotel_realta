import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
export declare class UserAccountsController {
    private userAccountsService;
    constructor(userAccountsService: UserAccountsService);
    findAllAccounts(): Promise<any>;
    findByUserId(usacUserId: number): Promise<any>;
    findByAccountNumber(accountNumber: string): Promise<any>;
    findDompetRealtaAccount(usacType: string): Promise<any>;
}
