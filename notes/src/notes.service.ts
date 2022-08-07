import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { randomBytes } from 'crypto';
import { NotesByFolderDTO, NotesDTO, NoteDTO } from './dto/notes.dto';

const notes: NotesByFolderDTO = {} as NotesByFolderDTO;

@Injectable()
export class NotesService {
  constructor(private readonly httpService: HttpService) {}

  getNotes(folderId: string): NotesDTO {
    return notes[folderId];
  }

  async createNote(folderId: string, content: string): Promise<NoteDTO> {
    const id = randomBytes(4).toString('hex');

    const notesByFolder = notes[folderId] || {};

    notesByFolder[id] = {
      id: id,
      content: content,
    };

    notes[folderId] = notesByFolder;

    this.emitEvent('NoteCreated', notes[folderId][id]);

    return notes[folderId][id];
  }

  async updateNote(
    folderId: string,
    id: string,
    content: string,
  ): Promise<NoteDTO> {
    if (!notes[folderId] || !notes[folderId][id]) {
      return null;
    }
    notes[folderId][id].content = content;

    this.emitEvent('NoteUpdated', notes[folderId][id]);

    return notes[folderId][id];
  }

  async deleteNote(folderId: string, id: string): Promise<string> {
    if (notes[folderId]) {
      delete notes[folderId][id];
    }

    this.emitEvent('NoteDeleted', id);

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
