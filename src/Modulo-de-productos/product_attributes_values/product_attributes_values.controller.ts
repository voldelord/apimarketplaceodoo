import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductAttributeValueService } from './product_attributes_values.service';
import { CreateProductAttributeValueDto } from './dto/create-product_attributes_value.dto';
import { UpdateProductAttributeValueDto } from './dto/update-product_attributes_value.dto';

@Controller('product-attribute-values')
export class ProductAttributeValueController {
  constructor(
    private readonly productAttributeValueService: ProductAttributeValueService,
  ) {}

  @Post()
  createProductAttributeValue(
    @Body() createProductAttributeValueDto: CreateProductAttributeValueDto,
  ) {
    return this.productAttributeValueService.createProductAttributeValue(
      createProductAttributeValueDto,
    );
  }

  @Get()
  getProductAttributeValues() {
    return this.productAttributeValueService.getProductAttributeValues();
  }

  @Get(':id')
  getProductAttributeValue(@Param('id') id: string) {
    return this.productAttributeValueService.getProductAttributeValue(+id);
  }

  @Patch(':id')
  updateProductAttributeValue(
    @Param('id') id: string,
    @Body() updateProductAttributeValueDto: UpdateProductAttributeValueDto,
  ) {
    return this.productAttributeValueService.updateProductAttributeValue(
      +id,
      updateProductAttributeValueDto,
    );
  }

  @Delete(':id')
  deleteProductAttributeValue(@Param('id') id: string) {
    return this.productAttributeValueService.deleteProductAttributeValue(+id);
  }
}
