import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResGroup } from './entities/res_group.entity';
import { CreateResGroupDto } from './dto/create-res_group.dto';
import { UpdateResGroupDto } from './dto/update-res_group.dto';

@Injectable()
export class ResGroupService {
  constructor(
    @InjectRepository(ResGroup)
    private readonly resGroupRepository: Repository<ResGroup>,
  ) {}

  async createResGroup(createResGroupDto: CreateResGroupDto) {
    const newResGroup = this.resGroupRepository.create(createResGroupDto);
    return this.resGroupRepository.save(newResGroup);
  }

  getResGroups() {
    return this.resGroupRepository.find();
  }

  async getResGroup(id: number) {
    const resGroup = await this.resGroupRepository.findOne({
      where: {
        id,
      },
    });
    if (!resGroup) {
      throw new NotFoundException('ResGroup not found');
    }
    return resGroup;
  }

  async updateResGroup(id: number, updateResGroupDto: UpdateResGroupDto) {
    const resGroup = await this.getResGroup(id);
    this.resGroupRepository.merge(resGroup, updateResGroupDto);
    return this.resGroupRepository.save(resGroup);
  }

  async deleteResGroup(id: number) {
    const result = await this.resGroupRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('ResGroup not found');
    }

    return result;
  }
}
