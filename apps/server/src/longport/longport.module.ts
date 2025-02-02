import { Module } from '@nestjs/common';
import { LongportService } from './longport.service';
import { LongportController } from './longport.controller';

@Module({
  controllers: [LongportController],
  providers: [LongportService],
})
export class LongportModule {}
