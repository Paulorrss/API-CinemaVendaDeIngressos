import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filme')
export class  Filme {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  titulo!: string;

  @IsOptional()
  @Column()
  sinopse!: string;

  @IsOptional()
  @Column()
  atores!: string;

  @IsOptional()
  @Column()
  diretor!: string;

  @IsOptional()
  @Column()
  genero!: string;

  @IsOptional()
  @Column()
  classificacao_indicativa!: string;

  @IsOptional()
  @IsDateString({ strict: true })
  @Column()
  duracao!: Date;


}