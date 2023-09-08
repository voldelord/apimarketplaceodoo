import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTemplate } from './entities/product_template.entity';
import { CreateProductTemplateDto } from './dto/create-product_template.dto';
import { UpdateProductTemplateDto } from './dto/update-product_template.dto';

@Injectable()
export class ProductTemplateService {
  constructor(
    @InjectRepository(ProductTemplate)
    private readonly productTemplateRepository: Repository<ProductTemplate>,
  ) {}

  async createProductTemplate(
    createProductTemplateDto: CreateProductTemplateDto,
  ) {
    const newProductTemplate = this.productTemplateRepository.create(
      createProductTemplateDto,
    );
    return this.productTemplateRepository.save(newProductTemplate);
  }

  getProductTemplates() {
    return this.productTemplateRepository.find();
  }

  async getProductTemplate(id: number) {
    const productTemplate = await this.productTemplateRepository.findOne({
      where: {
        id,
      },
    });
    if (!productTemplate) {
      throw new NotFoundException('Product Template not found');
    }
    return productTemplate;
  }

  async updateProductTemplate(
    id: number,
    updateProductTemplateDto: UpdateProductTemplateDto,
  ) {
    const productTemplate = await this.getProductTemplate(id);
    this.productTemplateRepository.merge(
      productTemplate,
      updateProductTemplateDto,
    );
    return this.productTemplateRepository.save(productTemplate);
  }

  async deleteProductTemplate(id: number) {
    const result = await this.productTemplateRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Template not found');
    }

    return result;
  }
}
