/* tslint:disable */
/* eslint-disable */
import { CompraIngressoDto } from './compra-ingresso-dto';
export interface CarrinhoCompraDto {
  codigo?: number;
  compraIngressoCarrinho?: Array<CompraIngressoDto>;
  precoFinal?: number;
}
