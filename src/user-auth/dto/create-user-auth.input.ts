import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserAuthInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
