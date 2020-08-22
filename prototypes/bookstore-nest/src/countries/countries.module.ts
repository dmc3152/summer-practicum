import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CountriesRepository } from "./countries.repository";
import { ClientModule } from 'src/database/client.module';

@Module({
  imports: [ClientModule],
  controllers: [CountriesController],
  providers: [
    CountriesService,
    CountriesRepository
  ]
})
export class CountriesModule {}
