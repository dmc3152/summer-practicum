"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const orientjs_1 = require("orientjs");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: constants_1.constants.DATABASE_CONNECTION,
        useFactory: async () => {
            let client;
            try {
                client = await orientjs_1.OrientDBClient.connect({
                    host: "localhost",
                    port: 2424
                });
            }
            catch (error) {
                return false;
            }
            return client;
        },
    },
];
//# sourceMappingURL=database.providers.js.map