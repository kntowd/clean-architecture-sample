import { CreateUserDto } from 'src/adopters/dto/users/createUserDto';

export interface IUserRespoitory {
  findByUserName();
  save();
  create(params: CreateUserDto): Promise<number>;
}
