import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductAttributeValuePriceService } from './product_attributes_values_prices.service';
import { CreateProductAttributeValuePriceDto } from './dto/create-product_attributes_values_price.dto';
import { UpdateProductAttributeValuePriceDto } from './dto/update-product_attributes_values_price.dto';

@Controller('product-attribute-value-prices')
export class ProductAttributeValuePriceController {
  constructor(
    private readonly productAttributeValuePriceService: ProductAttributeValuePriceService,
  ) {}

  @Post()
  createProductAttributeValuePrice(
    @Body()
    createProductAttributeValuePriceDto: CreateProductAttributeValuePriceDto,
  ) {
    return this.productAttributeValuePriceService.createProductAttributeValuePrice(
      createProductAttributeValuePriceDto,
    );
  }

  @Get()
  getProductAttributeValuePrices() {
    return this.productAttributeValuePriceService.getProductAttributeValuePrices();
  }

  @Get(':id')
  getProductAttributeValuePrice(@Param('id') id: string) {
    return this.productAttributeValuePriceService.getProductAttributeValuePrice(
      +id,
    );
  }

  @Patch(':id')
  updateProductAttributeValuePrice(
    @Param('id') id: string,
    @Body()
    updateProductAttributeValuePriceDto: UpdateProductAttributeValuePriceDto,
  ) {
    return this.productAttributeValuePriceService.updateProductAttributeValuePrice(
      +id,
      updateProductAttributeValuePriceDto,
    );
  }

  @Delete(':id')
  deleteProductAttributeValuePrice(@Param('id') id: string) {
    return this.productAttributeValuePriceService.deleteProductAttributeValuePrice(
      +id,
    );
  }
}
