import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStockMoveService } from './product_stocks_moves.service';
import { ProductStockMoveController } from './product_stocks_moves.controller';
import { ProductStockMove } from './entities/product_stocks_move.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStockMove])],
  controllers: [ProductStockMoveController],
  providers: [ProductStockMoveService],
})
export class ProductStocksMovesModule {}
