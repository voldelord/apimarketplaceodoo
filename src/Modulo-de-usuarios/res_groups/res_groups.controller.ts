import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ResGroupService } from './res_groups.service';
import { CreateResGroupDto } from './dto/create-res_group.dto';
import { UpdateResGroupDto } from './dto/update-res_group.dto';

@Controller('res_groups')
export class ResGroupController {
  constructor(private readonly resGroupService: ResGroupService) {}

  @Post()
  createResGroup(@Body() createResGroupDto: CreateResGroupDto) {
    return this.resGroupService.createResGroup(createResGroupDto);
  }

  @Get()
  getResGroups() {
    return this.resGroupService.getResGroups();
  }

  @Get(':id')
  getResGroup(@Param('id') id: string) {
    return this.resGroupService.getResGroup(+id);
  }

  @Patch(':id')
  updateResGroup(
    @Param('id') id: string,
    @Body() updateResGroupDto: UpdateResGroupDto,
  ) {
    return this.resGroupService.updateResGroup(+id, updateResGroupDto);
  }

  @Delete(':id')
  deleteResGroup(@Param('id') id: string) {
    return this.resGroupService.deleteResGroup(+id);
  }
}
