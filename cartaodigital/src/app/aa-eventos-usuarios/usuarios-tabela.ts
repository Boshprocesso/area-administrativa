import { Component, Input, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosUsuariosJSON } from "../dao/tiposJSON";

@Component({
    selector: 'app-usuarios-tabela',
    templateUrl: './usuarios-tabela.html',
    styleUrls: ['./usuarios-tabela.css']
  })
  export class UsuariosTabela implements OnInit {
    @Input() idEvento!: number;                   //Numero do Evento vem com uma variavel de Input para trabalhar em cima da página.

    displayedColumns: string[] = ['excluir', 'edv', 'colaborador', 'cpf', 'area', 'user', 'beneficios', 'dataInclusao', 'menus'];
    dataSource = Array<EventosUsuariosJSON>();
    
    constructor(
                private eventosService: AaEventosService
                ) { }
  
    ngOnInit(): void {
      this.getColaboradores();
    }

    //Atualiza o objeto "EVENTOS" da tela principal
    getColaboradores(){
      this.eventosService.getColaboradores(this.idEvento)
      .pipe(first())
      .subscribe(data => {
          console.log("Obtendo os Usuarios cadastrados...");
          console.warn(data);
          if(data.length>0){
            this.dataSource = data;
          }else{
            this.dataSource.length = 0;
          }
        }
      );
    }
  }
  