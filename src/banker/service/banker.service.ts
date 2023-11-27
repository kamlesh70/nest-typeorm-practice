import { Injectable } from '@nestjs/common';
import { CreateBankerDto } from '../dto/create-banker.dto';
import { UpdateBankerDto } from '../dto/update-banker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Banker } from '../entities/banker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankerService {

  constructor(
    @InjectRepository(Banker)
    private bankerRepository: Repository<Banker>,
  ){}

  async create(createBankerDto: CreateBankerDto) {
    return await this.bankerRepository.save(createBankerDto);
  }

  findAll() {
    return `This action returns all banker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banker`;
  }

  update(id: number, updateBankerDto: UpdateBankerDto) {
    return `This action updates a #${id} banker`;
  }

  remove(id: number) {
    return `This action removes a #${id} banker`;
  }
}
