import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductStockMove } from './entities/product_stocks_move.entity';
import { CreateProductStockMoveDto } from './dto/create-product_stocks_move.dto';
import { UpdateProductStockMoveDto } from './dto/update-product_stocks_move.dto';

@Injectable()
export class ProductStockMoveService {
  constructor(
    @InjectRepository(ProductStockMove)
    private readonly productStockMoveRepository: Repository<ProductStockMove>,
  ) {}

  async createProductStockMove(
    createProductStockMoveDto: CreateProductStockMoveDto,
  ) {
    const newProductStockMove = this.productStockMoveRepository.create(
      createProductStockMoveDto,
    );
    return this.productStockMoveRepository.save(newProductStockMove);
  }

  getProductStockMoves() {
    return this.productStockMoveRepository.find();
  }

  async getProductStockMove(id: number) {
    const productStockMove = await this.productStockMoveRepository.findOne({
      where: {
        id,
      },
    });
    if (!productStockMove) {
      throw new NotFoundException('Product Stock Move not found');
    }
    return productStockMove;
  }

  async updateProductStockMove(
    id: number,
    updateProductStockMoveDto: UpdateProductStockMoveDto,
  ) {
    const productStockMove = await this.getProductStockMove(id);
    this.productStockMoveRepository.merge(
      productStockMove,
      updateProductStockMoveDto,
    );
    return this.productStockMoveRepository.save(productStockMove);
  }

  async deleteProductStockMove(id: number) {
    const result = await this.productStockMoveRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Product Stock Move not found');
    }

    return result;
  }
}
