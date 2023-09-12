import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderTemplateService } from './sale_orders_templates.service';
import { SaleOrderTemplateController } from './sale_orders_templates.controller';
import { SaleOrderTemplate } from './entities/sale_orders_template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderTemplate])],
  controllers: [SaleOrderTemplateController],
  providers: [SaleOrderTemplateService],
})
export class SaleOrdersTemplatesModule {}
