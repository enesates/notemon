import { Controller, Get } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('notebook')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Get()
  async getNotebook() {
    return await this.queryService.getNotebook();
  }
}
