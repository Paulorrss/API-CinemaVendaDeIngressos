import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sala')
export class  Sala {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsOptional()
  @Column()
  nome!: string;

  @IsOptional()
  @IsNumber()
  @Column()
  numero!: number;

  @IsOptional()
  @Column()
  capacidade!: string;

  @IsOptional()
  @Column()
  local!: string;


}