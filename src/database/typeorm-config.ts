import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('database.type'),
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.name'),
      synchronize: true,
      dropSchema: false,
      keepConnectionAlive: true,
      logging: false,
      migrationsTableName: 'migrations_history',
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      migrationsRun: true,
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      // subscribers: [__dirname + '/../**/**/*.subscriber{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        subscribersDir: 'subscriber',
      },
      ssl:
        this.configService.get('app.env') != 'production'
          ? false
          : {
              rejectUnauthorized: false,
              ca: readFileSync(
                this.configService.get('database.ssl_certificate'),
              ),
            },
    } as TypeOrmModuleOptions;
  }
}
