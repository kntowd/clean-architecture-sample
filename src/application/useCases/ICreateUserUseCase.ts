import { CreateUserDto } from 'src/adopters/dto/users/createUserDto';

export interface ICreateUserUseCase {
  handle(params: CreateUserDto): Promise<number>;
}
