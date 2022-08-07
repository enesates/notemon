import { Test, TestingModule } from '@nestjs/testing';
import { EventBusController } from './eventbus.controller';
import { EventBusService } from './eventbus.service';

describe('EventBusController', () => {
  let eventBusController: EventBusController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventBusController],
      providers: [EventBusService],
    }).compile();

    eventBusController = app.get<EventBusController>(EventBusController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventBusController.getHello()).toBe('Hello World!');
    });
  });
});
