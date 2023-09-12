import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderLine } from './entities/sale_orders_line.entity';
import { CreateSaleOrderLineDto } from './dto/create-sale_orders_line.dto';
import { UpdateSaleOrderLineDto } from './dto/update-sale_orders_line.dto';

@Injectable()
export class SaleOrderLineService {
  constructor(
    @InjectRepository(SaleOrderLine)
    private readonly saleOrderLineRepository: Repository<SaleOrderLine>,
  ) {}

  async createSaleOrderLine(createSaleOrderLineDto: CreateSaleOrderLineDto) {
    const newSaleOrderLine = this.saleOrderLineRepository.create(
      createSaleOrderLineDto,
    );
    return this.saleOrderLineRepository.save(newSaleOrderLine);
  }

  getSaleOrderLines() {
    return this.saleOrderLineRepository.find();
  }

  async getSaleOrderLine(id: number) {
    const saleOrderLine = await this.saleOrderLineRepository.findOne({
      where: {
        id,
      },
    });
    if (!saleOrderLine) {
      throw new NotFoundException('Sale Order Line not found');
    }
    return saleOrderLine;
  }

  async updateSaleOrderLine(
    id: number,
    updateSaleOrderLineDto: UpdateSaleOrderLineDto,
  ) {
    const saleOrderLine = await this.getSaleOrderLine(id);
    this.saleOrderLineRepository.merge(saleOrderLine, updateSaleOrderLineDto);
    return this.saleOrderLineRepository.save(saleOrderLine);
  }

  async deleteSaleOrderLine(id: number) {
    const result = await this.saleOrderLineRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Sale Order Line not found');
    }

    return result;
  }
}
