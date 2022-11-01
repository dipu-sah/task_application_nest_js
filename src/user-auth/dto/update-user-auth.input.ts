import { CreateUserAuthInput } from './create-user-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserAuthInput extends PartialType(CreateUserAuthInput) {
  @Field(() => Int)
  id: number;
}
