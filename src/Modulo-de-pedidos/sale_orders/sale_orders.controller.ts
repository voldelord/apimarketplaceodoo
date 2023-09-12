import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SaleOrderService } from './sale_orders.service';
import { CreateSaleOrderDto } from './dto/create-sale_order.dto';
import { UpdateSaleOrderDto } from './dto/update-sale_order.dto';

@Controller('sale-orders')
export class SaleOrderController {
  constructor(private readonly saleOrderService: SaleOrderService) {}

  @Post()
  createSaleOrder(@Body() createSaleOrderDto: CreateSaleOrderDto) {
    return this.saleOrderService.createSaleOrder(createSaleOrderDto);
  }

  @Get()
  getSaleOrders() {
    return this.saleOrderService.getSaleOrders();
  }

  @Get(':id')
  getSaleOrder(@Param('id') id: string) {
    return this.saleOrderService.getSaleOrder(+id);
  }

  @Patch(':id')
  updateSaleOrder(
    @Param('id') id: string,
    @Body() updateSaleOrderDto: UpdateSaleOrderDto,
  ) {
    return this.saleOrderService.updateSaleOrder(+id, updateSaleOrderDto);
  }

  @Delete(':id')
  deleteSaleOrder(@Param('id') id: string) {
    return this.saleOrderService.deleteSaleOrder(+id);
  }
}
