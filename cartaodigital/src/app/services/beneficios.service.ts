import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBeneficio } from './beneficio.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {
  // trocar aqui pelo que vier do back
  private beneficios: IBeneficio[] = [
    { idBeneficio: '1', descricaoBeneficio: 'Cesta Fria', entregue: 0, quantidade: 1, nomeCompleto: 'Joao', chaveFuncionario: '12345' },
    { idBeneficio: '2', descricaoBeneficio: 'Kit Happy Hour', entregue: 0, quantidade: 2, nomeCompleto: 'Maria', chaveFuncionario: '12345' },
    { idBeneficio: '3', descricaoBeneficio: 'Cesta Seca', entregue: 1, quantidade: 1,  nomeCompleto: 'Jose', chaveFuncionario: '12345' },
    { idBeneficio: '1', descricaoBeneficio: 'Cesta Fria', entregue: 0, quantidade: 1, nomeCompleto: 'Joao', chaveFuncionario: '12345' },
    { idBeneficio: '2', descricaoBeneficio: 'Kit Happy Hour', entregue: 0, quantidade: 2, nomeCompleto: 'Maria', chaveFuncionario: '12345' },
    { idBeneficio: '3', descricaoBeneficio: 'Cesta Seca', entregue: 1, quantidade: 1,  nomeCompleto: 'Jose', chaveFuncionario: '12345' },
  ];

  api = 'https://exemplo.com/api/';

  constructor(private http: HttpClient) { }

  private httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
  };
  
  getBeneficios(): Observable<IBeneficio[]> {
    const url = `${this.api}edvOuCpf/`;
    return this.http.get<IBeneficio[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  postTerceiro(data: any): Observable<any> {
    const url = `${this.api}terceiro/`;
    return this.http.post<any>(url, data , this.httpOptions);
  }

  putBeneficio(data: any): Observable<any> {
    const url = `${this.api}idBeneficio`;
    return this.http.put<any>(url, data , this.httpOptions);
  }
  /*  -- usar o put para mudar para entregue
    {
      "idBeneficio": 'EG78-12EGA-134EAG',
      "entregue": 1,
      "chaveFuncionario": "89756432100”,
      "idBeneficiario"	: "CPF ou EDV"
    }
  */


  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }

  // usado somente para testes sem a requisição da API
  getBeneficiosFAKE() {
    return this.beneficios;
  }

  // usado somente para testes sem a requisição da API
  getBeneficioFAKE(chave: string) {
    return this.beneficios.find((beneficio: any) => beneficio.chave === chave);
  }
}
