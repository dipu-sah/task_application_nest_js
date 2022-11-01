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
  ValidateBy,
} from 'class-validator';
import { Match } from 'utils/customValidators/Match';
import { iUser } from '../entities/user.entity';

@InputType()
export class CreateUserInput implements iUser {
  @IsDefined()
  @Matches(/[A-Za-z]+/, {
    always: true,
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
  @Match('password')
  public reTypedPassword: string;
}
