import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { UserAuth } from './entities/user-auth.entity';
import { CreateUserAuthInput } from './dto/create-user-auth.input';
import { UpdateUserAuthInput } from './dto/update-user-auth.input';

@Resolver(() => UserAuth)
export class UserAuthResolver {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Mutation(() => UserAuth)
  createUserAuth(@Args('createUserAuthInput') createUserAuthInput: CreateUserAuthInput) {
    return this.userAuthService.create(createUserAuthInput);
  }

  @Query(() => [UserAuth], { name: 'userAuth' })
  findAll() {
    return this.userAuthService.findAll();
  }

  @Query(() => UserAuth, { name: 'userAuth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userAuthService.findOne(id);
  }

  @Mutation(() => UserAuth)
  updateUserAuth(@Args('updateUserAuthInput') updateUserAuthInput: UpdateUserAuthInput) {
    return this.userAuthService.update(updateUserAuthInput.id, updateUserAuthInput);
  }

  @Mutation(() => UserAuth)
  removeUserAuth(@Args('id', { type: () => Int }) id: number) {
    return this.userAuthService.remove(id);
  }
}
