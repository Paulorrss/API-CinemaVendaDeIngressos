import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class  Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  sexo!: string;

  @Column()
  data_nascimento!: Date;

  @Column()
  cpf!: string;

  @Column()
  rg!: string;

  @Column()
  email!: string;

  @Column()
  endereco!: string;

  @Column()
  telefone!: string;

  @Column()
  cartao_sus!: string;

  @Column()
  tipagem_sanguinea!: string;

  @Column()
  fator_rh!: string;

}