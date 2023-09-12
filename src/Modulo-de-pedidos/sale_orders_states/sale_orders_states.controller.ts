import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SaleOrderStateService } from './sale_orders_states.service';
import { CreateSaleOrderStateDto } from './dto/create-sale_orders_state.dto';
import { UpdateSaleOrderStateDto } from './dto/update-sale_orders_state.dto';

@Controller('sale-order-states')
export class SaleOrderStateController {
  constructor(private readonly saleOrderStateService: SaleOrderStateService) {}

  @Post()
  createSaleOrderState(
    @Body() createSaleOrderStateDto: CreateSaleOrderStateDto,
  ) {
    return this.saleOrderStateService.createSaleOrderState(
      createSaleOrderStateDto,
    );
  }

  @Get()
  getSaleOrderStates() {
    return this.saleOrderStateService.getSaleOrderStates();
  }

  @Get(':id')
  getSaleOrderState(@Param('id') id: string) {
    return this.saleOrderStateService.getSaleOrderState(+id);
  }

  @Patch(':id')
  updateSaleOrderState(
    @Param('id') id: string,
    @Body() updateSaleOrderStateDto: UpdateSaleOrderStateDto,
  ) {
    return this.saleOrderStateService.updateSaleOrderState(
      +id,
      updateSaleOrderStateDto,
    );
  }

  @Delete(':id')
  deleteSaleOrderState(@Param('id') id: string) {
    return this.saleOrderStateService.deleteSaleOrderState(+id);
  }
}
