import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [NotesController, EventsController],
  providers: [NotesService, EventsService],
})
export class AppModule {}
