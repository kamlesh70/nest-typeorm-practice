import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './environment/environment.module';
import { ClientModule } from './client/client.module';
import { BankerModule } from './banker/banker.module';
import { TransectionModule } from './transection/transection.module';

@Module({
  imports: [EnvironmentModule, ClientModule, BankerModule, TransectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
