import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Turma } from "./entities/turma.entity";
import { TurmaService } from "./services/turma.service";
import { TurmaController } from "./controllers/turma.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Turma])],
    providers:[TurmaService],
    controllers:[TurmaController],
    exports:[TypeOrmModule]
})
export class TurmaModule{}