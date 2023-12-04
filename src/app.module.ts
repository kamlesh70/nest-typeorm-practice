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
import { EmployeeModule } from './employee/employee.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { MeetingModule } from './meeting/meeting.module';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { Employee } from './employee/entities/employee.entity';
import { Meeting } from './meeting/entities/meeting.entity';
import { ContactInfo } from './contact-info/entities/contact-info.entity';

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
    TransectionModule, EmployeeModule, ContactInfoModule, MeetingModule, TaskModule,
    TypeOrmModule.forFeature([Task, Employee, Meeting, ContactInfo])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
