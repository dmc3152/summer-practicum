export declare class CountriesRepository {
    private pool;
    constructor(pool: any);
    getCountries(): Promise<any>;
    addCountry(name: any, code: any, id: any): Promise<any>;
    updateCountry(rid: any, name: any, code: any, id: any): Promise<any>;
    deleteCountry(rid: any): Promise<any>;
}
