import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateUserUseCase } from 'src/application/useCases/ICreateUserUseCase';
import { CustomValidationPipe } from 'src/common/pipes/validation.pipe';
import { CreateUserDto } from '../dto/users/createUserDto';
import { CoreApiResponse } from '../presenters/CoreApiResponse';

@Controller()
export class UsersController {
  constructor(
    @Inject('ICreateUserUseCase') private readonly useCase: ICreateUserUseCase,
  ) {}

  @Post()
  async createUser(
    @Body(new CustomValidationPipe()) createUserDto: CreateUserDto,
  ) {
    const userId = await this.useCase.handle(createUserDto);
    return CoreApiResponse.success({ id: userId });
  }
}
