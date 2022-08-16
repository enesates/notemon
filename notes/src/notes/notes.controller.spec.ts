import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
  let notesController: NotesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    notesController = app.get<NotesController>(NotesController);
  });

  describe('root', () => {
    it('should return undefined', () => {
      expect(notesController.getNotes({ folderId: 'TEST' })).toBe(undefined);
    });
  });
});
