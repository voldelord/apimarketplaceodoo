import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResCompany } from './entities/res_company.entity';
import { CreateResCompanyDto } from './dto/create-res_company.dto';
import { UpdateResCompanyDto } from './dto/update-res_company.dto';

@Injectable()
export class ResCompanyService {
  constructor(
    @InjectRepository(ResCompany)
    private readonly resCompanyRepository: Repository<ResCompany>,
  ) {}

  async createResCompany(createResCompanyDto: CreateResCompanyDto) {
    const newResCompany = this.resCompanyRepository.create(createResCompanyDto);
    return this.resCompanyRepository.save(newResCompany);
  }

  getResCompanies() {
    return this.resCompanyRepository.find();
  }

  async getResCompany(id: number) {
    const resCompany = await this.resCompanyRepository.findOne({
      where: {
        id,
      },
    });
    if (!resCompany) {
      throw new NotFoundException('ResCompany not found');
    }
    return resCompany;
  }

  async updateResCompany(id: number, updateResCompanyDto: UpdateResCompanyDto) {
    const resCompany = await this.getResCompany(id);
    this.resCompanyRepository.merge(resCompany, updateResCompanyDto);
    return this.resCompanyRepository.save(resCompany);
  }

  async deleteResCompany(id: number) {
    const result = await this.resCompanyRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('ResCompany not found');
    }

    return result;
  }
}
