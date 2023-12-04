import { Employee } from "src/employee/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Meeting {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  url: string;

  @ManyToMany(() => Employee, employee => employee.meetings)
  @JoinTable()
  attendees: Employee[]

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
