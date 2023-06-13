import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sala } from '../sala/sala.entity';


@Entity('poltronas')
export class  Poltrona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  numero!: number;

  @Column()
  fileira!: number;

  @Column()
  coordenada!: string;

  @Column()
  status!: string;

  
  @ManyToOne(() => Sala, { eager: true })
  @JoinColumn({
    name: 'sala_id',
    referencedColumnName: 'id'
  })
  sala!: Sala;


}