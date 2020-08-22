import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Body,
    Delete,
} from '@nestjs/common';
import { CountriesService } from "./countries.service";
import { CreateCountryDTO } from "../countries/dto/create-country.dto";
import { UpdateCountryDTO } from "../countries/dto/update-country.dto";

@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) {}

  @Get()
  async getCountries() {
    return await this.countriesService.getCountries();
  }

  @Post()
  async addCountry(@Body() createCountryDTO: CreateCountryDTO) {
    return await this.countriesService.addCountry(createCountryDTO);
  }

  @Put()
  async updateCountry(@Body() updateCountryDTO: UpdateCountryDTO) {
    return await this.countriesService.updateCountry(updateCountryDTO);
  }

  @Delete(':rid')
  async deleteCountry(@Param('rid') rid) {
    return await this.countriesService.deleteCountry(rid);
  }
}
