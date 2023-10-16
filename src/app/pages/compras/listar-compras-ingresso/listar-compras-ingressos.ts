import { Component, OnInit } from '@angular/core';
import { IngressoDto } from "../../../api/models/ingresso-dto";
import { IngressoControllerService } from "../../../api/services/ingresso-controller.service";
import {async, forkJoin, Observable, of} from "rxjs";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfirmationDialog, ConfirmationDialogResult } from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {Router, RouterLink} from "@angular/router";
import { CompraIngressoDto } from "../../../api/models/compra-ingresso-dto";
import { CompraIngressoControllerService } from "../../../api/services/compra-ingresso-controller.service";
import { map, switchMap } from "rxjs/operators";
import {CarrinhoCompraControllerService} from "../../../api/services/carrinho-compra-controller.service";
import {CarrinhoCompraDto} from "../../../api/models/carrinho-compra-dto";

@Component({
    selector: 'app-home-compras-ingressos',
    templateUrl: './listar-compras-ingressos.html',
    styleUrls: ['./listar-compras-ingressos.scss']
})
export class ListarComprasIngressos implements OnInit {
    controle = new FormControl();
    ingressos: IngressoDto[] = [];
    ingressosFiltrados: { ingresso: IngressoDto; compraIngresso: CompraIngressoDto }[] = [];
    nomeBusca = new FormControl();
    filtrarIngressos!: Observable<IngressoDto[]>;

    constructor(
        private ingressoService: IngressoControllerService,
        private compraIngressoService: CompraIngressoControllerService,
        private carrinhoCompraService: CarrinhoCompraControllerService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getCompraIngressos();
    }

    private getCompraIngressos() {
        this.ingressoService.ingressoControllerListAll().pipe(
            switchMap((data: IngressoDto[]) => {
                this.ingressos = data;
                const observables = data.map((ingresso) =>
                    this.getCompraIngressoPorIngresso(ingresso).pipe(
                        map((compraIngresso) => ({
                            ingresso,
                            compraIngresso: compraIngresso || {} as CompraIngressoDto
                        }))
                    )
                );
                return forkJoin(observables);
            })
        ).subscribe(
            (result: { ingresso: IngressoDto; compraIngresso: CompraIngressoDto }[]) => {
                this.ingressosFiltrados = result;
                console.log(JSON.stringify(this.ingressosFiltrados));
            },
            (error) => {
                console.log('Ocorreu um erro ao obter os ingressos e compras:', error);
            }
        );
    }


    private getCompraIngressoPorIngresso(ingresso: IngressoDto): Observable<CompraIngressoDto | null> {
        if (ingresso.idCodigo) {
            return this.compraIngressoService.compraIngressoControllerObterPorId({ id: ingresso.idCodigo });
        }
        return of(null);
    }

    public buscarIngresso() {
        const termoBusca = this.nomeBusca.value;
        if (typeof termoBusca === 'string') {
            const termoBuscaLowerCase = termoBusca.toLowerCase().trim();
            if (termoBuscaLowerCase) {
                this.ingressosFiltrados = this.ingressosFiltrados.filter((item) =>
                    this.displayFn(item.ingresso).toLowerCase().includes(termoBuscaLowerCase)
                );
            } else {
                this.getCompraIngressos();
            }
        }
    }

    public displayFn(ingresso: IngressoDto): string {
        if (ingresso && ingresso.descricaoIngresso && ingresso.nomeEvento) {
            return `${ingresso.descricaoIngresso} ${ingresso.nomeEvento}`;
        }
        return '';
    }

    public limparBusca() {
        this.nomeBusca.setValue('');
        this.controle.setValue('');
        this.buscarIngresso();
    }

    public aumentarQuantidade(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (ingresso.quantidadeIngresso !== undefined  && compraIngresso.quantidadeCompra !== undefined && ingresso.quantidadeIngresso > 0) {
            ingresso.quantidadeIngresso--;
            compraIngresso.quantidadeCompra++;
            this.valorUnitarioPorIngresso(ingresso, compraIngresso);
            console.log(ingresso);
        }
        else {
            this.showMensagemSimples("Quantidade esgotada para este ingresso ou quantidade máxima atingida.");
        }
    }


    public diminuirQuantidade(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (
            ingresso.quantidadeIngresso !== undefined &&
            compraIngresso.quantidadeCompra !== undefined &&
            compraIngresso.quantidadeCompra > 0

        ) {
            compraIngresso.quantidadeCompra--;
            ingresso.quantidadeIngresso++;
            this.valorUnitarioPorIngresso(ingresso, compraIngresso);
            this.atualizarQuantidadeBackend(ingresso, compraIngresso);
        }
        else {
            this.showMensagemSimples("Quantidade mínima atingida para este ingresso.");
        }
    }





    private valorUnitarioPorIngresso(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (compraIngresso && ingresso && ingresso.valorIngresso !== undefined) {
            compraIngresso.precoFinal = (compraIngresso.quantidadeCompra?.valueOf() || 0) * ingresso.valorIngresso;
            this.atualizarQuantidadeBackend(ingresso, compraIngresso);
        }
    }

    public adicionarCarrinho(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (compraIngresso?.quantidadeCompra !== undefined && compraIngresso?.precoFinal !== undefined && compraIngresso.quantidadeCompra > 0) {
            if (!compraIngresso.ingressoCarrinho) {
                const novoCarrinho: CarrinhoCompraDto = {
                };

                this.carrinhoCompraService.carrinhoCompraControllerIncluir({ body: novoCarrinho }).subscribe(
                    (carrinho) => {
                        compraIngresso.ingressoCarrinho = carrinho.id;
                        this.atualizarQuantidadeBackend(ingresso, compraIngresso);
                        this.showMensagemSimples("Compra adicionada no carrinho!!");
                    },
                    (error) => {
                        this.showMensagemSimples("Ocorreu um erro ao adicionar o carrinho: " + error);
                    }
                );
            } else {
                this.atualizarQuantidadeBackend(ingresso, compraIngresso);
                this.showMensagemSimples("Compra adicionada no carrinho!!");
            }
        } else {
            this.showMensagemSimples("Não é possível fazer a compra. A quantidade de compra deve ser maior que zero.");
        }
    }



    private atualizarQuantidadeBackend(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (ingresso.quantidadeIngresso !== undefined && compraIngresso.quantidadeCompra !== undefined) {
            const parametro = {
                ingressoId: ingresso.idCodigo || 0,
                compraIngressoid: compraIngresso.compraCodigo || 0,
                novaQuantidadeIngresso: ingresso.quantidadeIngresso || 0,
                novaQuantidadeCompra: compraIngresso.quantidadeCompra || 0
            };

            this.ingressoService.ingressoControllerAtualizarQuantidadeIngresso(parametro).subscribe(
                () => {
                    console.log('Quantidade atualizada com sucesso no backend!');
                },
                (error) => {
                    console.log('Erro ao atualizar a quantidade no backend:', error);
                }
            );
        }
    }


    public finalizarCompra(ingresso: IngressoDto, compraIngresso: CompraIngressoDto): void {
        this.showMensagemSimples("Valor total da sua compra é: R$ "  );
        this.router.navigate(["/carrinho"]);
    }

    public confirmarAcao(ingressoDto: IngressoDto, compraIngressoDto: CompraIngressoDto): void {
        if (!ingressoDto || !compraIngressoDto) {
            console.log('A compra de ingresso está vazia.');
            return;
        }

        const dialogRef = this.dialog.open(ConfirmationDialog, {
            data: {
                titulo: 'Mensagem!?',
                mensagem: `Adicionado no carrinho ${ingressoDto.descricaoIngresso}
                Valor do carrinho ${compraIngressoDto.precoFinal}
                Quantidade a comprar ${compraIngressoDto.quantidadeCompra} !!?`,
                textoBotoes: {
                    ok: 'Confirmar',
                    cancel: 'Cancelar',
                },
                dado: { ingressoDto, compraIngressoDto }
            },
        });

        dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
            if (confirmed?.resultado) {
                this.atualizarQuantidadeBackend(ingressoDto, compraIngressoDto);
                compraIngressoDto.quantidadeCompra = 0;
            }
        });
    }

    showMensagemSimples(mensagem: string, duracao: number = 7000) {
        this.snackBar.open(mensagem, 'Fechar', {
            duration: duracao,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }

    public removeCompraTotal(ingresso: IngressoDto, compraIngresso: CompraIngressoDto) {
        if (
            compraIngresso.quantidadeCompra !== 0 &&
            compraIngresso.quantidadeCompra !== undefined && compraIngresso.precoFinal !== undefined) {
            compraIngresso.precoFinal = 0;
            this.confirmarAcao(ingresso, compraIngresso);
        } else {
            this.showMensagemSimples("Não é possível fazer a compra. Informações incompletas.");
        }
    }

    private filtrar(): IngressoDto[] {
        const filtrarValor = this.normalizar(this.controle.value);
        return this.ingressos.filter(ingresso =>
            ingresso.descricaoIngresso && this.normalizar(ingresso.descricaoIngresso).includes(filtrarValor)
        );
    }

    private normalizar(value: string): string {
        if (value) {
            return value.toLowerCase().replace(/\s/g, '');
        }
        return '';
    }

    private filtrarIngresso() {
        /*this.controle.valueChanges.pipe(
            switchMap(value => {
                const filtrados = this.filtrar();
                return of(filtrados);
            })
        ).subscribe(filteredIngressos => {
            this.ingressosFiltrados = filteredIngressos.map(ingresso => {
                const compraIngresso = this.ingressosFiltrados.find(item => item.ingresso.idCodigo === ingresso.idCodigo)?.compraIngresso;
                return { ingresso, compraIngresso: compraIngresso || {} as CompraIngressoDto };
            });
        });*/
    }

    protected readonly RouterLink = RouterLink;
}
