import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { NotesByFolderDTO, NotesDTO, NoteDTO } from './dto/notes.dto';

const notes: NotesByFolderDTO = {} as NotesByFolderDTO;

@Injectable()
export class NotesService {
  getNotes(folderId: string): NotesDTO {
    return notes[folderId];
  }

  createNote(folderId: string, content: string): NoteDTO {
    const id = randomBytes(4).toString('hex');

    const notesByFolder = notes[folderId] || {};

    notesByFolder[id] = {
      id: id,
      content: content,
    };

    notes[folderId] = notesByFolder;

    return notes[folderId][id];
  }

  updateNote(folderId: string, id: string, content: string): NoteDTO {
    if (!notes[folderId] || !notes[folderId][id]) {
      return null;
    }
    notes[folderId][id].content = content;

    return notes[folderId][id];
  }

  deleteNote(folderId: string, id: string): string {
    if (notes[folderId]) {
      delete notes[folderId][id];
    }

    return id;
  }
}
