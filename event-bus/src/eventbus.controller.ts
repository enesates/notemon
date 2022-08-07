import { Body, Controller, Post } from '@nestjs/common';
import { EventBusService } from './eventbus.service';

@Controller('/events')
export class EventBusController {
  constructor(private readonly eventBusService: EventBusService) {}

  @Post()
  emitEvents(@Body() body: object) {
    this.eventBusService.emitEvents(body);
  }
}
