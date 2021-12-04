import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Inject} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { AaEventosService } from '../dao/aa-eventos.service';
import { BeneficioUsuario, EventosJSON } from '../dao/tiposJSON';

import {DialogRole, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aa-eventos-tabela',
  templateUrl: './aa-eventos-tabela.component.html',
  styleUrls: ['./aa-eventos-tabela.component.css']
})
export class AaEventosTabelaComponent implements OnInit {

  displayedColumns: string[] = ['excluir', 'evento', 'inicio', 'fim', 'menus'];
  dataSource = Array<EventosJSON>();

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private eventoService: AaEventosService,
              public dialog: MatDialog,
              private eventosService: AaEventosService
              ) { }

  ngOnInit(): void {
            this.getEventos();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //Atualiza o objeto "EVENTOS" da tela principal
  getEventos(){
    this.eventosService.getEvento()
    .pipe(first())
    .subscribe(data => {
        console.log("Obtendo os Eventos cadastrados...");
        console.warn(data);
        if(data.length>0){
          this.dataSource = data;
        }
      }
    );
  }

  //Função que irá chamar o Objeto de EVENTO DIALOG
  EventoDialog(acao:string, objEvento?:EventosJSON): void {
    const dialogRef = this.dialog.open( EventosCadastro, 
                                        {
                                          width: '350px',
                                          data: {tipo: acao, evento: objEvento}
                                        }
                                      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando a caixa de dialogo');
      this.getEventos();                          //Atualiza a página de eventos novamente
    });
  }
  

  
  //OpenDialog para controle
  beneficiosDialog(idEvento:number): void {
    const dialogRef = this.dialog.open( EventosBeneficiosDialog, 
                                        {
                                          width: '350px',
                                          data: idEvento,
                                        }
                                      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando a caixa de dialogo');
      console.log(result)
      //this.animal = result;
    });
  }

}

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

  constructor(
              @Inject(MAT_DIALOG_DATA) public data: eventoDialog,
              private eventoService: AaEventosService,
              public dialogRef: MatDialogRef<any>,
              public dialog: MatDialog,
              private formBuilder: FormBuilder
              ) {}

  ngOnInit(): void {
      if(this.data.evento){
        this.eventoLocal = this.data.evento;
        this.formEnvio.controls['evento'].setValue(this.eventoLocal.nomeEvento);
        this.formEnvio.controls['descricao'].setValue(this.eventoLocal.descricaoEvento);
        this.formEnvio.controls['dataInicio'].setValue(this.eventoLocal.dataInicio);
        this.formEnvio.controls['dataFim'].setValue(this.eventoLocal.dataFim);
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

  confirmarDialog():void{
    const dialogRef = this.dialog.open( EventosCadastro, 
      {
        width: '350px',
        data: {tipo: "confirmar"}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando a caixa de dialogo');
    });
  }

  getEstruturaEventoJSON(){
    var POSTevento = {
      "nomeEvento": "",
      "descricaoEvento": "",
      "dataInicio": "",
      "dataFim": ""
    };

    POSTevento.nomeEvento = this.formEnvio.controls['evento'].value;
    POSTevento.descricaoEvento = this.formEnvio.controls['descricao'].value;
    POSTevento.dataInicio = this.formEnvio.controls['dataInicio'].value;
    POSTevento.dataFim = this.formEnvio.controls['dataFim'].value;
    return POSTevento;
  }

  postEvento(){
    if(this.formEnvio.status=="VALID"){
      this.eventoService.postEvento(this.getEstruturaEventoJSON())
          .pipe(first())
          .subscribe(data => {
                console.log("Evento que foi postado");
                console.warn(data);
                this.dialogRef.close();
          });
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

//******************************************************* Componente para EXIBIR OS BENEFICIOS
@Component({
  selector: 'app-aa-eventos-beneficios-dialog',
  templateUrl: './aa-eventos-beneficios-dialog.html'
})
export class EventosBeneficiosDialog {
  beneficio = Array<any>();

  constructor(
              @Inject(MAT_DIALOG_DATA) public data: number,
              private eventoService: AaEventosService
              ) {}

  ngOnInit(): void {
    this.eventoService.getBeneficio(this.data)
        .pipe(first())
        .subscribe(data => {
            console.log("Obtendo os beneficios do Evento...");
            console.warn(data);
            if(data.length>0){
              this.beneficio = data;
            }
          }
        );
  }

  fecharDialog(){
    return "Fechando os beneficios";
  }
}