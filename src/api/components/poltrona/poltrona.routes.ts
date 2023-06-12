import { Router } from 'express';
import { PoltronaController } from './poltrona.controller';

export class PoltronaRoutes {
  private router: Router = Router();

  private controller: PoltronaController;

  constructor() {
    this.controller = new PoltronaController();
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