import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Body,
    Delete,
} from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./dto/user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Post()
  async addUser(@Body() user: User) {
    return await this.usersService.addUser(user);
  }

  @Put()
  async updateUser(@Body() user: UpdateUserDTO) {
    return await this.usersService.updateUser(user);
  }

  @Delete(':rid')
  async deleteUser(@Param('rid') rid) {
    return await this.usersService.deleteUser(rid);
  }
}
