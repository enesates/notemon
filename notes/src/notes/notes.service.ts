import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { randomBytes } from 'crypto';
import { Model } from 'mongoose';
import { Note, NoteDocument } from '../schemas/notes.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private noteModel: Model<NoteDocument>,
    private readonly httpService: HttpService,
  ) {}

  async getNotes(folderId: string): Promise<Note[]> {
    return await this.noteModel.find({ folderId: folderId });
  }

  async createNote(folderId: string, content: string): Promise<Note> {
    const id = randomBytes(4).toString('hex');

    const note = {
      id: id,
      content: content,
      folderId: folderId,
    };

    const createdNote = new this.noteModel(note);

    this.emitEvent('NoteCreated', note);

    return createdNote.save();
  }

  async updateNote(
    folderId: string,
    id: string,
    content: string,
  ): Promise<Note> {
    const note = {
      id: id,
      content: content,
      folderId: folderId,
    };

    await this.noteModel.findOneAndUpdate(
      { id: folderId },
      {
        $set: { content: note.content },
      },
    );

    this.emitEvent('NoteUpdated', note);

    return note;
  }

  async deleteNote(folderId: string, id: string): Promise<string> {
    await this.noteModel.deleteOne({ id: id });

    this.emitEvent('NoteDeleted', { folderId, id });

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
