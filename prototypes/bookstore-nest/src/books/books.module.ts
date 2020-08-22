import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksRepository } from "./books.repository";
import { ClientModule } from 'src/database/client.module';

@Module({
  imports: [ClientModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    BooksRepository
  ]
})
export class BooksModule {}
