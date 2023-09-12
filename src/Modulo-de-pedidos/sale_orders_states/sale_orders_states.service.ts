import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderState } from './entities/sale_orders_state.entity';
import { CreateSaleOrderStateDto } from './dto/create-sale_orders_state.dto';
import { UpdateSaleOrderStateDto } from './dto/update-sale_orders_state.dto';

@Injectable()
export class SaleOrderStateService {
  constructor(
    @InjectRepository(SaleOrderState)
    private readonly saleOrderStateRepository: Repository<SaleOrderState>,
  ) {}

  async createSaleOrderState(createSaleOrderStateDto: CreateSaleOrderStateDto) {
    const newSaleOrderState = this.saleOrderStateRepository.create(
      createSaleOrderStateDto,
    );
    return this.saleOrderStateRepository.save(newSaleOrderState);
  }

  getSaleOrderStates() {
    return this.saleOrderStateRepository.find();
  }

  async getSaleOrderState(id: number) {
    const saleOrderState = await this.saleOrderStateRepository.findOne({
      where: {
        id,
      },
    });
    if (!saleOrderState) {
      throw new NotFoundException('Sale Order State not found');
    }
    return saleOrderState;
  }

  async updateSaleOrderState(
    id: number,
    updateSaleOrderStateDto: UpdateSaleOrderStateDto,
  ) {
    const saleOrderState = await this.getSaleOrderState(id);
    this.saleOrderStateRepository.merge(
      saleOrderState,
      updateSaleOrderStateDto,
    );
    return this.saleOrderStateRepository.save(saleOrderState);
  }

  async deleteSaleOrderState(id: number) {
    const result = await this.saleOrderStateRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Sale Order State not found');
    }

    return result;
  }
}
