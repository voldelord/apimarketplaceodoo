import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTemplateAttributeValueService } from './product_templates_attributes_values.service';
import { ProductTemplateAttributeValueController } from './product_templates_attributes_values.controller';
import { ProductTemplateAttributeValue } from './entities/product_templates_attributes_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTemplateAttributeValue])],
  controllers: [ProductTemplateAttributeValueController],
  providers: [ProductTemplateAttributeValueService],
})
export class ProductTemplatesAttributesValuesModule {}
