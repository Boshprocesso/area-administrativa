import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficiosService } from 'src/app/dao/beneficios.service';
import { BeneficiosParaEntrega, BeneficioEntregue, ConjuntoIlhaEvento } from 'src/app/dao/tiposJSON';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-page-filtro-beneficios',
  templateUrl: './page-filtro-beneficios.component.html',
  styleUrls: ['./page-filtro-beneficios.component.css']
})
export class PageFiltroBeneficiosComponent implements OnInit {
  beneficios: BeneficiosParaEntrega[] = [];
  entrega: BeneficioEntregue = { idBeneficiario: '', idBeneficio: ''};  // irá vir do back futuramente
  edvOuCpfRota: string = '';

  constructor(
    private route: ActivatedRoute,
    private beneficiosService: BeneficiosService,
    private routeVolta: Router
  ) { }

  ngOnInit(): void {
    console.log('CPF ou EDV resgatado da rota', this.route.snapshot.params['edvOuCpf']);
    this.edvOuCpfRota = this.route.snapshot.params['edvOuCpf'];
    this.carregarDados(this.edvOuCpfRota);
    //this.setDumbData();
  }

  // alterar no back e chamar novamente o método que carrega os dados
  darBaixa(idBeneficiario: string, idBeneficio: string) {
    this.entrega.idBeneficiario = idBeneficiario;
    this.entrega.idBeneficio = idBeneficio;
    this.beneficiosService.postAlteraStatus(this.entrega)
      .pipe(first())
      .subscribe(data => {
          console.log("Entregando o beneficio...");
          console.warn(data);
          this.carregarDados(this.edvOuCpfRota);
        }
      );
    
  }

  carregarDados(edvOuCpfDaRota: string): void {
    var ilhaEvento: ConjuntoIlhaEvento = {
      idEvento: '3AB37867-12C4-467A-A897-36D32A2FBC65',  // irá vir do back futuramente
      idIlha: '47992B34-AD6C-4E4A-A3CA-56A8AECCACB9',   // irá vir do back futuramente
    }
    this.beneficiosService.getBeneficios(ilhaEvento, edvOuCpfDaRota).subscribe(res => {
      console.log("Dados vindos do servidor: ", res)
      this.beneficios = res;
    });
  }

  retornar(){
    this.routeVolta.navigate(['/entrega_beneficios']);
  }

  setDumbData(){
    this.beneficios = [
      {
        "beneficio": "Cesta Fria",
        "idBeneficio": "gagagaga",
        "quantidade": 1,
        "entregue": 1,
        "idBeneficiario": "3454-gaage3-aga3",
        "beneficiario": "ABNER BUENO"
      },
      {
        "beneficio": "Cesta Fria",
        "idBeneficio": "gagagaga",
        "quantidade": 2,
        "entregue": 0,
        "idBeneficiario": "3454-gaage3-aga3",
        "beneficiario": "ABNER BUENO"
      },
      {
        "beneficio": "Cesta Fria",
        "idBeneficio": "gagagaga",
        "quantidade": 3,
        "entregue": 0,
        "idBeneficiario": "3454-gaage3-aga3",
        "beneficiario": "ABNER BUENO"
      },
    ]
  }

}
