import { Module } from '@nestjs/common';
import { EmployeeService } from './service/employee.service';
import { EmployeeController } from './controller/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Task } from 'src/task/entities/task.entity';
import { Meeting } from 'src/meeting/entities/meeting.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Task, Meeting, ContactInfo])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
