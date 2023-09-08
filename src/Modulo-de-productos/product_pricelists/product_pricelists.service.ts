import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductPricelist } from './entities/product_pricelist.entity';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Injectable()
export class ProductPricelistService {
  constructor(
    @InjectRepository(ProductPricelist)
    private readonly productPricelistRepository: Repository<ProductPricelist>,
  ) {}

  async createProductPricelist(
    createProductPricelistDto: CreateProductPricelistDto,
  ) {
    const newProductPricelist = this.productPricelistRepository.create(
      createProductPricelistDto,
    );
    return this.productPricelistRepository.save(newProductPricelist);
  }

  getProductPricelists() {
    return this.productPricelistRepository.find();
  }

  async getProductPricelist(id: number) {
    const productPricelist = await this.productPricelistRepository.findOne({
      where: {
        id,
      },
    });
    if (!productPricelist) {
      throw new NotFoundException('Product Pricelist not found');
    }
    return productPricelist;
  }

  async updateProductPricelist(
    id: number,
    updateProductPricelistDto: UpdateProductPricelistDto,
  ) {
    const productPricelist = await this.getProductPricelist(id);
    this.productPricelistRepository.merge(
      productPricelist,
      updateProductPricelistDto,
    );
    return this.productPricelistRepository.save(productPricelist);
  }

  async deleteProductPricelist(id: number) {
    const result = await this.productPricelistRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Pricelist not found');
    }

    return result;
  }
}
