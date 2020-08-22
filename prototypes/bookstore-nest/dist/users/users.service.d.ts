import { UsersRepository } from "./users.repository";
import { User } from "./dto/user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<any>;
    addUser(user: User): Promise<any>;
    updateUser(user: UpdateUserDTO): Promise<any>;
    deleteUser(rid: string): Promise<any>;
}
