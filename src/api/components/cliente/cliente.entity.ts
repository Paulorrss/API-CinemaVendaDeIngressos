import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class  Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({type: 'decimal'})
  cpf!: number;

  @Column({type: 'decimal'})
  rg!: number;

  @Column()
  endereco!: string;

  @Column()
  email!: string;


  @Column()
  contato!: number;
}