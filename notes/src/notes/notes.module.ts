import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from '../schemas/notes.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
