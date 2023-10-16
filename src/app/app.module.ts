import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {IngressoModule} from "./pages/tipo/ingresso.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import { ConfirmationDialog } from './core/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLineModule, MatNativeDateModule} from "@angular/material/core";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AppInterceptor} from "./arquitetura/app.interceptor";
import {SecurityInterceptor} from "./arquitetura/security/security.interceptor";
import {SecurityModule} from "./arquitetura/security/security.module";
import {MessageModule} from "./arquitetura/message/message.module";
import {AutenticacaoModule} from "./arquitetura/autenticacao/autenticacao.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoaderModule} from "./arquitetura/loader/loader.module";
import {LoaderDialogComponent} from "./arquitetura/loader-dialog/loader-dialog.component";
import {ValidationResourceProvider} from "./adminmodule/shared/validation/validation.resource";
import {AppMessage} from "./adminmodule/app.message";
import {ComprasModule} from "./pages/compras/compras.module";
import {CarrinhoModule} from "./pages/carrinho/carrinho.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialog, LoaderDialogComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    IngressoModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatLineModule,BrowserModule,
      ComprasModule,
      CarrinhoModule,
      LoaderModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      AutenticacaoModule,
      MessageModule.forRoot(),
      SecurityModule,//TODO conferir a configuração
      SecurityModule.forRoot({
          nameStorage: 'portalSSOSecurityStorage',
          loginRouter: '/acesso/login'
      }),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: SecurityInterceptor,
          multi: true
      },
      {
          provide: ValidationResourceProvider,
          useValue: AppMessage,
      }
  ],
  bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
