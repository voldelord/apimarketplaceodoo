import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SaleOrderLineService } from './sale_orders_lines.service';
import { CreateSaleOrderLineDto } from './dto/create-sale_orders_line.dto';
import { UpdateSaleOrderLineDto } from './dto/update-sale_orders_line.dto';

@Controller('sale-order-lines')
export class SaleOrderLineController {
  constructor(private readonly saleOrderLineService: SaleOrderLineService) {}

  @Post()
  createSaleOrderLine(@Body() createSaleOrderLineDto: CreateSaleOrderLineDto) {
    return this.saleOrderLineService.createSaleOrderLine(
      createSaleOrderLineDto,
    );
  }

  @Get()
  getSaleOrderLines() {
    return this.saleOrderLineService.getSaleOrderLines();
  }

  @Get(':id')
  getSaleOrderLine(@Param('id') id: string) {
    return this.saleOrderLineService.getSaleOrderLine(+id);
  }

  @Patch(':id')
  updateSaleOrderLine(
    @Param('id') id: string,
    @Body() updateSaleOrderLineDto: UpdateSaleOrderLineDto,
  ) {
    return this.saleOrderLineService.updateSaleOrderLine(
      +id,
      updateSaleOrderLineDto,
    );
  }

  @Delete(':id')
  deleteSaleOrderLine(@Param('id') id: string) {
    return this.saleOrderLineService.deleteSaleOrderLine(+id);
  }
}
