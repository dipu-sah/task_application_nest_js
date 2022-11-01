import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserAuth {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
