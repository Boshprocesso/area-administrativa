import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//Para definir o serviço de acesso do banco de dados;
import { BeneficiosService } from '../dao/beneficios.service';
import { BeneficiarioJSON } from '../dao/tiposJSON';
import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-beneficios-terceiro',
  templateUrl: './page-beneficios-terceiro.component.html',
  styleUrls: ['./page-beneficios-terceiro.component.css']
})
export class PageBeneficiosTerceiroComponent implements OnInit {


  getBeneficiario !: BeneficiarioJSON;

  constructor(private router: Router,
              private loginService: LoginService,
              private beneficiosService: BeneficiosService,
              viewportScroller: ViewportScroller
             ) {  
               viewportScroller.scrollToPosition([0,0]);
               }
  
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;      //Aqui ele irá desabilitar o reuso do link para a função
    this.loginService.validaLogin(this.router.url);
    this.carregaBeneficiario();
    } 
    
  //Função que trata o JSON recebido pelo GET
  carregaBeneficiario(){
    //Obtém os valores para alimentar a página
    this.beneficiosService.getBeneficiarios()
        .pipe(first())
        .subscribe(data=>{    
          console.log("Imprimindo os beneficiarios");
          try{
            //console.log("Recebido os seguintes beneficiarios");
            //console.warn(data);
            if(data){
              
              this.getBeneficiario = data;
              //console.log(this.getBeneficiario);
            }
          }catch{
              
          }
          
          });
  }
}

