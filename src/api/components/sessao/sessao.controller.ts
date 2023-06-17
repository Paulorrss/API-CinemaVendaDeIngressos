import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Sessao} from './sessao.entity';
import { Sala } from '../sala/sala.entity';
import { Filme } from '../filme/filme.entity';


export class SessaoController {
  public async list(req: Request, res: Response) {

    const sessoes = await AppDataSource.manager.find(Sessao)

    return res.status(200).json({ dados: sessoes, total: sessoes.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {data, horario_inicio, horario_fim, sala, filme} = req.body
    //sala
  if(sala.id == undefined) {
    return res.status(404).json({ erro: 'Sala inexistente'})
  }

  const _sala = await AppDataSource.manager.findOneBy(Sala, { id: sala.id });

  if(_sala == null) {
    return res.status(404).json({ erro: 'Sala inexistente'})
  }

  //filme
  if(filme.id == undefined) {
    return res.status(404).json({ erro: 'Filme inexistente'})
  }

  const _filme = await AppDataSource.manager.findOneBy(Filme, { id: filme.id });

  if(_filme == null) {
    return res.status(404).json({ erro: 'Filme inexistente'})
  }

    let ses = new Sessao();
    ses.data  = data;
    ses.horario_inicio = horario_inicio;
    ses.horario_fim  = horario_fim;
    ses.sala  = _sala;
    ses.filme  = _filme;



    const _sessao = await AppDataSource.manager.save(ses);

    return res.status(201).json(_sessao);
  }
 
  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const sessao = await AppDataSource.manager.findOneBy(Sessao, { id: parseInt(cod) });

    if (sessao == null) {
      return res.status(404).json({ erro: 'Sessao não encontrada!' });
    }

   
    let {data, horario_inicio, horario_fim} = req.body
   
    sessao.data  = data;
    sessao.horario_inicio = horario_inicio;
    sessao.horario_fim  = horario_fim;
  

    const sessao_salva = await AppDataSource.manager.save(sessao);

    return res.json(sessao_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const sessao = await AppDataSource.manager.findOneBy(Sessao, { id: parseInt(cod) });

    if (sessao == null) {
      return res.status(404).json({ erro: 'Sessao não encontrada!' });
    }

    await AppDataSource.manager.delete(Sessao, sessao);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;
    
    if(!Number.isInteger(parseInt(cod))) {
      return res.status(400).json();
    }
    const sessao = await AppDataSource.manager.findOneBy(Sessao, {id: parseInt(cod) });

    if (sessao == null) {
      return res.status(404).json({ erro: 'Sessao não encontrada!' });
    }

    return res.json(sessao);
  }


}