import {Routes} from "@angular/router";
import {HomeCarrinhoCompraComponent} from "./home-carrinho-compra/home-carrinho-compra.component";
import {CarrinhoCompraListComponent} from "./carrinho-compra/carrinho-compra.component";



export const CarrinhoRoutingModule: Routes = [
    {
        path: "carrinhoCompra",
        component: HomeCarrinhoCompraComponent,
        children:[
            {
                path: "",
                component: CarrinhoCompraListComponent,
            },

        ]

    }
]
