import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBeneficiosTerceiroComponent } from './page-beneficios-terceiro/page-beneficios-terceiro.component';
import { PageBeneficiosComponent } from './page-beneficios/page-beneficios.component';
import { PageLoginComponent } from './page-login/page-login.component';

//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {path: '', component: PageLoginComponent},
  {path: 'login', component: PageLoginComponent },
  {path: 'beneficios', component: PageBeneficiosComponent },
  {path: 'cadastro_terceiro', component: PageBeneficiosTerceiroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
