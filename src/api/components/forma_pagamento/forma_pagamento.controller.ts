import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Forma_Pagamento} from './forma_pagamento.entity';


export class Forma_PagamentoController {
  public async list(req: Request, res: Response) {

    const forma_pagamentos = await AppDataSource.manager.find(Forma_Pagamento)

    return res.status(200).json({ dados: forma_pagamentos, total: forma_pagamentos.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {nome, ativado} = req.body

    let form = new Forma_Pagamento();
    form.nome  = nome;
    form.ativado  = ativado;
    
    const erros = await validate(form);

    if(erros.length > 0) {
      return res.status(400).json(erros);
    }

   // console.log(typeof cliente.valor)
    const _forma = await AppDataSource.manager.save(form);

    return res.status(201).json(_forma);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const forma_pagamento = await AppDataSource.manager.findOneBy(Forma_Pagamento, { id: parseInt(cod) });

    if (forma_pagamento == null) {
      return res.status(404).json({ erro: 'Forma de Pagamento não encontrada!' });
    }

    let {nome, ativado} = req.body
    forma_pagamento.nome = nome;
    forma_pagamento.ativado = ativado;

    const forma_salva = await AppDataSource.manager.save(forma_pagamento);

    return res.json(forma_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const forma_pagamento = await AppDataSource.manager.findOneBy(Forma_Pagamento, { id: parseInt(cod)});

    if (forma_pagamento == null) {
      return res.status(404).json({ erro: 'Forma de pagamento não encontrada!' });
    }

    await AppDataSource.manager.delete(Forma_Pagamento, forma_pagamento);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    if(!Number.isInteger(parseInt(cod))) {
      return res.status(400).json();
    }

    const forma_pagamento = await AppDataSource.manager.findOneBy(Forma_Pagamento, { id: parseInt(cod)});

    if (forma_pagamento== null) {
      return res.status(404).json({ erro: 'Forma de Pagamento não encontrada!' });
    }

    return res.json(forma_pagamento);
  }


}

