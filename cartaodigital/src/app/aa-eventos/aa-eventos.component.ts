import { Component, OnInit } from '@angular/core';
import { LoginService } from '../dao/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aa-eventos',
  templateUrl: './aa-eventos.component.html',
  styleUrls: ['./aa-eventos.component.css']
})
export class AaEventosComponent implements OnInit {
  public paginaRH = true;
  
  constructor(
              private loginService: LoginService,
              private http: HttpClient
  ) {   }

  ngOnInit(): void {
    try{
      this.paginaRH = this.loginService.loginLocal.login.administrativo;
    }catch{

    }
    
  }

  enviarCarga(e:any) {
    let request = this.http.post<any>("https://61a95fa833e9df0017ea3da1.mockapi.io/api/payload", e);

    return request.subscribe()
  }
}
