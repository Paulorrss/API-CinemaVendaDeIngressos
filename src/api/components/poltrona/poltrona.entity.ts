import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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


}