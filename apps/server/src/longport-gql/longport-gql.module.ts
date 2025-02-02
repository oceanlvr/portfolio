import { Module } from '@nestjs/common';
import { LongportGqlService } from './longport-gql.service';
import { LongportGqlResolver } from './longport-gql.resolver';

@Module({
  providers: [LongportGqlResolver, LongportGqlService],
})
export class LongportGqlModule {}
