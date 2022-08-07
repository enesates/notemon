import { Injectable } from '@nestjs/common';
import { notebook } from './db.mock';

@Injectable()
export class EventsService {
  handleEvent(event) {
    const { type, data } = event;

    switch (type) {
      case 'FolderCreated':
        notebook[data.id] = {
          id: data.id,
          folderName: data.folderName,
          notes: {},
        };

        break;
      case 'FolderUpdated':
        if (notebook[data.id]) {
          notebook[data.id].folderName = data.folderName;
        }

        break;
      case 'FolderDeleted':
        delete notebook[data.id];

        break;
      case 'NoteCreated':
        if (notebook[data.folderId]) {
          notebook[data.folderId].notes[data.id] = {
            id: data.id,
            content: data.content,
          };
        }

        break;
      case 'NoteUpdated':
        if (notebook[data.folderId] && notebook[data.folderId].notes[data.id]) {
          notebook[data.folderId].notes[data.id].content = data.content;
        }

        break;
      case 'NoteDeleted':
        if (notebook[data.folderId]) {
          delete notebook[data.folderId].notes[data.id];
        }

        break;
    }

    console.log('Notebook', notebook);
  }
}
