import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {
  // trocar aqui pelo que vier do back
  private beneficios = [
    { idProduto: 1, beneficio: 'Cesta Fria', status: 'Pendente', quantidade: 1, funcionario: 'Joao', chave: '12345' },
    { idProduto: 2, beneficio: 'Kit Happy Hour', status: 'Pendente', quantidade: 1, funcionario: 'Maria', chave: '12345' },
    { idProduto: 3, beneficio: 'Cesta Seca', status: 'Pendente', quantidade: 1, funcionario: 'Jose', chave: '12345' },
  ];

  constructor() { }

  getBeneficios() {
    return this.beneficios;
  }

  getBeneficio(chave: string) {
    return this.beneficios.find((beneficio: any) => beneficio.chave === chave);
  }
}
