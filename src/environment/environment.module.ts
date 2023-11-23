import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import appConfig from './config/app.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [
                databaseConfig,
                appConfig
            ],
            envFilePath: ['.env'],
          }),
      ],
      exports: [ConfigModule, ConfigService],
      providers: [ConfigService],
})
export class EnvironmentModule {}
