import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPricelistItemService } from './product_pricelist_items.service';
import { ProductPricelistItemController } from './product_pricelist_items.controller';
import { ProductPricelistItem } from './entities/product_pricelist_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPricelistItem])],
  controllers: [ProductPricelistItemController],
  providers: [ProductPricelistItemService],
})
export class ProductPricelistItemsModule {}
