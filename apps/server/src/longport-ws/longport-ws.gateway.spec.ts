import { Test, TestingModule } from '@nestjs/testing';
import { LongportWsGateway } from './longport-ws.gateway';
import { LongportWsService } from './longport-ws.service';

describe('LongportWsGateway', () => {
  let gateway: LongportWsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongportWsGateway, LongportWsService],
    }).compile();

    gateway = module.get<LongportWsGateway>(LongportWsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
