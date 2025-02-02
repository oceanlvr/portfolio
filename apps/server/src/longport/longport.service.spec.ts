import { Test, TestingModule } from '@nestjs/testing';
import { LongportService } from './longport.service';

describe('LongportService', () => {
  let service: LongportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportService],
    }).compile();

    service = module.get<LongportService>(LongportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
