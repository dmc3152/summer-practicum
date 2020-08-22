import { OrientDBClient } from "orientjs";
import { constants } from "../constants";

export const databaseProviders = [
    {
        provide: constants.DATABASE_CONNECTION,
        useFactory: async () => {
            let client;
            try {
                client = await OrientDBClient.connect({
                    host: "localhost",
                    port: 2424
                });
            } catch(error) {
                return false;
            }

            return client;
        },
    },
];