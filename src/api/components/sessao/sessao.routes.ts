import { Router } from 'express';
import { SessaoController } from './sessao.controller';

export class SessaoRoutes {
  private router: Router = Router();

  private controller: SessaoController;

  constructor() {
    this.controller = new SessaoController();
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