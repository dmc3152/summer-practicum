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
exports.CountriesRepository = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let CountriesRepository = (() => {
    let CountriesRepository = class CountriesRepository {
        constructor(pool) {
            this.pool = pool;
        }
        async getCountries() {
            if (!this.pool)
                throw new common_1.ServiceUnavailableException();
            const session = await this.pool.acquire();
            let result;
            try {
                result = await session.query('select Id, Code, Name from countries').all();
                await session.close();
            }
            catch (error) {
                await session.close();
                if (error.code === 10)
                    throw new common_1.ServiceUnavailableException();
                else
                    throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return result;
        }
        async addCountry(name, code, id) {
            if (!this.pool)
                throw new common_1.ServiceUnavailableException();
            const session = await this.pool.acquire();
            let result;
            const params = {
                name: name,
                code: code,
                id: id
            };
            try {
                result = await session.command("INSERT INTO Countries SET Name = :name, Code = :code, Id = :id", { params: params }).all();
                await session.close();
            }
            catch (error) {
                await session.close();
                if (error.code === 10)
                    throw new common_1.ServiceUnavailableException();
                else
                    throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return result;
        }
        async updateCountry(rid, name, code, id) {
            if (!this.pool)
                throw new common_1.ServiceUnavailableException();
            if (!rid)
                throw new common_1.BadRequestException();
            const session = await this.pool.acquire();
            let result;
            const params = {
                Name: name,
                Code: code,
                Id: id
            };
            try {
                result = await session.update(rid)
                    .set(params)
                    .one();
                await session.close();
            }
            catch (error) {
                await session.close();
                if (error.code === 10)
                    throw new common_1.ServiceUnavailableException();
                else
                    throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return result;
        }
        async deleteCountry(rid) {
            if (!this.pool)
                throw new common_1.ServiceUnavailableException();
            if (!rid)
                throw new common_1.BadRequestException();
            const session = await this.pool.acquire();
            let result;
            try {
                result = session.delete("VERTEX", 'Countries')
                    .where('@rid = ' + rid)
                    .one();
                await session.close();
            }
            catch (error) {
                await session.close();
                if (error.code === 10)
                    throw new common_1.ServiceUnavailableException();
                else
                    throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return result;
        }
    };
    CountriesRepository = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(constants_1.constants.DATABASE_CLIENT)),
        __metadata("design:paramtypes", [Object])
    ], CountriesRepository);
    return CountriesRepository;
})();
exports.CountriesRepository = CountriesRepository;
//# sourceMappingURL=countries.repository.js.map