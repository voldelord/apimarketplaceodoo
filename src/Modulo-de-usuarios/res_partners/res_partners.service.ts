import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResPartner } from './entities/res_partner.entity';
import { CreateResPartnerDto } from './dto/create-res_partner.dto';
import { UpdateResPartnerDto } from './dto/update-res_partner.dto';

@Injectable()
export class ResPartnerService {
  constructor(
    @InjectRepository(ResPartner)
    private readonly resPartnerRepository: Repository<ResPartner>,
  ) {}

  async createResPartner(createResPartnerDto: CreateResPartnerDto) {
    const newResPartner = this.resPartnerRepository.create(createResPartnerDto);
    return this.resPartnerRepository.save(newResPartner);
  }

  getResPartners() {
    return this.resPartnerRepository.find();
  }

  async getResPartner(id: number) {
    const resPartner = await this.resPartnerRepository.findOne({
      where: {
        id,
      },
    });
    if (!resPartner) {
      throw new NotFoundException('ResPartner not found');
    }
    return resPartner;
  }

  async updateResPartner(id: number, updateResPartnerDto: UpdateResPartnerDto) {
    const resPartner = await this.getResPartner(id);
    this.resPartnerRepository.merge(resPartner, updateResPartnerDto);
    return this.resPartnerRepository.save(resPartner);
  }

  async deleteResPartner(id: number) {
    const result = await this.resPartnerRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('ResPartner not found');
    }

    return result;
  }
}
