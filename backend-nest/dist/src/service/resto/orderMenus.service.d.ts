import { OrderMenus } from 'entities/OrderMenus';
import { Repository } from 'typeorm';
export declare class orderMenusService {
    private orderMenusRepository;
    constructor(orderMenusRepository: Repository<OrderMenus>);
    findAllOrderMenus(): Promise<any>;
    findOneOrderMenus(orme_id: number): Promise<any>;
    createOrderMenus(data: OrderMenus): Promise<any>;
    updateOrderMenus(id: number, data: OrderMenus): Promise<any>;
    deleteOrderMenus(id: number): Promise<any>;
}
