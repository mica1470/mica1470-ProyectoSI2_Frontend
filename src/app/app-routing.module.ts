import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './main/admin/admin.component';
import { AgregarfarmaciaComponent } from './main/admin/agregarfarmacia/agregarfarmacia.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'agregarfarmacia', component: AgregarfarmaciaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
