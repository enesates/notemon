import { NestFactory } from '@nestjs/core';
import { FoldersModule } from './folders.module';

async function bootstrap() {
  const app = await NestFactory.create(FoldersModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
