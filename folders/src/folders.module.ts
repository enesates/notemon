import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [FoldersController],
  providers: [FoldersService],
})
export class FoldersModule {}
