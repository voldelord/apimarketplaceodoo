import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ResPartnerService } from './res_partners.service';
import { CreateResPartnerDto } from './dto/create-res_partner.dto';
import { UpdateResPartnerDto } from './dto/update-res_partner.dto';

@Controller('res-partners')
export class ResPartnerController {
  constructor(private readonly resPartnerService: ResPartnerService) {}

  @Post()
  createResPartner(@Body() createResPartnerDto: CreateResPartnerDto) {
    return this.resPartnerService.createResPartner(createResPartnerDto);
  }

  @Get()
  getResPartners() {
    return this.resPartnerService.getResPartners();
  }

  @Get(':id')
  getResPartner(@Param('id') id: string) {
    return this.resPartnerService.getResPartner(+id);
  }

  @Patch(':id')
  updateResPartner(
    @Param('id') id: string,
    @Body() updateResPartnerDto: UpdateResPartnerDto,
  ) {
    return this.resPartnerService.updateResPartner(+id, updateResPartnerDto);
  }

  @Delete(':id')
  deleteResPartner(@Param('id') id: string) {
    return this.resPartnerService.deleteResPartner(+id);
  }
}
