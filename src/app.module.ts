import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './environment/environment.module';
import { ClientModule } from './client/client.module';
import { BankerModule } from './banker/banker.module';
import { TransectionModule } from './transection/transection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    EnvironmentModule, 
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    ClientModule, 
    BankerModule, 
    TransectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
