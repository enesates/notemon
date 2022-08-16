import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { randomBytes } from 'crypto';
import { Model } from 'mongoose';
import { Folder, FolderDocument } from '../schemas/folders.schema';

@Injectable()
export class FoldersService {
  constructor(
    @InjectModel(Folder.name) private folderModel: Model<FolderDocument>,
    private readonly httpService: HttpService,
  ) {}

  async getFolders(): Promise<Folder[]> {
    return await this.folderModel.find();
  }

  async createFolder(folderName: string): Promise<Folder> {
    const id = randomBytes(4).toString('hex');

    const folder = {
      id: id,
      folderName: folderName,
    };

    const createdFolder = new this.folderModel(folder);

    this.emitEvent('FolderCreated', folder);

    return createdFolder.save();
  }

  async updateFolder(id: string, folderName: string): Promise<Folder> {
    const folder = {
      id: id,
      folderName: folderName,
    };

    await this.folderModel.findOneAndUpdate(
      { id: folder.id },
      {
        $set: { folderName: folder.folderName },
      },
    );

    this.emitEvent('FolderUpdated', folder);

    return folder;
  }

  async deleteFolder(id: string): Promise<string> {
    await this.folderModel.deleteOne({ id: id });

    this.emitEvent('FolderDeleted', { id });

    return id;
  }

  async emitEvent(type, data) {
    await this.httpService.axiosRef
      .post(process.env.EVENTBUS_SERVICE_API_URL + '/events', {
        type: type,
        data: data,
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
