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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = require("@nestjs/common");
const countries_service_1 = require("./countries.service");
const create_country_dto_1 = require("../countries/dto/create-country.dto");
const update_country_dto_1 = require("../countries/dto/update-country.dto");
let CountriesController = (() => {
    let CountriesController = class CountriesController {
        constructor(countriesService) {
            this.countriesService = countriesService;
        }
        async getCountries() {
            return await this.countriesService.getCountries();
        }
        async addCountry(createCountryDTO) {
            return await this.countriesService.addCountry(createCountryDTO);
        }
        async updateCountry(updateCountryDTO) {
            return await this.countriesService.updateCountry(updateCountryDTO);
        }
        async deleteCountry(rid) {
            return await this.countriesService.deleteCountry(rid);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CountriesController.prototype, "getCountries", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_country_dto_1.CreateCountryDTO]),
        __metadata("design:returntype", Promise)
    ], CountriesController.prototype, "addCountry", null);
    __decorate([
        common_1.Put(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [update_country_dto_1.UpdateCountryDTO]),
        __metadata("design:returntype", Promise)
    ], CountriesController.prototype, "updateCountry", null);
    __decorate([
        common_1.Delete(':rid'),
        __param(0, common_1.Param('rid')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CountriesController.prototype, "deleteCountry", null);
    CountriesController = __decorate([
        common_1.Controller('countries'),
        __metadata("design:paramtypes", [countries_service_1.CountriesService])
    ], CountriesController);
    return CountriesController;
})();
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.controller.js.map