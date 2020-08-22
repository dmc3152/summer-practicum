"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const orientjs = require("orientjs");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await orientjs.OrientDBClient.connect({ host: "localhost", port: 2424 })
    }
];
//# sourceMappingURL=database.provider.js.map