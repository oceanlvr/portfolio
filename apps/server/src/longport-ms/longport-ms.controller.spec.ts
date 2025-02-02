import { Test, TestingModule } from '@nestjs/testing';
import { LongportMsController } from './longport-ms.controller';
import { LongportMsService } from './longport-ms.service';

describe('LongportMsController', () => {
  let controller: LongportMsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LongportMsController],
      providers: [LongportMsService],
    }).compile();

    controller = module.get<LongportMsController>(LongportMsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
