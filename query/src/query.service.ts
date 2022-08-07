import { Injectable } from '@nestjs/common';
import { NotebookDTO } from './dto/query.dto';
import { notebook } from './db.mock';

@Injectable()
export class QueryService {
  getNotebook(): NotebookDTO {
    return notebook;
  }
}
