import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger = new Logger('Main') 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const runTimePort : number = 1200;
  app.enableCors({
    // origin: ['http://localhost:3000'],
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  const config = new DocumentBuilder()
  .setTitle('api example')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('example')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(runTimePort);
  logger.log('░░░░░░░░░░░░░░░░░░░░ Welcome, API Tutorial Project.');
  logger.log('░░░░░░░░░░░░░░░░░░░░ Project Started! PORT: ' + runTimePort);
}
bootstrap();
