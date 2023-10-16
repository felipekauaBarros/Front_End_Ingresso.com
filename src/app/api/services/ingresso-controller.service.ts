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

import { IngressoDto } from '../models/ingresso-dto';

@Injectable({
  providedIn: 'root',
})
export class IngressoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation ingressoControllerObterPorId
   */
  static readonly IngressoControllerObterPorIdPath = '/api/v1/ingresso/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerObterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerObterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerObterPorIdPath, 'get');
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
   * To access the full response (for headers, for example), `ingressoControllerObterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerObterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.ingressoControllerObterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ingressoControllerAlterar
   */
  static readonly IngressoControllerAlterarPath = '/api/v1/ingresso/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerAlterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingressoControllerAlterar$Response(params: {
    id: number;
    body: IngressoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerAlterarPath, 'put');
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
   * To access the full response (for headers, for example), `ingressoControllerAlterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingressoControllerAlterar(params: {
    id: number;
    body: IngressoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.ingressoControllerAlterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ingressoControllerRemover
   */
  static readonly IngressoControllerRemoverPath = '/api/v1/ingresso/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerRemover()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerRemover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerRemoverPath, 'delete');
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
   * To access the full response (for headers, for example), `ingressoControllerRemover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerRemover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.ingressoControllerRemover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ingressoControllerDesativar
   */
  static readonly IngressoControllerDesativarPath = '/api/v1/ingresso/{id}';

  /**
   * Método utilizado para desativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerDesativar()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerDesativar$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerDesativarPath, 'patch');
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
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * Método utilizado para desativar Tipo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ingressoControllerDesativar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerDesativar(params: {
    id: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.ingressoControllerDesativar$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation ingressoControllerListAll
   */
  static readonly IngressoControllerListAllPath = '/api/v1/ingresso';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerListAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerListAllPath, 'get');
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
   * To access the full response (for headers, for example), `ingressoControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerListAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.ingressoControllerListAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ingressoControllerIncluir
   */
  static readonly IngressoControllerIncluirPath = '/api/v1/ingresso';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerIncluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingressoControllerIncluir$Response(params: {
    body: IngressoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerIncluirPath, 'post');
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
   * To access the full response (for headers, for example), `ingressoControllerIncluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingressoControllerIncluir(params: {
    body: IngressoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.ingressoControllerIncluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation ingressoControllerAtualizarQuantidadeIngresso
   */
  static readonly IngressoControllerAtualizarQuantidadeIngressoPath = '/api/v1/ingresso/atualizar-quantidade';

  /**
   * Método utilizado para atualizar a quantidade de ingressos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerAtualizarQuantidadeIngresso()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerAtualizarQuantidadeIngresso$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerAtualizarQuantidadeIngressoPath, 'post');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * Método utilizado para atualizar a quantidade de ingressos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ingressoControllerAtualizarQuantidadeIngresso$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerAtualizarQuantidadeIngresso(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.ingressoControllerAtualizarQuantidadeIngresso$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation ingressoControllerAtivar
   */
  static readonly IngressoControllerAtivarPath = '/api/v1/ingresso/{id}/ativar';

  /**
   * Método utilizado para ativar Tipo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingressoControllerAtivar()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerAtivar$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IngressoControllerAtivarPath, 'patch');
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
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * Método utilizado para ativar Tipo
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ingressoControllerAtivar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingressoControllerAtivar(params: {
    id: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.ingressoControllerAtivar$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

}
