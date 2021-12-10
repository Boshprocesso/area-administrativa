import { Component, OnInit } from '@angular/core';
// injetar o servico

@Component({
  selector: 'app-ao-tela-coleta',
  templateUrl: './ao-tela-coleta.component.html',
  styleUrls: ['./ao-tela-coleta.component.css']
})
export class AoTelaColetaComponent implements OnInit {
  public acessaEntrega: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
