import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Filme} from './filme.entity';


export class FilmeController {
  public async list(req: Request, res: Response) {

    const filmes = await AppDataSource.manager.find(Filme)

    return res.status(200).json({ dados: filmes, total: filmes.length });
  }


  public async create(req: Request, res: Response){

    //PEGANDO DADOS PARA CADASTRAR NOVO CLIENTE

  let {titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao} = req.body

    let film = new Filme();
    film.titulo  = titulo;
    film.sinopse  = sinopse;
    film.atores = atores;
    film.diretor = diretor;
    film.genero = genero;
    film.classificacao_indicativa = classificacao_indicativa;
    film.duracao  = duracao;


   // console.log(typeof cliente.valor)
    const _filme = await AppDataSource.manager.save(film);

    return res.status(201).json(_filme);
  }

  //CRIANDO UPDATE

  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const filme = await AppDataSource.manager.findOneBy(Filme, { id: cod });

    if (filme == null) {
      return res.status(404).json({ erro: 'Filme não encontrada!' });
    }

    let {titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao} = req.body
    filme.titulo = titulo;
    filme.sinopse = sinopse;
    filme.atores = atores;
    filme.diretor = diretor;
    filme.genero = genero;
    filme.classificacao_indicativa = classificacao_indicativa;
    filme.duracao = duracao;

    const filme_salva = await AppDataSource.manager.save(filme);

    return res.json(filme_salva);
  }

    //CRIANDO DELETE
  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const filme = await AppDataSource.manager.findOneBy(Filme, { id: cod });

    if (filme == null) {
      return res.status(404).json({ erro: 'Filme não encontrado!' });
    }

    await AppDataSource.manager.delete(Filme, filme);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const filme = await AppDataSource.manager.findOneBy(Filme, { id: cod });

    if (filme== null) {
      return res.status(404).json({ erro: 'Filme não encontrado!' });
    }

    return res.json(filme);
  }


}

