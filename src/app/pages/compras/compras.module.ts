import { NgModule } from '@angular/core';
import { ComprarIngressosComponent } from './comprar-ingressos/comprar-ingressos.component';
import {RouterModule} from "@angular/router";
import {Comprasroutes} from "./compras-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ListarComprasIngressos} from "./listar-compras-ingresso/listar-compras-ingressos";
import {HomeCompraIngressoComponent} from "./home-compra-ingresso/home-compra-ingresso.component";
import {MatListModule} from "@angular/material/list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AsyncPipe, CommonModule} from "@angular/common";

@NgModule({
  declarations: [
      ListarComprasIngressos,
      HomeCompraIngressoComponent,
  ],
    imports: [
        RouterModule.forChild(Comprasroutes),
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        AsyncPipe,
        MatListModule,
        CommonModule

    ]
})
export class ComprasModule { }
