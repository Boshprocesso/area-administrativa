import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Input} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BeneficioUsuario } from '../dao/tiposJSON';

export interface PeriodicElement {
  evento: string;
  position: number;
  inicio: number;
  fim: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, evento: 'Hydrogen', inicio: 1.0079, fim: 'H'},
  {position: 2, evento: 'Helium', inicio: 4.0026, fim: 'He'},
  {position: 3, evento: 'Lithium', inicio: 6.941, fim: 'Li'},
  {position: 4, evento: 'Beryllium', inicio: 9.0122, fim: 'Be'},
  {position: 5, evento: 'Boron', inicio: 10.811, fim: 'B'}
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
