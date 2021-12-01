import { ValueConverter } from '@angular/compiler/src/render3/view/template';

import { Component, OnInit } from '@angular/core';
import { Produto, carrinho, produtos  } from 'src/produtos'; //Importa a biblioteca de Produtos

//Servico de DAO - Banco de Dados
import { BeneficiosService } from '../dao/beneficios.service';
import { BeneficioUsuario } from '../dao/tiposJSON';
import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-beneficios',
  templateUrl: './page-beneficios.component.html',
  styleUrls: ['./page-beneficios.component.css']
})
export class PageBeneficiosComponent implements OnInit {
  //Servico entre Front e Back-end
  beneficios: BeneficioUsuario[] = [];      //JSON de Beneficios que o usuário tem direito


  constructor(
              private router: Router,
              private loginService: LoginService,
              private beneficiosService: BeneficiosService,
              viewportScroller: ViewportScroller
             ) {  
               viewportScroller.scrollToPosition([0,0]);
               }

  ngOnInit(): void {
            this.loginService.validaLogin(this.router.url);
            this.carregaBeneficios();
  }

  //Função que trata o JSON recebido pelo GET
  carregaBeneficios(){
    //Obtém os valores para alimentar a página
    this.beneficiosService.getTodosBeneficios()
        .pipe(first())
        .subscribe(data=>{    
            console.log(data.beneficios);
            console.log(data.terceiros);
            this.beneficios.length = 0;
            this.beneficios.push(data.beneficios);
            data.terceiros.forEach((item) => {
              this.beneficios.push(item);                     //Insere o item recebido do JSON no vetor local para trabalhar somente com o tipo de dado BeneficioUsuario
            });
          });
  }

}
