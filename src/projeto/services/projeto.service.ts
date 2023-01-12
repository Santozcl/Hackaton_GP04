import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Projeto } from "../entities/projeto.entity";

@Injectable()
export class ProjetoService {
    nomeRepository: any;
    constructor(
        @InjectRepository(Projeto)
        private projetoRepository: Repository<Projeto>
    ) { }

    async findAll(): Promise<Projeto[]> {
        return await this.projetoRepository.find();
    }

    async findById(id: number): Promise<Projeto> {

        let projeto = await this.projetoRepository.findOne({
            where: {
                id
            }
        });

        if (!projeto)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND)
        return projeto;
    }

    async findByProjeto(nome: string): Promise<Projeto[]> {
        return await this.projetoRepository.find({
            where: {
                nomeProjeto: ILike(`%${nome}%`)
            }
        })

    }

    async create(projeto:Projeto): Promise<Projeto> {
        return await this.projetoRepository.save(projeto)
    }

    async update(projeto: Projeto): Promise<Projeto> {

        let buscaProjeto: Projeto = await this.findById(projeto.id)
        if (!buscaProjeto || !projeto.id)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.projetoRepository.save(projeto);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaProjeto: Projeto = await this.findById(id)

        if (!buscaProjeto)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.projetoRepository.delete(id)
    }

}
