import { Component, OnInit } from '@angular/core';
import { LoginService } from '../dao/login.service';

@Component({
  selector: 'app-aa-eventos',
  templateUrl: './aa-eventos.component.html',
  styleUrls: ['./aa-eventos.component.css']
})
export class AaEventosComponent implements OnInit {
  public paginaRH = true;
  
  constructor(
              private loginService: LoginService,
  ) {   }

  ngOnInit(): void {
    try{
      this.paginaRH = this.loginService.loginLocal.login.administrativo;
    }catch{

    }
    
  }

}
