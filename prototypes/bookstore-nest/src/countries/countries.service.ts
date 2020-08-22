import { Injectable } from '@nestjs/common';
import { CountriesRepository } from "./countries.repository";
import { CreateCountryDTO } from "../countries/dto/create-country.dto";
import { UpdateCountryDTO } from "../countries/dto/update-country.dto";

@Injectable()
export class CountriesService {
    constructor(private countriesRepository: CountriesRepository) { }

    getCountries(): Promise<any> {
        return this.countriesRepository.getCountries();
    }

    addCountry(country: CreateCountryDTO): Promise<any> {
        return this.countriesRepository.addCountry(country.name, country.code, country.id);
    }

    updateCountry(country: UpdateCountryDTO): Promise<any> {
        return this.countriesRepository.updateCountry(country.rid, country.name, country.code, country.id);
    }

    deleteCountry(rid: string): Promise<any> {
        return this.countriesRepository.deleteCountry(rid);
    }
}
