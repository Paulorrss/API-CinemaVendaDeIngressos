import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forma_pagamentos')
export class  Forma_Pagamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  ativado!: number;

}