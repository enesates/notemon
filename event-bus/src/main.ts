import { NestFactory } from '@nestjs/core';
import { EventBusModule } from './eventbus.module';

async function bootstrap() {
  const app = await NestFactory.create(EventBusModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
