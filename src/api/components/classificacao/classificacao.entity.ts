import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classificacao')
export class  Classificacao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;


}