import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Sala} from './sala.entity';


export class SalaController {
  public async list(req: Request, res: Response) {

    const salas = await AppDataSource.manager.find(Sala)

    return res.status(200).json({ dados: salas, total: salas.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {nome, numero, capacidade, local} = req.body

    let sal = new Sala();
    sal.nome  = nome;
    sal.numero  = numero;
    sal.capacidade  = capacidade;
    sal.local  = local;



   // console.log(typeof cliente.valor)
    const _sala = await AppDataSource.manager.save(sal);

    return res.status(201).json(_sala);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const sala = await AppDataSource.manager.findOneBy(Sala, { id: cod });

    if (sala == null) {
      return res.status(404).json({ erro: 'Sala não encontrada!' });
    }

    let {nome, numero, capacidade, local} = req.body
    sala.nome = nome;
    sala.numero = numero;
    sala.capacidade = capacidade;
    sala.local = local;


    const sala_salva = await AppDataSource.manager.save(sala);

    return res.json(sala_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const sala = await AppDataSource.manager.findOneBy(Sala, { id: cod });

    if (Sala == null) {
      return res.status(404).json({ erro: 'Sala não encontrada!' });
    }

    await AppDataSource.manager.delete(Sala, sala);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const sala = await AppDataSource.manager.findOneBy(Sala, { id: cod });

    if (sala == null) {
      return res.status(404).json({ erro: 'Sala não encontrado!' });
    }

    return res.json(sala);
  }


}

