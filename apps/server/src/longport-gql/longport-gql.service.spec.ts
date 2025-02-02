import { Test, TestingModule } from '@nestjs/testing';
import { LongportGqlService } from './longport-gql.service';

describe('LongportGqlService', () => {
  let service: LongportGqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportGqlService],
    }).compile();

    service = module.get<LongportGqlService>(LongportGqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
