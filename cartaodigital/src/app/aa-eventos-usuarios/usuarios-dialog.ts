import { Component, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators  } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosUsuariosJSON } from "../dao/tiposJSON";
import {MatAccordion} from '@angular/material/expansion';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


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
    //Form Dynamic
    submitted = false;
    dynamicForm !: FormGroup;


    @ViewChild(MatAccordion) accordion!: MatAccordion;
    
    public usuarioLocal !: EventosUsuariosJSON;

    formEnvio = this.formBuilder.group({
      edv: '',
      nome: '',
      cpf: '',
      area: '',
      username: '',
      beneficio: '',
      quantidade: ''
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

      //Formulario Dinamico de Beneficios
      this.dynamicForm = this.formBuilder.group({
        numberOfTickets: ['', Validators.required],
        tickets: new FormArray([])
    });
    }
  
    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f["tickets"] as FormArray; }

    atualizaBeneficiosForm() {
      const numberOfTickets = 2 || 0;
          if (this.t.length < numberOfTickets) {
            for (let i = this.t.length; i < numberOfTickets; i++) {
                this.t.push(this.formBuilder.group({
                    name: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]]
                }));
            }
          } else {
              //for (let i = this.t.length; i >= numberOfTickets; i--) {
              //    this.t.removeAt(i);
              //}
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
      //console.warn(this.usuarioLocal);

      return "Cancelado";
    }
  }