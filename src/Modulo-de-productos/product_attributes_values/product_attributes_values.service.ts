import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAttributeValue } from './entities/product_attributes_value.entity';
import { CreateProductAttributeValueDto } from './dto/create-product_attributes_value.dto';
import { UpdateProductAttributeValueDto } from './dto/update-product_attributes_value.dto';

@Injectable()
export class ProductAttributeValueService {
  constructor(
    @InjectRepository(ProductAttributeValue)
    private readonly productAttributeValueRepository: Repository<ProductAttributeValue>,
  ) {}

  async createProductAttributeValue(
    createProductAttributeValueDto: CreateProductAttributeValueDto,
  ) {
    const newProductAttributeValue =
      this.productAttributeValueRepository.create(
        createProductAttributeValueDto,
      );
    return this.productAttributeValueRepository.save(newProductAttributeValue);
  }

  getProductAttributeValues() {
    return this.productAttributeValueRepository.find();
  }

  async getProductAttributeValue(id: number) {
    const productAttributeValue =
      await this.productAttributeValueRepository.findOne({
        where: {
          id,
        },
      });
    if (!productAttributeValue) {
      throw new NotFoundException('Product Attribute Value not found');
    }
    return productAttributeValue;
  }

  async updateProductAttributeValue(
    id: number,
    updateProductAttributeValueDto: UpdateProductAttributeValueDto,
  ) {
    const productAttributeValue = await this.getProductAttributeValue(id);
    this.productAttributeValueRepository.merge(
      productAttributeValue,
      updateProductAttributeValueDto,
    );
    return this.productAttributeValueRepository.save(productAttributeValue);
  }

  async deleteProductAttributeValue(id: number) {
    const result = await this.productAttributeValueRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Attribute Value not found');
    }

    return result;
  }
}
