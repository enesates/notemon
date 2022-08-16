import { Body, Controller, Post } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  handleEvent(@Body() body) {
    return this.eventsService.handleEvent(body);
  }
}
