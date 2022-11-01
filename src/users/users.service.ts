import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseError } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly User: Model<UserDocument>,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      return await new this.User(createUserInput).save();
    } catch (e) {
      console.log(typeof e);

      throw new HttpException(
        { message: 'unable to create new user', reason: e },
        400,
      );
    }
  }

  findOne(email: string) {
    return this.User.findOne({
      email: email,
    }).then((e) => {
      if (!e) {
        throw new HttpException(
          {
            message: 'No user found with email ' + email,
            reason: 'User not registered',
          },
          400,
        );
      }
      return e;
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
