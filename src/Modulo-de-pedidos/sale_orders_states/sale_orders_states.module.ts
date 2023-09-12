import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderStateService } from './sale_orders_states.service';
import { SaleOrderStateController } from './sale_orders_states.controller';
import { SaleOrderState } from './entities/sale_orders_state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderState])],
  controllers: [SaleOrderStateController],
  providers: [SaleOrderStateService],
})
export class SaleOrdersStatesModule {}
