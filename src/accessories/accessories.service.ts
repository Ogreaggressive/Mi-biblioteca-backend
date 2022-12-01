import { Injectable } from '@nestjs/common';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
import { AccessoriesInterface } from './interfaces/accessories.interfaces';
import { InjectRepository } from "@nestjs/typeorm";
import { Accessory } from "./entities/accessory.entity";
import { Repository } from "typeorm";

@Injectable()
export class AccessoriesService {
    constructor(@InjectRepository(Accessory) private AccessoryRepository: Repository<Accessory>) {
    }
    create(createAccessoryDto: CreateAccessoryDto){
        
        return this.AccessoryRepository.save(createAccessoryDto);
    }
    find(id: number){
        return this.AccessoryRepository.findOne({where:{id:id}})
    }
    findAll(){
        return this.AccessoryRepository.find()
    }
    update(changedAccessoryDto: CreateAccessoryDto, id: number){
       this.AccessoryRepository.update(id,changedAccessoryDto);
        return changedAccessoryDto
    }
    delete(id: number){
        return this.AccessoryRepository.delete({id:id})
    }
}

