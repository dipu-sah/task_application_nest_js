import { InputType, Int, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

@InputType()
export class CreateUserAuthInput {
  @IsDefined()
  @IsString()
  @Field((of) => String)
  @ApiProperty({
    required: true,
    description: 'Username to login',
  })
  username: string;

  @IsDefined()
  @IsString()
  @Field((of) => String)
  @ApiProperty({
    required: true,
    description: 'Password for the username',
  })
  password: string;
}
