import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes do Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';                           //Para utilizar os módulos
import {MatSidenavModule} from '@angular/material/sidenav';                     //Módulo para a sidebar de MENU
import {MatButtonModule} from '@angular/material/button';                       //Para deixar os botões com aparência melhor
import {MatBadgeModule} from '@angular/material/badge';                         //Para exibir o icone de qty ao lado do carrinho
import {MatCardModule} from '@angular/material/card';                           //Para os cards do produto
import {MatTabsModule} from '@angular/material/tabs';                           //Para exibir as abas dos produtos
import {MatGridListModule} from '@angular/material/grid-list';                  //Para a grade do FOOTER
import {MatListModule} from '@angular/material/list';                           //Para a lista no Footer
import {MatInputModule } from '@angular/material/input';                        //Para a tela de Login
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';    //Para a tela de Login
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaFooterComponent } from './tela-footer/tela-footer.component';
import { TelaHeaderComponent } from './tela-header/tela-header.component';
import { TelaSidenavComponent } from './tela-sidenav/tela-sidenav.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageBeneficiosComponent } from './page-beneficios/page-beneficios.component';

import { HttpClientModule } from '@angular/common/http';
import { PageBeneficiosTerceiroComponent } from './page-beneficios-terceiro/page-beneficios-terceiro.component';
import { PageBeneficiosTabelaComponent } from './page-beneficios-tabela/page-beneficios-tabela.component';
import { PageBeneficiosTerceiroFormComponent } from './page-beneficios-terceiro-form/page-beneficios-terceiro-form.component';
import { AaEventosComponent } from './aa-eventos/aa-eventos.component';

import { AaEventosTabelaComponent } from './aa-eventos-tabela/aa-eventos-tabela.component';
import { EventosCadastro } from './aa-eventos-tabela/evento-dialog';
import { EventosBeneficiosDialog, EventosBeneficioCadastro  } from './aa-eventos-tabela/beneficios.dialog';
import { UsuariosTabela } from './aa-eventos-usuarios/usuarios-tabela'; 
import { UsuarioDialog } from './aa-eventos-usuarios/usuarios-dialog';
import { UsuarioDialogBeneficiosInput } from './aa-eventos-usuarios/usuarios-dialog-beneficios';
import { UsuariosTabelaVazia } from './aa-eventos-usuarios/tela-usuarios-vazio';

import { TelaBloqueadaComponent } from './tela-bloqueada/tela-bloqueada.component';
import { AaXlsxConversorComponent } from './aa-xlsx-conversor/aa-xlsx-conversor.component';
import { AaEventosUsuariosComponent } from './aa-eventos-usuarios/aa-eventos-usuarios.component';
import { AoTelaColetaComponent } from './ao-tela-coleta/ao-tela-coleta.component';
import { PageEntregaBeneficioComponent } from './page-entrega-beneficio/page-entrega-beneficio.component';
import { PageFiltroBeneficiosComponent } from './page-entrega-beneficio/page-filtro-beneficios/page-filtro-beneficios.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    TelaFooterComponent,
    TelaHeaderComponent,
    TelaSidenavComponent,
    PageLoginComponent,
    PageBeneficiosComponent,
    PageBeneficiosTerceiroComponent,
    PageBeneficiosTabelaComponent,
    PageBeneficiosTerceiroFormComponent,
    AaEventosComponent,
    TelaBloqueadaComponent,
    AaEventosUsuariosComponent,
    AaEventosTabelaComponent,
    EventosBeneficiosDialog,
    EventosCadastro,
    AoTelaColetaComponent,
    PageEntregaBeneficioComponent,
    PageFiltroBeneficiosComponent,
    EventosBeneficioCadastro,
    EventosCadastro,
    UsuariosTabela,
    UsuarioDialog,
    UsuarioDialogBeneficiosInput,
    UsuariosTabelaVazia,
    AaXlsxConversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,  //Para poder usar o Slider, importar o módulo
    MatToolbarModule, //Para poder usar o módulo de Toolbar, necessita importar o módulo
    MatIconModule,     //Para utilizar os icones importar o módulo
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,       //Para o CRUD
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    DragDropModule,
    MatSlideToggleModule,
    NgxCaptchaModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
