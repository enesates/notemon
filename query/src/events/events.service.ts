import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Query, QueryDocument } from '../schemas/query.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Query.name) private queryModel: Model<QueryDocument>,
  ) {}

  async handleEvent(event): Promise<Query> {
    const { type, data } = event;
    let folder = {};

    switch (type) {
      case 'FolderCreated':
        folder = {
          id: data.id,
          folderName: data.folderName,
          notes: [],
        };

        const createdFolder = new this.queryModel(folder);

        return createdFolder.save();
      case 'FolderUpdated':
        await this.queryModel.findOneAndUpdate(
          { id: data.id },
          {
            $set: { folderName: data.folderName },
          },
        );

        break;
      case 'FolderDeleted':
        await this.queryModel.deleteOne({ id: data.id });

        break;
      case 'NoteCreated':
        await this.queryModel.findOneAndUpdate(
          { id: data.folderId },
          {
            $push: {
              notes: {
                id: data.id,
                content: data.content,
              },
            },
          },
        );

        break;
      case 'NoteUpdated':
        await this.queryModel.findOneAndUpdate(
          { id: data.folderId, notes: { $elemMatch: { id: data.id } } },
          {
            $set: { 'notes.$.content': data.content },
          },
        );

        break;
      case 'NoteDeleted':
        await this.queryModel.findOneAndUpdate(
          { id: data.folderId },
          {
            $pull: { notes: { id: data.id } },
          },
        );

        break;
    }
  }
}
