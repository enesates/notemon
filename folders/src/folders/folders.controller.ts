import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFolderDTO, UpdateFolderDTO } from './dto/folders.dto';
import { FoldersService } from './folders.service';
import { Folder } from '../schemas/folders.schema';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get()
  async getFolders(): Promise<Folder[]> {
    return await this.foldersService.getFolders();
  }

  @Post()
  async createFolder(@Body() body: CreateFolderDTO): Promise<Folder> {
    const folderName = body.folderName;

    return await this.foldersService.createFolder(folderName);
  }

  @Patch(':id')
  async updateFolder(
    @Param() params,
    @Body() body: UpdateFolderDTO,
  ): Promise<Folder> {
    const id = params.id;
    const folderName = body.folderName;

    return await this.foldersService.updateFolder(id, folderName);
  }

  @Delete(':id')
  async deleteFolder(@Param() params): Promise<string> {
    const id = params.id;

    return await this.foldersService.deleteFolder(id);
  }
}
