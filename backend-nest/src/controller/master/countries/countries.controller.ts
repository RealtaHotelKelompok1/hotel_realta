import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CountriesService } from 'src/service/master/countries/countries.service';
@Controller('countries')
export class CountriesController {
    constructor(private readonly CountryService: CountriesService) { }

    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.CountryService.getAll()
        console.log({ hasil: hasil })
        return ({ hasil: hasil })
    }
    @Get(':id')
    @HttpCode(200)
    async getById(@Param('id') id: number) {
        const hasil = await this.CountryService.getById(id)
        console.log({ hasil: hasil })
        return ({ hasil: hasil })
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any) {
        const hasil = await this.CountryService.create(Body)
        console.log({ message: 'berhasil', hasil: hasil })
        return hasil
    }
}
