import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeneficiarioJSON, EventosBeneficioJSON, EventosJSON, EventosUsuariosJSON, linkServidor, LoginJSON , xlsxPayloadJSON} from './tiposJSON';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

var linkBaseAPI = 'http://localhost:4200/assets/api/';
linkBaseAPI = 'https://61a567484c822c00170421e7.mockapi.io/'

@Injectable({
  providedIn: 'root'
})
export class AaEventosService {

  constructor(
              private http: HttpClient,
              private loginService: LoginService
             ) { }

  //SERVICES PARA OS EVENTOS
  //Função para coletar todos os eventos do servidor
  getEvento(){                                                                              //************** Alterado servidor
    var linkJSON = linkBaseAPI + 'evento';

    if(linkServidor!=null){
      linkJSON = linkServidor + "eventos";
    }
    
    console.log("SERVICE - Evento GET:");
    console.warn(linkJSON);

    return this.http.get<EventosJSON[]>(linkJSON);
  }

  //Função para editar os eventos
  postEvento(bodyJSON: any){                                                                //************** Alterado servidor
    var linkJSON = linkBaseAPI + 'evento';

    if(linkServidor!=null){
      linkJSON = linkServidor + "adicionarEvento";
    }

    console.log("SERVICE - Evento POST:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.post<EventosJSON>(linkJSON, bodyJSON);
  }

  //Função para editar os eventos
  putEvento(bodyJSON: any, idEvento?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento;

    if(linkServidor!=null){
      linkJSON = linkServidor + "EditarEvento/evento/" + idEvento;
    }

    console.log("SERVICE - Evento PUT:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.put<EventosJSON>(linkJSON, bodyJSON);
  }

  //Função para efetuar a exclusão do evento no servidor
  deleteEvento(idEvento?: string){                                                           //************** Alterado servidor
    var linkJSON = linkBaseAPI + 'evento/' + idEvento;

    if(linkServidor!=null){
      linkJSON = linkServidor + "deletarEvento/" + idEvento;
    }

    console.log("SERVICE - Evento DELETE:");
    console.warn(linkJSON);

    return this.http.delete(linkJSON);
  }


  //SERVICES PARA OS BENEFICIOS DOS EVENTOS
  //Função para coletar todos os eventos do servidor
  getBeneficio(idEvento?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/beneficios';

    if(linkServidor!=null){
      linkJSON = linkServidor + "beneficiosEvento/" + idEvento;
    }

    console.log("SERVICE - Evento|Beneficio GET:");
    console.warn(linkJSON);

    return this.http.get<EventosBeneficioJSON[]>(linkJSON);
  }

  //Função para coletar todos os eventos do servidor
  deleteBeneficio(idEvento?:string, idBeneficio?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/beneficios/' + idBeneficio;

    if(linkServidor!=null){
      linkJSON = linkServidor + "deletarBeneficioEvento/evento/" + idEvento + "/beneficio/" + idBeneficio;
    }

    console.log("SERVICE - Evento|Beneficio DELETE:");
    console.warn(linkJSON);

    return this.http.delete(linkJSON);
  }

  //Função para editar os eventos
  postBeneficio(bodyJSON: any, idEvento?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/beneficios';

    if(linkServidor!=null){
      linkJSON = linkServidor + "adicionarBeneficioEvento/evento/" + idEvento;
    }

    console.log("SERVICE - Evento|Beneficio POST:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.post<EventosBeneficioJSON>(linkJSON, bodyJSON);
  }

  //Função para editar os eventos
  putBeneficio(bodyJSON: any, idEvento?:string, idBeneficio?:any){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/beneficios/' + idBeneficio;

    if(linkServidor!=null){
      linkJSON = linkServidor + "EditarBeneficio/evento/" + idEvento + "/beneficio/" + idBeneficio;
    }

    console.log("SERVICE - Evento|Beneficio PUT:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.put<EventosBeneficioJSON>(linkJSON, bodyJSON);
  }


  //SERVICES PARA OS BENEFICIOS DOS EVENTOS
  //Função para coletar todos os eventos do servidor
  getColaboradores(idEvento?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/colaboradores';

    if(linkServidor!=null){
      linkJSON = linkServidor + "colaboradoresEvento/" + idEvento;
    }

    console.log("SERVICE - Evento|Colaboradores GET:");
    console.warn(linkJSON);

    return this.http.get<EventosUsuariosJSON[]>(linkJSON);
  }

  //Função para excluir algum colaborador do Evento
  deleteColaboradores(idEvento:string, idColaborador?:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/colaboradores/' + idColaborador;

    console.log("SERVICE - Evento|Colaboradores DELETE:");
    console.warn(linkJSON);

    return this.http.delete('linkJSON');
  }

  //Função para inserir Colaboradores no Evento
  postColaboradores(bodyJSON: any, idEvento:string){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/colaboradores';

    console.log("SERVICE - Evento|Colaboradores POST:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.post<EventosUsuariosJSON>('linkJSON', bodyJSON);
  }

  //Função para editar os Colaboradores do Evento
  putColaboradores(bodyJSON: any, idEvento:string, idColaborador?:any){
    var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/colaboradores/' + idColaborador;

    console.log("SERVICE - Evento|Colaboradores PUT:");
    console.warn(linkJSON);
    console.warn(bodyJSON);

    return this.http.put<EventosUsuariosJSON>('linkJSON', bodyJSON);
  }


  
  enviarCarga(bodyJSON:xlsxPayloadJSON) {
    return this.http.post<JSON>("http://localhost:5127/CargaDeDados", bodyJSON)
  }
}
