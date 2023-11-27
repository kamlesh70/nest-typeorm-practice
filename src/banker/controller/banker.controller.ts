import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { BankerService } from '../service/banker.service';
import { CreateBankerDto } from '../dto/create-banker.dto';
import { UpdateBankerDto } from '../dto/update-banker.dto';

@Controller('banker')
export class BankerController {
  constructor(private readonly bankerService: BankerService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  create(@Body() createBankerDto: CreateBankerDto) {
    return this.bankerService.create(createBankerDto);
  }

  @Get()
  findAll() {
    return this.bankerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankerDto: UpdateBankerDto) {
    return this.bankerService.update(+id, updateBankerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankerService.remove(+id);
  }
}
