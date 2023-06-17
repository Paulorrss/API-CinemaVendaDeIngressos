import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Venda} from './venda.entity';
import { Ingresso } from '../ingresso/ingresso.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Forma_Pagamento } from '../forma_pagamento/forma_pagamento.entity';


export class VendaController {
  public async list(req: Request, res: Response) {

    const vendas = await AppDataSource.manager.find(Venda)

    return res.status(200).json({ dados: vendas, total: vendas.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {valor, data_hora, situacao, ingresso, cliente, forma_pagamento} = req.body
    //ingresso
  if(ingresso.id == undefined) {
    return res.status(404).json({ erro: 'Ingresso inexistente'})
  }

  const _ingresso = await AppDataSource.manager.findOneBy(Ingresso, { id: ingresso.id });

  if(_ingresso == null) {
    return res.status(404).json({ erro: 'Ingresso inexistente'})
  }

  //cliente
  if(cliente.id == undefined) {
    return res.status(404).json({ erro: 'Cliente inexistente'})
  }

  const _cliente = await AppDataSource.manager.findOneBy(Cliente, { id: cliente.id });

  if(_cliente == null) {
    return res.status(404).json({ erro: 'Cliente inexistente'})
  }
  //forma_pagamento
  if(forma_pagamento.id == undefined) {
    return res.status(404).json({ erro: 'Forma de Pagamento inexistente'})
  }

  const _forma = await AppDataSource.manager.findOneBy(Forma_Pagamento, { id: forma_pagamento.id });

  if(_forma == null) {
    return res.status(404).json({ erro: 'Forma de Pagamento inexistente'})
  }

    let ven = new Venda();
    ven.valor = valor;
    ven.data_hora = data_hora;
    ven.situacao  = situacao;
    ven.ingresso  = _ingresso;
    ven.cliente  = _cliente;
    ven.forma_pagamento = _forma;



    const _venda = await AppDataSource.manager.save(ven);

    return res.status(201).json(_venda);
  }
 
  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const venda = await AppDataSource.manager.findOneBy(Venda, { id: parseInt(cod) });

    if (venda == null) {
      return res.status(404).json({ erro: 'Venda não encontrada!' });
    }

   
    let {valor, data_hora, situacao} = req.body
    venda.valor = valor;
    venda.data_hora = data_hora;
    venda.situacao  = situacao;
  

    const venda_salva = await AppDataSource.manager.save(venda);

    return res.json(venda_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const venda = await AppDataSource.manager.findOneBy(Venda, { id: parseInt(cod) });

    if (venda == null) {
      return res.status(404).json({ erro: 'Venda não encontrada!' });
    }

    await AppDataSource.manager.delete(Venda, venda);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;
    
    if(!Number.isInteger(parseInt(cod))) {
      return res.status(400).json();
    }
    const venda = await AppDataSource.manager.findOneBy(Venda, {id: parseInt(cod) });

    if (venda == null) {
      return res.status(404).json({ erro: 'Venda não encontrada!' });
    }

    return res.json(Venda);
  }


}