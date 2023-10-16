/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CarrinhoCompraDto } from '../models/carrinho-compra-dto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoCompraControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation carrinhoCompraControllerObterPorId
   */
  static readonly CarrinhoCompraControllerObterPorIdPath = '/api/v1/carrinhocompra/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerObterPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.carrinhoCompraControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerAlterar
   */
  static readonly CarrinhoCompraControllerAlterarPath = '/api/v1/carrinhocompra/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carrinhoCompraControllerAlterar$Response(params: {
    id: number;
    body: CarrinhoCompraDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerAlterarPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carrinhoCompraControllerAlterar(params: {
    id: number;
    body: CarrinhoCompraDto
  },
  context?: HttpContext

): Observable<any> {

    return this.carrinhoCompraControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerRemover
   */
  static readonly CarrinhoCompraControllerRemoverPath = '/api/v1/carrinhocompra/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerRemoverPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.carrinhoCompraControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerListAll
   */
  static readonly CarrinhoCompraControllerListAllPath = '/api/v1/carrinhocompra';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Listagem Geral
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.carrinhoCompraControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerIncluir
   */
  static readonly CarrinhoCompraControllerIncluirPath = '/api/v1/carrinhocompra';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carrinhoCompraControllerIncluir$Response(params: {
    body: CarrinhoCompraDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerIncluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carrinhoCompraControllerIncluir(params: {
    body: CarrinhoCompraDto
  },
  context?: HttpContext

): Observable<any> {

    return this.carrinhoCompraControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerDiminuirQuantidadeIngresso
   */
  static readonly CarrinhoCompraControllerDiminuirQuantidadeIngressoPath = '/api/v1/carrinhocompra/diminuirQuantidade/{compraIngressoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerDiminuirQuantidadeIngresso()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerDiminuirQuantidadeIngresso$Response(params: {
    compraIngressoId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerDiminuirQuantidadeIngressoPath, 'post');
    if (params) {
      rb.path('compraIngressoId', params.compraIngressoId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerDiminuirQuantidadeIngresso$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerDiminuirQuantidadeIngresso(params: {
    compraIngressoId: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.carrinhoCompraControllerDiminuirQuantidadeIngresso$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation carrinhoCompraControllerAumentarQuantidadeIngresso
   */
  static readonly CarrinhoCompraControllerAumentarQuantidadeIngressoPath = '/api/v1/carrinhocompra/aumentarQuantidade/{compraIngressoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carrinhoCompraControllerAumentarQuantidadeIngresso()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerAumentarQuantidadeIngresso$Response(params: {
    compraIngressoId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CarrinhoCompraControllerService.CarrinhoCompraControllerAumentarQuantidadeIngressoPath, 'post');
    if (params) {
      rb.path('compraIngressoId', params.compraIngressoId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carrinhoCompraControllerAumentarQuantidadeIngresso$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carrinhoCompraControllerAumentarQuantidadeIngresso(params: {
    compraIngressoId: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.carrinhoCompraControllerAumentarQuantidadeIngresso$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
