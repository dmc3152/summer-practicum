"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesModule = void 0;
const common_1 = require("@nestjs/common");
const countries_controller_1 = require("./countries.controller");
const countries_service_1 = require("./countries.service");
const countries_repository_1 = require("./countries.repository");
const client_module_1 = require("../database/client.module");
let CountriesModule = (() => {
    let CountriesModule = class CountriesModule {
    };
    CountriesModule = __decorate([
        common_1.Module({
            imports: [client_module_1.ClientModule],
            controllers: [countries_controller_1.CountriesController],
            providers: [
                countries_service_1.CountriesService,
                countries_repository_1.CountriesRepository
            ]
        })
    ], CountriesModule);
    return CountriesModule;
})();
exports.CountriesModule = CountriesModule;
//# sourceMappingURL=countries.module.js.map