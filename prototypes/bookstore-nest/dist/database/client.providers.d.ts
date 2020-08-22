export declare const clientProviders: {
    provide: string;
    useFactory: (client: any) => Promise<any>;
    inject: string[];
}[];
