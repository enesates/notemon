import { NestFactory } from '@nestjs/core';
import { NotesModule } from './notes.module';

async function bootstrap() {
  const app = await NestFactory.create(NotesModule);
  app.enableCors();
  await app.listen(3002);
}
bootstrap();
