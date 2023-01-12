import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_grupopi" })
export class GrupoPi {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    NumeroDoGrupo: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    maisInfos: string

}
