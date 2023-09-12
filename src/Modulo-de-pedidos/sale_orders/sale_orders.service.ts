import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrder } from './entities/sale_order.entity';
import { CreateSaleOrderDto } from './dto/create-sale_order.dto';
import { UpdateSaleOrderDto } from './dto/update-sale_order.dto';

@Injectable()
export class SaleOrderService {
  constructor(
    @InjectRepository(SaleOrder)
    private readonly saleOrderRepository: Repository<SaleOrder>,
  ) {}

  async createSaleOrder(createSaleOrderDto: CreateSaleOrderDto) {
    const newSaleOrder = this.saleOrderRepository.create(createSaleOrderDto);
    return this.saleOrderRepository.save(newSaleOrder);
  }

  getSaleOrders() {
    return this.saleOrderRepository.find();
  }

  async getSaleOrder(id: number) {
    const saleOrder = await this.saleOrderRepository.findOne({
      where: {
        id,
      },
    });
    if (!saleOrder) {
      throw new NotFoundException('Sale Order not found');
    }
    return saleOrder;
  }

  async updateSaleOrder(id: number, updateSaleOrderDto: UpdateSaleOrderDto) {
    const saleOrder = await this.getSaleOrder(id);
    this.saleOrderRepository.merge(saleOrder, updateSaleOrderDto);
    return this.saleOrderRepository.save(saleOrder);
  }

  async deleteSaleOrder(id: number) {
    const result = await this.saleOrderRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Sale Order not found');
    }

    return result;
  }
}
