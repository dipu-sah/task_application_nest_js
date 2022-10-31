import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsDefined()
  @Matches(/[A-Za-z]+/, {
    message: 'please provide characters only in first name',
  })
  @Field((type) => String)
  public firstName: string;

  @IsOptional()
  @IsString()
  @Field((type) => String, { nullable: true })
  public middleName: string;

  @IsOptional()
  @IsString()
  @Field((type) => String, { nullable: true })
  public lastName: string;

  @IsEmail()
  @IsDefined()
  @Field((type) => String)
  public email: string;

  @IsAlphanumeric()
  @IsDefined()
  @MinLength(8)
  @Field((type) => String)
  public password: string;

  @IsAlphanumeric()
  @IsDefined()
  @Field((type) => String)
  public reTypedPassword: string;
}
