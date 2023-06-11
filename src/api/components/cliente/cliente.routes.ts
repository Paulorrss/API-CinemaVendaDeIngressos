import { Router } from 'express';
import { ClienteController } from './cliente.controller';

export class ClienteRoutes {
  private router: Router = Router();

  private controller: ClienteController;

  constructor() {
    this.controller = new ClienteController();
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
