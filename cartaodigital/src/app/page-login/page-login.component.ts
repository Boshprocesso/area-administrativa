import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  public siteKey :string = "6LfSJpIdAAAAANur_uVIhISP7SWRlbhgl-GI3Xz3";

  showSpinner = false;
  
  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              viewportScroller: ViewportScroller,
              private _http:HttpClient
             ) {  
               viewportScroller.scrollToPosition([0,0]);
               
               }
  
  matricula?: string;
  nascimento?: string;

  formEnvio = this.formBuilder.group({
    cod: '',
    nascimento: '',
    recaptcha: ['', Validators.required]
  });

  ngOnInit(): void {
      this.loginService.validaLogin(this.router.url);
  }

  getLoginJSON(){
    var LOGINtemp = {
      "cod": this.formEnvio.controls['cod'].value,
      "nascimento": this.formEnvio.controls['nascimento'].value
    };

    return LOGINtemp;
  }

  login(): void {
    this.showSpinner = true;
    if(this.formEnvio.status=="VALID"){
      console.warn("Captcha Resolvido com Sucesso!");
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
              if(data[0].codFuncionario!=""){
                this.loginService.loginLocal = data[0];
                console.warn("Login realizado com sucesso!");
                this.router.navigate(["beneficios"]);
              }else{
                console.warn("Falha no login!");
                this.showSpinner = false;
              }
            }catch{
              console.warn("Falha requisição de Login!");
              location.reload();
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
