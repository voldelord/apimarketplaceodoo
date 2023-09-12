import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderLineTaxService } from './sale_orders_lines_taxes.service';
import { SaleOrderLineTaxController } from './sale_orders_lines_taxes.controller';
import { SaleOrderLineTax } from './entities/sale_orders_lines_tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderLineTax])],
  controllers: [SaleOrderLineTaxController],
  providers: [SaleOrderLineTaxService],
})
export class SaleOrdersLinesTaxesModule {}
