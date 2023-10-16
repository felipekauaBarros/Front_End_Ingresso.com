import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {tipoRoutes} from "./pages/tipo/ingresso-routing.module";
import {Comprasroutes} from "./pages/compras/compras-routing.module";
import {AutenticacaoRoutes} from "./arquitetura/autenticacao/autenticacao.routing";
import {CarrinhoRoutingModule} from "./pages/carrinho/carrinho-routing.module";


const routes: Routes = [
    {
        path: "acesso",
        children: [
            ...AutenticacaoRoutes
        ]
    },
    {
        path: "",
        redirectTo: "",
        pathMatch: 'full'
    },
    {
        path: "",
        component: HomeComponent,
        children: [
            ...tipoRoutes,
            ...Comprasroutes,
            ...CarrinhoRoutingModule,
            { path: '', redirectTo: 'acesso', pathMatch: 'full' }
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
