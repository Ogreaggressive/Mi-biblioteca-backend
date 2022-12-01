import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDogDto } from "./dto/create-dogs.dto";
import { DogsService } from "./dogs.service";

@Controller('dogs') // path
export class DogsController {
    constructor(private dogsService: DogsService) {
    }
    @Get() // PATH OPCIONAL
    findAll(): string {
        return 'Esta accion retorna todos los perros';
    }
   @Post()
    create(@Body() createDogDto: CreateDogDto){
        // return createDogDto;
        return this.dogsService.create(createDogDto);
    }
}

//ENDPOINT
//GET  PREFIJO DE PATH OPCIONAL + PATH OPCIONAL

