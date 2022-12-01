import { Body, Controller, Get, Post, Param, Delete, Put } from "@nestjs/common";
import { CreateAccessoryDto } from "./dto/create-accessory.dto";
import { AccessoriesService } from "./accessories.service";

@Controller('Accessories') // path
export class AccessoriesController {
    constructor(private AccessoriesService: AccessoriesService) {
    }
    @Get()
    findAll(){
        return this.AccessoriesService.findAll();
    }
    @Post()
    create(@Body() createAccessoryDto: CreateAccessoryDto){
        return this.AccessoriesService.create(createAccessoryDto);
    }
    @Get(':id') // PATH OPCIONAL
    find(@Param('id') id:number){
        return this.AccessoriesService.find(id);
    }
    @Put(':id') // PATH OPCIONAL
    update(@Body() changedAccessoryDto: CreateAccessoryDto, @Param('id') id:number){
        return this.AccessoriesService.update(changedAccessoryDto, id);
    }
    @Delete(':id') // PATH OPCIONAL
    delete(@Param('id') id:number){
        return this.AccessoriesService.delete(id);
    }
}

//ENDPOINT
//GET  PREFIJO DE PATH OPCIONAL + PATH OPCIONAL


