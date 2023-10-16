import { Component, OnInit } from '@angular/core';
import { CarrinhoCompraControllerService } from '../../../api/services/carrinho-compra-controller.service';
import { CompraIngressoControllerService } from '../../../api/services/compra-ingresso-controller.service';
import { IngressoControllerService } from '../../../api/services/ingresso-controller.service';
import { IngressoDto } from '../../../api/models/ingresso-dto';
import { CompraIngressoDto } from '../../../api/models/compra-ingresso-dto';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CarrinhoCompraDto } from '../../../api/models/carrinho-compra-dto';

@Component({
    selector: 'app-carrinho-compra-list',
    templateUrl: './carrinho-compra.component.html',
    styleUrls: ['./carrinho-compra.component.scss'],
})
export class CarrinhoCompraListComponent implements OnInit {
    adicionaCarrinho: {
        ingresso: IngressoDto;
        compraIngresso: CompraIngressoDto;

    }[] = [];
    ingressosFiltrados: {
        ingresso: IngressoDto;
        compraIngresso: CompraIngressoDto;
    }[] = [];
    carrinho: CarrinhoCompraDto[] = [];

    constructor(
        private carrinhoCompraService: CarrinhoCompraControllerService,
        private compraIngressoService: CompraIngressoControllerService,
        private ingressoService: IngressoControllerService
    ) {}

    ngOnInit(): void {
        this.getCarrinho();
    }





    public finalizarCompra() {
            const precoTotal = this.adicionaCarrinho.reduce((total, item) => {
                if (item.compraIngresso) {
                    return total + (item.compraIngresso.precoFinal || 0);
                }
                return total;
            }, 0);

            console.log('Preço total de todas as compras: R$', precoTotal);
        }

    private getCarrinho() {
        /*this.carrinhoCompraService.carrinhoCompraControllerListAll().pipe(
            switchMap((data: CarrinhoCompraDto) => {
                this.carrinho = data;
                const observables = data.map((carrinho) =>
                    this.getCompraIngressoPorIngresso(carrinho).pipe(
                        map((compraIngresso) => ({
                            carrinho,
                            compraIngresso: compraIngresso || {} as CompraIngressoDto
                        }))
                    )
                );
                return forkJoin(observables);
                }
            )
        )*/
    }

    private getCompraIngressoPorIngresso(carrinho: CarrinhoCompraDto): Observable<CompraIngressoDto | null> {
        if (carrinho.codigo) {
            return this.compraIngressoService.compraIngressoControllerObterPorId({ id: carrinho.codigo });
        }
        return of(null);
    }
}
