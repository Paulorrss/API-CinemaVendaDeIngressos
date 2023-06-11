import { Router } from 'express';
import { ClassificacaoController } from './classificacao.controller';

export class ClassificacaoRoutes {
  private router: Router = Router();

  private controller: ClassificacaoController;

  constructor() {
    this.controller = new ClassificacaoController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    // this.router.get('/info', this.controller.info);

    this.router.put('/:cod', this.controller.update);
    this.router.delete('/:cod', this.controller.destroy);
    this.router.get('/:cod', this.controller.show);
  }

  public routes(): Router {
    return this.router;
  }
}
