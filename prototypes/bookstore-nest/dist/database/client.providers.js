"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientProviders = void 0;
const constants_1 = require("../constants");
exports.clientProviders = [
    {
        provide: constants_1.constants.DATABASE_CLIENT,
        useFactory: async (client) => {
            return await client.sessions({
                name: "bookapp",
                username: "admin",
                password: "admin",
                pool: { max: 10 }
            });
        },
        inject: [constants_1.constants.DATABASE_CONNECTION]
    },
];
//# sourceMappingURL=client.providers.js.map