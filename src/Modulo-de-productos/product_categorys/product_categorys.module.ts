import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryService } from './product_categorys.service';
import { ProductCategoryController } from './product_categorys.controller';
import { ProductCategory } from './entities/product_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategorysModule {}
