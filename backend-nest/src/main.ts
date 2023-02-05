import { NestFactory } from '@nestjs/core';
<<<<<<< Updated upstream
import { AppModule } from './app.module';
=======
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

const port = process.env.PORT || 3001

>>>>>>> Stashed changes

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
