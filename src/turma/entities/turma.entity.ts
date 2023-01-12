import { IsNotEmpty } from "class-validator";
import { isNotEmpty } from "class-validator/types/decorator/decorators";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_turma" })
export class Turma {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    descricao: string

    @IsNotEmpty()
    @Column({ default: true })
    isAtivo: boolean

}