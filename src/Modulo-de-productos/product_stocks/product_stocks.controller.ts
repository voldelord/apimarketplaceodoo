import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductStockService } from './product_stocks.service';
import { CreateProductStockDto } from './dto/create-product_stock.dto';
import { UpdateProductStockDto } from './dto/update-product_stock.dto';

@Controller('product-stocks')
export class ProductStockController {
  constructor(private readonly productStockService: ProductStockService) {}

  @Post()
  createProductStock(@Body() createProductStockDto: CreateProductStockDto) {
    return this.productStockService.createProductStock(createProductStockDto);
  }

  @Get()
  getProductStocks() {
    return this.productStockService.getProductStocks();
  }

  @Get(':id')
  getProductStock(@Param('id') id: string) {
    return this.productStockService.getProductStock(+id);
  }

  @Patch(':id')
  updateProductStock(
    @Param('id') id: string,
    @Body() updateProductStockDto: UpdateProductStockDto,
  ) {
    return this.productStockService.updateProductStock(
      +id,
      updateProductStockDto,
    );
  }

  @Delete(':id')
  deleteProductStock(@Param('id') id: string) {
    return this.productStockService.deleteProductStock(+id);
  }
}
