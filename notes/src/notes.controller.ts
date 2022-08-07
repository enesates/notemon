import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  CreateNoteDTO,
  UpdateNoteDTO,
  NotesDTO,
  NoteDTO,
} from './dto/notes.dto';

import { NotesService } from './notes.service';

@Controller('folders/:folderId/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getNotes(@Param() params): NotesDTO {
    const folderId = params.folderId;

    return this.notesService.getNotes(folderId);
  }

  @Post()
  createNote(@Param() params, @Body() body: CreateNoteDTO): Promise<NoteDTO> {
    const folderId = params.folderId;
    const note = body.content;

    return this.notesService.createNote(folderId, note);
  }

  @Patch(':id')
  updateNote(@Param() params, @Body() body: UpdateNoteDTO): Promise<NoteDTO> {
    const folderId = params.folderId;
    const id = params.id;
    const note = body.content;

    return this.notesService.updateNote(folderId, id, note);
  }

  @Delete(':id')
  deleteNote(@Param() params): Promise<string> {
    const folderId = params.folderId;
    const id = params.id;

    return this.notesService.deleteNote(folderId, id);
  }
}
