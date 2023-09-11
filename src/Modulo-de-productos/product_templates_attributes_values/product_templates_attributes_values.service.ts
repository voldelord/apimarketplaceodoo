import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTemplateAttributeValue } from './entities/product_templates_attributes_value.entity';
import { CreateProductTemplateAttributeValueDto } from './dto/create-product_templates_attributes_value.dto';
import { UpdateProductTemplateAttributeValueDto } from './dto/update-product_templates_attributes_value.dto';

@Injectable()
export class ProductTemplateAttributeValueService {
  constructor(
    @InjectRepository(ProductTemplateAttributeValue)
    private readonly productTemplateAttributeValueRepository: Repository<ProductTemplateAttributeValue>,
  ) {}

  async createProductTemplateAttributeValue(
    createProductTemplateAttributeValueDto: CreateProductTemplateAttributeValueDto,
  ) {
    const newProductTemplateAttributeValue =
      this.productTemplateAttributeValueRepository.create(
        createProductTemplateAttributeValueDto,
      );
    return this.productTemplateAttributeValueRepository.save(
      newProductTemplateAttributeValue,
    );
  }

  getProductTemplateAttributeValues() {
    return this.productTemplateAttributeValueRepository.find();
  }

  async getProductTemplateAttributeValue(id: number) {
    const productTemplateAttributeValue =
      await this.productTemplateAttributeValueRepository.findOne({
        where: {
          id,
        },
      });
    if (!productTemplateAttributeValue) {
      throw new NotFoundException('Product Template Attribute Value not found');
    }
    return productTemplateAttributeValue;
  }

  async updateProductTemplateAttributeValue(
    id: number,
    updateProductTemplateAttributeValueDto: UpdateProductTemplateAttributeValueDto,
  ) {
    const productTemplateAttributeValue =
      await this.getProductTemplateAttributeValue(id);
    this.productTemplateAttributeValueRepository.merge(
      productTemplateAttributeValue,
      updateProductTemplateAttributeValueDto,
    );
    return this.productTemplateAttributeValueRepository.save(
      productTemplateAttributeValue,
    );
  }

  async deleteProductTemplateAttributeValue(id: number) {
    const result =
      await this.productTemplateAttributeValueRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Template Attribute Value not found');
    }

    return result;
  }
}
