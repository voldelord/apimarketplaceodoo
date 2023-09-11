import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductStock } from './entities/product_stock.entity';
import { CreateProductStockDto } from './dto/create-product_stock.dto';
import { UpdateProductStockDto } from './dto/update-product_stock.dto';

@Injectable()
export class ProductStockService {
  constructor(
    @InjectRepository(ProductStock)
    private readonly productStockRepository: Repository<ProductStock>,
  ) {}

  async createProductStock(createProductStockDto: CreateProductStockDto) {
    const newProductStock = this.productStockRepository.create(
      createProductStockDto,
    );
    return this.productStockRepository.save(newProductStock);
  }

  getProductStocks() {
    return this.productStockRepository.find();
  }

  async getProductStock(id: number) {
    const productStock = await this.productStockRepository.findOne({
      where: {
        id,
      },
    });
    if (!productStock) {
      throw new NotFoundException('Product Stock not found');
    }
    return productStock;
  }

  async updateProductStock(
    id: number,
    updateProductStockDto: UpdateProductStockDto,
  ) {
    const productStock = await this.getProductStock(id);
    this.productStockRepository.merge(productStock, updateProductStockDto);
    return this.productStockRepository.save(productStock);
  }

  async deleteProductStock(id: number) {
    const result = await this.productStockRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Stock not found');
    }

    return result;
  }
}
