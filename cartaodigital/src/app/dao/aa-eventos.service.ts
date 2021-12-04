import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeneficiarioJSON, EventosJSON, LoginJSON } from './tiposJSON';
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

//Função para coletar todos os eventos do servidor
getEvento(){
  var linkJSON = linkBaseAPI + 'evento';

  return this.http.get<EventosJSON[]>(linkJSON);
}

//Função para editar os eventos
postEvento(bodyJSON: any){
  var linkJSON = linkBaseAPI + 'evento';

  return this.http.post<EventosJSON>(linkJSON, bodyJSON);
}

//Função para editar os eventos
putEvento(bodyJSON: any, idEvento?:number){
  var linkJSON = linkBaseAPI + 'evento/' + idEvento;

  return this.http.put<EventosJSON>(linkJSON, bodyJSON);
}

//Função para efetuar a exclusão do evento no servidor
deleteEvento(id?: number){
  var linkJSON = linkBaseAPI + 'evento/' + id;

  return this.http.delete(linkJSON);
}

//Função para coletar todos os eventos do servidor
getBeneficio(idEvento:number){
  var linkJSON = linkBaseAPI + 'evento/' + idEvento + '/beneficios';

  return this.http.get<any[]>(linkJSON);
}

}
//https://bit.ly/projeto-capacit-2021-acompanhamento