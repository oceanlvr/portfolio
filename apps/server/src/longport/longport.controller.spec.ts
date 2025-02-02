import { Test, TestingModule } from '@nestjs/testing';
import { LongportController } from './longport.controller';
import { LongportService } from './longport.service';

describe('LongportController', () => {
  let controller: LongportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LongportController],
      providers: [LongportService],
    }).compile();

    controller = module.get<LongportController>(LongportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
