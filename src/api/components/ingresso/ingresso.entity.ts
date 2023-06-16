import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sessao} from '../sessao/sessao.entity';
import { Poltrona} from '../poltrona/poltrona.entity';

@Entity('ingressos')
export class  Ingresso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  codigo!: number;

  
  @IsOptional()
  @IsNumber()
  @Column({
    type: 'decimal',
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
  })
  valor!: number;

  @Column()
  data_hora!: Date;


  
  @ManyToOne(() => Sessao, { eager: true })
  @JoinColumn({
    name: 'sessao_id',
    referencedColumnName: 'id'
  })
  sessao!: Sessao;

  @ManyToOne(() => Poltrona, { eager: true })
  @JoinColumn({
    name: 'poltrona_id',
    referencedColumnName: 'id'
  })
  poltrona!: Poltrona;


}