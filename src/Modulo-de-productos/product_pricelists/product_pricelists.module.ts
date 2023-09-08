import { Module } from '@nestjs/common';
import { ProductPricelistsService } from './product_pricelists.service';
import { ProductPricelistsController } from './product_pricelists.controller';

@Module({
  controllers: [ProductPricelistsController],
  providers: [ProductPricelistsService],
})
export class ProductPricelistsModule {}
