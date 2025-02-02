import { Test, TestingModule } from '@nestjs/testing';
import { LongportWsService } from './longport-ws.service';

describe('LongportWsService', () => {
  let service: LongportWsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportWsService],
    }).compile();

    service = module.get<LongportWsService>(LongportWsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
