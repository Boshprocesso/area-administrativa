import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaEventosComponent } from './aa-eventos/aa-eventos.component';
import { PageBeneficiosTerceiroComponent } from './page-beneficios-terceiro/page-beneficios-terceiro.component';
import { PageBeneficiosComponent } from './page-beneficios/page-beneficios.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageEntregaBeneficioComponent } from './page-entrega-beneficio/page-entrega-beneficio.component';
import { PageFiltroBeneficiosComponent } from './page-entrega-beneficio/page-filtro-beneficios/page-filtro-beneficios.component';

//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {path: '', component: PageLoginComponent},
  {path: 'login', component: PageLoginComponent },
  {path: 'beneficios', component: PageBeneficiosComponent },
  {path: 'cadastro_terceiro', component: PageBeneficiosTerceiroComponent },
  {path: 'eventos', component: AaEventosComponent },
  {path: 'entrega_beneficios', component: PageEntregaBeneficioComponent},
  {path: 'entrega_beneficios/filtro_beneficios', component: PageFiltroBeneficiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
