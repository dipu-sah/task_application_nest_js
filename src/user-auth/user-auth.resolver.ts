import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { UserAuth } from './entities/user-auth.entity';
import { CreateUserAuthInput } from './dto/create-user-auth.input';
import { UpdateUserAuthInput } from './dto/update-user-auth.input';

@Resolver('Auth')
export class UserAuthResolver {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Query((returns) => String, {
    name: 'login',
  })
  getAuthToken(@Args('loginDetails') createUserAuthInput: CreateUserAuthInput) {
    return this.userAuthService.getUserAuthToken(createUserAuthInput);
  }
}
