import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ResCompanyService } from './res_companys.service';
import { CreateResCompanyDto } from './dto/create-res_company.dto';
import { UpdateResCompanyDto } from './dto/update-res_company.dto';

@Controller('res-companies')
export class ResCompanyController {
  constructor(private readonly resCompanyService: ResCompanyService) {}

  @Post()
  createResCompany(@Body() createResCompanyDto: CreateResCompanyDto) {
    return this.resCompanyService.createResCompany(createResCompanyDto);
  }

  @Get()
  getResCompanies() {
    return this.resCompanyService.getResCompanies();
  }

  @Get(':id')
  getResCompany(@Param('id') id: string) {
    return this.resCompanyService.getResCompany(+id);
  }

  @Patch(':id')
  updateResCompany(
    @Param('id') id: string,
    @Body() updateResCompanyDto: UpdateResCompanyDto,
  ) {
    return this.resCompanyService.updateResCompany(+id, updateResCompanyDto);
  }

  @Delete(':id')
  deleteResCompany(@Param('id') id: string) {
    return this.resCompanyService.deleteResCompany(+id);
  }
}
