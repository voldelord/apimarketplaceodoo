import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductAttributeService } from './product_atributes.service';
import { CreateProductAttributeDto } from './dto/create-product_atribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product_atribute.dto';

@Controller('product-attributes')
export class ProductAttributeController {
  constructor(
    private readonly productAttributeService: ProductAttributeService,
  ) {}

  @Post()
  createProductAttribute(
    @Body() createProductAttributeDto: CreateProductAttributeDto,
  ) {
    return this.productAttributeService.createProductAttribute(
      createProductAttributeDto,
    );
  }

  @Get()
  getProductAttributes() {
    return this.productAttributeService.getProductAttributes();
  }

  @Get(':id')
  getProductAttribute(@Param('id') id: string) {
    return this.productAttributeService.getProductAttribute(+id);
  }

  @Patch(':id')
  updateProductAttribute(
    @Param('id') id: string,
    @Body() updateProductAttributeDto: UpdateProductAttributeDto,
  ) {
    return this.productAttributeService.updateProductAttribute(
      +id,
      updateProductAttributeDto,
    );
  }

  @Delete(':id')
  deleteProductAttribute(@Param('id') id: string) {
    return this.productAttributeService.deleteProductAttribute(+id);
  }
}
