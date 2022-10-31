import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { GraphQLJSONObject } from 'graphql-type-json';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => String, {
    name: 'createUser',
  })
  create(
    @Args('userDetails')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query((returns) => String, {
    name: 'users',
  })
  findAll() {
    return this.usersService.findAll();
  }
}
