import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStockService } from './product_stocks.service';
import { ProductStockController } from './product_stocks.controller';
import { ProductStock } from './entities/product_stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStock])],
  controllers: [ProductStockController],
  providers: [ProductStockService],
})
export class ProductStocksModule {}
