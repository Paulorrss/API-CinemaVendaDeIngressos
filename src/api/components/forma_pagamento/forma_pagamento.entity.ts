import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forma_pagamentos')
export class  Forma_Pagamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  nome!: string;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  ativado!: number;

}