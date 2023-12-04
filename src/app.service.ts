import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee/entities/employee.entity';
import { Repository } from 'typeorm';
import { Task } from './task/entities/task.entity';
import { Meeting } from './meeting/entities/meeting.entity';
import { ContactInfo } from './contact-info/entities/contact-info.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    @InjectRepository(Meeting) private meetingRepository: Repository<Meeting>,
    @InjectRepository(ContactInfo) private contactInfoRepository: Repository<ContactInfo>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  // NOTE :-  not recommended in production app, it's just for practice purpose;
  async seed(): Promise<any> {
    // create employee
    const ceo = this.employeeRepository.create({ name: "MR. CEO" });
    await this.employeeRepository.save(ceo);

    const manager = this.employeeRepository.create({ name: "Kamlesh" });
    manager.manager = ceo;
    await this.employeeRepository.save(manager);

    ceo.reporting_employees = [manager];
    await this.employeeRepository.save(ceo);
    // create contactInfo
    const ceoContactInfo = this.contactInfoRepository.create({ email: "ceo@jarvis.com"});
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepository.save(ceoContactInfo);
    
    const managerContactInfo = this.contactInfoRepository.create({ email: "kamlesh@jarvis.com" })
    managerContactInfo.employee = manager;
    await this.contactInfoRepository.save(managerContactInfo);

    // create meeting
    const meeting = this.meetingRepository.create({ url: "https://jarvis.com" })
    meeting.attendees = [ceo]
    await this.meetingRepository.save(meeting);

    manager.meetings = [meeting];
    await this.employeeRepository.save(manager);

    // create task
    const task1 = this.taskRepository.create({ title: "test task 1" });
    await this.taskRepository.save(task1);
    const task2 = this.taskRepository.create({ title: "test task 2" });
    await this.taskRepository.save(task2);

    manager.tasks = [task1, task2];
    await this.employeeRepository.save(manager);
    
    return "working";
  }
}
