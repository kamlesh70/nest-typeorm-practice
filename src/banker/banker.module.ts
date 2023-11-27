import { Module } from '@nestjs/common';
import { BankerService } from './service/banker.service';
import { BankerController } from './controller/banker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banker } from './entities/banker.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Banker])
  ],
  controllers: [BankerController],
  providers: [BankerService],
})
export class BankerModule {}
