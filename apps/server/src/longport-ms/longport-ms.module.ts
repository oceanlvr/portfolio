import { Module } from '@nestjs/common';
import { LongportMsService } from './longport-ms.service';
import { LongportMsController } from './longport-ms.controller';

@Module({
  controllers: [LongportMsController],
  providers: [LongportMsService],
})
export class LongportMsModule {}
