import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from "./users.repository";
import { ClientModule } from "src/database/client.module";

@Module({
  imports: [ClientModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository
  ]
})
export class UsersModule {}
