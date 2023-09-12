import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderLineService } from './sale_orders_lines.service';
import { SaleOrderLineController } from './sale_orders_lines.controller';
import { SaleOrderLine } from './entities/sale_orders_line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderLine])],
  controllers: [SaleOrderLineController],
  providers: [SaleOrderLineService],
})
export class SaleOrdersLinesModule {}
