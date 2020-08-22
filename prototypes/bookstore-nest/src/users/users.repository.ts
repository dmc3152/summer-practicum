import { Injectable, Inject, HttpException, HttpStatus, BadRequestException, ServiceUnavailableException } from '@nestjs/common';
import { constants } from "../constants";

@Injectable()
export class UsersRepository {

  constructor(@Inject(constants.DATABASE_CLIENT) private pool: any) { }

  async getUsers(): Promise<any> {
    let session, result, exception: HttpException;

    // get session
    try {
      session = await this.pool.acquire();
    } catch(error) {
      throw new ServiceUnavailableException();
    }

    // make request
    try {
      result = await session.query('SELECT name, email, password FROM User').all();
    } catch (error) {
      exception = error.code === 10 ? new ServiceUnavailableException() : new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await session.close();

    if (exception)
      throw exception;

    return result;
  }

  async addUser(name, email, password): Promise<any> {
    let session, result, exception: HttpException;

    // get session
    try {
      session = await this.pool.acquire();
    } catch(error) {
      throw new ServiceUnavailableException();
    }

    const params = {
      name: name,
      email: email,
      password: password
    };

    try {
      result = await session.command("INSERT INTO User SET name = :name, email = :email, password = :password", { params: params }).all();
    } catch (error) {
      exception = error.code === 10 ? new ServiceUnavailableException() : new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await session.close();

    if (exception)
      throw exception;

    return result;
  }

  async updateUser(rid, name, email, password): Promise<any> {
    let session, result, exception: HttpException;

    // get session
    try {
      session = await this.pool.acquire();
    } catch(error) {
      throw new ServiceUnavailableException();
    }

    if (!rid)
      throw new BadRequestException();

    const params = {
      name: name,
      email: email,
      password: password
    };

    try {
      result = await session.update(rid)
        .set(params)
        .one();
      await session.close();
    } catch (error) {
      exception = error.code === 10 ? new ServiceUnavailableException() : new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await session.close();

    if (exception)
      throw exception;

    return result;
  }

  async deleteUser(rid): Promise<any> {
    let session, result, exception: HttpException;

    // get session
    try {
      session = await this.pool.acquire();
    } catch(error) {
      throw new ServiceUnavailableException();
    }

    if (!rid)
      throw new BadRequestException();

    try {
      result = session.delete("VERTEX", 'User')
        .where('@rid = ' + rid)
        .one();
      await session.close();
    } catch (error) {
      exception = error.code === 10 ? new ServiceUnavailableException() : new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await session.close();

    if (exception)
      throw exception;

    return result;
  }
}
