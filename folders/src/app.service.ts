import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

const folders = {};

@Injectable()
export class AppService {
  getFolders(): object {
    return folders;
  }

  createFolder(folderName: string): object {
    const id = randomBytes(4).toString('hex');

    folders[id] = {
      id: id,
      name: folderName + '_' + id,
    };

    return folders[id];
  }

  updateFolder(id: string, folderName: string): object {
    if (!folders[id]) {
      return null;
    }
    folders[id].name = folderName + '_' + id;

    return folders[id];
  }

  deleteFolder(id: string): string {
    delete folders[id];

    return id;
  }
}
