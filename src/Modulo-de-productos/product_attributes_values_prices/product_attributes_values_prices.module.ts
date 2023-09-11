import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttributeValuePriceService } from './product_attributes_values_prices.service';
import { ProductAttributeValuePriceController } from './product_attributes_values_prices.controller';
import { ProductAttributeValuePrice } from './entities/product_attributes_values_price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttributeValuePrice])],
  controllers: [ProductAttributeValuePriceController],
  providers: [ProductAttributeValuePriceService],
})
export class ProductAttributesValuesPricesModule {}
