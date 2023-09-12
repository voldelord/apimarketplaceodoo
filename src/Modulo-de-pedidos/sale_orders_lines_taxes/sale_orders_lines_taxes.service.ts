import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderLineTax } from './entities/sale_orders_lines_tax.entity';
import { CreateSaleOrderLineTaxDto } from './dto/create-sale_orders_lines_tax.dto';
import { UpdateSaleOrderLineTaxDto } from './dto/update-sale_orders_lines_tax.dto';

@Injectable()
export class SaleOrderLineTaxService {
  constructor(
    @InjectRepository(SaleOrderLineTax)
    private readonly saleOrderLineTaxRepository: Repository<SaleOrderLineTax>,
  ) {}

  async createSaleOrderLineTax(
    createSaleOrderLineTaxDto: CreateSaleOrderLineTaxDto,
  ) {
    const newSaleOrderLineTax = this.saleOrderLineTaxRepository.create(
      createSaleOrderLineTaxDto,
    );
    return this.saleOrderLineTaxRepository.save(newSaleOrderLineTax);
  }

  getSaleOrderLineTaxes() {
    return this.saleOrderLineTaxRepository.find();
  }

  async getSaleOrderLineTax(id: number) {
    const saleOrderLineTax = await this.saleOrderLineTaxRepository.findOne({
      where: {
        id,
      },
    });
    if (!saleOrderLineTax) {
      throw new NotFoundException('Sale Order Line Tax not found');
    }
    return saleOrderLineTax;
  }

  async updateSaleOrderLineTax(
    id: number,
    updateSaleOrderLineTaxDto: UpdateSaleOrderLineTaxDto,
  ) {
    const saleOrderLineTax = await this.getSaleOrderLineTax(id);
    this.saleOrderLineTaxRepository.merge(
      saleOrderLineTax,
      updateSaleOrderLineTaxDto,
    );
    return this.saleOrderLineTaxRepository.save(saleOrderLineTax);
  }

  async deleteSaleOrderLineTax(id: number) {
    const result = await this.saleOrderLineTaxRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Sale Order Line Tax not found');
    }

    return result;
  }
}
