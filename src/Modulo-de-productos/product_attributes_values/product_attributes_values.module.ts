import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttributeValueService } from './product_attributes_values.service';
import { ProductAttributeValueController } from './product_attributes_values.controller';
import { ProductAttributeValue } from './entities/product_attributes_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttributeValue])],
  controllers: [ProductAttributeValueController],
  providers: [ProductAttributeValueService],
})
export class ProductAttributesValuesModule {}
