import { Component, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators  } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { BeneficioEstrutura, EventosUsuariosJSON } from "../dao/tiposJSON";
import {MatAccordion} from '@angular/material/expansion';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DatePipe } from "@angular/common";


export type usuariosDialog = {
    tipo: string;
    idEvento: string;
    evento?: EventosUsuariosJSON;
  }
  
  //******************************************************* Componente para o CADASTRO DE NOVO EVENTO
  @Component({
    selector: 'usuarios-dialog',
    templateUrl: './usuarios-dialog.html',
    styleUrls: ['./usuarios-dialog.css']
  })
  export class UsuarioDialog {
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    
    public usuarioLocal !: EventosUsuariosJSON;
    public beneficioLocal:BeneficioEstrutura[] = [];

    formEnvio = this.formBuilder.group({
      edv: '',
      nome: '',
      cpf: '',
      area: '',
      dataNascimento: '',
      username: ''
    });
  
  formulario = true;
  showSpinner = false;
  
    constructor(
                @Inject(MAT_DIALOG_DATA) public data: usuariosDialog,
                private eventoService: AaEventosService,
                public dialogRef: MatDialogRef<any>,
                public dialog: MatDialog,
                private formBuilder: FormBuilder
                ) {}
  
    ngOnInit(): void {
      if(this.data.tipo!="excluir"){
        this.dialogRef.updateSize('80%');
      }
      
      if(this.data.evento){
        this.usuarioLocal = this.data.evento;
      }
      if(this.data){
        if(this.data.evento){
          this.beneficioLocal = this.data.evento?.listaBeneficios;
        }else{
          this.updateBeneficio();
        }
        this.formEnvio.controls['edv'].setValue(this.data.evento?.colaborador.edv);
        this.formEnvio.controls['nome'].setValue(this.data.evento?.colaborador.nomeCompleto);
        this.formEnvio.controls['cpf'].setValue(this.data.evento?.colaborador.cpf);
        this.formEnvio.controls['area'].setValue(this.data.evento?.colaborador.unidade);
        this.formEnvio.controls['dataNascimento'].setValue(this.data.evento?.colaborador.dataNascimento);
        this.formEnvio.controls['username'].setValue(this.data.evento?.colaborador.responsavelInclusao);
      }

      if(this.data.tipo=="editar"){
        this.formEnvio.controls['edv'].disable();
        this.formEnvio.controls['username'].disable();
      }

      if(this.data.tipo=="excluir"){
        this.formEnvio.controls['edv'].disable();
        this.formEnvio.controls['nome'].disable();
        this.formEnvio.controls['cpf'].disable();
        this.formEnvio.controls['area'].disable();
        this.formEnvio.controls['username'].disable();
      }
      
    }

    confirmarDialog():void{
      const dialogRef = this.dialog.open( UsuarioDialog, 
        {
          width: '350px',
          data: {tipo: "confirmar"}
        }
      );
  
      dialogRef.afterClosed().subscribe(result => {
        //console.log('Fechando a caixa de dialogo');
      });
    }

    updateBeneficio(){//Inicializa os dados do beneficio com base no evento clicado.
      this.eventoService.getBeneficio(this.data.idEvento)
          .pipe(first())
          .subscribe(data => {
              console.log("Obtendo os beneficios do Evento...");
              console.warn(data);
              data.forEach(item => {
                var BeneficioTemporario:BeneficioEstrutura = {
                  "idBeneficio": item.idBeneficio,
                  "descricaoBeneficio": item.descricaoBeneficio,
                  "status": "Pendente",
                  "quantidade": 0
                };

                this.beneficioLocal.push(BeneficioTemporario)
                console.log("Item: " + item)
              })
              if(data.length>0){
                //this.beneficioLocal = data;
              }else{
                //this.beneficioLocal.length = 0;
              }
            }
          );
    }

    getEstruturaEventoColaboradoresJSON(){
      var POSTusuario = {
        "eventoId": "",
        "colaborador":{
          "nomeCompleto": "",
          "dataNascimento": "",
          "edv": "",
          "cpf": "",
          "unidade": "",
          "dataInclusao": "",
          "responsavelInclusao": ""
        },
        "listaBeneficios": Array<BeneficioEstrutura>()
      };
      
      POSTusuario.eventoId = this.data.idEvento;
      POSTusuario.colaborador.edv = this.formEnvio.controls['edv'].value;
      POSTusuario.colaborador.nomeCompleto = this.formEnvio.controls['nome'].value;
      POSTusuario.colaborador.cpf = this.formEnvio.controls['cpf'].value;
      POSTusuario.colaborador.unidade = this.formEnvio.controls['area'].value;
      POSTusuario.colaborador.dataNascimento = this.formEnvio.controls['dataNascimento'].value;
      POSTusuario.colaborador.responsavelInclusao = this.formEnvio.controls['username'].value;
      POSTusuario.listaBeneficios = this.beneficioLocal;

      //Efetua a leitura da Data e Hora atual e envia para o servidor
      var dataAtual = new Date(Date.now());
      var pipe = new DatePipe('en-US');
      var dataFormatada = pipe.transform(dataAtual, 'yyyy-MM-dd');
      if(dataFormatada){
        POSTusuario.colaborador.dataInclusao = dataFormatada.toString();
      }
      return POSTusuario;
    }

    postUsuario(){
    this.showSpinner = true;
      if(this.formEnvio.status=="VALID"){
        this.eventoService.postColaboradores(this.getEstruturaEventoColaboradoresJSON(), this.data.idEvento)
            .pipe(first())
            .subscribe(data => {
                  console.log("Colaborador que foi postado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }

    editarUsuario(){
    this.showSpinner = true;
      if(this.formEnvio.status=="VALID"){
        this.eventoService.putColaboradores(this.getEstruturaEventoColaboradoresJSON(), this.data.idEvento, this.data.evento?.colaborador.edv)
            .pipe(first())
            .subscribe(data => {
                  console.log("Colaborador que foi editado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }
    
    deleteUsuario(){
      this.showSpinner = true;
      console.log("Usuario Local DELETED");
      console.warn("ID: " + this.data.evento?.colaborador.idBeneficiario);
      console.warn("Excluindo o Evento: " + this.data.evento)
      this.eventoService.deleteColaboradores(this.data.idEvento, this.data.evento?.colaborador.edv)
          .pipe(first())
          .subscribe(data => {
              console.log("Evento que foi excluido");
              console.warn(data);
              if(data){
                  console.warn("Excluido com sucesso!");
              }
              this.dialogRef.close();
            }
          );
    }
  
    deleteEvento(){
      
    }

    fecharDialog(){
      
      return "Cancelado";
    }
  }