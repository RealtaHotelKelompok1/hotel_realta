import { Repository } from 'typeorm';
import { Country } from 'entities/Country';
export declare class CountriesService {
    private countryRepository;
    constructor(countryRepository: Repository<Country>);
    getAll(): Promise<any>;
    getById(countryId: number): Promise<any>;
    create(data: Country): Promise<any>;
    edit(data: Country, countryId: number): Promise<{
        message: string;
    }>;
    delete(countryId: number): Promise<import("typeorm").DeleteResult>;
}
