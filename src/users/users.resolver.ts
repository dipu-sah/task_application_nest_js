import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { GraphQLJSONObject } from 'graphql-type-json';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => GraphQLJSONObject, {
    name: 'createUser',
    nullable: false,
    description: 'This is to cereate a new user',
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
    return 'OK';
  }
}
