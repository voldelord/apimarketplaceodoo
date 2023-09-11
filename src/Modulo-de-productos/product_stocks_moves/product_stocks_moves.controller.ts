import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductStockMoveService } from './product_stocks_moves.service';
import { CreateProductStockMoveDto } from './dto/create-product_stocks_move.dto';
import { UpdateProductStockMoveDto } from './dto/update-product_stocks_move.dto';

@Controller('product-stock-moves')
export class ProductStockMoveController {
  constructor(
    private readonly productStockMoveService: ProductStockMoveService,
  ) {}

  @Post()
  createProductStockMove(
    @Body() createProductStockMoveDto: CreateProductStockMoveDto,
  ) {
    return this.productStockMoveService.createProductStockMove(
      createProductStockMoveDto,
    );
  }

  @Get()
  getProductStockMoves() {
    return this.productStockMoveService.getProductStockMoves();
  }

  @Get(':id')
  getProductStockMove(@Param('id') id: string) {
    return this.productStockMoveService.getProductStockMove(+id);
  }

  @Patch(':id')
  updateProductStockMove(
    @Param('id') id: string,
    @Body() updateProductStockMoveDto: UpdateProductStockMoveDto,
  ) {
    return this.productStockMoveService.updateProductStockMove(
      +id,
      updateProductStockMoveDto,
    );
  }

  @Delete(':id')
  deleteProductStockMove(@Param('id') id: string) {
    return this.productStockMoveService.deleteProductStockMove(+id);
  }
}
