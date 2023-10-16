import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeIngressoComponent} from "./home-ingresso/home-ingresso.component";
import {ListIngressoComponent} from "./list-ingresso/list-ingresso.component";
import {FormIngressoComponent} from "./form-ingresso/form-ingresso.component";
import {SecurityGuard} from "../../arquitetura/security/security.guard";

export const tipoRoutes: Routes = [
  {
    path: "ingresso",
    component: HomeIngressoComponent,
    children: [
      {
        path: "",
        component: ListIngressoComponent,
          canActivate: [SecurityGuard],
          data: {security: {roles: ['ROLE_ADMIN']}}
      },
      {
        path: "novo",
        component: FormIngressoComponent
      },
      {
        path: ":idCodigo",
        component: FormIngressoComponent
      }
    ]
  }
];

