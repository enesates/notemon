import { NestFactory } from '@nestjs/core';
import { FoldersModule } from './folders.module';

async function bootstrap() {
  const app = await NestFactory.create(FoldersModule);
  await app.listen(3001);
}
bootstrap();
