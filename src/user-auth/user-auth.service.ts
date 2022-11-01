import { Injectable } from '@nestjs/common';
import { CreateUserAuthInput } from './dto/create-user-auth.input';
import { UpdateUserAuthInput } from './dto/update-user-auth.input';

@Injectable()
export class UserAuthService {
  create(createUserAuthInput: CreateUserAuthInput) {
    return 'This action adds a new userAuth';
  }

  findAll() {
    return `This action returns all userAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAuth`;
  }

  update(id: number, updateUserAuthInput: UpdateUserAuthInput) {
    return `This action updates a #${id} userAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAuth`;
  }
}
