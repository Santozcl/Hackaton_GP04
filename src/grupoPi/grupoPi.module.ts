import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GrupoPi } from "./entities/grupoPi.entity";
import { GrupoPiService } from "./services/grupoPi.service";
import { GrupoPiController } from "./controllers/grupoPi.controller";

@Module({

    imports: [TypeOrmModule.forFeature([GrupoPi])],
    providers: [GrupoPiService],
    controllers: [GrupoPiController],
    exports: [TypeOrmModule]

})

export class GrupoPiModule { }