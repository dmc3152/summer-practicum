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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let UsersRepository = (() => {
    let UsersRepository = class UsersRepository {
        constructor(pool) {
            this.pool = pool;
        }
        async getUsers() {
            let session, result, exception;
            try {
                session = await this.pool.acquire();
            }
            catch (error) {
                throw new common_1.ServiceUnavailableException();
            }
            try {
                result = await session.query('SELECT name, email, password FROM User').all();
            }
            catch (error) {
                exception = error.code === 10 ? new common_1.ServiceUnavailableException() : new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await session.close();
            if (exception)
                throw exception;
            return result;
        }
        async addUser(name, email, password) {
            let session, result, exception;
            try {
                session = await this.pool.acquire();
            }
            catch (error) {
                throw new common_1.ServiceUnavailableException();
            }
            const params = {
                name: name,
                email: email,
                password: password
            };
            try {
                result = await session.command("INSERT INTO User SET name = :name, email = :email, password = :password", { params: params }).all();
            }
            catch (error) {
                exception = error.code === 10 ? new common_1.ServiceUnavailableException() : new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await session.close();
            if (exception)
                throw exception;
            return result;
        }
        async updateUser(rid, name, email, password) {
            let session, result, exception;
            try {
                session = await this.pool.acquire();
            }
            catch (error) {
                throw new common_1.ServiceUnavailableException();
            }
            if (!rid)
                throw new common_1.BadRequestException();
            const params = {
                name: name,
                email: email,
                password: password
            };
            try {
                result = await session.update(rid)
                    .set(params)
                    .one();
                await session.close();
            }
            catch (error) {
                exception = error.code === 10 ? new common_1.ServiceUnavailableException() : new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await session.close();
            if (exception)
                throw exception;
            return result;
        }
        async deleteUser(rid) {
            let session, result, exception;
            try {
                session = await this.pool.acquire();
            }
            catch (error) {
                throw new common_1.ServiceUnavailableException();
            }
            if (!rid)
                throw new common_1.BadRequestException();
            try {
                result = session.delete("VERTEX", 'User')
                    .where('@rid = ' + rid)
                    .one();
                await session.close();
            }
            catch (error) {
                exception = error.code === 10 ? new common_1.ServiceUnavailableException() : new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await session.close();
            if (exception)
                throw exception;
            return result;
        }
    };
    UsersRepository = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(constants_1.constants.DATABASE_CLIENT)),
        __metadata("design:paramtypes", [Object])
    ], UsersRepository);
    return UsersRepository;
})();
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map