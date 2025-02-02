import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LongportModule } from './longport/longport.module';
import { LongportWsModule } from './longport-ws/longport-ws.module';
import { LongportMsModule } from './longport-ms/longport-ms.module';
import { LongportGqlModule } from './longport-gql/longport-gql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LongportModule,
    LongportWsModule,
    LongportMsModule,
    LongportGqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
