import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { FoldersService } from './folders.service';
import { CreateFolderDTO, UpdateFolderDTO, FolderDTO } from './dto/folders.dto';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get()
  getFolders(): [FolderDTO] {
    return this.foldersService.getFolders();
  }

  @Post()
  createFolder(@Body() body: CreateFolderDTO): FolderDTO {
    const folderName = body.name;

    return this.foldersService.createFolder(folderName);
  }

  @Put(':id')
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
