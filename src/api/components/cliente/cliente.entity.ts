import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class  Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  nome!: string;

  @IsOptional()
  @Column()
  sexo!: string;

  @IsOptional()
  @IsDateString({ strict: true })
  @Column()
  data_nascimento!: Date;

  @IsOptional()
  @Column()
  cpf!: string;

  @IsOptional()
  @Column()
  rg!: string;

  @IsOptional()
  @Column()
  email!: string;

  @IsOptional()
  @Column()
  endereco!: string;

  @IsOptional()
  @Column()
  telefone!: string;

  @IsOptional()
  @Column()
  cartao_sus!: string;

  @IsOptional()
  @Column()
  tipagem_sanguinea!: string;

  @IsOptional()
  @Column()
  fator_rh!: string;

}