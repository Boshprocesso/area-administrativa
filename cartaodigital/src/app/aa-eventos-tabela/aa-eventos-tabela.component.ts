import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Input} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BeneficioUsuario } from '../dao/tiposJSON';

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

@Component({
  selector: 'app-aa-eventos-tabela',
  templateUrl: './aa-eventos-tabela.component.html',
  styleUrls: ['./aa-eventos-tabela.component.css']
})
export class AaEventosTabelaComponent implements OnInit {

  displayedColumns: string[] = ['excluir', 'evento', 'inicio', 'fim', 'menus'];

  @Input() objeto!: BeneficioUsuario; 

  dataSource = ELEMENT_DATA;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
