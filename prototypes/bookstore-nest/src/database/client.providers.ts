import { constants } from "../constants";

export const clientProviders = [
    {
        provide: constants.DATABASE_CLIENT,
        useFactory: async (client: any) => {
            return await client.sessions({
                name: "bookapp",
                username: "admin",
                password: "admin",
                pool: { max: 10 }
            });
        },
        inject: [constants.DATABASE_CONNECTION]
    },
];