import { Module } from '@nestjs/common';
import { CreateUserInteractor } from './application/interacters/CreateUserInteractor';
import { UserRespository } from './infrastructures/users/UserRepository';
import { UsersController } from './adopters/controllers/UsersControllers';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    { provide: 'ICreateUserUseCase', useClass: CreateUserInteractor },
    { provide: 'IUserRespoitory', useClass: UserRespository },
  ],
})
export class AppModule {}
