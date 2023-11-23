import { Injectable } from '@nestjs/common';
import { CreateBankerDto } from '../dto/create-banker.dto';
import { UpdateBankerDto } from '../dto/update-banker.dto';

@Injectable()
export class BankerService {
  create(createBankerDto: CreateBankerDto) {
    return 'This action adds a new banker';
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
