import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Cliente } from './cliente.entity';

export class ClienteController {
  public async list(req: Request, res: Response) {

    const clientes = await AppDataSource.manager.find(Cliente)

    return res.status(200).json({ dados: clientes, total: clientes.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh} = req.body

    let clie = new Cliente();
    clie.nome  = nome;
    clie.sexo = sexo;
    clie.data_nascimento = data_nascimento;
    clie.cpf= cpf;
    clie.rg = rg;
    clie.email = email;
    clie.endereco = endereco;
    clie.telefone = telefone;
    clie.cartao_sus = cartao_sus;
    clie.tipagem_sanguinea = tipagem_sanguinea;
    clie.fator_rh = fator_rh;


   // console.log(typeof cliente.valor)
    const _cliente = await AppDataSource.manager.save(clie);

    return res.status(201).json(_cliente);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const cliente = await AppDataSource.manager.findOneBy(Cliente, { id: parseInt(cod) });

    if (cliente == null) {
      return res.status(404).json({ erro: 'Cliente não encontrado!' });
    }

    let {nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh} = req.body

    cliente.nome = nome;
    cliente.sexo = sexo;
    cliente.data_nascimento = data_nascimento;
    cliente.cpf = cpf;
    cliente.rg = rg;
    cliente.email = email;
    cliente.endereco = endereco;
    cliente.telefone = telefone;
    cliente.cartao_sus = cartao_sus;
    cliente.tipagem_sanguinea = tipagem_sanguinea;
    cliente. fator_rh = fator_rh;
    

   

    const cliente_salvo = await AppDataSource.manager.save(cliente);

    return res.json(cliente_salvo);
  }

  //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const cliente = await AppDataSource.manager.findOneBy(Cliente, { id: parseInt(cod) });

    if (cliente == null) {
      return res.status(404).json({ erro: 'Cliente não encontrado!' });
    }

    await AppDataSource.manager.delete(Cliente, cliente);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    if(!Number.isInteger(parseInt(cod))) {
      return res.status(400).json();
    }

    const cliente = await AppDataSource.manager.findOneBy(Cliente, { id: parseInt(cod) });

    if (cliente == null) {
      return res.status(404).json({ erro: 'Cliente não encontrado!' });
    }

    return res.json(cliente);
  }


}

