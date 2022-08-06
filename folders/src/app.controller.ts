import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service';
import { CreateFolderDTO } from './dto/app.dto';

@Controller('folders')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFolders(): object {
    return this.appService.getFolders();
  }

  @Post()
  createFolder(@Body() body: CreateFolderDTO): object {
    const folderName = body.name;

    return this.appService.createFolder(folderName);
  }

  @Put(':id')
  updateFolder(@Param() params, @Body() body: CreateFolderDTO): object {
    const id = params.id;
    const folderName = body.name;

    return this.appService.updateFolder(id, folderName);
  }

  @Delete(':id')
  deleteFolder(@Param() params): string {
    const id = params.id;

    return this.appService.deleteFolder(id);
  }
}
