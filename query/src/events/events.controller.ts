import { Body, Controller, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { Query } from '../schemas/query.schema';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async handleEvent(@Body() body): Promise<Query> {
    return await this.eventsService.handleEvent(body);
  }
}
