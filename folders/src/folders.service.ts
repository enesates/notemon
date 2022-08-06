import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { FolderDTO } from './dto/folders.dto';

const folders: [FolderDTO] = {} as [FolderDTO];

@Injectable()
export class FoldersService {
  getFolders(): [FolderDTO] {
    return folders;
  }

  createFolder(folderName: string): FolderDTO {
    const id = randomBytes(4).toString('hex');

    folders[id] = {
      id: id,
      name: folderName + '_' + id,
    };

    return folders[id];
  }

  updateFolder(id: string, folderName: string): FolderDTO {
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
