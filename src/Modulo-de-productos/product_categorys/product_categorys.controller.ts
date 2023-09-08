import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductCategoryService } from './product_categorys.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';

@Controller('product-categories')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  createProductCategory(
    @Body() createProductCategoryDto: CreateProductCategoryDto,
  ) {
    return this.productCategoryService.createProductCategory(
      createProductCategoryDto,
    );
  }

  @Get()
  getProductCategories() {
    return this.productCategoryService.getProductCategories();
  }

  @Get(':id')
  getProductCategory(@Param('id') id: string) {
    return this.productCategoryService.getProductCategory(+id);
  }

  @Patch(':id')
  updateProductCategory(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.updateProductCategory(
      +id,
      updateProductCategoryDto,
    );
  }

  @Delete(':id')
  deleteProductCategory(@Param('id') id: string) {
    return this.productCategoryService.deleteProductCategory(+id);
  }
}
