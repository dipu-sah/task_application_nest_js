import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import path, { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { JwtRegister } from 'utils/JWT';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';
import { existsSync, mkdirSync, openSync, writeFile, writeFileSync } from 'fs';
const URI =
  'mongodb+srv://dipu-kr-sah:CjStrCoV1ploZsQQ@taskmanager.eqdq9.mongodb.net/?retryWrites=true&w=majority';

function getLoggerFileLocation(logFolderLocation = './logs') {
  const path = `${logFolderLocation}/${new Date().getFullYear()}/${new Date().getMonth()}`;
  const FileName = `/${new Date().getDate()}.log`;
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }

  return path + FileName;
}
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TasksModule,
    MongooseModule.forRoot(URI),
    UsersModule,
    AuthModule,
    UserAuthModule,
    JwtRegister,
    LoggerModule.forRoot({
      pinoHttp: {
        stream: pino.destination({
          sync: true,
          dest: getLoggerFileLocation(),
        }),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
