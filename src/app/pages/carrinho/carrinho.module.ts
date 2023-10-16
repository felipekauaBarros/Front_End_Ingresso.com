import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CarrinhoRoutingModule} from "./carrinho-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {CarrinhoCompraListComponent} from "./carrinho-compra/carrinho-compra.component";
import {HomeCarrinhoCompraComponent} from "./home-carrinho-compra/home-carrinho-compra.component";



@NgModule({
  declarations: [
      CarrinhoCompraListComponent,
      HomeCarrinhoCompraComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(CarrinhoRoutingModule),
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        MatDividerModule,
        MatListModule,

    ]
})
export class CarrinhoModule { }
