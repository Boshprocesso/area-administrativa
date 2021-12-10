import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aa-eventos-usuarios',
  templateUrl: './aa-eventos-usuarios.component.html',
  styleUrls: ['./aa-eventos-usuarios.component.css']
})
export class AaEventosUsuariosComponent implements OnInit {
  public paginaRH = true;
  
  public idEventoRota = "";
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idEventoFromRoute = String(routeParams.get('idEvento'));
    this.idEventoRota = idEventoFromRoute;
  }

}