
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { GrupoPiService } from "../services/grupoPi.service";
import { GrupoPi } from "../entities/grupoPi.entity";
import { brotliDecompressSync } from "zlib";
import { DeleteDateColumn } from "typeorm";

@Controller("/grupos")
export class GrupoPiController {
    constructor(private readonly grupoPiService: GrupoPiService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<GrupoPi[]> {
        return this.grupoPiService.findAll();

    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<GrupoPi> {
        return this.grupoPiService.findById(id);
    }

    @Get('/grupo/:grupo')
    @HttpCode(HttpStatus.OK)
    findByGrupo(@Param('grupo') grupo: string): Promise<GrupoPi[]> {
        return this.grupoPiService.findByGrupo(grupo)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() grupo: GrupoPi): Promise<GrupoPi> {
        return this.grupoPiService.create(grupo)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() grupo: GrupoPi): Promise<GrupoPi> {
        return this.grupoPiService.update(grupo)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.grupoPiService.delete(id);
    }
}