import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, ParmasValidator } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

@Controller('tasks')
@ApiTags('Taks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({
    description: 'This is the api endpoint to create a new task',
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param() allParams: ParmasValidator) {
    return this.tasksService.findOne(allParams.id);
  }

  @Patch(':id')
  update(
    @Param() allParams: ParmasValidator,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(allParams.id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param() allParams: ParmasValidator) {
    return this.tasksService.remove(allParams.id);
  }
}
