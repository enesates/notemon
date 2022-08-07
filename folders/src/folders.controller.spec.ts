import { Test, TestingModule } from '@nestjs/testing';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';

describe('FolderController', () => {
  let foldersController: FoldersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FoldersController],
      providers: [FoldersService],
    }).compile();

    foldersController = app.get<FoldersController>(FoldersController);
  });

  describe('root', () => {
    it('should return given folder name', () => {
      const folderName = 'TEST_FOLDER_NAME';

      expect(
        foldersController.createFolder({ folderName: folderName }),
      ).toMatchObject({ name: folderName });
    });
  });
});
