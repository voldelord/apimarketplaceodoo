import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SaleOrderTemplateService } from './sale_orders_templates.service';
import { CreateSaleOrderTemplateDto } from './dto/create-sale_orders_template.dto';
import { UpdateSaleOrderTemplateDto } from './dto/update-sale_orders_template.dto';

@Controller('sale-order-templates')
export class SaleOrderTemplateController {
  constructor(
    private readonly saleOrderTemplateService: SaleOrderTemplateService,
  ) {}

  @Post()
  createSaleOrderTemplate(
    @Body() createSaleOrderTemplateDto: CreateSaleOrderTemplateDto,
  ) {
    return this.saleOrderTemplateService.createSaleOrderTemplate(
      createSaleOrderTemplateDto,
    );
  }

  @Get()
  getSaleOrderTemplates() {
    return this.saleOrderTemplateService.getSaleOrderTemplates();
  }

  @Get(':id')
  getSaleOrderTemplate(@Param('id') id: string) {
    return this.saleOrderTemplateService.getSaleOrderTemplate(+id);
  }

  @Patch(':id')
  updateSaleOrderTemplate(
    @Param('id') id: string,
    @Body() updateSaleOrderTemplateDto: UpdateSaleOrderTemplateDto,
  ) {
    return this.saleOrderTemplateService.updateSaleOrderTemplate(
      +id,
      updateSaleOrderTemplateDto,
    );
  }

  @Delete(':id')
  deleteSaleOrderTemplate(@Param('id') id: string) {
    return this.saleOrderTemplateService.deleteSaleOrderTemplate(+id);
  }
}
