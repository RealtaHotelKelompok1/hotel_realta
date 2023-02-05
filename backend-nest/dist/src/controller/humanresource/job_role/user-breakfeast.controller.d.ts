import { UserBreakfeast } from 'entities/UserBreakfeast';
import { UserBreakfeastService } from 'src/service/booking/user-breakfeast.service';
export declare class UserBreakfeastController {
    private userbreakfeastService;
    constructor(userbreakfeastService: UserBreakfeastService);
    findall(): Promise<any>;
    findbyid(id: Date): Promise<any>;
    create(body: UserBreakfeast): Promise<any>;
    update(params: any, body: UserBreakfeast): Promise<any>;
    remove(params: any): Promise<any>;
}
