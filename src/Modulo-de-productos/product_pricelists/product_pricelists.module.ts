import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPricelistService } from './product_pricelists.service';
import { ProductPricelistController } from './product_pricelists.controller';
import { ProductPricelist } from './entities/product_pricelist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPricelist])],
  controllers: [ProductPricelistController],
  providers: [ProductPricelistService],
})
export class ProductPricelistsModule {}
