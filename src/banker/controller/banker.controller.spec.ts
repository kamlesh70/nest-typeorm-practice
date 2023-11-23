import { Test, TestingModule } from '@nestjs/testing';
import { BankerController } from './controller/banker.controller';
import { BankerService } from './service/banker.service';

describe('BankerController', () => {
  let controller: BankerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankerController],
      providers: [BankerService],
    }).compile();

    controller = module.get<BankerController>(BankerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
