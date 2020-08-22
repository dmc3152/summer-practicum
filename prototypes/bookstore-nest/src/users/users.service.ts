import { Injectable } from '@nestjs/common';
import { UsersRepository } from "./users.repository";
import { User } from "./dto/user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) { }

    getUsers(): Promise<any> {
        return this.usersRepository.getUsers();
    }

    addUser(user: User): Promise<any> {
        return this.usersRepository.addUser(user.name, user.email, user.password);
    }

    updateUser(user: UpdateUserDTO): Promise<any> {
        return this.usersRepository.updateUser(user.rid, user.name, user.email, user.password);
    }

    deleteUser(rid: string): Promise<any> {
        return this.usersRepository.deleteUser(rid);
    }
}
