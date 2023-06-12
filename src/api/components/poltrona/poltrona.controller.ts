import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Poltrona} from './poltrona.entity';


export class PoltronaController {
  public async list(req: Request, res: Response) {

    const poltronas = await AppDataSource.manager.find(Poltrona)

    return res.status(200).json({ dados: poltronas, total: poltronas.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {numero, fileira, coordenada, status} = req.body

    let polt = new Poltrona();
    polt.numero = numero;
    polt.fileira  = fileira;
    polt.coordenada = coordenada;
    polt.status = status;
  


   // console.log(typeof cliente.valor)
    const _poltrona = await AppDataSource.manager.save(polt);

    return res.status(201).json(_poltrona);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const poltrona = await AppDataSource.manager.findOneBy(Poltrona, { id: cod });

    if (poltrona == null) {
      return res.status(404).json({ erro: 'Poltrona não encontrada!' });
    }

    let {numero, fileira, coordenada, status} = req.body

    let polt = new Poltrona();
    poltrona.numero = numero;
    poltrona.fileira  = fileira;
    poltrona.coordenada = coordenada;
    poltrona.status = status;

    const poltrona_salva = await AppDataSource.manager.save(poltrona);

    return res.json(poltrona_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const poltrona = await AppDataSource.manager.findOneBy(Poltrona, { id: cod });

    if (poltrona == null) {
      return res.status(404).json({ erro: 'Poltrona não encontrada!' });
    }

    await AppDataSource.manager.delete(Poltrona, poltrona);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const poltrona = await AppDataSource.manager.findOneBy(Poltrona, { id: cod });

    if (poltrona == null) {
      return res.status(404).json({ erro: 'Poltrona não encontrada!' });
    }

    return res.json(poltrona);
  }


}