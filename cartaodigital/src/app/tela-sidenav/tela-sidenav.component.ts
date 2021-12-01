import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../dao/login.service';

@Component({
  selector: 'app-tela-sidenav',
  templateUrl: './tela-sidenav.component.html',
  styleUrls: ['./tela-sidenav.component.css']
})
export class TelaSidenavComponent implements OnInit {
  @Output() toggleSlider = new EventEmitter();  //Aqui para quando precisa conectar as duas interfaces do projeto
  @Output() pageRequest = new EventEmitter();  //Aqui para quando precisa conectar as duas interfaces do projeto

  constructor(
              private loginService: LoginService
             ) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
		this.toggleSlider.emit();
	}

  sairSistema(){
		this.toggleSlider.emit();
    this.loginService.cancelaLogin();
  }
}
