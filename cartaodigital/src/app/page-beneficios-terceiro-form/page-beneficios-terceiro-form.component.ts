import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

import { BeneficiarioJSON } from '../dao/tiposJSON';
import { LoginService } from '../dao/login.service';
import { first } from 'rxjs/operators';
import { BeneficiosService } from '../dao/beneficios.service';

interface OpcoesForm {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-beneficios-terceiro-form',
  templateUrl: './page-beneficios-terceiro-form.component.html',
  styleUrls: ['./page-beneficios-terceiro-form.component.css']
})
export class PageBeneficiosTerceiroFormComponent implements OnInit {
  @Input() objeto!: BeneficiarioJSON;

  showSpinner = false;

  opcoesForm: OpcoesForm[] = [
    {value: 'cpf', viewValue: 'Somente CPF'},
    {value: 'colaborador', viewValue: 'Colaborador Bosch'}
  ];

  formEnvio = this.formBuilder.group({
    opcao: '',
    nome: '',
    edv: ''
  });
  
  opcaoSelecionada!:string;


  constructor(private router: Router,
              private loginService: LoginService,
              private beneficiosService: BeneficiosService,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
    if(this.objeto){
      this.formEnvio.controls['nome'].setValue(this.objeto.nomeTerceiro);
      this.formEnvio.controls['edv'].setValue(this.objeto.identificacaoTerceiro);
      
      this.formEnvio.controls['opcao'].disable();
      this.formEnvio.controls['nome'].disable();
      this.formEnvio.controls['edv'].disable();
    }
  }

  alteraSelecaoColaboradorCPF(event: MatOptionSelectionChange, state: any){
    if (event.source.selected) {
      //console.log('You selected: ' , state);
      this.opcaoSelecionada = state.value;
      //console.log(this.opcaoSelecionada);
      if(state.value != "cpf"){
        this.formEnvio.controls['nome'].disable();
      }else{
        this.formEnvio.controls['nome'].enable();
      }
    }
  }

  //Fun????o que ir?? ser invocada dentro do formul??rio.
  onSubmit(): void{
    //this.items = this.carrinhoService.limparCarrinho();
    this.showSpinner = true;
    if(this.objeto){
      this.deleteTerceiro();
    }else{
      this.postTerceiro();
    }
  }

  postTerceiro(){
    if(this.formEnvio.status=="VALID"){
      const headerMask = { 
        'cod': '',
        'nascimento': '',
        'opcaoSelecionada': '',
        'identificacaoTerceiro': '',
        'nomeTerceiro': '' 
      };
      headerMask.cod = this.loginService.chaveLogin().headers.cod;
      headerMask.nascimento = this.loginService.chaveLogin().headers.nascimento;

      headerMask.opcaoSelecionada = this.formEnvio.value.opcao;
      headerMask.identificacaoTerceiro = this.formEnvio.value.edv;

      if(this.formEnvio.value.nome){
        headerMask.nomeTerceiro = this.formEnvio.value.nome;
      }
      console.warn("O que ser?? enviado para o servidor?");
      console.warn(headerMask);

      this.beneficiosService.postBeneficiarios(headerMask)
                            .pipe(first())
                            .subscribe(data => {
                              console.log("Resultado servidor para o Post Beneficiario:");
                              console.warn(data);
                              this.router.navigate(["/cadastro_terceiro"]);  
                            });


    }else{
      
    }
    //this.formEnvio.reset();
  }

  deleteTerceiro(){
      var idBeneficiario = this.formEnvio.controls['edv'].value;
      
      this.beneficiosService.deleteBeneficiarios(idBeneficiario)
                            .pipe(first())
                            .subscribe(data => {
                              console.log("Resultado servidor para o Delete Beneficiario:");
                              console.warn(data);
                              this.router.navigate(["/cadastro_terceiro"]);  
                            });
  }
}