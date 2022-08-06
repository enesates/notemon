import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { FolderDTO, FoldersDTO } from './dto/folders.dto';

const folders: FoldersDTO = {} as FoldersDTO;

@Injectable()
export class FoldersService {
  getFolders(): FoldersDTO {
    return folders;
  }

  createFolder(folderName: string): FolderDTO {
    const id = randomBytes(4).toString('hex');

    folders[id] = {
      id: id,
      folderName: folderName,
    };

    return folders[id];
  }

  updateFolder(id: string, folderName: string): FolderDTO {
    if (!folders[id]) {
      return null;
    }
    folders[id].folderName = folderName;

    return folders[id];
  }

  deleteFolder(id: string): string {
    delete folders[id];

    return id;
  }
}
