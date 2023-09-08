import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductProductService } from './product_products.service';
import { CreateProductProductDto } from './dto/create-product_product.dto';
import { UpdateProductProductDto } from './dto/update-product_product.dto';

@Controller('products')
export class ProductProductController {
  constructor(private readonly productService: ProductProductService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(+id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductProductDto,
  ) {
    return this.productService.updateProduct(+id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
