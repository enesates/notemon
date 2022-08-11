import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query, QueryDocument } from '../schemas/query.schema';
import { Model } from 'mongoose';

@Injectable()
export class QueryService {
  constructor(
    @InjectModel(Query.name) private queryModel: Model<QueryDocument>,
  ) {}

  async getNotebook(): Promise<Query[]> {
    return await this.queryModel.find();
  }
}
