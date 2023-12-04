import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities/employee.entity';
import { Brackets, FindOptionsWhere, ILike, Like, Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({
      relations: {
        tasks: true,
        meetings: true,
        manager: true,
        reporting_employees: true 
      }
    });
  }

  async findOne(query: any) {
    console.log(query);
    const { name, manager_id } = query;
    const condition : FindOptionsWhere<Employee> | FindOptionsWhere<Employee>[] = {
      ...( name ? { name : ILike(`%${name}%`) } : {} ),
      ...( manager_id ? { manager : { id: manager_id } } : {} )
    }
    return await this.employeeRepository.find({
      where: condition,
      relations: {
        manager: true
      }
    });
  }

  async findOneWithQueryBuilder(query: any) {
    console.log(query);
    const { name, manager_id, search } = query;
    const queryBuilder = this.employeeRepository.createQueryBuilder('employee');
    name && queryBuilder.andWhere('employee.name = :name', { name });
    manager_id && queryBuilder.andWhere('employee.manager.id = :manager_id', {manager_id});

    if(search){
      queryBuilder.andWhere(new Brackets(qb => {
        qb.where('LOWER(employee.name) LIKE LOWER(: search)', { search: `%${search}%` })
        .orWhere('LOWER(employee.manager.name) LIKE LOWER(:search)', { search: `%${search}%` })
      }))
    }

    return queryBuilder.leftJoin('manager', 'manager').getOne();
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
