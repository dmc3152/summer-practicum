import { UsersService } from "./users.service";
import { User } from "./dto/user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<any>;
    addUser(user: User): Promise<any>;
    updateUser(user: UpdateUserDTO): Promise<any>;
    deleteUser(rid: any): Promise<any>;
}
