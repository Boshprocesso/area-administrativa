import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//Tipos de cada JSON que deseja ser recebido ou enviado.
import { BeneficiarioJSON, BeneficioEstrutura, BeneficioJSON, BeneficioUsuario, linkServidor, ConjuntoIlhaEvento, BeneficiosParaEntrega, LoginJSON } from './tiposJSON';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

var linkBaseAPI = 'http://localhost:4200/assets/api/';

linkBaseAPI = 'https://61a567484c822c00170421e7.mockapi.io/'

@Injectable({
  providedIn: 'root'
})

export class BeneficiosService {
  quantidade = 0;                           //Quantidade de beneficios que irá popular o Header
  beneficios: BeneficioUsuario[] = [];      //JSON de Beneficios que o usuário tem direito

  private httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
  };

  constructor(private loginService: LoginService,
              private http: HttpClient      //Coloca no Construtor agora o Http Client
              ) { }

  getQuantidadeBeneficios(){
    return this.quantidade;
  }

  acrescentaQuantidade(objeto:BeneficioEstrutura){
    if(objeto.status=="Pendente"){
      this.quantidade++;
    }
  }

  getTodosBeneficios(){
    var linkJSON = linkBaseAPI + 'beneficio';
    if(linkServidor!=null){
      linkJSON = linkServidor + this.loginService.chaveLogin().headers.cod;
  }
    
    console.log("Será enviado o seguinte link para o servidor para solicitar os beneficios");
    console.warn(linkJSON);

    return this.http.get<BeneficioJSON[]>(linkJSON);
  }

  //Função para obter os beneficiarios Cadastrados
  getBeneficiarios(){
    var linkJSON = linkBaseAPI + 'beneficiario';
    var linkJSONfinal = linkJSON + "/" + this.loginService.chaveLogin().headers.cod;
    
    console.log("Será enviado o seguinte link para o servidor para solicitar o terceiro:");
    console.warn(linkJSONfinal);

    return this.http.get<BeneficiarioJSON[]>(linkJSON);
  }

  //Função para obter os beneficiarios Cadastrados
  postBeneficiarios(headers: any){
    var linkJSON = linkBaseAPI + 'beneficiario';

    return this.http.post<BeneficiarioJSON>(linkJSON, headers);
  }

  //Função para obter os beneficiarios Cadastrados
  deleteBeneficiarios(id: string){
    var linkJSON = linkBaseAPI + 'beneficiario/' + id;
    var linkJSONfinal = linkJSON + "/delete/" + this.loginService.chaveLogin().headers.cod + "/" + id;

    console.log("Será enviado o seguinte link para o servidor para excluir o terceiro:");
    console.warn(linkJSONfinal);

    return this.http.delete(linkJSON);
  }

  getBeneficios(ilhaEvento: ConjuntoIlhaEvento, edvOuCpf: string): Observable<BeneficiosParaEntrega[]> {
    const url = `${linkServidor}${ilhaEvento.idEvento}/${ilhaEvento.idIlha}?identificacao=${edvOuCpf}`;
    return this.http.get<BeneficiosParaEntrega[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  postAlteraStatus(data: any): Observable<any> {
    const url = `${linkServidor}BeneficioEntregue`;
    return this.http.put<any>(url, data , this.httpOptions);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
}
