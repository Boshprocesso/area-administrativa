import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficiosService } from 'src/app/services/beneficios.service';
import { IBeneficio } from 'src/app/services/beneficio.model';


@Component({
  selector: 'app-page-filtro-beneficios',
  templateUrl: './page-filtro-beneficios.component.html',
  styleUrls: ['./page-filtro-beneficios.component.css']
})
export class PageFiltroBeneficiosComponent implements OnInit {
  beneficios: IBeneficio[] = [];

  constructor(
    private route: ActivatedRoute,
    private beneficiosService: BeneficiosService
  ) { }

  ngOnInit(): void {
    console.log('CPF ou EDV resgatado da rota', this.route.snapshot.params['edvOuCpf']);
    this.beneficios = this.beneficiosService.getBeneficiosFAKE();
  }

  


}
