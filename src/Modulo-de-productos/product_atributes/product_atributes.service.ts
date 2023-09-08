import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAttribute } from './entities/product_atribute.entity';
import { CreateProductAttributeDto } from './dto/create-product_atribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product_atribute.dto';

@Injectable()
export class ProductAttributeService {
  constructor(
    @InjectRepository(ProductAttribute)
    private readonly productAttributeRepository: Repository<ProductAttribute>,
  ) {}

  async createProductAttribute(
    createProductAttributeDto: CreateProductAttributeDto,
  ) {
    const newProductAttribute = this.productAttributeRepository.create(
      createProductAttributeDto,
    );
    return this.productAttributeRepository.save(newProductAttribute);
  }

  getProductAttributes() {
    return this.productAttributeRepository.find();
  }

  async getProductAttribute(id: number) {
    const productAttribute = await this.productAttributeRepository.findOne({
      where: {
        id,
      },
    });
    if (!productAttribute) {
      throw new NotFoundException('Product Attribute not found');
    }
    return productAttribute;
  }

  async updateProductAttribute(
    id: number,
    updateProductAttributeDto: UpdateProductAttributeDto,
  ) {
    const productAttribute = await this.getProductAttribute(id);
    this.productAttributeRepository.merge(
      productAttribute,
      updateProductAttributeDto,
    );
    return this.productAttributeRepository.save(productAttribute);
  }

  async deleteProductAttribute(id: number) {
    const result = await this.productAttributeRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Attribute not found');
    }

    return result;
  }
}
