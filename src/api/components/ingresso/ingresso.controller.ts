import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Ingresso} from './ingresso.entity';
import { Sessao } from '../sessao/sessao.entity';
import { Poltrona } from '../poltrona/poltrona.entity';


export class IngressoController {
  public async list(req: Request, res: Response) {

    const ingressos = await AppDataSource.manager.find(Ingresso)

    return res.status(200).json({ dados: ingressos, total: ingressos.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {codigo, valor, data_hora, sessao, poltrona} = req.body
    //sessao 
  if(sessao.id == undefined) {
    return res.status(404).json({ erro: 'Sessao inexistente'})
  }

  const _sessao = await AppDataSource.manager.findOneBy(Sessao, { id: sessao.id });

  if(_sessao == null) {
    return res.status(404).json({ erro: 'Sessao inexistente'})
  }

  //poltrona
  if(poltrona.id == undefined) {
    return res.status(404).json({ erro: 'Poltrona inexistente'})
  }

  const _poltrona = await AppDataSource.manager.findOneBy(Poltrona, { id: poltrona.id });

  if(_poltrona == null) {
    return res.status(404).json({ erro: 'Poltrona inexistente'})
  }

    let ing = new Ingresso();
    ing.codigo  = codigo;
    ing.valor = valor;
    ing.data_hora  = data_hora;
    ing.sessao  = _sessao;
    ing.poltrona  = _poltrona;



    const _ingresso = await AppDataSource.manager.save(ing);

    return res.status(201).json(_ingresso);
  }
 
  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const ingresso = await AppDataSource.manager.findOneBy(Ingresso, { id: parseInt(cod) });

    if (ingresso == null) {
      return res.status(404).json({ erro: 'Ingresso não encontrado!' });
    }

   
    let {codigo, valor, data_hora} = req.body
    ingresso.codigo  = codigo;
    ingresso.valor = valor;
    ingresso.data_hora  = data_hora;
   
  

    const ingresso_salvo = await AppDataSource.manager.save(ingresso);

    return res.json(ingresso_salvo);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const ingresso = await AppDataSource.manager.findOneBy(Ingresso, { id: parseInt(cod) });

    if (ingresso == null) {
      return res.status(404).json({ erro: 'Poltrona não encontrada!' });
    }

    await AppDataSource.manager.delete(Ingresso, ingresso);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;
    
    if(!Number.isInteger(parseInt(cod))) {
      return res.status(400).json();
    }
    const ingresso = await AppDataSource.manager.findOneBy(Ingresso, {id: parseInt(cod) });

    if (ingresso == null) {
      return res.status(404).json({ erro: 'Ingresso não encontrado!' });
    }

    return res.json(ingresso);
  }


}