import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductTemplateAttributeValueService } from './product_templates_attributes_values.service';
import { CreateProductTemplateAttributeValueDto } from './dto/create-product_templates_attributes_value.dto';
import { UpdateProductTemplateAttributeValueDto } from './dto/update-product_templates_attributes_value.dto';

@Controller('product-template-attribute-values')
export class ProductTemplateAttributeValueController {
  constructor(
    private readonly productTemplateAttributeValueService: ProductTemplateAttributeValueService,
  ) {}

  @Post()
  createProductTemplateAttributeValue(
    @Body()
    createProductTemplateAttributeValueDto: CreateProductTemplateAttributeValueDto,
  ) {
    return this.productTemplateAttributeValueService.createProductTemplateAttributeValue(
      createProductTemplateAttributeValueDto,
    );
  }

  @Get()
  getProductTemplateAttributeValues() {
    return this.productTemplateAttributeValueService.getProductTemplateAttributeValues();
  }

  @Get(':id')
  getProductTemplateAttributeValue(@Param('id') id: string) {
    return this.productTemplateAttributeValueService.getProductTemplateAttributeValue(
      +id,
    );
  }

  @Patch(':id')
  updateProductTemplateAttributeValue(
    @Param('id') id: string,
    @Body()
    updateProductTemplateAttributeValueDto: UpdateProductTemplateAttributeValueDto,
  ) {
    return this.productTemplateAttributeValueService.updateProductTemplateAttributeValue(
      +id,
      updateProductTemplateAttributeValueDto,
    );
  }

  @Delete(':id')
  deleteProductTemplateAttributeValue(@Param('id') id: string) {
    return this.productTemplateAttributeValueService.deleteProductTemplateAttributeValue(
      +id,
    );
  }
}
