import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [FoldersController, EventsController],
  providers: [FoldersService, EventsService],
})
export class AppModule {}
