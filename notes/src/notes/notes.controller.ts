import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateNoteDTO, UpdateNoteDTO } from './dto/notes.dto';

import { NotesService } from './notes.service';
import { Note } from '../schemas/notes.schema';

@Controller('folders/:folderId/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getNotes(@Param() params): Promise<Note[]> {
    const folderId = params.folderId;

    return await this.notesService.getNotes(folderId);
  }

  @Post()
  async createNote(
    @Param() params,
    @Body() body: CreateNoteDTO,
  ): Promise<Note> {
    const folderId = params.folderId;
    const note = body.content;

    return await this.notesService.createNote(folderId, note);
  }

  @Patch(':id')
  async updateNote(
    @Param() params,
    @Body() body: UpdateNoteDTO,
  ): Promise<Note> {
    const folderId = params.folderId;
    const id = params.id;
    const note = body.content;

    return await this.notesService.updateNote(folderId, id, note);
  }

  @Delete(':id')
  async deleteNote(@Param() params): Promise<string> {
    const folderId = params.folderId;
    const id = params.id;

    return await this.notesService.deleteNote(folderId, id);
  }
}
