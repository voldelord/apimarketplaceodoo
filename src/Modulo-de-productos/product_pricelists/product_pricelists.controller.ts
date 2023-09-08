import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPricelistsService } from './product_pricelists.service';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Controller('product-pricelists')
export class ProductPricelistsController {
  constructor(private readonly productPricelistsService: ProductPricelistsService) {}

  @Post()
  create(@Body() createProductPricelistDto: CreateProductPricelistDto) {
    return this.productPricelistsService.create(createProductPricelistDto);
  }

  @Get()
  findAll() {
    return this.productPricelistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricelistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPricelistDto: UpdateProductPricelistDto) {
    return this.productPricelistsService.update(+id, updateProductPricelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPricelistsService.remove(+id);
  }
}
