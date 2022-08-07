import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventBusService {
  constructor(private readonly httpService: HttpService) {}

  async emitEvents(event: object) {
    await this.httpService.axiosRef
      .post(process.env.FOLDERS_SERVICE_API_URL + '/events', event)
      .catch((error) => {
        console.log(error);
      });

    await this.httpService.axiosRef
      .post(process.env.NOTES_SERVICE_API_URL + '/events', event)
      .catch((error) => {
        console.log(error);
      });
  }
}
