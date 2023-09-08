import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductPricelistItem } from './entities/product_pricelist_item.entity';
import { CreateProductPricelistItemDto } from './dto/create-product_pricelist_item.dto';
import { UpdateProductPricelistItemDto } from './dto/update-product_pricelist_item.dto';

@Injectable()
export class ProductPricelistItemService {
  constructor(
    @InjectRepository(ProductPricelistItem)
    private readonly productPricelistItemRepository: Repository<ProductPricelistItem>,
  ) {}

  async createProductPricelistItem(
    createProductPricelistItemDto: CreateProductPricelistItemDto,
  ) {
    const newProductPricelistItem = this.productPricelistItemRepository.create(
      createProductPricelistItemDto,
    );
    return this.productPricelistItemRepository.save(newProductPricelistItem);
  }

  getProductPricelistItems() {
    return this.productPricelistItemRepository.find();
  }

  async getProductPricelistItem(id: number) {
    const productPricelistItem =
      await this.productPricelistItemRepository.findOne({
        where: {
          id,
        },
      });
    if (!productPricelistItem) {
      throw new NotFoundException('Product Pricelist Item not found');
    }
    return productPricelistItem;
  }

  async updateProductPricelistItem(
    id: number,
    updateProductPricelistItemDto: UpdateProductPricelistItemDto,
  ) {
    const productPricelistItem = await this.getProductPricelistItem(id);
    this.productPricelistItemRepository.merge(
      productPricelistItem,
      updateProductPricelistItemDto,
    );
    return this.productPricelistItemRepository.save(productPricelistItem);
  }

  async deleteProductPricelistItem(id: number) {
    const result = await this.productPricelistItemRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Pricelist Item not found');
    }

    return result;
  }
}
