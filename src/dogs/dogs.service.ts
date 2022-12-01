import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dogs.dto';
import { DogsInterface } from './interfaces/dogs.interfaces';
import { InjectRepository } from "@nestjs/typeorm";
import { Dog } from "./entities/dog.entity";
import { Repository } from "typeorm";

@Injectable()
export class DogsService {
    constructor(@InjectRepository(Dog) private dogRepository: Repository<Dog>) {
    }
    create(createDogDto: CreateDogDto){
        return this.dogRepository.save(createDogDto);
    }
}
