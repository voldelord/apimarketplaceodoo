import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductPricelistItemService } from './product_pricelist_items.service';
import { CreateProductPricelistItemDto } from './dto/create-product_pricelist_item.dto';
import { UpdateProductPricelistItemDto } from './dto/update-product_pricelist_item.dto';

@Controller('product-pricelist-items')
export class ProductPricelistItemController {
  constructor(
    private readonly productPricelistItemService: ProductPricelistItemService,
  ) {}

  @Post()
  createProductPricelistItem(
    @Body() createProductPricelistItemDto: CreateProductPricelistItemDto,
  ) {
    return this.productPricelistItemService.createProductPricelistItem(
      createProductPricelistItemDto,
    );
  }

  @Get()
  getProductPricelistItems() {
    return this.productPricelistItemService.getProductPricelistItems();
  }

  @Get(':id')
  getProductPricelistItem(@Param('id') id: string) {
    return this.productPricelistItemService.getProductPricelistItem(+id);
  }

  @Patch(':id')
  updateProductPricelistItem(
    @Param('id') id: string,
    @Body() updateProductPricelistItemDto: UpdateProductPricelistItemDto,
  ) {
    return this.productPricelistItemService.updateProductPricelistItem(
      +id,
      updateProductPricelistItemDto,
    );
  }

  @Delete(':id')
  deleteProductPricelistItem(@Param('id') id: string) {
    return this.productPricelistItemService.deleteProductPricelistItem(+id);
  }
}
