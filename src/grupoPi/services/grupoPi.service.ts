import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GrupoPi } from "../entities/grupoPi.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class GrupoPiService {
    constructor(
        @InjectRepository(GrupoPi)
        private grupoPiRepository: Repository<GrupoPi>
    ) { }

    async findAll(): Promise<GrupoPi[]> {
        return await this.grupoPiRepository.find();
    }

    async findById(id: number): Promise<GrupoPi> {
        let grupoPi = await this.grupoPiRepository.findOne({
            where: {
                id
            }
        });

        if (!grupoPi)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND)
        return grupoPi
    }

    async findByGrupo(grupo: string): Promise<GrupoPi[]> {
        return await this.grupoPiRepository.find({
            where: {
                NumeroDoGrupo: ILike(`%${grupo}`)
            }
        })
    }

    async create(grupo: GrupoPi): Promise<GrupoPi> {
        return await this.grupoPiRepository.save(grupo)
    }

    async update(grupo: GrupoPi): Promise<GrupoPi> {

        let buscaGrupo: GrupoPi = await this.findById(grupo.id)
        if (!buscaGrupo || !grupo.id)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

        return await this.grupoPiRepository.save(grupo);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaGrupo: GrupoPi = await this.findById(id)

        if (!buscaGrupo)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

        return await this.grupoPiRepository.delete(id)
    }

}