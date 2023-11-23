import { Module } from '@nestjs/common';
import { BankerService } from './service/banker.service';
import { BankerController } from './controller/banker.controller';

@Module({
  controllers: [BankerController],
  providers: [BankerService],
})
export class BankerModule {}
