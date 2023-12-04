import { Employee } from "src/employee/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ContactInfo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  email: string;

  @Column({
    nullable: true
  })
  phone_number: number;

  @OneToOne(() => Employee, employee => employee.contact_info, {onDelete: "CASCADE"})
  @JoinColumn({
    name: "employee_id"
  })
  employee: Employee

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
