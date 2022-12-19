import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { GraphQLJSONObject } from 'graphql-type-json';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => GraphQLJSONObject, {
    name: 'new',
    nullable: false,
    description: 'This is to cereate a new user',
  })
  create(
    @Args('userDetails')
    createUserInput: CreateUserInput,
  ) {
    console.log(createUserInput);

    return this.usersService.create(createUserInput);
  }

  @Query((returns) => Boolean, {
    name: 'userExists',
  })
  async findAll(@Args('email') email: string) {
    return !!(await this.usersService.findByEmail(email).catch((e) => {
      return false;
    }));
  }
}
