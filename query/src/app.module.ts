import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { QueryModule } from './query/query.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    QueryModule,
    EventsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
})
export class AppModule {}
