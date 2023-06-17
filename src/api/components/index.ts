import { Router } from 'express';
import { UserRoutes } from './user/user.routes';
import { BaseRoutes } from './base/base.routes';
import { ClienteRoutes } from './cliente/cliente.routes';
import { ClassificacaoRoutes } from './classificacao/classificacao.routes';
import {  FilmeRoutes } from './filme/filme.routes';
import {  SalaRoutes } from './sala/sala.routes';
import {  PoltronaRoutes } from './poltrona/poltrona.routes';
import {  Forma_PagamentoRoutes } from './forma_pagamento/forma_pagamento.routes';
import {  IngressoRoutes } from './ingresso/ingresso.routes';
import {  SessaoRoutes } from './sessao/sessao.routes';
import {  VendaRoutes } from './venda/venda.routes';


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
  router.use(`${prefix}/forma_pagamentos`,new Forma_PagamentoRoutes().routes());
  router.use(`${prefix}/ingressos`, new IngressoRoutes().routes());
  router.use(`${prefix}/sessoes`, new SessaoRoutes().routes());
  router.use(`${prefix}/venda`, new VendaRoutes().routes());
}
