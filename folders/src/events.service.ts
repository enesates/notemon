import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  handleEvent(event) {
    console.log(event);
  }
}
