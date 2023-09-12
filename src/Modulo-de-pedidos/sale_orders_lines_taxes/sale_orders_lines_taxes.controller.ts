import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SaleOrderLineTaxService } from './sale_orders_lines_taxes.service';
import { CreateSaleOrderLineTaxDto } from './dto/create-sale_orders_lines_tax.dto';
import { UpdateSaleOrderLineTaxDto } from './dto/update-sale_orders_lines_tax.dto';

@Controller('sale-order-lines-taxes')
export class SaleOrderLineTaxController {
  constructor(
    private readonly saleOrderLineTaxService: SaleOrderLineTaxService,
  ) {}

  @Post()
  createSaleOrderLineTax(
    @Body() createSaleOrderLineTaxDto: CreateSaleOrderLineTaxDto,
  ) {
    return this.saleOrderLineTaxService.createSaleOrderLineTax(
      createSaleOrderLineTaxDto,
    );
  }

  @Get()
  getSaleOrderLineTaxes() {
    return this.saleOrderLineTaxService.getSaleOrderLineTaxes();
  }

  @Get(':id')
  getSaleOrderLineTax(@Param('id') id: string) {
    return this.saleOrderLineTaxService.getSaleOrderLineTax(+id);
  }

  @Patch(':id')
  updateSaleOrderLineTax(
    @Param('id') id: string,
    @Body() updateSaleOrderLineTaxDto: UpdateSaleOrderLineTaxDto,
  ) {
    return this.saleOrderLineTaxService.updateSaleOrderLineTax(
      +id,
      updateSaleOrderLineTaxDto,
    );
  }

  @Delete(':id')
  deleteSaleOrderLineTax(@Param('id') id: string) {
    return this.saleOrderLineTaxService.deleteSaleOrderLineTax(+id);
  }
}
