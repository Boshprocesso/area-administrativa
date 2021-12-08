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
    idEvento: number;
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
      username: ''
    });
  
  formulario = true;
  
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
          this.beneficioLocal = this.data.evento?.beneficios;
        }else{
          this.updateBeneficio();
        }
        this.formEnvio.controls['edv'].setValue(this.data.evento?.codFuncionario);
        this.formEnvio.controls['nome'].setValue(this.data.evento?.nomeFuncionario);
        this.formEnvio.controls['cpf'].setValue(this.data.evento?.cpf);
        this.formEnvio.controls['area'].setValue(this.data.evento?.area);
        this.formEnvio.controls['username'].setValue("n/a");
      }

      if(this.data.tipo=="editar"){
        this.formEnvio.controls['edv'].disable();
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
                  "idProduto": 0,
                  "beneficio": item.beneficio,
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
        "codFuncionario": "",
        "nomeFuncionario": "",
        "cpf": "",
        "area": "",
        "username": "",
        "dataInclusao": "",
        "beneficios": Array<BeneficioEstrutura>()
      };
      
      POSTusuario.codFuncionario = this.formEnvio.controls['edv'].value;
      POSTusuario.nomeFuncionario = this.formEnvio.controls['nome'].value;
      POSTusuario.cpf = this.formEnvio.controls['cpf'].value;
      POSTusuario.area = this.formEnvio.controls['area'].value;
      POSTusuario.username = this.formEnvio.controls['username'].value;
      POSTusuario.beneficios = this.beneficioLocal;

      //Efetua a leitura da Data e Hora atual e envia para o servidor
      var dataAtual = new Date(Date.now());
      var pipe = new DatePipe('en-US');
      var dataFormatada = pipe.transform(dataAtual, 'yyyy-MM-dd');
      if(dataFormatada){
        POSTusuario.dataInclusao = dataFormatada.toString();
      }
      return POSTusuario;
    }

    postUsuario(){
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
      if(this.formEnvio.status=="VALID"){
        this.eventoService.putColaboradores(this.getEstruturaEventoColaboradoresJSON(), this.data.idEvento, this.data.evento?.codFuncionario)
            .pipe(first())
            .subscribe(data => {
                  console.log("Colaborador que foi editado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }
    
    deleteUsuario(){
      console.log("Usuario Local DELETED");
      console.warn("ID: " + this.data.evento?.codFuncionario);
      console.warn("Excluindo o Evento: " + this.data.evento)
      this.eventoService.deleteColaboradores(this.data.idEvento, this.data.evento?.codFuncionario)
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