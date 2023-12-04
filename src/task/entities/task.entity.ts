import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Employee, employee => employee.tasks)
  @JoinColumn({
    name: 'employee_id'
  })
  employee: Employee;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
