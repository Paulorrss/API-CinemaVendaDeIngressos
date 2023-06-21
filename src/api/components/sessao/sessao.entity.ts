import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sala} from '../sala/sala.entity';
import { Filme} from '../filme/filme.entity';

@Entity('sessao')
export class  Sessao {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  @Column()
  data!: Date;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  @Column()
  horario_inicio!: Date;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  @Column()
  horario_fim!: Date;
  
  @ManyToOne(() => Sala, { eager: true })
  @JoinColumn({
    name: 'sala_id',
    referencedColumnName: 'id'
  })
  sala!: Sala;

  @ManyToOne(() => Filme, { eager: true })
  @JoinColumn({
    name: 'filme_id',
    referencedColumnName: 'id'
  })
  filme!: Filme;


}