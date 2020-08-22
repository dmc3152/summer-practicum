import { CountriesService } from "./countries.service";
import { CreateCountryDTO } from "../countries/dto/create-country.dto";
import { UpdateCountryDTO } from "../countries/dto/update-country.dto";
export declare class CountriesController {
    private countriesService;
    constructor(countriesService: CountriesService);
    getCountries(): Promise<any>;
    addCountry(createCountryDTO: CreateCountryDTO): Promise<any>;
    updateCountry(updateCountryDTO: UpdateCountryDTO): Promise<any>;
    deleteCountry(rid: any): Promise<any>;
}
