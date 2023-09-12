import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderService } from './sale_orders.service';
import { SaleOrderController } from './sale_orders.controller';
import { SaleOrder } from './entities/sale_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrder])],
  controllers: [SaleOrderController],
  providers: [SaleOrderService],
})
export class SaleOrdersModule {}
