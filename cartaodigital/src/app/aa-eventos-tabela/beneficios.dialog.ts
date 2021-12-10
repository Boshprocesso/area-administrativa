import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosBeneficioJSON } from "../dao/tiposJSON";
import { eventoDialog } from "./evento-dialog";


//******************************************************* Componente para EXIBIR OS BENEFICIOS
@Component({
    selector: 'app-beneficios-dialog',
    templateUrl: './beneficios-dialog.html',
    styleUrls: ['./beneficios-dialog.css']
  })
  export class EventosBeneficiosDialog {

    displayedColumns: string[] = ['excluir', 'beneficio', 'menus'];
    beneficioDB = Array<EventosBeneficioJSON>();
  
    constructor(
                @Inject(MAT_DIALOG_DATA) public data: eventoDialog,
                private eventoService: AaEventosService,
                public dialog: MatDialog
                ) {}
  
    ngOnInit(): void {
        this.updateBeneficio();
    }

    //Função que irá chamar o Objeto de EVENTO DIALOG
    BeneficioAcaoDialog(acao:string, objEvento?:EventosBeneficioJSON): void {
      const dialogRef = this.dialog.open( EventosBeneficioCadastro, 
                                          {
                                            width: '350px',
                                            data: {tipo: acao, idEvento: this.data.evento?.idEvento, beneficio: objEvento}
                                          }
                                        );

            dialogRef.afterClosed().subscribe(result => {
              //console.log('Fechando a caixa de Ações Beneficios');
              try{
                if(result.tipo=="confirmar"){
                  this.deleteBeneficio(result.beneficio)
                }
              }catch{

              }
              this.updateBeneficio();                          //Atualiza a página de eventos novamente
            });
    }

    deleteBeneficio(idBeneficio:string){//Inicializa os dados do beneficio com base no evento clicado.
      this.eventoService.deleteBeneficio(this.data.evento?.idEvento, idBeneficio)
          .pipe(first())
          .subscribe(data => {
              console.log("Excluindo o beneficio...");
              console.warn(data);
              this.updateBeneficio();                          //Atualiza a página de eventos novamente
            }
          );
    }

    updateBeneficio(){//Inicializa os dados do beneficio com base no evento clicado.
      this.eventoService.getBeneficio(this.data.evento?.idEvento)
          .pipe(first())
          .subscribe(data => {
              console.log("Obtendo os beneficios do Evento...");
              console.warn(data);
              if(data.length>0){
                this.beneficioDB = data;
              }else{
                this.beneficioDB.length = 0;
              }
            }
          );
    }
  
    fecharDialog(){
      return "Fechando os beneficios";
    }
  }

  export type eventoBeneficioDialog = {
    tipo: string;
    idEvento: string;
    beneficio?: EventosBeneficioJSON;
  }

//******************************************************* Componente para EDITAR E CRIAR BENEFICIOS
  @Component({
    selector: 'app-beneficios-dialog-crud',
    templateUrl: './beneficios-dialog-crud.html',
    styleUrls: ['./beneficios-dialog-crud.css']
  })
  export class EventosBeneficioCadastro {
    formEnvio = this.formBuilder.group({
      beneficio: ''
    });

    beneficioLocal?:string;
    formulario = true;

    constructor(
                @Inject(MAT_DIALOG_DATA) public data: eventoBeneficioDialog,
                public dialog: MatDialog,
                private formBuilder: FormBuilder,
                private eventoService: AaEventosService,
                public dialogRef: MatDialogRef<any>
                ) {}
  
    ngOnInit(): void {
      this.beneficioLocal = this.data.beneficio?.descricaoBeneficio;
      if(this.data.tipo=="excluir"){
        this.formEnvio.controls['beneficio'].disable();
      }
      if(this.data.beneficio){
        this.formEnvio.controls['beneficio'].setValue(this.data.beneficio.descricaoBeneficio);
      }
    }
  
    getEstruturaBeneficioJSON(){
      var POSTevento = {
        "descricaoBeneficio": ""
      };
  
      POSTevento.descricaoBeneficio = this.formEnvio.controls['beneficio'].value;
      return POSTevento;
    }

    postBeneficio(){
      if(this.formEnvio.status=="VALID"){
        this.eventoService.postBeneficio(this.getEstruturaBeneficioJSON(), this.data.idEvento)
            .pipe(first())
            .subscribe(data => {
                  console.log("Beneficio que foi criado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }
  
    editarBeneficio(){
      if(this.formEnvio.status=="VALID"){
        this.eventoService.putBeneficio(this.getEstruturaBeneficioJSON(), this.data.idEvento, this.data.beneficio?.idBeneficio)
            .pipe(first())
            .subscribe(data => {
                  console.log("Beneficio que foi editado");
                  console.warn(data);
                  this.dialogRef.close();
            });
      }
    }

    fecharDialog(confirmar?:boolean){
      if(confirmar){
        return {tipo: 'confirmar', beneficio: this.data.beneficio?.idBeneficio};
      }else{
        return {tipo: 'cancelar', beneficio: this.data.beneficio?.idBeneficio};
      }
    }
  }