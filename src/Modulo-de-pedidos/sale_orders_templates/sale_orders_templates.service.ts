import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderTemplate } from './entities/sale_orders_template.entity';
import { CreateSaleOrderTemplateDto } from './dto/create-sale_orders_template.dto';
import { UpdateSaleOrderTemplateDto } from './dto/update-sale_orders_template.dto';

@Injectable()
export class SaleOrderTemplateService {
  constructor(
    @InjectRepository(SaleOrderTemplate)
    private readonly saleOrderTemplateRepository: Repository<SaleOrderTemplate>,
  ) {}

  async createSaleOrderTemplate(
    createSaleOrderTemplateDto: CreateSaleOrderTemplateDto,
  ) {
    const newSaleOrderTemplate = this.saleOrderTemplateRepository.create(
      createSaleOrderTemplateDto,
    );
    return this.saleOrderTemplateRepository.save(newSaleOrderTemplate);
  }

  getSaleOrderTemplates() {
    return this.saleOrderTemplateRepository.find();
  }

  async getSaleOrderTemplate(id: number) {
    const saleOrderTemplate = await this.saleOrderTemplateRepository.findOne({
      where: {
        id,
      },
    });
    if (!saleOrderTemplate) {
      throw new NotFoundException('Sale Order Template not found');
    }
    return saleOrderTemplate;
  }

  async updateSaleOrderTemplate(
    id: number,
    updateSaleOrderTemplateDto: UpdateSaleOrderTemplateDto,
  ) {
    const saleOrderTemplate = await this.getSaleOrderTemplate(id);
    this.saleOrderTemplateRepository.merge(
      saleOrderTemplate,
      updateSaleOrderTemplateDto,
    );
    return this.saleOrderTemplateRepository.save(saleOrderTemplate);
  }

  async deleteSaleOrderTemplate(id: number) {
    const result = await this.saleOrderTemplateRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Sale Order Template not found');
    }

    return result;
  }
}
