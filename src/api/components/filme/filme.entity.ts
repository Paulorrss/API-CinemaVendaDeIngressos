import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filmes')
export class  Filme {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  sinopse!: string;

  @Column()
  atores!: string;

  @Column()
  diretor!: string;

  @Column()
  genero!: string;

  @Column()
  classificacao_indicativa!: string;

  @Column()
  duracao!: Date;


}