import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductTemplateService } from './product_templates.service';
import { CreateProductTemplateDto } from './dto/create-product_template.dto';
import { UpdateProductTemplateDto } from './dto/update-product_template.dto';

@Controller('product-templates')
export class ProductTemplateController {
  constructor(
    private readonly productTemplateService: ProductTemplateService,
  ) {}

  @Post()
  createProductTemplate(
    @Body() createProductTemplateDto: CreateProductTemplateDto,
  ) {
    return this.productTemplateService.createProductTemplate(
      createProductTemplateDto,
    );
  }

  @Get()
  getProductTemplates() {
    return this.productTemplateService.getProductTemplates();
  }

  @Get(':id')
  getProductTemplate(@Param('id') id: string) {
    return this.productTemplateService.getProductTemplate(+id);
  }

  @Patch(':id')
  updateProductTemplate(
    @Param('id') id: string,
    @Body() updateProductTemplateDto: UpdateProductTemplateDto,
  ) {
    return this.productTemplateService.updateProductTemplate(
      +id,
      updateProductTemplateDto,
    );
  }

  @Delete(':id')
  deleteProductTemplate(@Param('id') id: string) {
    return this.productTemplateService.deleteProductTemplate(+id);
  }
}
