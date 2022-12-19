import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  Request,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, ParmasValidator } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'utils/Guards/JwtGuard';
import { UserDocument } from 'src/users/entities/user.entity';

type JwtDecodedData = {
  [key: string]: [value: string];
} & {
  user: UserDocument;
};

@Controller('tasks')
@UseGuards(JwtAuthGuard)
@ApiTags('Taks')
@ApiBearerAuth('userToken')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({
    description: 'This is the api endpoint to create a new task',
  })
  create(
    @Body() createTaskDto: CreateTaskDto,
    @Request()
    { user }: JwtDecodedData,
  ) {
    createTaskDto.userId = user._id;

    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(
    @Request()
    { user }: JwtDecodedData,
  ) {
    return this.tasksService.findAll(user._id);
  }

  @Get(':id')
  findOne(
    @Param() allParams: ParmasValidator,
    @Request()
    { user }: JwtDecodedData,
  ) {
    return this.tasksService.findOne(allParams.id, user._id);
  }

  @Patch(':id')
  update(
    @Param() allParams: ParmasValidator,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request()
    { user }: JwtDecodedData,
  ) {
    return this.tasksService.update(allParams.id, user._id, updateTaskDto);
  }

  @Delete(':id')
  remove(
    @Param() allParams: ParmasValidator,
    @Request()
    { user }: JwtDecodedData,
  ) {
    return this.tasksService.remove(allParams.id, user._id);
  }
}
