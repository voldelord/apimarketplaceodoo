import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResPartnerService } from './res_partners.service';
import { ResPartnerController } from './res_partners.controller';
import { ResPartner } from './entities/res_partner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResPartner])],
  controllers: [ResPartnerController],
  providers: [ResPartnerService],
})
export class ResPartnersModule {}
