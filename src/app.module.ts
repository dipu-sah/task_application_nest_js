import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

const URI =
  'mongodb+srv://dipu-kr-sah:CjStrCoV1ploZsQQ@taskmanager.eqdq9.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [TasksModule, MongooseModule.forRoot(URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
