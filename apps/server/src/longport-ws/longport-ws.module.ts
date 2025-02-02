import { Module } from '@nestjs/common';
import { LongportWsService } from './longport-ws.service';
import { LongportWsGateway } from './longport-ws.gateway';

@Module({
  providers: [LongportWsGateway, LongportWsService],
})
export class LongportWsModule {}
