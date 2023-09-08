import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/product_category.entity';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async createProductCategory(
    createProductCategoryDto: CreateProductCategoryDto,
  ) {
    const newProductCategory = this.productCategoryRepository.create(
      createProductCategoryDto,
    );
    return this.productCategoryRepository.save(newProductCategory);
  }

  getProductCategories() {
    return this.productCategoryRepository.find();
  }

  async getProductCategory(id: number) {
    const productCategory = await this.productCategoryRepository.findOne({
      where: {
        id,
      },
    });
    if (!productCategory) {
      throw new NotFoundException('Product Category not found');
    }
    return productCategory;
  }

  async updateProductCategory(
    id: number,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    const productCategory = await this.getProductCategory(id);
    this.productCategoryRepository.merge(
      productCategory,
      updateProductCategoryDto,
    );
    return this.productCategoryRepository.save(productCategory);
  }

  async deleteProductCategory(id: number) {
    const result = await this.productCategoryRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Category not found');
    }

    return result;
  }
}
