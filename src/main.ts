import { NestFactory } from '@nestjs/core';
import { configApp } from './app/app.config';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configApp(app);
  await app.listen(3000);
}

bootstrap();
