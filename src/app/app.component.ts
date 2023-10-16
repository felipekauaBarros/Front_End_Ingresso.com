import { Component } from '@angular/core';
import { ConfirmDialogComponent } from "./arquitetura/message/confirm-mesage/confirm-dialog.component";
import { MessageDialog, MessageItem, MessageService } from "./arquitetura/message/message.service";
import { User } from "./arquitetura/security/User";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoaderService } from "./arquitetura/loader/loader.service";
import { AutenticacaoService } from "./arquitetura/autenticacao/autenticacao.service";
import { SecurityService } from "./arquitetura/security/security.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderDialogComponent } from "./arquitetura/loader-dialog/loader-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'prog.web.ingressocinema.v2';
    private dialogRef: MatDialogRef<any> | null = null;

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private loaderService: LoaderService,
        private autenticationService: AutenticacaoService,
        private securityService: SecurityService,
        private snackBar: MatSnackBar,
        private messageService: MessageService,
    ) {}

    ngOnInit(): void {
        this.securityService.onRefresh.subscribe((refreshToken: string) => {
            this.autenticationService.refresh(refreshToken).subscribe(data => {
                if (data) {
                    const user: User = {
                        id: data.id,
                        nome: data.nome,
                        login: data.login,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                        expiresIn: data.expiresIn,
                        roles: data.roles
                    };
                    this.securityService.init(user);
                } else {
                    // Handle the case where 'data' is null or undefined
                    console.error("Invalid 'data' received from refresh.");
                }
            }, error => {
                console.log(error);
                this.messageService.addMsgInf(error);
            });
        });

        this.securityService.onForbidden.subscribe(() => {
            this.messageService.addMsgWarning("Sem acesso");
            this.router.navigate(['/acesso']);
        });

        this.securityService.onUnauthorized.subscribe(() => {
            this.messageService.addMsgWarning("Não autorizado!");
            this.router.navigate(['/acesso']);
            this.securityService.invalidate();
        });
        this.securityService.init();

        this.loaderService.onStart.subscribe(() => {
            if (!this.dialogRef) {
                this.dialogRef = this.dialog.open(LoaderDialogComponent, {
                    minWidth: '50px',
                    minHeight: '50px',
                    hasBackdrop: true,
                    disableClose: true
                });
            }
        });

        this.loaderService.onStop.subscribe(() => {
            if (this.dialogRef) {
                this.dialogRef.close();
                this.dialogRef = null;
            }
        });

        this.messageService.getConfirmEmitter().subscribe((item: MessageItem) => {
            if (item) {
                this.addConfirmItem(item);
            } else {
                console.error("Invalid 'item' received in messageService.");
            }
        });
    }

    /**
     * Adiciona o modal de confirmação a view.
     *
     * @param item
     */
    private addConfirmItem(item: MessageItem): void {
        if (item) {
            this.dialog.open(ConfirmDialogComponent, {
                minWidth: '30%',
                minHeight: '30%',
                disableClose: true,
                data: { item }
            });
        } else {
            console.error("Invalid 'item' received in addConfirmItem.");
        }
    }
}
