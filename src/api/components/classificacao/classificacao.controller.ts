import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Classificacao } from './classificacao.entity';


export class ClassificacaoController {
  public async list(req: Request, res: Response) {

    const classificacoes = await AppDataSource.manager.find(Classificacao)

    return res.status(200).json({ dados: classificacoes, total: classificacoes.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {nome} = req.body

    let clas= new Classificacao();
    clas.nome  = nome;



   // console.log(typeof cliente.valor)
    const _classificacao = await AppDataSource.manager.save(clas);

    return res.status(201).json(_classificacao);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const classificacao = await AppDataSource.manager.findOneBy(Classificacao, { id: cod });

    if (classificacao == null) {
      return res.status(404).json({ erro: 'Classificação não encontrada!' });
    }

    let {nome} = req.body
    classificacao.nome = nome;

    const classificacao_salva = await AppDataSource.manager.save(classificacao);

    return res.json(classificacao_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const classificacao = await AppDataSource.manager.findOneBy(Classificacao, { id: cod });

    if (classificacao == null) {
      return res.status(404).json({ erro: 'Classificacao não encontrada!' });
    }

    await AppDataSource.manager.delete(Classificacao, classificacao);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const classificacao = await AppDataSource.manager.findOneBy(Classificacao, { id: cod });

    if (classificacao == null) {
      return res.status(404).json({ erro: 'Cliente não encontrado!' });
    }

    return res.json(classificacao);
  }


}

