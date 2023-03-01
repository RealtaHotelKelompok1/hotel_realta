import { Controller,Get } from '@nestjs/common';
import { PriceItemsService } from 'src/service/master/price-items/price-items.service';

@Controller('priceItems')
export class PriceItemsController {
    constructor (private priceItemsservice : PriceItemsService) {}

    @Get()
    findall(): Promise<any> {
        return this.priceItemsservice.findAllPriceItems();
    }
}
