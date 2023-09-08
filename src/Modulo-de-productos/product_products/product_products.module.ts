import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProductService } from './product_products.service';
import { ProductProductController } from './product_products.controller';
import { ProductProduct } from './entities/product_product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductProduct])],
  controllers: [ProductProductController],
  providers: [ProductProductService],
})
export class ProductProductsModule {}
