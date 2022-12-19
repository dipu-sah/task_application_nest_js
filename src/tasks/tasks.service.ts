import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { TaskDocument, Task } from './entities/Task';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private Task: Model<TaskDocument>) {}
  create(createTaskDto: CreateTaskDto) {
    return new this.Task({ ...createTaskDto }).save();
  }

  findAll(userId: ObjectId) {
    return this.Task.find({ user_id: userId }).populate('userId');
  }

  findOne(id: ObjectId, userId: ObjectId) {
    return this.Task.find({ _id: id, user_id: userId });
  }

  update(id: ObjectId, user_id: ObjectId, updateTaskDto: UpdateTaskDto) {
    return this.Task.findOneAndUpdate({ _id: id, user_id }, updateTaskDto, {
      new: true,
    });
  }

  remove(id: ObjectId, user_id: ObjectId) {
    return this.Task.findOneAndDelete({ _id: id, user_id });
  }
}
