import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AboutComponent } from './about/about.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ayuda', component: AyudaComponent},
  { path: 'about', component: AboutComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'consultas', component: ConsultasComponent},
  { path: 'configuracion', component: ConfiguracionComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
