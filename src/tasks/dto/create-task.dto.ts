import { ApiHeader, ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, IsMongoId, IsJWT } from 'class-validator';
import { ObjectId, Schema } from 'mongoose';
import { iTask } from '../entities/Task';

export class CreateTaskDto implements iTask {
  userId: Schema.Types.ObjectId;

  @ApiProperty({
    required: true,
    example: 'This is Title of the task',
  })
  @IsDefined({
    message: 'Title is required field',
  })
  @IsString({ message: 'Title should be string' })
  public title: string;

  @ApiProperty({
    required: false,
    example: 'This is Title of the task',
  })
  @IsString()
  public description?: string;
}

export class ParmasValidator {
  @ApiProperty({
    description: 'Id',
    required: true,
    type: String,
    default: '61d9cfbf17ed7311c4b3e485',
  })
  @IsDefined()
  @IsMongoId({
    message: 'Invalid id provided',
  })
  id: ObjectId;
}
