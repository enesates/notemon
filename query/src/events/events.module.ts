import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Query, QuerySchema } from '../schemas/query.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Query.name, schema: QuerySchema }]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
