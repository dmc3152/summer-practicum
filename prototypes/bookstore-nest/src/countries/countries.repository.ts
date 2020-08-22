import { Injectable, Inject, HttpException, HttpStatus, BadRequestException, ServiceUnavailableException } from '@nestjs/common';
import { constants } from "../constants";

@Injectable()
export class CountriesRepository {

  constructor(@Inject(constants.DATABASE_CLIENT) private pool: any) { }

  async getCountries(): Promise<any> {
    if (!this.pool)
      throw new ServiceUnavailableException();

    const session = await this.pool.acquire();

    let result;

    try {
      result = await session.query('select Id, Code, Name from countries').all();
      await session.close();
    } catch (error) {
      await session.close();

      if (error.code === 10)
        throw new ServiceUnavailableException();
      else
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result;
  }

  async addCountry(name, code, id): Promise<any> {
    if (!this.pool)
      throw new ServiceUnavailableException();

    const session = await this.pool.acquire();

    let result;

    const params = {
      name: name,
      code: code,
      id: id
    };

    try {
      result = await session.command("INSERT INTO Countries SET Name = :name, Code = :code, Id = :id", { params: params }).all();
      await session.close();
    } catch (error) {
      await session.close();
      
      if (error.code === 10)
        throw new ServiceUnavailableException();
      else
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result;
  }

  async updateCountry(rid, name, code, id): Promise<any> {
    if (!this.pool)
      throw new ServiceUnavailableException();

    if (!rid)
      throw new BadRequestException();

    const session = await this.pool.acquire();

    let result;

    const params = {
      Name: name,
      Code: code,
      Id: id
    };

    try {
      result = await session.update(rid)
        .set(params)
        .one();
      await session.close();
    } catch (error) {
      await session.close();
      
      if (error.code === 10)
        throw new ServiceUnavailableException();
      else
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result;
  }

  async deleteCountry(rid): Promise<any> {
    if (!this.pool)
      throw new ServiceUnavailableException();

    if (!rid)
      throw new BadRequestException();

    const session = await this.pool.acquire();

    let result;

    try {
      result = session.delete("VERTEX", 'Countries')
        .where('@rid = ' + rid)
        .one();
      await session.close();
    } catch (error) {
      await session.close();
      
      if (error.code === 10)
        throw new ServiceUnavailableException();
      else
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result;
  }
}
