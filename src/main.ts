import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      always: true,
      skipUndefinedProperties: true,
      skipMissingProperties: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Available Tasks Api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: 'Please add a bearer token',
        name: 'Authorization',
        in: 'Header',
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'Bearer',
      },
      'userToken',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(8000);
}
bootstrap();
