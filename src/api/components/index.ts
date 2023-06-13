import { Router } from 'express';
import { UserRoutes } from './user/user.routes';
import { BaseRoutes } from './base/base.routes';
import { ClienteRoutes } from './cliente/cliente.routes';
import { ClassificacaoRoutes } from './classificacao/classificacao.routes';
import {  FilmeRoutes } from './filme/filme.routes';
import {  SalaRoutes } from './sala/sala.routes';
import {  PoltronaRoutes } from './poltrona/poltrona.routes';

/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
  router.use(`${prefix}/users`, new UserRoutes().routes());
  router.use(`${prefix}/clientes`, new ClienteRoutes().routes());
  router.use(`${prefix}/classificacoes`, new ClassificacaoRoutes().routes());
  router.use(`${prefix}/filmes`, new FilmeRoutes().routes());
  router.use(`${prefix}/salas`, new SalaRoutes().routes());
  router.use(`${prefix}/poltronas`, new PoltronaRoutes().routes());
}
