import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from './turma/entities/turma.entity';
import { GrupoPi } from './grupoPi/entities/grupoPi.entity';
import { TurmaModule } from './turma/turma.module';
import { GrupoPiModule } from './grupoPi/grupoPi.module';
import { Projeto } from './projeto/entities/projeto.entity';
import { projetoModule } from './projeto/projeto.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [Turma, GrupoPi, Projeto],
      synchronize: true,
    }),
    TurmaModule,
    GrupoPiModule,
    projetoModule

  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
