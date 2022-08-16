import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { FoldersModule } from './folders/folders.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    FoldersModule,
    EventsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/foldersdb'),
  ],
})
export class AppModule {}
