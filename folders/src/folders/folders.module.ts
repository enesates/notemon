import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Folder, FolderSchema } from '../schemas/folders.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Folder.name, schema: FolderSchema }]),
  ],
  controllers: [FoldersController],
  providers: [FoldersService],
})
export class FoldersModule {}
