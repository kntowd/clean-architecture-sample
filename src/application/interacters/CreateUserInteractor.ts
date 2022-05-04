import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/adopters/dto/users/createUserDto';
import { ICreateUserUseCase } from 'src/application/useCases/ICreateUserUseCase';
import { User } from 'src/domain/model/User';
import { IUserRespoitory } from '../../domain/repository/IUserRepository';

@Injectable()
export class CreateUserInteractor implements ICreateUserUseCase {
  constructor(@Inject('IUserRespoitory') private repository: IUserRespoitory) {}

  public async handle(params: CreateUserDto) {
    const user = new User(null, params.name, params.age);

    if (!user.isAdult) {
      throw new Error('minors cannot be registered');
    }

    const userId = await this.repository.create(params);
    return userId;
  }
}
