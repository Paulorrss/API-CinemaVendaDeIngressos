import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salas')
export class  Sala {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  numero!: number;

  @Column()
  capacidade!: string;

  @Column()
  local!: string;


}