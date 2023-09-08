import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTemplateService } from './product_templates.service';
import { ProductTemplateController } from './product_templates.controller';
import { ProductTemplate } from './entities/product_template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTemplate])],
  controllers: [ProductTemplateController],
  providers: [ProductTemplateService],
})
export class ProductTemplatesModule {}
