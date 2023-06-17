import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sala } from '../sala/sala.entity';


@Entity('poltronas')
export class  Poltrona {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsOptional()
  @IsNumber()
  @Column()
  numero!: number;

  @IsOptional()
  @IsNumber()
  @Column()
  fileira!: number;

  @IsOptional()
  @Column()
  coordenada!: string;

  @IsOptional()
  @Column()
  status!: string;

  
  @ManyToOne(() => Sala, { eager: true })
  @JoinColumn({
    name: 'sala_id',
    referencedColumnName: 'id'
  })
  sala!: Sala;


}