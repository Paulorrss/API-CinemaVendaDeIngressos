import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingresso} from '../ingresso/ingresso.entity';
import { Cliente} from '../cliente/cliente.entity';
import { Forma_Pagamento } from '../forma_pagamento/forma_pagamento.entity';


@Entity('venda')
export class  Venda {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsOptional()
  @IsNumber()
  @Column({
    type: 'decimal',
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
  })
  @Column()
  valor!: number;

  @IsOptional()
  @IsDateString({ strict: true })
  @Column()
  data_hora!: Date;

  @IsNotEmpty()
  @Column()
  situacao!: string;


  
  @ManyToOne(() => Ingresso, { eager: true })
  @JoinColumn({
    name: 'ingresso_id',
    referencedColumnName: 'id'
  })
  ingresso!: Ingresso;

  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn({
    name: 'cliente_id',
    referencedColumnName: 'id'
  })
  cliente!: Cliente;

  @ManyToOne(() => Forma_Pagamento, { eager: true })
  @JoinColumn({
    name: 'forma_pagamento_id',
    referencedColumnName: 'id'
  })
  forma_pagamento!: Forma_Pagamento;


}