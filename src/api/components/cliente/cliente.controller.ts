import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Cliente } from './cliente.entity';

export class ClienteController {
  public async list(req: Request, res: Response) {

    const clientes = await  await AppDataSource.manager.find(Cliente)

    res.status(200).json({ dados: clientes });
  }


  public async create(req: Request, res: Response){

    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;

    let clie = new Cliente();
    clie.nome  = nome;
    clie.cpf= cpf;
    clie.rg = rg;

   // console.log(typeof despesa.valor)
    const cliente_salvo = await AppDataSource.manager.save(clie);

    res.status(201).json(cliente_salvo);
  }
}
