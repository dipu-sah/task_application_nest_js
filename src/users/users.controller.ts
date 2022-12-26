import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  create(
    @Body('userDetails')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Post('/test')
  async findAll(@Body('email') email: string) {
    return !!(await this.usersService.findByEmail(email).catch((e) => {
      return false;
    }));
  }
}
