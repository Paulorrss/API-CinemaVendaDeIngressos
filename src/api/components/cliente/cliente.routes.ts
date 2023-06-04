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
  }

  public routes(): Router {
    return this.router;
  }
}
