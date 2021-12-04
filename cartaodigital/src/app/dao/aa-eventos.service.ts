import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeneficiarioJSON, LoginJSON } from './tiposJSON';
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

  return this.http.get<BeneficiarioJSON[]>(linkJSON);
}

//Função para editar os eventos
postEvento(headers: any){
  var linkJSON = linkBaseAPI + 'evento';

  return this.http.post<BeneficiarioJSON>(linkJSON, headers);
}

//Função para efetuar a exclusão do evento no servidor
deleteEvento(id: number){
  var linkJSON = linkBaseAPI + 'evento/' + id;

  return this.http.delete(linkJSON);
}

}
//https://bit.ly/projeto-capacit-2021-acompanhamento