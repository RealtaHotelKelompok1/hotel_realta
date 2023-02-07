import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
const port = process.env.PORT || 3003

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors()
  await app.listen(process.env.PORT, () => {
    console.log("Listen on port " + port)
  });
}
bootstrap();
