import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './auth/administrador/administrador.component';
import { AgregarFarmaciaComponent } from './auth/agregar-farmacia/agregar-farmacia.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent, children: [
    { path: '', component: DashboardComponent},
    

  ]},
  { path: 'login', component: LoginComponent},
  { path: 'administrador', component: AdministradorComponent}, 
  { path: 'administrador/agregar', component: AgregarFarmaciaComponent},
  { path: '',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
