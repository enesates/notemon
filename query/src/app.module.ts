import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { QueryController } from './query.controller';
import { QueryService } from './query.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [QueryController, EventsController],
  providers: [QueryService, EventsService],
})
export class AppModule {}
