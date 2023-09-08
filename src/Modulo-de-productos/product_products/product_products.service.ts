import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductProduct } from './entities/product_product.entity';
import { CreateProductProductDto } from './dto/create-product_product.dto';
import { UpdateProductProductDto } from './dto/update-product_product.dto';

@Injectable()
export class ProductProductService {
  constructor(
    @InjectRepository(ProductProduct)
    private readonly productRepository: Repository<ProductProduct>,
  ) {}

  async createProduct(createProductDto: CreateProductProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  getProducts() {
    return this.productRepository.find();
  }

  async getProduct(id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProduct(id: number, updateProductDto: UpdateProductProductDto) {
    const product = await this.getProduct(id);
    this.productRepository.merge(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async deleteProduct(id: number) {
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product not found');
    }

    return result;
  }
}
