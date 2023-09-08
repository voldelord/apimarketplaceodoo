import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCompanyController } from './res_companys.controller';
import { ResCompanyService } from './res_companys.service';
import { ResCompany } from './entities/res_company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCompany])],
  controllers: [ResCompanyController],
  providers: [ResCompanyService],
})
export class ResCompanysModule {}
