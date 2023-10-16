/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { PessoaControllerService } from './services/pessoa-controller.service';
import { IngressoControllerService } from './services/ingresso-controller.service';
import { CompraIngressoControllerService } from './services/compra-ingresso-controller.service';
import { ClienteControllerService } from './services/cliente-controller.service';
import { CarrinhoCompraControllerService } from './services/carrinho-compra-controller.service';
import { AuthApiService } from './services/auth-api.service';
import { AdministradorControllerService } from './services/administrador-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PessoaControllerService,
    IngressoControllerService,
    CompraIngressoControllerService,
    ClienteControllerService,
    CarrinhoCompraControllerService,
    AuthApiService,
    AdministradorControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
