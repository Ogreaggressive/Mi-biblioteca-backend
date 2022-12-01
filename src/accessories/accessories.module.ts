import { Module } from '@nestjs/common';
import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Accessory } from "./entities/accessory.entity";

@Module({
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
  imports: [TypeOrmModule.forFeature([Accessory])]
})
export class AccessoriesModule {}

