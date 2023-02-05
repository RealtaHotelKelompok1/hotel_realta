import { orderMenusService } from 'src/service/resto/orderMenus.service';
export declare class orderMenusController {
    private readonly orderMenusService;
    constructor(orderMenusService: orderMenusService);
    findAllOrderMenus(): Promise<any>;
    findOneOrderMenus(Params: any): Promise<any>;
    createOrderMenus(body: any): Promise<any>;
    updateOrderMenus(params: any, body: any): any;
    deleteOrderMenus(params: any): any;
}
