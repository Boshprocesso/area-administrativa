import { ViewportScroller } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { AaEventosService } from "../dao/aa-eventos.service";
import { EventosUsuariosJSON } from "../dao/tiposJSON";
import { UsuarioDialog } from "./usuarios-dialog";

@Component({
    selector: 'app-usuarios-tabela',
    templateUrl: './usuarios-tabela.html',
    styleUrls: ['./usuarios-tabela.css']
  })
  export class UsuariosTabela implements OnInit {
    @Input() idEvento!: number;                   //Numero do Evento vem com uma variavel de Input para trabalhar em cima da página.

    displayedColumns: string[] = ['excluir', 'edv', 'colaborador', 'cpf', 'area', 'user', 'beneficios', 'dataInclusao'];
    dataSource = Array<EventosUsuariosJSON>();
    
    constructor(
                public dialog: MatDialog,
                private eventosService: AaEventosService,
                viewportScroller: ViewportScroller
                ) {  
                  viewportScroller.scrollToPosition([0,0]);
                  }
  
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
          console.warn(data.length);
          if(data.length>0){
            this.dataSource = data;
          }else{
            this.dataSource.length = 0;
          }
        }
      );
    }

    //Função que irá chamar o Objeto de EVENTO DIALOG
  UsuarioDialog(acao:string, objEvento?:EventosUsuariosJSON): void {
    const dialogRef = this.dialog.open( UsuarioDialog, 
                                        {
                                          width: '350px',
                                          data: {tipo: acao, idEvento: this.idEvento, evento: objEvento}
                                        }
                                      );

    dialogRef.afterClosed().subscribe(result => {
      this.getColaboradores();                          //Atualiza a página de Usuarios Novamente
    });
  }
  }
  