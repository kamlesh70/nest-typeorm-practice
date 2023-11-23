import { Module } from '@nestjs/common';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
