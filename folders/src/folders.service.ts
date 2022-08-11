import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { randomBytes } from 'crypto';
import { FolderDTO, FoldersDTO } from './dto/folders.dto';

const folders: FoldersDTO = {} as FoldersDTO;

@Injectable()
export class FoldersService {
  constructor(private readonly httpService: HttpService) {}

  getFolders(): FoldersDTO {
    return folders;
  }

  async createFolder(folderName: string): Promise<FolderDTO> {
    const id = randomBytes(4).toString('hex');

    folders[id] = {
      id: id,
      folderName: folderName,
    };

    this.emitEvent('FolderCreated', folders[id]);

    return folders[id];
  }

  async updateFolder(id: string, folderName: string): Promise<FolderDTO> {
    folders[id] = {
      id: id,
      folderName: folderName,
    };

    this.emitEvent('FolderUpdated', folders[id]);

    return folders[id];
  }

  async deleteFolder(id: string): Promise<string> {
    delete folders[id];

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
