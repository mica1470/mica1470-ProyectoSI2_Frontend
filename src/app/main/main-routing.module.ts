import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgregarfarmaciaComponent } from './admin/agregarfarmacia/agregarfarmacia.component';
const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'agregarfarmacia', component: AgregarfarmaciaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
