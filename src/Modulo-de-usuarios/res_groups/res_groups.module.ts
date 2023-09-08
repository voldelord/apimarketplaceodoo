import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResGroupController } from './res_groups.controller';
import { ResGroupService } from './res_groups.service';
import { ResGroup } from './entities/res_group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResGroup])],
  controllers: [ResGroupController],
  providers: [ResGroupService],
})
export class ResGroupsModule {}
