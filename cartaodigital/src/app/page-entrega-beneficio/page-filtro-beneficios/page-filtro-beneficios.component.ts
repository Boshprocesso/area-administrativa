import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BeneficiosService } from 'src/app/services/beneficios.service';


@Component({
  selector: 'app-page-filtro-beneficios',
  templateUrl: './page-filtro-beneficios.component.html',
  styleUrls: ['./page-filtro-beneficios.component.css']
})
export class PageFiltroBeneficiosComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private beneficiosService: BeneficiosService
  ) { }

  ngOnInit(): void {
    console.log('CPF ou EDV resgatado da rota', this.route.snapshot.params['edvOuCpf']);
  }

  


}
