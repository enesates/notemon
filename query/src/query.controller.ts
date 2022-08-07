import { Controller, Get } from '@nestjs/common';
import { QueryService } from './query.service';
import { NotebookDTO } from './dto/query.dto';

@Controller('notebook')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Get()
  getNotebook(): NotebookDTO {
    return this.queryService.getNotebook();
  }
}
