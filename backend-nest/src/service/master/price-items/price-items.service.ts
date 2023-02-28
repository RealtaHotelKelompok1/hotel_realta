import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceItems } from 'entities/PriceItems';

@Injectable()
export class PriceItemsService {
    constructor(@InjectRepository(PriceItems)
    private priceIteRepository: Repository<PriceItems>)
    {}

async findAllPriceItems(): Promise<any> {
    return await this.priceIteRepository.find()
}
}
