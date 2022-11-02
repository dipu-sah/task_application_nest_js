import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDefined, IsString } from 'class-validator';

@InputType()
export class CreateUserAuthInput {
  @IsDefined()
  @IsString()
  @Field((of) => String)
  username: string;

  @IsDefined()
  @IsString()
  @Field((of) => String)
  password: string;
}
