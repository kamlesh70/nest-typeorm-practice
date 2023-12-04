import { ContactInfo } from "src/contact-info/entities/contact-info.entity";
import { Meeting } from "src/meeting/entities/meeting.entity";
import { Task } from "src/task/entities/task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Employee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, employee => employee.reporting_employees, {onDelete: "SET NULL"})
  manager: Employee;

  @OneToMany(() => Employee, employee => employee.manager)
  reporting_employees: Employee[];

  @OneToOne(() => ContactInfo, contactInfo => contactInfo.employee)
  contact_info: ContactInfo;

  @ManyToMany(() => Meeting, meeting => meeting.attendees)
  meetings: Meeting[];

  @OneToMany(() => Task, task => task.employee)
  tasks: Task[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
