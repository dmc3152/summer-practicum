export declare class UsersRepository {
    private pool;
    constructor(pool: any);
    getUsers(): Promise<any>;
    addUser(name: any, email: any, password: any): Promise<any>;
    updateUser(rid: any, name: any, email: any, password: any): Promise<any>;
    deleteUser(rid: any): Promise<any>;
}
