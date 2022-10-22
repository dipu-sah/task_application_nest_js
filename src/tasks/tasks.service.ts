import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { TaskDocument, Task } from '../DB/MongoDb/schemas/Task';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private Task: Model<TaskDocument>) {}
  create(createTaskDto: CreateTaskDto) {
    return new this.Task({ ...createTaskDto }).save();
  }

  findAll() {
    return this.Task.find();
  }

  findOne(id: ObjectId) {
    return this.Task.findById(id);
  }

  update(id: ObjectId, updateTaskDto: UpdateTaskDto) {
    return this.Task.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  remove(id: ObjectId) {
    return this.Task.findByIdAndDelete(id);
  }
}
