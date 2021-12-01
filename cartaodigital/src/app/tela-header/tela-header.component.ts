import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto, carrinho, produtos  } from 'src/produtos';

//Servico de DAO - Banco de Dados
import { BeneficiosService } from '../dao/beneficios.service';

@Component({
  selector: 'app-tela-header',
  templateUrl: './tela-header.component.html',
  styleUrls: ['./tela-header.component.css']
})
export class TelaHeaderComponent implements OnInit {
  @Output() toggleSlider = new EventEmitter();  //Aqui para quando precisa conectar as duas interfaces do projeto
  
  constructor(private beneficiosService: BeneficiosService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
		this.toggleSlider.emit();
    console.log('Abrindo o menu');
	}

  //Função para exibir a quantidade de beneficios disponíveis, retorna do servico de Beneficios
  getQuantidadeBeneficios(){
    return this.beneficiosService.quantidade;
  }
}
