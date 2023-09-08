import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductPricelistService } from './product_pricelists.service';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Controller('product-pricelists')
export class ProductPricelistController {
  constructor(
    private readonly productPricelistService: ProductPricelistService,
  ) {}

  @Post()
  createProductPricelist(
    @Body() createProductPricelistDto: CreateProductPricelistDto,
  ) {
    return this.productPricelistService.createProductPricelist(
      createProductPricelistDto,
    );
  }

  @Get()
  getProductPricelists() {
    return this.productPricelistService.getProductPricelists();
  }

  @Get(':id')
  getProductPricelist(@Param('id') id: string) {
    return this.productPricelistService.getProductPricelist(+id);
  }

  @Patch(':id')
  updateProductPricelist(
    @Param('id') id: string,
    @Body() updateProductPricelistDto: UpdateProductPricelistDto,
  ) {
    return this.productPricelistService.updateProductPricelist(
      +id,
      updateProductPricelistDto,
    );
  }

  @Delete(':id')
  deleteProductPricelist(@Param('id') id: string) {
    return this.productPricelistService.deleteProductPricelist(+id);
  }
}
