import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosJSON } from "../dao/tiposJSON";


export type eventoDialog = {
    tipo: string;
    evento?: EventosJSON;
  }
  
  //******************************************************* Componente para o CADASTRO DE NOVO EVENTO
  @Component({
    selector: 'app-evento-dialog',
    templateUrl: './evento-dialog.html',
    styleUrls: ['./evento-dialog.css']
  })
  export class EventosCadastro {
    formEnvio = this.formBuilder.group({
      evento: '',
      descricao: '',
      dataInicio: '',
      dataFim: ''
    });
  
  eventoLocal ?: EventosJSON;
  formulario = true;
  autorizaPostEvento = true;
  tipoDeEvento = "";
  
    constructor(
                @Inject(MAT_DIALOG_DATA) public data: eventoDialog,
                private eventoService: AaEventosService,
                public dialogRef: MatDialogRef<any>,
                public dialog: MatDialog,
                private formBuilder: FormBuilder
                ) {  }
  
    ngOnInit(): void {
        if(this.data.evento){
          this.eventoLocal = this.data.evento;
          this.formEnvio.controls['evento'].setValue(this.eventoLocal.nomeEvento);
          this.formEnvio.controls['descricao'].setValue(this.eventoLocal.descricaoEvento);
          this.formEnvio.controls['dataInicio'].setValue(this.eventoLocal.dataInicio);
          this.formEnvio.controls['dataFim'].setValue(this.eventoLocal.dataTermino);
        }
        if(this.data.tipo == "excluir"){
          this.formEnvio.controls['evento'].disable();
          this.formEnvio.controls['descricao'].disable();
          this.formEnvio.controls['dataInicio'].disable();
          this.formEnvio.controls['dataFim'].disable();
        }
        if(this.data.tipo == "confirmar"){
          this.formulario = false;
        }
    }
  
    //Inicio da Caixa de Dialog
    confirmarDialog():void{
      const dialogRef = this.dialog.open( EventosCadastro, 
        {
          width: '350px',
          data: {tipo: "confirmar"}
        }
      );
  
      dialogRef.afterClosed().subscribe(result => {
        console.warn("Fechando a caixa de Confirmar");
        console.warn(result);
        if(result){
          if(this.tipoDeEvento=="POST"){
            this.postEventoService();
          }
        }
      });
    }

    resposta(status: boolean){
        return status;
    }
    //Fim da Caixa de Dialog
  
    getEstruturaEventoJSON(){
      var POSTevento = {
        "nomeEvento": "",
        "descricaoEvento": "",
        "dataInicio": "",
        "dataTermino": "",
        "inativo": "0"
      };
  
      POSTevento.nomeEvento = this.formEnvio.controls['evento'].value;
      POSTevento.descricaoEvento = this.formEnvio.controls['descricao'].value;
      POSTevento.dataInicio = this.formEnvio.controls['dataInicio'].value;
      POSTevento.dataTermino = this.formEnvio.controls['dataFim'].value;
      return POSTevento;
    }
  
    postEventoService(){
      this.eventoService.postEvento(this.getEstruturaEventoJSON())
                        .pipe(first())
                        .subscribe(data => {
                              console.log("Evento que foi postado");
                              console.warn(data);
                              this.dialogRef.close();
                        });
    }
    postEvento(){
      if(this.formEnvio.status=="VALID"){
        if(this.formEnvio.controls['dataInicio'].value>this.formEnvio.controls['dataFim'].value){
          this.confirmarDialog();
          if(this.autorizaPostEvento){
              this.tipoDeEvento="POST";
          }
        }else{
              this.postEventoService();
        }
      }
    }
  
    editarEvento(){
      if(this.formEnvio.status=="VALID"){
        this.eventoService.putEvento(this.getEstruturaEventoJSON(), this.data.evento?.idEvento)
            .pipe(first())
            .subscribe(data => {
                  console.log("Evento que foi editado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }
  
    deleteEvento(){
      console.warn("Excluindo o Evento: " + this.data.evento)
      this.eventoService.deleteEvento(this.data.evento?.idEvento)
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
  
    fecharDialog(){
      return "Cancelado";
    }
  }