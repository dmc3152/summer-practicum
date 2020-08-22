import { CountriesRepository } from "./countries.repository";
import { CreateCountryDTO } from "../countries/dto/create-country.dto";
import { UpdateCountryDTO } from "../countries/dto/update-country.dto";
export declare class CountriesService {
    private countriesRepository;
    constructor(countriesRepository: CountriesRepository);
    getCountries(): Promise<any>;
    addCountry(country: CreateCountryDTO): Promise<any>;
    updateCountry(country: UpdateCountryDTO): Promise<any>;
    deleteCountry(rid: string): Promise<any>;
}
