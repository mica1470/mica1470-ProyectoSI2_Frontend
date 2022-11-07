import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AgregarfarmaciaComponent } from './admin/agregarfarmacia/agregarfarmacia.component';


@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    AgregarfarmaciaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
