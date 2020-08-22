"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const countries_repository_1 = require("./countries.repository");
let CountriesService = (() => {
    let CountriesService = class CountriesService {
        constructor(countriesRepository) {
            this.countriesRepository = countriesRepository;
        }
        getCountries() {
            return this.countriesRepository.getCountries();
        }
        addCountry(country) {
            return this.countriesRepository.addCountry(country.name, country.code, country.id);
        }
        updateCountry(country) {
            return this.countriesRepository.updateCountry(country.rid, country.name, country.code, country.id);
        }
        deleteCountry(rid) {
            return this.countriesRepository.deleteCountry(rid);
        }
    };
    CountriesService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [countries_repository_1.CountriesRepository])
    ], CountriesService);
    return CountriesService;
})();
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map