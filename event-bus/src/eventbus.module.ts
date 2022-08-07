import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { EventBusController } from './eventbus.controller';
import { EventBusService } from './eventbus.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [EventBusController],
  providers: [EventBusService],
})
export class EventBusModule {}
