import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAttributeValuePrice } from './entities/product_attributes_values_price.entity';
import { CreateProductAttributeValuePriceDto } from './dto/create-product_attributes_values_price.dto';
import { UpdateProductAttributeValuePriceDto } from './dto/update-product_attributes_values_price.dto';

@Injectable()
export class ProductAttributeValuePriceService {
  constructor(
    @InjectRepository(ProductAttributeValuePrice)
    private readonly productAttributeValuePriceRepository: Repository<ProductAttributeValuePrice>,
  ) {}

  async createProductAttributeValuePrice(
    createProductAttributeValuePriceDto: CreateProductAttributeValuePriceDto,
  ) {
    const newProductAttributeValuePrice =
      this.productAttributeValuePriceRepository.create(
        createProductAttributeValuePriceDto,
      );
    return this.productAttributeValuePriceRepository.save(
      newProductAttributeValuePrice,
    );
  }

  getProductAttributeValuePrices() {
    return this.productAttributeValuePriceRepository.find();
  }

  async getProductAttributeValuePrice(id: number) {
    const productAttributeValuePrice =
      await this.productAttributeValuePriceRepository.findOne({
        where: {
          id,
        },
      });
    if (!productAttributeValuePrice) {
      throw new NotFoundException('Product Attribute Value Price not found');
    }
    return productAttributeValuePrice;
  }

  async updateProductAttributeValuePrice(
    id: number,
    updateProductAttributeValuePriceDto: UpdateProductAttributeValuePriceDto,
  ) {
    const productAttributeValuePrice =
      await this.getProductAttributeValuePrice(id);
    this.productAttributeValuePriceRepository.merge(
      productAttributeValuePrice,
      updateProductAttributeValuePriceDto,
    );
    return this.productAttributeValuePriceRepository.save(
      productAttributeValuePrice,
    );
  }

  async deleteProductAttributeValuePrice(id: number) {
    const result = await this.productAttributeValuePriceRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Attribute Value Price not found');
    }

    return result;
  }
}
