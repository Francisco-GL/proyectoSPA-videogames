import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './consultas/contacto.component';
import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AboutComponent } from './about/about.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ayuda', component: AyudaComponent},
  { path: 'about', component: AboutComponent},
  { path: 'registro', component: RegistroComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
