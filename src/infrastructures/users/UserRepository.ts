import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/adopters/dto/users/createUserDto';
import { IUserRespoitory } from 'src/domain/repository/IUserRepository';

@Injectable()
export class UserRespository implements IUserRespoitory {
  public findByUserName() {
    // ユーザをDBから取得する
  }

  public save() {
    // ユーザを取得する
  }

  public async create(params: CreateUserDto): Promise<number> {
    // ユーザを作成する
    console.log(params);
    return 1;
  }
}
