import { Test, TestingModule } from '@nestjs/testing';
import { LongportMsService } from './longport-ms.service';

describe('LongportMsService', () => {
  let service: LongportMsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportMsService],
    }).compile();

    service = module.get<LongportMsService>(LongportMsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
