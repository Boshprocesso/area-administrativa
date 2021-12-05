export type BeneficioEstrutura = {
    idProduto: number;
    beneficio: string;
    status: string;
    quantidade: number;
}

export type BeneficioUsuario = {
    codFuncionario: string;
    nomeFuncionario: string;
    beneficios: Array<BeneficioEstrutura>;
}

export type BeneficioJSON = {
    beneficios: BeneficioUsuario;
    terceiros: Array<BeneficioUsuario>;
}





export type BeneficiarioJSON = {
    identificacaoTerceiro: string;
    nomeTerceiro: string;
}





export type LoginJSON = {
    login: {
                codFuncionario: string,
                nomeFuncionario: string,
                nascimento: string,
                administrativo: boolean,
                entregaproduto: boolean
            }
}




export type EventosJSON = {
    idEvento: number;
    nomeEvento: string;
    descricaoEvento: string;
    dataInicio: string;
    dataFim: string;
  }


export type EventosBeneficioJSON = {
    idEvento: number;
    idProduto: string;
    beneficio: string;
}