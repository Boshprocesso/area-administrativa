import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Input} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { AaEventosService } from '../dao/aa-eventos.service';
import { BeneficioUsuario } from '../dao/tiposJSON';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AaEventosBeneficiosComponent } from '../aa-eventos-beneficios/aa-eventos-beneficios.component';

export interface PeriodicElement {
  evento: string;
  position: number;
  inicio: string;
  fim: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, evento: 'Fim de Ano 2021', inicio: '19-12-2021', fim: '23-12-2021'},
  {position: 2, evento: 'Natal 2021', inicio: '24-12-2021', fim: '25-12-2021'},
  {position: 3, evento: 'Festa de Boas Vindas', inicio: '06-01-2022', fim: '08-01-2022'}
];

export type EventosJSON = {
  idEvento: number;
  nomeEvento: string;
  descricaoEvento: string;
  dataInicio: string;
  dataFim: string;
}

const eventoGet: EventosJSON[] = [
  {
      "idEvento":1,
      "nomeEvento": "Fim de Ano 2021",
      "descricaoEvento": "Evento que será realizado para os colaboradores fim de ano",
      "dataInicio": "2021-12-19",
      "dataFim": "2021-12-23"
  },
  {
      "idEvento":2,
      "nomeEvento": "Natal 2021",
      "descricaoEvento": "Evento para convidar os familiares e o papai noel irá distruibuir os presentes",
      "dataInicio": "2021-12-24",
      "dataFim": "2021-12-25"
  },
  {
      "idEvento":3,
      "nomeEvento": "Festa de Boas Vindas",
      "descricaoEvento": "Evento de boas vindas para os novos funcionarios da Bosch no ano de 2022",
      "dataInicio": "2022-01-08",
      "dataFim": "2022-01-10"
  }
]

@Component({
  selector: 'app-aa-eventos-tabela',
  templateUrl: './aa-eventos-tabela.component.html',
  styleUrls: ['./aa-eventos-tabela.component.css']
})
export class AaEventosTabelaComponent implements OnInit {

  displayedColumns: string[] = ['excluir', 'evento', 'inicio', 'fim', 'menus'];

  @Input() objeto!: BeneficioUsuario; 

  dataSource = eventoGet;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private eventoService: AaEventosService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //OpenDialog para controle
  openDialog(teste:any): void {
    const dialogRef = this.dialog.open( AaEventosBeneficiosComponent, 
                                        {
                                          width: '350px',
                                          data: {name: "Amadeu", quantidade: 3},
                                        }
                                      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      //this.animal = result;
    });
  }

  deleteEvento(id: number){ //****************** VALIDADO */
    alert("Será excluido o seguinte evento: " + id)
    this.eventoService.deleteEvento(id)
        .pipe(first())
        .subscribe(data => {
            console.log("Teste excluir objeto, resposta do servidor:");
            console.warn(data);
            if(data){
                console.warn("Excluido com sucesso!");
            }
          }
        );
  }

  //Utilizar o any temporariamente
  postEvento(objetoEvento: any){
    this.eventoService.postEvento(objetoEvento)
        .pipe(first())
        .subscribe(data => {
              console.log("Evento que foi postado");
              console.warn(data);
        });
  }

}
