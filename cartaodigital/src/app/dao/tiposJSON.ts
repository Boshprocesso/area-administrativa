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
                codFuncionario: string,
                nomeFuncionario: string,
                nascimento: string,
                administrativo: boolean,
                entregaproduto: boolean
}

export type xlsxPayloadJSON = {
    idEvento:String,
    beneficiarios:Array<any>,
    beneficios:Array<any>,
    beneficioBeneficiario: {
        [beneficio:string]: [{ cpf:String, quantidade:Number }?]
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
    idProduto: number;
    beneficio: string;
}






export type EventosUsuariosJSON = {
    idEvento: number;
    codFuncionario: string;
    nomeFuncionario: string;
    cpf: string;
    area: string;
    username: string;
    dataInclusao: string;
    beneficios: Array<BeneficioEstrutura>;
}