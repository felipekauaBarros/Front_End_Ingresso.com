/* tslint:disable */
/* eslint-disable */
import { IngressoDto } from './ingresso-dto';
export interface CompraIngressoDto {
  caminhoImagemIngresso?: string;
  carrinhoCodigo?: number;
  compraCodigo?: number;
  ingressoCarrinho?: Array<IngressoDto>;
  precoFinal?: number;
  precoUnitario?: number;
  quantidadeCompra?: number;
}
