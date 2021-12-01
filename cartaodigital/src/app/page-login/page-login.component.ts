import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  showSpinner = false;
  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              viewportScroller: ViewportScroller
             ) {  
               viewportScroller.scrollToPosition([0,0]);
               }
  
  matricula?: string;
  nascimento?: string;

  formEnvio = this.formBuilder.group({
    edv: '',
    nascimento: ''
  });

  ngOnInit(): void {
      this.loginService.validaLogin(this.router.url);
  }


  login(): void {
    this.showSpinner = true;
    if(this.formEnvio.status=="VALID"){
      this.initLogin(this.formEnvio.value);
    }else{
      console.warn('Verifique os valores digitados, estão errados!');
      this.showSpinner = false;
    }
  }

  initLogin(formularioLogin: any){
    this.loginService.postLogin(formularioLogin)
      .pipe(first())
      .subscribe({
          next: data => {
            try{
              if(data.login.codFuncionario!=""){
                this.loginService.loginLocal = data;
                console.warn("Login realizado com sucesso!");
                this.router.navigate(["beneficios"]);
              }else{
                console.warn("Falha no login!");
                this.showSpinner = false;
              }
            }catch{
              console.warn("Falha requisição de Login!");
              this.showSpinner = false;
            }

            console.log("Recebido o login do servidor:");
            console.warn(data);
            this.showSpinner = false;
          },
          error: error => {
              console.log(error.message);
              console.error('Falha no login!', error);
            }
      });
  }

}
