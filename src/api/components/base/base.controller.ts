import { Request, Response } from 'express';

export class BaseController {
  
  public index(req: Request, res: Response) {
    res.status(200).json({ message: 'Api running....' });
  }

  public info(req: Request, res: Response) {
    res.status(200).json({
      name: 'API - CINEMA',
      mode: 'development',
      version: '1.0.0',
    });
  }
}
