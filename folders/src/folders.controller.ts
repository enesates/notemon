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
  CreateFolderDTO,
  UpdateFolderDTO,
  FoldersDTO,
  FolderDTO,
} from './dto/folders.dto';

import { FoldersService } from './folders.service';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get()
  getFolders(): FoldersDTO {
    return this.foldersService.getFolders();
  }

  @Post()
  createFolder(@Body() body: CreateFolderDTO): FolderDTO {
    const folderName = body.name;

    return this.foldersService.createFolder(folderName);
  }

  @Patch(':id')
  updateFolder(@Param() params, @Body() body: UpdateFolderDTO): FolderDTO {
    const id = params.id;
    const folderName = body.name;

    return this.foldersService.updateFolder(id, folderName);
  }

  @Delete(':id')
  deleteFolder(@Param() params): string {
    const id = params.id;

    return this.foldersService.deleteFolder(id);
  }
}
