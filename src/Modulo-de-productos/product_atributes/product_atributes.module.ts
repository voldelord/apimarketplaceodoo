import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttributeService } from './product_atributes.service';
import { ProductAttributeController } from './product_atributes.controller';
import { ProductAttribute } from './entities/product_atribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttribute])],
  controllers: [ProductAttributeController],
  providers: [ProductAttributeService],
})
export class ProductAtributesModule {}
