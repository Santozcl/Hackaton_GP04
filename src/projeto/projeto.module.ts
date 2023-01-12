import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Projeto } from "./entities/projeto.entity";
import { ProjetoService } from "./services/projeto.service";
import { ProjetoController } from "./controllers/projeto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Projeto])],
    providers: [ProjetoService],
    controllers: [ProjetoController],
    exports: [TypeOrmModule]
})
export class projetoModule { }