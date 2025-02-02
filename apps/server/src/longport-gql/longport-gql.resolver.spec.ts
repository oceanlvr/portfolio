import { Test, TestingModule } from '@nestjs/testing';
import { LongportGqlResolver } from './longport-gql.resolver';
import { LongportGqlService } from './longport-gql.service';

describe('LongportGqlResolver', () => {
  let resolver: LongportGqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportGqlResolver, LongportGqlService],
    }).compile();

    resolver = module.get<LongportGqlResolver>(LongportGqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
