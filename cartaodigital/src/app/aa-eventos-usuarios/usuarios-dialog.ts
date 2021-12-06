import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosUsuariosJSON } from "../dao/tiposJSON";


export type usuariosDialog = {
    tipo: string;
    evento?: EventosUsuariosJSON;
  }
  
  //******************************************************* Componente para o CADASTRO DE NOVO EVENTO
  @Component({
    selector: 'usuarios-dialog',
    templateUrl: './usuarios-dialog.html',
    styleUrls: ['./usuarios-dialog.css']
  })
  export class UsuarioDialog {
    formEnvio = this.formBuilder.group({
      evento: '',
      descricao: '',
      dataInicio: '',
      dataFim: ''
    });
  
  eventoLocal ?: EventosUsuariosJSON;
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
        this.dialogRef.updateSize('80%', '80%');
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

    postUsuario(){

    }

    editarUsuario(){
      
    }
    
    deleteUsuario(){
      
    }
    fecharDialog(){
      return "Cancelado";
    }
  }