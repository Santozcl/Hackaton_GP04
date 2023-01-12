import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TurmaService } from "../services/turma.service";
import { Turma } from "../entities/turma.entity";

@Controller("/turmas")
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Turma[]> {

        return this.turmaService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() turma: Turma): Promise<Turma> {
        return this.turmaService.create(turma)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() turma: Turma): Promise<Turma> {
        return this.turmaService.update(turma)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.turmaService.delete(id)
    }
}