import { Component, OnInit, Input} from '@angular/core';
import {  BeneficioUsuario } from 'src/app/dao/tiposJSON';

@Component({
  selector: 'app-page-beneficios-tabela',
  templateUrl: './page-beneficios-tabela.component.html',
  styleUrls: ['./page-beneficios-tabela.component.css']
})
export class PageBeneficiosTabelaComponent implements OnInit {
  //Colunas que deseja exibir na tabela
  displayedColumns: string[] = ['status', 'beneficio', 'quantidade'];

  @Input() objeto!: BeneficioUsuario;             //Esta parte é para o Input, quando a informação vem do pai para o filho

  constructor() { }

  ngOnInit(): void {

  }

}
