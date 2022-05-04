import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/adopters/dto/users/createUserDto';
import { ICreateUserUseCase } from 'src/application/useCases/ICreateUserUseCase';
import { IUserRespoitory } from '../../domain/repository/IUserRepository';

@Injectable()
export class CreateUserInteractor implements ICreateUserUseCase {
  constructor(@Inject('IUserRespoitory') private repository: IUserRespoitory) {}

  public async handle(params: CreateUserDto) {
    const userId = await this.repository.create(params);
    return userId;
  }
}
