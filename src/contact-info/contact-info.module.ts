import { Module } from '@nestjs/common';
import { ContactInfoService } from './service/contact-info.service';
import { ContactInfoController } from './controller/contact-info.controller';

@Module({
  controllers: [ContactInfoController],
  providers: [ContactInfoService],
})
export class ContactInfoModule {}
