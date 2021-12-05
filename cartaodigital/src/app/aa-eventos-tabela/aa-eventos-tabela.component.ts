import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Inject} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { AaEventosService } from '../dao/aa-eventos.service';
import { EventosJSON } from '../dao/tiposJSON';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { EventosBeneficiosDialog } from './beneficios.dialog';
import { EventosCadastro } from './evento-dialog';

@Component({
  selector: 'app-aa-eventos-tabela',
  templateUrl: './aa-eventos-tabela.component.html',
  styleUrls: ['./aa-eventos-tabela.component.css']
})
export class AaEventosTabelaComponent implements OnInit {

  displayedColumns: string[] = ['excluir', 'evento', 'inicio', 'fim', 'menus'];
  dataSource = Array<EventosJSON>();

  constructor(private _liveAnnouncer: LiveAnnouncer,
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
        }else{
          this.dataSource.length = 0;
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
      //console.log('Fechando a caixa de dialogo');
      this.getEventos();                          //Atualiza a página de eventos novamente
    });
  }
    
  //OpenDialog para controle
  beneficiosDialog(objEvento:EventosJSON): void {
    const dialogRef = this.dialog.open( EventosBeneficiosDialog, 
                                        {
                                          width: '350px',
                                          data: {tipo: 'visualizar', evento: objEvento}
                                        }
                                      );

    dialogRef.afterClosed().subscribe(result => {
      //console.log('Fechando a caixa de dialogo');
      console.log(result)
    });
  }

}